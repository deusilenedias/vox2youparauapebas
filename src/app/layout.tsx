import type { Metadata } from 'next'
import { montserrat } from '@/app/fonts'
import Script from 'next/script'

import './globals.css'

const GTM_ID = 'GTM-NV68CDXH'

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
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <body
        suppressHydrationWarning={true}
        className={`${montserrat.className} antialiased bg-brandGray50`}
      >
        <main>
          {children}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
            }}
          />
        </main>
      </body>
    </html>
  )
}
