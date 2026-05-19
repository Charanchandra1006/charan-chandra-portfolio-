import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#000000',
          secondary: '#09090b',
          tertiary: '#18181b',
        },
        accent: {
          DEFAULT: '#ffffff',
          light: '#f4f4f5',
          dark: '#d4d4d8',
        },
        surface: {
          DEFAULT: '#09090b',
          elevated: '#18181b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 1.2vw, 0.875rem)',
        'fluid-sm': 'clamp(0.8125rem, 1.4vw, 0.9375rem)',
        'fluid-base': 'clamp(0.875rem, 1.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1rem, 1.8vw, 1.25rem)',
        'fluid-xl': 'clamp(1.125rem, 2vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 3vw, 2.25rem)',
        'fluid-3xl': 'clamp(1.875rem, 3.5vw, 3rem)',
        'fluid-4xl': 'clamp(2.25rem, 4.5vw, 3.75rem)',
        'fluid-5xl': 'clamp(2.5rem, 5vw, 4.5rem)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};

export default config;
