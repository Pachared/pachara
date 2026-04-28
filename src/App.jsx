import { lazy, Suspense, useEffect, useState } from "react";
import { LayoutGroup } from "framer-motion";

import Hero from "./components/Hero";
import AboutEducation from "./components/AboutEducation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingOverlay from "./style/LoadingOverlay";

const StarsCanvas = lazy(() => import("./style/StarsBackground"));

const App = () => {
  const [loading, setLoading] = useState(true);
  const [useWebGlBackground, setUseWebGlBackground] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2400);
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
        <LoadingOverlay open={loading} />

        {!loading && useWebGlBackground && (
          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>
        )}

        <div className="relative z-10 flex flex-col items-center p-6 container mx-auto">
          <Hero introDone={!loading} />
          <AboutEducation />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
    </LayoutGroup>
  );
};

export default App;
