import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import CursorGlassEffect from './CursorGlassEffect';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Cursor Glass Effect - Global */}
      <CursorGlassEffect />
      {/* Top Navigation - Fixed */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FFA800] to-[#00FFE0]" />
            <span className="text-xl font-bold text-white">Portfolio</span>
          </Link>

          <div className="flex items-center gap-8">
            <Link
              to="/about"
              className="text-sm text-white/70 hover:text-[#00FFE0] transition-colors"
            >
              Qui suis-je ?
            </Link>
            <Link
              to="/contact"
              className="text-sm text-white/70 hover:text-[#00FFE0] transition-colors"
            >
              Contactez-moi
            </Link>
            <a
              href="/cv.pdf"
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

      {/* Main Content with top padding to account for fixed header */}
      <main className="pt-32">
        <Outlet />
      </main>
    </div>
  );
}
