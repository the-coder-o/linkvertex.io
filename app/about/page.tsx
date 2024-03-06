'use client'

import React from 'react'

import Image from 'next/image'

import { motion } from 'framer-motion'

import { Globe, Lock, SwatchBook, Target } from 'lucide-react'

const Page = () => {
  return (
    <div className={'container'}>
      <div className={'mt-[150px] mb-[50px]'}>
        <div className={'flex flex-col justify-center gap-2'}>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }} className={'text-white font-bold text-4xl max-sm:text-[25px]'}>
            Our <span className={'text-green-400 text-center'}>Founders&apos;</span> Story
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 2 * 0.1 }} className={'text-white text-xl max-sm:text-[16px] max-sm:leading-normal'}>
            <span className={'font-bold'}>Linkvertex.io:</span> is a tool to help you share everything you are, in one simple link – making your online content more discoverable, easier to manage and more likely to convert. Here’s where it all began.
          </motion.p>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 3 * 0.1 }}>
            <Image src={'https://api.blog.production.linktr.ee/wp-content/uploads/2019/11/lsp_linktree-pro-features-hero_191119-094426.png'} alt={'bg-image'} width={2000} height={2000} className={'mt-5 rounded-lg !w-full !bg-cover'} />
          </motion.div>
        </div>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 4 * 0.1 }} className={'flex flex-col gap-5 mt-5'}>
          <div className={'flex flex-col gap-2'}>
            <h2 className={'text-xl font-bold text-purple-500 flex items-center gap-1'}>
              Bridging Your Worlds
              <Globe width={20} />
            </h2>
            <p className={'text-white text-justify  max-sm:text-[15px] max-sm:leading-normal'}>
              Founded by a team of passionate digital architects, Linkvertex.io began as an answer to a common conundrum: How can one manage an ever-growing list of online profiles without clutter and complexity? Our journey was fueled by the vision to create a centralized, easy-to-use platform
              where individuals and businesses alike can connect all their digital dots.
            </p>
          </div>
          <div className={'flex flex-col gap-2'}>
            <h2 className={'text-xl font-bold text-blue-400 flex items-center gap-1'}>
              Your Digital Hub
              <Target width={20} />
            </h2>
            <p className={'text-white text-justify  max-sm:text-[15px] max-sm:leading-normal'}>
              In an ever-expanding digital universe, your online presence is a constellation of profiles, platforms, and portfolios. At Linkvertex.io, we provide the gravity that holds your digital cosmos together, creating a singular, powerful point of connection between you and your audience. Our
              mission is simple: to streamline your online identity into a single, elegant link that opens up a world of connections.
            </p>
          </div>
          <div className={'flex flex-col gap-2'}>
            <h2 className={'text-xl font-bold text-yellow-400 flex items-center gap-1'}>
              Simplify, Connect, Amplify
              <SwatchBook width={20} />
            </h2>
            <p className={'text-white text-justify  max-sm:text-[15px] max-sm:leading-normal'}>
              Linkvertex.io isn't just about simplifying your online presence; it's about amplifying your reach. Whether you're a creator looking to showcase your work, a professional aiming to connect all your credentials, or a business wanting to drive engagement across multiple channels, our
              platform is your launchpad.
            </p>
          </div>
          <div className={'flex flex-col gap-2'}>
            <h2 className={'text-xl font-bold text-orange-400 flex items-center gap-1'}>
              Intuitive, Robust, and Secure
              <Lock width={20} />
            </h2>
            <p className={'text-white text-justify  max-sm:text-[15px] max-sm:leading-normal'}>
              Our intuitive interface is designed for the digital novice and expert alike, ensuring you can manage your links with ease and efficiency. Security is not an afterthought; it's woven into the very fabric of our platform. We continuously evolve to implement robust security measures that
              protect your information and your peace of mind.
            </p>
          </div>
        </motion.div>
      </div>
      <div className={'flex items-center gap-2 mb-6'}>
        <a href="https://www.buymeacoffee.com/abdulbacit">
          <img className={'!h-8'} src="https://img.buymeacoffee.com/button-api/?text=Buy a coffee&emoji=☕&slug=abdulbacit&button_colour=5F7FFF&font_colour=ffffff&font_family=Inter&outline_colour=000000&coffee_colour=FFDD00" />
        </a>
        <iframe src="https://github.com/sponsors/the-coder-o/button" title="Sponsor the-coder-o" height="32" width="114"></iframe>
        <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world" className={'!m-0 !p-0'}>
          <img className={'!h-8'} src="https://vercel.com/button" alt="Deploy with Vercel" />
        </a>
      </div>
      <div className={'bg-green-400 rounded-[25px] mb-[50px]'}>
        <h2 className={'flex items-center justify-center text-white font-bold text-[100px] py-[10px] max-md:text-[80px] max-[550px]:text-[70px] max-[490px]:text-[60px] max-[410px]:text-[50px]'}>linkvertex.io</h2>
      </div>
    </div>
  )
}

export default Page
