import { GoogleLogo, Star, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import {
  ButtonHome,
  ButtonHomeFlex,
  ButtonHomeText,
} from '../Buttons/ButtonCta'
import imgGoogle from '../../../../public/logo-empresas/logo-google.png'
import { HeroCardH1Span } from '../Hero/HeroComponents'
import { montserrat } from '@/app/fonts'

export function GoogleReviews() {
  const features = [
    {
      imgGoogle: imgGoogle,
      imgURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjWmxmv1iRkRBLvIdAmVo_9JrzebixflvaSsUYAwyJiXz8H1E8ZEwA=w75-h75-p-rp-mo-br100',
      clientName: 'Alexsandra França',
      clientProve:
        'Super indico! Melhor curso de oratória da América Latina, e detalhe, com instalação em Parauapebas. Curso ofertado com excelência,  ambiente aconchegante, excelente professor e a equipe super dedicada e atenciosa.',
      days: '2 meses atrás',
    },
    {
      imgGoogle: imgGoogle,
      imgURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjV1Y5OhtMrhClK_UtlAKf4BO_tEQ3INkjvPWwWx-I_l8jOrnpo=w75-h75-p-rp-mo-br100',
      clientName: 'eurielia rodrigues batista',
      clientProve:
        'Fui aluna, me maravilhei com a forma dinâmica de ensino e o comprometimento de toda equipe com a transformação pessoal de cada pessoa. Hoje tenho o privilégio de ser parte integrante do time nessa missão que é transformar vidas através da comunicação e oratória. Ambiente de crescimento.',
      days: '2 meses atrás',
    },
    {
      imgGoogle: imgGoogle,
      imgURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjW748qBcP1F-uF_v_zhReJlFdonoXD5CGP0SBAbRZFzq6w4ifnd=w75-h75-p-rp-mo-br100',
      clientName: 'Barreto Lobato',
      clientProve:
        'A vox me trouxe um novo conceito de transformação de vida. Nunca havia me sentido tão desafiada e maravilhada ao mesmo tempo. Um lugar lindo, cheio de forte energia, conexão e transformação. Muito obrigada Vox, por me dar a voz que eu sempre busquei ter.',
      days: '2 meses atrás',
    },
    {
      imgGoogle: imgGoogle,
      imgURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjUrO_DsKyHQGUdcIan0o0ihzrAfdSce7briyfm0NBYKHlDD6jUY=w75-h75-p-rp-mo-br100',
      clientName: 'Leo Melo',
      clientProve:
        'Gostaria de agradecer à Vox2You pela oportunidade de participar do curso de oratória. Desde o início, senti que a metodologia utilizada era muito prática e objetiva, o que facilitou a absorção do conteúdo. O ambiente colaborativo e os exercícios práticos de fala em público me ajudaram a vencer a timidez e a aprimorar minha comunicação em situações profissionais. A personalização dos feedbacks e o suporte contínuo dos professores foram diferenciais que realmente fizeram a diferença para mim. Sem dúvida, é um curso transformador para quem busca se destacar pela comunicação.',
      days: '2 meses atrás',
    },
    {
      imgGoogle: imgGoogle,
      imgURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjXEIvrUFjICWiqlybzF3AppPJ3QdbvvGKWrKxG41L8fl2efVOfC3g=w75-h75-p-rp-mo-ba2-br100',
      clientName: 'Maxine Lobato',
      clientProve:
        'Está sendo a melhor experiência da minha vida. Fui atendida pela Thaís e a paixão dela pela Vox e a forma como ela fez eu me sentir,fez total diferença para que eu me visualizasse no futuro, sendo a profissional que estou me tornando. E hoje eu estou muito feliz e com uma turma incrível. Gratidão Thaís pela oportunidade e por ter me apresentado a Vox 🙏',
      days: 'um mês atrás',
    },
    {
      imgGoogle: imgGoogle,
      imgURL:
        'https://lh3.googleusercontent.com/a/ACg8ocKg-03bg65miY9RfZDP3FLu7t3LmRG5_w_-hNgPZpPiGFlpdHw=w75-h75-p-rp-mo-br100',
      clientName: 'Antonia Aline',
      clientProve:
        'Excelente estrutura em Parauapebas, fiquei impressionado com a qualidade do conteúdo e o profissionalismo da equipe. Gostaria de destacar o atendimento excepcional da Thaís Barreto, que foi extremamente atenciosa e prestativa durante todo o processo. Recomendo a todos que buscam melhorar suas habilidades de comunicação!',
      days: '2 semanas atrás',
    },
    {
      imgGoogle: imgGoogle,
      imgURL:
        'https://lh3.googleusercontent.com/a/ACg8ocJETXF2NULnxgjbGk8MziKKwMK-DgGujpJZmpQyWkWedW-kkw=w75-h75-p-rp-mo-br100',
      clientName: 'Jose Elmar',
      clientProve:
        'Serei eternamente grato pelo aprendizado que eu tive, em todas as aulas saia renovado! Foi muito desafiador para mim. Agradeço o facilitador que me ajudou demais, estes curso será um divisor de águas na vida. Um dos melhores investimentos que já fiz na minha vida!.',
      days: '4 meses atrás',
    },
    {
      imgGoogle: imgGoogle,
      imgURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjXG8DvgOXQcBpPyDJ4quxoxDY2lIOvRmxZLHa_juLfJTdgFuxM=w75-h75-p-rp-mo-br100',
      clientName: 'Marianne Amaral Moreira (Marianne)',
      clientProve:
        'A vox2you foi a empresa que marcou e mudou minha vida totalmente, serei eternamente grata a todos de lá, principalmente a Thais Barreto por ter me dado todo o incentivo e apoio que eu precisava, pude criar coragem e enfrentar meus medos, sou a pessoa que sou hoje graças a vox2you! 🌷',
      days: 'um mês atrás',
    },
    {
      imgGoogle: imgGoogle,
      imgURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjUb0oDpxy1bMflEPyoVoP56KNhRqhznMGHZSHED7xi__ccGGNgWTQ=w75-h75-p-rp-mo-br100',
      clientName: 'Larissa Feitosa',
      clientProve:
        'Experiência incrível, Facilitadores totalmente preparados para melhor explicar sobre o assuntos, muitos receptivos, atendimento de qualidade desde consultores a administração e Direção da Vox2you, superou todas as minhas expectativas.. Muito aprendizado e conhecimento adquirido! 😍❤️',
      days: '5 meses atrás',
    },
    {
      imgGoogle: imgGoogle,
      imgURL:
        'https://lh3.googleusercontent.com/a-/ALV-UjVKo3wkaE1TBGKAWHtp4ejh1iYTs7vuw0tYGt7GI5ye64kyoL9vEQ=w75-h75-p-rp-mo-ba3-br100',
      clientName: 'Geovanna Sá',
      clientProve:
        'A Vox2You se destaca por oferecer cursos de oratória práticos e abrangentes, reconhecidos por ajudar os alunos a aprimorar suas habilidades de comunicação e ganhar confiança ao falar em público. Seus instrutores experientes e o feedback personalizado proporcionam um ambiente de aprendizado dinâmico e eficaz, garantindo que os alunos recebam suporte individualizado para alcançar seus objetivos.',
      days: '6 meses atrás',
    },
  ]

  return (
    <>
      <section className="bg-white">
        <div className="py-12 max-w-6xl mx-auto px-4 md:px-8">
          <div className="mx-auto">
            <div className="max-w-6xl mx-auto px-4 flex-wrap gap-x-12 justify-between items-center md:flex lg:flex-nowrap">
              <div className="max-w-6xl space-y-3">
                <h3 className="text-brandCyan uppercase text-sm font-semibold">
                  Google Review
                </h3>
                <div className="max-w-5xl mx-auto text-left">
                  <h2
                    className={`${montserrat.className} antialiased uppercase text-3xl font-semibold text-brandGray800 sm:text-4xl`}
                  >
                    O que os nossos alunos dizem{' '}
                    <HeroCardH1Span> sobre nós</HeroCardH1Span>
                  </h2>
                </div>
              </div>
              <div className="flex-none mt-12 text-white lg:mt-0">
                <ul className="grid grid-cols-1 gap-8 items-center justify-center">
                  <li>
                    <div className="border-t-4 border-t-brandYellow rounded-lg bg-white backdrop-blur-sm shadow-lg shadow-brandGray800/30 p-4">
                      <div className="text-center flex items-center">
                        <Image
                          sizes="100vh"
                          loading="lazy"
                          alt="Lead"
                          src={imgGoogle}
                          className="h-auto w-20"
                        />
                        <div className="text-left ml-4">
                          <h1 className="pb-1 text-xs font-bold capitalize text-brandGray800 sm:text-sm">
                            Google Avaliações
                          </h1>

                          <div className="pb-1 flex justify-start gap-0.5 text-brandYellow">
                            <p className="mr-2 text-sm font-semibold capitalize text-brandGray800">
                              5.0
                            </p>
                            <Star weight="fill" size={18} />
                            <Star weight="fill" size={18} />
                            <Star weight="fill" size={18} />
                            <Star weight="fill" size={18} />
                            <Star weight="fill" size={18} />
                          </div>
                          <p className="text-xs font-medium capitalize text-brandGray800 sm:text-sm">
                            39 avaliações
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 px-4 max-w-6xl [column-fill:_balance] sm:columns-2 sm:gap-6 lg:gap-8">
            {features.map((item, idx) => (
              <div className="mb-8 sm:break-inside-avoid" key={idx}>
                <blockquote className="rounded-lg bg-brandGray50/30 backdrop-blur-sm p-6 shadow-lg shadow-brandGray800/30 border border-brandGray800/10 sm:p-8">
                  <div className="flex items-center gap-4">
                    <Image
                      width={45}
                      height={45}
                      loading="lazy"
                      alt="Lead"
                      src={item.imgURL}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="mt-0.5 text-lg font-medium text-brandGray800">
                        {item.clientName}
                      </p>
                      <p className="mt-0.5 text-xs font-medium text-brandGray800/60">
                        {item.days}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 font-medium text-brandGray800">
                    {item.clientProve}
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <div className="flex justify-start gap-0.5 text-brandYellow">
                        <Star weight="fill" size={20} />
                        <Star weight="fill" size={20} />
                        <Star weight="fill" size={20} />
                        <Star weight="fill" size={20} />
                        <Star weight="fill" size={20} />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Image
                        width={600}
                        height={600}
                        loading="lazy"
                        alt="Lead"
                        src={item.imgGoogle}
                        className="h-auto w-10 rounded-full object-cover"
                      />
                    </div>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
          <div className="mx-auto max-w-fit px-4 pt-4 text-center sm:pt-12">
            <ButtonHome href="https://api.whatsapp.com/send?phone=5594981342011&text=Ol%C3%A1%20vim%20pelo%20site%20e%20quero%20mais%20informações%20sobre%20oratória">
              <ButtonHomeText>Quero mais informações</ButtonHomeText>
              <ButtonHomeFlex>
                <WhatsappLogo
                  className="h-5 w-5 sm:h-6 sm:w-6 fill-white drop-shadow-lg"
                  weight="fill"
                />
              </ButtonHomeFlex>
            </ButtonHome>
          </div>
        </div>
      </section>
    </>
  )
}
