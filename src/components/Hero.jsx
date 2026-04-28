import { useRef } from "react";
import { HERO } from "../constants/HeroConstants";
import pachara from "/pachara.jpg";
import { gsap, useGSAP } from "../lib/gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-copy", {
          autoAlpha: 0,
          y: 42,
          duration: 0.75,
          stagger: 0.12,
        })
        .from(
          ".hero-image",
          {
            autoAlpha: 0,
            scale: 0.92,
            y: 34,
            duration: 0.85,
          },
          "-=0.45",
        );
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      className="flex flex-wrap min-h-screen items-center px-4 py-10 md:px-16 lg:px-24"
    >
      {/* Text Content */}
      <div className="w-full md:w-1/2">
        <h2 className="hero-copy mb-4 p-1 text-6xl sm:text-6xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold leading-tight">
          {HERO.name}
        </h2>

        <span className="hero-copy block p-2 mb-6 text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold bg-linear-to-r from-[#ef233c] to-[#f9bec7] bg-clip-text text-transparent">
          {HERO.greet3}
        </span>

        <p className="hero-copy p-2 mb-8 text-xs sm:text-sm md:text-base max-w-md md:max-w-lg font-light leading-relaxed">
          {HERO.description}
        </p>

        <div className="hero-copy p-2 flex flex-col gap-4 sm:flex-row sm:items-center">
          <button
            onClick={() => window.open("/Resume-Pachara.pdf", "_blank")}
            className="z-1 hover:bg-white rounded-xl text-white font-semibold hover:text-black py-3 px-8 md:px-10 border border-white/15 transition-colors duration-300 cursor-pointer"
          >
            ดาวน์โหลด Resume
          </button>
        </div>
      </div>

      {/* Image Content */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
        <img
          src={pachara}
          alt="pachara"
          className="hero-image rounded-3xl w-75 sm:w-87.5 md:w-100 lg:w-125 object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
