import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Contactez-
            <span className="bg-gradient-to-r from-[#FFA800] to-[#00FFE0] bg-clip-text text-transparent">
              moi
            </span>
          </h1>
          <p className="text-xl text-white/60 mb-16">
            N'hésitez pas à me contacter pour toute opportunité ou question
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white mb-8">
                Informations de contact
              </h2>

              {[
                { icon: Mail, label: 'Email', value: 'nathancarqueijeiroetd@gmail.com', href: 'mailto:nathancarqueijeiroetd@gmail.com' },
                { icon: MapPin, label: 'Localisation', value: 'Annecy, France', href: null },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href || '#'}
                  className={`flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors ${!item.href && 'pointer-events-none'}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#FFA800] to-[#00FFE0] flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-black" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-white/40 mb-1">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </motion.a>
              ))}

              <div className="pt-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Réseaux sociaux
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/nathan-carqueijeiro-542b1b234/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="text-white" size={20} />
                  </a>
                  <a
                    href="https://github.com/EnterNAthan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center transition-colors"
                  >
                    <Github className="text-white" size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#00FFE0] transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#00FFE0] transition-colors"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#00FFE0] transition-colors resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-[#FFA800] to-[#00FFE0] text-black font-semibold hover:opacity-90 transition-opacity"
                >
                  Envoyer le message
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
