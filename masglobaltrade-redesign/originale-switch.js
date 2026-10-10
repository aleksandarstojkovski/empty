// Version switcher injected into the original site served under /originale.
// Mirrors src/Switcher.tsx and the .vsw styles in src/index.css; keep the
// version list in sync with src/versions.ts.
(function () {
  var VERSIONS = [
    { base: "/notte", name: "Notte", mood: "Scuro e ambra · Figtree", bg: "#0D0F13" },
    { base: "/fresco", name: "Fresco", mood: "Bianco e verde petrolio · DM Sans", bg: "#F1F7F5" },
    { base: "/lago", name: "Lago", mood: "Blu notte e corallo · Outfit", bg: "#0B2545" },
    { base: "/pulito", name: "Pulito", mood: "Bianco e blu · Inter", bg: "#FFFFFF" },
    { base: "/concessionaria", name: "Concessionaria", mood: "Grafite e rosso · Manrope", bg: "#16181D" },
    { base: "/diretto", name: "Diretto", mood: "Caldo e arancio · Plus Jakarta Sans", bg: "#F8F7F4" },
    { base: "/v1", name: "Autosalone", mood: "Terra terra · giallo e nero", bg: "#FFD400" },
    { base: "/v2", name: "Trailer", mood: "Teatrale · cinematografico", bg: "#0A0A0A" },
    { base: "/v3", name: "Volantino Pop", mood: "Popolare · poster a colori", bg: "#2B50E6" },
    { base: "/alpino", name: "Alpino", mood: "Editoriale premium · chiaro", bg: "#F4F0E8" },
    { base: "/originale", name: "Originale", mood: "Clone pixel-perfect", bg: "#FFFFFF" },
  ];
  var css =
    ".vsw{position:fixed;left:16px;bottom:16px;z-index:9999;font:500 14px/1.3 system-ui,-apple-system,'Segoe UI',sans-serif;color:#fff}" +
    "@media (max-width:767px){.vsw{left:10px;bottom:80px}}" +
    ".vsw__btn{display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 14px 0 8px;border:1px solid rgba(255,255,255,.18);border-radius:999px;background:rgba(17,17,17,.88);backdrop-filter:blur(8px);color:#fff;font:inherit;font-weight:600;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.28)}" +
    ".vsw__btn:hover{background:#000}.vsw__chev{font-size:11px;opacity:.7}" +
    ".vsw__dot{width:24px;height:24px;flex:none;border-radius:50%;border:2px solid rgba(255,255,255,.85)}" +
    ".vsw__panel{position:absolute;left:0;bottom:calc(100% + 10px);width:280px;max-height:calc(100vh - 140px);overflow-y:auto;padding:8px;border-radius:18px;background:#111;border:1px solid rgba(255,255,255,.14);box-shadow:0 18px 50px rgba(0,0,0,.4)}" +
    ".vsw__hub,.vsw__item{color:#fff!important;text-decoration:none!important;border-radius:12px}" +
    ".vsw__hub{display:block;padding:10px 12px;font-weight:600}.vsw__hub:hover,.vsw__item:hover{background:rgba(255,255,255,.08)}" +
    ".vsw__hint{margin:4px 12px 6px;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.5)}" +
    ".vsw__item{display:flex;align-items:center;gap:10px;padding:8px 10px}.vsw__item b{display:block;font-weight:600}" +
    ".vsw__item small{display:block;font-size:12px;color:rgba(255,255,255,.55)}.vsw__item.is-current{background:rgba(255,255,255,.12)}" +
    ".vsw__item.is-current b::after{content:' · qui';font-weight:400;color:rgba(255,255,255,.55)}";
  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  var root = document.createElement("div");
  root.className = "vsw";
  root.innerHTML =
    '<button type="button" class="vsw__btn" aria-expanded="false" aria-haspopup="menu">' +
    '<span class="vsw__dot" style="background:#FFFFFF"></span><span>Originale</span><span class="vsw__chev" aria-hidden="true">▴</span></button>';
  var btn = root.firstChild;
  var panel = null;

  function sub() {
    return location.pathname.replace(/^\/originale/, "").replace(/\/$/, "");
  }
  function close() {
    if (panel) panel.remove();
    panel = null;
    btn.setAttribute("aria-expanded", "false");
  }
  function open() {
    panel = document.createElement("div");
    panel.className = "vsw__panel";
    panel.setAttribute("role", "menu");
    var html = '<a class="vsw__hub" role="menuitem" href="/">← Hub delle versioni</a><p class="vsw__hint">Stessa pagina in un\'altra versione</p>';
    VERSIONS.forEach(function (v) {
      html +=
        '<a role="menuitem" class="vsw__item' + (v.base === "/originale" ? " is-current" : "") + '" href="' + v.base + sub() + '">' +
        '<span class="vsw__dot" style="background:' + v.bg + '"></span><span><b>' + v.name + "</b><small>" + v.mood + "</small></span></a>";
    });
    panel.innerHTML = html;
    root.insertBefore(panel, btn);
    btn.setAttribute("aria-expanded", "true");
  }
  btn.addEventListener("click", function () {
    panel ? close() : open();
  });
  document.addEventListener("pointerdown", function (e) {
    if (panel && !root.contains(e.target)) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
  document.body.appendChild(root);
})();
