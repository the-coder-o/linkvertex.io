import { ReactNode } from 'react'

import Footer from '@/components/ui/footer/footer'

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={'flex h-full items-center justify-center'}>
      {children}
        <Footer />
    </div>
  )
}

export default AuthLayout
