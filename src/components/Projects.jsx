import { useMemo, useRef, useState } from "react";
import { PROJECTS } from "../constants/ProjectConstants";
import { gsap, useGSAP } from "../lib/gsap";
import { revealInSequence, shouldReduceMotion } from "../lib/motion";

const CATS = ["All", "Web", "Frontend", "Backend", "Fullstack", "Desktop"];

const ProjectStackCard = ({ project, index, total }) => {
  const stackOffset = Math.min(index, 7) * 28;
  const shouldLoadEarly = index < 2;

  return (
    <article
      style={{
        top: `calc(5rem + ${stackOffset}px)`,
        zIndex: total + index,
      }}
      className="project-stack-card sticky mb-24 overflow-hidden rounded-3xl border border-white/15 bg-black/90 shadow-xl shadow-black/40 backdrop-blur-md transform-gpu will-change-transform sm:mb-28 lg:mb-32"
    >
      <div className="project-stack-card-inner grid min-h-155 grid-cols-1 lg:min-h-130 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-75 overflow-hidden lg:min-h-full">
          <img
            src={project.image}
            alt={project.name}
            className="absolute inset-0 h-full w-full object-cover transform-gpu"
            loading={shouldLoadEarly ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={shouldLoadEarly ? "high" : "auto"}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent lg:bg-linear-to-r lg:from-transparent lg:via-black/10 lg:to-black/80" />
        </div>

        <div className="flex flex-col justify-center px-5 py-7 sm:px-8 lg:px-10">
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
  const projectsRef = useRef(null);

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
      if (shouldReduceMotion()) return;

      revealInSequence(gsap, ".project-reveal", {
        trigger: projectsRef.current,
      });

      const cards = gsap.utils.toArray(".project-stack-card");
      const cardBodies = gsap.utils.toArray(".project-stack-card-inner");

      cardBodies.forEach((cardBody) => {
        revealInSequence(gsap, cardBody, {
          trigger: cardBody,
          start: "top 88%",
          y: 44,
          duration: 0.6,
          stagger: 0,
        });
      });

      cards.forEach((card) => {
        gsap.to(card, {
          scale: 0.985,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 5rem",
            end: "bottom 5rem",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    { scope: projectsRef, dependencies: [cat], revertOnUpdate: true },
  );

  return (
    <section ref={projectsRef} className="w-full pt-28 md:pt-32" id="projects">
      <h2 className="project-reveal mb-1 text-center text-3xl font-bold sm:text-4xl lg:text-6xl">
        PROJECT
      </h2>

      <p className="project-reveal pb-5 text-center text-base font-light tracking-[0.15em] text-transparent bg-clip-text bg-linear-to-r from-[#ef233c] to-[#f9bec7] sm:text-lg">
        ดูรายละเอียดเพิ่มเติม
      </p>

      <div className="project-reveal mb-8 flex flex-wrap justify-center gap-2">
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

      <div key={cat} className="mx-auto max-w-6xl pb-24">
        {filtered.map((project, index) => (
          <ProjectStackCard
            key={project.id}
            project={project}
            index={index}
            total={filtered.length}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
