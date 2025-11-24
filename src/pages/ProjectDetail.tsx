import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Données temporaires - À remplacer par vos vraies données
const projectsData: Record<string, any> = {
  '1': {
    title: 'Projet 1',
    description: 'Description détaillée du projet',
    fullDescription: `Ce projet a été réalisé dans le cadre de ma formation en BUT Techniques de Commercialisation.
    L'objectif était de créer une campagne marketing complète pour promouvoir un produit innovant.`,
    image: 'https://via.placeholder.com/1200x600',
    tags: ['Marketing', 'Communication'],
    date: '2024',
    duration: '3 mois',
    competences: [
      'Stratégie marketing',
      'Communication digitale',
      'Analyse de marché',
      'Gestion de projet',
    ],
    outils: ['Photoshop', 'Illustrator', 'Canva', 'Google Analytics'],
    images: [
      'https://via.placeholder.com/800x500',
      'https://via.placeholder.com/800x500',
      'https://via.placeholder.com/800x500',
    ],
    contexte: 'Projet universitaire réalisé en équipe de 4 personnes',
    objectifs: [
      'Développer une stratégie marketing innovante',
      'Créer une identité visuelle cohérente',
      'Augmenter la visibilité de la marque',
    ],
    resultats: [
      'Augmentation de 150% de l\'engagement',
      'Création de 20+ contenus visuels',
      'Présentation devant un jury professionnel',
    ],
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData[id || '1'];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Projet non trouvé</h1>
          <Link
            to="/projects"
            className="text-[#00FFE0] hover:underline"
          >
            Retour aux projets
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      {/* Hero Image */}
      <motion.section
        className="relative h-[60vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />

        {/* Back Button */}
        <Link
          to="/projects"
          className="absolute top-8 left-8 flex items-center gap-2 px-4 py-2 rounded-lg bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Retour</span>
        </Link>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#FFA800]/20 text-[#FFA800] border border-[#FFA800]/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-white/60">
                {project.description}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  À propos du projet
                </h2>
                <p className="text-white/70 text-lg leading-relaxed whitespace-pre-line">
                  {project.fullDescription}
                </p>
              </motion.div>

              {/* Objectifs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Objectifs</h2>
                <ul className="space-y-3">
                  {project.objectifs.map((obj: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#FFA800] to-[#00FFE0] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-black text-sm font-bold">✓</span>
                      </div>
                      <span className="text-white/70">{obj}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Résultats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Résultats</h2>
                <div className="grid gap-4">
                  {project.resultats.map((resultat: string, index: number) => (
                    <div
                      key={index}
                      className="p-6 rounded-xl bg-white/5 border border-white/10"
                    >
                      <p className="text-white/70">{resultat}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Galerie</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images.map((img: string, index: number) => (
                    <div
                      key={index}
                      className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
                    >
                      <img
                        src={img}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Info Card */}
              <motion.div
                className="p-6 rounded-2xl bg-white/5 border border-white/10 sticky top-36"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-white/40 mb-2">
                      Date
                    </h3>
                    <p className="text-white">{project.date}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white/40 mb-2">
                      Durée
                    </h3>
                    <p className="text-white">{project.duration}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white/40 mb-2">
                      Contexte
                    </h3>
                    <p className="text-white/70 text-sm">{project.contexte}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white/40 mb-3">
                      Compétences
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.competences.map((comp: string) => (
                        <span
                          key={comp}
                          className="px-3 py-1.5 rounded-full text-xs bg-[#00FFE0]/10 text-[#00FFE0] border border-[#00FFE0]/20"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white/40 mb-3">
                      Outils utilisés
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.outils.map((outil: string) => (
                        <span
                          key={outil}
                          className="px-3 py-1.5 rounded-full text-xs bg-white/5 text-white/70 border border-white/10"
                        >
                          {outil}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
