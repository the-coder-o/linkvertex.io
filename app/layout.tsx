'use client'

import React from 'react'

import { Inter } from 'next/font/google'
import './globals.css'

import Header from '@/components/ui/header/header'
import Footer from '@/components/ui/footer/footer'

const inter = Inter({ subsets: ['latin'] })

import { Analytics } from '@vercel/analytics/react'

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
        <Header />
        {children}
        <div className="main"></div>
        {/*<Footer />*/}
        <Analytics />
      </body>
    </html>
  )
}
