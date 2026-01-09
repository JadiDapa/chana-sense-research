import config from '@/payload.config'
import { getPayload } from 'payload'
import LeftHeader from '@/components/root/LeftHeader'
import { Button } from '@payloadcms/ui'
import { CheckCircle, Link } from 'lucide-react'
import Image from 'next/image'
import { Media, Product } from '@/payload-types'

export default async function ProductsPage() {
  const payload = await getPayload({ config })

  const { docs: products } = await payload.find({
    collection: 'products',
  })

  return (
    <>
      <LeftHeader section="PRODUCT" title={'ALL PRODUCT'} />
      <div className="px-44 py-24 space-y-6">
        <p className="text-xl text-primary mb-3">List of Products</p>
        {products.map((product) => (
          <ProductContent key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

function ProductContent({ product }: { product: Product }) {
  return (
    <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
      {/* Image */}
      <div className="flex justify-center gap-6">
        <div className="relative h-40 w-full lg:h-115 lg:w-175">
          <Image
            src={(product.image as Media).url as string}
            alt="Product"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Text */}
      <div>
        <p className="mb-6 text-sm leading-relaxed text-gray-700 lg:text-lg">
          {product.description}
        </p>

        <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {product.features.map((f) => (
            <div key={f.id} className="flex items-center gap-2 lg:items-start">
              <CheckCircle className="mt-1 size-4 text-primary lg:size-5" />
              <span className="text-sm text-gray-800 lg:text-base">{f.feature}</span>
            </div>
          ))}
        </div>
        <Link href={`/products/${product.slug}`}>
          <Button className="rounded-lg border bg-white border-gray-300   px-6 py-3 text-gray-700 hover:bg-gray-100 lg:mt-4 lg:px-12 lg:py-6">
            More details
          </Button>
        </Link>
      </div>
    </div>
  )
}
