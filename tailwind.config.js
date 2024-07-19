/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'img_bg_hero': "url('/image/hero/bg.webp')",
      'img_bg_hero_full': "url('/image/hero/bg-full.webp')",
      'img_bg_hero_mobile': "url('/image/hero/bg-mobile.webp')",
      'img_bg_reputacao': "url('/image/reputacao/bg.webp')",
      'img_bg_historia': "url('/image/historia/bg.webp')",
    },

    extend: {
      backgroundPosition: {
        'custom-center': 'center 20%',
      },
      screens: {
        'sdscreen': '450px',
      },
    },
  },
  plugins: [],
}

