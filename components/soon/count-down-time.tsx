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
      <span className={'text-5xl max-sm:text-3xl max-sm:w-[80px] max-[400px]:w-[70px] text-red-500 font-bold flex items-center justify-center flex-col rounded-[15px] p-3 !py-[20px] bg-[#fff]/10 w-[100px]'}>
        {timeLeft?.days} <p className={'text-sm'}>Days</p>
      </span>
      <span className={'text-5xl max-sm:text-3xl max-sm:w-[80px] max-[400px]:w-[70px] text-purple-500 font-bold flex items-center justify-center flex-col rounded-[15px] p-3 !py-[20px] bg-[#fff]/10 w-[100px]'}>
        {timeLeft?.hours} <p className={'text-sm'}>Hours</p>
      </span>
      <span className={'text-5xl max-sm:text-3xl max-sm:w-[80px] max-[400px]:w-[70px] text-green-500 font-bold flex items-center justify-center flex-col rounded-[15px] p-3 !py-[20px] bg-[#fff]/10 w-[100px]'}>
        {timeLeft?.minutes} <p className={'text-sm'}>Minutes</p>
      </span>
      <span className={'text-5xl max-sm:text-3xl max-sm:w-[80px] max-[400px]:w-[70px] text-blue-500 font-bold flex items-center justify-center flex-col rounded-[15px] p-3 !py-[20px] bg-[#fff]/10 w-[100px]'}>
        {timeLeft?.seconds} <p className={'text-sm'}>Seconds</p>
      </span>
    </motion.div>
  )
}

export default CountdownTimer
