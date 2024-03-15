'use client'

import Image from 'next/image'

import { useState } from 'react'
import { Lock, ShieldAlert } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'

import { themeImages } from '@/content/themes'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function ButtonCardTheme() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)
  const { t } = useTranslation('themes_page')

  const toggleImageSelection = (index: any) => {
    if (selectedImageIndex === index) {
      setSelectedImageIndex(null)
    } else {
      setSelectedImageIndex(index)
    }
  }

  return (
    <div className={'flex flex-col items-center'}>
      <Alert className="mb-8 w-full rounded-[24px] border-transparent !bg-[#1E2B32]">
        <ShieldAlert className="flex items-center justify-center rounded-full bg-[#90CDF4] p-[4px]" />
        <AlertTitle className="ml-2 text-white">{t('alert_message_title')}</AlertTitle>
        <AlertDescription className="ml-2 !w-full text-[16px] font-medium text-white">{t('alert_message_text')}</AlertDescription>
      </Alert>
      <div className={'grid grid-cols-3 flex-wrap gap-5 max-md:grid-cols-6 max-sm:grid-cols-4 max-[450px]:grid-cols-3'}>
        {themeImages.map((image, index) => (
          <div key={index} className={'relative flex flex-col items-center gap-1'}>
            <Image onClick={() => toggleImageSelection(index)} width={100} height={100} className={cn('!w-full cursor-not-allowed cursor-pointer !rounded-lg border-4 opacity-50', selectedImageIndex === index ? 'border-4' : '')} src={image?.img} alt={'Air Leaf'} />
            <Lock className={'absolute top-[41%] flex h-6 w-6 cursor-not-allowed items-center justify-center text-white !opacity-100'} />
          </div>
        ))}
      </div>
    </div>
  )
}
