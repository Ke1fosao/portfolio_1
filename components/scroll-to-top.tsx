"use client";

import { useEffect, useState } from "react";

const SHOW_AFTER_PX = 420;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId = 0;

    const update = () => {
      const scrollTop = window.scrollY;
      const scrollable = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );

      setVisible(scrollTop > SHOW_AFTER_PX);
      setProgress(Math.min(Math.max(scrollTop / scrollable, 0), 1));
      frameId = 0;
    };

    const requestUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const scrollToTop = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      className={`scroll-top${visible ? " is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Повернутися на початок сторінки"
      title="Повернутися вгору"
      style={{ "--scroll-top-progress": progress } as React.CSSProperties}
      tabIndex={visible ? 0 : -1}
    >
      <span className="scroll-top-ring" aria-hidden="true" />
      <span className="scroll-top-core" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="presentation">
          <path d="M12 19V5M6.5 10.5 12 5l5.5 5.5" />
        </svg>
      </span>
      <span className="scroll-top-label" aria-hidden="true">Вгору</span>
    </button>
  );
}
