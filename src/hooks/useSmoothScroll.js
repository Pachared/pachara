import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "../lib/gsap";

export function useSmoothScroll(enabled) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (!enabled || prefersReducedMotion || isCoarsePointer) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.35,
      easing: (t) => 1 - (1 - t) ** 4,
      smoothWheel: true,
      wheelMultiplier: 0.78,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      ScrollTrigger.refresh();
    };
  }, [enabled]);
}
