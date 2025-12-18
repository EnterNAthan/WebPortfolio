import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-[#FFA800] to-[#00FFE0] bg-clip-text text-transparent mb-4">
              Nathan Carqueijeiro
            </h3>
            <p className="text-white/60 text-sm">
              Étudiant en BUT 3 Informatique, passionné par le développement web, la cybersécurité et l'innovation technologique.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Navigation</h3>
            <div className="space-y-2">
              {[
                { path: '/', label: 'Accueil' },
                { path: '/formation', label: 'Ma formation' },
                { path: '/projects', label: 'Mes projets' },
                { path: '/competences', label: 'Mes compétences' },
                { path: '/contact', label: 'Contact' },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-white/60 hover:text-[#00FFE0] transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Me contacter</h3>
            <div className="space-y-3">
              <a
                href="mailto:nathancarqueijeiroetd@gmail.com"
                className="flex items-center gap-2 text-white/60 hover:text-[#00FFE0] transition-colors text-sm"
              >
                <Mail size={16} />
                nathancarqueijeiroetd@gmail.com
              </a>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/EnterNAthan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00FFE0]/50 flex items-center justify-center transition-all"
                >
                  <Github className="text-white" size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nathan-carqueijeiro-542b1b234/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00FFE0]/50 flex items-center justify-center transition-all"
                >
                  <Linkedin className="text-white" size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Nathan Carqueijeiro. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="/CV_2025-05-20_Nathan_CarqueijeiroBUT3RA.pdf" download className="hover:text-[#00FFE0] transition-colors">
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
