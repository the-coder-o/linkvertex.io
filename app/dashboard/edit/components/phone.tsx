import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import Animation from '@/components/animation/framer-animaion'
import { useDataContext } from '@/app/dashboard/edit/edit-context'

import { LinkItem } from '@/interfaces/dashboard/edit.interface'
import LinkVertexIoIcon from '@/assets/images/link-logo.png'

const Phone = () => {
  const { links, title, description } = useDataContext()

  return (
    <Animation delay={4}>
      <div className={'p-[1rem] overflow-auto h-[730px] border-8 rounded-[32px] border-[#ffffff29] bg-[#0A0C0C] sticky top-[10%]'}>
        <div className={'relative flex items-center w-[300px] min-h-full justify-center p-[1rem]'}>
          <div className={'grid grid-cols-1 gap-y-4'}>
            <div className={'flex items-center justify-center flex-col'}>
              <h2 className={'text-4xl font-bold text-white flex items-center justify-center text-ellipsis whitespace-break-spaces text-center text-style'}>{title}</h2>
              <p className={'text-white text-sm w-full flex items-center justify-center text-ellipsis whitespace-break-spaces text-center mt-2 text-style'}>{description}</p>
            </div>
            <div className={'grid gap-y-4 justify-center items-center'}>
              {links?.map((links: LinkItem, index: number) => (
                <div key={index} className={cn(links.enabled ? 'block' : 'hidden')}>
                  <Link target={'_blank'} href={links?.url} className={'flex items-center justify-center text-white font-semibold text-lg border-2 border-[#ffffff29] bg-[#0e1312] leading-[1.2] w-[300px] h-[3rem] p-[0.75rem] rounded-[20px] hover:scale-105 transition-all shadow-style'}>
                    {links?.title}
                  </Link>
                </div>
              ))}
              <div className={'flex items-center justify-center'}>
                <p className={'text-xl font-bold text-white flex main-text-animation items-center justify-center gap-1 bottom-0'}>
                  linkvertex.io
                  <Image src={LinkVertexIoIcon} alt={'LinkvertexIoIcon'} width={15} height={15} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Animation>
  )
}

export default Phone
