import Image from 'next/image'
import { montserrat } from '@/app/fonts'
import img6 from '../../../../public/blabla.png'
import { X } from '@phosphor-icons/react/dist/ssr'
import { Span4 } from '../Hero/HeroComponents'
export function Universty() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-20 md:flex md:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div className="space-y-8 container max-w-3xl mx-auto">
            <div className="relative text-center">
              <div className="flex">
                <div className="flex-[0_0_100%] aspect-video w-full overflow-hidden">
                  <Image
                    src={img6}
                    alt="sample"
                    className="w-full h-full object-contain"
                    sizes="100vw"
                    loading="lazy"
                  />
                </div>
              </div>
              <Span4>Não, não é meme.</Span4>
            </div>
          </div>
          <div>
            <div className="max-w-3xl md:max-w-none">
              <div className="mb-2">
                <span className="inline-block h-1 w-40 rounded-full bg-brandGray50"></span>
                <span className="ml-1 inline-block h-1 w-3 rounded-full bg-brandGray50"></span>
                <span className="ml-1 inline-block h-1 w-1 rounded-full bg-brandGray50"></span>
              </div>
              <h2
                className={`${montserrat.className} antialiased uppercase text-2xl font-semibold text-brandGray50 text-center sm:text-right sm:text-3xl`}
              >
                A faculdade pode te ensinar muitas coisas, menos usar a
                comunicação ao seu favor no mercado de trabalho e na vida,
                afinal você:
              </h2>
              <div className="flex gap-2 items-center justify-center sm:justify-end pt-2">
                <X weight="bold" className="text-red-600 w-5 h-5" />
                <p
                  className={`${montserrat.className} font-medium text-brandGray50`}
                >
                  Tem medo de falar em público;
                </p>
              </div>

              <div className="flex gap-2 items-center justify-center sm:justify-end pt-2">
                <X weight="bold" className="text-red-600 w-5 h-5" />
                <p
                  className={`${montserrat.className} font-medium text-brandGray50`}
                >
                  Nunca tem argumentos convincentes;
                </p>
              </div>

              <div className="flex gap-2 items-center justify-center sm:justify-end pt-2">
                <X weight="bold" className="text-red-600 w-5 h-5" />
                <p
                  className={`${montserrat.className} font-medium text-brandGray50`}
                >
                  Não consegue persuadir nem seus amigos;
                </p>
              </div>

              <div className="flex gap-2 items-center justify-center sm:justify-end pt-2">
                <X weight="bold" className="text-red-600 w-5 h-5" />
                <p
                  className={`${montserrat.className} font-medium text-brandGray50`}
                >
                  Trava ao ter que entrar em conversas difíceis;
                </p>
              </div>

              <div className="flex gap-2 items-center justify-center sm:justify-end pt-2">
                <X weight="bold" className="text-red-600 w-5 h-5" />
                <p
                  className={`${montserrat.className} font-medium text-brandGray50`}
                >
                  Só fala e não tem paciência em ouvir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
