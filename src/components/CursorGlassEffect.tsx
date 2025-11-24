import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CursorGlassEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Smooth cursor following with spring animation
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        left: cursorX,
        top: cursorY,
        x: '-50%',
        y: '-50%',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isHovering ? 1 : 0,
        scale: isHovering ? 1 : 0,
      }}
      transition={{
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1], // Apple's ease curve
      }}
    >
      {/* Main glass sphere */}
      <div
        className="relative"
        style={{
          width: '120px',
          height: '120px',
        }}
      >
        {/* Glass sphere with Apple-style liquid effect */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            background: `
              radial-gradient(circle at 40% 30%,
                rgba(255, 255, 255, 0.12) 0%,
                rgba(255, 255, 255, 0.05) 30%,
                rgba(0, 255, 224, 0.04) 60%,
                transparent 100%
              )
            `,
            backdropFilter: 'blur(25px) saturate(180%) brightness(108%)',
            WebkitBackdropFilter: 'blur(25px) saturate(180%) brightness(108%)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: `
              inset 0 1px 1px rgba(255, 255, 255, 0.15),
              inset 0 -1px 1px rgba(0, 0, 0, 0.05),
              0 8px 24px rgba(0, 255, 224, 0.08),
              0 16px 40px rgba(255, 168, 0, 0.06)
            `,
          }}
        >
          {/* Apple-style subtle highlight */}
          <div
            className="absolute rounded-full"
            style={{
              top: '10%',
              left: '15%',
              width: '50%',
              height: '50%',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.05) 50%, transparent)',
              filter: 'blur(15px)',
              mixBlendMode: 'soft-light',
            }}
          />

          {/* Crisp highlight dot */}
          <div
            className="absolute rounded-full"
            style={{
              top: '20%',
              left: '25%',
              width: '12%',
              height: '12%',
              background: 'rgba(255, 255, 255, 0.5)',
              filter: 'blur(2px)',
            }}
          />

          {/* Liquid gradient overlay */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(circle at 30% 40%,
                  rgba(0, 255, 224, 0.08) 0%,
                  rgba(255, 168, 0, 0.05) 50%,
                  transparent 100%
                )
              `,
              mixBlendMode: 'overlay',
            }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        {/* Subtle outer glow */}
        <div
          className="absolute rounded-full"
          style={{
            inset: '-15%',
            background: 'radial-gradient(circle, rgba(0, 255, 224, 0.1), transparent 60%)',
            filter: 'blur(20px)',
          }}
        />

        {/* Liquid morphing ring */}
        <motion.div
          className="absolute inset-[-2px] rounded-full"
          style={{
            background: `
              conic-gradient(
                from 0deg,
                rgba(0, 255, 224, 0.2) 0deg,
                rgba(255, 168, 0, 0.2) 120deg,
                rgba(0, 255, 224, 0.2) 240deg,
                rgba(0, 255, 224, 0.2) 360deg
              )
            `,
            filter: 'blur(4px)',
            opacity: 0.3,
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </motion.div>
  );
}
