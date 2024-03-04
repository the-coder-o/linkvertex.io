'use client'

import React, { useState } from 'react'

import Image from 'next/image'

import { cn } from '@/lib/utils'
import { Lock, ShieldAlert } from 'lucide-react'

import { themeImages } from '@/content/themes'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function ButtonStyle() {
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
        <AlertDescription className="text-white ml-2 text-[16px] font-medium">These themes are not working yet. Thanks for your understanding as we use this in production soon.😊 themes will be open in v2.0.0</AlertDescription>
      </Alert>
      <div className={'grid grid-cols-3 gap-5 flex-wrap max-md:grid-cols-6 max-sm:grid-cols-4 max-[450px]:grid-cols-3'}>
        <div className={'bg-white border-2 py-5'}></div>
        <div className={'bg-white border-2 py-5 rounded-lg'}></div>
        <div className={'bg-white border-2 py-5 rounded-2xl'}></div>

        <div className={'border-white border-2 py-5'}></div>
        <div className={'border-white border-2 py-5 rounded-lg'}></div>
        <div className={'border-white border-2 py-5 rounded-2xl'}></div>

        <div className={'border-white border-2 py-5 shadow-md shadow-white'}></div>
        <div className={'border-white border-2 py-5 rounded-lg shadow-md shadow-white'}></div>
        <div className={'border-white border-2 py-5 rounded-2xl shadow-md shadow-white'}></div>

        <div className={'border-white border-2 py-5 shadow-[3px_3px_0px_0px_#f7fafc] shadow-white'}></div>
        <div className={'border-white border-2 py-5 rounded-lg shadow-[3px_3px_0px_0px_#f7fafc] shadow-white'}></div>
        <div className={'border-white border-2 py-5 rounded-2xl shadow-[3px_3px_0px_0px_#f7fafc] shadow-white'}></div>
      </div>
    </>
  )
}
