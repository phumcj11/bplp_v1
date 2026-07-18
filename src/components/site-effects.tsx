"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (sessionStorage.getItem("bplp-intro") || reduced) {
      const immediateTimer = window.setTimeout(() => setVisible(false), 0);
      return () => window.clearTimeout(immediateTimer);
    }
    sessionStorage.setItem("bplp-intro", "shown");
    const timer = window.setTimeout(() => setVisible(false), 1150);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="preloader fixed inset-0 z-[100] grid place-items-center bg-charcoal text-white"
      aria-label="กำลังเปิดเว็บไซต์บ้านพักล่องแพ"
      role="status"
    >
      <div className="text-center">
        <span className="font-display text-3xl tracking-wide">
          BAAN PAK LONG PAE
        </span>
        <span className="mt-2 block font-bold text-orange">บ้านพักล่องแพ</span>
        <div className="mt-7 flex justify-center gap-1" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((item) => (
            <span
              key={item}
              className="size-3 animate-bounce rounded-full bg-lake"
              style={{ animationDelay: `${item * 90}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteEffects({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      document
        .querySelectorAll(".reveal")
        .forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        ".hero-visual",
        { scale: 1.08 },
        { scale: 1, duration: 1.4, ease: "power2.out" },
      );
      gsap.from(".hero-stagger", {
        y: 34,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
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
        gsap.to(element, {
          yPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
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

    return () => context.revert();
  }, []);

  return <div ref={root} className="contents">{children}</div>;
}
