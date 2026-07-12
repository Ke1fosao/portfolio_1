import type { Metadata } from "next";
import Link from "next/link";
import { AboutPortraitHero } from "@/components/about/about-portrait-hero";
import { AboutStoryController } from "@/components/about/about-story-controller";

export const metadata: Metadata = {
  title: "Про мене",
  description: "Історія Дмитра Ковтуновича — від перших програм до full-stack систем, автоматизації та AI-рішень для бізнесу."
};

const chapters = [
  { index: "00", year: "Зараз", label: "Хто я" },
  { index: "01", year: "2023", label: "Початок" },
  { index: "02", year: "2024–25", label: "Full-stack" },
  { index: "03", year: "2026", label: "Диплом" },
  { index: "04", year: "2026", label: "Практика" },
  { index: "05", year: "Далі", label: "AI & системи" }
];

const principles = [
  ["01", "Спочатку сенс", "Починаю не з кольорів і кнопок, а з питання: що має змінитися для бізнесу після запуску?"],
  ["02", "Відповідальність за все", "Сам проєктую інтерфейс, пишу frontend і backend, працюю з базою даних та доводжу продукт до деплою."],
  ["03", "Складне — простими словами", "Пояснюю рішення без технічного туману, щоб власник розумів, за що платить і як працюватиме система."],
  ["04", "Результат важливіший за ефект", "Анімація, AI або адмінпанель потрібні лише тоді, коли вони реально допомагають користувачу чи команді."]
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Django",
  "Python",
  "REST API",
  "PostgreSQL",
  "Supabase",
  "Firebase",
  "Telegram",
  "AI / LLM",
  "Vercel"
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function TerminalVisual() {
  return (
    <div className="ab-terminal" aria-hidden="true">
      <div className="ab-terminal-head">
        <span><i /><i /><i /></span>
        <small>first-steps.js</small>
      </div>
      <div className="ab-terminal-body">
        <p><span>01</span><code>const idea = &quot;стати програмістом&quot;;</code></p>
        <p><span>02</span><code>let attempts = 0;</code></p>
        <p><span>03</span><code>while (!result) {'{'}</code></p>
        <p className="is-indent"><span>04</span><code>attempts++;</code></p>
        <p className="is-indent is-accent"><span>05</span><code>learnFromMistakes();</code></p>
        <p><span>06</span><code>{'}'}</code></p>
        <div className="ab-terminal-result"><i /> Система мислення запущена</div>
      </div>
    </div>
  );
}

function StackVisual() {
  return (
    <div className="ab-stack-visual" aria-hidden="true">
      <div className="ab-stack-orbit ab-stack-orbit-one" />
      <div className="ab-stack-orbit ab-stack-orbit-two" />
      <div className="ab-stack-layer is-frontend"><span>01</span><strong>Frontend</strong><small>React · TypeScript</small></div>
      <div className="ab-stack-layer is-api"><span>02</span><strong>API</strong><small>Django REST</small></div>
      <div className="ab-stack-layer is-data"><span>03</span><strong>Data</strong><small>SQL · Supabase</small></div>
      <div className="ab-stack-core"><span>FULL</span><strong>STACK</strong></div>
    </div>
  );
}

function DiplomaVisual() {
  return (
    <div className="ab-diploma-visual" aria-hidden="true">
      <div className="ab-diploma-sheet">
        <div className="ab-diploma-top"><span>ВИПУСКНА РОБОТА</span><small>2026</small></div>
        <strong>Цифрова система для ЗДО №52</strong>
        <p>React · Django · Supabase · PWA · AI</p>
        <div className="ab-diploma-lines"><i /><i /><i /></div>
      </div>
      <div className="ab-diploma-seal"><span>ЗАХИЩЕНО</span><strong>НА ВІДМІННО</strong><small>РІВНЕ · 2026</small></div>
      <div className="ab-diploma-node is-one">Frontend</div>
      <div className="ab-diploma-node is-two">Backend</div>
      <div className="ab-diploma-node is-three">Automation</div>
    </div>
  );
}

function ProjectConstellation() {
  return (
    <div className="ab-project-map" aria-hidden="true">
      <div className="ab-project-core"><span>DK</span><small>systems</small></div>
      <div className="ab-project-line is-one" />
      <div className="ab-project-line is-two" />
      <div className="ab-project-line is-three" />
      <div className="ab-project-line is-four" />
      <div className="ab-project-node is-baby"><strong>BabyLand</strong><span>ecosystem</span></div>
      <div className="ab-project-node is-dnz"><strong>ЗДО №52</strong><span>education</span></div>
      <div className="ab-project-node is-fancy"><strong>FÁNCY</strong><span>beauty</span></div>
      <div className="ab-project-node is-auto"><strong>Grand Team</strong><span>auto</span></div>
    </div>
  );
}

function AiVisual() {
  return (
    <div className="ab-ai-visual" aria-hidden="true">
      <div className="ab-ai-head"><span><i /> AI Sales Manager</span><small>ONLINE</small></div>
      <div className="ab-ai-message is-client"><span>Клієнт</span><p>Потрібен сайт. Хочу отримувати більше заявок.</p></div>
      <div className="ab-ai-path"><i /><i /><i /></div>
      <div className="ab-ai-message is-system"><span>AI</span><p>Уточнюю ціль, бюджет, строки й потрібний функціонал.</p></div>
      <div className="ab-ai-summary">
        <div><span>Потреба</span><strong>Сайт + заявки</strong></div>
        <div><span>Статус</span><strong>Кваліфіковано</strong></div>
        <div><span>Наступний крок</span><strong>Пропозиція</strong></div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="ab-page" data-about-root data-active-chapter="0">
      <AboutStoryController />
      <AboutPortraitHero />

      <section className="ab-story" id="story">
        <aside className="ab-rail" aria-label="Розділи історії">
          <div className="ab-rail-line"><i /></div>
          <div className="ab-rail-items">
            {chapters.map((chapter, index) => (
              <a href={index === 0 ? "#about-title" : `#chapter-${index}`} key={chapter.index} data-rail-index={index}>
                <span>{chapter.index}</span>
                <div><strong>{chapter.year}</strong><small>{chapter.label}</small></div>
              </a>
            ))}
          </div>
        </aside>

        <div className="ab-chapters">
          <article className="ab-chapter" id="chapter-1" data-about-chapter>
            <div className="ab-chapter-year" aria-hidden="true">2023</div>
            <div className="ab-chapter-copy">
              <span className="ab-chapter-code">01 / ПОЧАТОК</span>
              <h2>Спочатку було більше помилок, ніж результатів.</h2>
              <p>
                Я вступив до коледжу з простою ціллю — стати програмістом. Перші програми були невеликими,
                код часто не працював, а правильне рішення рідко знаходилося з першої спроби.
              </p>
              <p>
                Саме тоді я навчився найважливішого: не боятися помилки, розбирати її до причини,
                мислити послідовно й доводити роботу до результату.
              </p>
              <blockquote>Код навчив мене не вгадувати — а розуміти, чому щось працює.</blockquote>
            </div>
            <TerminalVisual />
          </article>

          <article className="ab-chapter" id="chapter-2" data-about-chapter>
            <div className="ab-chapter-year" aria-hidden="true">24—25</div>
            <div className="ab-chapter-copy">
              <span className="ab-chapter-code">02 / РОЗВИТОК</span>
              <h2>Один красивий екран швидко перестав бути достатнім.</h2>
              <p>
                За чотири роки навчання шлях пройшов від базової верстки й алгоритмів до React,
                TypeScript, Django, баз даних, REST API, ролей користувачів і деплою.
              </p>
              <p>
                Мені стало цікаво не лише те, що бачить людина, а й усе, що відбувається після натискання кнопки:
                куди потрапляють дані, хто ними керує, як система захищається і що можна автоматизувати.
              </p>
              <div className="ab-inline-facts">
                <span>Frontend</span><span>Backend</span><span>Database</span><span>Deployment</span>
              </div>
            </div>
            <StackVisual />
          </article>

          <article className="ab-chapter" id="chapter-3" data-about-chapter>
            <div className="ab-chapter-year" aria-hidden="true">2026</div>
            <div className="ab-chapter-copy">
              <span className="ab-chapter-code">03 / ДОКАЗ</span>
              <h2>Навчальний проєкт став повноцінною системою.</h2>
              <p>
                Дипломна робота для ЗДО №52 об’єднала публічний сайт, React-адмінпанель, Django API,
                базу даних, PWA, сповіщення, безпеку та AI-функції.
              </p>
              <p>
                Це був момент, коли окремі знання склалися в одну архітектуру. Я захистив диплом на відмінно,
                але головним результатом став не бал — а впевненість, що можу пройти весь шлях від ідеї до запуску.
              </p>
              <div className="ab-education-line">
                <span>Рівненський фаховий коледж НУБіП України</span>
                <strong>Диплом захищено на відмінно</strong>
              </div>
            </div>
            <DiplomaVisual />
          </article>

          <article className="ab-chapter" id="chapter-4" data-about-chapter>
            <div className="ab-chapter-year" aria-hidden="true">BUILD</div>
            <div className="ab-chapter-copy">
              <span className="ab-chapter-code">04 / ПРАКТИКА</span>
              <h2>Після диплома я не зупинився на одному великому проєкті.</h2>
              <p>
                BabyLand, ЗДО №52, FÁNCY, Happy Kids, Grand Team Auto та інші роботи дали мені різні задачі:
                від сильної презентації бренду до CRM-логіки, онлайн-запису, ролей і власної адмінпанелі.
              </p>
              <p>
                Кожен новий проєкт змушує дивитися ширше: не просто «який блок додати», а як людина пройде сторінку,
                чому довірятиме бізнесу і як власник працюватиме із системою після запуску.
              </p>
              <Link href="/work" className="ab-story-link">Відкрити всі кейси <Arrow /></Link>
            </div>
            <ProjectConstellation />
          </article>

          <article className="ab-chapter" id="chapter-5" data-about-chapter>
            <div className="ab-chapter-year" aria-hidden="true">NEXT</div>
            <div className="ab-chapter-copy">
              <span className="ab-chapter-code">05 / НАПРЯМОК</span>
              <h2>Тепер мене цікавлять системи, які працюють ще до втручання людини.</h2>
              <p>
                Я інтегрую Telegram, автоматичні сповіщення, AI-помічників і менеджерів, які можуть уточнити потребу,
                сформувати бриф, допомогти з контентом або передати власнику вже структуровану заявку.
              </p>
              <p>
                Для мене AI — не декорація і не модне слово. Це ще один інструмент, який має економити час,
                прибирати повторювану роботу й робити цифровий продукт кориснішим.
              </p>
              <a href="https://t.me/Ke1fosao" target="_blank" rel="noreferrer" className="ab-story-link">Обговорити AI-рішення <Arrow /></a>
            </div>
            <AiVisual />
          </article>
        </div>
      </section>

      <section className="ab-manifesto">
        <div className="ab-manifesto-head" data-about-chapter>
          <span className="ab-chapter-code">МОЇ ПРИНЦИПИ</span>
          <h2>Те, що залишається незмінним, незалежно від технології.</h2>
        </div>
        <div className="ab-principles">
          {principles.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ab-tech" aria-label="Технології">
        <div className="ab-tech-track">
          {[...technologies, ...technologies].map((technology, index) => (
            <span key={`${technology}-${index}`}><i />{technology}</span>
          ))}
        </div>
      </section>

      <section className="ab-final" data-about-chapter>
        <div className="ab-final-grid" aria-hidden="true" />
        <div className="ab-final-mark" aria-hidden="true">DK</div>
        <div className="ab-final-content">
          <span className="ab-chapter-code">ЦЕ ЩЕ НЕ ФІНАЛ ІСТОРІЇ</span>
          <h2>Я продовжую вчитися на кожному проєкті. Наступним може бути ваш.</h2>
          <p>
            Розкажіть про бізнес, задачу або ідею. Я допоможу перетворити її на зрозумілий сайт чи цифрову систему.
          </p>
          <div className="ab-final-actions">
            <a href="https://t.me/Ke1fosao" target="_blank" rel="noreferrer" className="ab-button ab-button-primary">Написати в Telegram <Arrow /></a>
            <Link href="/work" className="ab-button ab-button-secondary">Переглянути роботи</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
