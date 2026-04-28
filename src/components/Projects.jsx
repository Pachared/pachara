import { useMemo, useRef, useState } from "react";
import { PROJECTS } from "../constants/ProjectConstants";
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

const CATS = ["All", "Web", "Frontend", "Backend", "Fullstack", "Desktop"];

const ProjectStackCard = ({ project, index, total }) => {
  const stackOffset = Math.min(index, 7) * 28;

  return (
    <article
      style={{
        top: `calc(5rem + ${stackOffset}px)`,
        zIndex: total + index,
      }}
      className="project-stack-card sticky mb-24 overflow-hidden rounded-3xl border border-white/15 bg-black/80 shadow-2xl shadow-black/50 backdrop-blur-xl sm:mb-28 lg:mb-32"
    >
      <div className="grid min-h-[620px] grid-cols-1 lg:min-h-[520px] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[300px] overflow-hidden lg:min-h-full">
          <img
            src={project.image}
            alt={project.name}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent lg:bg-linear-to-r lg:from-transparent lg:via-black/10 lg:to-black/80" />
          <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/50 px-4 py-1 text-xs font-semibold text-white/80 backdrop-blur-md">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>
        </div>

        <div className="flex flex-col justify-center px-5 py-7 sm:px-8 lg:px-10">
          <div className="mb-4 w-fit rounded-full border border-white/15 bg-[#ef233c]/10 px-4 py-1 text-xs font-semibold text-[#f9bec7]">
            {project.category}
          </div>

          <h3 className="whitespace-pre-line text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            {project.name}
          </h3>

          <p className="mt-5 text-sm font-light leading-relaxed text-gray-300 sm:text-base">
            {project.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {project.stackIcons?.map((icon) => (
              <span
                key={icon.src}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2 transition-transform duration-300 hover:scale-110"
              >
                <img src={icon.src} alt={icon.alt} className="max-h-full max-w-full" />
              </span>
            ))}
          </div>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-fit items-center rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            เข้าชมบน GitHub
          </a>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const [cat, setCat] = useState("All");
  const stackRef = useRef(null);

  const normalized = useMemo(() => {
    return PROJECTS.map((p) => ({
      ...p,
      category: p.category || "All",
    }));
  }, []);

  const filtered = useMemo(() => {
    if (cat === "All") return normalized;
    return normalized.filter((p) => p.category === cat);
  }, [cat, normalized]);

  const handleChangeCat = (next) => {
    setCat(next);
  };

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".project-stack-card");

      cards.forEach((card) => {
        gsap.from(card, {
          autoAlpha: 0,
          y: 72,
          duration: 0.75,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
        });
      });

      cards.forEach((card) => {
        gsap.to(card, {
          scale: 0.97,
          autoAlpha: 0.95,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 5rem",
            end: "bottom 5rem",
            scrub: true,
          },
        });
      });
    },
    { scope: stackRef, dependencies: [cat], revertOnUpdate: true },
  );

  return (
    <section className="w-full pt-20" id="projects">
      <motion.h2
        custom={0}
        variants={fadeUpCustom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-1 text-center text-3xl sm:text-4xl lg:text-6xl font-bold"
      >
        PROJECT
      </motion.h2>

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

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {CATS.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => handleChangeCat(c)}
            className={[
              "cursor-pointer rounded-lg px-5 py-2 text-sm font-semibold transition-all duration-300 ease-in-out",
              "border border-white/15",
              c === cat
                ? "bg-white text-black"
                : "text-white hover:bg-white hover:text-black",
            ].join(" ")}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div
        ref={stackRef}
        key={cat}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl pb-24"
      >
        {filtered.map((project, index) => (
          <ProjectStackCard
            key={project.id}
            project={project}
            index={index}
            total={filtered.length}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
