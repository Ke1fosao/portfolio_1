import Link from "next/link";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function AboutPortraitHero() {
  return (
    <section className="ab-portrait-hero" data-about-chapter aria-labelledby="about-title">
      <div className="ab-noise" aria-hidden="true" />

      <div className="ab-portrait-copy">
        <div className="ab-portrait-topline">
          <span>Про мене</span>
          <span>Рівне · Україна</span>
        </div>

        <div className="ab-portrait-intro">
          <p className="ab-kicker">Full-stack developer · 4 роки у веброзробці</p>
          <h1 id="about-title">
            Привіт, я Дмитро.
            <span>Збираю цифрові продукти повністю.</span>
          </h1>
          <p className="ab-portrait-role">
            Мене звати Ковтунович Дмитро Валерійович. Я створюю не лише красиві сторінки,
            а цілі вебсистеми: продумую інтерфейс, пишу frontend і backend, працюю з базами даних,
            адмінпанелями, Telegram та AI-автоматизацією.
          </p>
          <p className="ab-portrait-note">
            Навчаюся у ВСП «Рівненський фаховий коледж НУБіП України» й перетворюю навчальний досвід
            на реальні рішення для бізнесу — від першої ідеї до готового запуску.
          </p>
        </div>

        <dl className="ab-profile-facts">
          <div>
            <dt>Хто я</dt>
            <dd>18-річний full-stack розробник</dd>
          </div>
          <div>
            <dt>Звідки</dt>
            <dd>Рівне, Україна</dd>
          </div>
          <div className="is-wide">
            <dt>Освіта</dt>
            <dd>ВСП «Рівненський фаховий коледж НУБіП України»</dd>
          </div>
          <div>
            <dt>Створюю</dt>
            <dd>Сайти, системи та автоматизацію</dd>
          </div>
          <div>
            <dt>Працюю з</dt>
            <dd>Next.js, TypeScript, Django, Python</dd>
          </div>
        </dl>

        <div className="ab-portrait-actions">
          <a className="ab-button ab-button-primary" href="https://t.me/Ke1fosao" target="_blank" rel="noreferrer">
            Написати в Telegram <Arrow />
          </a>
          <Link className="ab-button ab-button-secondary" href="/work">
            Переглянути роботи
          </Link>
        </div>

        <div className="ab-portrait-footer">
          <span>Frontend · Backend · Database · AI</span>
          <a href="#story">Продовжити мою історію <span aria-hidden="true">↓</span></a>
        </div>
      </div>

      <figure className="ab-portrait-photo">
        <img
          src="/images/dmytro-portrait.svg"
          alt="Дмитро Ковтунович — full-stack розробник із Рівного"
        />
        <div className="ab-portrait-photo-shade" aria-hidden="true" />
        <figcaption>
          <span>Дмитро Ковтунович</span>
          <strong>Створюю продукти від ідеї до запуску</strong>
        </figcaption>
        <div className="ab-photo-status" aria-hidden="true">
          <i /> Доступний для нових проєктів
        </div>
        <div className="ab-photo-index" aria-hidden="true">01 / ABOUT</div>
      </figure>
    </section>
  );
}
