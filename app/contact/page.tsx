'use client'

import { motion } from 'framer-motion'

import Footer from '@/components/ui/footer/footer'
import CountdownTimer from '@/components/soon/count-down-time'

const Page = () => {
  const launchDate = new Date('2024-07-11T00:00:00')

  return (
    <div className={'container'}>
      <div className={'flex items-center justify-center flex-col mt-[250px] gap-[15px]'}>
        <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }} className={'text-white text-6xl w-[500px] text-center font-bold leading-tight'}>
          This <span className={'text-yellow-400'}>Contact</span> page Coming Soon
        </motion.h1>
        <CountdownTimer targetDate={launchDate} />
        <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 3 * 0.1 }} className={'text-white w-[70%] text-center'}>
          We are excited to announce that we will be launching soon and can't wait to share our new platform with you.
        </motion.p>
      </div>
      <Footer />
    </div>
  )
}

export default Page
