'use client'

import React, { useState } from 'react'

import { LogOutIcon } from 'lucide-react'

import { useClerk, useUser } from '@clerk/clerk-react'

import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'
import Animation from '@/components/animation/framer-animaion'

import Loader from '@/components/loader'
import { Button } from '@/components/ui/button'
import Footer from '@/components/ui/footer/footer'
import { Skeleton } from '@/components/ui/skeleton'
import DashboardButtons from '@/app/dashboard/components/DashboardButtons'

const Dashboard = () => {
  const { isSignedIn, user, isLoaded } = useUser()
  const clerk = useClerk()
  const { t } = useTranslation('dashboard')
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    setIsLoggingOut(true)
    await clerk.signOut().finally(() => setIsLoggingOut(false))
  }

  if (isLoggingOut) {
    return <Loader />
  } else {
    return (
      <>
        <head>
          <title>Dashboard | Linkvertex</title>
        </head>
        <div className="container">
          <div className="mt-[150px] max-sm:mt-[100px] flex flex-col gap-9 max-sm:gap-2">
            <Animation delay={0}>
              <span className="main-text-animation text-4xl font-bold max-sm:text-[23px] flex items-center">
                {t('title')}, <span className={cn(isSignedIn ? 'block' : 'hidden')}>{user?.fullName ?? 'User'}</span>
                <Skeleton className={cn('h-7 w-[250px] bg-[#fff]/10 mt-1', isLoaded ? 'hidden' : 'block')} />
              </span>
            </Animation>
            <Animation delay={1}>
              <DashboardButtons />
            </Animation>
            <Button onClick={handleLogout} className="flex items-center hover:text-black gap-2 text-[16px] !font-bold rounded-[20px] bg-transparent hover:bg-[#90CDF4]">
              <Animation delay={2}>
                <div className={'flex items-center gap-2 text-[16px] font-medium'}>
                  <LogOutIcon className="rotate-180 w-4 h-4" />
                  {t('logout_btn')}
                </div>
              </Animation>
            </Button>
          </div>
          <Footer />
        </div>
      </>
    )
  }
}

export default Dashboard
