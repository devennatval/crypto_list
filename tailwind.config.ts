import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        primary: "hsl(var(--primary-color))",
        secondary: "hsl(var(--secondary-color))",
        tertiary: "hsl(var(--tertiary-color))",
        "dark-hover": "hsl(var(--dark-hover))",
        "red-dark": "hsl(var(--red-dark))",
        "green-dark": "hsl(var(--green-dark))",
      },
      fontFamily: {
        'neue-haas': ['"Neue Haas Grotesk Display Pro"', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      gridTemplateColumns: {
       'token-list': '24% 16% 16% 1fr 1fr 1fr 1fr', 
       'token-list-compact': '60% 40%'
      }
      
    },
  },
  plugins: [],
} satisfies Config;
