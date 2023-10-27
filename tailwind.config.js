/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors:{
        "primary":'#6fe94c',
        "text":'#181a1b',
      },
      borderRadius:{
        '4xl':'54px',
        card:'35px'
      },
      dropShadow:{
        handshadow: '0px 10px 200px rgba(255,255,255,.4)'
      },
      fontSize:{
        '52':'52px'
      },
    },
  },
  plugins: [],
}

