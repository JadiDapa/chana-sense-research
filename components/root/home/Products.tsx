import { getPayload } from 'payload'
import config from '@/payload.config'
import ProductsTabs from './ProductTabs'

export default async function ProductsSection() {
  const product = await getProductsContent()

  const payload = await getPayload({ config })

  const { docs: products } = await payload.find({
    collection: 'products', // make sure slug = "products"
    limit: 3,
  })

  return (
    <section className="w-full  px-6 py-20 lg:px-40">
      <div className="mb-10 text-center">
        <h3 className="text-2xl lg:text-3xl font-bold text-primary">{product.title}</h3>
        <h2 className="mt-2 text-4xl font-light lg:text-5xl">{product.subtitle}</h2>
      </div>
      <ProductsTabs products={products} />
    </section>
  )
}

async function getProductsContent() {
  return {
    title: 'Our Products',
    subtitle: 'AI Technology for Channa Sense Cultivation',
  }
}
