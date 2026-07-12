import Link from "next/link";
import {
  dnz52AdminAreas,
  dnz52Architecture,
  dnz52Deliverables,
  dnz52EngineeringDecisions,
  dnz52Journeys,
  dnz52PublicModules,
  dnz52PwaCapabilities,
  dnz52SearchCapabilities,
  dnz52SecurityLayers,
  dnz52Tools
} from "@/components/work/dnz52/dnz52-data";
import {
  AdminScene,
  AiScene,
  ArchitectureScene,
  Dnz52HeroScene,
  EnrollmentScene,
  PwaScene,
  SearchScene
} from "@/components/work/dnz52/dnz52-scenes";
import { Dnz52StoryController } from "@/components/work/dnz52/dnz52-story-controller";

const chapters = [
  "Вступ",
  "Задача",
  "Портал",
  "Пошук",
  "Зарахування",
  "Адмінпанель",
  "PWA",
  "AI",
  "Безпека",
  "Архітектура",
  "Результат"
] as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SectionHeading({ index, label, title, text }: { index: string; label: string; title: string; text?: string }) {
  return (
    <header className="z52-section-heading">
      <div className="z52-section-index"><span>{index}</span><i /></div>
      <div>
        <p className="z52-eyebrow">{label}</p>
        <h2>{title}</h2>
        {text ? <p className="z52-section-lead">{text}</p> : null}
      </div>
    </header>
  );
}

export function Dnz52Documentary() {
  return (
    <div className="z52-page" data-dnz52-root data-active-chapter="0">
      <Dnz52StoryController />

      <aside className="z52-section-nav" aria-label="Розділи кейсу ЗДО №52">
        <nav>
          {chapters.map((label, index) => (
            <a
              href={index === 0 ? "#dnz52-top" : `#dnz52-${index}`}
              data-dnz52-nav={index}
              aria-current={index === 0 ? "true" : undefined}
              key={label}
            >
              <i aria-hidden="true" />
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </aside>

      <section className="z52-hero" id="dnz52-top" data-dnz52-chapter aria-labelledby="dnz52-title">
        <div className="z52-grid" aria-hidden="true" />
        <div className="z52-glow is-blue" aria-hidden="true" />
        <div className="z52-glow is-yellow" aria-hidden="true" />

        <div className="z52-hero-inner">
          <div className="z52-topline">
            <Link href="/work">← Усі роботи</Link>
            <span>FULL-STACK EDUCATION PLATFORM / 2026</span>
            <span>РІВНЕ · УКРАЇНА</span>
          </div>

          <div className="z52-hero-layout">
            <div className="z52-hero-copy">
              <div className="z52-status"><span>ЗАВЕРШЕНО</span><i /> LIVE PLATFORM</div>
              <h1 id="dnz52-title">ЗДО №52 — цифровий заклад, <em>який працює і для батьків, і для команди.</em></h1>
              <p>
                Публічний портал, онлайн-зарахування, розумний пошук, PWA, push-сповіщення,
                AI-помічник і повністю кастомна React-адмінпанель поверх Django REST API.
              </p>
              <div className="z52-actions">
                <a className="z52-button is-primary" href="https://dnz52.onrender.com/" target="_blank" rel="noreferrer">Відкрити живий сайт <Arrow /></a>
                <a className="z52-button" href="https://github.com/Ke1fosao/dnz52_react" target="_blank" rel="noreferrer">Переглянути GitHub <Arrow /></a>
                <a className="z52-text-link" href="#dnz52-1">Дивитися кейс <span>↓</span></a>
              </div>
              <div className="z52-hero-facts">
                <div><strong>20</strong><span>напрямів адмінпанелі</span></div>
                <div><strong>PWA</strong><span>офлайн і push</span></div>
                <div><strong>AI</strong><span>помічник і контент</span></div>
              </div>
            </div>
            <Dnz52HeroScene />
          </div>

          <div className="z52-hero-footer"><span>REACT FRONTEND</span><i /><span>DJANGO REST API</span><i /><span>SUPABASE + RENDER</span></div>
        </div>
      </section>

      <section className="z52-section z52-problem" id="dnz52-1" data-dnz52-chapter>
        <div className="z52-section-inner">
          <SectionHeading
            index="01"
            label="СПРАВЖНЯ ЗАДАЧА"
            title="Офіційний сайт закладу має бути не архівом сторінок, а живим сервісом."
            text="Батькам потрібна зрозуміла актуальна інформація. Працівникам — простий спосіб її оновлювати. Адміністрації — контроль заявок, користувачів, сповіщень і безпеки."
          />
          <div className="z52-problem-grid">
            <article><span>01</span><h3>Довіра</h3><p>Новини, команда, документи, меню, групи та події мають бути доступними без дзвінків і пошуку по різних джерелах.</p></article>
            <article><span>02</span><h3>Доступність</h3><p>Інтерфейс має працювати на телефоні, підтримувати великий шрифт, клавіатуру, видимий focus і зрозумілу навігацію.</p></article>
            <article><span>03</span><h3>Операції</h3><p>Заявки, контент, користувачі, push-підписки та історія змін повинні керуватися в одному робочому середовищі.</p></article>
            <article><span>04</span><h3>Безперервність</h3><p>Ключовий контент має залишатися доступним навіть при слабкому інтернеті, а оновлення — доходити через push.</p></article>
          </div>
        </div>
      </section>

      <section className="z52-section z52-portal" id="dnz52-2" data-dnz52-chapter>
        <div className="z52-section-inner">
          <SectionHeading index="02" label="ПУБЛІЧНИЙ ПОРТАЛ" title="Один сайт закриває інформацію, сервіси й щоденну комунікацію." />
          <div className="z52-public-modules">
            {dnz52PublicModules.map((module, index) => (
              <article key={module.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{module.title}</h3><p>{module.text}</p></div>
              </article>
            ))}
          </div>
          <div className="z52-journeys">
            {dnz52Journeys.map((journey) => (
              <article key={journey.title}>
                <span>{journey.label}</span><h3>{journey.title}</h3>
                <ol>{journey.steps.map((step) => <li key={step}><i />{step}</li>)}</ol>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="z52-section z52-search" id="dnz52-3" data-dnz52-chapter>
        <div className="z52-documentary-grid z52-section-inner">
          <div className="z52-sticky-copy">
            <SectionHeading index="03" label="РОЗУМНИЙ ПОШУК" title="Пошук розуміє не лише точний збіг символів." />
            <p className="z52-body-copy">Користувач може помилитися у слові, ввести іншу словоформу або неточний запит. Система нормалізує текст, ранжує результати та пропонує виправлення.</p>
            <div className="z52-feature-list">{dnz52SearchCapabilities.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}</div>
          </div>
          <div className="z52-sticky-scene"><SearchScene /></div>
        </div>
      </section>

      <section className="z52-section z52-enrollment" id="dnz52-4" data-dnz52-chapter>
        <div className="z52-section-inner">
          <SectionHeading index="04" label="ОНЛАЙН-ЗАРАХУВАННЯ" title="Від першого запиту до структурованої заявки без паперової плутанини." text="Форма збирає інформацію про дитину й батьків, перевіряє контакти, фіксує згоду на обробку даних та проходить антиспам-контроль." />
          <EnrollmentScene />
        </div>
      </section>

      <section className="z52-section z52-admin" id="dnz52-5" data-dnz52-chapter>
        <div className="z52-section-inner">
          <SectionHeading index="05" label="ВЛАСНА REACT-АДМІНПАНЕЛЬ" title="Не стандартна Django admin, а повноцінний продукт для персоналу." text="Інтерфейс зібраний у стилі сайту й пристосований до щоденних операцій: пошуку, сортування, drag-and-drop, масового завантаження, редакторів, ролей і журналу змін." />
          <AdminScene />
          <div className="z52-admin-areas">{dnz52AdminAreas.map((area, index) => <span key={area}><i>{String(index + 1).padStart(2, "0")}</i>{area}</span>)}</div>
        </div>
      </section>

      <section className="z52-section z52-pwa" id="dnz52-6" data-dnz52-chapter>
        <div className="z52-documentary-grid z52-section-inner">
          <div className="z52-sticky-copy">
            <SectionHeading index="06" label="PWA · OFFLINE · PUSH" title="Сайт поводиться як застосунок і не зникає разом із мережею." />
            <p className="z52-body-copy">PWA можна встановити на телефон. Workbox кешує важливий контент, а тематичні Web Push сповіщення повертають батьків до новин і подій.</p>
            <div className="z52-pwa-list">{dnz52PwaCapabilities.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
          </div>
          <div className="z52-sticky-scene"><PwaScene /></div>
        </div>
      </section>

      <section className="z52-section z52-ai" id="dnz52-7" data-dnz52-chapter>
        <div className="z52-section-inner">
          <SectionHeading index="07" label="GOOGLE GEMINI" title="AI допомагає і батькам, і контент-команді." text="«Сонечко» відповідає на запитання з контекстом сайту та посиланнями на джерела. В адмінпанелі Gemini використовується для модерації відгуків і генерації текстів у стилі закладу." />
          <AiScene />
        </div>
      </section>

      <section className="z52-section z52-security" id="dnz52-8" data-dnz52-chapter>
        <div className="z52-section-inner">
          <SectionHeading index="08" label="ЗАХИСНІ ШАРИ" title="Адміністративний доступ, API й публічні форми захищені різними механізмами." text="Це не обіцянка абсолютної безпеки, а набір реальних контролів: brute-force захист, 2FA, CSP, secure cookies, throttling, anti-spam і санітизація контенту." />
          <div className="z52-security-grid">{dnz52SecurityLayers.map((layer, index) => <article key={layer.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{layer.title}</h3><p>{layer.text}</p></article>)}</div>
          <div className="z52-security-line"><span>AXES</span><i /><span>TOTP</span><i /><span>CSP</span><i /><span>THROTTLING</span><i /><span>TURNSTILE</span></div>
        </div>
      </section>

      <section className="z52-section z52-architecture" id="dnz52-9" data-dnz52-chapter>
        <div className="z52-documentary-grid z52-section-inner">
          <div className="z52-sticky-copy">
            <SectionHeading index="09" label="ТЕХНІЧНА АРХІТЕКТУРА" title="React і Django працюють як один production-продукт." />
            <p className="z52-body-copy">Frontend збирається у SPA, Django віддає його разом з API та статикою, PostgreSQL і медіа знаходяться в Supabase, а Render автоматизує deployment.</p>
            <div className="z52-architecture-list">{dnz52Architecture.map((node) => <article key={node.layer}><span>{node.layer}</span><div><h3>{node.title}</h3><p>{node.text}</p></div></article>)}</div>
            <div className="z52-tool-cloud">{dnz52Tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
          </div>
          <div className="z52-sticky-scene"><ArchitectureScene /></div>
        </div>
      </section>

      <section className="z52-section z52-decisions" id="dnz52-10" data-dnz52-chapter>
        <div className="z52-section-inner">
          <SectionHeading index="10" label="РЕЗУЛЬТАТ І РІШЕННЯ" title="Проєкт з’єднав публічну комунікацію, контент і внутрішню роботу закладу." />
          <div className="z52-decisions-grid">{dnz52EngineeringDecisions.map((decision, index) => <article key={decision.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{decision.title}</h3><p>{decision.text}</p></article>)}</div>
          <div className="z52-delivery-panel">
            <div><p className="z52-eyebrow">МОЯ ЗОНА ВІДПОВІДАЛЬНОСТІ</p><h3>Від інформаційної архітектури до production deployment.</h3></div>
            <ul>{dnz52Deliverables.map((item) => <li key={item}><i />{item}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="z52-result" data-dnz52-chapter>
        <div className="z52-grid" aria-hidden="true" />
        <div className="z52-result-mark" aria-hidden="true">52</div>
        <div className="z52-result-inner">
          <p className="z52-eyebrow">ФІНАЛ КЕЙСУ</p>
          <h2>ЗДО №52 став не просто сайтом закладу, а єдиною цифровою точкою для інформації, заявок, контенту й комунікації.</h2>
          <p>Система об’єднала сучасний публічний досвід, інструменти для батьків, окрему адмінпанель, PWA, AI та production-інфраструктуру.</p>
          <div className="z52-actions">
            <a className="z52-button is-primary" href="https://dnz52.onrender.com/" target="_blank" rel="noreferrer">Відкрити живий продукт <Arrow /></a>
            <a className="z52-button" href="https://github.com/Ke1fosao/dnz52_react" target="_blank" rel="noreferrer">Переглянути код <Arrow /></a>
            <a className="z52-button" href="https://t.me/Ke1fosao" target="_blank" rel="noreferrer">Обговорити схожу систему <Arrow /></a>
            <Link className="z52-text-link" href="/work">Повернутися до робіт</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
