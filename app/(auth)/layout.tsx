import { ReactNode } from 'react'

import Footer from '@/components/ui/footer/footer'

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={'h-full flex items-center justify-center'}>
      {children}

      <div className={'max-sm:hidden'}>
        <Footer />
      </div>
    </div>
  )
}

export default AuthLayout
