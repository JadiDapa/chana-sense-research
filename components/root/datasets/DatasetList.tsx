import { Dataset, Media } from '@/payload-types'
import Image from 'next/image'
import React from 'react'

export default function DatasetList({ dataset }: { dataset: Dataset }) {
  return (
    <div className="w-full p-4 flex gap-6">
      <figure className="relative size-40">
        <Image
          src={(dataset.image as Media).url as string}
          alt=""
          fill
          className="object-cover object-center"
        />
      </figure>
      <div className="space-y-4">
        <p className="font-semibold text-xl">{dataset.title}</p>
        <p>{dataset.description}</p>
      </div>
    </div>
  )
}
