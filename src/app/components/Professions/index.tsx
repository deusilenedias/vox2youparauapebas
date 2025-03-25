import Link from 'next/link'
import { Span3 } from '../Hero/HeroComponents'
import { montserrat } from '@/app/fonts'
import { CursorClick } from '@phosphor-icons/react/dist/ssr'
import { Universty } from '../University'

export function Professions() {
  return (
    <>
      <section className="bg-gradient-to-tl from-brandYellow from-10% to-brandCyan to-90%">
        <Universty />
        <div className="mx-auto max-w-6xl px-9 py-8 md:px-8">
          <div className="mx-auto max-w-4xl space-y-5 px-4 py-8 text-center">
            <h2
              className={`${montserrat.className} antialiased text-3xl text-brandGray800 font-semibold uppercase text-center sm:text-4xl`}
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
                <Link href="https://api.whatsapp.com/send?phone=5594984481297&text=Ol%C3%A1%20vim%20pelo%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Academy">
                  <article className="group bg-brandCyan backdrop-blur-md rounded-lg shadow-lg shadow-brandCyan/60 transition hover:shadow-lg hover:shadow-brandGray50">
                    <div className="group-hover:bg-brandCyan group-hover:transition group-hover:rounded-lg p-4 sm:p-6">
                      <div className="flex justify-center gap-3 items-center">
                        <h3 className="mt-0.5 text-lg text-center font-semibold uppercase text-brandGray50 group-hover:transition-colors">
                          advogados
                        </h3>
                        <CursorClick
                          className="fill-brandGray50"
                          weight="fill"
                        />
                      </div>
                      <p className="text-center mt-2 line-clamp-3 text-sm/relaxed text-brandGray50 group-hover:transition-colors">
                        Viva o desenvolvimento humano de forma contínua, levando
                        para dentro da sala de aula suas vivências pessoais,
                        alcançando uma mudança de dentro para fora.
                      </p>
                    </div>
                  </article>
                </Link>
              </li>
              <li>
                <Link href="https://api.whatsapp.com/send?phone=5594984481297&text=Ol%C3%A1%20vim%20pelo%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Academy">
                  <article className="group bg-brandCyan backdrop-blur-md rounded-lg shadow-lg shadow-brandCyan/60 transition hover:shadow-lg hover:shadow-brandGray50">
                    <div className="group-hover:bg-brandCyan group-hover:transition group-hover:rounded-lg p-4 sm:p-6">
                      <div className="flex justify-center gap-3 items-center">
                        <h3 className="mt-0.5 text-lg text-center font-semibold uppercase text-brandGray50 group-hover:transition-colors">
                          empreendedores
                        </h3>
                        <CursorClick
                          className="fill-brandGray50"
                          weight="fill"
                        />
                      </div>
                      <p className="text-center mt-2 line-clamp-3 text-sm/relaxed text-brandGray50 group-hover:transition-colors">
                        Viva o desenvolvimento humano de forma contínua, levando
                        para dentro da sala de aula suas vivências pessoais,
                        alcançando uma mudança de dentro para fora.
                      </p>
                    </div>
                  </article>
                </Link>
              </li>

              <li>
                <Link href="https://api.whatsapp.com/send?phone=5594984481297&text=Ol%C3%A1%20vim%20pelo%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Academy">
                  <article className="group bg-brandCyan backdrop-blur-md rounded-lg shadow-lg shadow-brandCyan/60 transition hover:shadow-lg hover:shadow-brandGray50">
                    <div className="group-hover:bg-brandCyan group-hover:transition group-hover:rounded-lg p-4 sm:p-6">
                      <div className="flex justify-center gap-3 items-center">
                        <h3 className="mt-0.5 text-lg text-center font-semibold uppercase text-brandGray50 group-hover:transition-colors">
                          arquitetos
                        </h3>
                        <CursorClick
                          className="fill-brandGray50"
                          weight="fill"
                        />
                      </div>
                      <p className="text-center mt-2 line-clamp-3 text-sm/relaxed text-brandGray50 group-hover:transition-colors">
                        Viva o desenvolvimento humano de forma contínua, levando
                        para dentro da sala de aula suas vivências pessoais,
                        alcançando uma mudança de dentro para fora.
                      </p>
                    </div>
                  </article>
                </Link>
              </li>

              <li>
                <Link href="https://api.whatsapp.com/send?phone=5594984481297&text=Ol%C3%A1%20vim%20pelo%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Academy">
                  <article className="group bg-brandCyan backdrop-blur-md rounded-lg shadow-lg shadow-brandCyan/60 transition hover:shadow-lg hover:shadow-brandGray50">
                    <div className="group-hover:bg-brandCyan group-hover:transition group-hover:rounded-lg p-4 sm:p-6">
                      <div className="flex justify-center gap-3 items-center">
                        <h3 className="mt-0.5 text-lg text-center font-semibold uppercase text-brandGray50 group-hover:transition-colors">
                          médicos
                        </h3>
                        <CursorClick
                          className="fill-brandGray50"
                          weight="fill"
                        />
                      </div>
                      <p className="text-center mt-2 line-clamp-3 text-sm/relaxed text-brandGray50 group-hover:transition-colors">
                        Viva o desenvolvimento humano de forma contínua, levando
                        para dentro da sala de aula suas vivências pessoais,
                        alcançando uma mudança de dentro para fora.
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
