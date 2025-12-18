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
  // Données de la timeline
  const timelineData = [
    {
      year: '2019-2022',
      left: {
        type: 'formation',
        title: 'Baccalauréat STI2D',
        subtitle: 'Option : ITEC (Innovation Technologique et Éco-Conception)',
        description: 'Formation technologique axée sur l\'innovation, la conception et l\'ingénierie.',
        badge: 'BAC',
        color: 'white/10',
      },
      right: {
        type: 'experience',
        title: 'McDonald\'s Longwy',
        subtitle: 'Employé polyvalent',
        description: 'Service client, gestion de caisse et travail en équipe. De la Première à la Terminale.',
        location: 'Longwy, France',
      },
    },
    {
      year: '2022-2024',
      left: {
        type: 'formation',
        title: 'BTS CIEL',
        subtitle: 'Cybersécurité, Informatique et réseaux, Électronique',
        description: 'Formation technique en systèmes informatiques, réseaux, et cybersécurité. Option : Informatique et Réseaux',
        badge: 'BTS',
        color: '[#00FFE0]/20',
        borderColor: '[#00FFE0]/30',
        textColor: '[#00FFE0]',
      },
      right: {
        type: 'experience',
        title: 'McDonald\'s Longwy + Morganite Luxembourg',
        subtitle: 'Employé polyvalent + Ouvrier d\'usine',
        description: 'Continuation au McDonald\'s et travail saisonnier à l\'usine Morganite Luxembourg pendant les étés.',
        location: 'Longwy & Luxembourg',
      },
    },
    {
      year: '2023-2025',
      left: null,
      right: {
        type: 'experience',
        title: 'Optinove Nancy',
        subtitle: 'Administrateur système et support informatique',
        description: 'Alternance en administration système, gestion de réseaux et support utilisateur.',
        location: 'Nancy, France',
      },
    },
    {
      year: '2024-2025',
      left: {
        type: 'formation',
        title: 'BUT 3 Informatique',
        subtitle: 'Parcours A : Développement logiciel',
        description: 'Formation approfondie en développement logiciel, architecture applicative, et gestion de projets informatiques.',
        badge: 'BUT 3',
        color: 'gradient-to-r from-[#FFA800] to-[#00FFE0]',
        textColor: 'black',
        isGradient: true,
      },
      right: null,
    },
    {
      year: '2025-Present',
      left: null,
      right: {
        type: 'experience',
        title: 'IUT Annecy - Département Informatique',
        subtitle: 'Développeur logiciel et web',
        description: 'Alternance dans le département informatique de l\'IUT, conception de logiciels et développement de sites web.',
        location: 'Annecy, France',
        current: true,
      },
    },
  ];

  return (
    <GenericPage
      title="Ma formation"
      subtitle="Mon parcours académique et professionnel"
    >
      <div className="relative">
        {/* Timeline centrale verticale */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFA800] via-[#FF8C00] to-[#00FFE0] transform -translate-x-1/2" />

        {/* Timeline items */}
        <div className="space-y-16">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="relative grid grid-cols-2 gap-8 items-start"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Left side - Formation */}
              <div className="text-right pr-8">
                {item.left ? (
                  <motion.div
                    className="inline-block text-left p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group"
                    whileHover={{ scale: 1.02, x: -5 }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 rounded-lg ${
                          item.left.isGradient
                            ? `bg-${item.left.color}`
                            : `bg-${item.left.color}`
                        } flex items-center justify-center flex-shrink-0 ${
                          item.left.borderColor ? `border border-${item.left.borderColor}` : ''
                        }`}
                      >
                        <span
                          className={`text-lg font-bold ${
                            item.left.textColor ? `text-${item.left.textColor}` : 'text-white'
                          }`}
                        >
                          {item.left.badge}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#FFA800] transition-colors">
                          {item.left.title}
                        </h3>
                        <p className="text-sm text-white/60 mb-3">{item.left.subtitle}</p>
                        <p className="text-sm text-white/70">{item.left.description}</p>
                      </div>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-r from-[#FFA800]/5 to-transparent blur-xl -z-10" />
                  </motion.div>
                ) : (
                  <div />
                )}
              </div>

              {/* Center dot and year */}
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1">
                <motion.div
                  className="relative"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  {/* Outer ring */}
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#FFA800] to-[#00FFE0] flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#0a0a0a]" />
                  </div>
                  {/* Year badge */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-12 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-full bg-[#0a0a0a] border border-white/20 text-xs font-semibold text-white/80">
                      {item.year}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Right side - Experience */}
              <div className="pl-8">
                {item.right ? (
                  <motion.div
                    className="inline-block p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-3 h-3 rounded-full bg-[#00FFE0] mt-1.5" />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00FFE0] transition-colors">
                          {item.right.title}
                        </h3>
                        <p className="text-sm font-semibold text-white/70 mb-1">
                          {item.right.subtitle}
                        </p>
                        {item.right.current && (
                          <span className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold bg-[#00FFE0]/20 text-[#00FFE0] border border-[#00FFE0]/30 mb-2">
                            En cours
                          </span>
                        )}
                        <p className="text-sm text-white/60 mb-2">{item.right.description}</p>
                        <p className="text-xs text-white/40">📍 {item.right.location}</p>
                      </div>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-l from-[#00FFE0]/5 to-transparent blur-xl -z-10" />
                  </motion.div>
                ) : (
                  <div />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </GenericPage>
  );
}

export function Competences() {
  const categories = [
    {
      titre: 'Entrepreneuriat & Business',
      icon: '🚀',
      competences: ['SaaS Building', 'MVP Development', 'Service Web', 'Business Model', 'Product Management', 'Growth Hacking'],
    },
    {
      titre: 'Communication & Pitch',
      icon: '💬',
      competences: ['Pitching', 'Présentation', 'Storytelling', 'Négociation', 'Networking', 'Public Speaking'],
    },
    {
      titre: 'Gestion & Leadership',
      icon: '👥',
      competences: ['Gestion d\'équipe', 'Méthodologie Agile', 'Planification', 'Prise de décision', 'Mentorat', 'Organisation'],
    },
    {
      titre: 'Frontend',
      icon: '��',
      competences: ['React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'JavaScript', 'Framer Motion'],
    },
    {
      titre: 'Backend',
      icon: '⚙️',
      competences: ['Node.js', 'Express', 'Python', 'Django', 'API REST', 'Java'],
    },
    {
      titre: 'Bases de données',
      icon: '💾',
      competences: ['PostgreSQL', 'MongoDB', 'SQL', 'NoSQL'],
    },
    {
      titre: 'Outils & DevOps',
      icon: '🛠️',
      competences: ['Git', 'Docker', 'CI/CD', 'Linux', 'Vite'],
    },
    {
      titre: 'IoT & Réseau',
      icon: '🌐',
      competences: ['Raspberry Pi', 'Socket', 'Réseau', 'Protocoles TCP/IP', 'Threading'],
    },
    {
      titre: 'Cybersécurité',
      icon: '🔒',
      competences: ['Honeypots', 'Analyse de logs', 'Sécurité réseau', 'Cryptographie'],
    },
    {
      titre: 'Intelligence Artificielle',
      icon: '🤖',
      competences: ['Perceptron', 'Prompt Engineering', 'Machine Learning', 'Réseaux de neurones', 'NLP', 'Data Science'],
    },
  ];

  return (
    <GenericPage
      title="Mes compétences"
      subtitle="Technologies et outils que je maîtrise"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((categorie, catIndex) => (
          <motion.div
            key={categorie.titre}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#FFA800]/30 transition-all group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Icône et titre */}
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
              <div className="text-4xl group-hover:scale-110 transition-transform">
                {categorie.icon}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#FFA800] transition-colors">
                {categorie.titre}
              </h3>
            </div>

            {/* Liste des compétences */}
            <div className="flex flex-wrap gap-2">
              {categorie.competences.map((comp, compIndex) => (
                <motion.span
                  key={comp}
                  className="px-3 py-1.5 rounded-lg text-sm bg-white/5 text-white/80 border border-white/10 hover:bg-gradient-to-r hover:from-[#FFA800]/20 hover:to-[#00FFE0]/20 hover:border-[#00FFE0]/30 transition-all cursor-default"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: catIndex * 0.1 + compIndex * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  {comp}
                </motion.span>
              ))}
            </div>

            {/* Effet de glow au hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFA800]/5 to-[#00FFE0]/5 blur-xl" />
            </div>
          </motion.div>
        ))}
      </div>
    </GenericPage>
  );
}

export function Atouts() {
  const atouts = [
    {
      titre: 'Créativité',
      description: 'Innovation et originalité dans la résolution de problèmes',
      icon: '💡',
      color: '#FFA800',
    },
    {
      titre: 'Travail d\'équipe',
      description: 'Collaboration efficace et communication constructive',
      icon: '🤝',
      color: '#00FFE0',
    },
    {
      titre: 'Autonomie',
      description: 'Gestion indépendante des projets et initiatives',
      icon: '🎯',
      color: '#FFA800',
    },
    {
      titre: 'Adaptabilité',
      description: 'Flexibilité face aux changements et nouvelles situations',
      icon: '🔄',
      color: '#00FFE0',
    },
    {
      titre: 'Curiosité',
      description: 'Soif d\'apprendre et de découvrir de nouvelles technologies',
      icon: '🔍',
      color: '#FFA800',
    },
    {
      titre: 'Persévérance',
      description: 'Détermination à surmonter les obstacles et défis',
      icon: '💪',
      color: '#00FFE0',
    },
  ];

  return (
    <GenericPage
      title="Mes atouts"
      subtitle="Les qualités qui font la différence"
    >
      {/* Grid moderne avec 3 colonnes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {atouts.map((atout, index) => (
          <motion.div
            key={atout.titre}
            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            {/* Gradient de fond au hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at top right, ${atout.color}15, transparent)`,
              }}
            />

            {/* Contenu de la carte */}
            <div className="relative z-10">
              {/* Icône */}
              <motion.div
                className="text-6xl mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {atout.icon}
              </motion.div>

              {/* Titre */}
              <h3
                className="text-2xl font-bold text-white mb-3"
                style={{
                  color: atout.color === '#FFA800' ? '#FFA800' : '#00FFE0',
                }}
              >
                {atout.titre}
              </h3>

              {/* Description */}
              <p className="text-white/70 text-sm leading-relaxed">
                {atout.description}
              </p>
            </div>

            {/* Ligne décorative en bas */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              style={{ backgroundColor: atout.color }}
            />
          </motion.div>
        ))}
      </div>
    </GenericPage>
  );
}

export function Loisirs() {
  const activites = [
    {
      nom: 'Trail',
      description: 'Course en montagne et sentiers naturels',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop',
      gridClass: 'md:col-span-2 md:row-span-2',
    },
    {
      nom: 'Course à pied',
      description: 'Running urbain et entraînement régulier',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&auto=format&fit=crop',
      gridClass: 'md:col-span-1 md:row-span-1',
    },
    {
      nom: 'Surf',
      description: 'Glisse et connexion avec l\'océan',
      image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&auto=format&fit=crop',
      gridClass: 'md:col-span-1 md:row-span-1',
    },
    {
      nom: 'Escalade',
      description: 'Grimpe en salle et falaise',
      image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&auto=format&fit=crop',
      gridClass: 'md:col-span-1 md:row-span-2',
    },
    {
      nom: 'Randonnée',
      description: 'Exploration des sentiers et sommets',
      image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&auto=format&fit=crop',
      gridClass: 'md:col-span-2 md:row-span-1',
    },
  ];

  return (
    <GenericPage
      title="Mes loisirs"
      subtitle="Les activités qui me passionnent"
    >
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] gap-4">
        {activites.map((activite, index) => (
          <motion.div
            key={activite.nom}
            className={`group relative rounded-2xl overflow-hidden cursor-pointer ${activite.gridClass}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Image de fond */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              style={{
                backgroundImage: `url(${activite.image})`,
              }}
            />

            {/* Overlay sombre par défaut, transparent au hover */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-all duration-500" />

            {/* Border subtile */}
            <div className="absolute inset-0 border border-white/10 group-hover:border-white/20 rounded-2xl transition-colors duration-500" />

            {/* Contenu texte - apparaît au hover */}
            <div className="relative h-full flex flex-col justify-end p-6">
              <div className="transform transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                  {activite.nom}
                </h3>
                <p className="text-white/70 text-sm md:text-base opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {activite.description}
                </p>
              </div>

              {/* Ligne accent en bas */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FFA800] to-[#00FFE0] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </GenericPage>
  );
}
