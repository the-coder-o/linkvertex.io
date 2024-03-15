'use client'

import React, { useEffect, useState } from 'react'

import Link from 'next/link'

import { UrlPages } from '@/components/ui/header/lib/url-pages'

import Navigation from '@/components/ui/header/components/Navigation'
import { UserControls } from '@/components/ui/header/components/UserControls'
import { LanguageProvider, LanguageSwitcher } from '@/components/ui/header/components/LanguageSwitcher'

import UsaIcon from '@/assets/languages/usa.png'
import RusIcon from '@/assets/languages/russia.png'
import GerIcon from '@/assets/languages/german.png'
import UzbIcon from '@/assets/languages/uzbekistan.png'
import { cn } from '@/lib/utils'

const languages = [
  { code: 'en', name: 'English', image: UsaIcon },
  { code: 'ru', name: 'Russian', image: RusIcon },
  { code: 'ge', name: 'German', image: GerIcon },
  { code: 'uz', name: 'Uzbek', image: UzbIcon },
]

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollThreshold = 100

      setHasScrolled(scrollTop > scrollThreshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className={cn("'w-full fixed left-0 right-0 top-0 z-[999999] flex h-[4rem] items-center justify-center", hasScrolled ? 'bg-black/40 backdrop-blur-sm' : 'bg-transparent backdrop-blur-none')}>
      <header className={'container'}>
        <div className={'flex items-center justify-between'}>
          <div>
            <h1 className={'main-text-animation text-[1.25rem] font-bold text-white'}>
              <Link href={'/'} className={'flex items-center gap-1'}>
                linkvertex.io
              </Link>
            </h1>
          </div>
          <Navigation UrlPages={UrlPages} />
          <div className={'flex items-center gap-2'}>
            <LanguageProvider languages={languages}>
              <LanguageSwitcher />
            </LanguageProvider>
            <UserControls />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
