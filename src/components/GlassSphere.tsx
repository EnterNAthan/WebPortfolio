import { motion } from 'framer-motion';

interface GlassSphereProps {
  size?: number;
  x?: string;
  y?: string;
  delay?: number;
  duration?: number;
}

export default function GlassSphere({
  size = 400,
  x = '50%',
  y = '50%',
  delay = 0,
  duration = 20,
}: GlassSphereProps) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: x,
        top: y,
        width: `${size}px`,
        height: `${size}px`,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {/* Main glass sphere */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.02) 70%)',
          backdropFilter: 'blur(30px) saturate(150%) brightness(110%)',
          WebkitBackdropFilter: 'blur(30px) saturate(150%) brightness(110%)',
          border: '2px solid rgba(255, 255, 255, 0.25)',
          boxShadow: `
            inset 0 0 80px rgba(255, 255, 255, 0.15),
            inset -10px -10px 60px rgba(0, 255, 224, 0.1),
            0 10px 100px rgba(0, 255, 224, 0.25),
            0 20px 140px rgba(255, 168, 0, 0.2),
            0 0 60px rgba(255, 255, 255, 0.1)
          `,
          filter: 'drop-shadow(0 0 40px rgba(0, 255, 224, 0.3))',
        }}
      >
        {/* Light reflection on top */}
        <div
          className="absolute rounded-full"
          style={{
            top: '10%',
            left: '15%',
            width: '45%',
            height: '45%',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3) 40%, transparent 70%)',
            filter: 'blur(20px)',
            mixBlendMode: 'overlay',
          }}
        />

        {/* Sharp highlight spot */}
        <div
          className="absolute rounded-full"
          style={{
            top: '20%',
            left: '25%',
            width: '20%',
            height: '20%',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9), transparent 60%)',
            filter: 'blur(8px)',
          }}
        />

        {/* Secondary highlight */}
        <div
          className="absolute rounded-full"
          style={{
            bottom: '20%',
            right: '25%',
            width: '30%',
            height: '30%',
            background: 'radial-gradient(circle, rgba(0, 255, 224, 0.3), transparent 60%)',
            filter: 'blur(20px)',
          }}
        />

        {/* Chromatic aberration effect */}
        <div
          className="absolute inset-0 rounded-full opacity-50"
          style={{
            background: `
              radial-gradient(circle at 50% 50%,
                transparent 40%,
                rgba(255, 168, 0, 0.15) 50%,
                rgba(0, 255, 224, 0.15) 60%,
                transparent 70%
              )
            `,
            mixBlendMode: 'screen',
          }}
        />

        {/* Inner glow */}
        <div
          className="absolute rounded-full"
          style={{
            inset: '10%',
            background: 'radial-gradient(circle, rgba(255, 168, 0, 0.1), rgba(0, 255, 224, 0.1))',
            filter: 'blur(30px)',
          }}
        />
      </div>

      {/* Outer glow */}
      <div
        className="absolute inset-[-20%] rounded-full opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 224, 0.2), transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
    </motion.div>
  );
}

// Container with multiple spheres
export function GlassSpheresContainer() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large central sphere */}
      <GlassSphere size={500} x="50%" y="45%" delay={0} duration={25} />

      {/* Medium sphere left */}
      <GlassSphere size={350} x="20%" y="60%" delay={2} duration={22} />

      {/* Medium sphere right */}
      <GlassSphere size={380} x="80%" y="35%" delay={4} duration={28} />

      {/* Small sphere top */}
      <GlassSphere size={250} x="65%" y="20%" delay={1} duration={20} />

      {/* Small sphere bottom */}
      <GlassSphere size={280} x="35%" y="75%" delay={3} duration={24} />

      {/* Additional small spheres for depth */}
      <GlassSphere size={180} x="85%" y="65%" delay={5} duration={18} />
      <GlassSphere size={200} x="15%" y="30%" delay={6} duration={26} />
    </div>
  );
}
