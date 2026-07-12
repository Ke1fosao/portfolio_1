"use client";

import { useEffect, useRef, useState } from "react";

const modules = [
  { id: "site", label: "Сайт", detail: "Структура й дизайн" },
  { id: "lead", label: "Заявки", detail: "Форми та сценарії" },
  { id: "telegram", label: "Telegram", detail: "Миттєві сповіщення" },
  { id: "admin", label: "Адмінпанель", detail: "Контент і CRM" },
  { id: "ai", label: "AI", detail: "Автоматизація" }
];

export function WorkshopScene() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setActive(modules.length - 1);
      return;
    }

    const interval = window.setInterval(() => {
      setActive((value) => (value + 1) % modules.length);
    }, 1800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="workshop-scene" ref={rootRef} aria-label="Візуалізація цифрової системи для бізнесу">
      <div className="workshop-scene-grid" aria-hidden="true" />
      <div className="workshop-scene-cursor" aria-hidden="true" />

      <div className="workshop-stage-head">
        <span>Digital workshop</span>
        <span>System / 01</span>
      </div>

      <div className="workshop-core">
        <span className="workshop-core-index">0{active + 1}</span>
        <strong>{modules[active].label}</strong>
        <small>{modules[active].detail}</small>
      </div>

      <div className="workshop-ring workshop-ring-one" aria-hidden="true" />
      <div className="workshop-ring workshop-ring-two" aria-hidden="true" />
      <div className="workshop-ring workshop-ring-three" aria-hidden="true" />

      <div className="workshop-modules">
        {modules.map((module, index) => (
          <button
            key={module.id}
            type="button"
            className={`workshop-module${index === active ? " is-active" : ""}`}
            onClick={() => setActive(index)}
            aria-pressed={index === active}
          >
            <span>0{index + 1}</span>
            <strong>{module.label}</strong>
          </button>
        ))}
      </div>

      <div className="workshop-signal workshop-signal-one" aria-hidden="true" />
      <div className="workshop-signal workshop-signal-two" aria-hidden="true" />
      <div className="workshop-signal workshop-signal-three" aria-hidden="true" />
    </div>
  );
}
