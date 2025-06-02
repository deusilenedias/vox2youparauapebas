import { montserrat } from '@/app/fonts'
import { HandPeace, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import {
  ButtonHome,
  ButtonHomeFlex,
  ButtonHomeText,
} from '../Buttons/ButtonCta'
export function YouAble() {
  return (
    <>
      <section className="bg-brandGray50">
        <div className="mx-auto max-w-6xl px-4 py-20 md:flex md:px-8">
          <div className="max-w-6xl mx-auto text-center md:max-w-none">
            <h2
              className={`${montserrat.className} antialiased uppercase text-2xl font-semibold text-brandGray800 text-center sm:text-3xl`}
            >
              mas calma lá, o Programa não é para qualquer um...
            </h2>
            <p
              className={`${montserrat.className} font-medium text-brandGray800`}
            >
              Um programa tão intenso e desafiador não consegue ser trilhado por
              todas as pessoas. Ele separa os fortes dos fracos e é reservado
              apenas para aqueles destemidos que:
            </p>
            <div className="flex gap-2 items-center justify-center pt-6">
              <HandPeace weight="fill" className="text-brandYellow w-5 h-5" />
              <p
                className={`${montserrat.className} font-medium text-brandGray800`}
              >
                São apaixonados pela vivência de novos desafios;
              </p>
            </div>

            <div className="flex gap-2 items-center justify-center pt-2">
              <HandPeace weight="fill" className="text-brandYellow w-5 h-5" />
              <p
                className={`${montserrat.className} font-medium text-brandGray800`}
              >
                Anseiam pelo ápice do crescimento profissional e a conquista
                incansável de metas grandiosas;
              </p>
            </div>

            <div className="flex gap-2 items-center justify-center pt-2">
              <HandPeace weight="fill" className="text-brandYellow w-5 h-5" />
              <p
                className={`${montserrat.className} font-medium text-brandGray800`}
              >
                Buscam aprimorar conexões humanas, elevando o patamar das
                relações interpessoais;
              </p>
            </div>

            <div className="flex gap-2 items-center justify-center pt-2">
              <HandPeace weight="fill" className="text-brandYellow w-5 h-5" />
              <p
                className={`${montserrat.className} font-medium text-brandGray800`}
              >
                Dedicam-se verdadeiramente à jornada de autodesenvolvimento;
              </p>
            </div>

            <div className="flex gap-2 items-center justify-center pt-2">
              <HandPeace weight="fill" className="text-brandYellow w-5 h-5" />
              <p
                className={`${montserrat.className} font-medium text-brandGray800`}
              >
                Querem ser protagonistas de suas histórias.
              </p>
            </div>
            <div className="mx-auto max-w-fit pt-10 text-center sm:pt-12">
              <ButtonHome
                href={`https://wa.me/5594981342011?text=Olá+vim+pelo+site+e+gostaria+de+mais+informações`}
              >
                <ButtonHomeText>Sou o oposto dessa pessoa</ButtonHomeText>
                <ButtonHomeFlex>
                  <WhatsappLogo
                    className="h-5 w-5 sm:h-6 sm:w-6 fill-white drop-shadow-lg"
                    weight="fill"
                  />
                </ButtonHomeFlex>
              </ButtonHome>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
