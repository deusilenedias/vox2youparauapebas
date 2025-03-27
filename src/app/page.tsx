import Image from 'next/image'
import { ButtonFloatWttp } from './components/Buttons'
import {
  HeroCard,
  HeroCardH1,
  HeroCardP3,
  HeroCardText,
  HeroImgProperty,
  HeroProperty,
  HeroSection,
  Span1,
} from './components/Hero/HeroComponents'
import Logo10anos from '/public/vox2you10anos.webp'
import {
  ButtonHome,
  ButtonHomeFlex,
  ButtonHomeText,
} from './components/Buttons/ButtonCta'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { Gallery } from './components/Gallery'
import { Stats } from './components/Stats'
import { Benefits } from './components/Benefits'
import { Vox } from './components/Vox'
import { Autority } from './components/Autority'
import { TeamVox } from './components/TeamVox'
import { GoogleReviews } from './components/GoogleReviews'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Professions } from './components/Professions'
import { NowYourTime } from './components/NowYourTime'
import { YouAble } from './components/YouAble'

export default function Home() {
  return (
    <>
      <HeroSection>
        <HeroProperty>
          <HeroCard>
            <HeroImgProperty>
              <Image
                src={Logo10anos}
                width={500}
                height={500}
                className="h-auto w-64 sm:h-auto sm:w-72"
                alt="Logo Vox2You"
                loading="lazy"
              />
            </HeroImgProperty>
            <HeroCardText>
              <HeroCardH1>
                Desenvolva a habilidade que nenhuma faculdade ensina e que o
                mercado implora por ela:
                <Span1> a arte da comunicação poderosa!</Span1>
              </HeroCardH1>
              <HeroCardP3>
                <span className="bg-brandYellow">
                  90 horas intensas, 80 técnicas avançadas e 120 dinâmicas
                  transformadoras: bem-vindo à academia suprema da oratória e
                  reinvente sua forma de comunicar.
                </span>
              </HeroCardP3>
            </HeroCardText>
            <ButtonHome
              href={`https://wa.me/5594984481297?text=Olá+vim+pelo+site+e+gostaria+de+mais+informações`}
            >
              <ButtonHomeText>Quero saber mais</ButtonHomeText>
              <ButtonHomeFlex>
                <WhatsappLogo
                  className="h-5 w-5 sm:h-6 sm:w-6 fill-white drop-shadow-lg"
                  weight="fill"
                />
              </ButtonHomeFlex>
            </ButtonHome>
          </HeroCard>
        </HeroProperty>
        <Stats />
      </HeroSection>
      <Professions />
      <NowYourTime />
      <Benefits />
      <YouAble />
      <Autority />
      <Gallery />
      <Vox />
      {/* <LogoClouds /> */}
      <TeamVox />
      <GoogleReviews />
      <Faq />
      <Footer />
      <ButtonFloatWttp />
    </>
  )
}
