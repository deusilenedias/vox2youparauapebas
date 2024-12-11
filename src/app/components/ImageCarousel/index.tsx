'use client'

import { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import img1 from '../../../../public/alunos/turma1.jpg'
import img2 from '../../../../public/alunos/turma-1.jpeg'
import img4 from '../../../../public/alunos/turma-2.jpeg'
import img6 from '../../../../public/alunos/turma-alfa.jpeg'

export function ImageCarousel() {
  const slides = [
    {
      url: img1,
    },
    {
      url: img2,
    },
    {
      url: img4,
    },
    {
      url: img6,
    },
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)

  const updateCurrent = () => {
    if (!emblaApi || !emblaThumbsApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap())
  }

  const handlePrevious = () => {
    emblaApi?.scrollPrev()

    updateCurrent()
  }

  const handleNext = () => {
    emblaApi?.scrollNext()

    updateCurrent()
  }

  const handleThumbClick = (index: number) => {
    if (!emblaApi || !emblaThumbsApi) return
    emblaApi.scrollTo(index)

    updateCurrent()
  }

  return (
    <div className="p-4 space-y-8 container max-w-3xl mx-auto">
      <div className="relative">
        <button
          onClick={handlePrevious}
          className="h-8 w-8 rounded-full flex items-center justify-center bg-brandCyan absolute top-1/2 -translate-y-1/2 z-10 shadow-md left-4"
        >
          <ArrowLeft weight="fill" className="fill-brandGray50" />
        </button>
        <button
          onClick={handleNext}
          className="h-8 w-8 rounded-full flex items-center justify-center bg-brandCyan  absolute top-1/2 -translate-y-1/2 z-10 shadow-md right-4"
        >
          <ArrowRight weight="fill" className="fill-brandGray50" />
        </button>
        <div
          className="overflow-hidden shadow-*-lg shadow-brandCyan rounded-lg"
          ref={emblaRef}
        >
          <div className="flex">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] aspect-video w-full mx-4 overflow-hidden"
              >
                <Image
                  src={slide.url}
                  alt="sample"
                  className="w-full h-full object-cover rounded-lg"
                  sizes="100vw"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => handleThumbClick(index)}
            className={`w-3 h-3 rounded-full ${index === selectedIndex ? 'bg-brandCyan' : 'bg-brandGray100'}`}
          />
        ))}
      </div>

      <div className="overflow-hidden rounded-lg" ref={emblaThumbsRef}>
        <div className="flex gap-3">
          {slides.map((thumb, index) => (
            <button
              key={index}
              onClick={() => handleThumbClick(index)}
              className="flex-[0_0_28%]"
            >
              <div
                className="aspect-video w-full flex items-center justify-center text-xl font-bold"
                style={{
                  opacity: index === selectedIndex ? 1 : 0.6,
                }}
              >
                <Image
                  src={thumb.url}
                  alt="thumbnail"
                  className="object-cover rounded-lg w-auto h-40"
                  sizes="100vw"
                  loading="lazy"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
