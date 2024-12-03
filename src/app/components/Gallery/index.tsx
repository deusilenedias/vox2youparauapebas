import Image from 'next/image'
import { Span2, HeroCardP3 } from '../Hero/HeroComponents'
import { montserrat } from '@/app/fonts'
import img1 from '../../../../public/alunos/turma1.jpg'
import img2 from '../../../../public/alunos/aluno1.jpg'
import img4 from '../../../../public/alunos/aluno3.jpg'
import img5 from '../../../../public/alunos/aluno4.jpg'
import img6 from '../../../../public/alunos/turma-alfa.jpeg'

export function Gallery() {
  return (
    <>
      <section className="bg-brandGray50">
        <div className="mx-auto max-w-6xl px-4 pt-20 md:flex md:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-3xl md:max-w-none px-4">
                <div className="mb-2">
                  <span className="inline-block h-1 w-40 rounded-full bg-brandCyan"></span>
                  <span className="ml-1 inline-block h-1 w-3 rounded-full bg-brandCyan"></span>
                  <span className="ml-1 inline-block h-1 w-1 rounded-full bg-brandCyan"></span>
                </div>
                <h2
                  className={`${montserrat.className} antialiased uppercase text-3xl font-semibold text-brandGray800 text-center sm:text-left sm:text-4xl`}
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
            <div className="grid grid-cols-2 px-4">
              <div className="col-span-2 rounded-t-lg overflow-hidden shadow-*-lg shadow-brandCyan">
                <Image
                  className="transition duration-150 hover:scale-125 object-cover w-full h-80"
                  src={img1}
                  alt="turma"
                  sizes="100vw"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden shadow-*-lg shadow-brandCyan">
                <Image
                  className="transition duration-150 hover:scale-125 object-cover w-full h-72"
                  src={img2}
                  alt="turma"
                  sizes="100vw"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden shadow-*-lg shadow-brandCyan">
                <Image
                  className="transition duration-150 hover:scale-125 object-cover w-full h-72"
                  src={img5}
                  alt="turma"
                  sizes="100vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 pb-10 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 md:items-center px-4">
            <div className="rounded-l-lg overflow-hidden col-span-2 shadow-*-lg shadow-brandCyan">
              <Image
                className="transition duration-150 hover:scale-125 object-cover w-full h-72"
                src={img6}
                alt="turma"
                sizes="100vw"
                loading="lazy"
              />
            </div>
            <div className="rounded-br-lg overflow-hidden shadow-*-lg shadow-brandCyan">
              <Image
                className="transition duration-150 hover:scale-125 object-cover w-full h-72"
                src={img4}
                alt="turma"
                sizes="100vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
