import Link from "next/link";
import {
  babylandAdminAreas,
  babylandArchitecture,
  babylandDeliverables,
  babylandEngineeringDecisions,
  babylandFormStatuses,
  babylandJourneys,
  babylandModules,
  babylandPipeline,
  babylandProductSurface,
  babylandRoles,
  babylandSecurityLayers,
  babylandTools
} from "@/components/work/babyland/babyland-data";
import {
  AdminScene,
  ArchitectureScene,
  BabylandHeroScene,
  EcosystemScene,
  JourneyScene,
  PipelineScene,
  RoleScene,
  SurfaceScene
} from "@/components/work/babyland/babyland-scenes";
import { BabylandStoryController } from "@/components/work/babyland/babyland-story-controller";

const chapters = [
  ["00", "Вступ"],
  ["01", "Задача"],
  ["02", "Екосистема"],
  ["03", "Користувачі"],
  ["04", "Заявки"],
  ["05", "Адмінка"],
  ["06", "Доступ"],
  ["07", "Безпека"],
  ["08", "Архітектура"],
  ["09", "Продукт"],
  ["10", "Рішення"],
  ["11", "Результат"]
] as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SectionHeading({ index, label, title, text }: { index: string; label: string; title: string; text?: string }) {
  return (
    <header className="bl-section-heading">
      <div className="bl-section-index"><span>{index}</span><i /></div>
      <div>
        <p className="bl-eyebrow">{label}</p>
        <h2>{title}</h2>
        {text ? <p className="bl-section-lead">{text}</p> : null}
      </div>
    </header>
  );
}

export function BabylandDocumentary() {
  return (
    <div className="bl-page" data-babyland-root data-active-chapter="0">
      <BabylandStoryController />

      <aside className="bl-progress" aria-label="Розділи кейсу BabyLand">
        <div className="bl-progress-line"><i /></div>
        <nav>
          {chapters.map(([number, label], index) => (
            <a href={index === 0 ? "#babyland-top" : `#babyland-${index}`} data-bl-rail={index} key={number}>
              <span>{number}</span><small>{label}</small>
            </a>
          ))}
        </nav>
      </aside>

      <section className="bl-hero" id="babyland-top" data-babyland-chapter aria-labelledby="babyland-title">
        <div className="bl-hero-grid" aria-hidden="true" />
        <div className="bl-hero-glow is-lime" aria-hidden="true" />
        <div className="bl-hero-glow is-sky" aria-hidden="true" />
        <div className="bl-hero-inner">
          <div className="bl-hero-topline">
            <Link href="/work">← Усі роботи</Link>
            <span>FULL-STACK PRODUCT DOCUMENTARY / 2026</span>
            <span>РІВНЕ · УКРАЇНА</span>
          </div>

          <div className="bl-hero-layout">
            <div className="bl-hero-copy">
              <div className="bl-status-row"><span>ЗАВЕРШЕНО</span><i /> LIVE PRODUCT</div>
              <h1 id="babyland-title">BabyLand — один цифровий простір <em>для батьків, команди та адміністрації.</em></h1>
              <p>
                Не просто презентаційний сайт дитячого садка, а повна екосистема: публічний контент,
                онлайн-звернення, профілі, ролі, керування щоденними процесами та захищений back office.
              </p>
              <div className="bl-hero-actions">
                <a className="bl-button is-primary" href="https://babyland.com.ua/" target="_blank" rel="noreferrer">Відкрити BabyLand <Arrow /></a>
                <a className="bl-button" href="https://github.com/Ke1fosao/BabyLand" target="_blank" rel="noreferrer">Переглянути GitHub <Arrow /></a>
                <a className="bl-text-link" href="#babyland-1">Дивитися історію <span>↓</span></a>
              </div>
              <div className="bl-hero-facts">
                <div><strong>6</strong><span>рольових рівнів</span></div>
                <div><strong>18</strong><span>admin-напрямів</span></div>
                <div><strong>4</strong><span>типи публічних форм</span></div>
              </div>
            </div>
            <BabylandHeroScene />
          </div>

          <div className="bl-hero-footer"><span>PUBLIC SITE</span><i /><span>FIREBASE BACKEND</span><i /><span>ADMIN OPERATIONS</span></div>
        </div>
      </section>

      <section className="bl-problem bl-section" id="babyland-1" data-babyland-chapter>
        <div className="bl-section-inner">
          <SectionHeading
            index="01"
            label="СПРАВЖНЯ ЗАДАЧА"
            title="Садочку потрібен не сайт. Йому потрібна система зв’язку між усіма учасниками."
            text="Презентаційна сторінка вирішує лише перший крок. BabyLand мав одночасно створити довіру для батьків, робочий інструмент для команди та контрольоване середовище для адміністрації."
          />
          <div className="bl-problem-grid">
            <article><span>01</span><h3>Батьки</h3><p>Хочуть швидко зрозуміти програму, побачити педагогів, перевірити розклад і без зайвих дзвінків залишити заявку.</p></article>
            <article><span>02</span><h3>Команда</h3><p>Потребує актуальних груп, профілів спеціалістів, новин, фотографій і розкладу в одному джерелі.</p></article>
            <article><span>03</span><h3>Адміністрація</h3><p>Має обробляти звернення, модерувати контент, керувати ролями та бачити історію службових дій.</p></article>
            <article><span>04</span><h3>Система</h3><p>Повинна розділяти доступи, захищати записи, контролювати публічні форми й залишатися зручною на мобільних.</p></article>
          </div>
          <div className="bl-fragmented-flow" aria-hidden="true">
            <span>Instagram</span><span>Телефон</span><span>Таблиці</span><span>Месенджери</span><i>→</i><strong>BabyLand</strong>
          </div>
        </div>
      </section>

      <section className="bl-ecosystem bl-section" id="babyland-2" data-babyland-chapter>
        <div className="bl-documentary-grid bl-section-inner">
          <div className="bl-sticky-copy">
            <SectionHeading index="02" label="КАРТА ПРОДУКТУ" title="Шість доменів, які працюють як одна екосистема." />
            <p className="bl-body-copy">
              BabyLand з’єднує публічний досвід, звернення, контент, операції, ідентичність і безпеку.
              Кожен домен можна розвивати окремо, але для користувача вони залишаються одним продуктом.
            </p>
            <div className="bl-module-list">
              {babylandModules.map((module, index) => (
                <article key={module.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{module.title}</h3><p>{module.description}</p><ul>{module.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
                </article>
              ))}
            </div>
          </div>
          <div className="bl-sticky-scene"><EcosystemScene /></div>
        </div>
      </section>

      <section className="bl-journeys bl-section" id="babyland-3" data-babyland-chapter>
        <div className="bl-section-inner">
          <SectionHeading index="03" label="ТРИ ПОГЛЯДИ НА ОДИН ПРОДУКТ" title="Кожен користувач бачить BabyLand по-своєму." text="Замість універсального інтерфейсу для всіх система формує окремі маршрути для батьків, контент-команди та адміністрації." />
          <div className="bl-journey-list">
            {babylandJourneys.map((journey, index) => (
              <article className={`bl-journey-chapter is-${index + 1}`} key={journey.role}>
                <div className="bl-journey-copy">
                  <span>{journey.label}</span>
                  <h3>{journey.role}</h3>
                  <p>{journey.summary}</p>
                  <ol>{journey.steps.map((step) => <li key={step}><i />{step}</li>)}</ol>
                </div>
                <JourneyScene mode={index === 0 ? "parent" : index === 1 ? "content" : "admin"} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bl-pipeline bl-section" id="babyland-4" data-babyland-chapter>
        <div className="bl-section-inner">
          <SectionHeading index="04" label="ВІД КНОПКИ ДО РОБОЧОГО СТАТУСУ" title="Публічна заявка не записується напряму в базу." text="Форма проходить контрольований серверний маршрут. Це дає змогу нормалізувати дані, обмежувати частоту запитів і не відкривати анонімний запис у Firestore." />
          <PipelineScene />
          <div className="bl-pipeline-details">
            {babylandPipeline.map((step, index) => <article key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.detail}</p></article>)}
          </div>
          <div className="bl-status-workflows">
            {babylandFormStatuses.map((group) => (
              <div key={group.entity}><strong>{group.entity}</strong><span>{group.statuses.join(" → ")}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bl-admin-product bl-section" id="babyland-5" data-babyland-chapter>
        <div className="bl-section-inner">
          <SectionHeading index="05" label="ПРОДУКТ УСЕРЕДИНІ ПРОДУКТУ" title="Адмінпанель — це окремий операційний центр BabyLand." text="Back office створений не як технічна форма для розробника, а як робочий інтерфейс для щоденних дій: від нового звернення до оновлення профілю педагога." />
          <AdminScene />
          <div className="bl-admin-area-grid">
            {babylandAdminAreas.map((area, index) => <span key={area}><i>{String(index + 1).padStart(2, "0")}</i>{area}</span>)}
          </div>
        </div>
      </section>

      <section className="bl-roles bl-section" id="babyland-6" data-babyland-chapter>
        <div className="bl-documentary-grid bl-section-inner">
          <div className="bl-sticky-copy">
            <SectionHeading index="06" label="РОЛІ Й ДОЗВОЛИ" title="Право натиснути кнопку не означає право змінити дані." />
            <p className="bl-body-copy">
              Видимість елементів інтерфейсу — лише перший рівень. Привілейовані ролі підтверджуються Firebase custom claims,
              а Firestore і Storage повторно перевіряють доступ на рівні правил.
            </p>
            <div className="bl-role-list">
              {babylandRoles.map((role) => (
                <article key={role.id}>
                  <span>{role.id}</span><h3>{role.title}</h3><p>{role.scope}</p><ul>{role.permissions.map((permission) => <li key={permission}>{permission}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
          <div className="bl-sticky-scene"><RoleScene /></div>
        </div>
      </section>

      <section className="bl-security bl-section" id="babyland-7" data-babyland-chapter>
        <div className="bl-section-inner">
          <SectionHeading index="07" label="РЕАЛІЗОВАНІ ЗАХИСНІ ШАРИ" title="Безпека не покладена на одну перевірку." text="BabyLand використовує кілька незалежних рівнів контролю. Вони не роблять систему «абсолютно захищеною», але зменшують ризик обходу ролей, прямого запису та неконтрольованого завантаження даних." />
          <div className="bl-security-grid">
            {babylandSecurityLayers.map((layer, index) => <article key={layer.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{layer.title}</h3><p>{layer.text}</p></article>)}
          </div>
          <div className="bl-security-manifest"><span>AUTH</span><i /> <span>CLAIMS</span><i /> <span>RULES</span><i /> <span>FUNCTIONS</span><i /> <span>AUDIT</span></div>
        </div>
      </section>

      <section className="bl-architecture bl-section" id="babyland-8" data-babyland-chapter>
        <div className="bl-documentary-grid bl-section-inner">
          <div className="bl-sticky-copy">
            <SectionHeading index="08" label="ТЕХНІЧНА АРХІТЕКТУРА" title="Зрозуміла для власника. Переконлива для розробника." />
            <p className="bl-body-copy">
              React відповідає за досвід, Firebase — за ідентичність, дані, медіа й серверні операції,
              а додаткові бібліотеки закривають редагування, графіки, форми та drag-and-drop.
            </p>
            <div className="bl-architecture-list">
              {babylandArchitecture.map((node) => <article key={node.layer}><span>{node.layer}</span><h3>{node.title}</h3><p>{node.detail}</p></article>)}
            </div>
            <div className="bl-tool-cloud">{babylandTools.map((tool) => <span key={tool}>{tool}</span>)}</div>
          </div>
          <div className="bl-sticky-scene"><ArchitectureScene /></div>
        </div>
      </section>

      <section className="bl-surface bl-section" id="babyland-9" data-babyland-chapter>
        <div className="bl-section-inner">
          <SectionHeading index="09" label="ПОВЕРХНЯ ПРОДУКТУ" title="Користувач бачить теплий дитячий бренд. Під ним працює складна система." />
          <SurfaceScene />
          <div className="bl-surface-grid">
            {babylandProductSurface.map((surface, index) => <article key={surface.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{surface.title}</h3><p>{surface.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bl-decisions bl-section" id="babyland-10" data-babyland-chapter>
        <div className="bl-section-inner">
          <SectionHeading index="10" label="ІНЖЕНЕРНІ РІШЕННЯ" title="Непомітні рішення, від яких залежить надійність продукту." />
          <div className="bl-decision-list">
            {babylandEngineeringDecisions.map((decision, index) => <article key={decision.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{decision.title}</h3><p>{decision.text}</p></div></article>)}
          </div>
          <div className="bl-delivery-panel">
            <div><p className="bl-eyebrow">МОЯ ЗОНА ВІДПОВІДАЛЬНОСТІ</p><h3>Від структури продукту до production hardening.</h3></div>
            <ul>{babylandDeliverables.map((item) => <li key={item}><i />{item}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="bl-result" id="babyland-11" data-babyland-chapter>
        <div className="bl-result-grid" aria-hidden="true" />
        <div className="bl-result-mark" aria-hidden="true">BL</div>
        <div className="bl-result-inner">
          <p className="bl-eyebrow">11 / РЕЗУЛЬТАТ</p>
          <h2>BabyLand перетворився з презентаційного сайту на повноцінну цифрову платформу для щоденної роботи дитячого закладу.</h2>
          <p>
            Один продукт об’єднав публічну комунікацію, заявки, контент, профілі, ролі, адміністративні процеси та інфраструктуру Firebase.
          </p>
          <div className="bl-result-actions">
            <a className="bl-button is-primary" href="https://babyland.com.ua/" target="_blank" rel="noreferrer">Відкрити живий продукт <Arrow /></a>
            <a className="bl-button" href="https://github.com/Ke1fosao/BabyLand" target="_blank" rel="noreferrer">Переглянути код <Arrow /></a>
            <a className="bl-button" href="https://t.me/Ke1fosao" target="_blank" rel="noreferrer">Обговорити схожу систему <Arrow /></a>
            <Link className="bl-text-link" href="/work">Повернутися до робіт</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
