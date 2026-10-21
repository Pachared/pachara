import { gsap, ScrollTrigger } from "./gsap";

export function animateFloatingIcons(group: HTMLElement, icons: NodeListOf<HTMLElement>) {
  if (!icons.length) return;
  let entered = false;
  let inView = false;
  const floating = gsap.timeline({ paused: true });
  icons.forEach((icon, index) => {
    floating.to(icon, {
      x: index % 2 ? 3 : -3,
      y: -(5 + index % 3 * 2),
      rotation: index % 2 ? 2 : -2,
      duration: 2.6 + index % 4 * 0.35,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    }, index * 0.13);
  });
  ScrollTrigger.create({
    trigger: group,
    start: "top bottom",
    end: "bottom top",
    onToggle: self => {
      inView = self.isActive;
      if (entered && inView) floating.play();
      else floating.pause();
    },
  });
  gsap.fromTo(icons, {
    autoAlpha: 0,
    x: (_index, target: HTMLElement) => {
      const rect = target.parentElement!.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      return center < innerWidth / 2
        ? 56 - center
        : innerWidth - 56 - center;
    },
    y: (index) => 50 + (index % 3) * 24,
    rotation: (index) => (index % 2 ? 1 : -1) * (8 + index % 3 * 4),
    scale: (index) => 0.4 + (index % 3) * 0.1,
  }, {
    autoAlpha: 1,
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    duration: 1.25,
    stagger: 0.1,
    ease: "power3.out",
    clearProps: "transform,opacity,visibility",
    onComplete: () => {
      entered = true;
      if (inView) floating.play();
    },
    scrollTrigger: {
      trigger: group,
      start: "clamp(top 88%)",
      once: true,
    },
  });
}
