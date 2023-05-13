import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.slate[500],
        active: colors.slate[800],
        success: colors.green[400],
        error: colors.red[400],
      },
      backgroundColor: {
        primary: colors.blue[500],
        secondary: colors.blue[300],
      },
      borderRadius: {
        primary: '2rem',
      },
    },
  },
  plugins: [],
};
