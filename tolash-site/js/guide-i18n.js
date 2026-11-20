/* ============================================================
   Tolash — тексты страницы-инструкции /guide/ (для рекламы).
   Три языка: ru / uz / en. Экран «Главная» в телефоне берётся
   из js/i18n.js (блок phone), остальное — здесь.
   ============================================================ */
window.TOLASH_GUIDE_I18N = {
  /* ======================================================== RU */
  ru: {
    meta: {
      title: "Tolash — как разделить счёт в кафе за минуту",
      desc: "Короткая инструкция по Tolash: что есть в приложении, как сфотографировать чек и разделить счёт с друзьями честно — прямо в Telegram.",
    },
    nav_cta: "Открыть в Telegram",
    hero: {
      eyebrow: "Инструкция · 3 минуты",
      h1a: "Делите счёт в кафе", h1b: "за минуту", h1c: "— честно и без споров",
      lead: "Tolash — бесплатное приложение прямо в Telegram. Сфотографируйте чек, друзья отметят своё, а Tolash посчитает, кто сколько должен. Ниже — короткая инструкция: что есть в приложении и как разделить первый счёт.",
      pills: ["Бесплатно", "Без установки — внутри Telegram", "Русский · O'zbek · English"],
      cta1: "Открыть Tolash в Telegram", cta2: "Как это работает",
    },
    people: { a: "Азиз", d: "Дилноза", r: "Руслан", t: "Тимур", k: "Камила", me: "вы" },
    initials: { a: "А", d: "Д", r: "Р", t: "Т", k: "К" },
    food: { plov: "Плов", lagman: "Лагман", shashlik: "Шашлык", non: "Нон", tea: "Чай, чайник" },
    currency: "сум",
    pain: {
      eyebrow: "Знакомо?", title: "Чек на столе — и начинается",
      items: [
        { ic: "🧮", t: "«Давайте поровну»", d: "А потом выясняется, что один пил только чай, а другой заказал шашлык на троих." },
        { ic: "💬", t: "«Скинь, сколько я должен»", d: "Чек уходит в чат, кто-то считает на калькуляторе, кто-то спорит про сервисный сбор." },
        { ic: "⏳", t: "«Переведу потом»", d: "Через неделю никто не помнит, кто кому и сколько. Напоминать неловко — и деньги теряются." },
      ],
      solution: "Tolash делает это за вас: каждый платит ровно за своё, а список долгов всегда под рукой.",
    },
    tabs: {
      eyebrow: "Приложение", title: "Что внутри: 4 вкладки",
      lead: "Внизу экрана Tolash — четыре вкладки. Вот что в каждой и чем она полезна.",
      label: "Вкладка", helps_t: "Чем помогает", tip_t: "Совет",
      items: [
        {
          t: "Главная", sub: "Ваши траты и долги на одном экране",
          d: "Здесь видно, сколько вы потратили за день, неделю или месяц, сколько должны вам и сколько должны вы, а также последние общие траты.",
          helps: ["Не нужно помнить, кто кому должен — Tolash считает сам", "Видно, сколько уходит на встречи с друзьями за неделю или месяц", "Последние траты всегда под рукой"],
          tip: "Переключайте «День · Неделя · Месяц · Всё», чтобы увидеть траты за нужный период.",
        },
        {
          t: "Траты", sub: "Все общие счета компании",
          d: "Список счетов, которые вы делите с друзьями: ужины, такси, поездки, подарки. У каждого — сумма, участники и статус: «делим» или «закрыт». Здесь же можно создать трату вручную, если чека нет.",
          helps: ["Все общие счета в одном месте, а не в переписке", "По статусу понятно, какие счета ещё не закрыты", "Трата без чека — такси, аренда, подарок — вносится вручную"],
          tip: "Нет чека? Создайте трату вручную: название, позиции и цены — и делите так же, как отсканированный чек.",
        },
        {
          t: "Скан", sub: "Чек по фото за несколько секунд",
          d: "Наведите камеру на чек — ИИ разберёт его по позициям: название, количество, цена, а также налог и сервисный сбор. Потом сверит сумму позиций с итогом чека.",
          helps: ["Не нужно переписывать чек вручную", "Понимает узбекские и русские чеки, бледную термопечать и скриншоты", "Любую позицию можно поправить, если что-то распозналось не так"],
          tip: "Снимайте чек целиком, ровно и при хорошем свете — так распознавание будет точнее.",
        },
        {
          t: "Профиль", sub: "Друзья, приглашения и настройки",
          d: "Здесь ваш список друзей и личная ссылка-приглашение. Друг переходит по ней, регистрируется за 10 секунд и появляется у вас — дальше его можно добавить в любой счёт одним касанием. Здесь же меняется язык.",
          helps: ["Не нужно каждый раз искать друзей — они уже в списке", "Пригласить всю компанию — одна ссылка в общий чат", "Язык интерфейса: русский, узбекский или английский"],
          tip: "Если у кого-то нет Telegram, добавьте его в счёт как гостя по имени — он тоже попадёт в расчёт.",
        },
      ],
    },
    steps: {
      eyebrow: "Инструкция", title: "Первый счёт за 5 шагов",
      lead: "Попробуйте на ближайшей встрече с друзьями — займёт пару минут.",
      items: [
        { t: "Откройте Tolash в Telegram", d: "Нажмите любую зелёную кнопку на этой странице — откроется бот @Tolash_uz_bot. Нажмите «Старт» (или отправьте /start)." },
        { t: "Выберите язык и подтвердите номер", d: "Русский, узбекский или английский. Номер телефона нужен только для входа и сохранения истории — данные не продаются и не передаются третьим лицам." },
        { t: "Сфотографируйте чек", d: "Откройте вкладку «Скан» и снимите чек — позиции появятся через несколько секунд. Проверьте их и при необходимости поправьте. Нет чека — создайте трату во вкладке «Траты»." },
        { t: "Позовите друзей", d: "Отправьте ссылку на счёт в чат компании или добавьте участников из списка друзей. Тех, у кого нет Telegram, добавьте как гостей по имени." },
        { t: "Каждый отмечает своё — и готово", d: "Каждый открывает счёт и отмечает, что ел и пил. Общее блюдо делится между теми, кто его ел. Нажмите «Кто сколько должен», подтвердите — и переведите долю привычным способом: на карту, через Payme или Click." },
      ],
      cta: "Попробовать сейчас",
    },
    fair: {
      eyebrow: "Честный расчёт", title: "Почему это честнее, чем «поровну»",
      lead: "Пример: ужин в чайхане на троих, обслуживание 10%.",
      receipt_t: "Ужин в чайхане", shared: "на троих", service: "Обслуживание 10%", total: "Итого",
      result_t: "Кто сколько платит", even_label: "поровну",
      even_t: "А если поровну?",
      even_d: "По {even} каждому. {over} переплатила бы {diff}, а {under} недоплатил бы ровно столько же.",
      rules: [
        { ic: "🍲", t: "Общее — между теми, кто ел", d: "Нон и чай на троих делятся на троих. Если салат брали двое — делится на двоих." },
        { ic: "⚖️", t: "Сервис и налог — пропорционально", d: "Кто заказал больше, с того и сервисный сбор больше. Как и должно быть." },
        { ic: "➗", t: "Неотмеченное — поровну", d: "Если позицию никто не отметил, она делится между всеми участниками." },
        { ic: "🛡️", t: "Без тихих правок", d: "Каждый подтверждает свой выбор. Если создатель меняет чек, подтверждения сбрасываются у всех." },
      ],
    },
    cases: {
      eyebrow: "Сценарии", title: "Когда пригодится Tolash",
      items: [
        { ic: "🍽️", t: "Кафе и чайхана", d: "Ужин с друзьями, обед с коллегами, день рождения." },
        { ic: "🚕", t: "Такси и поездки", d: "Дорога в аэропорт, выезд на природу, бензин на всех." },
        { ic: "🛒", t: "Продукты на дачу", d: "Один закупился на всю компанию — остальные возвращают свою долю." },
        { ic: "🎁", t: "Подарок в складчину", d: "Сумма делится на всех, а список долгов не потеряется." },
        { ic: "🏠", t: "Аренда и общие расходы", d: "Квартира, дача, коммуналка — с соседями или в поездке." },
        { ic: "🎓", t: "Студенческая жизнь", d: "Общежитие, мероприятия, поездки всей группой." },
      ],
    },
    faq: {
      eyebrow: "FAQ", title: "Вопросы перед стартом",
      items: [
        { q: "Это правда бесплатно?", a: "Да. Скан чека, делёж, друзья и статистика бесплатны для пользователей." },
        { q: "Нужно что-то скачивать?", a: "Нет. Tolash работает внутри Telegram — откройте бота, и приложение готово к работе на любом телефоне." },
        { q: "Tolash списывает или переводит деньги?", a: "Нет. Tolash только считает, кто сколько должен. Переводите друг другу как обычно — на карту, через Payme или Click." },
        { q: "Что если у друга нет Telegram?", a: "Добавьте его как гостя по имени. Он будет учтён в расчёте, а сумму вы ему просто скажете." },
        { q: "А если ИИ ошибётся в чеке?", a: "Любую позицию можно поправить вручную. Кроме того, Tolash сверяет сумму позиций с итогом чека." },
        { q: "Что с моими данными?", a: "Tolash хранит только номер, имя и ваши счета. Данные не продаются и не передаются третьим лицам." },
      ],
    },
    final: {
      title: "Попробуйте на ближайшем ужине",
      lead: "Откройте Tolash сейчас — на первый счёт уйдёт пара минут, а споры в конце вечера останутся в прошлом.",
      cta: "Открыть Tolash в Telegram", qr_t: "Или наведите камеру телефона",
    },
    sticky: "Открыть Tolash в Telegram",
    footer: "Делим счета честно",
    screens: {
      splits: {
        title: "Траты", sub: "Общие счета", add: "+ Новая",
        bills: [
          { ic: "🍽️", t: "Ужин в чайхане", m: "3 участника", s: "158 400", st: "делим", ppl: ["a", "d", "r"] },
          { ic: "🎁", t: "Подарок Тимуру", m: "4 участника", s: "600 000", st: "делим", ppl: ["a", "d", "k", "r"] },
          { ic: "🛒", t: "Продукты на дачу", m: "3 участника", s: "410 000", st: "делим", ppl: ["t", "k", "r"] },
          { ic: "🚕", t: "Такси в аэропорт", m: "2 участника", s: "60 000", st: "закрыт", closed: true, ppl: ["t", "r"] },
        ],
      },
      scan: { title: "Скан", hint: "Наведите камеру на чек", found: "Распознано: 5 позиций", ok: "сумма сошлась" },
      profile: {
        meta: "7 счетов · 4 друга", invite_t: "Пригласить друзей", invite_d: "Друг зарегистрируется за 10 секунд",
        invite_btn: "Поделиться ссылкой", friends_t: "Друзья", lang_l: "Язык", lang_v: "Русский",
      },
      bill: { meta: "3 участника", hint: "Отметьте, что вы ели", my_t: "Ваша доля", btn: "Кто сколько должен" },
    },
  },

  /* ======================================================== UZ */
  uz: {
    meta: {
      title: "Tolash — kafedagi hisobni bir daqiqada qanday bo'lish mumkin",
      desc: "Tolash bo'yicha qisqa yo'riqnoma: ilovada nimalar bor, chekni qanday suratga olish va hisobni do'stlar bilan adolatli bo'lish — to'g'ridan-to'g'ri Telegramda.",
    },
    nav_cta: "Telegramda ochish",
    hero: {
      eyebrow: "Yo'riqnoma · 3 daqiqa",
      h1a: "Kafedagi hisobni", h1b: "bir daqiqada", h1c: "bo'ling — adolatli va bahssiz",
      lead: "Tolash — to'g'ridan-to'g'ri Telegram ichidagi bepul ilova. Chekni suratga oling, do'stlar o'zinikini belgilaydi, Tolash esa kim qancha to'lashini hisoblaydi. Quyida — qisqa yo'riqnoma: ilovada nimalar bor va birinchi chekni qanday bo'lish kerak.",
      pills: ["Bepul", "O'rnatishsiz — Telegram ichida", "Русский · O'zbek · English"],
      cta1: "Tolashni Telegramda ochish", cta2: "Qanday ishlaydi",
    },
    people: { a: "Aziz", d: "Dilnoza", r: "Ruslan", t: "Timur", k: "Kamila", me: "siz" },
    initials: { a: "A", d: "D", r: "R", t: "T", k: "K" },
    food: { plov: "Osh", lagman: "Lag'mon", shashlik: "Shashlik", non: "Non", tea: "Choy, choynak" },
    currency: "so'm",
    pain: {
      eyebrow: "Tanishmi?", title: "Stolda chek — va boshlanadi",
      items: [
        { ic: "🧮", t: "«Teng bo'lamiz»", d: "Keyin ma'lum bo'ladiki, biri faqat choy ichgan, boshqasi esa uch kishilik shashlik buyurgan." },
        { ic: "💬", t: "«Qancha berishim kerakligini yozib yubor»", d: "Chek chatga ketadi, kimdir kalkulyatorda hisoblaydi, kimdir xizmat haqi ustida bahslashadi." },
        { ic: "⏳", t: "«Keyin o'tkazaman»", d: "Bir haftadan keyin hech kim kim kimga qancha qarzligini eslamaydi. Eslatish noqulay — pul esa yo'qoladi." },
      ],
      solution: "Tolash buni siz uchun qiladi: har kim faqat o'ziniki uchun to'laydi, qarzlar ro'yxati esa doim qo'l ostida.",
    },
    tabs: {
      eyebrow: "Ilova", title: "Ichida nima bor: 4 ta bo'lim",
      lead: "Tolash ekranining pastida to'rtta bo'lim bor. Har birida nima borligi va qanday foyda berishi — quyida.",
      label: "Bo'lim", helps_t: "Qanday yordam beradi", tip_t: "Maslahat",
      items: [
        {
          t: "Asosiy", sub: "Xarajatlar va qarzlaringiz bitta ekranda",
          d: "Bu yerda kun, hafta yoki oy davomida qancha sarflaganingiz, sizga qancha qarz ekanligi va siz qancha qarzligingiz, shuningdek so'nggi umumiy xarajatlar ko'rinadi.",
          helps: ["Kim kimga qarzligini eslab yurish shart emas — Tolash o'zi hisoblaydi", "Do'stlar bilan uchrashuvlarga hafta yoki oyda qancha ketishi ko'rinadi", "So'nggi xarajatlar doim qo'l ostida"],
          tip: "Kerakli davrdagi xarajatlarni ko'rish uchun «Kun · Hafta · Oy · Hammasi»ni almashtiring.",
        },
        {
          t: "Xarajatlar", sub: "Davraning barcha umumiy cheklari",
          d: "Do'stlar bilan bo'ladigan cheklar ro'yxati: kechki ovqatlar, taksi, sayohatlar, sovg'alar. Har birida summa, ishtirokchilar va holat: «bo'linmoqda» yoki «yopilgan». Chek bo'lmasa, xarajatni shu yerda qo'lda yaratish mumkin.",
          helps: ["Barcha umumiy cheklar yozishmalarda emas, bir joyda", "Holatiga qarab qaysi cheklar hali yopilmagani ko'rinadi", "Cheksiz xarajat — taksi, ijara, sovg'a — qo'lda kiritiladi"],
          tip: "Chek yo'qmi? Xarajatni qo'lda yarating: nomi, pozitsiyalar va narxlar — va skanerlangan chek kabi bo'ling.",
        },
        {
          t: "Skan", sub: "Chek surat orqali bir necha soniyada",
          d: "Kamerani chekka qarating — AI uni pozitsiyalarga ajratadi: nomi, miqdori, narxi, shuningdek soliq va xizmat haqi. So'ng pozitsiyalar yig'indisini chek jamisi bilan solishtiradi.",
          helps: ["Chekni qo'lda ko'chirib yozish shart emas", "O'zbek va rus tilidagi cheklarni, xira termopechat va skrinshotlarni tushunadi", "Biror narsa noto'g'ri o'qilsa, har qanday pozitsiyani tuzatish mumkin"],
          tip: "Chekni to'liq, tekis va yaxshi yorug'likda suratga oling — shunda aniqroq o'qiladi.",
        },
        {
          t: "Profil", sub: "Do'stlar, takliflar va sozlamalar",
          d: "Bu yerda do'stlaringiz ro'yxati va shaxsiy taklif havolangiz. Do'stingiz u orqali o'tadi, 10 soniyada ro'yxatdan o'tadi va sizda paydo bo'ladi — keyin uni istalgan chekka bir bosishda qo'shish mumkin. Tilni ham shu yerda o'zgartirasiz.",
          helps: ["Har safar do'stlarni qidirish shart emas — ular allaqachon ro'yxatda", "Butun davrani taklif qilish — umumiy chatga bitta havola", "Interfeys tili: rus, o'zbek yoki ingliz"],
          tip: "Kimdadir Telegram bo'lmasa, uni chekka ismi bilan mehmon sifatida qo'shing — u ham hisob-kitobga kiradi.",
        },
      ],
    },
    steps: {
      eyebrow: "Yo'riqnoma", title: "Birinchi chek 5 qadamda",
      lead: "Do'stlar bilan yaqin uchrashuvda sinab ko'ring — bir-ikki daqiqa oladi.",
      items: [
        { t: "Tolashni Telegramda oching", d: "Bu sahifadagi istalgan yashil tugmani bosing — @Tolash_uz_bot boti ochiladi. «Start» tugmasini bosing (yoki /start yuboring)." },
        { t: "Tilni tanlang va raqamni tasdiqlang", d: "Rus, o'zbek yoki ingliz tili. Telefon raqami faqat kirish va tarixni saqlash uchun kerak — ma'lumotlar sotilmaydi va uchinchi shaxslarga berilmaydi." },
        { t: "Chekni suratga oling", d: "«Skan» bo'limini oching va chekni suratga oling — pozitsiyalar bir necha soniyada paydo bo'ladi. Ularni tekshiring va kerak bo'lsa tuzating. Chek yo'qmi — «Xarajatlar» bo'limida xarajat yarating." },
        { t: "Do'stlarni chaqiring", d: "Chek havolasini davra chatiga yuboring yoki do'stlar ro'yxatidan ishtirokchi qo'shing. Telegrami yo'qlarni ismi bilan mehmon sifatida qo'shing." },
        { t: "Har kim o'zinikini belgilaydi — tayyor", d: "Har kim chekni ochib, nima yegani va ichganini belgilaydi. Umumiy taom uni yeganlar o'rtasida bo'linadi. «Kim qancha to'laydi» tugmasini bosing, tasdiqlang — va ulushingizni odatiy usulda o'tkazing: kartaga, Payme yoki Click orqali." },
      ],
      cta: "Hozir sinab ko'rish",
    },
    fair: {
      eyebrow: "Adolatli hisob", title: "Nega bu «teng bo'lish»dan adolatliroq",
      lead: "Misol: choyxonada uch kishilik kechki ovqat, xizmat haqi 10%.",
      receipt_t: "Choyxonada kechki ovqat", shared: "uch kishiga", service: "Xizmat haqi 10%", total: "Jami",
      result_t: "Kim qancha to'laydi", even_label: "teng",
      even_t: "Teng bo'linsa-chi?",
      even_d: "Har kimga {even}dan. {over} {diff} ortiqcha to'lardi, {under} esa xuddi shuncha kam to'lardi.",
      rules: [
        { ic: "🍲", t: "Umumiy — yeganlar o'rtasida", d: "Uch kishilik non va choy uchga bo'linadi. Salatni ikki kishi olgan bo'lsa — ikkiga." },
        { ic: "⚖️", t: "Xizmat haqi va soliq — mutanosib", d: "Kim ko'proq buyurgan bo'lsa, xizmat haqi ham shuncha ko'p. Shunday bo'lishi kerak." },
        { ic: "➗", t: "Belgilanmagani — teng", d: "Pozitsiyani hech kim belgilamasa, u barcha ishtirokchilar o'rtasida teng bo'linadi." },
        { ic: "🛡️", t: "Yashirin tuzatishlarsiz", d: "Har kim o'z tanlovini tasdiqlaydi. Yaratuvchi chekni o'zgartirsa, hammaning tasdig'i bekor bo'ladi." },
      ],
    },
    cases: {
      eyebrow: "Ssenariylar", title: "Tolash qachon kerak bo'ladi",
      items: [
        { ic: "🍽️", t: "Kafe va choyxona", d: "Do'stlar bilan kechki ovqat, hamkasblar bilan tushlik, tug'ilgan kun." },
        { ic: "🚕", t: "Taksi va sayohatlar", d: "Aeroportga yo'l, tabiatga chiqish, hammaga benzin." },
        { ic: "🛒", t: "Dala hovliga mahsulotlar", d: "Biri butun davra uchun xarid qildi — qolganlar o'z ulushini qaytaradi." },
        { ic: "🎁", t: "Umumiy sovg'a", d: "Summa hammaga bo'linadi, qarzlar ro'yxati esa yo'qolmaydi." },
        { ic: "🏠", t: "Ijara va umumiy xarajatlar", d: "Kvartira, dala hovli, kommunal to'lovlar — qo'shnilar bilan yoki safarda." },
        { ic: "🎓", t: "Talabalik hayoti", d: "Yotoqxona, tadbirlar, butun guruh bilan sayohatlar." },
      ],
    },
    faq: {
      eyebrow: "Savollar", title: "Boshlashdan oldingi savollar",
      items: [
        { q: "Bu haqiqatan ham bepulmi?", a: "Ha. Chekni skanerlash, bo'lish, do'stlar va statistika foydalanuvchilar uchun bepul." },
        { q: "Biror narsa yuklab olish kerakmi?", a: "Yo'q. Tolash Telegram ichida ishlaydi — botni oching, ilova istalgan telefonda ishlashga tayyor." },
        { q: "Tolash pul yechadimi yoki o'tkazadimi?", a: "Yo'q. Tolash faqat kim qancha to'lashini hisoblaydi. Bir-biringizga odatdagidek o'tkazasiz — kartaga, Payme yoki Click orqali." },
        { q: "Do'stimda Telegram bo'lmasa-chi?", a: "Uni ismi bilan mehmon sifatida qo'shing. U hisobga kiradi, summani esa unga shunchaki aytasiz." },
        { q: "AI chekda xato qilsa-chi?", a: "Har qanday pozitsiyani qo'lda tuzatish mumkin. Bundan tashqari, Tolash pozitsiyalar yig'indisini chek jamisi bilan solishtiradi." },
        { q: "Ma'lumotlarim bilan nima bo'ladi?", a: "Tolash faqat raqam, ism va cheklaringizni saqlaydi. Ma'lumotlar sotilmaydi va uchinchi shaxslarga berilmaydi." },
      ],
    },
    final: {
      title: "Yaqin kechki ovqatda sinab ko'ring",
      lead: "Tolashni hozir oching — birinchi chekka bir-ikki daqiqa ketadi, kecha oxiridagi bahslar esa o'tmishda qoladi.",
      cta: "Tolashni Telegramda ochish", qr_t: "Yoki telefon kamerasini qarating",
    },
    sticky: "Tolashni Telegramda ochish",
    footer: "Cheklarni adolatli bo'lamiz",
    screens: {
      splits: {
        title: "Xarajatlar", sub: "Umumiy cheklar", add: "+ Yangi",
        bills: [
          { ic: "🍽️", t: "Choyxonada kechki ovqat", m: "3 ishtirokchi", s: "158 400", st: "bo'linmoqda", ppl: ["a", "d", "r"] },
          { ic: "🎁", t: "Timurga sovg'a", m: "4 ishtirokchi", s: "600 000", st: "bo'linmoqda", ppl: ["a", "d", "k", "r"] },
          { ic: "🛒", t: "Dala hovliga mahsulotlar", m: "3 ishtirokchi", s: "410 000", st: "bo'linmoqda", ppl: ["t", "k", "r"] },
          { ic: "🚕", t: "Aeroportga taksi", m: "2 ishtirokchi", s: "60 000", st: "yopilgan", closed: true, ppl: ["t", "r"] },
        ],
      },
      scan: { title: "Skan", hint: "Kamerani chekka qarating", found: "O'qildi: 5 pozitsiya", ok: "summa to'g'ri" },
      profile: {
        meta: "7 ta chek · 4 do'st", invite_t: "Do'stlarni taklif qilish", invite_d: "Do'stingiz 10 soniyada ro'yxatdan o'tadi",
        invite_btn: "Havolani ulashish", friends_t: "Do'stlar", lang_l: "Til", lang_v: "O'zbekcha",
      },
      bill: { meta: "3 ishtirokchi", hint: "Nima yeganingizni belgilang", my_t: "Sizning ulushingiz", btn: "Kim qancha to'laydi" },
    },
  },

  /* ======================================================== EN */
  en: {
    meta: {
      title: "Tolash — how to split a café bill in a minute",
      desc: "A short guide to Tolash: what's in the app, how to snap a receipt and split the bill fairly with friends — right inside Telegram.",
    },
    nav_cta: "Open in Telegram",
    hero: {
      eyebrow: "Guide · 3 min read",
      h1a: "Split the café bill", h1b: "in a minute", h1c: "— fairly, no arguments",
      lead: "Tolash is a free app right inside Telegram. Snap the receipt, friends mark what they had, and Tolash works out who owes what. Below is a short guide: what's in the app and how to split your first bill.",
      pills: ["Free", "No install — inside Telegram", "Русский · O'zbek · English"],
      cta1: "Open Tolash in Telegram", cta2: "How it works",
    },
    people: { a: "Aziz", d: "Dilnoza", r: "Ruslan", t: "Timur", k: "Kamila", me: "you" },
    initials: { a: "A", d: "D", r: "R", t: "T", k: "K" },
    food: { plov: "Plov", lagman: "Lagman", shashlik: "Shashlik", non: "Non bread", tea: "Tea, pot" },
    currency: "UZS",
    pain: {
      eyebrow: "Sound familiar?", title: "The bill hits the table — and it begins",
      items: [
        { ic: "🧮", t: "\"Let's just split it evenly\"", d: "Then it turns out one person only had tea, and another ordered shashlik for three." },
        { ic: "💬", t: "\"Send me what I owe\"", d: "The receipt goes to the chat, someone does the maths on a calculator, someone argues about the service charge." },
        { ic: "⏳", t: "\"I'll pay you back later\"", d: "A week on, nobody remembers who owes whom or how much. Reminding people is awkward — and the money is gone." },
      ],
      solution: "Tolash does it for you: everyone pays only for their own, and the list of debts is always at hand.",
    },
    tabs: {
      eyebrow: "The app", title: "What's inside: 4 tabs",
      lead: "There are four tabs at the bottom of the Tolash screen. Here's what each one holds and how it helps.",
      label: "Tab", helps_t: "How it helps", tip_t: "Tip",
      items: [
        {
          t: "Home", sub: "Your spending and debts on one screen",
          d: "See how much you spent this day, week or month, how much you're owed and how much you owe, plus your latest shared expenses.",
          helps: ["No need to remember who owes whom — Tolash does the maths", "See how much goes on meeting friends each week or month", "Your latest expenses are always at hand"],
          tip: "Switch between \"Day · Week · Month · All\" to see spending for any period.",
        },
        {
          t: "Splits", sub: "All of the group's shared bills",
          d: "The list of bills you share with friends: dinners, taxis, trips, gifts. Each shows the amount, the participants and a status: \"splitting\" or \"closed\". You can also create an expense by hand here when there's no receipt.",
          helps: ["All shared bills in one place, not lost in the chat", "The status shows which bills are still open", "Expenses without a receipt — a taxi, rent, a gift — are entered by hand"],
          tip: "No receipt? Create an expense manually: a name, items and prices — then split it just like a scanned receipt.",
        },
        {
          t: "Scan", sub: "A receipt from a photo in seconds",
          d: "Point the camera at the receipt and AI breaks it into items: name, quantity, price, plus tax and service charge. Then it checks the item sum against the receipt total.",
          helps: ["No retyping the receipt by hand", "Reads Uzbek and Russian receipts, faded thermal print and screenshots", "Any item can be corrected if something was read wrong"],
          tip: "Shoot the whole receipt, flat and in good light — recognition will be more accurate.",
        },
        {
          t: "Profile", sub: "Friends, invites and settings",
          d: "Your friends list and personal invite link live here. A friend taps the link, signs up in 10 seconds and appears in your list — then you can add them to any bill with one tap. You can change the language here too.",
          helps: ["No hunting for friends every time — they're already in your list", "Inviting the whole group takes one link in the chat", "Interface language: Russian, Uzbek or English"],
          tip: "If someone doesn't use Telegram, add them to the bill as a guest by name — they'll still be included in the split.",
        },
      ],
    },
    steps: {
      eyebrow: "Guide", title: "Your first bill in 5 steps",
      lead: "Try it the next time you meet friends — it takes a couple of minutes.",
      items: [
        { t: "Open Tolash in Telegram", d: "Tap any green button on this page — the @Tolash_uz_bot bot opens. Tap \"Start\" (or send /start)." },
        { t: "Choose a language and confirm your number", d: "Russian, Uzbek or English. Your phone number is only used to sign in and keep your history — data is never sold or shared with third parties." },
        { t: "Snap the receipt", d: "Open the \"Scan\" tab and photograph the receipt — the items appear in a few seconds. Check them and fix anything if needed. No receipt? Create an expense in the \"Splits\" tab." },
        { t: "Invite your friends", d: "Send the bill link to the group chat or add participants from your friends list. Add people without Telegram as guests by name." },
        { t: "Everyone marks their items — done", d: "Each person opens the bill and marks what they ate and drank. A shared dish is split between those who had it. Tap \"Who owes what\", confirm — and send your share the usual way: by card, Payme or Click." },
      ],
      cta: "Try it now",
    },
    fair: {
      eyebrow: "Fair maths", title: "Why it's fairer than splitting evenly",
      lead: "Example: dinner for three at a chaikhana, 10% service.",
      receipt_t: "Dinner at a chaikhana", shared: "for three", service: "Service 10%", total: "Total",
      result_t: "Who pays what", even_label: "evenly",
      even_t: "And if split evenly?",
      even_d: "{even} each. {over} would overpay by {diff}, and {under} would underpay by exactly as much.",
      rules: [
        { ic: "🍲", t: "Shared — between those who had it", d: "Bread and tea for three are split three ways. If two people shared a salad — two ways." },
        { ic: "⚖️", t: "Service and tax — proportionally", d: "Whoever ordered more pays more of the service charge. As it should be." },
        { ic: "➗", t: "Unclaimed — equally", d: "If nobody marks an item, it's split equally between all participants." },
        { ic: "🛡️", t: "No quiet edits", d: "Everyone confirms their choice. If the creator edits the bill, every confirmation resets." },
      ],
    },
    cases: {
      eyebrow: "Use cases", title: "When Tolash comes in handy",
      items: [
        { ic: "🍽️", t: "Cafés and chaikhanas", d: "Dinner with friends, lunch with colleagues, birthdays." },
        { ic: "🚕", t: "Taxis and trips", d: "The ride to the airport, a day in the countryside, fuel for everyone." },
        { ic: "🛒", t: "Groceries for the dacha", d: "One person shops for the whole group — the rest pay back their share." },
        { ic: "🎁", t: "Group gifts", d: "The amount is split among everyone, and the list of debts doesn't get lost." },
        { ic: "🏠", t: "Rent and shared costs", d: "A flat, a dacha, utilities — with flatmates or on a trip." },
        { ic: "🎓", t: "Student life", d: "Dorms, events, trips with the whole group." },
      ],
    },
    faq: {
      eyebrow: "FAQ", title: "Questions before you start",
      items: [
        { q: "Is it really free?", a: "Yes. Receipt scanning, splitting, friends and stats are free for users." },
        { q: "Do I need to download anything?", a: "No. Tolash runs inside Telegram — open the bot and the app is ready on any phone." },
        { q: "Does Tolash charge or move money?", a: "No. Tolash only works out who owes what. You pay each other as usual — by card, Payme or Click." },
        { q: "What if a friend doesn't have Telegram?", a: "Add them as a guest by name. They're included in the split, and you simply tell them the amount." },
        { q: "What if the AI misreads the receipt?", a: "Any item can be corrected by hand. Tolash also checks the item sum against the receipt total." },
        { q: "What about my data?", a: "Tolash stores only your number, name and your bills. Data is never sold or shared with third parties." },
      ],
    },
    final: {
      title: "Try it at your next dinner",
      lead: "Open Tolash now — your first bill takes a couple of minutes, and end-of-evening arguments become a thing of the past.",
      cta: "Open Tolash in Telegram", qr_t: "Or point your phone's camera here",
    },
    sticky: "Open Tolash in Telegram",
    footer: "Split bills fairly",
    screens: {
      splits: {
        title: "Splits", sub: "Shared bills", add: "+ New",
        bills: [
          { ic: "🍽️", t: "Dinner at a chaikhana", m: "3 people", s: "158,400", st: "splitting", ppl: ["a", "d", "r"] },
          { ic: "🎁", t: "Gift for Timur", m: "4 people", s: "600,000", st: "splitting", ppl: ["a", "d", "k", "r"] },
          { ic: "🛒", t: "Groceries for the dacha", m: "3 people", s: "410,000", st: "splitting", ppl: ["t", "k", "r"] },
          { ic: "🚕", t: "Taxi to the airport", m: "2 people", s: "60,000", st: "closed", closed: true, ppl: ["t", "r"] },
        ],
      },
      scan: { title: "Scan", hint: "Point the camera at the receipt", found: "Recognised: 5 items", ok: "total matches" },
      profile: {
        meta: "7 bills · 4 friends", invite_t: "Invite friends", invite_d: "A friend signs up in 10 seconds",
        invite_btn: "Share link", friends_t: "Friends", lang_l: "Language", lang_v: "English",
      },
      bill: { meta: "3 people", hint: "Mark what you had", my_t: "Your share", btn: "Who owes what" },
    },
  },
};
