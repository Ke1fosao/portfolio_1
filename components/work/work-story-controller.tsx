"use client";

import { useEffect } from "react";

export function WorkStoryController() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-work-root]");
    const chapters = Array.from(document.querySelectorAll<HTMLElement>("[data-work-chapter]"));
    const navigationLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-work-nav]"));

    if (!root || chapters.length === 0) return;

    root.classList.add("wk-motion-ready");

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frameId = 0;

    const setActiveCase = (activeIndex: number) => {
      root.dataset.activeCase = String(activeIndex);
      navigationLinks.forEach((link, index) => {
        const isActive = index === activeIndex;
        link.classList.toggle("is-active", isActive);
        if (isActive) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    };

    const updateProgress = () => {
      const rect = root.getBoundingClientRect();
      const scrollable = Math.max(root.offsetHeight - window.innerHeight, 1);
      const travelled = Math.min(Math.max(-rect.top, 0), scrollable);
      root.style.setProperty("--work-scroll", String(travelled / scrollable));
      frameId = 0;
    };

    const requestProgressUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateProgress);
    };

    setActiveCase(0);
    updateProgress();
    window.addEventListener("scroll", requestProgressUpdate, { passive: true });
    window.addEventListener("resize", requestProgressUpdate);

    if (reducedMotion || !("IntersectionObserver" in window)) {
      chapters.forEach((chapter) => chapter.classList.add("is-visible"));

      return () => {
        root.classList.remove("wk-motion-ready");
        window.removeEventListener("scroll", requestProgressUpdate);
        window.removeEventListener("resize", requestProgressUpdate);
        if (frameId) window.cancelAnimationFrame(frameId);
      };
    }

    const ratios = new Map<Element, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target, entry.intersectionRatio);
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });

        let activeIndex = 0;
        let highestRatio = -1;

        chapters.forEach((chapter, index) => {
          const ratio = ratios.get(chapter) ?? 0;
          if (ratio > highestRatio) {
            activeIndex = index;
            highestRatio = ratio;
          }
        });

        setActiveCase(activeIndex);
      },
      {
        rootMargin: "-14% 0px -20% 0px",
        threshold: [0.2, 0.4, 0.6]
      }
    );

    chapters.forEach((chapter) => observer.observe(chapter));

    return () => {
      observer.disconnect();
      root.classList.remove("wk-motion-ready");
      window.removeEventListener("scroll", requestProgressUpdate);
      window.removeEventListener("resize", requestProgressUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return null;
}
