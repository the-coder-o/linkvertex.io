'use client'

import React from 'react'

import Animation from '@/components/animation/framer-animaion'
import {Globe, Lock, SwatchBook, Target} from 'lucide-react'
import {useTranslation} from "react-i18next";

const FeatureSections = () => {
  const { t } = useTranslation('about_page')


  return (
    <Animation delay={3}>
      <div className={'mt-5 flex flex-col gap-5'}>
        <div className={'flex flex-col gap-2'}>
          <h2 className={'flex items-center gap-1 text-xl font-bold text-purple-500'}>
            {t('about_title_1')}
            <Globe width={20} />
          </h2>
          <p className={'text-justify text-white  max-sm:text-[15px] max-sm:leading-normal'}>{t('about_description_1')}</p>
        </div>
        <div className={'flex flex-col gap-2'}>
          <h2 className={'flex items-center gap-1 text-xl font-bold text-blue-400'}>
            {t('about_title_2')}
            <Target width={20} />
          </h2>
          <p className={'text-justify text-white  max-sm:text-[15px] max-sm:leading-normal'}>
{t('about_description_2')}
          </p>
        </div>
        <div className={'flex flex-col gap-2'}>
          <h2 className={'flex items-center gap-1 text-xl font-bold text-yellow-400'}>
           {t('about_title_3')}
            <SwatchBook width={20} />
          </h2>
          <p className={'text-justify text-white  max-sm:text-[15px] max-sm:leading-normal'}>{t('about_description_3')}</p>
        </div>
        <div className={'flex flex-col gap-2'}>
          <h2 className={'flex items-center gap-1 text-xl font-bold text-orange-400'}>
            {t('about_title_4')}
            <Lock width={20} />
          </h2>
          <p className={'text-justify text-white  max-sm:text-[15px] max-sm:leading-normal'}>{t('about_description_4')}</p>
        </div>
      </div>
    </Animation>
  )
}

export default FeatureSections
