/* ============================================================
   Tolash — общие настройки сайта (главная + страница /guide/).
   Меняйте ссылки только здесь.
   ============================================================ */
window.TOLASH_CONFIG = {
  BOT_URL: "https://t.me/Tolash_uz_bot",          // бот / Mini App в Telegram
  BOT_HANDLE: "@Tolash_uz_bot",                    // как бот подписан на сайте
  CHANNEL_URL: "",                                 // Telegram-канал проекта (пусто — ссылка скрыта), например "https://t.me/tolash_uz"
  FOUNDER_TG: "https://t.me/MEDSOFT1",             // Telegram основателя — для инвесторов и партнёров
  FOUNDER_EMAIL: "isanbaevruslan04@gmail.com",     // почта основателя
  FOUNDER_PHONE: "+998917982104",                  // телефон основателя (пусто — строка скрыта)
  FOUNDER_LINKEDIN: "https://www.linkedin.com/in/ruslan-isanbaev-a805a5379", // LinkedIn основателя
  // Метка для бота (?start=...). Оставьте пустой, если бот не обрабатывает такие метки.
  // Пример: "site" → ссылка станет https://t.me/Tolash_uz_bot?start=site
  START_PARAM: "",
};

/* Собирает ссылку на бота. На странице /guide/ метку можно передать
   прямо в адресе рекламы: .../guide/?start=insta1 → бот получит insta1. */
window.tolashBotUrl = function (param) {
  const C = window.TOLASH_CONFIG;
  const p = (param || C.START_PARAM || "").replace(/[^A-Za-z0-9_-]/g, "").slice(0, 64);
  return C.BOT_URL + (p ? "?start=" + p : "");
};
