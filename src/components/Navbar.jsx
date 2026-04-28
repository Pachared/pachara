import { useState } from "react";
import logo from "/Pachara.png";
import { NAVIGATION_LINKS } from "../constants/NavbarConstants";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const isDesktopEducation = href === "#education" && window.matchMedia("(min-width: 768px)").matches;
    const targetElement = document.querySelector(isDesktopEducation ? "#about" : href);

    if (targetElement) {
      const offset = -25;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const educationOffset = isDesktopEducation ? window.innerHeight * 1.1 : 0;
      const offsetPosition = elementPosition + window.scrollY + offset + educationOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };
  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop Menu */}
        <div
          className="mx-auto hidden max-w-2xl items-center justify-center
        rounded-lg border border-white/15 bg-black/20 py-3 backdrop-blur-lg lg:flex"
        >
          <div className="flex items-center justify-between gap-6">
            <div>
              <a href="/">
                <img src={logo} width={100} alt="logo" />
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-white hover:text-transparent hover:bg-linear-to-r from-[#ef233c] to-[#f9bec7] bg-clip-text"
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between mx-5">
            <div>
              <a href="/">
                <img src={logo} width={100} alt="logo" />
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="mx-4 mb-4 flex flex-col gap-4 backdrop-blur-md rounded-md p-4"
              >
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="block w-full text-[#ef233c] text-lg hover:text-purple-400 transition-colors"
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
