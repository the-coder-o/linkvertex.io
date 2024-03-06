'use client'

import React from 'react'

import Link from 'next/link'

import { useUser } from '@clerk/nextjs'

import Footer from '@/components/ui/footer/footer'
import Animation from '@/components/animation/framer-animaion'

export default function Home() {
  const { isSignedIn } = useUser()

  return (
    <>
      <main className={'container'}>
        <div className={'mt-[14.5rem] max-md:mt-[14rem] flex items-center flex-col justify-center gap-[3.5rem] max-md:gap-[2rem]'}>
          <Animation delay={0}>
            <h1 className={'main-text-animation w-[410px] text-[3.80rem] text-center leading-[110%] font-[800] max-md:text-[48px] max-md:w-[508px] max-sm:w-[450px] max-[530px]:w-full'}>One Place for All Your Links</h1>
          </Animation>
          <Animation delay={1}>
            <p className={'w-[410px] font-[600] text-white leading-[1.5rem] text-center max-sm:w-[85%]'}>One link to rule them all. Easily place your links in a beautiful single page.</p>
          </Animation>
          <Animation delay={2}>
            <Link href={isSignedIn ? '/dashboard' : '/sign-in'} className={'px-[24px] py-[12px] rounded-[20px] font-[600] text-[18px] bg-[#FCD28D] hover:bg-[#EBB064] transition-all'}>
              Get Started
            </Link>
          </Animation>
        </div>
      </main>
      <Footer />
    </>
  )
}
