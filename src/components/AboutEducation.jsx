import { useRef } from "react";
import { ABOUT } from "../constants/AboutConstants";
import { EDUCATION } from "../constants/EducationConstants";
import { gsap, useGSAP } from "../lib/gsap";

const AboutPanel = ({ revealClass = "" }) => (
  <div className="flex h-full flex-col justify-center">
    <h2 className={`${revealClass} mb-1 text-center text-3xl font-bold sm:text-4xl lg:text-6xl`}>
      ABOUT ME
    </h2>
    <p className={`${revealClass} pb-5 text-center text-base font-light tracking-[0.15em] text-transparent bg-clip-text bg-linear-to-r from-[#ef233c] to-[#f9bec7] sm:text-lg`}>
      ดูรายละเอียดเพิ่มเติม
    </p>
    <div className="mx-auto max-w-4xl">
      {ABOUT.map((text, index) => (
        <p
          key={index}
          className={`${revealClass} mb-4 text-xs font-light leading-relaxed sm:text-sm md:text-base`}
        >
          {text}
        </p>
      ))}
    </div>
  </div>
);

const EducationPanel = ({ revealClass = "" }) => (
  <div className="flex h-full flex-col justify-center">
    <h2 className={`${revealClass} mb-1 text-center text-3xl font-bold sm:text-4xl lg:text-6xl`}>
      EDUCATION
    </h2>
    <p className={`${revealClass} pb-5 text-center text-base font-light tracking-[0.15em] text-transparent bg-clip-text bg-linear-to-r from-[#ef233c] to-[#f9bec7] sm:text-lg`}>
      ดูรายละเอียดเพิ่มเติม
    </p>
    <div className="mx-auto flex max-w-4xl flex-col gap-10 sm:gap-12">
      {EDUCATION.map((edu, index) => (
        <div key={index} className={`${revealClass} rounded-md`}>
          <h3 className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-[#ef233c] to-[#f9bec7] sm:text-2xl">
            {edu.degree}
          </h3>
          <p className="text-sm text-gray-300">
            <span className="font-medium">{edu.institution}</span>
          </p>
          <p className="text-sm italic text-gray-400">{edu.duration}</p>
          <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
            {edu.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const AboutEducation = () => {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const matchMedia = gsap.matchMedia();

      matchMedia.add("(min-width: 768px)", () => {
        gsap.to(trackRef.current, {
          xPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: pinRef.current,
            start: "top top",
            end: "+=110%",
            pin: true,
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      matchMedia.add("(max-width: 767px)", () => {
        gsap.utils.toArray(".about-education-mobile article").forEach((panel) => {
          gsap.from(panel.querySelectorAll(".mobile-reveal"), {
            autoAlpha: 0,
            y: 32,
            duration: 0.65,
            ease: "power3.out",
            stagger: 0.08,
            immediateRender: false,
            scrollTrigger: {
              trigger: panel,
              start: "top 78%",
              once: true,
            },
          });
        });
      });

      return () => matchMedia.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="about" className="w-full pt-20">
      <div
        ref={pinRef}
        className="about-education-desktop hidden min-h-screen overflow-hidden md:flex md:items-center"
      >
        <div ref={trackRef} className="flex w-[200%] shrink-0 will-change-transform">
          <article className="w-1/2 shrink-0 px-2 lg:px-10">
            <AboutPanel revealClass="about-reveal" />
          </article>
          <article className="w-1/2 shrink-0 px-2 lg:px-10">
            <EducationPanel revealClass="education-reveal" />
          </article>
        </div>
      </div>

      <div className="about-education-mobile flex flex-col gap-20 md:hidden">
        <article>
          <AboutPanel revealClass="mobile-reveal" />
        </article>
        <article id="education">
          <EducationPanel revealClass="mobile-reveal" />
        </article>
      </div>
    </section>
  );
};

export default AboutEducation;
