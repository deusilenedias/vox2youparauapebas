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

type BgBackgroundBlackProps = ComponentProps<'div'>

export function BgBackgroundBlack(props: BgBackgroundBlackProps) {
  return (
    <>
      <div className="bg-black/60 backdrop-blur-md" {...props} />
    </>
  )
}
