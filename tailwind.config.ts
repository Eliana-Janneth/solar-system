import type { Config } from "tailwindcss";
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scrollbar: ['rounded']
    },
  },
  plugins: [
    tailwindScrollbar,
  ]
} satisfies Config;
