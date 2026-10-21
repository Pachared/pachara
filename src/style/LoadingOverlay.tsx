import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

type LoadingOverlayProps = {
  open: boolean;
  onExitComplete: () => void;
};

export default function LoadingOverlay({ open, onExitComplete }: LoadingOverlayProps) {
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    const prevent = (e: Event) => e.preventDefault();
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      window.addEventListener("wheel", prevent, { passive: false });
      window.addEventListener("touchmove", prevent, { passive: false });
    }

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("wheel", prevent);
      window.removeEventListener("touchmove", prevent);
    };
  }, [open]);

  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {open && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center"
          role="status"
          layoutRoot
          aria-label="กำลังโหลดเว็บไซต์ Pachara"
          initial={false}
          exit={{ transition: { duration: reducedMotion ? 0 : 0.95 } }}
          onWheel={(e) => e.preventDefault()}
          onTouchMove={(e) => e.preventDefault()}
        >
          <motion.div
            className="absolute inset-0 bg-black"
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: reducedMotion ? 0 : 0.5, ease: "easeInOut" } }}
          />

          <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-6 text-white" aria-hidden="true">
            <motion.img
              layoutId={reducedMotion ? undefined : "pachara-logo"}
              src="/Pachara.png"
              alt=""
              className="h-auto w-[16rem] object-contain sm:w-88 md:w-120"
              draggable={false}
              initial={reducedMotion ? false : {
                opacity: 0,
                y: 14,
                clipPath: "inset(0 100% 0 0)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                clipPath: reducedMotion ? "inset(0 0% 0 0)" : [
                  "inset(0 100% 0 0)",
                  "inset(0 70% 0 0)",
                  "inset(0 68% 0 0)",
                  "inset(0 30% 0 0)",
                  "inset(0 28% 0 0)",
                  "inset(0 0% 0 0)",
                ],
              }}
              transition={{
                duration: reducedMotion ? 0 : 0.8,
                ease: "easeOut",
                clipPath: {
                  delay: reducedMotion ? 0 : 0.15,
                  duration: reducedMotion ? 0 : 2.3,
                  times: [0, 0.24, 0.32, 0.65, 0.73, 1],
                  ease: "easeInOut",
                },
                opacity: { duration: reducedMotion ? 0 : 0.4 },
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
