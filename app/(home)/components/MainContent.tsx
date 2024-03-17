'use client'

import React from 'react';

import Link from 'next/link';

import {useUser} from '@clerk/nextjs';

import {useOS} from '@/hooks/useOS';
import {useTranslation} from "react-i18next";
import {useInstallPrompt} from "@/hooks/useInstallPrompt";

import Loader from "@/components/loader";
import {Button} from "@/components/ui/button";
import Animation from "@/components/animation/framer-animaion";

const MainContent: React.FC = () => {
    const {isSignedIn} = useUser();

    const {t} = useTranslation('home_section');

    const os = useOS();
    const [installPrompt, setInstallPrompt] = useInstallPrompt();

    const handleClick = async () => {
        if (installPrompt) {
            const choiceResult = await installPrompt.prompt();
            if (choiceResult) {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                }
            } else {
                console.error('The install prompt could not be shown or user choice was not obtained.');
            }
            setInstallPrompt(null);
        }
    };

    if (!isSignedIn) {
        return <Loader/>;
    } else {
        return (
            <div className={'flex h-[100vh] flex-col items-center justify-center gap-[2.5rem]'}>
                <Animation delay={0}>
                    <h1 className={'main-text-animation w-[410px] text-center text-[3.80rem] font-[800] leading-[110%] max-md:w-[508px] max-md:text-[48px] max-sm:w-[450px] max-[530px]:w-full'}>
                        {t('title')}
                    </h1>
                </Animation>
                <Animation delay={1}>
                    <p className={'ml-auto mr-auto w-[410px] text-center font-[600] leading-[1.5rem] text-white max-sm:w-[85%]'}>
                        {t('subtitle')}
                    </p>
                </Animation>
                <Animation delay={2} className={'flex items-center gap-2.5'}>
                    <Link href={isSignedIn ? '/dashboard' : '/sign-in'}
                          className={'rounded-[20px] bg-[#FCD28D] px-[24px] py-[12px] text-[18px] font-[600] transition-all hover:bg-[#EBB064]'}>
                        {t('button')}
                    </Link>
                    <Button onClick={handleClick}
                            className={'flex items-center gap-2 rounded-[20px] bg-[#90CDF4] px-[24px] !h-[51px] !text-[18px] text-black font-[600] transition-all hover:bg-[#90CDF4]/80'}>
                        {os === 'windows' ?
                            <>
                                <i className="fa-brands fa-windows mt-[2px]"></i>
                                Download
                            </> :
                            os === 'macos' ?
                                <>
                                    <i className="fa-brands fa-apple mt-[2px]"></i>
                                    Download
                                </> :
                                os === 'android' ?
                                    <>
                                        <i className="fa-brands fa-android mt-[2px]"></i>
                                        Download
                                    </> :
                                    'Download'
                        }
                    </Button>
                </Animation>
            </div>
        );
    }
};

export default MainContent;
