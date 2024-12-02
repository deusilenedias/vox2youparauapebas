import Image from 'next/image'
import { ButtonFloatWttp } from './components/Buttons'
import {
  HeroCard,
  HeroCardH1,
  HeroCardH1Span,
  HeroCardP2,
  HeroCardText,
  HeroImgProperty,
  HeroProperty,
  HeroSection,
} from './components/Hero/HeroComponents'
import LogoVoBranca from '/public/logo-vox-branca.png'
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
import { LogoClouds } from './components/LogoClouds'

export default function Home() {
  return (
    <>
      <HeroSection>
        <HeroProperty>
          <HeroCard>
            <HeroImgProperty>
              <Image
                src={LogoVoBranca}
                width={500}
                height={500}
                className="h-auto w-64 sm:h-auto sm:w-72"
                alt="Logo Vox2You"
                loading="lazy"
              />
            </HeroImgProperty>
            <HeroCardText>
              <HeroCardH1>
                Você já perdeu oportunidades por não saber se comunicar bem?{' '}
                {''}
                <HeroCardH1Span>
                  Domine a arte de falar em público e transforme sua vida!
                </HeroCardH1Span>
              </HeroCardH1>
              <HeroCardP2>
                São mais de 80 técnicas e 120 dinâmicas para você falar em
                público sem nervosismo paralisante. Mas, com a orientação certa,
                esse medo pode ser transformado em confiança e eloquência.
              </HeroCardP2>
            </HeroCardText>
            <ButtonHome href="https://api.whatsapp.com/send?phone=5594981342011&text=Ol%C3%A1%20vim%20pelo%20site%20e%20quero%20mais%20informações%20sobre%20oratória">
              <ButtonHomeText>Quero mais informações</ButtonHomeText>
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
      <Benefits />
      <Gallery />
      <Vox />
      <LogoClouds />
      <ButtonFloatWttp />
    </>
  )
}
