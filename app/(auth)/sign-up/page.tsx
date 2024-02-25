import React from 'react'

import GoogleIcons from '@/assets/auth/google.png'
import GithubIcons from '@/assets/auth/github.png'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

const SignUp = () => {
  return (
    <div className={'container'}>
      <div className={'flex flex-col items-center justify-center gap-[20px] my-[160px]'}>
        <div className={'flex items-center flex-col justify-center gap-2.5'}>
          <p className={'text-white text-[0.875rem]'}>Sign Up with:</p>
          <div className={'flex items-center justify-between w-[440px] gap-2'}>
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
        <div className={'w-[440px]'}>
          <form className={'flex flex-col items-center justify-center gap-[1.5rem]'}>
            <Input type={'email'} placeholder={'email'} className={'rounded-[20px] px-[16px] text-white bg-transparent border-2 border-[#feb2b2] text-[16px] !outline-none'} />
            <Input type={'password'} placeholder={'password'} className={'rounded-[20px] px-[16px] text-white bg-transparent border-2 border-[#feb2b2] text-[16px] !outline-none'} />
            <Button className={'flex items-center gap-2 rounded-[20px] px-[16px] text-[16px] font-[500] bg-[#81E6D9] hover:bg-[#81E6D9]/90 text-black w-full'}>Sign Up</Button>
            <Link href={'/'} className={'text-[16px] text-white font-[600] hover:underline'}>
              Forgot Password?
            </Link>
          </form>
          <Button className={'mt-[20px] flex items-center gap-2 rounded-[20px] px-[16px] text-[16px] font-[500] bg-[#90CDF4] hover:bg-[#90CDF4]/90 text-black w-full'}>Sign In</Button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
