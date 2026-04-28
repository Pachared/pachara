import { useRef } from "react";
import { SKILLS } from "../constants/SkillsConstants";
import { TOOLS } from "../constants/SkillsConstants";
import { DATABASES } from "../constants/SkillsConstants";
import { CLOUDS } from "../constants/SkillsConstants";
import { motion } from "framer-motion";
import { gsap, useGSAP } from "../lib/gsap";

const fadeUpCustom = {
  hidden: () => ({ opacity: 0, y: 30 }),
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 },
  }),
};

const AnimatedItemGroup = ({ data, extractItems }) => (
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
            aria-label={`Item icon`}
          >
            {content}
          </div>
        ))}
      </div>
    ))}
  </div>
);

const Skills = () => {
  const skillsRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      gsap.utils.toArray(".skill-group").forEach((group) => {
        const icons = gsap.utils.toArray(group.querySelectorAll(".skill-icon"));
        const iconBodies = gsap.utils.toArray(group.querySelectorAll(".skill-icon-body"));

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
              trigger: group,
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
      className="relative mx-auto w-full max-w-4xl flex flex-col pt-20 overflow-visible"
      id="skills"
    >
      {/* SKILL */}
      <motion.h1
        custom={0}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-1 text-center text-3xl sm:text-4xl lg:text-6xl font-bold"
      >
        SKILL
      </motion.h1>
      <motion.p
        custom={1}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="tracking-[0.15em] text-center text-transparent font-light pb-5 bg-clip-text bg-linear-to-r from-[#ef233c] to-[#f9bec7] text-base sm:text-lg"
      >
        ดูรายละเอียดเพิ่มเติม
      </motion.p>
      <motion.div
        custom={2}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <AnimatedItemGroup
          data={SKILLS}
          extractItems={(item) => [
            item.skill
          ]}
        />
      </motion.div>

      {/* TOOL */}
      <motion.h1
        custom={3}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="pt-20 mb-1 text-center text-3xl sm:text-4xl lg:text-6xl font-bold"
      >
        TOOL
      </motion.h1>
      <motion.p
        custom={4}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="tracking-[0.15em] text-center text-transparent font-light pb-5 bg-clip-text bg-linear-to-r from-[#ef233c] to-[#f9bec7] text-base sm:text-lg"
      >
        ดูรายละเอียดเพิ่มเติม
      </motion.p>
      <motion.div
        custom={5}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <AnimatedItemGroup
          data={TOOLS}
          extractItems={(item) => [
            item.tool
          ]}
        />
      </motion.div>

      {/* DATABASE */}
      <motion.h1
        custom={6}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="pt-20 mb-1 text-center text-3xl sm:text-4xl lg:text-6xl font-bold"
      >
        DATABASE
      </motion.h1>
      <motion.p
        custom={7}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="tracking-[0.15em] text-center text-transparent font-light pb-5 bg-clip-text bg-linear-to-r from-[#ef233c] to-[#f9bec7] text-base sm:text-lg"
      >
        ดูรายละเอียดเพิ่มเติม
      </motion.p>
      <motion.div
        custom={8}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <AnimatedItemGroup
          data={DATABASES}
          extractItems={(item) => [
            item.database
          ]}
        />
      </motion.div>

      {/* CLOUD */}
      <motion.h1
        custom={6}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="pt-20 mb-1 text-center text-3xl sm:text-4xl lg:text-6xl font-bold"
      >
        CLOUD
      </motion.h1>
      <motion.p
        custom={7}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="tracking-[0.15em] text-center text-transparent font-light pb-5 bg-clip-text bg-linear-to-r from-[#ef233c] to-[#f9bec7] text-base sm:text-lg"
      >
        ดูรายละเอียดเพิ่มเติม
      </motion.p>
      <motion.div
        custom={8}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <AnimatedItemGroup
          data={CLOUDS}
          extractItems={(item) => [
            item.cloud
          ]}
        />
      </motion.div>
    </section>
  );
};

export default Skills;
