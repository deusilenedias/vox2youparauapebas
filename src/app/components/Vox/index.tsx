'use client'

import { montserrat, playfair_display } from '@/app/fonts'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import './youtubelite.css'
import {
  ButtonHome,
  ButtonHomeFlex,
  ButtonHomeText,
} from '../Buttons/ButtonCta'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

export function Vox() {
  return (
    <>
      <section className="bg-brandGray800">
        <div className="mx-auto px-8 md:px-12 py-16 sm:max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-8">
            <div
              className={`${playfair_display.className} font-medium max-w-lg md:max-w-none`}
            >
              <div className="mt-2">
                <span className="inline-block h-1 w-40 rounded-full bg-brandYellow"></span>
                <span className="ml-1 inline-block h-1 w-3 rounded-full bg-brandYellow"></span>
                <span className="ml-1 inline-block h-1 w-1 rounded-full bg-brandYellow"></span>
              </div>
              <h1 className="text-6xl text-brandGray50 italic text-center sm:text-left sm:text-8xl">
                Dá um {''}
              </h1>
              <p className="text-6xl text-brandGray50 italic text-center sm:text-left sm:text-8xl py-4">
                <span className="max-w- ml-16 before:block before:absolute before:-inset-4 before:-skew-y-3 before:rounded-lg before:bg-brandCyan/60 relative inline-block">
                  <span className="-ml-6 relative text-6xl drop-shadow-lg shadow-black text-brandYellow italic text-left sm:text-8xl">
                    VOX{' '}
                  </span>
                </span>{' '}
                aí!
              </p>
              <p
                className={`${montserrat.className} text-center sm:text-left font-medium text-brandGray50 pt-4`}
              >
                Conheça várias histórias de superação e transformação após
                concluir um dos nossos programas de transformação da Vox2You.
              </p>
            </div>

            <div className="h-auto max-w-6xl w-full items-center object-cover">
              <LiteYouTubeEmbed
                webp={true}
                adNetwork={true}
                noCookie={true}
                id="xCEhLgPFANE"
                playlist={false}
                params="autoplay=1&rel=0"
                rel="preload"
                title="Alunos"
              />
            </div>

            <div className="h-auto max-w-6xl w-full items-center object-cover">
              <LiteYouTubeEmbed
                webp={true}
                adNetwork={true}
                noCookie={true}
                id="KRLijmvrWr8"
                playlist={false}
                params="autoplay=1&rel=0"
                rel="preload"
                title="Alunos"
              />
            </div>

            <div className="h-auto max-w-6xl w-full items-center object-cover">
              <LiteYouTubeEmbed
                webp={true}
                adNetwork={true}
                noCookie={true}
                id="Dyh2AqxRNHQ"
                playlist={false}
                params="autoplay=1&rel=0"
                rel="preload"
                title="Alunos"
              />
            </div>

            <div className="h-auto max-w-6xl w-full items-center object-cover">
              <LiteYouTubeEmbed
                webp={true}
                adNetwork={true}
                noCookie={true}
                id="GPHewPZpl6c"
                playlist={false}
                params="autoplay=1&rel=0"
                rel="preload"
                title="Alunos"
              />
            </div>

            <div className="h-auto max-w-6xl w-full items-center object-cover">
              <LiteYouTubeEmbed
                webp={true}
                adNetwork={true}
                noCookie={true}
                id="UKks7rfz3jA"
                playlist={false}
                params="autoplay=1&rel=0"
                rel="preload"
                title="Alunos"
              />
            </div>

            <div className="h-auto max-w-6xl w-full items-center object-cover">
              <LiteYouTubeEmbed
                webp={true}
                adNetwork={true}
                noCookie={true}
                id="jVXBiCuXhXE"
                playlist={false}
                params="autoplay=1&rel=0"
                rel="preload"
                title="Alunos"
              />
            </div>

            <div className="h-auto max-w-6xl w-full items-center object-cover">
              <LiteYouTubeEmbed
                webp={true}
                adNetwork={true}
                noCookie={true}
                id="f2yvzub6f2M"
                playlist={false}
                params="autoplay=1&rel=0"
                rel="preload"
                title="Alunos"
              />
            </div>
          </div>
          <div className="mx-auto max-w-fit pt-10 text-center sm:pt-12">
            <ButtonHome href="https://api.whatsapp.com/send?phone=5594981342011&text=Ol%C3%A1%20vim%20pelo%20site%20e%20quero%20mais%20informações%20sobre%20oratória">
              <ButtonHomeText>Quero mais informações</ButtonHomeText>
              <ButtonHomeFlex>
                <WhatsappLogo
                  className="h-5 w-5 sm:h-6 sm:w-6 fill-white drop-shadow-lg"
                  weight="fill"
                />
              </ButtonHomeFlex>
            </ButtonHome>
          </div>
        </div>
      </section>
    </>
  )
}
