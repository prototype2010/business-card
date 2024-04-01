import type { Config } from "tailwindcss";

const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      pacifico: "Pacifico",
      aldrich: "Aldrich",
      armata: "Armata",
      rubik: "Rubik Scribble"
    },
    screens: {
      'xxs': '280px',
      'xs': '360px',
      '412': '412px',
      '414': '414px',
      '430': '430px',
      '2xs': '540px',
      'sm': '640px',
      'md': '768px',
      '912': '912px',
      'lg': '1024px',
      '1261': '1261px',
      'xl': '1280px',
      '2xl': '1536px',
      'xxl': '1342px'
    },
    extend: {

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'mainColor': '#1FA184',
        'secondColor': '#313C42',
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }: any) {
      addVariant('hoverAndFocus', ['&:hover', '&:focus'])
    })
  ],
};
export default config;
