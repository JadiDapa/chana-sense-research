import { Media } from '@/payload-types'
import Image from 'next/image'

interface DatasetCardProps {
  dataset: { image: number | Media; name: string; id?: string | null | undefined }
}

export default function DatasetCard({ dataset }: DatasetCardProps) {
  return (
    <div className="w-full max-w-140">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={(dataset.image as Media).url as string}
          alt=""
          className="object-contain object-bottom"
          fill
        />
      </div>
    </div>
  )
}
