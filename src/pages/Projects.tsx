import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Exemple de données de projets - À remplacer par vos vraies données
const projects = [
  {
    id: 1,
    title: 'Application Web de Gestion',
    description: 'Développement d\'une application full-stack avec React et Node.js',
    image: 'https://via.placeholder.com/400x300',
    tags: ['Web', 'Full-Stack'],
    competences: ['Réaliser', 'Optimiser'],
    date: '2024',
  },
  {
    id: 2,
    title: 'Plateforme de Cybersécurité',
    description: 'Outil de détection et analyse de vulnérabilités',
    image: 'https://via.placeholder.com/400x300',
    tags: ['Cybersécurité', 'Python'],
    competences: ['Réaliser', 'Collaborer'],
    date: '2024',
  },
  {
    id: 3,
    title: 'API REST Optimisée',
    description: 'Conception et optimisation d\'une API performante',
    image: 'https://via.placeholder.com/400x300',
    tags: ['Backend', 'Performance'],
    competences: ['Optimiser', 'Réaliser'],
    date: '2024',
  },
  {
    id: 4,
    title: 'Projet Collaboratif en Équipe',
    description: 'Gestion de projet agile avec méthodologie Scrum',
    image: 'https://via.placeholder.com/400x300',
    tags: ['Management', 'Agile'],
    competences: ['Collaborer'],
    date: '2023',
  },
  {
    id: 5,
    title: 'Architecture Microservices',
    description: 'Refonte d\'une application monolithique en microservices',
    image: 'https://via.placeholder.com/400x300',
    tags: ['Architecture', 'DevOps'],
    competences: ['Réaliser', 'Optimiser', 'Collaborer'],
    date: '2023',
  },
  {
    id: 6,
    title: 'Dashboard Analytique',
    description: 'Interface de visualisation de données temps réel',
    image: 'https://via.placeholder.com/400x300',
    tags: ['Frontend', 'Data'],
    competences: ['Réaliser', 'Optimiser'],
    date: '2023',
  },
];

const allTags = ['Tous', ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

// Couleurs des compétences (même palette que CompetencesChart)
const competenceColors: Record<string, { bg: string; text: string; border: string }> = {
  'Réaliser': { bg: 'bg-[#FFA800]/20', text: 'text-[#FFA800]', border: 'border-[#FFA800]/30' },
  'Optimiser': { bg: 'bg-[#FF8C00]/20', text: 'text-[#FF8C00]', border: 'border-[#FF8C00]/30' },
  'Collaborer': { bg: 'bg-[#00FFE0]/20', text: 'text-[#00FFE0]', border: 'border-[#00FFE0]/30' },
};

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTag, setSelectedTag] = useState('Tous');
  const [selectedCompetence, setSelectedCompetence] = useState<string | null>(null);

  // Lire le paramètre de compétence depuis l'URL
  useEffect(() => {
    const competenceParam = searchParams.get('competence');
    if (competenceParam && ['Réaliser', 'Optimiser', 'Collaborer'].includes(competenceParam)) {
      setSelectedCompetence(competenceParam);
    }
  }, [searchParams]);

  // Filtrer par compétence ET par tag
  const filteredProjects = projects.filter((p) => {
    const matchesTag = selectedTag === 'Tous' || p.tags.includes(selectedTag);
    const matchesCompetence = !selectedCompetence || p.competences.includes(selectedCompetence);
    return matchesTag && matchesCompetence;
  });

  // Fonction pour sélectionner une compétence
  const handleCompetenceClick = (competence: string) => {
    if (selectedCompetence === competence) {
      setSelectedCompetence(null);
      setSearchParams({});
    } else {
      setSelectedCompetence(competence);
      setSearchParams({ competence });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      {/* Header */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Mes{' '}
              <span className="bg-gradient-to-r from-[#FFA800] to-[#00FFE0] bg-clip-text text-transparent">
                Projets
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl">
              Découvrez mes réalisations et projets d'études
            </p>
          </motion.div>

          {/* Filtres par Compétences BUT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-10"
          >
            <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-3">
              Filtrer par Compétence BUT
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Réaliser', 'Optimiser', 'Collaborer'].map((competence) => {
                const colors = competenceColors[competence];
                const isSelected = selectedCompetence === competence;
                return (
                  <button
                    key={competence}
                    onClick={() => handleCompetenceClick(competence)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                      isSelected
                        ? `${colors.bg} ${colors.text} ${colors.border} border-2 scale-105`
                        : 'bg-white/5 text-white/60 hover:bg-white/10 border-white/10'
                    }`}
                  >
                    {competence}
                  </button>
                );
              })}
              {selectedCompetence && (
                <button
                  onClick={() => handleCompetenceClick(selectedCompetence)}
                  className="px-4 py-2.5 rounded-full text-sm font-medium bg-white/5 text-white/40 hover:bg-white/10 border border-white/10 transition-all"
                >
                  Réinitialiser
                </button>
              )}
            </div>
          </motion.div>

          {/* Filter Tags */}
          <motion.div
            className="flex flex-wrap gap-3 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="w-full text-sm font-semibold text-white/50 uppercase tracking-wider mb-1">
              Filtrer par Technologie
            </h3>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedTag === tag
                    ? 'bg-gradient-to-r from-[#FFA800] to-[#00FFE0] text-black'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="group block relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-[#00FFE0]/50 transition-all"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FFA800] to-[#00FFE0] text-black font-semibold">
                        Voir le projet
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Tags technologiques */}
                    <div className="flex items-center gap-2 mb-3">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70 border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="ml-auto text-xs text-white/40">
                        {project.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00FFE0] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/60 line-clamp-2 mb-3">
                      {project.description}
                    </p>

                    {/* Badges de compétences BUT */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                      {project.competences.map((competence) => {
                        const colors = competenceColors[competence];
                        return (
                          <span
                            key={competence}
                            className={`px-2.5 py-1 rounded-md text-xs font-semibold ${colors.bg} ${colors.text} border ${colors.border}`}
                          >
                            {competence}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FFA800]/10 to-[#00FFE0]/10" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-white/40 text-lg">
                Aucun projet trouvé pour ce filtre
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
