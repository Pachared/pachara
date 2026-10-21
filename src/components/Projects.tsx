import SectionHeadingText from "./SectionHeadingText";
import { useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { PROJECTS } from "../constants/ProjectConstants";
import { gsap, useGSAP } from "../lib/gsap";
import { revealInSequence, shouldReduceMotion } from "../lib/motion";
import type { Project, ProjectCategory } from "../types";

const CATS: ProjectCategory[] = ["All", "Web", "Frontend", "Backend", "Fullstack", "Desktop"];

type ProjectStackCardProps = {
  project: Project;
  index: number;
  total: number;
};

const ProjectStackCard = ({ project, index, total }: ProjectStackCardProps) => {
  const shouldLoadEarly = index < 2;

  return (
    <article
      style={{
        "--project-stack-top": `${5 + index * 1.75}rem`,
        zIndex: total + index,
      } as CSSProperties}
      className="project-stack-card sticky top-4 origin-top shrink-0 overflow-hidden rounded-3xl border border-white/15 bg-black/90 shadow-xl shadow-black/40 backdrop-blur-md transform-gpu will-change-transform lg:top-[var(--project-stack-top)]"
    >
      <div className="project-stack-card-inner grid h-[100dvh] grid-cols-1 grid-rows-[minmax(12rem,0.65fr)_minmax(0,1fr)] lg:h-auto lg:min-h-130 lg:grid-cols-[1.05fr_0.95fr] lg:grid-rows-none">
        <div className="relative min-h-0 overflow-hidden lg:min-h-full">
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

        <div className="flex max-h-[26rem] min-h-0 self-start flex-col overflow-hidden px-5 py-4 sm:px-8 md:max-h-none md:self-auto md:justify-center md:overflow-visible md:py-7 lg:px-10">
          <div className="max-h-[calc(26rem-6rem)] overflow-y-auto overscroll-contain md:max-h-none md:overflow-visible">
            <h3 className="whitespace-pre-line text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              {project.name}
            </h3>

            <p className="mt-5 text-base font-normal leading-relaxed text-gray-300">
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
          </div>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-fit shrink-0 items-center rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black md:mt-8"
          >
            เข้าชมบน GitHub
          </a>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const [cat, setCat] = useState<ProjectCategory>("All");
  const projectsRef = useRef<HTMLElement | null>(null);

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

  const handleChangeCat = (next: ProjectCategory) => {
    setCat(next);
  };

  useGSAP(
    () => {
      if (shouldReduceMotion()) return;

      revealInSequence(gsap, ".project-reveal", {
        trigger: projectsRef.current,
      });

      const cards = gsap.utils.toArray<HTMLElement>(".project-stack-card");
      const cardBodies = gsap.utils.toArray<HTMLElement>(".project-stack-card-inner");

      cardBodies.forEach((cardBody) => {
        revealInSequence(gsap, cardBody, {
          trigger: cardBody,
          start: "top 88%",
          y: 24,
          duration: 0.8,
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
    <section ref={projectsRef} className="w-full pt-10 md:pt-32" id="projects">
      <h2 className="mb-1 text-center text-3xl font-bold sm:text-4xl lg:text-6xl">
        <SectionHeadingText text="PROJECT" />
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

      {/* A shared gap keeps every sticky margin box equal, including the last card. */}
      <div key={cat} className="mx-auto flex max-w-6xl flex-col gap-24 sm:gap-28 lg:gap-32">
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
