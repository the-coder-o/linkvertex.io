import React from 'react'
import Footer from '@/components/ui/footer/footer'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={'h-full flex items-center justify-center mt-[150px]'}>
      {children}
      <Footer />
    </div>
  )
}

export default AuthLayout
