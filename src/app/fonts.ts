import { Montserrat, Playfair_Display } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
  preload: true,
})

export const playfair_display = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  preload: true,
})
