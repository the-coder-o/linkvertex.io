'use client'

import React from 'react'

import { LogOutIcon } from 'lucide-react'

import { useUser } from '@clerk/clerk-react'
import { SignOutButton } from '@clerk/nextjs'

import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'
import Animation from '@/components/animation/framer-animaion'

import { Button } from '@/components/ui/button'
import Footer from '@/components/ui/footer/footer'
import { Skeleton } from '@/components/ui/skeleton'
import DashboardButtons from '@/app/dashboard/components/DashboardButtons'

const Dashboard = () => {
  const { isSignedIn, user, isLoaded } = useUser()
  const { t } = useTranslation('dashboard')

  return (
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
        <SignOutButton>
          <Button className="flex items-center gap-2 text-[16px] font-medium rounded-[20px] bg-transparent hover:bg-[#1D1F1F]">
            <Animation delay={2}>
              <div className={'flex items-center gap-2 text-[16px] font-medium'}>
                <LogOutIcon className="rotate-180 w-4 h-4" />
                {t('logout_btn')}
              </div>
            </Animation>
          </Button>
        </SignOutButton>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
