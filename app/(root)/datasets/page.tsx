import config from '@/payload.config'
import { getPayload } from 'payload'
import LeftHeader from '@/components/root/LeftHeader'
import DatasetList from '@/components/root/datasets/DatasetList'

export default async function DatasetDetailPage() {
  const payload = await getPayload({ config })

  const { docs: datasets } = await payload.find({
    collection: 'datasets',
  })

  return (
    <>
      <LeftHeader section="DATASET" title={'ALL DATASET'} />
      <div className="px-44 py-24">
        <p>List of Datasets</p>
        {datasets.map((set) => (
          <DatasetList key={set.id} dataset={set} />
        ))}
      </div>
    </>
  )
}
