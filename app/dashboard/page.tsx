'use client'

import React from 'react'

import { Copy, LogOutIcon, PieChart } from 'lucide-react'

import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import Footer from '@/components/ui/footer/footer'
import DashboardLink from '@/app/dashboard/components/DashboardPageLink'

const Dashboard = () => {
  return (
    <div className="container">
      <div className="mt-[150px] max-sm:mt-[100px] flex flex-col gap-9">
        <motion.span initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }} className="main-text-animation text-4xl font-bold max-[450px]:text-[30px]">
          Welcome, I&apos;m Hacker
        </motion.span>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 2 * 0.1 }} className="grid grid-cols-2 gap-4 max-[450px]:grid-cols-1">
          <DashboardLink
            href="/"
            label="Your Page"
            buttonContent={
              <Button className="flex items-center gap-2 px-[12px] text-sm font-bold text-[#81e6d9] rounded-[24px] border border-[#81e6d9] h-8 bg-transparent hover:bg-[#81e6d9]/10">
                <Copy className="w-3.5 h-3.5" />
                Copy
              </Button>
            }
          />
          <DashboardLink
            href="/dashboard/edit"
            label="Edit Link"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" color={'#A9A9A9'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            }
          />
          <DashboardLink
            href="/dashboard/profile"
            label="Social Links"
            icon={
              <svg stroke="currentColor" fill="currentColor" width="30" height="30" color={'#A9A9A9'} strokeWidth="0" viewBox="0 0 24 24" focusable="false" className="chakra-icon css-2z0lkw" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 7.05V4a1 1 0 0 0-1-1 1 1 0 0 0-.7.29l-7 7a1 1 0 0 0 0 1.42l7 7A1 1 0 0 0 11 18v-3.1h.85a10.89 10.89 0 0 1 8.36 3.72 1 1 0 0 0 1.11.35A1 1 0 0 0 22 18c0-9.12-8.08-10.68-11-10.95zm.85 5.83a14.74 14.74 0 0 0-2 .13A1 1 0 0 0 9 14v1.59L4.42 11 9 6.41V8a1 1 0 0 0 1 1c.91 0 8.11.2 9.67 6.43a13.07 13.07 0 0 0-7.82-2.55z"></path>
              </svg>
            }
          />
          <DashboardLink
            href="/dashboard/analytics"
            label="Analytics"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a9a9a9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-pie-chart">
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                <path d="M22 12A10 10 0 0 0 12 2v10z" />
              </svg>
            }
          />
        </motion.div>
        <Button className="flex items-center gap-2 text-[16px] font-medium rounded-[20px] bg-transparent hover:bg-[#1D1F1F]">
          <motion.div className={'flex items-center gap-2 text-[16px] font-medium'} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 3 * 0.1 }}>
            <LogOutIcon className="rotate-180 w-4 h-4" />
            Logout
          </motion.div>
        </Button>
      </div>
      <Footer />
    </div>
  )
}

export default Dashboard
