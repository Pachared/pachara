import SectionHeadingText from "./SectionHeadingText";
import { useRef } from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants/ContactConstants";
import { gsap, useGSAP } from "../lib/gsap";
import { revealInSequence, shouldReduceMotion } from "../lib/motion";
import { animateFloatingIcons } from "../lib/iconMotion";

const Contact = () => {
    const contactRef = useRef<HTMLElement | null>(null);

    useGSAP(
        () => {
            if (shouldReduceMotion()) return;

            revealInSequence(gsap, ".contact-reveal", {
                trigger: contactRef.current,
            });

            const media = gsap.matchMedia();
            media.add({
                desktop: "(min-width: 1280px) and (hover: hover) and (pointer: fine)",
                motion: "(prefers-reduced-motion: no-preference)",
            }, context => {
                if (!context.conditions?.motion) return;
                const group = contactRef.current!.querySelector<HTMLElement>(".contact-icons")!;
                if (context.conditions.desktop && navigator.maxTouchPoints === 0) {
                    animateFloatingIcons(group, group.querySelectorAll<HTMLElement>(".contact-icon-motion"));
                    return;
                }
            gsap.set(".contact-icon-motion", { autoAlpha: 0, y: 18, scale: 0.98 });

            gsap.to(".contact-icon-motion", {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.7,
                delay: 0.25,
                ease: "power3.out",
                stagger: 0.12,
                clearProps: "transform",
                scrollTrigger: {
                    trigger: ".contact-icons",
                    start: "clamp(top 90%)",
                    once: true,
                },
            });
            });
            return () => media.revert();
        },
        { scope: contactRef },
    );

    return (
        <section ref={contactRef} className="pt-10 pb-12 md:pt-32 md:pb-20 bg-transparent" id="contact">
            <div className="max-w-xl mx-auto text-center">
                <h1 className="mb-1 text-center text-3xl sm:text-4xl lg:text-6xl font-bold">
                    <SectionHeadingText text="CONTACT ME" />
                </h1>

                <p className="contact-reveal tracking-wider text-center text-transparent font-light pb-4 sm:pb-5 bg-clip-text bg-linear-to-r from-[#ef233c] to-[#f9bec7] text-base sm:text-lg">
                    ดูรายละเอียดเพิ่มเติม
                </p>

                <p className="contact-reveal mb-6 text-base leading-relaxed text-gray-300 sm:px-0">
                    หากคุณสนใจร่วมงาน หรืออยากพูดคุยเพิ่มเติมสามารถติดต่อผมได้ผ่านช่องทางโซเชียลมีเดียด้านล่างนี้ยินดีพูดคุยและแลกเปลี่ยนไอเดียครับ
                </p>

                <div className="contact-icons flex flex-wrap justify-center gap-4 sm:gap-6">
                    {SOCIAL_MEDIA_LINKS.map((link, index) => (
                        <div key={index} className="contact-icon-slot">
                        <div className="contact-icon-motion">
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.name}
                            className="contact-icon block rounded-2xl p-3 text-white transition-[translate,scale,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-110 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:translate-none motion-reduce:scale-100 motion-reduce:transition-none sm:p-4"
                        >
                            {link.icon}
                        </a>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
