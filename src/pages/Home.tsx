import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import NeatBackground from '../components/NeatBackground';
import CompetencesChart from '../components/CompetencesChart';

const neatConfig = {
  colors: [
    { color: '#FFA800', enabled: true },
    { color: '#FF8C00', enabled: true },
    { color: '#00FFE0', enabled: true },
    { color: '#00CCC0', enabled: true },
    { color: '#0099A0', enabled: false },
  ],
  speed: 2,
  horizontalPressure: 3,
  verticalPressure: 8,
  waveFrequencyX: 2,
  waveFrequencyY: 8,
  waveAmplitude: 8,
  shadows: 5,
  highlights: 2,
  colorBrightness: 1.1,
  colorSaturation: 0,
  wireframe: false,
  colorBlending: 8,
  backgroundColor: '#0a0a0a',
  backgroundAlpha: 1,
  grainScale: 0,
  grainSparsity: 0,
  grainIntensity: 0,
  grainSpeed: 0,
  resolution: 1,
  yOffset: 0,
};

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section with Neat Background */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        {/* Neat Background */}
        <NeatBackground
          config={neatConfig}
          className="absolute inset-0 -z-10 transform-gpu scale-110"
        />

        {/* Content with Parallax */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              className="text-7xl md:text-8xl font-bold"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-white">Bonjour, je suis</span>
              <br />
              <span className="bg-gradient-to-r from-[#FFA800] to-[#00FFE0] bg-clip-text text-transparent">
                Nathan Carqueijeiro
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/70 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Étudiant en alternance en BUT 3 Informatique parcours Développement logiciel.
              Passionné par la cybersécurité, le développement web et le trail running.
            </motion.p>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link
                to="/projects"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#FFA800] to-[#00FFE0] text-black font-semibold hover:opacity-90 transition-opacity"
              >
                Voir mes projets
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-lg border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Me contacter
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-white/50"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Quick Stats Section with Parallax */}
      <section className="relative py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { number: '3', label: 'Années d\'études', suffix: '' },
              { number: '20', label: 'Projets réalisés', suffix: '+' },
              { number: '10', label: 'Compétences', suffix: '+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative text-center p-8 rounded-2xl bg-white/5 border border-white/20 backdrop-blur-xl hover:bg-white/10 transition-all group overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Glass reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFA800]/20 to-[#00FFE0]/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />

                <div className="relative z-10">
                  <div className="text-5xl font-bold bg-gradient-to-r from-[#FFA800] to-[#00FFE0] bg-clip-text text-transparent">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="mt-2 text-white/60 group-hover:text-white/80 transition-colors">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Competences Chart Section */}
      <CompetencesChart />
    </div>
  );
}
