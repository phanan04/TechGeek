import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Nike Brand Colors
        'nike-black': '#000000',
        'nike-white': '#FFFFFF',
        'nike-gray': {
          50: '#F9F9F9',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#707072',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        'nike-orange': '#FF6900',
        'nike-red': '#E71F32',
        
        // Keep existing
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      
      // Nike-specific spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      
      // Nike typography
      fontFamily: {
        'nike': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'sans': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config