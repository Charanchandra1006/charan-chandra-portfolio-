import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#030712',
          secondary: '#0a0a0f',
          tertiary: '#111118',
        },
        accent: {
          DEFAULT: '#06b6d4',
          light: '#22d3ee',
          dark: '#0891b2',
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.03)',
          light: 'rgba(255, 255, 255, 0.06)',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        surface: {
          DEFAULT: '#0f1117',
          elevated: '#161820',
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
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'grid-fade': 'grid-fade 4s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(6, 182, 212, 0.4)' },
          '50%': { boxShadow: '0 0 30px 10px rgba(6, 182, 212, 0)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'grid-fade': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
