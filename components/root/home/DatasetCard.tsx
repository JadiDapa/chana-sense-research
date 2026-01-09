import { Dataset, Media } from '@/payload-types'
import Image from 'next/image'

export default function DatasetCard({ dataset }: { dataset: Dataset }) {
  return (
    <div className="flex items-center gap-4 border rounded-xl shadow-sm p-4 w-full md:w-[32%] hover:shadow-md transition  ">
      <div className="min-w-18 h-18 rounded-md overflow-hidden bg-gray-100">
        <Image
          src={(dataset.image as Media).url as string}
          width={80}
          height={80}
          alt={dataset.title}
          className="object-cover w-full h-full"
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-800">{dataset.title}</h3>
        <p className="text-gray-600 text-sm mt-1">{dataset.description}</p>
      </div>
    </div>
  )
}
