import Image from 'next/image'
import imgLogo1 from '../../../../public/logo-empresas/3coracoes.webp'
import imgLogo2 from '../../../../public/logo-empresas/AGCO2.webp'
import imgLogo3 from '../../../../public/logo-empresas/EBX2.webp'
import imgLogo4 from '../../../../public/logo-empresas/RENK2.webp'
import imgLogo5 from '../../../../public/logo-empresas/SICOOB2.webp'
import imgLogo6 from '../../../../public/logo-empresas/SICREDI2.webp'
import imgLogo7 from '../../../../public/logo-empresas/itau2.webp'
import imgLogo8 from '../../../../public/logo-empresas/tvoeste.webp'

export function LogoClouds() {
  return (
    <>
      <section className="bg-white">
        <div className="py-14">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-xl mx-auto text-center">
              <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Who's using Float UI?
              </h3>
              <p className="text-gray-600 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                dignissim nibh nisl, vel egestas magna rhoncus at. Nunc
                elementum efficitur tortor in laoreet.
              </p>
            </div>
            <div className="mt-12 flex justify-center">
              <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
                <li>
                  <Image
                    className="w-28 my-auto"
                    src={imgLogo1}
                    alt="turma"
                    sizes="100vw"
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className="w-28 my-auto"
                    src={imgLogo2}
                    alt="turma"
                    sizes="100vw"
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className="w-28 my-auto"
                    src={imgLogo3}
                    alt="turma"
                    sizes="100vw"
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className="w-28 my-auto"
                    src={imgLogo4}
                    alt="turma"
                    sizes="100vw"
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className="w-28 my-auto"
                    src={imgLogo5}
                    alt="turma"
                    sizes="100vw"
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className="w-28 my-auto"
                    src={imgLogo6}
                    alt="turma"
                    sizes="100vw"
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className="w-28 my-auto"
                    src={imgLogo7}
                    alt="turma"
                    sizes="100vw"
                    loading="lazy"
                  />
                </li>
                <li>
                  <Image
                    className="w-28 my-auto"
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
