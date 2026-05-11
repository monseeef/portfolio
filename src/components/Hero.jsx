import { useEffect, useMemo, useState } from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const roles = ['Full-Stack Developer', 'React Native Specialist', 'UI/UX Designer'];

function useTypewriter(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const isWordComplete = letterCount === currentWord.length;
    const isWordEmpty = letterCount === 0;
    const delay = isDeleting ? 44 : isWordComplete ? 1400 : 72;

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting && isWordComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isWordEmpty) {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
        return;
      }

      setLetterCount((current) => current + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [isDeleting, letterCount, wordIndex, words]);

  return words[wordIndex].slice(0, letterCount);
}

function Hero() {
  const typedRole = useTypewriter(roles);
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.12,
          delayChildren: 0.15,
        },
      },
    }),
    [],
  );
  const itemVariants = useMemo(
    () => ({
      hidden: { y: 18, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
      },
    }),
    [],
  );

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[calc(100vh-12rem)] items-center overflow-hidden py-12 sm:py-20"
    >
      <div className="absolute inset-0 -z-20 bg-slate-950" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/18 blur-3xl sm:h-[28rem] sm:w-[28rem]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.34, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-0 top-16 -z-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl sm:h-80 sm:w-80"
        animate={{ y: [0, 18, 0], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="w-full max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-200 shadow-lg shadow-emerald-950/20 backdrop-blur"
          variants={itemVariants}
        >
          MERN &bull; React Native &bull; UI/UX
        </motion.p>

        <motion.h1
          id="hero-title"
          className="mt-8 max-w-4xl text-5xl font-bold tracking-normal text-white sm:text-7xl lg:text-8xl"
          variants={itemVariants}
        >
          Monsif El Ouarat
        </motion.h1>

        <motion.p
          className="mt-6 min-h-10 text-2xl font-semibold text-emerald-300 sm:text-4xl"
          variants={itemVariants}
        >
          <span>{typedRole}</span>
          <span className="ml-1 inline-block h-7 w-0.5 translate-y-1 bg-emerald-300 sm:h-9" />
        </motion.p>

        <motion.p
          className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          variants={itemVariants}
        >
          Building scalable MERN applications and high-performance mobile
          experiences with a design-first mindset.
        </motion.p>

        <motion.div className="mt-10 flex flex-col gap-4 sm:flex-row" variants={itemVariants}>
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-950/30 transition duration-300 hover:-translate-y-0.5 hover:shadow-emerald-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            View Projects
          </a>
          <a
            href="/monsif-el-ouarat-cv.txt"
            download="Monsif-El-Ouarat-CV.txt"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-emerald-300/50 hover:bg-emerald-300/10 hover:text-emerald-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <Download aria-hidden="true" size={18} strokeWidth={2} />
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
