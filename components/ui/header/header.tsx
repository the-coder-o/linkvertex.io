'use client'

import React, { useState } from 'react'

import { Sun, Moon } from 'lucide-react'

import Link from 'next/link'
import Image from 'next/image'

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
  const [theme, setTheme] = useState('light')
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

  const handleLanguageChange = () => {
    const currentIndex = languages.findIndex((lang) => lang.code === selectedLanguage.code)
    const nextIndex = (currentIndex + 1) % languages.length
    setSelectedLanguage(languages[nextIndex])
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div className={'w-full fixed left-0 right-0 bg-[#0a0c0ccc] h-[4rem] flex items-center justify-center z-10 top-0'} style={{ backdropFilter: 'blur(6px)' }}>
      <header className={'container'}>
        <div className={'flex items-center justify-between'}>
          <div>
            <h1 className={'text-white text-[1.25rem] font-bold'}>
              <Link href={'/'}>linkvertex.io</Link>
            </h1>
          </div>
          <div className={'flex items-center gap-2'}>
            <button onClick={toggleTheme} aria-label="Toggle theme">
              <div className={'hover:bg-[#1D1F1F] transition-all flex items-center justify-center p-3 rounded-full'}>{theme === 'light' ? <Sun className={'text-white w-[1rem] h-[1rem]'} /> : <Moon className={'text-white w-[1rem] h-[1rem]'} />}</div>
            </button>
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
