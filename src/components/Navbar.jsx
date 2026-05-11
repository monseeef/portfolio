import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = ['About', 'Projects', 'Experience', 'Contact'];

function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.toLowerCase()))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4"
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className="mx-auto flex w-full max-w-4xl items-center justify-center rounded-full border border-white/10 bg-slate-900/75 px-2.5 py-2.5 shadow-[0_18px_60px_rgba(2,6,23,0.45)] backdrop-blur-md sm:justify-between sm:px-6 sm:py-3"
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="hidden text-sm font-semibold tracking-wide text-white transition-colors hover:text-emerald-300 focus:outline-none focus-visible:text-emerald-300 sm:inline-flex"
        >
          Portfolio
        </a>

        <div className="flex max-w-full items-center gap-0.5 overflow-x-auto [scrollbar-width:none] sm:gap-2 [&::-webkit-scrollbar]:hidden">
          {navLinks.map((link) => {
            const sectionId = link.toLowerCase();
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link}
                href={`#${sectionId}`}
                aria-current={isActive ? 'page' : undefined}
                className={`group relative shrink-0 rounded-full px-2 py-2 text-[0.7rem] font-medium transition duration-300 focus:outline-none focus-visible:bg-emerald-400/10 focus-visible:text-emerald-300 sm:px-4 sm:text-sm ${
                  isActive
                    ? 'bg-emerald-400/10 text-emerald-300'
                    : 'text-slate-300 hover:bg-emerald-400/10 hover:text-emerald-300'
                }`}
              >
                {link}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-px origin-center bg-emerald-300 transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </div>
      </nav>
    </motion.header>
  );
}

export default Navbar;
