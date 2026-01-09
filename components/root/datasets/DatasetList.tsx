import { Dataset, Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function DatasetList({ dataset }: { dataset: Dataset }) {
  return (
    <Link
      href={`/datasets/${dataset.slug}`}
      className="w-full p-4 flex gap-6 border-2 rounded-lg hover:bg-primary/5 transition"
    >
      <figure className="relative size-32 rounded-md overflow-hidden">
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
    </Link>
  )
}
