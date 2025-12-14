import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Données des compétences BUT3 Informatique
const competencesData = [
  {
    name: 'Réaliser',
    value: 35,
    description: 'Développer des solutions informatiques',
    color: '#FFA800',
    details: [
      'AC31.01 : Architectures adaptées',
      'AC31.02 : Évolution d\'applications',
      'AC31.03 : Intégration en production',
    ],
  },
  {
    name: 'Optimiser',
    value: 30,
    description: 'Applications optimisées',
    color: '#FF8C00',
    details: [
      'AC32.01 : Anticiper les métriques',
      'AC32.02 : Profiler et analyser',
      'AC32.03 : Bibliothèques spécialisées',
    ],
  },
  {
    name: 'Collaborer',
    value: 35,
    description: 'Travail en équipe informatique',
    color: '#00FFE0',
    details: [
      'AC36.01 : Veille technologique',
      'AC36.02 : Économie de l\'innovation',
      'AC36.03 : Conduite du changement',
      'AC36.04 : Management de projet',
    ],
  },
];

export default function CompetencesChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-[#1a1a1a]/95 backdrop-blur-sm border border-white/20 p-4 rounded-xl shadow-xl">
          <h3 className="text-white font-bold text-lg mb-2">{data.name}</h3>
          <p className="text-white/70 text-sm mb-2">{data.description}</p>
          <p className="text-[#00FFE0] font-semibold">{data.value}% de mes projets</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-black/50 to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Mes{' '}
            <span className="bg-gradient-to-r from-[#FFA800] to-[#00FFE0] bg-clip-text text-transparent">
              Compétences BUT
            </span>
          </h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Répartition de mes compétences selon le référentiel BUT 3 Informatique
            parcours Développement logiciel
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Camembert interactif */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={competencesData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={140}
                      paddingAngle={5}
                      dataKey="value"
                      onMouseEnter={onPieEnter}
                      onMouseLeave={onPieLeave}
                    >
                      {competencesData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                          opacity={activeIndex === null || activeIndex === index ? 1 : 0.3}
                          style={{
                            filter:
                              activeIndex === index
                                ? 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))'
                                : 'none',
                            transition: 'all 0.3s ease',
                          }}
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>

                {/* Centre du donut - Total */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-[#FFA800] to-[#00FFE0] bg-clip-text text-transparent">
                      100%
                    </div>
                    <div className="text-white/60 text-sm mt-1">Compétences</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Détails des compétences */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {competencesData.map((comp, index) => (
                <Link
                  key={comp.name}
                  to={`/projects?competence=${comp.name}`}
                  className="block"
                >
                  <motion.div
                    className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group"
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    {/* Barre de couleur */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                      style={{ backgroundColor: comp.color }}
                    />

                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${comp.color}20` }}
                      >
                        <div
                          className="text-2xl font-bold"
                          style={{ color: comp.color }}
                        >
                          {comp.value}%
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-xl font-bold text-white">
                            {comp.name}
                          </h3>
                          <ArrowRight
                            className="text-white/40 group-hover:text-white/80 transition-all group-hover:translate-x-1"
                            size={20}
                          />
                        </div>
                        <p className="text-white/60 text-sm mb-3">
                          {comp.description}
                        </p>

                        {/* Détails des AC */}
                        <div className="space-y-1">
                          {comp.details.map((detail, i) => (
                            <div
                              key={i}
                              className="text-xs text-white/50 flex items-start gap-2"
                            >
                              <span
                                className="mt-1 w-1 h-1 rounded-full flex-shrink-0"
                                style={{ backgroundColor: comp.color }}
                              />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>

                        {/* Indicateur "Voir les projets" */}
                        <div className="mt-4 pt-3 border-t border-white/10">
                          <span
                            className="text-xs font-semibold inline-flex items-center gap-1.5 group-hover:gap-2 transition-all"
                            style={{ color: comp.color }}
                          >
                            Voir les projets
                            <ArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Hover effect */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, ${comp.color}10, transparent)`,
                      }}
                    />
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
