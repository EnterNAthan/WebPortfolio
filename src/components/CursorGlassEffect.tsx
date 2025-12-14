import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CursorGlassEffect() {
  const [isHovering, setIsHovering] = useState(false);

  // Instant cursor following with minimal delay
  const springConfig = { damping: 15, stiffness: 400, mass: 0.1 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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
      {/* Magnifying glass / Loupe effect */}
      <div
        className="relative"
        style={{
          width: '120px',
          height: '120px',
        }}
      >
        {/* Subtle outer ring */}
        <div
          className="absolute inset-[-8px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 224, 0.08), transparent 70%)',
            filter: 'blur(12px)',
          }}
        />

        {/* Main magnifying lens - with blur and distortion, more transparent for readability */}
        <div
          className="absolute inset-0 rounded-full overflow-visible"
          style={{
            background: `
              radial-gradient(circle at 35% 30%,
                rgba(255, 255, 255, 0.02) 0%,
                rgba(255, 255, 255, 0.01) 40%,
                transparent 100%
              )
            `,
            // Minimal blur for clear readability + subtle chromatic effect
            backdropFilter: 'blur(2px) saturate(120%) brightness(108%) contrast(103%)',
            WebkitBackdropFilter: 'blur(2px) saturate(120%) brightness(108%) contrast(103%)',
            border: '2px solid rgba(255, 255, 255, 0.12)',
            boxShadow: `
              inset 0 1px 3px rgba(255, 255, 255, 0.15),
              inset 0 -1px 2px rgba(0, 0, 0, 0.08),
              0 4px 16px rgba(0, 255, 224, 0.08),
              0 8px 24px rgba(255, 168, 0, 0.05),
              0 0 0 1px rgba(255, 255, 255, 0.05),
              0 0 30px rgba(0, 255, 224, 0.04)
            `,
            // Subtle scale for lens effect
            transform: 'scale(1.02)',
          }}
        >
          {/* Top glare - like a real lens */}
          <div
            className="absolute rounded-full"
            style={{
              top: '12%',
              left: '20%',
              width: '50%',
              height: '40%',
              background: 'radial-gradient(ellipse at top left, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.1) 30%, transparent 60%)',
              filter: 'blur(10px)',
              mixBlendMode: 'overlay',
            }}
          />

          {/* Sharp highlight spot */}
          <div
            className="absolute rounded-full"
            style={{
              top: '20%',
              left: '28%',
              width: '16%',
              height: '16%',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.2) 40%, transparent)',
              filter: 'blur(3px)',
              boxShadow: '0 0 12px rgba(255, 255, 255, 0.4)',
            }}
          />

          {/* Subtle color tint - barely visible */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(circle at 50% 50%,
                  rgba(0, 255, 224, 0.02) 0%,
                  transparent 60%
                )
              `,
              mixBlendMode: 'soft-light',
            }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Lens frame/edge - very subtle */}
        <motion.div
          className="absolute inset-[-2px] rounded-full"
          style={{
            background: `
              conic-gradient(
                from 0deg,
                rgba(0, 255, 224, 0.12) 0deg,
                rgba(255, 168, 0, 0.08) 120deg,
                rgba(0, 255, 224, 0.12) 240deg,
                rgba(0, 255, 224, 0.12) 360deg
              )
            `,
            filter: 'blur(4px)',
            opacity: 0.4,
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </motion.div>
  );
}
