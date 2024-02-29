import React from 'react'
import Footer from '@/components/ui/footer/footer'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { Input } from '@/components/ui/input'

const Edit = () => {
  return (
    <div className={'container'}>
      <div className={'mt-[100px]'}>
        <div>
          <Link href={'/dashboard'} className={'bg-[#1D1F1F]/80 rounded-[24px] text-white flex justify-center font-[500] pr-[10px] w-[13%] items-center py-[8px] text-[16px] hover:bg-[#1D1F1F] transition-all max-sm:w-[100px]'}>
            <ChevronLeft className={'w-5 h-5 font-bold'} />
            back
          </Link>
        </div>
        <div className={'mb-[3rem]'}>
          <h2 className={'text-4xl main-text-animation font-bold my-[16px] max-sm:text-[30px]'}>Edit Links</h2>
        </div>
        <div>
          <div className={'grid grid-cols-1 gap-y-12'}>
            <div>
              <label className={'text-start text-white text-md font-medium'}>title</label>
              <Input type={'text'} className={'mt-[0.5rem] !bg-[#141616] border-transparent focus:!bg-transparent rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'} />
            </div>
            <div>
              <label className={'text-start text-white text-md font-medium'}>description</label>
              <Input type={'text'} className={'mt-[0.5rem] !bg-[#141616] border-transparent focus:!bg-transparent rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'} />
            </div>
            <div>
              <label className={'text-start text-white text-md font-medium'}>page title</label>
              <div className="relative">
                <Input
                  type="text"
                  className={'mt-[0.5rem] !pl-[190px] !bg-[#141616] border-transparent focus:!bg-transparent rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'}
                  id="hs-inline-add-on"
                  name="hs-inline-add-on"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <span className="text-start text-gray-400 text-sm font-medium">https://linkvertex-a-bd.me/</span>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Edit
