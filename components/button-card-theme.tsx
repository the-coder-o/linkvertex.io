'use client'

import React, { useState } from 'react'

import Image from 'next/image'

import { cn } from '@/lib/utils'
import { Lock, ShieldAlert } from 'lucide-react'

import { themeImages } from '@/content/themes'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function ButtonCardTheme() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)

  const toggleImageSelection = (index: any) => {
    if (selectedImageIndex === index) {
      setSelectedImageIndex(null)
    } else {
      setSelectedImageIndex(index)
    }
  }

  return (
    <>
      <Alert className="!bg-[#1E2B32] w-full border-transparent rounded-[24px] mb-8">
        <ShieldAlert className="bg-[#90CDF4] rounded-full flex items-center justify-center p-[4px]" />
        <AlertTitle className="text-white ml-2">These themes will be coming soon 💤</AlertTitle>
        <AlertDescription className="text-white ml-2 text-[16px] font-medium">Thanks for your understanding as we use this in production soon.😊 themes will be open in v2.0.0</AlertDescription>
      </Alert>
      <div className={'grid grid-cols-3 gap-5 flex-wrap max-md:grid-cols-6 max-sm:grid-cols-4 max-[450px]:grid-cols-3'}>
        {themeImages.map((image, index) => (
          <div key={index} className={'flex flex-col items-center gap-1 relative'}>
            <Image onClick={() => toggleImageSelection(index)} width={100} height={100} className={cn('!w-full opacity-50 !rounded-lg cursor-pointer border-4 cursor-not-allowed', selectedImageIndex === index ? 'border-4' : '')} src={image?.img} alt={'Air Leaf'} />
            <Lock className={'text-white w-6 h-6 absolute top-[41%] !opacity-100 flex items-center justify-center cursor-not-allowed'} />
          </div>
        ))}
      </div>
    </>
  )
}
