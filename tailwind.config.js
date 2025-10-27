/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
    // chartre de couleurs 
      colors: {
        'dark-primary': '#0B0C10',
        'dark-secondary': '#1A1D24',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B0B3B8',
        'accent-gold': '#FFA800',
        'accent-cyan': '#00FFE0',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'], // Définit Manrope comme police par défaut
      },
      //définis les tailles de police perso 
      fontSize: {
        'hero': ['5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'nav': ['0.875rem', { lineHeight: '1', fontWeight: '500', letterSpacing: '0.05em' }],
        'subtext': ['0.75rem', { lineHeight: '1', fontWeight: '400', letterSpacing: '0.05em' }],
      },
      spacing: {
        // Vous pouvez définir votre échelle d'espacement ici
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '48px',
        '6': '64px',
      }
    },
  },
  plugins: [],
}