import config from '@/payload.config'
import { getPayload } from 'payload'
import LeftHeader from '@/components/root/LeftHeader'
import DatasetCarousel from '@/components/root/datasets/DatasetCarousel'
import PreviewLink from '@/components/root/datasets/PreviewLink'
import DatasetDescription from '@/components/root/datasets/DatasetDescription'

export default async function DatasetDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'datasets',
    where: {
      slug: { equals: slug },
    },
    limit: 1,
  })

  const dataset = docs[0] ?? null

  return (
    <>
      <LeftHeader section="DATASET" title={dataset.title} />
      <div className="px-44 py-24">
        <DatasetCarousel items={dataset.dataset} />
      </div>
      <DatasetDescription
        description={dataset.description}
        origin={dataset.origin}
        type={dataset.type}
        records={dataset.records}
        license={dataset.license}
      />
      <PreviewLink url={dataset.url} />
    </>
  )
}
