import { useRef } from "react";
import { ABOUT } from "../constants/AboutConstants";
import { gsap, useGSAP } from "../lib/gsap";
import { revealInSequence, shouldReduceMotion } from "../lib/motion";

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(
    () => {
      if (shouldReduceMotion()) return;

      revealInSequence(gsap, ".about-reveal", {
        trigger: aboutRef.current,
        start: "top 76%",
      });
    },
    { scope: aboutRef },
  );

  return (
    <section ref={aboutRef} className="flex max-w-4xl flex-col pt-20" id="about">
      {/* ABOUT ME */}
      <h2 className="about-reveal mb-1 text-center text-3xl sm:text-4xl lg:text-6xl font-bold">
        ABOUT ME
      </h2>

      {/* ดูรายละเอียดเพิ่มเติม */}
      <p className="about-reveal tracking-[0.15em] text-center text-transparent font-light pb-5 bg-clip-text bg-linear-to-r from-[#ef233c] to-[#f9bec7] text-base sm:text-lg">
        ดูรายละเอียดเพิ่มเติม
      </p>

      {/* เนื้อหา ABOUT */}
      <div>
        {ABOUT.map((text, index) => (
          <p
            key={index}
            className="about-reveal mb-4 text-xs sm:text-sm md:text-base font-light"
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default About;
