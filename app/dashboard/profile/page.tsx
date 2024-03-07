'use client'

import { ChangeEvent, useState } from 'react'

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
    <div className={'container'}>
      <div className={'mt-[100px]'}>
        <Animation delay={0}>
          <Link href={'/dashboard'} className={'bg-[#1D1F1F]/80 rounded-[24px] text-white flex justify-center font-[500] pr-[10px] w-[13%] items-center py-[8px] text-[16px] hover:bg-[#1D1F1F] transition-all max-sm:w-[100px]'}>
            <ChevronLeft className={'w-5 h-5 font-bold'} />
            {t('back_btn')}
          </Link>
        </Animation>
        <Animation delay={1}>
          <div className={'mb-[3rem]'}>
            <h2 className={'text-4xl main-text-animation font-bold my-[16px] max-sm:text-[30px]'}>{t('title')}</h2>
          </div>
        </Animation>
        <Animation delay={2}>
          <div className={'flex flex-col gap-[2.5rem]'}>
            <div>
              <h2 className={'text-3xl font-bold text-white mb-[16px] max-sm:text-[26px]'}>{t('subtitle')}</h2>
            </div>
            <div className={'grid grid-cols-1 space-y-[2rem] mb-[100px]'}>
              <SocialLinks input={input} handleChange={handleChange} isValid={isValid} />
              <Button disabled={isSaveDisabled} className={'bg-[#9ae6b4] rounded-[20px] font-semibold text-black text-md hover:bg-[#9ae6c9]'}>
                {t('save_btn')}
              </Button>
            </div>
          </div>
        </Animation>
      </div>
    </div>
  )
}

export default Profile
