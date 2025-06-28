/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#00F5FF', // Electric cyan - primary
        'primary-50': '#E0FFFE', // Very light cyan - cyan-50
        'primary-100': '#B3FFFD', // Light cyan - cyan-100
        'primary-200': '#80FFFC', // Medium light cyan - cyan-200
        'primary-300': '#4DFFFB', // Medium cyan - cyan-300
        'primary-400': '#1AFFFA', // Medium dark cyan - cyan-400
        'primary-500': '#00F5FF', // Electric cyan base - cyan-500
        'primary-600': '#00C4CC', // Dark cyan - cyan-600
        'primary-700': '#009399', // Darker cyan - cyan-700
        'primary-800': '#006266', // Very dark cyan - cyan-800
        'primary-900': '#003133', // Darkest cyan - cyan-900

        // Secondary Colors
        'secondary': '#FF006E', // Vibrant magenta - secondary
        'secondary-50': '#FFE0F0', // Very light magenta - pink-50
        'secondary-100': '#FFB3D9', // Light magenta - pink-100
        'secondary-200': '#FF80C2', // Medium light magenta - pink-200
        'secondary-300': '#FF4DAB', // Medium magenta - pink-300
        'secondary-400': '#FF1A94', // Medium dark magenta - pink-400
        'secondary-500': '#FF006E', // Vibrant magenta base - pink-500
        'secondary-600': '#CC0058', // Dark magenta - pink-600
        'secondary-700': '#990042', // Darker magenta - pink-700
        'secondary-800': '#66002C', // Very dark magenta - pink-800
        'secondary-900': '#330016', // Darkest magenta - pink-900

        // Accent Colors
        'accent': '#7C3AED', // Deep purple - accent
        'accent-50': '#F3F0FF', // Very light purple - violet-50
        'accent-100': '#E0D7FF', // Light purple - violet-100
        'accent-200': '#CCBEFF', // Medium light purple - violet-200
        'accent-300': '#B8A5FF', // Medium purple - violet-300
        'accent-400': '#A48CFF', // Medium dark purple - violet-400
        'accent-500': '#7C3AED', // Deep purple base - violet-500
        'accent-600': '#632EBE', // Dark purple - violet-600
        'accent-700': '#4A228F', // Darker purple - violet-700
        'accent-800': '#311660', // Very dark purple - violet-800
        'accent-900': '#180A30', // Darkest purple - violet-900

        // Background Colors
        'background': '#0A0A0F', // Near-black with blue undertone - slate-900
        'background-50': '#F8F9FA', // Very light background - slate-50
        'background-100': '#E2E8F0', // Light background - slate-100
        'background-200': '#CBD5E1', // Medium light background - slate-200
        'background-300': '#94A3B8', // Medium background - slate-300
        'background-400': '#64748B', // Medium dark background - slate-400
        'background-500': '#475569', // Dark background - slate-500
        'background-600': '#334155', // Darker background - slate-600
        'background-700': '#1E293B', // Very dark background - slate-700
        'background-800': '#0F172A', // Near-black background - slate-800
        'background-900': '#0A0A0F', // Near-black with blue undertone - slate-900

        // Surface Colors
        'surface': '#1A1A2E', // Dark blue-gray - slate-800
        'surface-50': '#F1F5F9', // Very light surface - slate-50
        'surface-100': '#E2E8F0', // Light surface - slate-100
        'surface-200': '#CBD5E1', // Medium light surface - slate-200
        'surface-300': '#94A3B8', // Medium surface - slate-300
        'surface-400': '#64748B', // Medium dark surface - slate-400
        'surface-500': '#475569', // Dark surface - slate-500
        'surface-600': '#334155', // Darker surface - slate-600
        'surface-700': '#1E293B', // Very dark surface - slate-700
        'surface-800': '#1A1A2E', // Dark blue-gray base - slate-800
        'surface-900': '#0F172A', // Darkest surface - slate-900

        // Text Colors
        'text-primary': '#FFFFFF', // Pure white - white
        'text-secondary': '#A0A0B8', // Muted blue-gray - slate-400
        'text-tertiary': '#64748B', // Light muted text - slate-500
        'text-quaternary': '#475569', // Very light muted text - slate-600

        // Status Colors
        'success': '#00FF88', // Bright green - emerald-400
        'success-50': '#ECFDF5', // Very light green - emerald-50
        'success-100': '#D1FAE5', // Light green - emerald-100
        'success-200': '#A7F3D0', // Medium light green - emerald-200
        'success-300': '#6EE7B7', // Medium green - emerald-300
        'success-400': '#00FF88', // Bright green base - emerald-400
        'success-500': '#10B981', // Standard green - emerald-500
        'success-600': '#059669', // Dark green - emerald-600
        'success-700': '#047857', // Darker green - emerald-700
        'success-800': '#065F46', // Very dark green - emerald-800
        'success-900': '#064E3B', // Darkest green - emerald-900

        'warning': '#FFB800', // Amber - amber-500
        'warning-50': '#FFFBEB', // Very light amber - amber-50
        'warning-100': '#FEF3C7', // Light amber - amber-100
        'warning-200': '#FDE68A', // Medium light amber - amber-200
        'warning-300': '#FCD34D', // Medium amber - amber-300
        'warning-400': '#FBBF24', // Medium dark amber - amber-400
        'warning-500': '#FFB800', // Amber base - amber-500
        'warning-600': '#D97706', // Dark amber - amber-600
        'warning-700': '#B45309', // Darker amber - amber-700
        'warning-800': '#92400E', // Very dark amber - amber-800
        'warning-900': '#78350F', // Darkest amber - amber-900

        'error': '#FF3366', // Coral red - red-500
        'error-50': '#FEF2F2', // Very light red - red-50
        'error-100': '#FEE2E2', // Light red - red-100
        'error-200': '#FECACA', // Medium light red - red-200
        'error-300': '#FCA5A5', // Medium red - red-300
        'error-400': '#F87171', // Medium dark red - red-400
        'error-500': '#FF3366', // Coral red base - red-500
        'error-600': '#DC2626', // Dark red - red-600
        'error-700': '#B91C1C', // Darker red - red-700
        'error-800': '#991B1B', // Very dark red - red-800
        'error-900': '#7F1D1D', // Darkest red - red-900
      },
      fontFamily: {
        'heading': ['Orbitron', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'caption': ['Rajdhani', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 245, 255, 0.3)',
        'neon-secondary': '0 0 20px rgba(255, 0, 110, 0.3)',
        'neon-accent': '0 0 20px rgba(124, 58, 237, 0.3)',
        'neon-lg': '0 0 40px rgba(0, 245, 255, 0.4)',
        'neon-xl': '0 0 60px rgba(0, 245, 255, 0.5)',
      },
      animation: {
        'glitch': 'glitch 100ms ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '150': '150ms',
        '300': '300ms',
        '500': '500ms',
      },
      zIndex: {
        '1000': '1000',
        '1050': '1050',
        '1100': '1100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}