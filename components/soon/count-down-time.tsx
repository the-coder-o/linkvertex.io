'use client'

import { motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'

interface CountdownProps {
  targetDate: Date
}

const CountdownTimer: FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date()
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (
    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 2 * 0.1 }} className={'flex items-center justify-center gap-5'}>
      <span className={'flex w-[100px] flex-col items-center justify-center rounded-[15px] bg-[#fff]/10 p-3 !py-[20px] text-5xl font-bold text-red-500 max-sm:w-[80px] max-sm:text-3xl max-[400px]:w-[70px]'}>
        {timeLeft?.days} <p className={'text-sm'}>Days</p>
      </span>
      <span className={'flex w-[100px] flex-col items-center justify-center rounded-[15px] bg-[#fff]/10 p-3 !py-[20px] text-5xl font-bold text-yellow-500 max-sm:w-[80px] max-sm:text-3xl max-[400px]:w-[70px]'}>
        {timeLeft?.hours} <p className={'text-sm'}>Hours</p>
      </span>
      <span className={'flex w-[100px] flex-col items-center justify-center rounded-[15px] bg-[#fff]/10 p-3 !py-[20px] text-5xl font-bold text-green-500 max-sm:w-[80px] max-sm:text-3xl max-[400px]:w-[70px]'}>
        {timeLeft?.minutes} <p className={'text-sm'}>Minutes</p>
      </span>
      <span className={'flex w-[100px] flex-col items-center justify-center rounded-[15px] bg-[#fff]/10 p-3 !py-[20px] text-5xl font-bold text-blue-500 max-sm:w-[80px] max-sm:text-3xl max-[400px]:w-[70px]'}>
        {timeLeft?.seconds} <p className={'text-sm'}>Seconds</p>
      </span>
    </motion.div>
  )
}

export default CountdownTimer
