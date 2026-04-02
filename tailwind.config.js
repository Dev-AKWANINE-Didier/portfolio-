import defaultTheme from 'tailwindcss/defaultTheme';
module.exports = {
  darkMode : 'class',
  content: [
    'templates/**/*.html',   // Inclut tous les templates Django
    './**/*.py',               // Inclut vos fichiers Python (vues, models, etc.)
    'scr/**/*.{js,ts,jsx,tsx}', // Inclut vos sources frontend
  ],
  theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                Jost: ['Jost','sans-serif'],
            },
        },
    },
  plugins: [],
}
