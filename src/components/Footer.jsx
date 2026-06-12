import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";
import { revealInSequence, shouldReduceMotion } from "../lib/motion";

function Footer() {
  const footerRef = useRef(null);
  const year = new Date().getFullYear();

  useGSAP(
    () => {
      if (shouldReduceMotion()) return;

      revealInSequence(gsap, ".footer-reveal", {
        trigger: footerRef.current,
        start: "top 90%",
        y: 12,
        stagger: 0.08,
      });
    },
    { scope: footerRef },
  );

  return (
    <footer ref={footerRef} className="w-full px-4 pt-16 pb-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent" />
        <div className="footer-reveal mt-12 flex flex-col items-center justify-center gap-6 pt-6 text-xs text-white/60 md:flex-row">
          <div>© {year} Pachara Portfolio. All rights reserved.</div>

          <div>
            Designed & Built by{" "}
            <span className="font-semibold text-white/80">Pachara</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
