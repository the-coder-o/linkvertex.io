'use client'

import React, { useState } from 'react'

import { cn } from '@/lib/utils'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { UserButton } from '@clerk/nextjs'
import { useUser } from '@clerk/clerk-react'

import { Skeleton } from '@/components/ui/skeleton'
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
  const { isLoaded, user, isSignedIn } = useUser()

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
          <div className={'flex items-center gap-3 max-md:hidden'}>
            <nav className={'flex items-center gap-10'}>
              {UrlPages?.map((item: { linkTitle: string; linkPath: string }, index) => (
                <Link key={index} href={item.linkPath} className={cn('hover:text-white/80 text-[#b4b4b4] transition-all text-[16px] pt-1.5 font-bold rounded-lg', item.linkPath === pathName && 'transition-all text-white')}>
                  {item.linkTitle}
                </Link>
              ))}
            </nav>
          </div>
          <div className={'flex items-center gap-2'}>
            <button onClick={handleLanguageChange}>
              <Image src={selectedLanguage.image} alt={selectedLanguage.name} width={18} height={18} className={'!bg-cover !w-[30px]'} />
            </button>
            <div className={cn(isSignedIn ? 'block' : 'hidden')}>
              <UserButton afterSignOutUrl="/" />
            </div>
            <Skeleton className={cn('w-[32px] h-[32px] rounded-full bg-white/10', isLoaded ? 'hidden' : 'block')} />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
