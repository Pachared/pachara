export const shouldReduceMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const revealInSequence = (
  gsap,
  targets,
  {
    trigger,
    start = "top 78%",
    y = 34,
    duration = 0.65,
    stagger = 0.1,
    ease = "power3.out",
  } = {},
) => {
  const items = gsap.utils.toArray(targets);
  if (!items.length) return null;

  gsap.set(items, { autoAlpha: 0, y });

  return gsap.to(items, {
    autoAlpha: 1,
    y: 0,
    duration,
    ease,
    stagger,
    scrollTrigger: {
      trigger: trigger || items[0],
      start,
      once: true,
    },
  });
};
