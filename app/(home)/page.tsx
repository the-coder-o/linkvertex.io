'use client'

import React from 'react'

import Link from 'next/link'

import { motion } from 'framer-motion'
import { useUser } from '@clerk/nextjs'

import Footer from '@/components/ui/footer/footer'

export default function Home() {
  const { isSignedIn } = useUser()

  return (
    <>
      <main className={'container'}>
        <div className={'mt-[14.5rem] max-md:mt-[14rem] flex items-center flex-col justify-center gap-[3.5rem] max-md:gap-[2rem]'}>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }} className={'main-text-animation w-[410px] text-[3.80rem] text-center leading-[110%] font-[800] max-md:text-[48px] max-md:w-[508px] max-sm:w-[450px] max-[530px]:w-full'}>
            One Place for All Your Links
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 2 * 0.1 }} className={'w-[410px] font-[600] text-white leading-[1.5rem] text-center max-sm:w-[85%]'}>
            One link to rule them all. Easily place your links in a beautiful single page.
          </motion.p>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 3 * 0.1 }}>
            <Link href={isSignedIn ? '/dashboard' : '/sign-in'} className={'px-[24px] py-[12px] rounded-[20px] font-[600] text-[18px] bg-[#FCD28D] hover:bg-[#EBB064] transition-all'}>
              Get Started
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
