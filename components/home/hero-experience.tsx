"use client";

import type { PointerEvent } from "react";

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 4 3.8 10.7c-.9.4-.9 1 .1 1.3l4.4 1.4 1.7 5.1c.2.7.4.8.9.4l2.5-2.3 4.7 3.5c.8.5 1.4.2 1.6-.8L22 5.2C22.2 4.2 21.6 3.7 21 4Z" />
      <path d="m8.3 13.4 9.8-6.2M10 18.5l.2-4.1" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 3 1.2 4.2L17 9l-3.8 1.8L12 15l-1.2-4.2L7 9l3.8-1.8L12 3Z" />
      <path d="m18.5 14 .7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z" />
    </svg>
  );
}

export function HeroExperience() {
  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    event.currentTarget.style.setProperty("--pointer-x", `${x}%`);
    event.currentTarget.style.setProperty("--pointer-y", `${y}%`);
  }

  function handlePointerLeave(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--pointer-x", "68%");
    event.currentTarget.style.setProperty("--pointer-y", "28%");
  }

  return (
    <div
      className="home-stage"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      aria-label="Демонстрація потоку заявки від сайту до Telegram та адмінпанелі"
    >
      <div className="home-stage-glow" aria-hidden="true" />
      <div className="home-stage-orbit home-stage-orbit-one" aria-hidden="true" />
      <div className="home-stage-orbit home-stage-orbit-two" aria-hidden="true" />

      <div className="home-browser-card">
        <div className="home-browser-bar">
          <div className="home-browser-dots" aria-hidden="true"><i /><i /><i /></div>
          <div className="home-browser-address"><span>●</span> business-flow.app</div>
          <div className="home-browser-signal" aria-hidden="true"><i /><i /><i /></div>
        </div>

        <div className="home-browser-body">
          <aside className="home-browser-sidebar" aria-hidden="true">
            <div className="home-sidebar-logo">DK</div>
            <span className="is-active" />
            <span />
            <span />
            <span />
          </aside>

          <div className="home-browser-content">
            <div className="home-browser-heading">
              <div>
                <span>Система працює</span>
                <strong>Нова заявка</strong>
              </div>
              <span className="home-live-pill"><i /> Live</span>
            </div>

            <div className="home-lead-card">
              <div className="home-lead-avatar">К</div>
              <div>
                <strong>Клієнт із сайту</strong>
                <span>Потрібен сучасний сайт для бізнесу</span>
              </div>
              <span className="home-lead-time">щойно</span>
            </div>

            <div className="home-flow-line" aria-hidden="true"><i /></div>

            <div className="home-flow-grid">
              <article className="home-flow-card home-flow-card-telegram">
                <span className="home-flow-icon"><TelegramIcon /></span>
                <div><strong>Telegram</strong><span>Сповіщення надіслано</span></div>
                <span className="home-flow-check"><CheckIcon /></span>
              </article>

              <article className="home-flow-card">
                <span className="home-flow-icon home-flow-icon-ai"><SparkIcon /></span>
                <div><strong>AI-обробка</strong><span>Запит структуровано</span></div>
                <span className="home-flow-check"><CheckIcon /></span>
              </article>
            </div>

            <div className="home-kanban-preview">
              <div className="home-kanban-head">
                <span>CRM / заявки</span>
                <span>У роботі</span>
              </div>
              <div className="home-kanban-columns">
                <div><span>Нова</span><strong>01</strong></div>
                <div className="is-highlighted"><span>У роботі</span><strong>01</strong></div>
                <div><span>Готово</span><strong>—</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-floating-chip home-floating-chip-top"><span>⚡</span> Швидкий сайт</div>
      <div className="home-floating-chip home-floating-chip-right"><span>AI</span> Автоматизація</div>
      <div className="home-floating-chip home-floating-chip-bottom"><i /> Заявки без втрат</div>
    </div>
  );
}
