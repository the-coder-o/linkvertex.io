'use client'

import React, { useState } from 'react'

import { Sun, Moon } from 'lucide-react'

import Link from 'next/link'

const Header = () => {
  const [theme, setTheme] = useState('light')

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
              <Link href={'/'}>Linkvertex.io</Link>
            </h1>
          </div>
          <button onClick={toggleTheme} aria-label="Toggle theme">
            <div className={'hover:bg-[#1D1F1F] transition-all flex items-center justify-center p-3 rounded-full'}>{theme === 'light' ? <Sun className={'text-white w-[1rem] h-[1rem]'} /> : <Moon className={'text-white w-[1rem] h-[1rem]'} />}</div>
          </button>
        </div>
      </header>
    </div>
  )
}

export default Header
