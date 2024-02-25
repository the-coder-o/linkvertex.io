import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={'container fixed left-0 right-0 bottom-5'}>
      <div className={'flex items-center justify-between'}>
        <p className={'text-white'}>
          © 2024 -{' '}
          <Link href={'https://a-bd.me/'} target={'_blank'} className={'hover:underline'}>
            a-bd.me
          </Link>
        </p>
        <p className={'text-white'}>v:1.0.1</p>
      </div>
    </footer>
  )
}

export default Footer
