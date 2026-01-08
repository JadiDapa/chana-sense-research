import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import DatasetCard from './DatasetCard'

export default async function DatasetsSection() {
  const contents = await getDatasetContents()

  return (
    <section className="w-full  text-black py-24 px-6 md:px-16 lg:px-40">
      <h2 className="text-primary text-4xl font-bold mb-4">{contents.title}</h2>
      <p className="text-gray-600 max-w-3xl mb-12">{contents.description}</p>

      <div className="flex flex-wrap gap-6 mb-12">
        {contents.datasets.map((item, i) => (
          <DatasetCard key={i} {...item} />
        ))}
      </div>

      <Link href={contents.button.link} className="">
        <button className="flex items-center  gap-1 text-primary cursor-pointer font-medium hover:opacity-80 transition">
          {contents.button.text} <ChevronRight size={18} />
        </button>
      </Link>
    </section>
  )
}

async function getDatasetContents() {
  return {
    title: 'Datasets',
    description:
      'Explore a curated collection of medical imaging and signal datasets designed to support research in medical interpretation and analysis.',
    datasets: [],
    button: {
      text: 'Explore more datasets',
      link: '/datasets',
    },
  }
}
