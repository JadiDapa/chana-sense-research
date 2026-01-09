import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default async function AboutSection() {
  const about = await getAboutContent() // Server fetch

  return (
    <section className="w-full  px-6 py-20 lg:px-44">
      {/* TITLE */}
      <h2 className="mb-6 text-center text-3xl font-bold text-primary lg:mb-12 lg:text-4xl">
        {about.title}
      </h2>

      {/* TOP SECTION */}
      <div className="mb-20 flex flex-col  gap-6 lg:flex-row lg:gap-20">
        {/* LEFT IMAGE */}
        <div className="space-y-4">
          <div className="flex lg:flex-row flex-col gap-4">
            <div className="relative size-80 overflow-hidden rounded-lg lg:size-52">
              <Image
                src={about.image_1}
                alt={about.title}
                fill
                className="rounded-lg object-contain"
              />
            </div>
            <div className="relative size-80 overflow-hidden rounded-lg lg:size-52">
              <Image
                src={about.image_4}
                alt={about.title}
                fill
                className="rounded-lg object-contain"
              />
            </div>
          </div>

          <div className="relative w-80 h-40 overflow-hidden rounded-lg lg:w-120 lg:h-52">
            <Image
              src={about.image_5}
              alt={about.title}
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div>
          <p className="mb-6 text-sm leading-relaxed text-gray-700 lg:text-xl">
            {about.description_1}
          </p>

          <p className="mb-6 text-sm leading-relaxed text-gray-600 lg:text-base">
            {about.description_2}
          </p>

          {/* LINKS */}
          <div className="flex gap-10 font-medium text-primary">
            <a href={about.link_1.href} className="flex items-center gap-2 hover:opacity-70">
              {about.link_1.label} <ArrowRight className="h-4 w-4" />
            </a>
            <a href={about.link_2.href} className="flex items-center gap-2 hover:opacity-70">
              {about.link_2.label} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* SDG SECTION */}
      <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
        {/* LEFT TEXT BLOCK */}
        <div className="max-w-md">
          <p className="mb-6 text-xl leading-relaxed font-medium text-gray-800">
            {about.sdg_text_1}
          </p>

          <p className="text-sm leading-relaxed text-gray-500">{about.sdg_text_2}</p>
        </div>

        {/* RIGHT SDG CARDS */}
        <div className="flex justify-center gap-4 lg:justify-start lg:gap-6">
          {/* SDG 3 */}
          <div className="relative size-40 overflow-hidden rounded-lg shadow-md lg:size-80">
            <Image
              src={about.sdg_image_1}
              alt="SDG 3 Good Health & Well-being"
              fill
              className="object-cover"
            />
          </div>

          {/* SDG 9 */}
          <div className="relative size-40 overflow-hidden rounded-lg shadow-md lg:size-80">
            <Image
              src={about.sdg_image_2}
              alt="SDG 9 Industry Innovation Infrastructure"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

async function getAboutContent() {
  return {
    title: 'About Us',
    image_1: '/images/about-1.png',
    description_1:
      'Channa Sense Research is a leading center of excellence initiated by Sriwijaya State Polytechnic, Indonesia. The center is dedicated to monitoring and controlling the Channa Sense environment for snakehead fish spawning in South Sumatra through interdisciplinary research collaboration and innovation.',
    description_2:
      'Channa Sense Research aims to develop AI-based technology solutions for more efficient snakehead fish development and cultivation, accessible to MSMEs, farmers, livestock breeders, and community groups through an integrated website platform.',
    link_1: { label: 'Research Team', href: '/about/research-team' },
    link_2: { label: 'Infrastructure', href: '/about/infrastructure' },
    sdg_text_1:
      'The Chana Sense Research Center of Excellence supports SDG 14 in marine ecosystems and develops AI-based solutions for the cultivation of Channa Sense and Channa Striata snakehead fish.',
    sdg_text_2:
      'Furthermore, the center contributes to SDG 9 (Industry, Innovation, and Infrastructure) by driving technological innovation through intelligent systems research, promoting sustainable freshwater fish farming infrastructure, and collaborating with industry to accelerate the adoption of cutting-edge technologies.',
    sdg_image_1: '/images/about-2.jpeg',
    sdg_image_2: 'https://isysrg.com/_next/image?url=%2Fassets%2Fimages%2FE_WEB_09.png&w=640&q=75',
    image_4: '/images/about-2.png',
    image_5: '/images/about-3.png',
  }
}
