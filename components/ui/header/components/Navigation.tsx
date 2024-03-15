import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'

interface NavigationProps {
  UrlPages: {
    linkTitle: string
    linkPath: string
  }[]
}

const Navigation: React.FC<NavigationProps> = ({ UrlPages }) => {
  const pathName = usePathname()
  const { t } = useTranslation('header')

  return (
    <nav className="flex items-center gap-10  max-sm:hidden">
      {UrlPages.map((item, index) => (
        <Link key={index} href={item.linkPath} className={`rounded-lg pt-1.5 text-[16px] font-bold text-[#b4b4b4] transition-all hover:text-white/80 ${item.linkPath === pathName ? 'text-white' : ''}`}>
          {t(item?.linkTitle)}
        </Link>
      ))}
    </nav>
  )
}

export default Navigation
