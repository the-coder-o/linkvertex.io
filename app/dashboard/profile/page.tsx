'use client'

import React, { ChangeEvent, useState } from 'react'

import Link from 'next/link'

import { ChevronLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import SocialLinks from './components/SocialLinks'
import Animation from '@/components/animation/framer-animaion'

const Profile = () => {
  const [input, setInput] = useState({ instagram: '', mastodon: '', tiktok: '', telegram: '', pinterest: '', github: '', whatsapp: '', email: '', spotify: '', appleMusic: '', snapchat: '', appStore: '', googlePlay: '', facebook: '', youtube: '', twitch: '', linkedin: '', twitter: '' })
  const [isValid, setIsValid] = useState({ instagram: true, mastodon: true, tiktok: true, telegram: true, pinterest: true, github: true, whatsapp: true, email: true, spotify: true, appleMusic: true, snapchat: true, appStore: true, googlePlay: true, facebook: true, youtube: true, twitch: true, linkedin: true, twitter: true })
  const { t } = useTranslation('social_links_page')

  const handleChange = (service: string, validator: (input: string) => boolean) => (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setInput({ ...input, [service]: value })
    setIsValid({ ...isValid, [service]: validator(value) })
  }

  const isSaveDisabled = Object.values(isValid).some((value) => !value)

  return (
    <>
      <head>
        <title>Profile | Linkvertex</title>
      </head>
      <div className={'container'}>
        <div className={'mt-[100px]'}>
          <Animation delay={0}>
            <Link href={'/dashboard'} className={'flex w-[13%] items-center justify-center rounded-[24px] bg-[#1D1F1F]/80 py-[8px] pr-[10px] text-[16px] font-[500] text-white transition-all hover:bg-[#1D1F1F] max-sm:w-[100px]'}>
              <ChevronLeft className={'h-5 w-5 font-bold'} />
              {t('back_btn')}
            </Link>
          </Animation>
          <Animation delay={1}>
            <div className={'mb-[3rem]'}>
              <h2 className={'main-text-animation my-[16px] text-4xl font-bold max-sm:text-[30px]'}>{t('title')}</h2>
            </div>
          </Animation>
          <Animation delay={2}>
            <div className={'flex flex-col gap-[2.5rem]'}>
              <div>
                <h2 className={'mb-[16px] text-3xl font-bold text-white max-sm:text-[26px]'}>{t('subtitle')}</h2>
              </div>
              <div className={'mb-[100px] grid grid-cols-1 space-y-[2rem]'}>
                <SocialLinks input={input} handleChange={handleChange} isValid={isValid} />
                <Button disabled={isSaveDisabled} className={'text-md rounded-[20px] bg-[#9ae6b4] font-semibold text-black hover:bg-[#9ae6c9]'}>
                  {t('save_btn')}
                </Button>
              </div>
            </div>
          </Animation>
        </div>
      </div>
    </>
  )
}

export default Profile
