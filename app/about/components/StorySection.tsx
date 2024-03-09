import React from 'react'
import Image from 'next/image'
import Animation from '@/components/animation/framer-animaion'

const StorySection = () => (
  <div className={'mt-[150px] mb-[50px]'}>
    <div className={'flex flex-col justify-center gap-2'}>
      <Animation delay={0}>
        <h1 className={'text-white font-bold text-4xl max-sm:text-[25px]'}>
          Our <span className={'text-green-400 text-center'}>Founders&apos;</span> Story
        </h1>
      </Animation>
      <Animation delay={1}>
        <p className={'text-white text-xl max-sm:text-[16px] max-sm:leading-normal'}>
          <span className={'font-bold'}>Linkvertex.io:</span> is a tool to help you share everything you are, in one simple link – making your online content more discoverable, easier to manage and more likely to convert. Here’s where it all began.
        </p>
      </Animation>
      <Animation delay={2}>
        <div>
          <Image src={'https://api.blog.production.linktr.ee/wp-content/uploads/2019/11/lsp_linktree-pro-features-hero_191119-094426.png'} alt={'bg-image'} width={2000} height={2000} className={'mt-5 rounded-lg !w-full !bg-cover'} />
        </div>
      </Animation>
    </div>
  </div>
)

export default StorySection
