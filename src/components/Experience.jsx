import { useRef } from "react";
import { EXPERIENCES } from "../constants/ExperienceConstants";
import { gsap, useGSAP } from "../lib/gsap";

const Experience = () => {
    const experienceRef = useRef(null);

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (prefersReducedMotion) return;

            gsap.from(".experience-reveal", {
                autoAlpha: 0,
                y: 34,
                duration: 0.65,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: experienceRef.current,
                    start: "top 78%",
                    once: true,
                },
            });
        },
        { scope: experienceRef },
    );

    return (
        <section ref={experienceRef} className="pt-20" id="experience">
            <div className="max-w-3xl sm:max-w-4xl mx-auto">
                {/* หัวข้อ EXPERIENCES */}
                <h1 className="experience-reveal mb-1 text-center text-3xl sm:text-4xl lg:text-6xl font-bold">
                    EXPERIENCES
                </h1>

                {/* ข้อความ ดูรายละเอียดเพิ่มเติม */}
                <p className="experience-reveal tracking-wider text-center text-transparent font-light pb-5 bg-clip-text bg-linear-to-r from-[#ef233c] to-[#f9bec7] text-base sm:text-lg">
                    ดูรายละเอียดเพิ่มเติม
                </p>

                {/* รายการประสบการณ์ */}
                <div className="relative">
                    <div className="flex flex-col gap-10 px-0 sm:gap-14 sm:px-0">
                        {EXPERIENCES.map((exp, index) => (
                            <div
                                key={index}
                                className="experience-reveal relative"
                            >
                                <div className="flex flex-col gap-1 rounded-md">
                                    <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#ef233c] to-[#f9bec7] tracking-tight">
                                        {exp.title}
                                    </h3>

                                    <p className="text-sm text-gray-300">
                                        <span className="font-medium">{exp.company}</span>
                                    </p>
                                    <p className="text-sm text-gray-400 italic">{exp.duration}</p>

                                    <p className="mt-3 text-gray-300 leading-relaxed text-sm sm:text-base">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
