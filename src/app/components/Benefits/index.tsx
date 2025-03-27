import Link from 'next/link'
import { montserrat } from '@/app/fonts'
import Image from 'next/image'
import imgMaterial from '../../../../public/programas/material-academy.webp'
import imgTecnicas from '../../../../public/programas/tecnicas.jpg'
import imgPraticas from '../../../../public/programas/praticas.jpg'
import imgMentorias from '../../../../public/programas/mentorias.jpg'

export function Benefits() {
  return (
    <>
      <section className="bg-brandGray800">
        <div className="mx-auto max-w-6xl px-9 py-8 md:px-8">
          <div className="mx-auto max-w-4xl space-y-5 px-4 py-8 text-center">
            <h2
              className={`${montserrat.className} antialiased text-3xl text-brandGray50 font-semibold uppercase text-center sm:text-4xl`}
            >
              O que te espera na Vox2you {''}
            </h2>
            <p
              className={`${montserrat.className} font-medium text-brandGray50`}
            >
              Projetamos um conteúdo programático e um espaço completamente
              dedicado ao networking e à prática, tudo focado na transformação
              genuína de cada um de nossos alunos.
            </p>
          </div>

          <div className="relative mx-auto pt-4 sm:pt-2">
            <ul className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
              <li>
                <Link
                  href={`https://wa.me/5594984481297?text=Olá+vim+pelo+site+e+gostaria+de+mais+informações`}
                >
                  <article className="group rounded-lg shadow-lg shadow-brandCyan/60 transition hover:shadow-lg hover:shadow-brandCyan">
                    <div className="overflow-hidden rounded-t-lg">
                      <Image
                        alt="Academy"
                        src={imgMaterial}
                        className="h-56 w-full object-cover group-hover:duration-150 group-hover:scale-125"
                        sizes="100vh"
                        loading="lazy"
                      />
                    </div>
                    <div className="bg-brandCyan transition-all rounded-b-lg p-4 sm:p-6">
                      <div className="flex justify-center gap-3 items-center">
                        <h3 className="mt-0.5 text-lg text-center font-semibold uppercase text-brandGray50">
                          <span className="bg-brandGray800">
                            Material didático de ponta
                          </span>
                        </h3>
                      </div>
                      <p className="text-center mt-2 line-clamp-3 text-sm/relaxed text-brandGray50">
                        Os materiais didáticos Vox2you são mais do que livros.
                        Eles estão totalmente integrados a recursos
                        tecnológicos, oferecendo ao aluno aplicativos e
                        conteúdos exclusivos.
                      </p>
                    </div>
                  </article>
                </Link>
              </li>
              <li>
                <Link
                  href={`https://wa.me/5594984481297?text=Olá+vim+pelo+site+e+gostaria+de+mais+informações`}
                >
                  <article className="group shadow-lg shadow-brandCreme/60 rounded-lg transition hover:shadow-lg hover:shadow-brandCreme">
                    <div className="overflow-hidden rounded-t-lg">
                      <Image
                        alt="Master"
                        src={imgTecnicas}
                        className="h-56 w-full object-cover group-hover:duration-150 group-hover:scale-125"
                        sizes="100vh"
                        loading="lazy"
                      />
                    </div>
                    <div className="bg-brandCreme transition-all rounded-b-lg p-4 sm:p-6">
                      <div className="flex justify-center gap-3 items-center">
                        <h3 className="mt-0.5 text-lg text-center font-semibold uppercase text-brandGray50">
                          <span className="bg-brandGray800">
                            Técnicas exclusivas
                          </span>
                        </h3>
                      </div>
                      <p className="text-center mt-2 line-clamp-3 text-sm/relaxed text-brandGray50">
                        Aprenda a utilizar as melhores técnicas de oratória,
                        como por exemplo, linguagem corporal, modulação de voz,
                        contato visual, ferramentas de persuasão e estruturação
                        de discursos.
                      </p>
                    </div>
                  </article>
                </Link>
              </li>

              <li>
                <Link
                  href={`https://wa.me/5594984481297?text=Olá+vim+pelo+site+e+gostaria+de+mais+informações`}
                >
                  <article className="shadow-lg shadow-brandPurple/60 group rounded-lg transition hover:shadow-lg hover:shadow-brandPurple">
                    <div className="overflow-hidden rounded-t-lg">
                      <Image
                        alt="Intensivox"
                        src={imgPraticas}
                        className="h-56 w-full object-cover group-hover:duration-150 group-hover:scale-125"
                        sizes="100vh"
                        loading="lazy"
                      />
                    </div>
                    <div className="bg-brandPurple transition-all rounded-b-lg p-4 sm:p-6">
                      <div className="flex justify-center gap-3 items-center">
                        <h3 className="mt-0.5 text-lg text-center font-semibold uppercase text-brandGray50">
                          <span className="bg-brandGray800">
                            Práticas desde a primeira aula
                          </span>
                        </h3>
                      </div>
                      <p className="text-center mt-2 line-clamp-3 text-sm/relaxed text-brandGray50">
                        Nada de timidez ou vergonha por estar começando. Aqui
                        sua mudança acontece desde o primeiro minuto em sala de
                        aula.
                      </p>
                    </div>
                  </article>
                </Link>
              </li>

              <li>
                <Link
                  href={`https://wa.me/5594984481297?text=Olá+vim+pelo+site+e+gostaria+de+mais+informações`}
                >
                  <article className="shadow-lg shadow-brandYellow/60 group rounded-lg transition hover:shadow-lg hover:shadow-brandYellow">
                    <div className="overflow-hidden rounded-t-lg">
                      <Image
                        alt="Intensivox"
                        src={imgMentorias}
                        className="h-56 w-full object-cover group-hover:duration-150 group-hover:scale-125"
                        sizes="100vh"
                        loading="lazy"
                      />
                    </div>
                    <div className="bg-brandYellow transition-all rounded-b-lg p-4 sm:p-6">
                      <div className="flex justify-center gap-3 items-center">
                        <h3 className="mt-0.5 text-lg text-center font-semibold uppercase text-brandGray50">
                          <span className="bg-brandGray800">
                            Mentorias individuais
                          </span>
                        </h3>
                      </div>
                      <p className="text-center mt-2 line-clamp-3 text-sm/relaxed text-brandGray800">
                        Você ganhará 4 mentorias com o seu facilitador. Esse é o
                        seu espaço para solucionar dúvidas e definir metas.
                      </p>
                    </div>
                  </article>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
