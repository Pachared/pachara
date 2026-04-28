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
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onWheel={(e) => e.preventDefault()}
          onTouchMove={(e) => e.preventDefault()}
        >
          <motion.img
            src="/Pachara.png"
            alt="Pachara"
            className="w-70 h-70 object-contain"
            draggable={false}
            animate={{ scale: [0.95, 1.02, 0.95], y: [6, -2, 6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
