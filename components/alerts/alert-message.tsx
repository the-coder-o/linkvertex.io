import React from 'react'

import { RocketIcon } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const AlertMessage = () => {
  return (
    <Alert className={'w-[350px] z-50 !bg-[#000] right-2 bottom-2 max-md:hidden bg-transparent max-md:w-full max-md:left-0 fixed'}>
      <RocketIcon className="h-4 w-4 !text-white !main-text-animation" />
      <AlertTitle className={'text-white main-text-animation'}>Thank you for understanding!</AlertTitle>
      <AlertDescription className={'text-[12px] text-white'}>This site is currently unavailable as we work on this project. You will only be able to use this site 3 months after the UI and backend work is completed!</AlertDescription>
    </Alert>
  )
}

export default AlertMessage
