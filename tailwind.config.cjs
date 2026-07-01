/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#09090B',
        surface: '#141417',
        foreground: '#FFFFFF',
        muted: '#A1A1AA',
        border: '#27272A',
        brand: {
          blue: '#00B8FF',
          purple: '#8A2EFF',
        },
        cta: {
          DEFAULT: '#25D366',
          hover: '#1EBE5A',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        subheading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #00B8FF 0%, #8A2EFF 100%)',
        'brand-gradient-radial': 'radial-gradient(circle at 50% 0%, rgba(0,184,255,0.18), transparent 60%)',
      },
      boxShadow: {
        'glow-blue': '0 0 32px 0 rgba(0, 184, 255, 0.30)',
        'glow-purple': '0 0 32px 0 rgba(138, 46, 255, 0.30)',
        'glow-cta': '0 0 24px 0 rgba(37, 211, 102, 0.35)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      animation: {
        'pulse-cta': 'pulse-cta 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-cta': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(37,211,102,0.45)' },
          '50%': { transform: 'scale(1.06)', boxShadow: '0 0 0 12px rgba(37,211,102,0)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
