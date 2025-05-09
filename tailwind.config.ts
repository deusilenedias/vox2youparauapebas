import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brandYellow: '#eda420',
        brandCreme: '#90794d',
        brandCyan: '#05aaa8',
        brandPurple: '#6a3e78',
        brandGreen400: '#61ce70',
        brandGray50: '#f0f0f0',
        brandGray100: '#7a7a7a',
        brandGray800: '#181818',
      },
      backgroundImage: {
        bgDesktop: "url('/vox-desktop.webp')",
        bgMobile: "url('/vox-mobile.webp')",
        bgDesktopGoogle: "url('/reviewsgoogle.webp')",
        bgMobileGoogle: "url('/reviewsgoogle.webp')",
      },
    },
  },
  plugins: [require('daisyui'), require('tailwindcss-directional-shadows')],
} satisfies Config
