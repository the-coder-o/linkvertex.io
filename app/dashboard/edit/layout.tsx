'use client'

import Link from 'next/link'
import Image from 'next/image'

import React, { ReactNode, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { ChevronLeft, Eye, EyeOff } from 'lucide-react'

import ComingSoon from '@/assets/dashboard/coming-soon.png'
import Animation from '@/components/animation/framer-animaion'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { DataProvider } from '@/app/dashboard/edit/edit-context'
import Phone from '@/app/dashboard/edit/components/phone'

const EditPage = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  const { t } = useTranslation('edit_link_page')

  const [showed, setShowed] = useState(false)

  const handleShowed = () => {
    setShowed(true)
  }

  const handleNotShowed = () => {
    setShowed(false)
  }

  return (
    <>
      <head>
        <title>Edit | Linkvertex</title>
      </head>
      <DataProvider>
        <div className="container">
          <div className="mt-[100px] mb-[100px] relative">
            <Animation delay={0}>
              <Link href={'/dashboard'} className="bg-[#1D1F1F]/80 rounded-[24px] text-white flex justify-center font-[500] pr-[10px] w-[13%] items-center py-[8px] text-[16px] hover:bg-[#1D1F1F] transition-all max-sm:w-[100px]">
                <ChevronLeft className="w-5 h-5 font-bold" /> {t('back_btn')}
              </Link>
            </Animation>

            <Animation delay={1}>
              <div className="mb-[3rem]">
                <h2 className="text-4xl main-text-animation font-bold my-[16px] max-sm:text-[30px]">{t('title')}</h2>
              </div>
            </Animation>

            <Animation delay={2} className={'flex items-center gap-6 border-b-2 border-b-white/40 mb-[20px]'}>
              <Link href={'/dashboard/edit/links'} className={cn('text-white cursor-pointer flex items-center gap-1 max-sm:text-[15.5px] max-sm:justify-between', pathname === '/dashboard/edit/links' ? 'border-b-2' : 'border-b-transparent')}>
                {t('tab1')}
              </Link>
              <Link href={'/dashboard/edit/themes'} className={cn('text-white cursor-pointer flex items-center gap-1 max-sm:text-[15.5px] max-sm:justify-between', pathname === '/dashboard/edit/themes' ? 'border-b-2' : 'border-b-transparent')}>
                {t('tab2')}
                <Image src={ComingSoon} alt={'ComingSoon'} width={20} height={20} />
              </Link>
              <Link href={'/dashboard/edit/seo-optimizing'} className={cn('text-white cursor-pointer flex items-center gap-1 max-sm:text-[15.5px] max-sm:justify-between', pathname === '/dashboard/edit/seo-optimizing' ? 'border-b-2' : 'border-b-transparent')}>
                {t('tab3')}
                <Image src={ComingSoon} alt={'ComingSoon'} width={20} height={20} />
              </Link>
              <Link href={'/dashboard/edit/subscribers'} className={cn('text-white cursor-pointer flex items-center gap-1 max-sm:text-[15.5px] max-sm:justify-between', pathname === '/dashboard/edit/subscribers' ? 'border-b-2' : 'border-b-transparent')}>
                {t('tab4')}
                <Image src={ComingSoon} alt={'ComingSoon'} width={20} height={20} />
              </Link>
            </Animation>

            <Animation delay={3} className={'flex justify-between gap-[30px] max-md:gap-0'}>
              {children}
              <div className={cn('max-md:fixed max-md:bottom-[-360px] z-50 max-md:left-1/2 max-md:-translate-x-1/2 max-md:-translate-y-1/2', showed === true ? 'max-md:block' : 'max-md:hidden')}>
                <Phone />
              </div>
            </Animation>

            <div className={'hidden max-md:block'}>
              <div className={'flex items-center justify-center'}>
                {showed === false ? (
                  <Button onClick={handleShowed} className={'bg-[#fff] hover:bg-[#fff] text-black fixed bottom-4 flex items-center gap-2 text-xl font-bold rounded-[22px] px-[25px]'}>
                    <Eye /> Preview
                  </Button>
                ) : (
                  <Button onClick={handleNotShowed} className={'bg-[#fff] z-50 hover:bg-[#fff] text-black fixed bottom-4 flex items-center gap-2 text-xl font-bold rounded-[22px] px-[25px]'}>
                    <EyeOff /> Unpreview
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </DataProvider>
    </>
  )
}

export default EditPage
