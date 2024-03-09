'use client'

import React from 'react'

import AboutLinks from '@/app/about/components/AboutLinks'
import StorySection from '@/app/about/components/StorySection'
import FeatureSections from '@/app/about/components/FeatureSections'

const About = () => {
  return (
    <div className={'container'}>
      <StorySection />
      <FeatureSections />
      <AboutLinks />
      <div className={'bg-[#E8C1E9] rounded-[25px] mb-[50px]'}>
        <h2 className={'flex items-center justify-center text-[#502374] font-bold text-[100px] py-[10px] max-md:text-[80px] max-[550px]:text-[70px] max-[490px]:text-[60px] max-[410px]:text-[50px]'}>linkvertex.io</h2>
      </div>
    </div>
  )
}

export default About
