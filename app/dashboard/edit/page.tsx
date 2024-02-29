'use client'

import React, { useState } from 'react'

import { ChevronLeft, Link, ShieldAlert, Tags } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'

const regexForPageTitle: RegExp = /^[A-Za-z-]+$/

const Edit = () => {
  const [inputValue, setInputValue] = useState('')
  const [isValid, setIsValid] = useState(true)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setInputValue(value)

    setIsValid(regexForPageTitle.test(value))
  }

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
                  value={inputValue}
                  onChange={handleInputChange}
                  type="text"
                  className={'mt-[0.5rem] !pl-[190px] !bg-[#141616] border-transparent focus:!bg-transparent rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'}
                  id="hs-inline-add-on"
                  name="hs-inline-add-on"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <span className="text-start text-gray-400 text-sm font-medium">https://linkvertex-a-bd.me/</span>
                </div>
              </div>
              {!isValid && <p className="text-red-500 text-sm">Please write a correct your page url title.</p>}
            </div>
            <Alert className={'!bg-[#1E2B32] border-transparent rounded-[24px]'}>
              <ShieldAlert className="bg-[#90CDF4] rounded-full flex items-center justify-center p-[4px] " />
              <AlertTitle className={'text-white ml-2'}>Remember!</AlertTitle>
              <AlertDescription className={'text-white ml-2 text-[16px] font-medium'}>To edit social links, go to Profile Settings. You can also use drag and drop to arrange the links sequence.</AlertDescription>
            </Alert>
            <div className={'border-2 border-[#ffffff29] rounded-[24px] p-[0.5rem]'}>
              <div className={'grid grid-cols-1 border-1 border-[#ffffff29] bg-[#1a202c99] p-[1rem] rounded-[24px] mb-[15px]'}>
                <h2 className={'text-md uppercase font-bold text-white'}>URL 1</h2>
                <div className={'relative'}>
                  <Input
                    placeholder={'label'}
                    type={'text'}
                    className={'mt-[0.5rem] !bg-[#1C2129] border-transparent focus:!bg-transparent rounded-[20px] px-[40px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'}
                  />
                  <Tags className={'text-white absolute top-[18px] left-3 w-5 h-5'} />
                </div>
                <div className={'relative'}>
                  <Input
                    placeholder={'link url'}
                    type={'text'}
                    className={'mt-[0.5rem] !bg-[#1C2129] border-transparent focus:!bg-transparent rounded-[20px] px-[40px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'}
                  />
                  <Link className={'text-white absolute top-[18px] left-3 w-5 h-5'} />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mt-[15px]">
                    <Switch id="airplane-mode" />
                  </div>
                </div>
              </div>
              <div>
                <Button className={'justify-center py-2 !font-bold flex items-center gap-2 rounded-[20px] px-[16px] text-[16px] bg-[#90CDF4] hover:bg-[#90CDF4]/90 text-black w-full'}>Add Link</Button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Edit
