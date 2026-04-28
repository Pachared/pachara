import { useRef } from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants/ContactConstants";
import { gsap, useGSAP } from "../lib/gsap";

const Contact = () => {
    const contactRef = useRef(null);

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (prefersReducedMotion) return;

            gsap.from(".contact-reveal", {
                autoAlpha: 0,
                y: 34,
                duration: 0.65,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: "top 78%",
                    once: true,
                },
            });

            gsap.from(".contact-icon", {
                autoAlpha: 0,
                y: 20,
                scale: 0.82,
                duration: 0.55,
                ease: "back.out(1.8)",
                stagger: 0.06,
                scrollTrigger: {
                    trigger: ".contact-icons",
                    start: "top 85%",
                    once: true,
                },
            });
        },
        { scope: contactRef },
    );

    return (
        <section ref={contactRef} className="py-20 sm:py-20 bg-transparent" id="contact">
            <div className="max-w-xl mx-auto text-center">
                <h1 className="contact-reveal mb-1 text-center text-3xl sm:text-4xl lg:text-6xl font-bold">
                    CONTACT ME
                </h1>

                <p className="contact-reveal tracking-wider text-center text-transparent font-light pb-4 sm:pb-5 bg-clip-text bg-linear-to-r from-[#ef233c] to-[#f9bec7] text-base sm:text-lg">
                    ดูรายละเอียดเพิ่มเติม
                </p>

                <p className="contact-reveal text-sm sm:text-base text-gray-400 mb-6 sm:px-0 leading-relaxed">
                    หากคุณสนใจร่วมงาน หรืออยากพูดคุยเพิ่มเติมสามารถติดต่อผมได้ผ่านช่องทางโซเชียลมีเดียด้านล่างนี้ยินดีพูดคุยและแลกเปลี่ยนไอเดียครับ
                </p>

                <div className="contact-icons flex flex-wrap justify-center gap-4 sm:gap-6">
                    {SOCIAL_MEDIA_LINKS.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-icon border border-white/15 backdrop-blur-md p-3 sm:p-4 rounded-4xl text-white transition-colors shadow-lg hover:scale-110 transform duration-200"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
