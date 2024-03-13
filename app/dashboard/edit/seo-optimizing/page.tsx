'use client'

import { ShieldAlert } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import SeoAlert from '@/app/dashboard/edit/seo-optimizing/components/seo-alert'
import React from 'react'

const Page = () => {
  const { t } = useTranslation('seo_page')

  return (
    <>
      <head>
        <title>SEO optimizing | Linkvertex</title>
      </head>
      <div>
        <Alert className="!bg-[#1E2B32] w-full border-transparent rounded-[24px] mb-8">
          <ShieldAlert className="bg-[#90CDF4] rounded-full flex items-center justify-center p-[4px]" />
          <AlertTitle className="text-white ml-2">{t('alert_message_title')}</AlertTitle>
          <AlertDescription className="text-white ml-2 text-[16px] font-medium">{t('alert_message_text')}</AlertDescription>
        </Alert>
        <div className={'flex flex-col gap-5'}>
          <div>
            <label className={'text-start text-white text-md font-medium'}>Meta title</label>
            <Input disabled={true} type="text" placeholder={'Example: @the_coder_o'} className={'cursor-not-allowed mt-[0.5rem] !bg-transparent border-2 rounded-[20px] px-[16px] text-[1rem] pt-[5px] text-white placeholder:text-[#BDC3DD] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'} id="hs-inline-add-on" name="hs-inline-add-on" />
          </div>
          <div>
            <label className={'text-start text-white text-md font-medium'}>Meta description</label>
            <Textarea disabled={true} placeholder={'Example: Linktree. Make your link do more. Changes to metadata may take some time to appear on other platforms.'} className={' placeholder:text-[#BDC3DD] cursor-not-allowed mt-[0.5rem] h-[150px] !bg-transparent !pt-[16px] border-2 !outline-none rounded-[20px] px-[16px] text-[1rem] text-white placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'} />
          </div>
        </div>
        <SeoAlert />
      </div>
    </>
  )
}

export default Page
