import { Span2, HeroCardP3 } from '../Hero/HeroComponents'
import { montserrat } from '@/app/fonts'
import { ImageCarousel } from '../ImageCarousel'

export function Gallery() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-6xl px-4 pt-8 md:flex md:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-3xl md:max-w-none px-4">
                <div className="mb-2">
                  <span className="inline-block h-1 w-40 rounded-full bg-brandYellow"></span>
                  <span className="ml-1 inline-block h-1 w-3 rounded-full bg-brandYellow"></span>
                  <span className="ml-1 inline-block h-1 w-1 rounded-full bg-brandYellow"></span>
                </div>
                <h2
                  className={`${montserrat.className} antialiased uppercase text-2xl font-semibold text-brandGray800 text-center sm:text-left sm:text-3xl`}
                >
                  A oratória é uma habilidade{' '}
                  <Span2> que pode ser treinada</Span2>
                </h2>

                <HeroCardP3>
                  Uma pessoa que não fala nada já está se comunicando, afinal,
                  não dar espaço à sua voz dá a chance de falarem por você. É
                  por isso que não somos apenas uma escola de cursos de oratória
                  e comunicação, mas sim um espaço verdadeiramente humano e
                  dedicado à construção de novas histórias.
                </HeroCardP3>
              </div>
            </div>
            <ImageCarousel />
          </div>
        </div>
      </section>
    </>
  )
}
