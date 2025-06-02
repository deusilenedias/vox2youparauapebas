import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { ButtonFloat } from './ButtonCta'

export function ButtonFloatWttp() {
  return (
    <>
      <ButtonFloat
        href={`https://wa.me/5594981342011?text=Olá+vim+pelo+site+e+gostaria+de+mais+informações`}
      >
        <WhatsappLogo
          className="h-8 w-8 fill-white drop-shadow-lg"
          weight="fill"
        />
      </ButtonFloat>
    </>
  )
}
