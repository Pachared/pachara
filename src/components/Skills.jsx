import { useRef } from "react";
import { CLOUDS, DATABASES, SKILLS, TOOLS } from "../constants/SkillsConstants";
import { gsap, useGSAP } from "../lib/gsap";
import { revealInSequence, shouldReduceMotion } from "../lib/motion";

const SkillSection = ({ title, data, extractItems }) => (
  <div className="skill-section pt-20 first:pt-0">
    <h1 className="skill-reveal mb-1 text-center text-3xl font-bold sm:text-4xl lg:text-6xl">
      {title}
    </h1>
    <p className="skill-reveal pb-5 text-center text-base font-light tracking-[0.15em] text-transparent bg-clip-text bg-linear-to-r from-[#ef233c] to-[#f9bec7] sm:text-lg">
      ดูรายละเอียดเพิ่มเติม
    </p>
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
  const skillsRef = useRef(null);

  useGSAP(
    () => {
      if (shouldReduceMotion()) return;

      gsap.utils.toArray(".skill-section").forEach((section) => {
        const revealItems = section.querySelectorAll(".skill-reveal");
        const icons = section.querySelectorAll(".skill-icon");
        const iconBodies = section.querySelectorAll(".skill-icon-body");

        revealInSequence(gsap, revealItems, {
          trigger: section,
          start: "top 82%",
          stagger: 0.1,
        });

        gsap.fromTo(
          icons,
          {
            x: (index) => {
              const direction = index % 2 === 0 ? -1 : 1;
              return direction * (24 + (index % 4) * 10);
            },
            y: (index) => {
              const direction = index % 3 === 0 ? -1 : 1;
              return direction * (18 + (index % 5) * 7);
            },
            rotation: (index) => (index % 2 === 0 ? -1 : 1) * (4 + (index % 3) * 2),
            autoAlpha: 0,
            filter: "blur(6px)",
            scale: 0.9,
          },
          {
            x: 0,
            y: 0,
            rotation: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            scale: 1,
            duration: 0.9,
            ease: "expo.out",
            stagger: {
              each: 0.035,
              from: "center",
            },
            clearProps: "transform,filter,opacity,visibility",
            scrollTrigger: {
              trigger: section.querySelector(".skill-group"),
              start: "top 82%",
              once: true,
            },
          },
        );

        gsap.to(iconBodies, {
          y: -4,
          duration: 2.4,
          delay: 0.95,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          stagger: {
            each: 0.12,
            from: "random",
          },
        });
      });
    },
    { scope: skillsRef },
  );

  return (
    <section
      ref={skillsRef}
      className="relative mx-auto w-full max-w-4xl flex flex-col pt-28 md:pt-32 overflow-visible"
      id="skills"
    >
      <SkillSection title="SKILL" data={SKILLS} extractItems={(item) => [item.skill]} />
      <SkillSection title="TOOL" data={TOOLS} extractItems={(item) => [item.tool]} />
      <SkillSection
        title="DATABASE"
        data={DATABASES}
        extractItems={(item) => [item.database]}
      />
      <SkillSection title="CLOUD" data={CLOUDS} extractItems={(item) => [item.cloud]} />
    </section>
  );
};

export default Skills;
