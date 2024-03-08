'use client'

import { ReactNode } from 'react'
import { dark } from '@clerk/themes'
import { Inter } from 'next/font/google'
import { RocketIcon } from 'lucide-react'
import { ClerkProvider } from '@clerk/nextjs'

import Header from '@/components/ui/header/header'
import { Analytics } from '@vercel/analytics/react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

import './globals.css'
import i18n from '@/i18n/i18n'
import { I18nextProvider } from 'react-i18next'
import { WavyBackground } from '@/components/animation/background-gradient-animation'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
          <title>Home | Linkvertex</title>
        </head>
        <I18nextProvider i18n={i18n}>
          <WavyBackground>
            <body className={inter.className}>
              <div className={'main !z-[-40]'}></div>
              <Header />
              {children}
              <Analytics />
              <Alert className={'w-[350px] z-50 !bg-[#000] right-2 bottom-2 max-md:hidden bg-transparent max-md:w-full max-md:left-0 fixed'}>
                <RocketIcon className="h-4 w-4 !text-white !main-text-animation" />
                <AlertTitle className={'text-white main-text-animation'}>Thank you for understanding!</AlertTitle>
                <AlertDescription className={'text-[12px] text-white'}>This site is currently unavailable as we work on this project. You will only be able to use this site 3 months after the UI and backend work is completed!</AlertDescription>
              </Alert>
            </body>
          </WavyBackground>
        </I18nextProvider>
      </html>
    </ClerkProvider>
  )
}
