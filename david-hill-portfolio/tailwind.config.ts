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
        sectionV: "4rem",
        sectionH: "1rem",
        sectionHSm: "1.5rem",
        sectionHXl: "5rem",
      }
    },
  },
  plugins: [],
}
export default config
