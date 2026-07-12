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
          <p className="ab-kicker">Full-stack developer</p>
          <h1 id="about-title">
            Ковтунович
            <span>Дмитро Валерійович</span>
          </h1>
          <p className="ab-portrait-role">
            Створюю сучасні сайти, вебсистеми, адмінпанелі та AI-автоматизацію для бізнесу.
          </p>
        </div>

        <dl className="ab-profile-facts">
          <div>
            <dt>Вік</dt>
            <dd>18 років</dd>
          </div>
          <div>
            <dt>Місто</dt>
            <dd>Рівне, Україна</dd>
          </div>
          <div className="is-wide">
            <dt>Освіта</dt>
            <dd>ВСП «Рівненський фаховий коледж НУБіП України»</dd>
          </div>
          <div>
            <dt>Напрям</dt>
            <dd>Full-stack розробка</dd>
          </div>
          <div>
            <dt>Досвід</dt>
            <dd>4 роки у веброзробці</dd>
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
          <span>Next.js · TypeScript · Django · Python</span>
          <a href="#story">Моя історія <span aria-hidden="true">↓</span></a>
        </div>
      </div>

      <figure className="ab-portrait-photo">
        <img
          src="/images/dmytro-portrait-placeholder.svg"
          alt="Тимчасове місце для портрета Дмитра Ковтуновича"
        />
        <div className="ab-portrait-photo-shade" aria-hidden="true" />
        <figcaption>
          <span>Дмитро Ковтунович</span>
          <strong>Full-stack developer</strong>
        </figcaption>
        <div className="ab-photo-status" aria-hidden="true">
          <i /> Доступний для нових проєктів
        </div>
        <div className="ab-photo-index" aria-hidden="true">01 / ABOUT</div>
      </figure>
    </section>
  );
}
