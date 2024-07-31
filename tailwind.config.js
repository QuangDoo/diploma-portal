/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'active-link': '#F0FE52',
        border: '#F3F3F3',
      },
      fontSize: {
        xxs: '0.625rem', //10px
        xs: '0.75rem', //12px
        sm: '0.875rem', //14px
        base: '1rem', // 16px
        lg: '1.125rem', //18px
        xl: '1.25rem', //20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', //30px
        '4xl': '2.25rem', //36px
        '5xl': '3rem', //48px
        '6xl': '3.75rem', //60px
        '7xl': '4.5rem', //72px
        '8xl': '6rem', //96px
        '9xl': '8rem', //128px
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(89.37deg, #11277C -10.54%, #0000C5 99.92%)',
      },
    },
  },
  plugins: [],
};
