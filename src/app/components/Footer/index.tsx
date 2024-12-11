import Image from 'next/image'
import LogoVox from '../../../../public/logo-vox-colorida.webp'
import Link from 'next/link'
import { InstagramLogo, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

export function Footer() {
  return (
    <>
      <footer className="bg-brandGray800">
        <div className="relative">
          <div className="w-full h-96 border-t-8 border-b-8 border-b-brandYellow border-t-brandCyan bg-gray-300 overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.389145860448!2d-49.88682242519803!3d-6.078149493907968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92dd5100140bd00f%3A0xaec63eb20f56f61d!2sVox2You%20Parauapebas!5e0!3m2!1spt-BR!2sbr!4v1733949387088!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              className="absolute inset-0 w-full"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-center text-teal-600">
            <Image
              alt="Logo"
              sizes="100vh"
              loading="lazy"
              src={LogoVox}
              className="w-48 sm:mx-auto"
            />
          </div>
          {/* 
          <p className="py-4 mx-auto max-w-md text-center leading-relaxed text-brandGray50">
            A Maior Escola de Oratória do Brasil
          </p> */}

          <div className="pt-6">
            <div className="py-4 mx-auto max-w-fit bg-brandGray50/5 backdrop-blur-sm shadow-*-lg shadow-brandGray800/20 relative rounded-lg">
              <div className="max-w-lg px-6 text-center">
                <ul>
                  <li>
                    <Link
                      href="https://maps.app.goo.gl/wTqio6aLj8wAjmKP9"
                      target="_blank"
                    >
                      <p className="font-semibold text-brandGray50">Endereço</p>
                      <p className="text-xs text-brandGray50">
                        R. Rio Branco, 219 - Beira Rio, Parauapebas - PA,
                        68515-000
                      </p>
                    </Link>
                    <Link href="https://api.whatsapp.com/send?phone=5594981342011&text=Ol%C3%A1%20vim%20pelo%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20orat%C3%B3ria">
                      <p className="font-semibold pt-2 text-brandGray50">
                        Whatsapp
                      </p>
                      <p className="text-xs text-brandGray50">
                        (094) 98134-2011
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <ul className="pt-4 flex justify-center gap-6">
            <li>
              <Link
                href="https://www.instagram.com/vox2you.parauapebaspa/"
                target="_blank"
                className="text-brandCyan transition hover:text-brandCyan/75"
              >
                <span className="sr-only">Instagram</span>
                <InstagramLogo size={32} weight="fill" />
              </Link>
            </li>

            <li>
              <Link
                href="https://api.whatsapp.com/send?phone=5594981342011&text=Ol%C3%A1%20vim%20pelo%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20orat%C3%B3ria"
                className="text-brandCyan transition hover:text-brandCyan/75"
              >
                <span className="sr-only">Whatsapp</span>
                <WhatsappLogo size={32} weight="fill" />
              </Link>
            </li>
          </ul>

          <ul className="pt-6 flex flex-wrap justify-center gap-6 text-sm">
            <li>
              <Link
                href="/politicas/avisolegal"
                target="_blank"
                className="text-brandGray100 transition hover:text-brandGray100/75"
              >
                Aviso Legal
              </Link>
            </li>

            <li>
              <Link
                href="/politicas/termosecondicoes"
                target="_blank"
                className="text-brandGray100 transition hover:text-brandGray100/75"
              >
                Termos de Uso
              </Link>
            </li>

            <li>
              <Link
                href="/politicas/politicadeprivacidade"
                target="_blank"
                className="text-brandGray100 transition hover:text-brandGray100/75"
              >
                Política de Privacidade
              </Link>
            </li>
          </ul>

          <p className="text-brandGray100 pt-6 text-center text-sm">
            CNPJ: 53.382.442/0001-06 - Vox2you Parauapebas - Copyright 2024 ©
            Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  )
}
