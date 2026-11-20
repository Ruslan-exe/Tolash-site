/* ============================================================
   Tolash — логика сайта: ссылки, переключение языка, рендер
   списков из i18n.js, анимации появления.
   ============================================================ */

/* Ссылки и контакты — в js/config.js */
const CONFIG = window.TOLASH_CONFIG;

const I18N = window.TOLASH_I18N;
const SUPPORTED = ["ru", "uz", "en"];

function detectLang() {
  const q = new URLSearchParams(location.search).get("lang");
  if (SUPPORTED.includes(q)) return q;
  try {
    const saved = localStorage.getItem("tolash_site_lang");
    if (SUPPORTED.includes(saved)) return saved;
  } catch (e) {}
  const nav = (navigator.language || "ru").toLowerCase();
  if (nav.startsWith("uz")) return "uz";
  if (nav.startsWith("ru")) return "ru";
  return "en";
}

const get = (obj, path) => path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const checkSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 12.5l5 5L19.5 7"/></svg>';
const dotSvg = '<svg viewBox="0 0 24 24" fill="#fff"><circle cx="12" cy="12" r="4"/></svg>';

const tabIcons = [
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 20c.6-3.2 2.9-5 5.5-5s4.9 1.8 5.5 5"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 14.6c2.4.2 4.3 1.8 4.9 4.4"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8V5a2 2 0 0 1 2-2h3"/><path d="M16 3h3a2 2 0 0 1 2 2v3"/><path d="M21 16v3a2 2 0 0 1-2 2h-3"/><path d="M8 21H5a2 2 0 0 1-2-2v-3"/><line x1="7" y1="12" x2="17" y2="12"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.6"/><path d="M5 20.5c.8-3.8 3.6-5.8 7-5.8s6.2 2 7 5.8"/></svg>',
];

function cell(v) {
  if (typeof v !== "string") return esc(v);
  if (v.startsWith("yes:")) return '<span class="yes">' + esc(v.slice(4)) + "</span>";
  if (v.startsWith("no:")) return '<span class="no">' + esc(v.slice(3)) + "</span>";
  if (v.startsWith("limited:")) return '<span style="color:var(--amber);font-weight:600">' + esc(v.slice(8)) + "</span>";
  return esc(v);
}

function render(lang) {
  const T = I18N[lang];
  document.documentElement.lang = lang;
  document.title = T.meta.title;
  const md = document.querySelector('meta[name="description"]');
  if (md) md.content = T.meta.desc;

  // Простые строки
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = get(T, el.dataset.i18n);
    if (v != null) el.textContent = v;
  });

  // Телефон
  const P = T.phone;
  document.getElementById("phoneScreen").innerHTML = `
    <p class="hi">${esc(P.hi)} 👋</p>
    <div class="sub">${esc(P.sub)}</div>
    <div class="hero-card">
      <div class="label">${esc(P.spent)}</div>
      <div class="big money">${esc(P.big)}</div>
      <div class="meta">${esc(P.meta)}</div>
      <div class="seg">${P.seg.map((s, i) => `<span class="${i === 2 ? "on" : ""}">${esc(s)}</span>`).join("")}</div>
    </div>
    <div class="debts">
      <div class="debt"><div class="t">${esc(P.owed)}</div><div class="v pos money">+${esc(P.owedV)}</div></div>
      <div class="debt"><div class="t">${esc(P.owe)}</div><div class="v neg money">−${esc(P.oweV)}</div></div>
    </div>
    <div class="sec">${esc(P.recent)}</div>
    ${P.bills.map((b) => `
      <div class="bill">
        <div class="ic">${b.ic}</div>
        <div class="info"><div class="ti">${esc(b.t)}</div><div class="me">${esc(b.m)}</div></div>
        <div class="rt"><div class="sum money">${esc(b.s)}</div><span class="chip ${b.closed ? "closed" : ""}">${esc(b.st)}</span></div>
      </div>`).join("")}`;
  document.getElementById("phoneTabs").innerHTML = P.tabs
    .map((t, i) => `<div class="tab ${i === 0 ? "on" : ""}">${tabIcons[i]}<span>${esc(t)}</span></div>`).join("");

  // Проблема
  document.getElementById("problemCards").innerHTML = T.problem.cards
    .map((c) => `<div class="card reveal"><div class="icon">${c.ic}</div><h3>${esc(c.t)}</h3><p>${esc(c.d)}</p></div>`).join("");

  // Шаги
  document.getElementById("howSteps").innerHTML = T.how.steps
    .map((s, i) => `<div class="card step reveal"><div class="num">${i + 1}</div><h3>${esc(s.t)}</h3><p>${esc(s.d)}</p></div>`).join("");

  // Фичи
  document.getElementById("featureCards").innerHTML = T.features.items
    .map((c, i) => `<div class="card reveal"><div class="icon ${i % 2 ? "b" : ""}">${c.ic}</div><h3>${esc(c.t)}</h3><p>${esc(c.d)}</p></div>`).join("");

  // Статус
  document.getElementById("statusList").innerHTML = T.status.items
    .map((s) => `<li><span class="ck">${checkSvg}</span><span>${esc(s)}</span></li>`).join("");
  document.getElementById("stackChips").innerHTML = T.status.stack.map((s) => `<span>${esc(s)}</span>`).join("");

  // Рынок
  document.getElementById("marketStats").innerHTML = T.market.stats
    .map((s) => `<div class="card kpi reveal"><div class="v grad-text">${esc(s.v)}</div><div class="l">${esc(s.l)}</div></div>`).join("");
  document.getElementById("marketCards").innerHTML = T.market.cards
    .map((c, i) => `<div class="card reveal"><div class="icon ${i % 2 ? "b" : ""}">${c.ic}</div><h3>${esc(c.t)}</h3><p>${esc(c.d)}</p></div>`).join("");

  // Конкуренты
  const C = T.compet;
  document.getElementById("competTable").innerHTML =
    "<thead><tr>" + C.head.map((h, i) => `<th class="${i === 1 ? "us" : ""}">${esc(h)}</th>`).join("") + "</tr></thead>" +
    "<tbody>" + C.rows.map((r) => "<tr>" + r.map((v, i) => `<td class="${i === 1 ? "us" : ""}">${cell(v)}</td>`).join("") + "</tr>").join("") + "</tbody>";

  // Бизнес-модель
  document.getElementById("modelCards").innerHTML = T.model.items
    .map((c, i) => `<div class="card reveal"><div class="icon ${i % 2 ? "b" : ""}">${c.ic}</div><h3>${esc(c.t)}</h3><p>${esc(c.d)}</p></div>`).join("");

  // Roadmap
  document.getElementById("timeline").innerHTML = T.roadmap.items
    .map((r) => `<div class="tl ${r.cls} reveal"><div class="dot"></div><div class="card">
        <span class="tag">${esc(r.tag)}</span><span class="state">${esc(r.state)}</span>
        <h3>${esc(r.t)}</h3><p>${esc(r.d)}</p></div></div>`).join("");

  // Цели и задачи
  document.getElementById("kpis").innerHTML = T.goals.kpis
    .map((k) => `<div class="card kpi reveal"><div class="v grad-text">${esc(k.v)}</div><div class="l">${esc(k.l)}</div></div>`).join("");
  const li = (arr, cls) => arr.map((s) => `<li><span class="ck ${cls}">${cls === "next" ? dotSvg : checkSvg}</span><span style="font-size:14px">${esc(s)}</span></li>`).join("");
  document.getElementById("tasksDone").innerHTML = li(T.goals.done, "");
  document.getElementById("tasksNow").innerHTML = li(T.goals.now, "now");
  document.getElementById("tasksNext").innerHTML = li(T.goals.next, "next");

  // Инвесторам
  document.getElementById("whyCards").innerHTML = T.investors.why
    .map((w) => `<div class="card" style="padding:16px 18px"><h3 style="font-size:15px">${esc(w.t)}</h3><p>${esc(w.d)}</p></div>`).join("");
  document.getElementById("fundBars").innerHTML = T.investors.funds
    .map((f) => `<div class="bar"><div class="p">${f.p}%</div><div class="track"><div class="fill" data-w="${f.p}"></div></div><div class="l">${esc(f.l)}</div></div>`).join("");
  document.getElementById("riskCards").innerHTML = T.investors.risks
    .map((r) => `<div class="card" style="padding:16px 18px"><h3 style="font-size:15px">${esc(r.t)}</h3><p>${esc(r.d)}</p></div>`).join("");

  // Основатель
  const A = T.about;
  document.querySelector(".avatar-fallback").textContent = lang === "ru" ? "РИ" : "RI";
  const photo = document.querySelector(".avatar img");
  if (photo) photo.alt = A.name;
  document.getElementById("expList").innerHTML = A.exp
    .map((e) => `<li class="${e.now ? "now" : ""}">
        <div class="exp-head"><span class="exp-role">${esc(e.r)}</span><span class="exp-co">${esc(e.c)}</span></div>
        <div class="exp-period">${esc(e.p)}</div>
        <p>${esc(e.d)}</p></li>`).join("");
  const pairs = (arr) => arr.map((x) => `<li><span class="t">${esc(x.t)}</span><span class="d">${esc(x.d)}</span></li>`).join("");
  document.getElementById("eduList").innerHTML = pairs(A.edu);
  document.getElementById("caseList").innerHTML = pairs(A.cases);
  document.getElementById("skillChips").innerHTML = A.skills.map((x) => `<span>${esc(x)}</span>`).join("");
  document.getElementById("langChips").innerHTML = A.langs.map((x) => `<span>${esc(x)}</span>`).join("");

  // Инструкция
  document.getElementById("startSteps").innerHTML = T.start.steps
    .map((s, i) => `<div class="card step reveal"><div class="num">${i + 1}</div><p style="color:var(--text)">${esc(s)}</p></div>`).join("");

  // FAQ
  document.getElementById("faqList").innerHTML = T.faq.items
    .map((f) => `<details class="reveal"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("");

  // Переключатель
  document.querySelectorAll(".lang button").forEach((b) => {
    b.classList.toggle("on", b.dataset.lang === lang);
    b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false");
  });

  observeReveal();
  animateBars();
}

/* ---------- Ссылки ---------- */
function applyLinks() {
  const bot = window.tolashBotUrl();
  document.querySelectorAll(".bot-link").forEach((a) => { a.href = bot; a.target = "_blank"; a.rel = "noopener"; });
  document.querySelectorAll(".bot-url span").forEach((el) => { el.textContent = bot.replace(/^https?:\/\//, ""); });
  document.querySelectorAll(".channel-link").forEach((a) => {
    if (CONFIG.CHANNEL_URL) { a.href = CONFIG.CHANNEL_URL; a.style.display = ""; } else a.style.display = "none";
  });
  document.querySelectorAll(".founder-tg").forEach((a) => {
    if (CONFIG.FOUNDER_TG) { a.href = CONFIG.FOUNDER_TG; a.style.display = ""; } else a.style.display = "none";
  });
  document.querySelectorAll(".founder-mail").forEach((a) => {
    const row = a.closest("li") || a;
    if (CONFIG.FOUNDER_EMAIL) {
      a.href = "mailto:" + CONFIG.FOUNDER_EMAIL + "?subject=Tolash"; row.style.display = "";
      const v = a.querySelector(".v"); if (v) v.textContent = CONFIG.FOUNDER_EMAIL;
    } else row.style.display = "none";
  });
  document.querySelectorAll(".founder-phone").forEach((a) => {
    const row = a.closest("li") || a;
    const raw = (CONFIG.FOUNDER_PHONE || "").replace(/[^\d+]/g, "");
    if (raw) {
      a.href = "tel:" + raw; row.style.display = "";
      // +998917982104 → +998 91 798 21 04
      const m = raw.match(/^\+998(\d{2})(\d{3})(\d{2})(\d{2})$/);
      const v = a.querySelector(".v"); if (v) v.textContent = m ? `+998 ${m[1]} ${m[2]} ${m[3]} ${m[4]}` : raw;
    } else row.style.display = "none";
  });
  document.querySelectorAll(".founder-li").forEach((a) => {
    if (CONFIG.FOUNDER_LINKEDIN) { a.href = CONFIG.FOUNDER_LINKEDIN; a.style.display = ""; } else a.style.display = "none";
  });
  // «Запросить презентацию» (раздел «Инвесторам»): Telegram основателя → почта → раздел «Обо мне»
  document.querySelectorAll(".contact-link").forEach((a) => {
    if (CONFIG.FOUNDER_TG) { a.href = CONFIG.FOUNDER_TG; a.target = "_blank"; a.rel = "noopener"; }
    else if (CONFIG.FOUNDER_EMAIL) { a.href = "mailto:" + CONFIG.FOUNDER_EMAIL + "?subject=Tolash%20deck"; a.removeAttribute("target"); }
    else { a.href = "#about"; a.removeAttribute("target"); }
  });
  document.getElementById("year").textContent = new Date().getFullYear();
}

/* ---------- Появление при скролле ---------- */
let io;
function observeReveal() {
  const els = document.querySelectorAll(".reveal:not(.in)");
  if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
  if (!io) {
    io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -4% 0px", threshold: 0 });
  }
  els.forEach((e) => io.observe(e));
  // Страховка: что бы ни случилось с наблюдателем, через несколько секунд всё видно
  clearTimeout(observeReveal._t);
  observeReveal._t = setTimeout(() => document.querySelectorAll(".reveal:not(.in)").forEach((e) => e.classList.add("in")), 4000);
}

function animateBars() {
  const fills = document.querySelectorAll(".bar .fill");
  const run = () => fills.forEach((f) => { f.style.width = f.dataset.w + "%"; });
  if (!("IntersectionObserver" in window)) { run(); return; }
  const o = new IntersectionObserver((en) => { if (en.some((e) => e.isIntersecting)) { run(); o.disconnect(); } }, { threshold: 0.3 });
  const inv = document.querySelector(".invest");
  if (inv) o.observe(inv);
}

/* ---------- Инициализация ---------- */
let LANG = detectLang();
render(LANG);
applyLinks();

document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => {
  LANG = b.dataset.lang;
  try { localStorage.setItem("tolash_site_lang", LANG); } catch (e) {}
  const url = new URL(location.href); url.searchParams.set("lang", LANG); history.replaceState(null, "", url);
  render(LANG);
  applyLinks();
}));

const burger = document.getElementById("burger");
const menu = document.getElementById("mobileMenu");
burger.addEventListener("click", () => menu.classList.toggle("open"));
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => menu.classList.remove("open")));
document.addEventListener("click", (e) => { if (!menu.contains(e.target) && !burger.contains(e.target)) menu.classList.remove("open"); });
