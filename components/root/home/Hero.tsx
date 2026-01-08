import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default async function HeroSection() {
  const hero = await getHeroContent()

  return (
    <main className="relative min-h-screen w-full bg-cover bg-center">
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-linear-to-br from-primary to-amber-200"></div>

      {/* Background Image */}
      {/* <div className="absolute inset-0">
        <Image src={hero.image} alt={hero.title} fill className="object-cover object-center" />
      </div> */}

      {/* Content */}
      <div className="relative z-20 mx-auto space-y-6 px-6 py-24  lg:px-44 lg:py-44 lg:pt-64">
        <h1 className="text-5xl font-medium md:text-8xl text-white">
          {hero.title} <span className="">.</span>
        </h1>

        <p className="max-w-6xl text-sm leading-relaxed lg:text-xl">{hero.description}</p>

        <div className="flex gap-4 pt-4">
          <Button className="rounded-md bg-primary px-6 py-3 font-medium hover:bg-primary lg:px-12 lg:py-6">
            <Link href={hero.primaryButton.href}>{hero.primaryButton.label}</Link>
          </Button>

          <Button className="rounded-md bg-white  px-6 py-3 font-medium text-black hover:bg-gray-200 lg:px-12 lg:py-6">
            <Link href={hero.secondaryButton.href}>{hero.secondaryButton.label}</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

async function getHeroContent() {
  return {
    title: 'We are Channa Sense Research',
    description:
      'Channa Sense Research aims to develop AI-based technology solutions for the development and cultivation of freshwater fish that are more efficient, ethical, and can be used by MSMEs, farmers, livestock breeders, and community organizations through an integrated website platform.',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1169&auto=format&fit=crop',
    primaryButton: { label: 'About Us', href: '/about/research-team' },
    secondaryButton: { label: 'View Product', href: '/products/teleotiva' },
  }
}
