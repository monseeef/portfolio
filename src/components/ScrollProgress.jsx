import { motion, useScroll, useSpring } from 'framer-motion';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 shadow-[0_0_18px_rgba(52,211,153,0.75)]"
      style={{ scaleX }}
    />
  );
}

export default ScrollProgress;
