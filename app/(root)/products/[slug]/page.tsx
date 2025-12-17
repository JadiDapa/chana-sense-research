import MiddleHeader from "@/components/root/MiddleHeader";
import CardiacoreDetail from "@/components/root/products/cardiacore/CardiacoreDetail";
import ProductFeatures from "@/components/root/products/ProductFeatures";
import Image from "next/image";
import config from "@/payload.config";
import { getPayload } from "payload";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: "products",
    where: {
      slug: { equals: slug },
    },
    limit: 1,
  });

  const product = docs[0] ?? null;

  console.log(product);

  return (
    <>
      <MiddleHeader
        section="PRODUCT"
        title={product.title}
        description="Mobile phone-based technology that utilizes an AI model to detect precancerous cervical lesions using cervicography data."
        buttonText="Product Home Page"
      />
      <div className="  px-80 py-24">
        <figure className="relative aspect-video">
          <Image
            src={product.image.url}
            alt={product.title}
            fill
            className="object-contain object-center"
          />
        </figure>
      </div>

      <ProductFeatures features={product.features} />
      <CardiacoreDetail content={product.content} />
    </>
  );
}
