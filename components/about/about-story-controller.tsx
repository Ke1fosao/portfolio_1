"use client";

import { useEffect } from "react";

export function AboutStoryController() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-about-root]");
    const chapters = Array.from(document.querySelectorAll<HTMLElement>("[data-about-chapter]"));

    if (!root || chapters.length === 0) return;

    root.classList.add("ab-motion-ready");

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frameId = 0;

    const setProgress = () => {
      const rect = root.getBoundingClientRect();
      const scrollable = Math.max(root.offsetHeight - window.innerHeight, 1);
      const travelled = Math.min(Math.max(-rect.top, 0), scrollable);
      root.style.setProperty("--about-scroll", String(travelled / scrollable));
      frameId = 0;
    };

    const handleScroll = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(setProgress);
    };

    setProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    if (reducedMotion || !("IntersectionObserver" in window)) {
      chapters.forEach((chapter) => chapter.classList.add("is-visible"));
      root.dataset.activeChapter = "0";

      return () => {
        root.classList.remove("ab-motion-ready");
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
        if (frameId) window.cancelAnimationFrame(frameId);
      };
    }

    const ratios = new Map<Element, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target, entry.intersectionRatio);

          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });

        let activeIndex = 0;
        let highestRatio = -1;

        chapters.forEach((chapter, index) => {
          const ratio = ratios.get(chapter) ?? 0;
          if (ratio > highestRatio) {
            highestRatio = ratio;
            activeIndex = index;
          }
        });

        root.dataset.activeChapter = String(activeIndex);
      },
      {
        rootMargin: "-12% 0px -18% 0px",
        threshold: [0.25, 0.45, 0.65]
      }
    );

    chapters.forEach((chapter) => observer.observe(chapter));

    return () => {
      observer.disconnect();
      root.classList.remove("ab-motion-ready");
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return null;
}
