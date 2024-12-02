import Link from 'next/link'
import { HeroCardH1Span } from '../Hero/HeroComponents'
import { montserrat } from '@/app/fonts'
import Image from 'next/image'
import imgAcademy from '../../../../public/programas/academy.webp'
import imgMaster from '../../../../public/programas/master.webp'
import imgIntensivox from '../../../../public/programas/intensivox.webp'

export function Benefits() {
  return (
    <>
      <section className="bg-brandGray50">
        <div className="mx-auto max-w-6xl px-9 py-8 md:px-8">
          <div className="mx-auto max-w-4xl space-y-5 px-4 py-8 text-center">
            <h2
              className={`${montserrat.className} antialiased text-3xl text-brandGray800 font-semibold uppercase text-center sm:text-4xl`}
            >
              Nós criamos as melhores rotas, {''}
              <HeroCardH1Span>
                {' '}
                mas a decisão de transformação está dentro de você.
              </HeroCardH1Span>
            </h2>
            <p
              className={`${montserrat.className} font-medium text-brandGray800`}
            >
              Conheça alguns dos nossos programas de transformação pessoal.
            </p>
          </div>

          <div className="relative mx-auto pt-4 sm:pt-2">
            <ul className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
              <Link href="https://api.whatsapp.com/send?phone=5594981342011&text=Ol%C3%A1%20vim%20pelo%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Academy">
                <li>
                  <article className="group rounded-lg shadow-lg shadow-brandCyan/60 transition hover:shadow-lg hover:shadow-brandCyan">
                    <div className="overflow-hidden rounded-t-lg">
                      <Image
                        alt="Academy"
                        src={imgAcademy}
                        className="h-56 w-full object-cover group-hover:duration-150 group-hover:scale-125"
                        sizes="100vh"
                        loading="lazy"
                      />
                    </div>
                    <div className="group-hover:bg-brandCyan group-hover:transition group-hover:rounded-b-lg p-4 sm:p-6">
                      <h3 className="mt-0.5 text-lg text-center font-semibold uppercase text-brandGray800 group-hover:text-brandGray50 group-hover:transition-colors">
                        Academy
                      </h3>
                      <p className="text-center mt-2 line-clamp-3 text-sm/relaxed text-brandGray800 group-hover:text-brandGray50 group-hover:transition-colors">
                        Viva o desenvolvimento humano de forma contínua, levando
                        para dentro da sala de aula suas vivências pessoais,
                        alcançando uma mudança de dentro para fora.
                      </p>
                    </div>
                  </article>
                </li>
              </Link>
              <Link href="https://api.whatsapp.com/send?phone=5594981342011&text=Ol%C3%A1%20vim%20pelo%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Master">
                <li>
                  <article className="group shadow-lg shadow-brandCreme/60 rounded-lg transition hover:shadow-lg hover:shadow-brandCreme">
                    <div className="overflow-hidden rounded-t-lg">
                      <Image
                        alt="Master"
                        src={imgMaster}
                        className="h-56 w-full object-cover group-hover:duration-150 group-hover:scale-125"
                        sizes="100vh"
                        loading="lazy"
                      />
                    </div>
                    <div className="group-hover:bg-brandCreme group-hover:transition group-hover:rounded-b-lg p-4 sm:p-6">
                      <h3 className="mt-0.5 text-lg text-center font-semibold uppercase text-brandGray800 group-hover:text-brandGray50 group-hover:transition-colors">
                        Master
                      </h3>
                      <p className="text-center mt-2 line-clamp-3 text-sm/relaxed text-brandGray800 group-hover:text-brandGray50 group-hover:transition-colors">
                        Use o tempo a seu favor e de forma estratégica com a sua
                        vida para elevar ainda mais o seu nível no mercado.
                      </p>
                    </div>
                  </article>
                </li>
              </Link>
              <Link href="https://api.whatsapp.com/send?phone=5594981342011&text=Ol%C3%A1%20vim%20pelo%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Intensivox">
                <li>
                  <article className="shadow-lg shadow-brandPurple/60 group rounded-lg transition hover:shadow-lg hover:shadow-brandPurple">
                    <div className="overflow-hidden rounded-t-lg">
                      <Image
                        alt="Intensivox"
                        src={imgIntensivox}
                        className="h-56 w-full object-cover group-hover:duration-150 group-hover:scale-125"
                        sizes="100vh"
                        loading="lazy"
                      />
                    </div>
                    <div className="group-hover:bg-brandPurple group-hover:transition group-hover:rounded-b-lg p-4 sm:p-6">
                      <h3 className="mt-0.5 text-lg text-center font-semibold uppercase text-brandGray800 group-hover:text-brandGray50 group-hover:transition-colors">
                        Intensivox
                      </h3>
                      <p className="text-center mt-2 line-clamp-3 text-sm/relaxed text-brandGray800 group-hover:text-brandGray50 group-hover:transition-colors">
                        Mergulhe intensivamente naquilo que realmente importa
                        para mudar o mundo e as pessoas: você.
                      </p>
                    </div>
                  </article>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
