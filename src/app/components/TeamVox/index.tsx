import { montserrat } from '@/app/fonts'
import { Span1 } from '../Hero/HeroComponents'
import Image from 'next/image'
import geyzon from '../../../../public/timevox/geyzon.jpeg'
import deusi from '../../../../public/timevox/deusi.jpeg'
import thais from '../../../../public/timevox/thais.jpeg'
import eurielia from '../../../../public/timevox/eurielia.jpeg'
import juliana from '../../../../public/timevox/juliana.jpeg'
import mila from '../../../../public/timevox/mila.jpeg'
import vini from '../../../../public/timevox/vini.jpeg'
import paula from '../../../../public/timevox/paula.jpeg'

export function TeamVox() {
  const team = [
    {
      avatar: geyzon,
      name: 'Geizon Magalhães',
      title: 'Franqueado Vox2You Parauapebas/PA',
    },
    {
      avatar: deusi,
      name: 'Deusilene Dias',
      title: 'Franqueada Vox2You Parauapebas/PA',
    },
    {
      avatar: thais,
      name: 'Thaís Barreto',
      title: 'Líder Comercial/Vendas Vox2You Parauapebas/PA',
    },
    {
      avatar: eurielia,
      name: 'Euriélia Batista',
      title: 'Comercial/Vendas Vox2You Parauapebas/PA',
    },
    {
      avatar: juliana,
      name: 'Juliana Vasconcelos',
      title: 'Comercial/Vendas Vox2You Parauapebas/PA',
    },
    {
      avatar: mila,
      name: 'Milany Lopes',
      title: 'Facilitadora Vox2You Parauapebas/PA',
    },
    {
      avatar: vini,
      name: 'Vinicios Lopes',
      title: 'Facilitador Vox2You Parauapebas/PA',
    },
    {
      avatar: paula,
      name: 'Paula Nunes',
      title: 'Administração/Financeiro Vox2You Parauapebas/PA',
    },
  ]

  return (
    <>
      <section className="bg-brandGray800 py-14">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="mx-auto text-center">
            <div>
              <span className="inline-block h-1 w-40 rounded-full bg-brandYellow"></span>
              <span className="ml-1 inline-block h-1 w-3 rounded-full bg-brandYellow"></span>
              <span className="ml-1 inline-block h-1 w-1 rounded-full bg-brandYellow"></span>
            </div>
            <div>
              <div className="max-w-5xl pt-4 mx-auto text-center px-4">
                <h2
                  className={`${montserrat.className} antialiased uppercase text-3xl font-semibold text-brandGray50 text-center sm:text-4xl`}
                >
                  Conheça o time <Span1> vox2you parauapebas/PA</Span1>
                </h2>
                <p
                  className={`${montserrat.className} text-center font-medium text-brandGray50 pt-4`}
                >
                  Sozinho nós vamos longe, mas juntos não há limites.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <ul className="grid px-4 gap-8 sm:grid-cols-2 md:grid-cols-3 ">
              {team.map((item, idx) => (
                <li key={idx}>
                  <div className="w-full h-auto sm:h-auto md:h-auto shadow-lg shadow-brandCyan/60 rounded-lg">
                    <Image
                      src={item.avatar}
                      className="w-full h-auto object-cover object-center shadow-md rounded-lg"
                      alt="Time Vox"
                      width={500}
                      height={500}
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4">
                    <h1 className="text-lg text-brandYellow font-semibold">
                      {item.name}
                    </h1>
                    <p className="text-brandGray50">{item.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
