type JourneySceneProps = {
  mode: "parent" | "content" | "admin";
};

type RoleSceneProps = {
  activeRole?: string;
};

export function BabylandHeroScene() {
  return (
    <div className="bl-hero-scene" aria-hidden="true">
      <div className="bl-hero-orbit is-one" />
      <div className="bl-hero-orbit is-two" />
      <div className="bl-device bl-device-desktop">
        <div className="bl-browser-bar"><i /><i /><i /><span>babyland.com.ua</span></div>
        <div className="bl-public-ui">
          <div className="bl-public-nav"><strong>BL</strong><span>Про нас</span><span>Групи</span><span>Педагоги</span><b>Записатися</b></div>
          <div className="bl-public-hero"><small>ПРИВАТНИЙ САДОК У РІВНОМУ</small><strong>Простір, де зростають щасливі діти</strong><p>Турбота, розвиток і безпечне середовище.</p></div>
          <div className="bl-public-cards"><i /><i /><i /></div>
        </div>
      </div>
      <div className="bl-device bl-device-admin">
        <div className="bl-browser-bar"><i /><i /><i /><span>admin / dashboard</span></div>
        <div className="bl-admin-mini">
          <aside><b>BL</b><i /><i /><i /><i /></aside>
          <main><span>Огляд</span><div className="bl-admin-mini-stats"><i /><i /><i /></div><div className="bl-admin-mini-chart"><b /><b /><b /><b /><b /></div></main>
        </div>
      </div>
      <div className="bl-device bl-device-phone">
        <div className="bl-phone-notch" />
        <span>Профіль</span>
        <div className="bl-phone-avatar">М</div>
        <strong>Марія Коваль</strong>
        <i>Дитина: Софія</i>
        <i>Група: Сонечко</i>
      </div>
      <div className="bl-scene-chip is-public">PUBLIC</div>
      <div className="bl-scene-chip is-admin">ADMIN</div>
      <div className="bl-scene-chip is-parent">PARENT</div>
    </div>
  );
}

export function EcosystemScene() {
  const nodes = [
    ["public", "Публічний сайт"],
    ["forms", "Заявки"],
    ["content", "Контент"],
    ["operations", "Операції"],
    ["identity", "Ролі"],
    ["security", "Безпека"]
  ] as const;

  return (
    <div className="bl-ecosystem-scene" aria-hidden="true">
      <div className="bl-ecosystem-ring is-one" />
      <div className="bl-ecosystem-ring is-two" />
      <div className="bl-ecosystem-core"><small>ONE</small><strong>BABY<br />LAND</strong><span>ECOSYSTEM</span></div>
      {nodes.map(([id, label], index) => (
        <div className={`bl-ecosystem-node is-${id}`} key={id}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{label}</strong>
        </div>
      ))}
      {nodes.map(([id], index) => <i className={`bl-ecosystem-link is-${id}`} key={`${id}-link`} style={{ "--node-index": index } as React.CSSProperties} />)}
    </div>
  );
}

export function JourneyScene({ mode }: JourneySceneProps) {
  if (mode === "parent") {
    return (
      <div className="bl-journey-scene is-parent" aria-hidden="true">
        <div className="bl-journey-phone">
          <div className="bl-phone-notch" />
          <span>BabyLand</span>
          <strong>Оберіть групу</strong>
          <div className="bl-parent-group"><i>1.5–3</i><b>Бджілки</b><small>12 місць</small></div>
          <div className="bl-parent-group"><i>3–4</i><b>Сонечко</b><small>14 місць</small></div>
          <button type="button">Записатися</button>
        </div>
        <div className="bl-journey-timeline"><span>01 Знайомство</span><span>02 Група</span><span>03 Заявка</span><span>04 Профіль</span></div>
      </div>
    );
  }

  if (mode === "content") {
    return (
      <div className="bl-journey-scene is-content" aria-hidden="true">
        <div className="bl-content-editor">
          <div className="bl-editor-head"><span>Редактор новини</span><b>Зберегти</b></div>
          <div className="bl-editor-toolbar"><i /><i /><i /><i /><i /></div>
          <div className="bl-editor-title">Новий день у BabyLand</div>
          <div className="bl-editor-lines"><i /><i /><i /><i /></div>
          <div className="bl-editor-media"><span>+</span><small>Додати обкладинку</small></div>
        </div>
        <div className="bl-content-publish"><i /> Опубліковано</div>
      </div>
    );
  }

  return (
    <div className="bl-journey-scene is-admin" aria-hidden="true">
      <div className="bl-ops-board">
        <div className="bl-ops-head"><span>Заявки</span><b>12 нових</b></div>
        <div className="bl-ops-columns">
          <div><small>НОВІ</small><i>Марія К.</i><i>Олег П.</i><i>Ірина С.</i></div>
          <div><small>У РОБОТІ</small><i>Анна М.</i><i>Тарас В.</i></div>
          <div><small>ПРИЙНЯТО</small><i>Софія Л.</i></div>
        </div>
      </div>
      <div className="bl-ops-activity"><span>Остання дія</span><strong>Статус заявки змінено</strong><small>щойно · admin</small></div>
    </div>
  );
}

export function PipelineScene() {
  const steps = ["FORM", "VALIDATE", "TURNSTILE", "FUNCTION", "LIMIT", "FIRESTORE", "ADMIN"];
  return (
    <div className="bl-pipeline-scene" aria-hidden="true">
      <div className="bl-pipeline-track">
        {steps.map((step, index) => (
          <div className="bl-pipeline-step" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
            {index < steps.length - 1 ? <i /> : null}
          </div>
        ))}
      </div>
      <div className="bl-pipeline-packet"><b>APPLICATION</b><span>encrypted request flow</span></div>
      <div className="bl-pipeline-note">ANONYMOUS FIRESTORE WRITE: DENIED</div>
    </div>
  );
}

export function AdminScene() {
  return (
    <div className="bl-admin-scene" aria-hidden="true">
      <aside className="bl-admin-sidebar">
        <strong>BL</strong>
        <span className="is-active">Огляд</span>
        <span>Заявки</span>
        <span>Контент</span>
        <span>Групи</span>
        <span>Користувачі</span>
        <span>Аудит</span>
      </aside>
      <div className="bl-admin-workspace">
        <div className="bl-admin-top"><div><small>СЬОГОДНІ</small><strong>Операційний центр</strong></div><b>+ Нова дія</b></div>
        <div className="bl-admin-stats"><article><span>12</span><small>нових заявок</small></article><article><span>5</span><small>екскурсій</small></article><article><span>3</span><small>повідомлення</small></article></div>
        <div className="bl-admin-body">
          <div className="bl-admin-chart"><span>Активність</span><div><i /><i /><i /><i /><i /><i /><i /></div></div>
          <div className="bl-admin-feed"><span>Останні події</span><i><b>admin</b> оновив групу</i><i><b>moderator</b> прийняв заявку</i><i><b>content</b> опублікував новину</i></div>
        </div>
      </div>
    </div>
  );
}

export function RoleScene({ activeRole = "developer" }: RoleSceneProps) {
  const roles = ["developer", "admin", "moderator", "content", "teacher", "parent"];
  return (
    <div className="bl-role-scene" aria-hidden="true">
      <div className="bl-role-core"><small>VERIFIED</small><strong>CUSTOM<br />CLAIMS</strong></div>
      {roles.map((role, index) => (
        <div className={`bl-role-node is-${role}${role === activeRole ? " is-active" : ""}`} key={role}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{role}</strong>
        </div>
      ))}
      <div className="bl-role-shield">AUTHZ</div>
    </div>
  );
}

export function ArchitectureScene() {
  const layers = [
    ["Experience", "React 19"],
    ["State", "Zustand"],
    ["Identity", "Firebase Auth"],
    ["Server", "Cloud Functions"],
    ["Data", "Firestore"],
    ["Media", "Storage"],
    ["Delivery", "Hosting"]
  ];

  return (
    <div className="bl-architecture-scene" aria-hidden="true">
      <div className="bl-architecture-flow">
        {layers.map(([label, title], index) => (
          <div className={`bl-architecture-node is-${index + 1}`} key={label}>
            <small>{label}</small><strong>{title}</strong>
            {index < layers.length - 1 ? <i /> : null}
          </div>
        ))}
      </div>
      <div className="bl-architecture-region"><span>REGION</span><strong>europe-west3</strong></div>
      <div className="bl-architecture-rule"><i /> RULES ENFORCED</div>
    </div>
  );
}

export function SurfaceScene() {
  const surfaces = ["HOME", "GROUPS", "TEAM", "NEWS", "GALLERY", "REVIEWS", "ENROLL", "FAQ", "PROFILE"];
  return (
    <div className="bl-surface-scene" aria-hidden="true">
      <div className="bl-surface-stage">
        <div className="bl-surface-screen is-main"><span>BabyLand</span><strong>Простір щасливого дитинства</strong><div><i /><i /><i /></div></div>
        <div className="bl-surface-screen is-group"><span>Групи</span><strong>Сонечко</strong><small>3–4 роки</small></div>
        <div className="bl-surface-screen is-news"><span>Новини</span><strong>Тематичний ранок</strong><small>3 хв читання</small></div>
      </div>
      <div className="bl-surface-strip">{surfaces.map((surface) => <span key={surface}>{surface}</span>)}</div>
    </div>
  );
}
