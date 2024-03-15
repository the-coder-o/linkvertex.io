import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { useUser } from '@clerk/clerk-react'

import Animation from '@/components/animation/framer-animaion'
import { useDataContext } from '@/app/dashboard/edit/edit-context'

import { Button } from '@/components/ui/button'
import LinkVertexIoIcon from '@/assets/images/link-logo.png'

import { LinkItem } from '@/interfaces/dashboard/edit.interface'

const Phone = () => {
  const { user } = useUser()
  const { links, title, description } = useDataContext()

  const imageUrl: string = user?.profileImageUrl || 'https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yZFM1dzZ4TE1wendoM2E2S212amtab3BUZXkiLCJyaWQiOiJ1c2VyXzJkU0ZjMEI3cWF0aWRSZTJJbk5FeVJvTnQ5VCJ9?width=80'

  return (
    <Animation delay={4} className={'sticky top-[10%]'}>
      <div className={'p-[1rem] overflow-auto h-[730px] border-8 rounded-[32px] border-[#ffffff10] bg-[#000] max-md:h-[100vh] max-md:rounded-none max-md:border-none max-md:'}>
        <div className={'relative flex items-center w-[300px] min-h-full justify-center p-[1rem] max-md:w-auto'}>
          <div className={'grid grid-cols-1 gap-y-4 max-md:justify-center max-md:items-center max-md:w-full'}>
            <div className={'flex items-center justify-center'}>
              <img src={imageUrl} alt="User profile" className={'rounded-full w-[100px]'} />
            </div>
            <div className={'flex items-center justify-center flex-col'}>
              <h2 className={'text-4xl font-bold text-white flex items-center justify-center text-ellipsis whitespace-break-spaces text-center text-style'}>{title}</h2>
              <p className={'text-white text-sm w-full flex items-center justify-center text-ellipsis whitespace-break-spaces text-center mt-2 text-style max-md:w-[300px]'}>{description}</p>
            </div>
            <div>
              {links?.map((links: LinkItem, index: number) => (
                <div key={index} className={cn('grid justify-center items-center', links.enabled ? 'block' : 'hidden')}>
                  <Link target={'_blank'} href={links?.url}>
                    <Button className={'w-full text-white font-[600] my-[3px] text-lg bg-[#131313] leading-[1.2] h-[3rem] p-[0.75rem] rounded-[10px] hover:scale-105 transition-all'}>{links?.title}</Button>
                  </Link>
                </div>
              ))}
            </div>
            <div className={'flex items-center justify-center'}>
              <p className={'text-xl font-bold text-white flex main-text-animation items-center justify-center gap-1 bottom-0'}>
                linkvertex.io
                <Image src={LinkVertexIoIcon} alt={'LinkvertexIoIcon'} width={15} height={15} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Animation>
  )
}

export default Phone
