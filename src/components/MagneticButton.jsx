import { motion, useMotionValue, useSpring } from 'framer-motion';

const spring = { stiffness: 220, damping: 18, mass: 0.35 };

function MagneticButton({ as: Component = motion.a, className = '', children, ...props }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, spring);
  const smoothY = useSpring(y, spring);

  const handlePointerMove = (event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - bounds.left - bounds.width / 2;
    const offsetY = event.clientY - bounds.top - bounds.height / 2;

    x.set(offsetX * 0.16);
    y.set(offsetY * 0.16);
  };

  const resetPosition = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Component
      className={className}
      style={{ x: smoothX, y: smoothY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPosition}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </Component>
  );
}

export default MagneticButton;
