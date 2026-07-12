export function Dnz52HeroScene() {
  return (
    <div className="z52-hero-scene" aria-hidden="true">
      <div className="z52-orbit is-one" />
      <div className="z52-orbit is-two" />
      <div className="z52-screen is-public">
        <div className="z52-screen-bar"><i /><i /><i /><span>dnz52.onrender.com</span></div>
        <div className="z52-public-nav"><strong>52</strong><span>Новини</span><span>Групи</span><span>Батькам</span><b>Зарахування</b></div>
        <div className="z52-public-copy"><small>ЗАКЛАД ДОШКІЛЬНОЇ ОСВІТИ</small><strong>Разом створюємо простір дитинства</strong><p>Новини, події, меню, документи та онлайн-сервіси.</p></div>
        <div className="z52-public-bento"><i /><i /><i /><i /></div>
      </div>
      <div className="z52-screen is-admin">
        <div className="z52-screen-bar"><i /><i /><i /><span>/manage</span></div>
        <div className="z52-admin-mini"><aside><b>52</b><i /><i /><i /><i /></aside><main><span>Огляд</span><div><i /><i /><i /></div><section><b /><b /><b /><b /></section></main></div>
      </div>
      <div className="z52-phone">
        <span>PWA</span><strong>Встановлено</strong><i>Новини доступні офлайн</i><i>Push: Подія завтра</i><button type="button">Відкрити</button>
      </div>
      <span className="z52-scene-chip is-ai">AI «СОНЕЧКО»</span>
      <span className="z52-scene-chip is-pwa">OFFLINE + PUSH</span>
    </div>
  );
}

export function SearchScene() {
  return (
    <div className="z52-search-scene" aria-hidden="true">
      <div className="z52-search-box"><span>⌕</span><strong>документи для зарахуваня</strong><i /></div>
      <div className="z52-search-hint">Можливо, ви мали на увазі: <b>зарахування</b></div>
      <div className="z52-search-results">
        <article><span>01</span><div><strong>Онлайн-зарахування</strong><p>Подання заяви та перелік необхідних документів</p></div><i>94%</i></article>
        <article><span>02</span><div><strong>Розділ для батьків</strong><p>Правила, поради й відповіді на часті запитання</p></div><i>81%</i></article>
        <article><span>03</span><div><strong>Документи</strong><p>Нормативні матеріали закладу</p></div><i>72%</i></article>
      </div>
    </div>
  );
}

export function EnrollmentScene() {
  const steps = ["Дитина", "Батьки", "Контакти", "Згода", "Перевірка", "Заявка"];
  return (
    <div className="z52-enrollment-scene" aria-hidden="true">
      <div className="z52-enrollment-progress">{steps.map((step, index) => <span key={step}><i>{index + 1}</i>{step}</span>)}</div>
      <div className="z52-enrollment-form">
        <small>КРОК 4 З 6</small><strong>Згода на обробку даних</strong><p>Перед надсиланням система перевіряє обов’язкові поля, контакти й антиспам-сигнали.</p>
        <label><i /> Погоджуюся з політикою конфіденційності</label>
        <button type="button">Продовжити →</button>
      </div>
      <div className="z52-shield"><span>HONEYPOT</span><span>RATE LIMIT</span><span>TURNSTILE</span></div>
    </div>
  );
}

export function AdminScene() {
  return (
    <div className="z52-admin-scene" aria-hidden="true">
      <aside><div>52</div><span>Огляд</span><span>Контент</span><span>Заявки</span><span>Користувачі</span><span>Push</span><span>Історія</span></aside>
      <main>
        <header><div><small>ОПЕРАЦІЙНИЙ ЦЕНТР</small><strong>Добрий день, адміністраторе</strong></div><button type="button">+ Створити</button></header>
        <div className="z52-admin-stats"><article><span>Нові заявки</span><strong>08</strong><i>+3 сьогодні</i></article><article><span>Матеріали</span><strong>146</strong><i>оновлено</i></article><article><span>Push-підписки</span><strong>312</strong><i>2 теми</i></article></div>
        <section className="z52-admin-board"><div><small>ЧЕРНЕТКА</small><i>Весняне свято</i><i>Оновлення меню</i></div><div><small>НА ПЕРЕВІРЦІ</small><i>Новина групи</i></div><div><small>ОПУБЛІКОВАНО</small><i>День відкритих дверей</i><i>Графік роботи</i></div></section>
        <footer><span>Остання дія</span><strong>Оновлено сторінку «Батькам»</strong><i>щойно</i></footer>
      </main>
    </div>
  );
}

export function PwaScene() {
  return (
    <div className="z52-pwa-scene" aria-hidden="true">
      <div className="z52-pwa-phone">
        <div className="z52-phone-notch" />
        <small>ЗДО №52</small><strong>Працює навіть без мережі</strong><div className="z52-offline-badge"><i /> OFFLINE READY</div>
        <article><span>Новини</span><b>Останні матеріали збережено</b></article><article><span>Меню</span><b>Поточний тиждень доступний</b></article><button type="button">Перейти на головну</button>
      </div>
      <div className="z52-push-card is-one"><span>ЗДО №52 · зараз</span><strong>Нова подія</strong><p>Завтра о 10:00 — родинне свято.</p></div>
      <div className="z52-push-card is-two"><span>ЗДО №52 · 2 хв</span><strong>Опубліковано новину</strong><p>Перегляньте фото з заняття.</p></div>
    </div>
  );
}

export function AiScene() {
  return (
    <div className="z52-ai-scene" aria-hidden="true">
      <header><span><i /> ШІ-помічник «Сонечко»</span><small>GEMINI + SITE CONTEXT</small></header>
      <div className="z52-ai-message is-user"><span>Батьки</span><p>Які документи потрібні для зарахування?</p></div>
      <div className="z52-ai-message is-ai"><span>Сонечко</span><p>Для подання заявки підготуйте контактні дані та інформацію про дитину. Повний перелік є у розділі «Зарахування».</p><a>Відкрити джерело ↗</a></div>
      <div className="z52-ai-context"><span>Контекст</span><i>Сторінки сайту</i><i>FAQ</i><i>Документи</i><i>Контакти</i></div>
    </div>
  );
}

export function ArchitectureScene() {
  const nodes = [
    ["EXPERIENCE", "React SPA"],
    ["API", "Django REST"],
    ["DATA", "PostgreSQL"],
    ["MEDIA", "Supabase Storage"],
    ["PWA", "Workbox"],
    ["AI", "Gemini"],
    ["DELIVERY", "Render"]
  ];
  return (
    <div className="z52-architecture-scene" aria-hidden="true">
      <div className="z52-architecture-core"><small>ONE</small><strong>WEB<br />APP</strong><span>MONOREPO</span></div>
      {nodes.map(([label, title], index) => <div className={`z52-arch-node is-${index + 1}`} key={label}><span>{label}</span><strong>{title}</strong></div>)}
      {nodes.map(([, title], index) => <i className={`z52-arch-line is-${index + 1}`} key={`${title}-line`} />)}
    </div>
  );
}
