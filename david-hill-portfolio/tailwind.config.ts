import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#1c1c1c",
      secondary: "#f8f8ff",
      tertiary: "#ff7900",
      fourth: "#7e8081",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      padding: {
        sectionV: "1rem",
        sectionVSm: "2rem",
        sectionVXl: "3rem",
        sectionH: "1rem",
        sectionHSm: "1.5rem",
        sectionHXl: "5rem",
      },
      gridTemplateColumns: {
        "aboutLg": "15% 70% 15%",
        "aboutMb": "100%",
      },
      gridTemplateRows:{
        aboutLg: "100%",
        aboutMb: "auto auto"
      },
      boxShadow: {
        card: "box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);",
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(deg) translateY(0)', color: '#f8f8ff' },
          '25%': { transform: 'rotate(5deg) translateY(-10px)' },
          '50%': { transform: 'translateY(-0px)' },
          '75%': { transform: 'rotate(-5deg) translateY(-10px)' },
          '100%': { transform: 'rotate(0deg) translateY(0)', color: '#f8f8ff' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
export default config
