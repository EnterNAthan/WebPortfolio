import { motion } from 'framer-motion';

export default function LiquidGlass() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Liquid Glass Effect */}
      <svg className="absolute inset-0 w-full h-full" style={{ filter: 'url(#goo)' }}>
        <defs>
          {/* Gooey Filter for liquid effect */}
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>

          {/* Gradient for glass */}
          <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA800" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00FFE0" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FFA800" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Animated blobs */}
        <Blob
          cx="20%"
          cy="30%"
          r="15%"
          duration={20}
          delay={0}
        />
        <Blob
          cx="80%"
          cy="40%"
          r="20%"
          duration={25}
          delay={2}
        />
        <Blob
          cx="50%"
          cy="60%"
          r="18%"
          duration={22}
          delay={4}
        />
        <Blob
          cx="30%"
          cy="70%"
          r="16%"
          duration={18}
          delay={1}
        />
        <Blob
          cx="70%"
          cy="20%"
          r="14%"
          duration={24}
          delay={3}
        />
      </svg>

      {/* Glass overlay with backdrop blur */}
      <div className="absolute inset-0 backdrop-blur-[100px] bg-gradient-to-br from-white/5 to-transparent" />

      {/* Animated light reflections */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(255, 168, 0, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 70%, rgba(0, 255, 224, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(255, 168, 0, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(255, 168, 0, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Blob component for liquid animation
function Blob({
  cx,
  cy,
  r,
  duration,
  delay,
}: {
  cx: string;
  cy: string;
  r: string;
  duration: number;
  delay: number;
}) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={r}
      fill="url(#glassGradient)"
      animate={{
        cx: [cx, `calc(${cx} + 10%)`, cx],
        cy: [cy, `calc(${cy} - 8%)`, cy],
        r: [r, `calc(${r} * 1.2)`, r],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  );
}
