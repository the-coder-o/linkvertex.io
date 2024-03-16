'use client'

import React from 'react'

import {useTranslation} from "react-i18next";
import Animation from '@/components/animation/framer-animaion'
import {Globe, Lock, SwatchBook, Target} from 'lucide-react'

const FeatureSections = () => {
    const {t} = useTranslation('about_page')


    return (
        <Animation delay={3}>
            <div className={'my-12 flex flex-col gap-8'}>
                <div className={'flex items-center justify-center flex-col gap-2'}>
                    <h2 className={'flex gap-1 text-xl font-bold text-purple-500'}>
                        <Globe width={20}/>
                    </h2>
                    <p className={'text-white max-sm:text-[15px] text-center max-sm:leading-normal'}>{t('about_description_1')}</p>
                </div>
                <div className={'flex gap-2 items-center justify-center flex-col'}>
                    <h2 className={'flex gap-1 text-xl font-bold text-green-400'}>
                        <Target width={20}/>
                    </h2>
                    <p className={'text-white text-center max-sm:text-[15px] max-sm:leading-normal'}>
                        {t('about_description_2')}
                    </p>
                </div>
                <div className={'flex gap-2 items-center justify-center flex-col'}>
                    <h2 className={'flex gap-1 text-xl font-bold text-yellow-400'}>
                        <SwatchBook width={20}/>
                    </h2>
                    <p className={'text-white text-center max-sm:text-[15px] max-sm:leading-normal'}>{t('about_description_3')}</p>
                </div>
                <div className={'flex gap-2 items-center justify-center flex-col'}>
                    <h2 className={'flex gap-1 text-xl font-bold text-orange-400'}>
                        <Lock width={20}/>
                    </h2>
                    <p className={'text-white text-center max-sm:text-[15px] max-sm:leading-normal'}>{t('about_description_4')}</p>
                </div>
            </div>
        </Animation>
    )
}

export default FeatureSections
