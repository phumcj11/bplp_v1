"use client";

import { useEffect, useRef, type ReactNode } from "react";

function refreshScrollTriggers(ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger) {
  ScrollTrigger.refresh();
}

function markAnimationsReady() {
  document.documentElement.classList.remove("js-animations-pending");
  document.documentElement.classList.add("js-animations-ready");
}

function showAllReveals() {
  document
    .querySelectorAll(".reveal")
    .forEach((node) => node.classList.add("is-visible"));
  markAnimationsReady();
}

export function SiteEffects({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let context: { revert: () => void } | undefined;
    let visibilityHandler: (() => void) | undefined;
    let idleId = 0;
    let timerId = 0;

    const cleanup = () => {
      cancelled = true;
      if (idleId) window.cancelIdleCallback(idleId);
      if (timerId) window.clearTimeout(timerId);
      if (visibilityHandler) {
        document.removeEventListener("visibilitychange", visibilityHandler);
      }
      context?.revert();
    };

    const init = async () => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduced) {
        showAllReveals();
        return;
      }

      try {
        const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);
        if (cancelled) return;

        gsap.registerPlugin(ScrollTrigger);
        const mobile = window.matchMedia("(max-width: 767px)").matches;

        context = gsap.context(() => {
          if (!mobile) {
            gsap.fromTo(
              ".hero-visual",
              { scale: 1.04 },
              { scale: 1, duration: 0.9, ease: "power2.out" },
            );
          }
          gsap.from(".hero-stagger", {
            y: mobile ? 16 : 24,
            opacity: 0,
            duration: mobile ? 0.35 : 0.5,
            stagger: mobile ? 0.05 : 0.08,
            ease: "power3.out",
          });
          gsap.from(".price-impact", {
            scale: mobile ? 1.01 : 1.04,
            opacity: 0,
            duration: mobile ? 0.35 : 0.45,
            delay: 0.15,
            ease: "back.out(1.4)",
          });
          gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
            ScrollTrigger.create({
              trigger: element,
              start: "top 88%",
              once: true,
              onEnter: () => element.classList.add("is-visible"),
            });
          });
          gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
            if (mobile) return;
            gsap.to(element, {
              yPercent: -4,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.45,
              },
            });
          });
          gsap.utils
            .toArray<HTMLElement>("[data-timeline-card]")
            .forEach((element) => {
              ScrollTrigger.create({
                trigger: element,
                start: "top 68%",
                end: "bottom 45%",
                toggleClass: "timeline-active",
              });
            });
        }, root);

        markAnimationsReady();

        const images = root.current?.querySelectorAll("img") ?? [];
        images.forEach((img) => {
          if (img.complete) return;
          img.addEventListener("load", () => refreshScrollTriggers(ScrollTrigger), {
            once: true,
          });
        });

        visibilityHandler = () => {
          if (document.hidden) {
            ScrollTrigger.getAll().forEach((trigger) => trigger.disable(false));
          } else {
            ScrollTrigger.getAll().forEach((trigger) => trigger.enable(false));
            refreshScrollTriggers(ScrollTrigger);
          }
        };
        document.addEventListener("visibilitychange", visibilityHandler);
      } catch {
        showAllReveals();
      }
    };

    const canIdle = typeof window.requestIdleCallback === "function";
    if (canIdle) {
      idleId = window.requestIdleCallback(() => {
        void init();
      }, { timeout: 1200 });
      return cleanup;
    }

    timerId = window.setTimeout(() => {
      void init();
    }, 1);
    return cleanup;
  }, []);

  return <div ref={root} className="contents">{children}</div>;
}
