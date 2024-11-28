import Image from 'next/image'
import { HeroCardH2Span, HeroCardP3 } from '../Hero/HeroComponents'
// import { BgBackgroundWhite } from '../SectionColor/ColorComponent'
import { playfair_display } from '@/app/fonts'
import img1 from '../../../../public/alunos/turma1.jpg'
import img2 from '../../../../public/alunos/aluno1.jpg'
import img4 from '../../../../public/alunos/aluno3.jpg'
import img5 from '../../../../public/alunos/aluno4.jpg'
import img6 from '../../../../public/alunos/turma-alfa.jpeg'

export function Gallery() {
  return (
    <>
      {/* <BgBackgroundWhite> */}
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl gap-x-12 px-4 pt-20 md:flex md:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-3xl md:max-w-none px-4">
                <h2
                  className={`${playfair_display.className} antialiased text-2xl font-semibold text-brandGray800 italic capitalize drop-shadow-lg text-center sm:text-left sm:text-3xl`}
                >
                  A oratória é uma habilidade{' '}
                  <HeroCardH2Span> que pode ser treinada</HeroCardH2Span>
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
            <div className="grid grid-cols-2 px-4">
              <div className="col-span-2 overflow-hidden shadow-*-lg shadow-brandCyan">
                <Image
                  className="transition duration-150 hover:scale-125 object-cover w-full h-80"
                  src={img1}
                  alt="turma"
                  sizes="100vw"
                />
              </div>
              <div className="overflow-hidden shadow-*-lg shadow-brandCyan">
                <Image
                  className="transition duration-150 hover:scale-125 object-cover w-full h-72"
                  src={img2}
                  alt="turma"
                  sizes="100vw"
                />
              </div>
              <div className="overflow-hidden shadow-*-lg shadow-brandCyan">
                <Image
                  className="transition duration-150 hover:scale-125 object-cover w-full h-72"
                  src={img5}
                  alt="turma"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 pb-10 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 md:items-center px-4">
            <div className="overflow-hidden col-span-2 shadow-*-lg shadow-brandCyan">
              <Image
                className="transition duration-150 hover:scale-125 object-cover w-full h-72"
                src={img6}
                alt="turma"
                sizes="100vw"
              />
            </div>
            <div className="overflow-hidden shadow-*-lg shadow-brandCyan">
              <Image
                className="transition duration-150 hover:scale-125 object-cover w-full h-72"
                src={img4}
                alt="turma"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </section>
      {/* </BgBackgroundWhite> */}
    </>
  )
}
