import { ComponentProps } from 'react'

export interface ColorComponentProps {
  className: string
}

type BgBackgroundGradientProps = ComponentProps<'div'>

export function BgBackgroundGradient(props: BgBackgroundGradientProps) {
  return (
    <>
      <div
        className="bg-gradient-to-t from-transparent from-2% via-brandCyan to-brandYellow"
        {...props}
      />
    </>
  )
}

type BgBackgroundWhiteProps = ComponentProps<'div'>

export function BgBackgroundWhite(props: BgBackgroundWhiteProps) {
  return (
    <>
      <div
        className="bg-brandGray50/60 rounded-lg max-w-6xl mx-auto backdrop-blur-sm px-4 md:flex md:px-8"
        {...props}
      />
    </>
  )
}

type BgBackgroundBlackProps = ComponentProps<'div'>

export function BgBackgroundBlack(props: BgBackgroundBlackProps) {
  return (
    <>
      <div
        className="bg-gradient-to-tr backdrop-blur-sm from-brandYellow"
        {...props}
      />
    </>
  )
}
