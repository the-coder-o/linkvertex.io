'use client'

import { ShieldAlert } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const Page = () => {
  const { t } = useTranslation('seo_page')

  return (
    <div>
      <Alert className="!bg-[#1E2B32] w-full border-transparent rounded-[24px] mb-8">
        <ShieldAlert className="bg-[#90CDF4] rounded-full flex items-center justify-center p-[4px]" />
        <AlertTitle className="text-white ml-2">{t('alert_message_title')}</AlertTitle>
        <AlertDescription className="text-white ml-2 text-[16px] font-medium">{t('alert_message_text')}</AlertDescription>
      </Alert>
    </div>
  )
}

export default Page
