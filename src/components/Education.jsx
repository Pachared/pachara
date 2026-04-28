import { useRef } from "react";
import { EDUCATION } from "../constants/EducationConstants";
import { gsap, useGSAP } from "../lib/gsap";

const Education = () => {
    const educationRef = useRef(null);

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (prefersReducedMotion) return;

            gsap.from(".education-reveal", {
                autoAlpha: 0,
                y: 34,
                duration: 0.65,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: educationRef.current,
                    start: "top 78%",
                    once: true,
                },
            });
        },
        { scope: educationRef },
    );

    return (
        <section ref={educationRef} className="pt-20" id="education">
            <div className="max-w-3xl sm:max-w-4xl mx-auto">
                {/* หัวข้อ */}
                <h1 className="education-reveal mb-1 text-center text-3xl sm:text-4xl lg:text-6xl font-bold">
                    EDUCATION
                </h1>

                {/* ข้อความ */}
                <p className="education-reveal tracking-[0.15em] text-center text-transparent font-light pb-5 bg-clip-text bg-linear-to-r from-[#ef233c] to-[#f9bec7] text-base sm:text-lg">
                    ดูรายละเอียดเพิ่มเติม
                </p>

                {/* รายการ education */}
                <div className="relative">
                    <div className="flex flex-col gap-10 px-0 sm:gap-14 sm:px-0">
                        {EDUCATION.map((edu, index) => (
                            <div
                                key={index}
                                className="education-reveal relative"
                            >
                                <div className="flex flex-col gap-1 rounded-md">
                                    <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#ef233c] to-[#f9bec7] tracking-tight">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-sm text-gray-300">
                                        <span className="font-medium">{edu.institution}</span>
                                    </p>
                                    <p className="text-sm text-gray-400 italic">{edu.duration}</p>
                                    <p className="mt-3 text-gray-300 leading-relaxed text-sm sm:text-base">
                                        {edu.description}
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

export default Education;
