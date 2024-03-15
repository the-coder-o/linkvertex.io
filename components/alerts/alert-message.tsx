import React from 'react'

import { RocketIcon } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const AlertMessage = () => {
  return (
    <Alert className={'fixed bottom-2 right-2 z-50 w-[350px] !bg-[#000] bg-transparent max-md:left-0 max-md:hidden max-md:w-full'}>
      <RocketIcon className="!main-text-animation h-4 w-4 !text-white" />
      <AlertTitle className={'main-text-animation text-white'}>Thank you for understanding!</AlertTitle>
      <AlertDescription className={'text-[12px] text-white'}>This site is currently unavailable as we work on this project. You will only be able to use this site 3 months after the UI and backend work is completed!</AlertDescription>
    </Alert>
  )
}

export default AlertMessage
