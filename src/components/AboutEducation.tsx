import SectionHeadingText from "./SectionHeadingText";
import { useRef } from "react";
import { ABOUT } from "../constants/AboutConstants";
import { EDUCATION } from "../constants/EducationConstants";
import { gsap, useGSAP } from "../lib/gsap";
import { revealInSequence, shouldReduceMotion } from "../lib/motion";

type RevealPanelProps = {
  revealClass?: string;
};

const AboutPanel = ({ revealClass = "" }: RevealPanelProps) => (
  <div className="flex h-full flex-col justify-center">
    <h2 className={`mb-1 text-center text-3xl font-bold sm:text-4xl lg:text-6xl`}>
      <SectionHeadingText text="ABOUT ME" />
    </h2>
    <p className={`${revealClass} pb-5 text-center text-base font-light tracking-[0.15em] text-transparent bg-clip-text bg-linear-to-r from-[#ef233c] to-[#f9bec7] sm:text-lg`}>
      ดูรายละเอียดเพิ่มเติม
    </p>
    <div className="mx-auto max-w-[1072px]">
      {ABOUT.map((text, index) => (
        <p
          key={index}
          className={`${revealClass} mb-4 text-base font-normal leading-relaxed`}
        >
          {text}
        </p>
      ))}
    </div>
  </div>
);

const EducationPanel = ({ revealClass = "" }: RevealPanelProps) => (
  <div className="flex h-full flex-col justify-center">
    <h2 className={`mb-1 text-center text-3xl font-bold sm:text-4xl lg:text-6xl`}>
      <SectionHeadingText text="EDUCATION" />
    </h2>
    <p className={`${revealClass} pb-5 text-center text-base font-light tracking-[0.15em] text-transparent bg-clip-text bg-linear-to-r from-[#ef233c] to-[#f9bec7] sm:text-lg`}>
      ดูรายละเอียดเพิ่มเติม
    </p>
    <div className="mx-auto flex max-w-[1072px] flex-col gap-10 sm:gap-12">
      {EDUCATION.map((edu, index) => (
        <div key={index} className={`${revealClass} rounded-md`}>
          <h3 className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-[#ef233c] to-[#f9bec7] sm:text-2xl">
            {edu.degree}
          </h3>
          <p className="text-sm text-gray-300">
            <span className="font-medium">{edu.institution}</span>
          </p>
          <p className="text-sm italic text-gray-400">{edu.duration}</p>
          <p className="mt-3 text-base leading-relaxed text-gray-300">
            {edu.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const AboutEducation = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (shouldReduceMotion()) return;

      gsap.utils.toArray<HTMLElement>(".about-education-panel").forEach((panel) => {
        revealInSequence(gsap, panel.querySelectorAll(".about-education-reveal"), {
          trigger: panel,
          y: 32,
          stagger: 0.08,
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="about" className="w-full pt-10 md:pt-20">
      <div className="flex flex-col gap-10 md:gap-32">
        <article className="about-education-panel px-2 lg:px-10">
          <AboutPanel revealClass="about-education-reveal" />
        </article>
        <article id="education" className="about-education-panel px-2 lg:px-10">
          <EducationPanel revealClass="about-education-reveal" />
        </article>
      </div>
    </section>
  );
};

export default AboutEducation;
