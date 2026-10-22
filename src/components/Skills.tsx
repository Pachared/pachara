import { type ReactNode, useRef } from "react";
import { SKILL_CATEGORIES } from "../constants/SkillsConstants";
import { gsap, useGSAP } from "../lib/gsap";
import { animateFloatingIcons } from "../lib/iconMotion";
import SectionHeadingText from "./SectionHeadingText";
import { revealInSequence, shouldReduceMotion } from "../lib/motion";
import type { SkillIconItem } from "../types";

type SkillSectionProps = {
  title: string;
  data: SkillIconItem[];
  extractItems: (_item: SkillIconItem) => ReactNode[];
  isSubSection?: boolean;
  showDescription?: boolean;
};

const SkillSection = ({
  title,
  data,
  extractItems,
  isSubSection = false,
  showDescription = true,
}: SkillSectionProps) => (
  <div className="skill-section pt-10 first:pt-0 md:pt-20">
    <h1
      className={`mb-1 text-center font-bold ${
        isSubSection ? "text-xl sm:text-2xl lg:text-3xl" : "text-3xl sm:text-4xl lg:text-6xl"
      }`}
    >
      <SectionHeadingText text={isSubSection ? title.toUpperCase() : title} />
    </h1>
    {showDescription && (
      <p className="skill-reveal pb-5 text-center text-base font-light tracking-[0.15em] text-transparent bg-clip-text bg-linear-to-r from-[#ef233c] to-[#f9bec7] sm:text-lg">
      ดูรายละเอียดเพิ่มเติม
      </p>
    )}
    <div className="skill-group flex flex-wrap items-center justify-center gap-8 pt-2">
      {data.map((item, index) => (
        <div
          key={index}
          className="skill-icon rounded-3xl pl-3 pr-3 flex flex-col items-center transition-transform duration-300 hover:scale-110"
        >
          {extractItems(item).map((content, i) => (
            <div
              key={i}
              className="skill-icon-body flex items-center justify-center"
              aria-label="Item icon"
            >
              {content}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillsRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (shouldReduceMotion()) return;

      gsap.utils.toArray<HTMLElement>(".skill-section").forEach((section) => {
        const revealItems = section.querySelectorAll(".skill-reveal");
        revealInSequence(gsap, revealItems, {
          trigger: section,
          stagger: 0.12,
        });
      });

      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".skill-group").forEach(group => {
          const icons = group.querySelectorAll<HTMLElement>(".skill-icon-body");
          if (!icons.length) return;
          animateFloatingIcons(group, icons);
        });
      });
      return () => media.revert();
    },
    { scope: skillsRef },
  );

  return (
    <section
      ref={skillsRef}
      className="relative mx-auto flex w-full max-w-4xl flex-col overflow-visible pt-10 md:pt-32"
      id="skills"
    >
      <SkillSection title="SKILL" data={[]} extractItems={() => []} />
      {SKILL_CATEGORIES.map((category) => (
        <SkillSection
          key={category.title}
          title={category.title}
          data={category.data}
          extractItems={category.extractItems}
          isSubSection
        />
      ))}
    </section>
  );
};

export default Skills;
