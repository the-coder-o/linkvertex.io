import React from 'react'
import {DotBackgroundDemo} from "@/components/animation/dot-background";

const Loader = () => {
  return (
    <div className={'fixed bottom-0 left-0 right-0 top-0 z-[9999999999] flex items-center justify-center bg-black'}>
        <div className="loader">
            <div className="loader-circle"></div>
            <span className="text-[#7e3af2] text-[26px] font-bold">Loading...</span>
        </div>
        <div className={'opacity-25 fixed left-0 right-0 top-0 bottom-0'}>
            <DotBackgroundDemo />
        </div>
    </div>
  )
}

export default Loader
