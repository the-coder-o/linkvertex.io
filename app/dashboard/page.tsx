import React from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { Copy } from 'lucide-react'

const Dashboard = () => {
  return (
    <div className={'container'}>
      <div className={'mt-[150px] flex flex-col gap-9'}>
        <span className={'main-text-animation text-4xl font-bold max-[450px]:text-[30px]'}>Welcome, I&apos;m Hacker</span>
        <div className={'grid grid-cols-2 gap-4 max-[450px]:grid-cols-1'}>
          <Link href={'/'}>
            <div className={'border border-[#ffffff29] rounded-[24px] p-[20px] max-[450px]:p-[15px] ease duration-200 hover:scale-105 max-[450px]:flex max-[450px]:items-center max-[450px]:justify-between'}>
              <h2 className={'text-[#A9A9A9] text-xl font-bold max-[450px]:text-[20px]'}>Your Page</h2>
              <Button className={'flex items-center gap-2 mt-[35px] max-[450px]:mt-0 px-[12px] text-sm font-bold text-[#81e6d9] rounded-[24px] border border-[#81e6d9] h-8 bg-transparent hover:bg-[#81e6d9]/10'}>
                <Copy className={'w-3.5 h-3.5'} />
                Copy
              </Button>
            </div>
          </Link>
          <div className={'border border-[#ffffff29] rounded-[24px] p-[20px] max-[450px]:p-[15px] ease duration-200 hover:scale-105'}>
            <Link href={'/dashboard/edit'} className={'max-[450px]:flex max-[450px]:items-center max-[450px]:justify-between'}>
              <h2 className={'text-[#A9A9A9] text-xl font-bold max-[450px]:text-[20px]'}>Edit Link</h2>
              <div className={'mt-[40px] max-[450px]:mt-0'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" color={'#A9A9A9'} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-link">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
            </Link>
          </div>
          <div className={'border border-[#ffffff29] rounded-[24px] p-[20px] max-[450px]:p-[15px] ease duration-200 hover:scale-105'}>
            <Link href={'/dashboard/profile'} className={'max-[450px]:flex max-[450px]:items-center max-[450px]:justify-between'}>
              <h2 className={'text-[#A9A9A9] text-xl font-bold max-[450px]:text-[20px]'}>Social Links</h2>
              <div className={'mt-[35px] max-[450px]:mt-0'}>
                <svg stroke="currentColor" fill="currentColor" width="30" height="30" color={'#A9A9A9'} stroke-width="0" viewBox="0 0 24 24" focusable="false" className="chakra-icon css-2z0lkw" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 7.05V4a1 1 0 0 0-1-1 1 1 0 0 0-.7.29l-7 7a1 1 0 0 0 0 1.42l7 7A1 1 0 0 0 11 18v-3.1h.85a10.89 10.89 0 0 1 8.36 3.72 1 1 0 0 0 1.11.35A1 1 0 0 0 22 18c0-9.12-8.08-10.68-11-10.95zm.85 5.83a14.74 14.74 0 0 0-2 .13A1 1 0 0 0 9 14v1.59L4.42 11 9 6.41V8a1 1 0 0 0 1 1c.91 0 8.11.2 9.67 6.43a13.07 13.07 0 0 0-7.82-2.55z"></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
