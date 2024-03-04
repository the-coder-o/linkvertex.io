'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { ShieldAlert } from 'lucide-react'

export default function ButtonCard() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)

  const toggleImageSelection = (index: any) => {
    if (selectedImageIndex === index) {
      setSelectedImageIndex(null)
    } else {
      setSelectedImageIndex(index)
    }
  }

  const themeImages = [
    {
      img: 'https://mfe-appearance.production.linktr.ee/images/selector-leaf.2294ed2759fc73b562bb.png',
    },
    {
      img: 'https://mfe-appearance.production.linktr.ee/images/selector-snow.5486c095d7f05d6bcf29.png',
    },
    {
      img: 'https://mfe-appearance.production.linktr.ee/images/selector-poppy.8d3ea024039ae15963a0.png',
    },
    {
      img: 'https://mfe-appearance.production.linktr.ee/images/selector-hydrangea.1e38cab8616504980b77.png',
    },
    {
      img: 'https://mfe-appearance.production.linktr.ee/images/selector-iris.ba3e9e6a9bd830b6b8db.png',
    },
    {
      img: 'https://mfe-appearance.production.linktr.ee/images/selector-daniel-triendl.ce1eea162fb65f3eed7c.webp',
    },
    {
      img: 'https://mfe-appearance.production.linktr.ee/images/selector-starry-night.4c4e7cd22f0ce2c39fa7.png',
    },
    {
      img: 'https://mfe-appearance.production.linktr.ee/images/selector-block-colors.3adc34edf1ddccfd1122.png',
    },
    {
      img: 'https://mfe-appearance.production.linktr.ee/images/selector-olivia-rodrigo-guts-v2.a02d37c46d96b1fb1581.webp',
    },
  ]

  return (
    <>
      <Alert className="!bg-[#1E2B32] w-full border-transparent rounded-[24px] mb-8">
        <ShieldAlert className="bg-[#90CDF4] rounded-full flex items-center justify-center p-[4px]" />
        <AlertTitle className="text-white ml-2">These themes will be coming soon 💤</AlertTitle>
        <AlertDescription className="text-white ml-2 text-[16px] font-medium">These themes are not working yet. Thanks for your understanding as we use this in production soon.😊</AlertDescription>
      </Alert>
      <div className={'grid grid-cols-3 gap-5'}>
        {themeImages.map((image, index) => (
          <div key={index} className={'flex flex-col items-center gap-1'}>
            <Image onClick={() => toggleImageSelection(index)} width={100} height={100} className={cn('!w-full !rounded-lg cursor-pointer border-4', selectedImageIndex === index ? 'border-4 border-green-300' : '')} src={image?.img} alt={'Air Leaf'} />
            <p className={'text-white text-sm'}>Air Leaf</p>
          </div>
        ))}
      </div>
    </>
  )
}
