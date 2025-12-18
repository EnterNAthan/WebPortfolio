import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, FileText, Video } from 'lucide-react';

// Données des projets
const projectsData: Record<string, any> = {
  '1': {
    title: 'Among Us IoT - Jeu Distribué sur Raspberry Pi',
    description: 'Jeu multijoueur distribué avec IA sur réseau de Raspberry Pi',
    fullDescription: `Projet innovant combinant IoT, Intelligence Artificielle et développement de jeu vidéo.

Ce système distribué permet à plusieurs joueurs de se connecter depuis différents Raspberry Pi pour jouer à une version inspirée d'Among Us. Le projet intègre une IA pour gérer les PNJ et optimiser l'expérience de jeu.

L'architecture réseau permet une communication en temps réel entre les différents nœuds du réseau, avec gestion de la synchronisation des états, détection de latence et réconciliation des conflits.

Le moteur de jeu développé en Python avec Pygame offre une interface graphique fluide et responsive, avec gestion des événements multijoueurs, animations et effets visuels.`,
    image: '/images/AmongUs.jpg',
    tags: ['IoT', 'Réseau', 'Python', 'IA'],
    date: '2024',
    duration: '4 mois',
    competences: [
      'Programmation réseau',
      'Intelligence Artificielle',
      'Développement de jeux',
      'Architecture distribuée',
      'Gestion de projet',
    ],
    outils: ['Python', 'Pygame', 'Raspberry Pi', 'Socket', 'Threading', 'NumPy'],
    contexte: 'Projet de fin d\'études BUT Informatique réalisé en équipe de 4 personnes',
    objectifs: [
      'Développer un système de jeu distribué sur réseau IoT',
      'Implémenter une IA pour gérer les comportements des PNJ',
      'Assurer la synchronisation en temps réel entre les joueurs',
      'Créer une interface graphique attractive avec Pygame',
      'Optimiser les performances pour les Raspberry Pi',
    ],
    resultats: [
      'Système fonctionnel supportant jusqu\'à 10 joueurs simultanés',
      'IA capable de simuler des comportements réalistes',
      'Latence moyenne de 50ms entre les nœuds du réseau',
      'Interface graphique fluide à 60 FPS sur Raspberry Pi 4',
    ],
    links: [
      { type: 'github', url: '#', label: 'Code source' },
      { type: 'demo', url: '#', label: 'Vidéo démo' },
      { type: 'docs', url: '#', label: 'Documentation technique' },
    ],
  },
  '2': {
    title: 'Application Web de Gestion',
    description: 'Application full-stack avec React et Node.js',
    fullDescription: `Application web complète développée avec une stack moderne React/Node.js, offrant une solution de gestion performante et intuitive.

Le frontend utilise React avec TypeScript pour garantir la fiabilité du code, accompagné de Tailwind CSS pour un design moderne et responsive. L'architecture basée sur des composants réutilisables facilite la maintenance et l'évolution de l'application.

Le backend Node.js avec Express fournit une API REST sécurisée, intégrant une authentification JWT, un système de gestion des rôles et permissions, et une validation robuste des données.

La base de données PostgreSQL est optimisée avec des index appropriés et des requêtes performantes utilisant un ORM moderne.`,
    image: '/images/ApplisWebGestion.png',
    tags: ['Web', 'Full-Stack', 'React'],
    date: '2024',
    duration: '3 mois',
    competences: [
      'Développement Frontend (React)',
      'Développement Backend (Node.js)',
      'Architecture API REST',
      'Base de données relationnelle',
      'Sécurité web',
    ],
    outils: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'JWT'],
    contexte: 'Projet professionnel en alternance - Développement d\'un outil de gestion interne',
    objectifs: [
      'Créer une interface utilisateur moderne et intuitive',
      'Développer une API REST sécurisée et performante',
      'Implémenter un système d\'authentification robuste',
      'Optimiser les performances de la base de données',
      'Assurer la sécurité des données utilisateurs',
    ],
    resultats: [
      'Application déployée en production utilisée par 50+ utilisateurs',
      'Temps de réponse API < 100ms en moyenne',
      'Taux de satisfaction utilisateur de 95%',
      'Zéro faille de sécurité détectée lors des audits',
    ],
    links: [
      { type: 'github', url: '#', label: 'Repository Frontend' },
      { type: 'github', url: '#', label: 'Repository Backend' },
      { type: 'demo', url: '#', label: 'Démo en ligne' },
    ],
  },
  '3': {
    title: 'Plateforme Honeypot de Cybersécurité',
    description: 'Système de détection d\'intrusions et analyse de cyberattaques',
    fullDescription: `Plateforme de cybersécurité avancée dédiée à la détection et l'analyse des cybermenaces en temps réel.

Le système déploie plusieurs honeypots stratégiquement positionnés pour attirer et capturer les tentatives d'exploitation. Chaque honeypot simule des services vulnérables (SSH, HTTP, FTP) pour analyser les méthodes d'attaque.

Un moteur d'analyse en temps réel traite les logs et détecte les patterns d'attaque, permettant une identification rapide des menaces. Le système intègre des algorithmes de machine learning pour améliorer la détection des attaques zero-day.

Le dashboard de visualisation offre une vue d'ensemble des menaces avec géolocalisation des attaquants, statistiques détaillées et alertes automatiques.`,
    image: '/images/HoneypotPlateform.jpg',
    tags: ['Cybersécurité', 'Python', 'Réseau'],
    date: '2024',
    duration: '3 mois',
    competences: [
      'Sécurité réseau',
      'Analyse de logs',
      'Machine Learning',
      'Python avancé',
      'Visualisation de données',
    ],
    outils: ['Python', 'Docker', 'ELK Stack', 'Scapy', 'Pandas', 'Matplotlib', 'Flask'],
    contexte: 'Projet de cybersécurité en partenariat avec une entreprise de sécurité informatique',
    objectifs: [
      'Déployer une infrastructure de honeypots sécurisée',
      'Développer un système de détection d\'intrusions',
      'Analyser et classifier les cyberattaques',
      'Créer un dashboard de visualisation en temps réel',
      'Générer des rapports de sécurité automatisés',
    ],
    resultats: [
      '500+ tentatives d\'attaque détectées en un mois',
      '12 nouvelles signatures d\'attaque identifiées',
      'Système de détection avec 98% de précision',
      'Dashboard temps réel avec latence < 2 secondes',
    ],
    links: [
      { type: 'github', url: '#', label: 'Code source' },
      { type: 'docs', url: '#', label: 'Rapport de sécurité' },
    ],
  },
  '4': {
    title: 'API REST Optimisée',
    description: 'API haute performance avec documentation OpenAPI',
    fullDescription: `Conception et développement d'une API RESTful haute performance, optimisée pour gérer des charges importantes avec des temps de réponse minimaux.

L'architecture implémente les meilleures pratiques REST avec une structure claire et cohérente. Le système de cache Redis réduit drastiquement la charge sur la base de données en mettant en cache les requêtes fréquentes.

Le rate limiting protège l'API contre les abus et les attaques DDoS, tandis que la pagination optimisée permet de gérer efficacement de grandes quantités de données.

La documentation OpenAPI complète facilite l'intégration pour les développeurs, avec des exemples de code et un playground interactif. Le monitoring avancé permet de suivre les performances en temps réel et d'identifier les goulots d'étranglement.`,
    image: '/images/APIREStOptimisé.png',
    tags: ['Backend', 'Performance', 'API'],
    date: '2024',
    duration: '2 mois',
    competences: [
      'Conception d\'API REST',
      'Optimisation de performances',
      'Mise en cache (Redis)',
      'Tests automatisés',
      'Documentation technique',
    ],
    outils: ['Node.js', 'Express', 'Redis', 'PostgreSQL', 'Swagger/OpenAPI', 'Jest', 'Artillery'],
    contexte: 'Refonte de l\'API existante pour améliorer les performances et la scalabilité',
    objectifs: [
      'Réduire le temps de réponse moyen de 70%',
      'Implémenter un système de cache efficace',
      'Mettre en place du rate limiting',
      'Créer une documentation complète',
      'Atteindre 90% de couverture de tests',
    ],
    resultats: [
      'Temps de réponse réduit de 50ms à 15ms en moyenne',
      'Capacité de gestion de 1000 req/s',
      'Taux de cache hit de 85%',
      'Documentation OpenAPI complète et interactive',
      '95% de couverture de tests',
    ],
    links: [
      { type: 'github', url: '#', label: 'Code source' },
      { type: 'docs', url: '#', label: 'Documentation API' },
    ],
  },
  '5': {
    title: 'Projet Agile en Équipe',
    description: 'Gestion de projet avec méthodologie Scrum',
    fullDescription: `Projet collaboratif géré selon la méthodologie Agile Scrum, démontrant l'application des principes du développement itératif et incrémental.

L'équipe de 6 personnes a travaillé en sprints de 2 semaines, avec une planification rigoureuse des user stories et une estimation en story points. Les daily stand-ups quotidiens ont permis une synchronisation efficace de l'équipe.

Le backlog produit a été géré via Jira avec une priorisation continue selon la valeur métier. Les rétrospectives en fin de sprint ont permis d'améliorer constamment les processus et la collaboration.

Les démonstrations sprint reviews ont impliqué les stakeholders pour obtenir des feedbacks réguliers et ajuster les priorités. L'utilisation de métriques Agile (vélocité, burndown charts) a permis un suivi précis de l'avancement.`,
    image: '/images/Agile.jpg',
    tags: ['Management', 'Agile', 'Scrum'],
    date: '2024',
    duration: '6 mois',
    competences: [
      'Méthodologie Scrum',
      'Gestion de backlog',
      'Animation de cérémonies',
      'Collaboration d\'équipe',
      'Communication stakeholders',
    ],
    outils: ['Jira', 'Confluence', 'Miro', 'Slack', 'Git', 'GitLab CI/CD'],
    contexte: 'Projet universitaire de développement logiciel en équipe multidisciplinaire',
    objectifs: [
      'Appliquer la méthodologie Scrum complète',
      'Développer un produit fonctionnel par itérations',
      'Maintenir une vélocité stable sur les sprints',
      'Impliquer les stakeholders régulièrement',
      'Améliorer continuellement les processus',
    ],
    resultats: [
      '12 sprints réalisés avec succès',
      'Vélocité moyenne de 45 story points par sprint',
      '95% des user stories complétées',
      'Satisfaction client: 4.8/5',
      'Zéro sprint raté ou annulé',
    ],
    links: [
      { type: 'docs', url: '#', label: 'Rapport de projet' },
      { type: 'demo', url: '#', label: 'Présentation finale' },
    ],
  },
  '6': {
    title: 'Architecture Monolithe Modulaire',
    description: 'Refonte vers un modèle monolithe modulaire',
    fullDescription: `Projet de refactoring architectural transformant une application monolithique classique en une architecture monolithe modulaire, combinant les avantages de la simplicité du monolithe avec la modularité des microservices.

L'application a été découpée en modules métier indépendants avec des interfaces claires et des dépendances explicites. Chaque module possède sa propre base de données logique et ses propres règles métier, communicant via des interfaces bien définies.

L'architecture hexagonale (ports & adapters) a été appliquée pour isoler la logique métier des détails techniques. Les modules communiquent via un bus d'événements interne, permettant un couplage faible.

Le résultat est une application plus maintenable, testable et évolutive, tout en conservant la simplicité de déploiement d'un monolithe.`,
    image: '/images/modular_monolith.png',
    tags: ['Architecture', 'Backend', 'Design'],
    date: '2024',
    duration: '4 mois',
    competences: [
      'Architecture logicielle',
      'Design Patterns',
      'Refactoring',
      'Domain-Driven Design',
      'Tests d\'intégration',
    ],
    outils: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'JUnit', 'ArchUnit', 'PlantUML'],
    contexte: 'Refonte technique d\'une application legacy pour améliorer la maintenabilité',
    objectifs: [
      'Découper le monolithe en modules cohérents',
      'Définir des interfaces claires entre modules',
      'Réduire le couplage et augmenter la cohésion',
      'Améliorer la testabilité du code',
      'Documenter l\'architecture avec ADRs',
    ],
    resultats: [
      'Code organisé en 8 modules métier indépendants',
      'Temps de compilation réduit de 40%',
      'Couverture de tests augmentée à 85%',
      'Délai moyen d\'ajout de features réduit de 30%',
      'Documentation architecture complète avec C4 model',
    ],
    links: [
      { type: 'github', url: '#', label: 'Code source' },
      { type: 'docs', url: '#', label: 'Architecture Decision Records' },
      { type: 'docs', url: '#', label: 'Diagrammes C4' },
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

              {/* Liens et Ressources */}
              {project.links && project.links.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-white mb-6">Liens et Ressources</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.links.map((link: any, index: number) => {
                      const Icon = link.type === 'github' ? Github : link.type === 'demo' ? Video : link.type === 'docs' ? FileText : ExternalLink;
                      return (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFA800]/50 transition-all hover:bg-white/10"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#FFA800] to-[#00FFE0] flex items-center justify-center flex-shrink-0">
                              <Icon className="w-6 h-6 text-black" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#FFA800] transition-colors">
                                {link.label}
                              </h3>
                              <p className="text-sm text-white/60">
                                {link.type === 'github' && 'Code source sur GitHub'}
                                {link.type === 'demo' && 'Voir la démonstration'}
                                {link.type === 'docs' && 'Documentation du projet'}
                                {link.type === 'external' && 'Lien externe'}
                              </p>
                            </div>
                            <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-[#00FFE0] transition-colors" />
                          </div>

                          {/* Glow effect */}
                          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FFA800]/10 to-[#00FFE0]/10 blur-xl" />
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </motion.div>
              )}
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
