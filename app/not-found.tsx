'use client'

import Link from 'next/link'
import Image from 'next/image'

import { motion } from 'framer-motion'

import Footer from '@/components/ui/footer/footer'
import NotFoundImage from '@/assets/404/404 Error-pana.svg'

export default function Custom404() {
  return (
    <div className={'container'}>
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }} className={'flex items-center justify-center mt-[100px]'}>
        <Image src={NotFoundImage} alt="404" width={100} height={100} className={'!w-[100%]'} />
      </motion.div>
      <div className={'flex items-center justify-center flex-col gap-5'}>
        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 2 * 0.1 }} className={'text-white text-4xl font-bold'}>
          Page not Found.
        </motion.h1>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 3 * 0.1 }} className={'flex items-center flex-col gap-2'}>
          <p className={'text-white main-text-animation'}>It's Okay!</p>
          <Link href={'/'} className={'bg-[#319795] hover:bg-[#319795]/80 rounded-[20px] font-semibold text-md text-white px-[16px] py-[8px]'}>
            Let's Head Back
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}
