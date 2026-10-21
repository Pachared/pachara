import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { gsap, useGSAP } from "../lib/gsap";
import { revealInSequence, shouldReduceMotion } from "../lib/motion";
import TechText from "./TechText";

const GradientWaves = lazy(() => import("./GradientWaves"));

function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const year = new Date().getFullYear();
  const [showWaves, setShowWaves] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setShowWaves(true);
      observer.disconnect();
    }, { rootMargin: "200px" });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      if (shouldReduceMotion()) return;

      revealInSequence(gsap, ".footer-reveal", {
        trigger: footerRef.current?.querySelector(".footer-reveal"),
        start: "clamp(top bottom)",
        y: 12,
        stagger: 0.08,
      });
    },
    { scope: footerRef },
  );

  return (
    <footer ref={footerRef} className="relative z-10 isolate flex min-h-[max(520px,56.25vw)] w-full flex-col justify-end overflow-hidden px-6 pt-10 pb-6 text-white select-none md:pt-16">
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-black"
        style={{
          maskImage: "radial-gradient(ellipse 100% 100% at 50% 100%, black 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 100% 100% at 50% 100%, black 60%, transparent 100%)",
        }}
        aria-hidden="true"
      >
        {showWaves && (
          <Suspense fallback={null}>
            <GradientWaves
              backgroundColor="#000000"
              horizonColor="#5227FF"
              waveColor="#FF9FFC"
              crestColor="#FFFFFF"
              speed={0.4}
              amplitude={2.5}
              brightness={1}
              opacity={1}
              quality="low"
              dpr={1}
              mouseInteraction={false}
              swellOnClick={false}
            />
          </Suspense>
        )}
      </div>
      <div className="mx-auto w-full max-w-7xl">
        <div className="absolute inset-x-6 top-1/2 mx-auto h-64 max-w-7xl -translate-y-1/2 text-white sm:h-80 md:h-96">
          <TechText
            text="Pachara"
            fontSize={220}
            fontWeight={600}
            reveal="letter"
            dashLength={4}
            dashGap={2}
            specks={15}
            intro="type"
            introDuration={2}
            clickKick
            guides={false}
          />
        </div>
        <div className="footer-reveal flex flex-col items-center justify-center gap-2 pt-4 text-center text-sm leading-relaxed text-white/70 md:flex-row md:gap-6">
          <p className="m-0">© {year} Pachara Portfolio — สงวนลิขสิทธิ์</p>
          <p className="m-0">
            ออกแบบและพัฒนาโดย{" "}
            <span className="font-semibold text-white/80">พชร</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
