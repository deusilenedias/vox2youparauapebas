import { montserrat } from '@/app/fonts'
import { Span2 } from '../Hero/HeroComponents'

export function Faq() {
  const faqList = [
    {
      title: 'O programa de Oratória é presencial?',
      subtitle:
        'Sim. Temos várias unidades por todo o Brasil e nossos programas educacionais são todos presenciais.',
    },
    {
      title: 'Quanto custa o programa de Oratória?',
      subtitle:
        'Depende do que você está buscando. Você irá passar por um processo seletivo, com um de nossos consultores, para entendermos qual o seu nível de entendimento ou dificuldade em se comunicar no trabalho, na vida e nas relações interpessoais.',
    },
    {
      title: 'Quanto tempo dura o programa de Oratória?',
      subtitle:
        'Depende do programa pelo qual você foi orientado a fazer, de acordo com a sua necessidade. Podendo ser de 2 dias até 8 meses.',
    },
    {
      title: 'Quantas vezes por semana o programa é feito?',
      subtitle:
        'Depende, pode ser 1 vez por semana ou somente 1 final de semana.',
    },
    {
      title: 'Tem certificado de conclusão do programa de Oratória?',
      subtitle:
        'Sim. Todos os nossos programas tem certificados reconhecidos nacionalmente.',
    },
  ]

  return (
    <>
      <section>
        <div className="mx-auto py-12 px-4 pb-8 sm:max-w-6xl md:max-w-6xl md:px-24 lg:max-w-6xl lg:px-8 lg:pb-8">
          <div className="max-w-xl sm:mx-auto lg:max-w-4xl">
            <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-4xl">
              <div className="mx-auto text-center">
                <div>
                  <span className="inline-block h-1 w-40 rounded-full bg-brandYellow"></span>
                  <span className="ml-1 inline-block h-1 w-3 rounded-full bg-brandYellow"></span>
                  <span className="ml-1 inline-block h-1 w-1 rounded-full bg-brandYellow"></span>
                </div>
                <div className="mx-auto max-w-4xl space-y-5 px-4 py-2 text-center">
                  <h2
                    className={`${montserrat.className} antialiased uppercase text-3xl font-semibold text-brandGray800 text-center sm:text-4xl`}
                  >
                    Faq de <Span2> Perguntas e Respostas</Span2>
                  </h2>
                  <p
                    className={`${montserrat.className} text-center font-medium text-brandGray800`}
                  >
                    Principais dúvidas sobre o programa de Oratória.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-1">
            <div className="mt-1 space-y-3">
              {faqList.map((item, idx) => (
                <div
                  key={idx}
                  tabIndex={0}
                  className="collapse collapse-arrow rounded-lg bg-gradient-to-l from-brandCyan/80 to-brandCyan/10 shadow-brandGray800/20 shadow-l-md"
                >
                  <input type="checkbox" aria-label="checkbox" />
                  <div className="collapse-title font-sans font-bold text-cyan-950">
                    {item.title}
                  </div>
                  <div className="collapse-content font-sans text-sm font-semibold text-cyan-950/80">
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
