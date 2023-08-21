/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#99A866',
      default: '#49454F',
      thin: '#888888',
      white: '#FFFFFF',
      card: '#F5F5F5',
      url: '#6192BB',
      gray: '#E5E7EB',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // フォントを追加
      fontFamily: {
        dela: ['Dela Gothic One'],
        italic: ['Noto Serif Display'],
        dot: ['DotGothic16'],
        mincho: ['Noto Serif JP'],
        zenkaku: ['Zen Kaku Gothic New'],
        hikki: ['Zen Antique Soft'],
        penji: ['Zen Kurenaido'],
      },
    },
  },
  plugins: [],
};
