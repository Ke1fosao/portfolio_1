type ProjectSceneProps = {
  slug: string;
  title: string;
};

function SceneShell({ slug, title, children }: ProjectSceneProps & { children: React.ReactNode }) {
  return (
    <div className={`wk-scene wk-scene-${slug}`} aria-hidden="true">
      <div className="wk-scene-grid" />
      <div className="wk-scene-topline">
        <span>{title}</span>
        <small>CASE / 2026</small>
      </div>
      {children}
      <div className="wk-scene-corner">DK / DIGITAL SYSTEM</div>
    </div>
  );
}

function BabyLandScene() {
  return (
    <SceneShell slug="babyland" title="BabyLand">
      <div className="wk-ui-window wk-baby-window">
        <div className="wk-ui-bar"><i /><i /><i /><span>babyland / dashboard</span></div>
        <div className="wk-baby-layout">
          <aside>
            <strong>BL</strong>
            <span className="is-active">Огляд</span>
            <span>Заявки</span>
            <span>Групи</span>
            <span>Новини</span>
          </aside>
          <div className="wk-baby-content">
            <div className="wk-scene-heading"><span>Сьогодні</span><strong>Центр керування</strong></div>
            <div className="wk-baby-stats"><i>12<small>заявок</small></i><i>6<small>груп</small></i><i>84<small>батьки</small></i></div>
            <div className="wk-kanban">
              <div><span>Нові</span><b>Марія К.</b><b>Олег П.</b></div>
              <div><span>У роботі</span><b>Анна С.</b></div>
              <div><span>Готово</span><b>Ірина М.</b><b>Тарас В.</b></div>
            </div>
          </div>
        </div>
      </div>
      <div className="wk-scene-chip is-one">Parent</div>
      <div className="wk-scene-chip is-two">Teacher</div>
      <div className="wk-scene-chip is-three">Admin</div>
    </SceneShell>
  );
}

function DnzScene() {
  return (
    <SceneShell slug="dnz52" title="ЗДО №52">
      <div className="wk-dnz-stack">
        <div className="wk-dnz-screen is-public">
          <div className="wk-mini-nav"><span>ЗДО 52</span><i /><i /><i /></div>
          <div className="wk-mini-hero"><small>РАЗОМ ЗРОСТАЄМО</small><strong>Безпечне дитинство починається тут</strong><span>Дізнатися більше</span></div>
        </div>
        <div className="wk-dnz-screen is-admin">
          <div className="wk-admin-side"><b>52</b><i /><i /><i /><i /></div>
          <div className="wk-admin-main"><span>Адмінпанель</span><div className="wk-admin-chart"><i /><i /><i /><i /><i /></div><div className="wk-admin-row"><b /><b /><b /></div></div>
        </div>
        <div className="wk-dnz-phone"><span>AI</span><strong>Чим допомогти?</strong><i>Онлайн-зарахування</i><i>Меню на сьогодні</i></div>
      </div>
      <div className="wk-dnz-badge is-pwa">PWA</div>
      <div className="wk-dnz-badge is-secure">2FA</div>
      <div className="wk-dnz-badge is-ai">AI</div>
    </SceneShell>
  );
}

function FancyScene() {
  return (
    <SceneShell slug="fancy" title="FÁNCY">
      <div className="wk-fancy-editorial">
        <div className="wk-fancy-photo"><span>F</span><i /></div>
        <div className="wk-fancy-copy"><small>BEAUTY HOUSE / RIVNE</small><strong>Краса, яка починається з відчуття.</strong><p>Hair · Nails · Brows · Make-up</p><button type="button">Записатися</button></div>
      </div>
      <div className="wk-fancy-card is-a">Hair<br /><strong>від 650 ₴</strong></div>
      <div className="wk-fancy-card is-b">Brows<br /><strong>від 350 ₴</strong></div>
    </SceneShell>
  );
}

function AutoScene() {
  return (
    <SceneShell slug="grand-team-auto" title="Grand Team Auto">
      <div className="wk-auto-screen">
        <div className="wk-auto-nav"><strong>GTA</strong><span>Сервіс</span><span>Діагностика</span><span>Контакти</span></div>
        <div className="wk-auto-car"><span>AUDI</span><div className="wk-car-shape"><i /><i /><b /></div></div>
        <div className="wk-auto-copy"><small>VAG SERVICE / RIVNE</small><strong>Точність у кожній деталі.</strong></div>
        <div className="wk-auto-price"><span>Калькулятор</span><strong>від 1 200 ₴</strong><i /></div>
      </div>
    </SceneShell>
  );
}

function HappyKidsScene() {
  return (
    <SceneShell slug="happy-kids" title="Happy Kids">
      <div className="wk-kids-board">
        <div className="wk-kids-title"><span>HAPPY</span><strong>KIDS</strong><small>grow · play · discover</small></div>
        <div className="wk-kids-shape is-sun" />
        <div className="wk-kids-shape is-cloud" />
        <div className="wk-kids-program is-a"><b>01</b><span>Ранній розвиток</span></div>
        <div className="wk-kids-program is-b"><b>02</b><span>Підготовка до школи</span></div>
        <div className="wk-kids-program is-c"><b>03</b><span>Творчі заняття</span></div>
      </div>
    </SceneShell>
  );
}

function OseredokScene() {
  return (
    <SceneShell slug="oseredok" title="Oseredok">
      <div className="wk-oseredok-poster">
        <div className="wk-polish-mark">PL</div>
        <small>CENTRUM JĘZYKA I KULTURY</small>
        <strong>Польська, яка відкриває більше.</strong>
        <div className="wk-levels"><span>A1</span><span>A2</span><span>B1</span><span>B2</span></div>
        <div className="wk-test-card"><i>12</i><span>хвилин</span><b>Визначити рівень</b></div>
      </div>
    </SceneShell>
  );
}

function PoppinsScene() {
  return (
    <SceneShell slug="poppins-club" title="The Poppins Club">
      <div className="wk-poppins-system">
        <div className="wk-poppins-public"><small>PRIVATE KINDERGARTEN</small><strong>Дитинство, яке запам’ятовується.</strong><span>Записатися на знайомство</span></div>
        <div className="wk-poppins-flow">
          <div><b>01</b><span>Анкета</span></div><i />
          <div><b>02</b><span>CRM</span></div><i />
          <div><b>03</b><span>Telegram</span></div><i />
          <div><b>04</b><span>AI</span></div>
        </div>
      </div>
    </SceneShell>
  );
}

function AiScene() {
  return (
    <SceneShell slug="ai-sales-manager" title="AI Sales Manager">
      <div className="wk-ai-console">
        <div className="wk-ai-status"><i /> ONLINE · TELEGRAM SALES AGENT</div>
        <div className="wk-ai-bubble is-client"><small>Клієнт</small><p>Потрібен сайт для салону. Хочу більше записів.</p></div>
        <div className="wk-ai-thinking"><i /><i /><i /></div>
        <div className="wk-ai-bubble is-agent"><small>AI-менеджер</small><p>Уточню формат послуг, бюджет, строки та потрібний сценарій запису.</p></div>
        <div className="wk-ai-brief"><span>Лід кваліфіковано</span><div><i>Ніша<strong>Beauty</strong></i><i>Ціль<strong>Онлайн-запис</strong></i><i>Статус<strong>Пропозиція</strong></i></div></div>
      </div>
    </SceneShell>
  );
}

function DefaultScene({ slug, title }: ProjectSceneProps) {
  return (
    <SceneShell slug={slug} title={title}>
      <div className="wk-default-scene"><span>{title.slice(0, 2).toUpperCase()}</span><strong>{title}</strong></div>
    </SceneShell>
  );
}

export function ProjectScene({ slug, title }: ProjectSceneProps) {
  if (slug === "babyland") return <BabyLandScene />;
  if (slug === "dnz52") return <DnzScene />;
  if (slug === "fancy") return <FancyScene />;
  if (slug === "grand-team-auto") return <AutoScene />;
  if (slug === "happy-kids") return <HappyKidsScene />;
  if (slug === "oseredok") return <OseredokScene />;
  if (slug === "poppins-club") return <PoppinsScene />;
  if (slug === "ai-sales-manager") return <AiScene />;
  return <DefaultScene slug={slug} title={title} />;
}
