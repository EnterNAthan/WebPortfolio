import { motion } from 'framer-motion';

interface GenericPageProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function GenericPage({ title, subtitle, children }: GenericPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-white/60 mb-16">{subtitle}</p>
          )}

          <div className="mt-12">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Pages spécifiques utilisant GenericPage
export function Formation() {
  return (
    <GenericPage
      title="Ma formation"
      subtitle="Mon parcours académique"
    >
      <div className="space-y-8">
        <motion.div
          className="p-8 rounded-2xl bg-white/5 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-[#FFA800] to-[#00FFE0] flex items-center justify-center flex-shrink-0">
              <span className="text-xl font-bold text-black">BUT 3</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                BUT 3 Informatique
              </h3>
              <p className="text-white/60 mb-4">2024 - 2025 • Parcours A : Développement logiciel</p>
              <p className="text-white/70">
                Formation approfondie en développement logiciel, architecture applicative, et gestion de projets informatiques.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-8 rounded-2xl bg-white/5 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-lg bg-[#00FFE0]/20 border border-[#00FFE0]/30 flex items-center justify-center flex-shrink-0">
              <span className="text-xl font-bold text-[#00FFE0]">BTS</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                BTS CIEL - Cybersécurité, Informatique et réseaux, Électronique
              </h3>
              <p className="text-white/60 mb-4">2022 - 2024 • Option : Informatique et Réseaux</p>
              <p className="text-white/70">
                Formation technique en systèmes informatiques, réseaux, et cybersécurité.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-8 rounded-2xl bg-white/5 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
              <span className="text-xl font-bold text-white">BAC</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Baccalauréat STI2D
              </h3>
              <p className="text-white/60 mb-4">2022 • Option : ITEC (Innovation Technologique et Éco-Conception)</p>
              <p className="text-white/70">
                Formation technologique axée sur l'innovation, la conception et l'ingénierie.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </GenericPage>
  );
}

export function Competences() {
  const competences = [
    { nom: 'React & TypeScript', niveau: 90 },
    { nom: 'Node.js & Express', niveau: 85 },
    { nom: 'HTML/CSS/JavaScript', niveau: 95 },
    { nom: 'Python & Django', niveau: 80 },
    { nom: 'Bases de données (SQL/NoSQL)', niveau: 85 },
    { nom: 'Git & DevOps', niveau: 80 },
  ];

  return (
    <GenericPage
      title="Mes compétences"
      subtitle="Les compétences que j'ai développées"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {competences.map((comp, index) => (
          <motion.div
            key={comp.nom}
            className="p-6 rounded-xl bg-white/5 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-white">{comp.nom}</h3>
              <span className="text-[#00FFE0]">{comp.niveau}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#FFA800] to-[#00FFE0]"
                initial={{ width: 0 }}
                animate={{ width: `${comp.niveau}%` }}
                transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </GenericPage>
  );
}

export function Atouts() {
  const atouts = [
    { titre: 'Créativité', description: 'Capacité à proposer des idées innovantes et originales' },
    { titre: 'Travail d\'équipe', description: 'Excellente collaboration avec mes collègues' },
    { titre: 'Autonomie', description: 'Capable de gérer mes projets de manière indépendante' },
    { titre: 'Adaptabilité', description: 'Facilité à m\'adapter aux nouvelles situations' },
  ];

  return (
    <GenericPage
      title="Mes atouts"
      subtitle="Ce qui me caractérise"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {atouts.map((atout, index) => (
          <motion.div
            key={atout.titre}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">{atout.titre}</h3>
            <p className="text-white/70">{atout.description}</p>
          </motion.div>
        ))}
      </div>
    </GenericPage>
  );
}

export function Loisirs() {
  const loisirs = [
    { nom: 'Sport', emoji: '🏃‍♀️', description: 'Running et fitness' },
    { nom: 'Photographie', emoji: '📸', description: 'Portraits et paysages' },
    { nom: 'Créations manuelles', emoji: '🎨', description: 'DIY et artisanat' },
    { nom: 'Lecture', emoji: '📚', description: 'Marketing et développement personnel' },
  ];

  return (
    <GenericPage
      title="Mes loisirs"
      subtitle="Ce que j'aime faire pendant mon temps libre"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loisirs.map((loisir, index) => (
          <motion.div
            key={loisir.nom}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-6xl mb-4">{loisir.emoji}</div>
            <h3 className="text-xl font-bold text-white mb-2">{loisir.nom}</h3>
            <p className="text-sm text-white/60">{loisir.description}</p>
          </motion.div>
        ))}
      </div>
    </GenericPage>
  );
}
