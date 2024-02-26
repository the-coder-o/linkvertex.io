import React from 'react'

import { Sun } from 'lucide-react'

import Link from 'next/link'

const Header = () => {
  return (
    <div className={'w-full fixed left-0 right-0 bg-[#0a0c0ccc] h-[4rem] flex items-center justify-center z-10 top-0'} style={{ backdropFilter: 'blur(6px)' }}>
      <header className={'container'}>
        <div className={'flex items-center justify-between'}>
          <div>
            <h1 className={'text-white text-[1.25rem] font-bold'}>
              <Link href={'/'}>Linkvertex.io</Link>
            </h1>
          </div>
          <div className={'hover:!bg-[#00000000]'}>
            <Sun className={'text-white w-[1rem] h-[1rem]'} />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
