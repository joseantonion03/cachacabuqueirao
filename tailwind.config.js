/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'img_bg_hero': "url('/image/hero/bg.png')",
      'img_bg_hero_full': "url('/image/hero/bg-full.png')",
      'img_bg_hero_mobile': "url('/image/hero/bg-mobile.png')",
      'img_bg_reputacao': "url('/image/reputacao/bg.png')",
      'img_bg_historia': "url('/image/historia/bg.png')",
      'img_bg_historia_line2': "url('/image/historia/line-2.png')",
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

