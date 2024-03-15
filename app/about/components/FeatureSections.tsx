'use client'

import React from 'react'

import Animation from '@/components/animation/framer-animaion'
import { Globe, Lock, SwatchBook, Target } from 'lucide-react'

const FeatureSections = () => {
  return (
    <Animation delay={3}>
      <div className={'mt-5 flex flex-col gap-5'}>
        <div className={'flex flex-col gap-2'}>
          <h2 className={'flex items-center gap-1 text-xl font-bold text-purple-500'}>
            Bridging Your Worlds
            <Globe width={20} />
          </h2>
          <p className={'text-justify text-white  max-sm:text-[15px] max-sm:leading-normal'}>Founded by a team of passionate digital architects, Linkvertex.io began as an answer to a common conundrum: How can one manage an ever-growing list of online profiles without clutter and complexity? Our journey was fueled by the vision to create a centralized, easy-to-use platform where individuals and businesses alike can connect all their digital dots.</p>
        </div>
        <div className={'flex flex-col gap-2'}>
          <h2 className={'flex items-center gap-1 text-xl font-bold text-blue-400'}>
            Your Digital Hub
            <Target width={20} />
          </h2>
          <p className={'text-justify text-white  max-sm:text-[15px] max-sm:leading-normal'}>
            In an ever-expanding digital universe, your online presence is a constellation of profiles, platforms, and portfolios. At Linkvertex.io, we provide the gravity that holds your digital cosmos together, creating a singular, powerful point of connection between you and your audience. Our mission is simple: to streamline your online identity into a single, elegant link that opens up a world of connections.
          </p>
        </div>
        <div className={'flex flex-col gap-2'}>
          <h2 className={'flex items-center gap-1 text-xl font-bold text-yellow-400'}>
            Simplify, Connect, Amplify
            <SwatchBook width={20} />
          </h2>
          <p className={'text-justify text-white  max-sm:text-[15px] max-sm:leading-normal'}>Linkvertex.io isn't just about simplifying your online presence; it's about amplifying your reach. Whether you're a creator looking to showcase your work, a professional aiming to connect all your credentials, or a business wanting to drive engagement across multiple channels, our platform is your launchpad.</p>
        </div>
        <div className={'flex flex-col gap-2'}>
          <h2 className={'flex items-center gap-1 text-xl font-bold text-orange-400'}>
            Intuitive, Robust, and Secure
            <Lock width={20} />
          </h2>
          <p className={'text-justify text-white  max-sm:text-[15px] max-sm:leading-normal'}>Our intuitive interface is designed for the digital novice and expert alike, ensuring you can manage your links with ease and efficiency. Security is not an afterthought; it's woven into the very fabric of our platform. We continuously evolve to implement robust security measures that protect your information and your peace of mind.</p>
        </div>
      </div>
    </Animation>
  )
}

export default FeatureSections
