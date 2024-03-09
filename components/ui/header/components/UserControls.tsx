import React from 'react'
import { UserButton } from '@clerk/nextjs'
import { useUser } from '@clerk/clerk-react'
import { Skeleton } from '@/components/ui/skeleton'

export const UserControls = () => {
  const { isLoaded, isSignedIn } = useUser()

  return (
    <div className={'flex items-center'}>
      <div className={isSignedIn ? 'block' : 'hidden'}>
        <UserButton afterSignOutUrl="/" />
      </div>
      <Skeleton className={`w-[33px] h-[33px] rounded-full bg-white/10 ${isLoaded ? 'hidden' : 'block'}`} />
    </div>
  )
}
