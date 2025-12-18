import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          {/* Abstract geometric logo */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:scale-110 transition-transform"
          >
            {/* Background circle subtle */}
            <circle cx="20" cy="20" r="18" fill="url(#grad1)" opacity="0.1" />

            {/* Abstract N shape - geometric and modern */}
            <path
              d="M12 28 L12 12 L16 12 L16 20 L24 12 L28 12 L28 28 L24 28 L24 20 L16 28 Z"
              fill="url(#grad2)"
            />

            {/* Accent geometric shapes */}
            <circle cx="14" cy="14" r="2" fill="#FFA800" opacity="0.6" />
            <circle cx="26" cy="26" r="2" fill="#00FFE0" opacity="0.6" />

            {/* Gradient definitions */}
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FFA800', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#00FFE0', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FFA800', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#FF8C00', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#00FFE0', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-xl font-bold bg-gradient-to-r from-[#FFA800] to-[#00FFE0] bg-clip-text text-transparent">
            NathFolio
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/about"
            className="text-sm text-white/70 hover:text-[#00FFE0] transition-colors"
          >
            Qui suis-je ?
          </Link>
          <Link
            to="/mini-game"
            className="text-sm text-white/70 hover:text-[#00FFE0] transition-colors"
          >
            Mini-Game
          </Link>
          <Link
            to="/contact"
            className="text-sm text-white/70 hover:text-[#00FFE0] transition-colors"
          >
            Contactez-moi
          </Link>
          <a
            href="/CV_2025-05-20_Nathan_CarqueijeiroBUT3RA.pdf"
            download
            className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-[#FFA800] to-[#00FFE0] text-black font-medium hover:opacity-90 transition-opacity"
          >
            Télécharger mon CV
          </a>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <nav className="max-w-7xl mx-auto px-6 border-t border-white/5">
        <div className="flex items-center gap-1 overflow-x-auto">
          {[
            { path: '/', label: 'Accueil' },
            { path: '/formation', label: 'Ma formation' },
            { path: '/projects', label: 'Mes projets' },
            { path: '/competences', label: 'Mes compétences' },
            { path: '/atouts', label: 'Mes atouts' },
            { path: '/loisirs', label: 'Mes loisirs' },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative px-4 py-3 text-sm text-white/70 hover:text-white transition-colors whitespace-nowrap"
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FFA800] to-[#00FFE0]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
