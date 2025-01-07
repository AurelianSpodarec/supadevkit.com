import { Orbitron, Montserrat, Poppins } from 'next/font/google'

export const poppins = Poppins({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
})

export const orbitron = Orbitron({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron'
})
