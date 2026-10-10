import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import type { IncomingMessage, ServerResponse } from 'node:http'
import { fileURLToPath } from 'node:url'
import { build, type Plugin } from 'vite'

/**
 * Serves the pixel-perfect clone (../masglobaltrade) under /originale so the hub
 * can link to it next to the redesigns. The clone is built with base
 * /originale/ and without its public folder: this app already serves the same
 * public folder at the root, which is where the clone's absolute asset paths
 * point. A small version switcher is injected into its HTML.
 */
const CLONE = fileURLToPath(new URL('../masglobaltrade', import.meta.url))
const BASE = '/originale'
const SWITCH = readFileSync(fileURLToPath(new URL('./originale-switch.js', import.meta.url)), 'utf8')

const TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff2': 'font/woff2',
}

function newestMtime(dir: string): number {
  let t = 0
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    t = Math.max(t, e.isDirectory() ? newestMtime(p) : statSync(p).mtimeMs)
  }
  return t
}

async function buildClone(outDir: string) {
  await build({
    root: CLONE,
    configFile: path.join(CLONE, 'vite.config.ts'),
    base: `${BASE}/`,
    publicDir: false,
    logLevel: 'warn',
    build: { outDir, emptyOutDir: true },
  })
  const index = path.join(outDir, 'index.html')
  writeFileSync(index, readFileSync(index, 'utf8').replace('</body>', `<script>${SWITCH}</script></body>`))
}

/** Builds the clone when it is missing or older than the clone's sources. */
async function ensureBuilt(outDir: string) {
  const index = path.join(outDir, 'index.html')
  const src = Math.max(newestMtime(path.join(CLONE, 'src')), statSync(path.join(CLONE, 'index.html')).mtimeMs)
  if (existsSync(index) && statSync(index).mtimeMs > src) return
  mkdirSync(outDir, { recursive: true })
  console.log('\n  Building the original site for /originale …')
  await buildClone(outDir)
}

function middleware(outDir: string, ready: () => Promise<unknown>) {
  return async (req: IncomingMessage, res: ServerResponse, next: () => void) => {
    const url = (req.url ?? '').split('?')[0]
    if (url !== BASE && !url.startsWith(`${BASE}/`)) return next()
    if (url === BASE) {
      res.statusCode = 302
      res.setHeader('Location', `${BASE}/`)
      return res.end()
    }
    try {
      await ready()
    } catch (e) {
      res.statusCode = 500
      return res.end(`Original site build failed: ${(e as Error).message}`)
    }
    const rel = decodeURIComponent(url.slice(BASE.length + 1))
    let file = path.join(outDir, rel)
    if (!file.startsWith(outDir) || !existsSync(file) || !statSync(file).isFile()) {
      // Missing static files are a 404; every other path is a client-side route.
      if (path.extname(rel) && path.extname(rel) !== '.html') {
        res.statusCode = 404
        return res.end()
      }
      file = path.join(outDir, 'index.html')
    }
    res.setHeader('Content-Type', TYPES[path.extname(file)] ?? 'application/octet-stream')
    res.end(readFileSync(file))
  }
}

export function originale(): Plugin {
  let outDir = ''
  let root = ''
  let isBuild = false
  return {
    name: 'mas-originale',
    configResolved(c) {
      root = c.root
      isBuild = c.command === 'build'
      outDir = path.resolve(c.root, c.build.outDir, 'originale')
    },
    configureServer(server) {
      const dir = path.join(root, 'node_modules/.cache/mas-originale')
      let pending: Promise<unknown> | null = null
      // Rebuilt lazily on the first request after the clone's sources change.
      const ready = () => (pending ??= ensureBuilt(dir).finally(() => (pending = null)))
      ready().catch((e) => server.config.logger.error(`[originale] ${e.message}`))
      server.middlewares.use(middleware(dir, ready))
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware(outDir, async () => {}))
    },
    async closeBundle() {
      if (isBuild && !this.meta.watchMode) await buildClone(outDir)
    },
  }
}
