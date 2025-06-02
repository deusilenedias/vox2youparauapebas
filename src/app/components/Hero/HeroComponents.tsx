import { ComponentProps } from 'react'

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
      <div className="mx-auto max-w-6xl justify-between px-4 md:flex sm:px-5">
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
      className="antialiased mt-0 sm:mt-4 pb-2 text-2xl font-medium text-white drop-shadow-lg sm:text-3xl"
      {...props}
    />
  )
}

type Span1Props = ComponentProps<'span'>

export function Span1(props: Span1Props) {
  return <span className="font-extrabold text-brandYellow" {...props} />
}

type Span2Props = ComponentProps<'span'>

export function Span2(props: Span2Props) {
  return <span className="font-extrabold text-cyan-700" {...props} />
}

type Span3Props = ComponentProps<'span'>

export function Span3(props: Span3Props) {
  return (
    <span className="bg-brandCyan font-extrabold text-brandGray50" {...props} />
  )
}

type Span4Props = ComponentProps<'span'>

export function Span4(props: Span4Props) {
  return (
    <span
      className="bg-brandYellow text-3xl font-extrabold text-brandGray800"
      {...props}
    />
  )
}

type Span5Props = ComponentProps<'span'>

export function Span5(props: Span5Props) {
  return (
    <span
      className="bg-brandCyan text-3xl font-extrabold text-brandGray50"
      {...props}
    />
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
  return <span className="text-4xl font-black" {...props} />
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
      className="pb-1 pt-4 text-sm leading-relaxed text-brandGray800 font-medium text-center sm:text-left md:text-lg"
      {...props}
    />
  )
}
type HeroCardP4Props = ComponentProps<'p'>

export function HeroCardP4(props: HeroCardP4Props) {
  return (
    <p
      className="text-sm leading-relaxed text-brandGray800 font-bold text-center sm:text-left md:text-lg"
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
        className="p-2 rounded-lg mx-auto sm:mx-0 text-center sm:text-left bg-gradient-to-l backdrop-blur-lg max-w-fit"
        {...props}
      />
    </>
  )
}
