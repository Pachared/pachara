import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { LayoutGroup } from "framer-motion";

import Hero from "./components/Hero";
import AboutEducation from "./components/AboutEducation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingOverlay from "./style/LoadingOverlay";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

const StarsCanvas = lazy(() => import("./style/StarsBackground"));

const App = () => {
  const [loading, setLoading] = useState(true);
  const [introSettled, setIntroSettled] = useState(false);
  const finishIntro = useCallback(() => setIntroSettled(true), []);
  const [useWebGlBackground, setUseWebGlBackground] = useState(false);

  useSmoothScroll(introSettled);

  useEffect(() => {
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 2400 : 3000;
    const t = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    const updateBackgroundMode = () => setUseWebGlBackground(media.matches);

    updateBackgroundMode();
    media.addEventListener("change", updateBackgroundMode);

    return () => media.removeEventListener("change", updateBackgroundMode);
  }, []);

  return (
    <LayoutGroup id="pachara-intro">
      <div className="relative bg-cover bg-center bg-img">
        <LoadingOverlay open={loading} onExitComplete={finishIntro} />

        {introSettled && useWebGlBackground && (
          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>
        )}

        <div className="relative z-10 flex flex-col items-center px-6 pt-6 container mx-auto select-none">
          <Hero introDone={!loading} contentReady={introSettled} />
          <AboutEducation />
          <Projects />
          <Skills />
          <Contact />
        </div>
        <Footer />
      </div>
    </LayoutGroup>
  );
};

export default App;
