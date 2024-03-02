'use client'

import React, { useEffect, useState } from 'react'

interface CountdownProps {
  targetDate: Date
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
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
    <div className={'flex items-center justify-center gap-5'}>
      <span className={'text-5xl text-red-500 font-bold flex items-center justify-center flex-col rounded-[15px] p-3 !py-[20px] bg-[#fff]/10 w-[100px]'}>
        {timeLeft?.days} <p className={'text-sm'}>Days</p>
      </span>
      <span className={'text-5xl text-purple-500 font-bold flex items-center justify-center flex-col rounded-[15px] p-3 !py-[20px] bg-[#fff]/10 w-[100px]'}>
        {timeLeft?.hours} <p className={'text-sm'}>Hours</p>
      </span>
      <span className={'text-5xl text-green-500 font-bold flex items-center justify-center flex-col rounded-[15px] p-3 !py-[20px] bg-[#fff]/10 w-[100px]'}>
        {timeLeft?.minutes} <p className={'text-sm'}>Minutes</p>
      </span>
      <span className={'text-5xl text-blue-500 font-bold flex items-center justify-center flex-col rounded-[15px] p-3 !py-[20px] bg-[#fff]/10 w-[100px]'}>
        {timeLeft?.seconds} <p className={'text-sm'}>Seconds</p>
      </span>
    </div>
  )
}

export default CountdownTimer
