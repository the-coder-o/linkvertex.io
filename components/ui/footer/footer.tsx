import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={'absolute bottom-2 left-0 right-0'}>
      <footer className={'container'}>
        <div className={'flex items-center justify-between'}>
          <p className={'text-white'}>
            © 2024 -{' '}
            <Link href={'https://a-bd.me/'} target={'_blank'} className={'hover:underline'}>
              a-bd.me
            </Link>
          </p>
          <p className={'text-white'}>v:1.2.0</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
