import Image from 'next/image'
import imgLogo1 from '../../../../public/logo-empresas/3coracoes.webp'
import imgLogo2 from '../../../../public/logo-empresas/AGCO2.webp'
import imgLogo3 from '../../../../public/logo-empresas/EBX2.webp'
import imgLogo4 from '../../../../public/logo-empresas/RENK2.webp'
import imgLogo5 from '../../../../public/logo-empresas/SICOOB2.webp'
import imgLogo6 from '../../../../public/logo-empresas/SICREDI2.webp'
import imgLogo7 from '../../../../public/logo-empresas/itau2.webp'
import imgLogo8 from '../../../../public/logo-empresas/tvoeste.webp'
import { montserrat } from '@/app/fonts'
import { HeroCardH2Span } from '../Hero/HeroComponents'

export function LogoClouds() {
  return (
    <>
      <section className="bg-white">
        <div className="py-14">
          <div className="max-w-6xl mx-auto px-8 sm:px-12">
            <div className="max-w-6xl mx-auto text-left">
              <div>
                <span className="inline-block h-1 w-40 rounded-full bg-brandCyan"></span>
                <span className="ml-1 inline-block h-1 w-3 rounded-full bg-brandCyan"></span>
                <span className="ml-1 inline-block h-1 w-1 rounded-full bg-brandCyan"></span>
              </div>
              <span className="text-left text-brandGray800">Conheça</span>
              <h2
                className={`${montserrat.className} pt-2 antialiased uppercase text-3xl font-semibold text-brandGray800 text-center sm:text-left sm:text-4xl`}
              >
                Empresas que{' '}
                <HeroCardH2Span> confiam na Vox2you</HeroCardH2Span>
              </h2>
            </div>
            <div className="mt-12 flex justify-center">
              <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
                <li>
                  <Image
                    className="w-28 sm:w-36 my-auto"
                    src={imgLogo1}
                    alt="turma"
                    sizes="100vw"
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className="w-28 sm:w-36 my-auto"
                    src={imgLogo2}
                    alt="turma"
                    sizes="100vw"
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className="w-28 sm:w-36 my-auto"
                    src={imgLogo3}
                    alt="turma"
                    sizes="100vw"
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className="w-28 sm:w-36 my-auto"
                    src={imgLogo4}
                    alt="turma"
                    sizes="100vw"
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className="w-28 sm:w-36 my-auto"
                    src={imgLogo5}
                    alt="turma"
                    sizes="100vw"
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className="w-28 sm:w-36 my-auto"
                    src={imgLogo6}
                    alt="turma"
                    sizes="100vw"
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className="w-28 sm:w-36 my-auto"
                    src={imgLogo7}
                    alt="turma"
                    sizes="100vw"
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className="w-28 sm:w-36 my-auto"
                    src={imgLogo8}
                    alt="turma"
                    sizes="100vw"
                    loading="lazy"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
