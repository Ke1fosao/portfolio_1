"use client";

import { useEffect } from "react";

export function Dnz52StoryController() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-dnz52-root]");
    const chapters = Array.from(document.querySelectorAll<HTMLElement>("[data-dnz52-chapter]"));
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-dnz52-nav]"));

    if (!root || chapters.length === 0) return;

    root.classList.add("z52-motion-ready");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frameId = 0;

    const setActive = (activeIndex: number) => {
      root.dataset.activeChapter = String(activeIndex);
      links.forEach((link, index) => {
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
      root.style.setProperty("--z52-scroll", String(travelled / scrollable));
      frameId = 0;
    };

    const requestUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateProgress);
    };

    setActive(0);
    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    if (reducedMotion || !("IntersectionObserver" in window)) {
      chapters.forEach((chapter) => chapter.classList.add("is-visible"));
      return () => {
        root.classList.remove("z52-motion-ready");
        window.removeEventListener("scroll", requestUpdate);
        window.removeEventListener("resize", requestUpdate);
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
        let bestRatio = -1;
        chapters.forEach((chapter, index) => {
          const ratio = ratios.get(chapter) ?? 0;
          if (ratio > bestRatio) {
            activeIndex = index;
            bestRatio = ratio;
          }
        });
        setActive(activeIndex);
      },
      { rootMargin: "-12% 0px -20% 0px", threshold: [0.2, 0.4, 0.6] }
    );

    chapters.forEach((chapter) => observer.observe(chapter));

    return () => {
      observer.disconnect();
      root.classList.remove("z52-motion-ready");
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return null;
}
