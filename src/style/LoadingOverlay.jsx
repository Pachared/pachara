import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export default function LoadingOverlay({ open }) {
  useEffect(() => {
    const prevent = (e) => e.preventDefault();
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
    <AnimatePresence mode="popLayout">
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          initial={false}
          exit={{ transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] } }}
          onWheel={(e) => e.preventDefault()}
          onTouchMove={(e) => e.preventDefault()}
        >
          <motion.div
            className="absolute inset-0 bg-black"
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          />

          <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
            <motion.img
              layoutId="pachara-logo"
              src="/Pachara.png"
              alt="Pachara"
              className="h-auto w-[16rem] object-contain sm:w-[22rem] md:w-[30rem]"
              draggable={false}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
