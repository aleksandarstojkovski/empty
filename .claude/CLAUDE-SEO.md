# claude-seo (vendored)

Source: https://github.com/AgriciDaniel/claude-seo, tag `v2.4.0` (commit `e77e783`), MIT license.

Laid out the way upstream `install.sh` installs it (`skills/`, `agents/`, with the
shared runtime under `skills/seo/`). The only local change is that
`${CLAUDE_PLUGIN_ROOT}` paths point at `.claude/skills/...` in this repo.

The Python runtime is not committed. Create it once per container:

    .claude/skills/seo/scripts/claude-seo setup --skip-browser

`--skip-browser` skips the Playwright Chromium download; drop it where a browser
download is wanted. The upstream PostToolUse schema hook (`skills/seo/hooks/`) is
not wired into settings.

To update: re-copy from a newer tag using the same layout and re-apply the path rewrite.
