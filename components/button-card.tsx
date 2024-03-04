'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Lock, ShieldAlert } from 'lucide-react'

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

    {
      img: 'https://mfe-appearance.production.linktr.ee/images/selector-pebble-blue.48047a34097e85836255.png',
    },
    {
      img: 'https://mfe-appearance.production.linktr.ee/images/selector-pebble-yellow.adffcf319fe3cb16a9b7.png',
    },
    {
      img: 'https://mfe-appearance.production.linktr.ee/images/selector-pebble-pink.71c34887a9c4ca41828c.png',
    },
    {
      img: 'https://mfe-appearance.production.linktr.ee/images/selector-confetti.3da60ad2f58e6d1f40da.webp',
    },
    {
      img: 'https://mfe-appearance.production.linktr.ee/images/selector-breeze-green.388d7c952786d8b52e8d.webp',
    },
    {
      img: 'https://mfe-appearance.production.linktr.ee/images/selector-rainbow.85e9302f9aac535367aa.webp',
    },
    {
      img: 'https://mfe-appearance.production.linktr.ee/images/selector-luke-john-matthew-arnold.589594e412de70fe7d2b.webp',
    },
    {
      img: 'https://mfe-appearance.production.linktr.ee/images/selector-cloud-blue.fdecf008bcbf4a4c2d15.png',
    },
    {
      img: 'https://mfe-appearance.production.linktr.ee/images/selector-noir.4d9bdf971052e507724b.webp',
    },
  ]

  return (
    <>
      <Alert className="!bg-[#1E2B32] w-full border-transparent rounded-[24px] mb-8">
        <ShieldAlert className="bg-[#90CDF4] rounded-full flex items-center justify-center p-[4px]" />
        <AlertTitle className="text-white ml-2">These themes will be coming soon 💤</AlertTitle>
        <AlertDescription className="text-white ml-2 text-[16px] font-medium">These themes are not working yet. Thanks for your understanding as we use this in production soon.😊 themes will be open in v2.0.0</AlertDescription>
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
