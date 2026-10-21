type RevealTarget =
  | string
  | Element
  | Element[]
  | NodeListOf<Element>
  | null;

type GsapLike = {
  utils: {
    toArray: <T extends Element = Element>(targets: RevealTarget) => T[];
  };
  set: (targets: RevealTarget | Element[], vars: Record<string, unknown>) => void;
  to: (targets: RevealTarget | Element[], vars: Record<string, unknown>) => unknown;
};

type RevealOptions = {
  trigger?: string | Element | Window | null;
  start?: string;
  y?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  delay?: number;
};

export const shouldReduceMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const revealInSequence = (
  gsap: GsapLike,
  targets: RevealTarget,
  {
    trigger,
    start = "clamp(top 90%)",
    y = 22,
    duration = 0.75,
    stagger = 0.12,
    ease = "power3.out",
    delay = 0,
  }: RevealOptions = {},
) => {
  const items = gsap.utils.toArray<Element>(targets);
  if (!items.length) return null;

  gsap.set(items, { autoAlpha: 0, y });

  return gsap.to(items, {
    autoAlpha: 1,
    y: 0,
    duration,
    ease,
    stagger,
    delay,
    clearProps: "transform",
    scrollTrigger: {
      trigger: trigger || items[0],
      start,
      once: true,
    },
  });
};
