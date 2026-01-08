import config from '@/payload.config'
import { getPayload } from 'payload'
import LeftHeader from '@/components/root/LeftHeader'
import DatasetCarousel from '@/components/root/datasets/DatasetCarousel'
import DatasetDescription from '@/components/root/datasets/DatasetDescription'
import PreviewLink from '@/components/root/datasets/PreviewLink'

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
        description="The Research Resource for Echocardiography"
        origin="RSUP Dr. Mohammad Hoesin Palembang"
        type="Image"
        records="300"
        license="Copyright ISysRG"
      />
      <PreviewLink url="https://isysrg.com/datasets/infant-fetal-dataset" />
    </>
  )
}
