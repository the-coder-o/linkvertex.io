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
        <title>Home | Linkvertex</title>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <div className="main"></div>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
