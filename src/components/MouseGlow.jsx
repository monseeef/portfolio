import { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

function MouseGlow() {
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 22, mass: 0.4 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 22, mass: 0.4 });

  useEffect(() => {
    const handlePointerMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 hidden opacity-70 mix-blend-screen md:block"
      style={{
        background: useMotionTemplate`radial-gradient(28rem circle at ${smoothX}px ${smoothY}px, rgba(52, 211, 153, 0.12), rgba(20, 184, 166, 0.06) 32%, transparent 64%)`,
      }}
    />
  );
}

export default MouseGlow;
