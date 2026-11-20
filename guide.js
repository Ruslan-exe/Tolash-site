/* ============================================================
   Tolash — страница-инструкция /guide/ для рекламы.
   Рендерит тексты из guide-i18n.js, макеты экранов приложения,
   пример честного расчёта и ведёт все кнопки в Telegram-бота.
   ============================================================ */
(function () {
  const G = window.TOLASH_GUIDE_I18N;
  const MAIN = window.TOLASH_I18N || {};
  const SUPPORTED = ["ru", "uz", "en"];

  /* Метка для бота из адреса страницы: /guide/?start=insta1 (необязательно) */
  const urlParams = new URLSearchParams(location.search);
  const START = urlParams.get("start") || "";

  function detectLang() {
    const q = urlParams.get("lang");
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
  const $ = (id) => document.getElementById(id);

  /* ---------- Пример чека: суммы считаются здесь, а не вписываются руками ---------- */
  const EXAMPLE = {
    items: [
      { k: "plov", q: 1, p: 48000, who: ["a"] },
      { k: "lagman", q: 1, p: 42000, who: ["r"] },
      { k: "shashlik", q: 2, p: 36000, who: ["d"] },
      { k: "non", q: 1, p: 6000, who: ["a", "d", "r"] },
      { k: "tea", q: 1, p: 12000, who: ["a", "d", "r"] },
    ],
    people: ["a", "r", "d"],
    service: 0.10,
    me: "r",
  };
  function calc() {
    const base = {}; EXAMPLE.people.forEach((p) => (base[p] = 0));
    let sub = 0;
    EXAMPLE.items.forEach((it) => { sub += it.p; it.who.forEach((w) => (base[w] += it.p / it.who.length)); });
    const svc = Math.round(sub * EXAMPLE.service);
    const total = sub + svc;
    const share = {}; EXAMPLE.people.forEach((p) => (share[p] = Math.round(base[p] * (1 + EXAMPLE.service))));
    return { sub, svc, total, share, even: Math.round(total / EXAMPLE.people.length) };
  }
  const RES = calc();

  const AV_COLORS = { a: "#34c48e", d: "#306cb4", r: "#e8a13c", t: "#3c9cc0", k: "#f0655a" };

  /* ---------- Иконки ---------- */
  const tg = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.5 4.5 2.9 11.7c-1.2.5-1.2 1.2-.2 1.5l4.7 1.5 1.8 5.6c.2.6.1.8.7.8.5 0 .7-.2 1-.5l2.4-2.3 4.9 3.6c.9.5 1.5.2 1.8-.8l3.2-15.2c.3-1.3-.5-1.9-1.7-1.4z"/></svg>';
  const check = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 12.5l5 5L19.5 7"/></svg>';
  const tabIcons = [
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 20c.6-3.2 2.9-5 5.5-5s4.9 1.8 5.5 5"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 14.6c2.4.2 4.3 1.8 4.9 4.4"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8V5a2 2 0 0 1 2-2h3"/><path d="M16 3h3a2 2 0 0 1 2 2v3"/><path d="M21 16v3a2 2 0 0 1-2 2h-3"/><path d="M8 21H5a2 2 0 0 1-2-2v-3"/><line x1="7" y1="12" x2="17" y2="12"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.6"/><path d="M5 20.5c.8-3.8 3.6-5.8 7-5.8s6.2 2 7 5.8"/></svg>',
  ];
  const TAB_IDS = ["home", "splits", "scan", "profile"];

  /* ---------- Макеты экранов приложения ---------- */
  function makeHelpers(lang, T) {
    const nf = new Intl.NumberFormat(lang === "en" ? "en-US" : "ru-RU");
    const num = (n) => nf.format(n).replace(/ /g, " ");
    const money = (n) => num(n) + " " + T.currency;
    const av = (k, cls) => `<span class="av ${cls || ""}" style="background:${AV_COLORS[k]}">${esc(T.initials[k])}</span>`;
    const avs = (arr) => `<span class="avs">${arr.map((k) => av(k)).join("")}</span>`;
    const phone = (inner, active, cls) => `
      <div class="phone ${cls || ""}" aria-hidden="true"><div class="screen">
        <div class="notch"></div>
        <div class="pages">${inner}</div>
        <div class="tabs">${MAIN[lang].phone.tabs.map((t, i) => `<div class="tab ${i === active ? "on" : ""}">${tabIcons[i]}<span>${esc(t)}</span></div>`).join("")}</div>
      </div></div>`;
    return { num, money, av, avs, phone };
  }

  function screenHome(lang) {
    const P = MAIN[lang].phone;
    return `
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
  }

  function screenSplits(T, H) {
    const S = T.screens.splits;
    return `
      <div class="scr-head"><div><div class="scr-t">${esc(S.title)}</div><div class="sub">${esc(S.sub)}</div></div><span class="mini-btn">${esc(S.add)}</span></div>
      ${S.bills.map((b) => `
        <div class="bill">
          <div class="ic">${b.ic}</div>
          <div class="info"><div class="ti">${esc(b.t)}</div><div class="me">${H.avs(b.ppl)}<span>${esc(b.m)}</span></div></div>
          <div class="rt"><div class="sum money">${esc(b.s)}</div><span class="chip ${b.closed ? "closed" : ""}">${esc(b.st)}</span></div>
        </div>`).join("")}`;
  }

  function screenScan(T, H) {
    const S = T.screens.scan;
    return `
      <div class="scr-t">${esc(S.title)}</div>
      <div class="viewfinder">
        <div class="paper"><b></b><i></i><i></i><i class="s"></i><i></i><i class="s"></i><i></i><b></b></div>
        <span class="cn tl"></span><span class="cn tr"></span><span class="cn bl"></span><span class="cn br"></span>
        <div class="scan-line"></div>
        <div class="vf-hint">${esc(S.hint)}</div>
      </div>
      <div class="parsed">
        <div class="parsed-h"><span>${esc(S.found)}</span><span class="ok">${check}${esc(S.ok)}</span></div>
        ${EXAMPLE.items.map((it) => `<div class="row"><span class="n">${esc(T.food[it.k])}</span><span class="q">×${it.q}</span><span class="money">${H.num(it.p)}</span></div>`).join("")}
        <div class="row svc"><span class="n">${esc(T.fair.service)}</span><span class="q"></span><span class="money">${H.num(RES.svc)}</span></div>
        <div class="row tot"><span class="n">${esc(T.fair.total)}</span><span class="q"></span><span class="money">${H.num(RES.total)}</span></div>
      </div>`;
  }

  function screenProfile(T, H) {
    const S = T.screens.profile;
    return `
      <div class="prof">${H.av("r", "lg")}<div><div class="hi">${esc(T.people.r)}</div><div class="sub" style="margin:0">${esc(S.meta)}</div></div></div>
      <div class="invite">
        <div class="t">${esc(S.invite_t)}</div>
        <div class="d">${esc(S.invite_d)}</div>
        <span class="mini-btn light">${esc(S.invite_btn)}</span>
      </div>
      <div class="sec">${esc(S.friends_t)}</div>
      <div class="list">${["a", "d", "t", "k"].map((k) => `<div class="li">${H.av(k)}<span>${esc(T.people[k])}</span><span class="arr">›</span></div>`).join("")}</div>
      <div class="list"><div class="li set"><span>${esc(S.lang_l)}</span><span class="val">${esc(S.lang_v)} ›</span></div></div>`;
  }

  function screenBill(T, H) {
    const S = T.screens.bill;
    return `
      <div class="bill-top"><span class="back">‹</span><div><div class="scr-t sm">${esc(T.fair.receipt_t)}</div><div class="sub" style="margin:0">${esc(S.meta)} · ${H.money(RES.total)}</div></div></div>
      <div class="ppl-row">${EXAMPLE.people.map((k) => `<div class="pp">${H.av(k)}<span class="ck">${check}</span><span class="nm">${esc(k === EXAMPLE.me ? T.people.me : T.people[k])}</span></div>`).join("")}</div>
      <div class="sec">${esc(S.hint)}</div>
      ${EXAMPLE.items.map((it) => {
        const mine = it.who.includes(EXAMPLE.me);
        return `<div class="item ${mine ? "mine" : ""}"><span class="cb">${mine ? check : ""}</span><span class="n">${esc(T.food[it.k])}${it.q > 1 ? " ×" + it.q : ""}</span>${H.avs(it.who)}<span class="p money">${H.num(it.p)}</span></div>`;
      }).join("")}
      <div class="item svc"><span class="cb none"></span><span class="n">${esc(T.fair.service)}</span><span class="p money">${H.num(RES.svc)}</span></div>
      <div class="share"><span>${esc(S.my_t)}</span><b class="money">${H.money(RES.share[EXAMPLE.me])}</b></div>
      <div class="cta-bar">${esc(S.btn)}</div>`;
  }

  /* ---------- Рендер страницы ---------- */
  function render(lang) {
    const T = G[lang];
    const H = makeHelpers(lang, T);
    document.documentElement.lang = lang;
    document.title = T.meta.title;
    const md = document.querySelector('meta[name="description"]');
    if (md) md.content = T.meta.desc;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = get(T, el.dataset.i18n);
      if (v != null) el.textContent = v;
    });

    // Hero
    $("heroPills").innerHTML = T.hero.pills.map((p) => `<li><span class="ck">${check}</span>${esc(p)}</li>`).join("");
    $("heroPhone").innerHTML = H.phone(screenBill(T, H), 1, "");

    // Боль
    $("painCards").innerHTML = T.pain.items
      .map((c) => `<div class="card reveal"><div class="icon">${c.ic}</div><h3>${esc(c.t)}</h3><p>${esc(c.d)}</p></div>`).join("");

    // Вкладки
    const screens = [screenHome(lang), screenSplits(T, H), screenScan(T, H), screenProfile(T, H)];
    $("tabNav").innerHTML = T.tabs.items
      .map((t, i) => `<a href="#tab-${TAB_IDS[i]}"><span class="ti">${tabIcons[i]}</span>${esc(t.t)}</a>`).join("");
    $("tabBlocks").innerHTML = T.tabs.items.map((t, i) => `
      <article class="g-tab ${i % 2 ? "flip" : ""}" id="tab-${TAB_IDS[i]}">
        <div class="g-tab-phone reveal">${H.phone(screens[i], i, "flat")}</div>
        <div class="g-tab-text">
          <div class="g-tab-head reveal">
            <div class="g-tab-badge"><span class="ti">${tabIcons[i]}</span>${esc(T.tabs.label)} ${i + 1} · ${esc(t.t)}</div>
            <h3>${esc(t.sub)}</h3>
          </div>
          <div class="g-tab-body reveal">
            <p class="g-tab-d">${esc(t.d)}</p>
            <div class="g-helps-t">${esc(T.tabs.helps_t)}</div>
            <ul class="checklist">${t.helps.map((h) => `<li><span class="ck">${check}</span><span>${esc(h)}</span></li>`).join("")}</ul>
            <div class="g-tip"><b>💡 ${esc(T.tabs.tip_t)}:</b> ${esc(t.tip)}</div>
          </div>
        </div>
      </article>`).join("");

    // Шаги
    $("stepList").innerHTML = T.steps.items
      .map((s, i) => `<li class="card reveal"><span class="num">${i + 1}</span><div><h3>${esc(s.t)}</h3><p>${esc(s.d)}</p></div></li>`).join("");

    // Пример честного расчёта
    $("receipt").innerHTML = `
      <div class="r-head"><img src="../assets/logo.png" alt="" width="28" height="28"><span>${esc(T.fair.receipt_t)}</span></div>
      ${EXAMPLE.items.map((it) => `
        <div class="r-row">
          <span class="n">${esc(T.food[it.k])}${it.q > 1 ? " ×" + it.q : ""}</span>
          <span class="w">${it.who.length > 1 ? `${H.avs(it.who)}<em>${esc(T.fair.shared)}</em>` : `${H.av(it.who[0])}<em>${esc(T.people[it.who[0]])}</em>`}</span>
          <span class="p money">${H.num(it.p)}</span>
        </div>`).join("")}
      <div class="r-row svc"><span class="n">${esc(T.fair.service)}</span><span class="w"></span><span class="p money">${H.num(RES.svc)}</span></div>
      <div class="r-row tot"><span class="n">${esc(T.fair.total)}</span><span class="w"></span><span class="p money">${H.money(RES.total)}</span></div>`;

    const max = Math.max(...EXAMPLE.people.map((k) => RES.share[k]));
    const sorted = [...EXAMPLE.people].sort((x, y) => RES.share[y] - RES.share[x]);
    const over = sorted[sorted.length - 1];   // переплатил бы при «поровну»
    const under = sorted[0];                   // недоплатил бы
    const diff = RES.even - RES.share[over];
    const evenText = T.fair.even_d
      .replace("{even}", H.money(RES.even)).replace("{over}", T.people[over])
      .replace("{under}", T.people[under]).replace("{diff}", H.money(diff));
    $("result").innerHTML = `
      <h3>${esc(T.fair.result_t)}</h3>
      <div class="g-bars">
        ${sorted.map((k) => `
          <div class="g-bar">
            ${H.av(k)}
            <div class="g-bar-main">
              <div class="g-bar-top"><span>${esc(T.people[k])}</span><b class="money">${H.money(RES.share[k])}</b></div>
              <div class="track"><div class="fill" style="width:${(RES.share[k] / max) * 100}%"></div><div class="even-mark" style="left:${(RES.even / max) * 100}%"></div></div>
            </div>
          </div>`).join("")}
      </div>
      <div class="g-even-legend"><span class="even-dash"></span>${esc(T.fair.even_label)}: ${H.money(RES.even)}</div>
      <div class="g-even"><b>${esc(T.fair.even_t)}</b> ${esc(evenText)}</div>`;
    $("rules").innerHTML = T.fair.rules
      .map((r, i) => `<div class="card reveal"><div class="icon ${i % 2 ? "b" : ""}">${r.ic}</div><h3>${esc(r.t)}</h3><p>${esc(r.d)}</p></div>`).join("");

    // Сценарии
    $("caseCards").innerHTML = T.cases.items
      .map((c, i) => `<div class="card reveal"><div class="icon ${i % 2 ? "b" : ""}">${c.ic}</div><h3>${esc(c.t)}</h3><p>${esc(c.d)}</p></div>`).join("");

    // FAQ
    $("faqList").innerHTML = T.faq.items
      .map((f) => `<details class="reveal"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("");

    document.querySelectorAll(".lang button").forEach((b) => {
      b.classList.toggle("on", b.dataset.lang === lang);
      b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false");
    });

    observeReveal();
  }

  /* ---------- Ссылки на бота ---------- */
  function applyLinks() {
    const bot = window.tolashBotUrl(START);
    // Без target=_blank: из встроенных браузеров Instagram/Facebook ссылка t.me надёжнее открывает Telegram в той же вкладке
    document.querySelectorAll(".bot-link").forEach((a) => { a.href = bot; });
    document.querySelectorAll(".bot-url span").forEach((el) => { el.textContent = bot.replace(/^https?:\/\//, "").replace(/\?.*$/, ""); });
    $("year").textContent = new Date().getFullYear();
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
    clearTimeout(observeReveal._t);
    observeReveal._t = setTimeout(() => document.querySelectorAll(".reveal:not(.in)").forEach((e) => e.classList.add("in")), 4000);
  }

  /* ---------- Липкая кнопка на телефоне: видна, когда главные кнопки вне экрана ---------- */
  function setupSticky() {
    const sticky = $("sticky");
    if (!("IntersectionObserver" in window)) return;
    const watched = [$("heroCta"), $("finalCta")];
    const visible = new Set();
    const o = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
      const show = visible.size === 0;
      sticky.classList.toggle("show", show);
      sticky.setAttribute("aria-hidden", show ? "false" : "true");
      sticky.querySelector("a").tabIndex = show ? 0 : -1;
    }, { threshold: 0 });
    watched.forEach((el) => el && o.observe(el));
  }

  /* ---------- Старт ---------- */
  let LANG = detectLang();
  render(LANG);
  applyLinks();
  setupSticky();

  document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => {
    LANG = b.dataset.lang;
    try { localStorage.setItem("tolash_site_lang", LANG); } catch (e) {}
    const url = new URL(location.href); url.searchParams.set("lang", LANG); history.replaceState(null, "", url);
    render(LANG);
    applyLinks();
  }));
})();
