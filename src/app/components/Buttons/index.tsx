import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { ButtonFloat } from './ButtonCta'

export function ButtonFloatWttp() {
  return (
    <>
      <ButtonFloat href="#">
        <WhatsappLogo
          className="h-8 w-8 fill-white drop-shadow-lg"
          weight="fill"
        />
      </ButtonFloat>
    </>
  )
}
