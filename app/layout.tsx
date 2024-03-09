'use client'

import { ReactNode } from 'react'
import { dark } from '@clerk/themes'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import Header from '@/components/ui/header/header'
import { Analytics } from '@vercel/analytics/react'

import './globals.css'
import i18n from '@/i18n/i18n'
import { I18nextProvider } from 'react-i18next'

import AlertMessage from '@/components/alerts/alert-message'
import { DotBackgroundDemo } from '@/components/animation/dot-background'
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
          <DotBackgroundDemo>
            <WavyBackground>
              <body className={inter.className}>
                <Header />
                {children}
                <Analytics />
                <AlertMessage />
              </body>
            </WavyBackground>
          </DotBackgroundDemo>
        </I18nextProvider>
      </html>
    </ClerkProvider>
  )
}
