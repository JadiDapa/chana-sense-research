'use client'

import Image from 'next/image'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { useIsMobile } from '@/hooks/use-mobile'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { slugify } from 'payload/shared'
import { Dataset, Product } from '@/payload-types'

export default function NavbarContent({
  products,
  datasets,
}: {
  products: Product[]
  datasets: Dataset[]
}) {
  const isMobile = useIsMobile()
  const pathname = usePathname()
  const [isFixed, setIsFixed] = useState(false)

  const menu = [
    {
      name: 'About Us',
      child: [
        { name: 'Research Team', link: '/about/research-team' },
        { name: 'Infrastructure', link: '/about/infrastructure' },
      ],
    },
    {
      name: 'Products',
      child: products.map((p) => ({
        name: p.title,
        link: `/products/${slugify(p.title)}`,
      })),
    },
    {
      name: 'Datasets',
      child: [
        ...datasets.map((p) => ({
          name: p.title,
          link: `/datasets/${slugify(p.title)}`,
        })),
        { name: 'All Datasets', link: '/datasets' },
      ],
    },

    {
      name: 'Publication',
      child: [
        { name: 'International Journals', link: '/publications/journals' },
        {
          name: 'International Conference (Proceedings)',
          link: '/publications/proceedings',
        },
        {
          name: 'International Property Rights (IPR)',
          link: '/publications/ipr',
        },
        { name: 'Books', link: '/publications/books' },
      ],
    },
    {
      name: 'Communication',
      child: [
        { name: 'Social Media', link: '/communications/social-media' },
        { name: 'Mass Media', link: '/communications/mass-media' },
        { name: 'Activities', link: '/communications/activities' },
      ],
    },
  ]

  // Only apply scroll behavior on "/"
  useEffect(() => {
    if (pathname !== '/') {
      setIsFixed(true)
      return
    }

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  return (
    <NavigationMenu
      viewport={isMobile}
      className={`z-50 max-w-none w-full border-b shadow-md border-white/10 bg-white/60 backdrop-blur transition-all duration-300 ${isFixed ? 'fixed left-0  top-0' : 'absolute left-0 lg:top-20'}`}
    >
      <div className="flex items-center justify-between px-6 lg:px-44 w-full">
        {/* LEFT SIDE — Logos */}
        <div className="flex items-center gap-6">
          {/* Uni Logo */}
          <Link href="/" className="flex items-center gap-6">
            <figure className="relative size-14">
              <Image
                src="/images/logo-polsri.png"
                alt="Polsri Logo"
                fill
                className="object-contain"
              />
            </figure>

            <figure className="relative h-24 w-30">
              <Image
                src="/images/logo.png"
                alt="Polsri Logo"
                fill
                className="object-contain object-center"
              />
            </figure>
          </Link>
        </div>

        {/* RIGHT SIDE — Menu */}
        <NavigationMenuList className="hidden items-center w-full gap-0 lg:flex">
          {menu.map((item, index) => (
            <NavigationMenuItem
              key={index}
              className="flex cursor-pointer items-center gap-2 border border-white/10 transition hover:bg-transparent"
            >
              <NavigationMenuTrigger className="h-18 rounded-none bg-transparent px-6 text-base font-medium text-foreground hover:bg-transparent">
                {item.name}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-0">
                <ul className="grid w-80 gap-2  p-4 text-foreground">
                  {item.child.map((child, childIndex) => (
                    <NavigationMenuLink
                      key={childIndex}
                      href={child.link}
                      asChild
                      className="p-4 text-lg"
                    >
                      <Link href={child.link}>{child.name}</Link>
                    </NavigationMenuLink>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  )
}
