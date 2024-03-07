import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { ShieldAlert } from 'lucide-react'

const Page = () => {
  return (
    <div>
      <Alert className="!bg-[#1E2B32] w-full border-transparent rounded-[24px] mb-8">
        <ShieldAlert className="bg-[#90CDF4] rounded-full flex items-center justify-center p-[4px]" />
        <AlertTitle className="text-white ml-2">Subscribers will be coming soon 💤</AlertTitle>
        <AlertDescription className="text-white ml-2 text-[16px] font-medium">Thanks for your understanding as we use this in production soon.😊 subscribers will be open in v2.0.4</AlertDescription>
      </Alert>
    </div>
  )
}

export default Page
