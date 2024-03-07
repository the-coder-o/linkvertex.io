import React from 'react'
import { useTranslation } from 'react-i18next'

import Link from 'next/link'

import { UrlPages } from '@/components/ui/header/lib/url-pages'

import Navigation from '@/components/ui/header/components/Navigation'
import { UserControls } from '@/components/ui/header/components/UserControls'
import { LanguageProvider, LanguageSwitcher } from '@/components/ui/header/components/LanguageSwitcher'

import UsaIcon from '@/assets/languages/usa.png'
import RusIcon from '@/assets/languages/russia.png'
import GerIcon from '@/assets/languages/german.png'
import UzbIcon from '@/assets/languages/uzbekistan.png'

const languages = [
  { code: 'en', name: 'English', image: UsaIcon },
  { code: 'ru', name: 'Russian', image: RusIcon },
  { code: 'ge', name: 'German', image: GerIcon },
  { code: 'uz', name: 'Uzbek', image: UzbIcon },
]

const Header = () => {
  const { t } = useTranslation('header')

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
