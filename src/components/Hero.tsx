import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HERO } from "../constants/HeroConstants";
import pachara from "/pachara.jpg";
import { gsap, useGSAP } from "../lib/gsap";
import { shouldReduceMotion } from "../lib/motion";
import SlideCommit from "./SlideCommit";
import GradientText from "./GradientText";

const downloadCv = () => {
  const link = document.createElement("a");
  link.href = "/Pachara.cv.pdf";
  link.download = "Pachara.cv.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();
};

type HeroProps = {
  introDone: boolean;
  contentReady: boolean;
};

const Hero = ({ introDone, contentReady }: HeroProps) => {
  const heroRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!introDone) return;

      if (shouldReduceMotion()) return;

      gsap.set(".hero-copy", { autoAlpha: 0, y: 22 });
      gsap.set(".hero-image", { autoAlpha: 0, scale: 0.98, y: 22 });
      if (!contentReady) return;

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(".hero-copy", {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.16,
        })
        .to(
          ".hero-image",
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.85,
          },
          "-=0.25",
        );
    },
    { scope: heroRef, dependencies: [introDone, contentReady], revertOnUpdate: true },
  );

  return (
    <section
      ref={heroRef}
      className="flex flex-wrap min-h-screen items-center px-2 py-10 md:px-0 xl:px-24"
    >
      {/* Text Content */}
      <div className="w-full text-center md:w-1/2 md:text-left">
        <div className="mb-2 flex h-24 items-center justify-center sm:h-28 md:mb-4 md:h-24 md:justify-start lg:h-32 xl:h-36">
          {introDone && (
            <motion.img
              layoutId={reducedMotion ? undefined : "pachara-logo"}
              src="/Pachara.png"
              alt={HERO.name}
              className="h-auto w-full max-w-[18rem] object-contain sm:max-w-[24rem] md:max-w-88 lg:max-w-124 xl:max-w-148"
              draggable={false}
              initial={false}
              transition={{
                duration: reducedMotion ? 0 : 0.95,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          )}
        </div>

        {introDone && (
          <>
            <span className="hero-copy mb-2 block p-2 text-2xl font-semibold sm:text-2xl md:mb-6 md:text-2xl lg:text-3xl xl:text-3xl">
              <GradientText colors={['#ef233c', '#f9bec7']} animationSpeed={8} variant="linear" scale={2}>
                {HERO.greet3}
              </GradientText>
            </span>

            <p className="hero-copy mx-auto mb-0 max-w-md p-2 text-base font-normal leading-relaxed md:mx-0 md:mb-8 md:max-w-lg">
              {HERO.description}
            </p>

            <div className="hero-copy hidden gap-4 p-2 md:flex md:flex-row md:items-start md:justify-start">
              <SlideCommit
                label="เลื่อนเพื่อดาวน์โหลด CV"
                doneLabel="เริ่มดาวน์โหลดแล้ว"
                errorLabel="ดาวน์โหลดไม่สำเร็จ"
                onConfirm={downloadCv}
                trackColor="#262626"
                handleColor="#f5f5f5"
                successColor="#22c55e"
                dangerColor="#e5484d"
                width={280}
                height={56}
                radius={28}
                speed={50}
                returnBounce={0.38}
                landingDip={0.026}
                holdMs={1500}
              />
            </div>
          </>
        )}
      </div>

      {/* Image Content */}
      <div className="mt-4 flex w-full justify-center md:mt-0 md:w-1/2 md:justify-end">
          <img
            src={pachara}
            alt="Pachara portrait"
            className="hero-image rounded-3xl w-75 sm:w-87.5 md:w-100 lg:w-125 object-cover"
            draggable={false}
            style={{ visibility: introDone ? undefined : "hidden" }}
          />
      </div>
    </section>
  );
};

export default Hero;
