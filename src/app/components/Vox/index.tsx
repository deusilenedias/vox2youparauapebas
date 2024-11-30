'use client'

import { playfair_display } from '@/app/fonts'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import './youtubelite.css'

export function Vox() {
  return (
    <>
      <section className="bg-brandGray50">
        <div className="mx-auto px-12 py-16 sm:max-w-6xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h1
                  className={`${playfair_display.className} text-3xl text-brandGray800 italic text-left sm:text-4xl`}
                >
                  Dá um {''}
                </h1>
                <p
                  className={`${playfair_display.className} font-extrabold text-brandYellow`}
                >
                  VOX aí!
                </p>
              </div>
            </div>

            <div className="h-auto max-w-6xl w-full items-center object-cover p-4 sm:px-0">
              <LiteYouTubeEmbed
                noCookie={true}
                id="Dyh2AqxRNHQ"
                playlist={false}
                params="autoplay=1&rel=0"
                rel="preload"
                title="Carol Lemos"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
