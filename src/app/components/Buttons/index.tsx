import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { ButtonFloat } from './ButtonCta'

export function ButtonFloatWttp() {
  return (
    <>
      <ButtonFloat href="https://api.whatsapp.com/send?phone=5594984481297&text=Ol%C3%A1%20vim%20pelo%20site%20e%20quero%20mais%20informações%20sobre%20oratória">
        <WhatsappLogo
          className="h-8 w-8 fill-white drop-shadow-lg"
          weight="fill"
        />
      </ButtonFloat>
    </>
  )
}
