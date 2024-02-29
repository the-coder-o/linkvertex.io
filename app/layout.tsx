'use client'

import React from 'react'

import './globals.css'
import { Inter } from 'next/font/google'

import { RocketIcon } from 'lucide-react'

import Header from '@/components/ui/header/header'

const inter = Inter({ subsets: ['latin'] })

import { Analytics } from '@vercel/analytics/react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <title>Home | Linkvertex</title>
      </head>
      <body className={inter.className}>
        <div className={'main'}></div>
        <Header />
        {children}
        <Analytics />
        <Alert className={'absolute w-[350px] z-50 !bg-[#000] right-2 bottom-2  bg-transparent max-md:w-full max-md:left-0 fixed'}>
          <RocketIcon className="h-4 w-4 !text-white !main-text-animation" />
          <AlertTitle className={'text-white main-text-animation'}>Thank you for understanding!</AlertTitle>
          <AlertDescription className={'text-[12px] text-white'}>This site is currently unavailable as we work on this project. You will only be able to use this site 3 months after the UI and backend work is completed!</AlertDescription>
        </Alert>
      </body>
    </html>
  )
}
