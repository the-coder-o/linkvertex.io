'use client'

import React, { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import GoogleIcons from '@/assets/auth/google.png'
import GithubIcons from '@/assets/auth/github.png'
import { Eye, EyeOff } from 'lucide-react'
import Footer from '@/components/ui/footer/footer'

const SignIn = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <div className={'container'}>
      <div className={'flex flex-col items-center justify-center gap-[20px] my-[200px] max-sm:my-[90px] max-sm:gap-[10px]'}>
        <div className={'flex items-center flex-col justify-center gap-2.5'}>
          <p className={'text-white text-[0.875rem]'}>Sign In with:</p>
          <div className={'flex items-center justify-between w-[440px] max-sm:w-full gap-2'}>
            <Button className={'flex items-center gap-2 rounded-[20px] px-[16px] text-[16px] font-[500] bg-transparent border border-[#ffffff29] hover:bg-[#C8E7F7] hover:text-black w-full'}>
              <Image width={13} height={13} src={GoogleIcons} alt={'GoogleIcons'} />
              Google
            </Button>
            <Button className={'flex items-center gap-2 rounded-[20px] px-[16px] text-[16px] font-[500] bg-transparent border border-[#ffffff29] hover:bg-[#C8E7F7] hover:text-black w-full'}>
              <Image width={13} height={13} src={GithubIcons} alt={'GithubIcons'} />
              Github
            </Button>
          </div>
        </div>
        <p className={'text-[#464c4b] text-center'}>or</p>
        <div className={'w-[440px] max-sm:w-full'}>
          <form className={'flex flex-col items-center justify-center gap-[1.5rem]'}>
            <Input type={'email'} placeholder={'email'} className={'rounded-[20px] px-[16px] text-white bg-transparent border-2 border-[#feb2b2] text-[16px] !outline-none'} />
            <div className={'w-full relative'}>
              <Input placeholder={'repeat password'} type={showPassword ? 'text' : 'password'} className={'rounded-[20px] px-[16px] text-white bg-transparent border-2 border-[#feb2b2] text-[16px] !outline-none'} />
              <div onClick={() => setShowPassword(!showPassword)} className={'bg-white/10 cursor-pointer rounded-full absolute top-0 right-0 flex items-center justify-center w-[40px] h-[40px]'}>
                {showPassword ? <Eye className={'text-white w-5 h-5 flex items-center justify-center'} /> : <EyeOff className={'text-white w-5 h-5 flex items-center justify-center'} />}
              </div>
            </div>
            <Button className={'flex items-center gap-2 rounded-[20px] px-[16px] text-[16px] font-[500] bg-[#81E6D9] hover:bg-[#81E6D9]/90 text-black w-full'}>Sign In</Button>
            <Link href={'/'} className={'text-[16px] text-white font-[600] hover:underline'}>
              Forgot Password?
            </Link>
          </form>
          <Link href={'/sign-up'} className={'mt-[20px] justify-center py-2 flex items-center gap-2 rounded-[20px] px-[16px] text-[16px] font-[500] bg-[#90CDF4] hover:bg-[#90CDF4]/90 text-black w-full'}>
            Sign Up
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SignIn
