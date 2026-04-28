import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full px-4 pt-16 pb-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent" />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center justify-center gap-6  pt-6 text-xs text-white/60 md:flex-row"
        >
          <div>© {year} Pachara Portfolio. All rights reserved.</div>

          <div>
            Designed & Built by{" "}
            <span className="font-semibold text-white/80">Pachara</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
