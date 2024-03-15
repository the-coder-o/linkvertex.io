'use client'

import Link from 'next/link'

import { useUser } from '@clerk/nextjs'
import { useTranslation } from 'react-i18next'

import Footer from '@/components/ui/footer/footer'
import Animation from '@/components/animation/framer-animaion'
import Loader from "@/components/loader";

export default function Home() {
  const { isSignedIn,user } = useUser()
  const { t } = useTranslation('home_section')

  if (!user){
    return <Loader/>
  }else {
    return (
        <div className={'container'}>
          <div className={'flex h-[100vh] flex-col items-center justify-center gap-[3.5rem]'}>
            <Animation delay={0}>
              <h1 className={'main-text-animation w-[410px] text-center text-[3.80rem] font-[800] leading-[110%] max-md:w-[508px] max-md:text-[48px] max-sm:w-[450px] max-[530px]:w-full'}>{t('title')}</h1>
            </Animation>
            <Animation delay={1}>
              <p className={'ml-auto mr-auto w-[410px] text-center font-[600] leading-[1.5rem] text-white max-sm:w-[85%]'}>{t('subtitle')}</p>
            </Animation>
            <Animation delay={2}>
              <Link href={isSignedIn ? '/dashboard' : '/sign-in'} className={'rounded-[20px] bg-[#FCD28D] px-[24px] py-[12px] text-[18px] font-[600] transition-all hover:bg-[#EBB064]'}>
                {t('button')}
              </Link>
            </Animation>
          </div>
          <Footer />
        </div>
    )
  }

}
