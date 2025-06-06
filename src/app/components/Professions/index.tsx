import Link from 'next/link'
import { Span3 } from '../Hero/HeroComponents'
import { montserrat } from '@/app/fonts'
import { CursorClick, ShareFat } from '@phosphor-icons/react/dist/ssr'
import { Universty } from '../University'

export function Professions() {
  return (
    <>
      <section className="bg-gradient-to-tl from-brandYellow from-10% to-brandCyan to-90%">
        <Universty />
        <div className="mx-auto max-w-6xl px-9 py-8 md:px-8">
          <div className="mx-auto max-w-4xl space-y-5 px-4 py-8 text-center">
            <h2
              className={`${montserrat.className} antialiased text-2xl text-brandGray800 font-semibold uppercase text-center sm:text-3xl`}
            >
              Por que treinar a comuniacação se {''}
              <Span3> falamos a todo o momento?</Span3>
            </h2>
            <p
              className={`${montserrat.className} font-medium text-brandGray800`}
            >
              A comunicação faz parte do seu cotidiano, do bom dia ao boa noite
              e sejamos sinceros: falar até papagaio fala. Esse não será o
              diferencial. O que te fará brilhar é a forma como você fala.
              Algumas das profissões que revolucionamos são bons exemplos disso:
            </p>
          </div>

          <div className="relative mx-auto pt-4 sm:pt-2">
            <ul className="grid gap-4 sm:grid-cols-1 lg:grid-cols-4">
              <li>
                <Link
                  href={`https://wa.me/5594981342011?text=Olá+vim+pelo+site+e+gostaria+de+mais+informações`}
                >
                  <article className="group bg-brandCyan backdrop-blur-md rounded-lg shadow-lg shadow-brandCyan/60 transition hover:shadow-lg hover:shadow-white">
                    <div className="space-y-2 group-hover:bg-brandCyan group-hover:transition group-hover:rounded-lg p-4 sm:p-6">
                      <div className="flex justify-center gap-3 items-center">
                        <h3 className="mt-0.5 text-lg text-center font-semibold uppercase text-white group-hover:transition-colors">
                          advogados
                        </h3>
                        <CursorClick className="fill-white" weight="fill" />
                      </div>
                      <div className="flex gap-2 items-start">
                        <ShareFat
                          weight="fill"
                          className="text-white w-5 h-5 pt-1"
                        />
                        <p
                          className={`${montserrat.className} text-sm/relaxed line-clamp-3 font-medium text-white`}
                        >
                          Melhore as sustentações orais;
                        </p>
                      </div>
                      <div className="flex gap-2 items-start">
                        <ShareFat
                          weight="fill"
                          className="text-white w-5 h-5 pt-1"
                        />
                        <p
                          className={`${montserrat.className} text-sm/relaxed line-clamp-3 font-medium text-white`}
                        >
                          Estruture argumentos lógicos e convincentes;
                        </p>
                      </div>
                      <div className="flex gap-2 items-start">
                        <ShareFat
                          weight="fill"
                          className="text-white w-5 h-5 pt-1"
                        />
                        <p
                          className={`${montserrat.className} text-sm/relaxed line-clamp-3 font-medium text-white`}
                        >
                          Saiba impor-se por meio da linguagem corporal.
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              </li>
              <li>
                <Link
                  href={`https://wa.me/5594981342011?text=Olá+vim+pelo+site+e+gostaria+de+mais+informações`}
                >
                  <article className="group bg-brandCyan backdrop-blur-md rounded-lg shadow-lg shadow-brandCyan/60 transition hover:shadow-lg hover:shadow-white">
                    <div className="space-y-2 group-hover:bg-brandCyan group-hover:transition group-hover:rounded-lg p-4 sm:p-6">
                      <div className="flex justify-center gap-3 items-center">
                        <h3 className="mt-0.5 text-lg text-center font-semibold uppercase text-white group-hover:transition-colors">
                          empreendedores
                        </h3>
                        <CursorClick className="fill-white" weight="fill" />
                      </div>
                      <div className="flex gap-2 items-start">
                        <ShareFat
                          weight="fill"
                          className="text-white w-5 h-5 pt-1"
                        />
                        <p
                          className={`${montserrat.className} text-sm/relaxed line-clamp-3 font-medium text-white`}
                        >
                          Lidere melhor;
                        </p>
                      </div>
                      <div className="flex gap-2 items-start">
                        <ShareFat
                          weight="fill"
                          className="text-white w-5 h-5 pt-1"
                        />
                        <p
                          className={`${montserrat.className} text-sm/relaxed line-clamp-3 font-medium text-white`}
                        >
                          Construa um pitch de vendas mais efetivo;
                        </p>
                      </div>
                      <div className="flex gap-2 items-start">
                        <ShareFat
                          weight="fill"
                          className="text-white w-5 h-5 pt-1"
                        />
                        <p
                          className={`${montserrat.className} text-sm/relaxed line-clamp-3 font-medium text-white`}
                        >
                          Aprenda a construir e/ou potencializar sua rede de
                          networking.
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              </li>

              <li>
                <Link
                  href={`https://wa.me/5594981342011?text=Olá+vim+pelo+site+e+gostaria+de+mais+informações`}
                >
                  <article className="group bg-brandCyan backdrop-blur-md rounded-lg shadow-lg shadow-brandCyan/60 transition hover:shadow-lg hover:shadow-white">
                    <div className="space-y-2 group-hover:bg-brandCyan group-hover:transition group-hover:rounded-lg p-4 sm:p-6">
                      <div className="flex justify-center gap-3 items-center">
                        <h3 className="mt-0.5 text-lg text-center font-semibold uppercase text-white group-hover:transition-colors">
                          arquitetos
                        </h3>
                        <CursorClick className="fill-white" weight="fill" />
                      </div>
                      <div className="flex gap-2 items-start">
                        <ShareFat
                          weight="fill"
                          className="text-white w-5 h-5 pt-1"
                        />
                        <p
                          className={`${montserrat.className} text-sm/relaxed line-clamp-3 font-medium text-white`}
                        >
                          Apresente projetos com clareza;
                        </p>
                      </div>
                      <div className="flex gap-2 items-start">
                        <ShareFat
                          weight="fill"
                          className="text-white w-5 h-5 pt-1"
                        />
                        <p
                          className={`${montserrat.className} text-sm/relaxed line-clamp-3 font-medium text-white`}
                        >
                          Mantenha um bom relacionamento com clientes;
                        </p>
                      </div>
                      <div className="flex gap-2 items-start">
                        <ShareFat
                          weight="fill"
                          className="text-white w-5 h-5 pt-1"
                        />
                        <p
                          className={`${montserrat.className} text-sm/relaxed line-clamp-3 font-medium text-white`}
                        >
                          Esteja pronto para apresentações, entrevistas,
                          palestras e conferências.
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              </li>

              <li>
                <Link
                  href={`https://wa.me/5594981342011?text=Olá+vim+pelo+site+e+gostaria+de+mais+informações`}
                >
                  <article className="group bg-brandCyan backdrop-blur-md rounded-lg shadow-lg shadow-brandCyan/60 transition hover:shadow-lg hover:shadow-white">
                    <div className="space-y-2 group-hover:bg-brandCyan group-hover:transition group-hover:rounded-lg p-4 sm:p-6">
                      <div className="flex justify-center gap-3 items-center">
                        <h3 className="mt-0.5 text-lg text-center font-semibold uppercase text-white group-hover:transition-colors">
                          médicos
                        </h3>
                        <CursorClick className="fill-white" weight="fill" />
                      </div>
                      <div className="flex gap-2 items-start">
                        <ShareFat
                          weight="fill"
                          className="text-white w-5 h-5 pt-1"
                        />
                        <p
                          className={`${montserrat.className} text-sm/relaxed line-clamp-3 font-medium text-white`}
                        >
                          Perca a dificuldade de passar o conhecimento e ser
                          confiável;
                        </p>
                      </div>
                      <div className="flex gap-2 items-start">
                        <ShareFat
                          weight="fill"
                          className="text-white w-5 h-5 pt-1"
                        />
                        <p
                          className={`${montserrat.className} text-sm/relaxed line-clamp-3 font-medium text-white`}
                        >
                          Melhore a sua interação com os pacientes;
                        </p>
                      </div>
                      <div className="flex gap-2 items-start">
                        <ShareFat
                          weight="fill"
                          className="text-white w-5 h-5 pt-1"
                        />
                        <p
                          className={`${montserrat.className} text-sm/relaxed line-clamp-3 font-medium text-white`}
                        >
                          Tenha uma boa performance nas redes sociais.
                        </p>
                      </div>
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
