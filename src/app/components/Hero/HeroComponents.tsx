import { ComponentProps } from 'react'
import { playfair_display } from '@/app/fonts'

export interface HeroComponents {
  className: string
}

type HeroSectionRootProps = ComponentProps<'section'>

export function HeroSectionRoot(props: HeroSectionRootProps) {
  return <section className="relative h-screen overflow-hidden" {...props} />
}

type HeroSectionProps = ComponentProps<'div'>

export function HeroSection(props: HeroSectionProps) {
  return (
    <section className="hero-overlay md:bg-bgDesktop lg:bgDesktop hero min-h-min bg-bgMobile bg-cover bg-fixed bg-center bg-no-repeat sm:bg-bgDesktop sm:bg-cover md:bg-cover lg:bg-cover">
      <div
        className="hero-overlay bg-opacity-0 bg-gradient-to-r from-black/5 from-5%"
        {...props}
      />
    </section>
  )
}

type HeroPropertyProps = ComponentProps<'div'>

export function HeroProperty(props: HeroPropertyProps) {
  return (
    <div className="mt-60 pt-8 sm:my-16 sm:py-8">
      <div className="mx-auto max-w-screen-xl justify-between px-4 md:flex md:px-8">
        <div className="max-w-2xl space-y-4" {...props} />
      </div>
    </div>
  )
}

type HeroCardProps = ComponentProps<'div'>

export function HeroCard(props: HeroCardProps) {
  return (
    <div className="sm:bg-transparent sm:backdrop-blur-none max-w-fit card-compact h-auto w-full min-w-full">
      <div className="card-body" {...props} />
    </div>
  )
}

type HeroCardTextProps = ComponentProps<'div'>

export function HeroCardText(props: HeroCardTextProps) {
  return <div className="text-center sm:text-left" {...props} />
}

type HeroCardH1Props = ComponentProps<'h1'>

export function HeroCardH1(props: HeroCardH1Props) {
  return (
    <h1
      className={`${playfair_display.className} antialiased mt-0 sm:mt-4 pb-2 text-3xl italic capitalize font-medium text-white drop-shadow-lg sm:text-4xl`}
      {...props}
    />
  )
}

type HeroCardH1SpanProps = ComponentProps<'span'>

export function HeroCardH1Span(props: HeroCardH1SpanProps) {
  return (
    <span className="bg-clip-text font-semibold text-brandYellow" {...props} />
  )
}

type HeroCardH2SpanProps = ComponentProps<'span'>

export function HeroCardH2Span(props: HeroCardH2SpanProps) {
  return (
    <span className="bg-clip-text font-semibold text-brandCyan" {...props} />
  )
}

type HeroCardP1Props = ComponentProps<'p'>

export function HeroCardP1(props: HeroCardP1Props) {
  return (
    <p
      className="mt-4 pb-4 text-sm leading-relaxed text-white md:text-xl"
      {...props}
    />
  )
}

type HeroCardP1Span1Props = ComponentProps<'span'>

export function HeroCardP1Span1(props: HeroCardP1Span1Props) {
  return <span className="line-through text-zinc-300" {...props} />
}

type HeroCardP1Span2Props = ComponentProps<'span'>

export function HeroCardP1Span2(props: HeroCardP1Span2Props) {
  return (
    <span
      className="text-brandVendaMaisComANeideFive text-4xl font-black"
      {...props}
    />
  )
}

type HeroCardP2Props = ComponentProps<'p'>

export function HeroCardP2(props: HeroCardP2Props) {
  return (
    <p
      className="pb-1 pt-4 text-sm leading-relaxed text-brandGray50 text-center sm:text-left md:text-lg"
      {...props}
    />
  )
}
type HeroCardP3Props = ComponentProps<'p'>

export function HeroCardP3(props: HeroCardP3Props) {
  return (
    <p
      className="pb-1 pt-4 text-sm leading-relaxed text-brandGray800 text-center sm:text-left md:text-lg"
      {...props}
    />
  )
}

type HeroImgPropertyProps = ComponentProps<'div'>

export function HeroImgProperty(props: HeroImgPropertyProps) {
  return (
    <>
      <div
        className="flex justify-center sm:flex-none sm:justify-start"
        {...props}
      />
    </>
  )
}

type HeroCardBannerProps = ComponentProps<'div'>

export function HeroCardBanner(props: HeroCardBannerProps) {
  return (
    <>
      <div
        className="p-2 rounded-lg mx-auto sm:mx-0 text-center sm:text-left bg-gradient-to-l from-brandVendaMaisComANeideOne/60 to-brandVendaMaisComANeideTwo/60 backdrop-blur-lg max-w-fit"
        {...props}
      />
    </>
  )
}
