/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#111111', // primary background
          800: '#191919', // secondary background
          700: '#222222', // elevated surfaces
          600: '#292929', // card backgrounds
          500: '#3A3A3A', // borders
        },
        fg: '#F2F2F2', // primary text
        sub: '#A1A1A1', // secondary text
        mute: '#777777', // muted text
        silver: '#D4D4D4', // accent
        hi: '#FFFFFF', // highlight
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gridDrift: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '64px 64px' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '20%': { transform: 'translate(-3%, 2%)' },
          '40%': { transform: 'translate(2%, -3%)' },
          '60%': { transform: 'translate(-2%, -1%)' },
          '80%': { transform: 'translate(3%, 3%)' },
        },
        ping2: {
          '0%': { transform: 'scale(1)', opacity: '0.7' },
          '100%': { transform: 'scale(2.6)', opacity: '0' },
        },
        scrollCue: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'grid-drift': 'gridDrift 14s linear infinite',
        grain: 'grain 1.2s steps(6) infinite',
        ping2: 'ping2 2s cubic-bezier(0,0,0.2,1) infinite',
        'scroll-cue': 'scrollCue 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
