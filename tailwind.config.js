
module.exports = {
  darkMode: 'class',
  content: [
    'scr/**/*.{js,ts,jsx,tsx}', // Inclut vos sources frontend
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary--)',
        secondary: 'var(--color-secondary--)', // Corrigé : 2 tirets
        tertiary: 'var(--color-tertiary--)'
      },
    },
  },
  plugins: [],
}
