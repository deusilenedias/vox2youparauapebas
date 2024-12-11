import { Note, Smiley, Star } from '@phosphor-icons/react/dist/ssr'
import { StatsSection } from './StatsComponents'

export function Stats() {
  const features = [
    {
      icon: <Smiley size={44} weight="fill" />,
      title: 'Vidas Tranformadas',
      head: 'Mais de 80.000',
    },
    {
      icon: <Note size={44} weight="fill" />,
      title: 'Unidades',
      head: 'Mais de 204',
    },
    {
      icon: <Star size={44} weight="fill" />,
      title: 'no NPS*',
      head: 'Nota 94.6',
    },
  ]

  return (
    <>
      <StatsSection>
        <div className="mt-16 sm:mt-4">
          <dl className="grid grid-cols-1 gap-10 rounded-lg p-8 px-16 py-8 bg-brandGray50/30 backdrop-blur-lg shadow-*-lg shadow-brandGray800/20 sm:grid-cols-3">
            {features.map((item, idx) => (
              <div key={idx} className="flex flex-col text-center">
                <dt className="mx-auto justify-center pb-4">
                  <span className="h-8 w-8 drop-shadow-lg text-white">
                    {item.icon}
                  </span>
                </dt>
                <dd className="text-2xl font-extrabold text-brandYellow drop-shadow-lg md:text-2xl">
                  {item.head}
                </dd>
                <dt className="order-last text-lg font-bold text-white sm:text-sm drop-shadow-lg">
                  {item.title}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </StatsSection>
    </>
  )
}
