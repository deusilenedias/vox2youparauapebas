import Image from 'next/image'
import imgOrador from '../../../../public/orador.png'
import { HeroCardP4, Span5 } from '../Hero/HeroComponents'
import {
  ButtonHome,
  ButtonHomeFlex,
  ButtonHomeText,
} from '../Buttons/ButtonCta'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
export function NowYourTime() {
  return (
    <>
      <section className="bg-brandGray50">
        <div className="mx-auto max-w-6xl px-4 pt-20 md:flex md:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-3xl md:max-w-none pb-4">
                <HeroCardP4>
                  <Span5>É a sua hora de falar</Span5>
                </HeroCardP4>
                <HeroCardP4>
                  <Span5>bem, ser autoridade e</Span5>
                </HeroCardP4>
                <HeroCardP4>
                  <Span5>influenciar pessoas!</Span5>
                </HeroCardP4>
              </div>
              <ButtonHome
                href={`https://wa.me/5594981342011?text=Olá+vim+pelo+site+e+gostaria+de+mais+informações`}
              >
                <ButtonHomeText>Quero me desenvolver</ButtonHomeText>
                <ButtonHomeFlex>
                  <WhatsappLogo
                    className="h-5 w-5 sm:h-6 sm:w-6 fill-white drop-shadow-lg"
                    weight="fill"
                  />
                </ButtonHomeFlex>
              </ButtonHome>
            </div>
            <div className="container max-w-3xl justify-end z-50">
              <div className="relative">
                <div className="flex">
                  <div className="flex-[0_0_100%] aspect-square w-full">
                    <Image
                      src={imgOrador}
                      alt="Imagem Orador"
                      width={500}
                      height={500}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
