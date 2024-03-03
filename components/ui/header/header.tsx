'use client'

import React, { useState } from 'react'

import { cn } from '@/lib/utils'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { UrlPages } from '@/components/ui/header/lib/url-pages'

import UsaIcon from '@/assets/languages/usa.png'
import RusIcon from '@/assets/languages/russia.png'
import GerIcon from '@/assets/languages/german.png'
import UzbIcon from '@/assets/languages/uzbekistan.png'

const languages = [
  { code: 'us', name: 'English', image: UsaIcon },
  { code: 'ru', name: 'Russian', image: RusIcon },
  { code: 'de', name: 'German', image: GerIcon },
  { code: 'uz', name: 'Uzbek', image: UzbIcon },
]

const Header = () => {
  const pathName = usePathname()

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

  const handleLanguageChange = () => {
    const currentIndex = languages.findIndex((lang) => lang.code === selectedLanguage.code)
    const nextIndex = (currentIndex + 1) % languages.length
    setSelectedLanguage(languages[nextIndex])
  }

  return (
    <div className={'w-full fixed left-0 right-0 bg-[#0a0c0ccc] h-[4rem] flex items-center justify-center z-10 top-0'} style={{ backdropFilter: 'blur(6px)' }}>
      <header className={'container'}>
        <div className={'flex items-center justify-between'}>
          <div>
            <h1 className={'text-white text-[1.25rem] font-bold main-text-animation'}>
              <Link href={'/'} className={'flex items-center gap-1'}>
                linkvertex.io
              </Link>
            </h1>
          </div>
          <div className={'flex items-center gap-3'}>
            <nav>
              {UrlPages?.map((item: { linkTitle: string; linkPath: string }, index) => (
                <Link key={index} href={item.linkPath} className={cn('hover:text-white/80 text-[#b4b4b4] transition-all text-sm px-4 py-1.5 rounded-lg', item.linkPath === pathName && 'transition-all text-white underline pb-1')}>
                  {item.linkTitle}
                </Link>
              ))}
            </nav>
          </div>
          <div className={'flex items-center gap-2'}>
            <button onClick={handleLanguageChange}>
              <Image src={selectedLanguage.image} alt={selectedLanguage.name} width={35} height={35} className={'!bg-cover'} />
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
