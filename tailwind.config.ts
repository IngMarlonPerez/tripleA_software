import type { Config } from "tailwindcss";

// Configuración Tailwind con paleta oficial TripleSoftware
// Equipo 02 — Sistema Visual
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fondos
        white:     '#FFFFFF',
        slate50:   '#F8FAFC',
        midnight:  '#0D1117',
        // Texto
        charcoal:  '#0F172A',
        // Acento principal
        indigo: {
          50:  '#EEF2FF',
          600: '#4F46E5',
          700: '#4338CA',
        },
        // Acento secundario
        cyan: {
          500: '#06B6D4',
        },
        // Semánticos
        green: {
          600: '#16A34A',
        },
        red: {
          600: '#DC2626',
        },
      },
      fontFamily: {
        sora:  ['Sora', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
        inter: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
        mono:  ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      animation: {
        'fade-in':     'fadeIn 0.6s ease-out forwards',
        'slide-up':    'slideUp 0.6s ease-out forwards',
        'slide-in':    'slideIn 0.4s ease-out forwards',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow':  'pulse 3s infinite',
        'typing':      'typing 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%':   { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        typing: {
          '0%, 100%': { opacity: '0.2' },
          '50%':      { opacity: '1' },
        },
      },
      boxShadow: {
        'card':    '0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.06)',
        'card-lg': '0 10px 40px -4px rgba(0,0,0,0.10), 0 4px 16px -4px rgba(0,0,0,0.06)',
        'indigo':  '0 4px 24px rgba(79,70,229,0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
