'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import DatasetCard from './DatasetCard'
import { Media } from '@/payload-types'

export default function DatasetCarousel({
  items,
  autoplayDelay = 2000,
  className = '',
}: {
  items: { image: number | Media; name: string; id?: string | null | undefined }[]
  autoplayDelay?: number
  className?: string
}) {
  const autoplay = useRef(Autoplay({ delay: autoplayDelay, stopOnInteraction: true }))

  return (
    <div className={className}>
      <Carousel
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        className="w-full"
      >
        <CarouselContent>
          {items.map((item, i) => (
            <CarouselItem key={i} className="flex basis-1/4 justify-center">
              <DatasetCard dataset={item} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
