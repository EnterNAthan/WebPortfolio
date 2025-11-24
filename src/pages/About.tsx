import { motion } from 'framer-motion';
import { Award, Code, Mountain, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Qui suis-je{' '}
            <span className="bg-gradient-to-r from-[#FFA800] to-[#00FFE0] bg-clip-text text-transparent">
              ?
            </span>
          </h1>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Photo + anecdote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:col-span-1"
            >
              {/* Photo */}
              <div className="relative mb-6">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#FFA800]/20 to-[#00FFE0]/20 border border-white/10">
                  <img
                    src="https://via.placeholder.com/400"
                    alt="Nathan Carqueijeiro"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-[#FFA800] to-[#00FFE0] rounded-3xl -z-10 blur-xl opacity-50" />
              </div>

              {/* Anecdote card */}
              <motion.div
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <Mountain className="text-[#00FFE0] flex-shrink-0 mt-1" size={24} />
                  <h3 className="text-xl font-bold text-white">Le saviez-vous ?</h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Quand je ne code pas, vous me trouverez sur les sentiers de trail en montagne.
                  La course à pied m'a appris la persévérance et la gestion de l'effort - des qualités
                  qui me servent aussi en développement !
                </p>
              </motion.div>
            </motion.div>

            {/* Content principale */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="space-y-4">
                <p className="text-xl text-white/70 leading-relaxed">
                  Après un bac STI2D option ITEC, j'ai poursuivi avec un{' '}
                  <span className="text-[#FFA800] font-semibold">
                    BTS CIEL option Informatique et Réseaux
                  </span>
                  , puis actuellement en{' '}
                  <span className="text-[#00FFE0] font-semibold">
                    BUT 3 Informatique parcours Développement logiciel
                  </span>{' '}
                  en alternance.
                </p>

                <p className="text-xl text-white/70 leading-relaxed">
                  Passionné par la <span className="text-[#FFA800] font-semibold">cybersécurité</span> et
                  le <span className="text-[#00FFE0] font-semibold">développement web</span>, j'aime créer
                  des applications performantes et sécurisées. Mon alternance me permet d'appliquer
                  mes connaissances sur des projets concrets et d'apprendre au quotidien.
                </p>

                <p className="text-xl text-white/70 leading-relaxed">
                  En dehors de l'informatique, je pratique la <span className="text-[#00FFE0] font-semibold">course à pied</span> et
                  le <span className="text-[#00FFE0] font-semibold">trail</span>. Ces activités m'apprennent
                  la discipline, la gestion de l'effort et le dépassement de soi.
                </p>
              </div>

              {/* Badges des passions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                <motion.div
                  className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-[#FFA800]/20 flex items-center justify-center group-hover:bg-[#FFA800]/30 transition-colors">
                      <Code className="text-[#FFA800]" size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Développement</h3>
                  </div>
                  <p className="text-sm text-white/60">
                    React, TypeScript, Node.js, Python
                  </p>
                </motion.div>

                <motion.div
                  className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-[#00FFE0]/20 flex items-center justify-center group-hover:bg-[#00FFE0]/30 transition-colors">
                      <Shield className="text-[#00FFE0]" size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Cybersécurité</h3>
                  </div>
                  <p className="text-sm text-white/60">
                    Sécurité applicative, réseaux, cryptographie
                  </p>
                </motion.div>

                <motion.div
                  className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-[#FFA800]/20 flex items-center justify-center group-hover:bg-[#FFA800]/30 transition-colors">
                      <Mountain className="text-[#FFA800]" size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Trail & Course</h3>
                  </div>
                  <p className="text-sm text-white/60">
                    Ultra-trail, courses en montagne
                  </p>
                </motion.div>

                <motion.div
                  className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-[#00FFE0]/20 flex items-center justify-center group-hover:bg-[#00FFE0]/30 transition-colors">
                      <Award className="text-[#00FFE0]" size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Alternance</h3>
                  </div>
                  <p className="text-sm text-white/60">
                    Projets professionnels en entreprise
                  </p>
                </motion.div>
              </div>

              <div className="pt-8">
                <a
                  href="/cv.pdf"
                  className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-[#FFA800] to-[#00FFE0] text-black font-semibold hover:opacity-90 transition-opacity"
                >
                  Télécharger mon CV
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
