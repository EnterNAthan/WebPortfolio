import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Exemple de données de projets - À remplacer par vos vraies données
const projects = [
  {
    id: 1,
    title: 'Projet 1',
    description: 'Description courte du projet',
    image: 'https://via.placeholder.com/400x300',
    tags: ['Marketing', 'Communication'],
    date: '2024',
  },
  {
    id: 2,
    title: 'Projet 2',
    description: 'Description courte du projet',
    image: 'https://via.placeholder.com/400x300',
    tags: ['Design', 'Web'],
    date: '2024',
  },
  {
    id: 3,
    title: 'Projet 3',
    description: 'Description courte du projet',
    image: 'https://via.placeholder.com/400x300',
    tags: ['Social Media', 'Content'],
    date: '2023',
  },
  {
    id: 4,
    title: 'Projet 4',
    description: 'Description courte du projet',
    image: 'https://via.placeholder.com/400x300',
    tags: ['Branding', 'Strategy'],
    date: '2023',
  },
  {
    id: 5,
    title: 'Projet 5',
    description: 'Description courte du projet',
    image: 'https://via.placeholder.com/400x300',
    tags: ['Marketing', 'Analytics'],
    date: '2023',
  },
  {
    id: 6,
    title: 'Projet 6',
    description: 'Description courte du projet',
    image: 'https://via.placeholder.com/400x300',
    tags: ['Communication', 'Events'],
    date: '2022',
  },
];

const allTags = ['Tous', ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState('Tous');

  const filteredProjects =
    selectedTag === 'Tous'
      ? projects
      : projects.filter((p) => p.tags.includes(selectedTag));

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

          {/* Filter Tags */}
          <motion.div
            className="flex flex-wrap gap-3 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
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
                    <div className="flex items-center gap-2 mb-3">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-[#FFA800]/20 text-[#FFA800]"
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
                    <p className="text-sm text-white/60 line-clamp-2">
                      {project.description}
                    </p>
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
