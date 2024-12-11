import type { Metadata } from 'next'
import { montserrat } from '@/app/fonts'

import './globals.css'

export const metadata: Metadata = {
  title: 'Vox2You Parauapebas/PA - O Melhor Curso de Oratória para Você',
  description: 'Vox2You | Escola de Oratória',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${montserrat.className} antialiased bg-brandGray50`}
      >
        <main>{children}</main>
      </body>
    </html>
  )
}
