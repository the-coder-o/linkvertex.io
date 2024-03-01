'use client'

import React, { useCallback, useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, Link2, ShieldAlert, Tags, Trash } from 'lucide-react'
import { LinkItem, LinkItemProps } from '@/app/dashboard/edit/interfaces/LinkItemProps'
import { Input } from '@/components/ui/input'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const regexForPageTitle = /^[A-Za-z-]+$/

const EditPage: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [links, setLinks] = useState<LinkItem[]>([])

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setInputValue(value)
    setIsValid(regexForPageTitle.test(value))
  }, [])

  const addLink = useCallback(() => {
    const newLink: LinkItem = {
      id: Date.now().toString(),
      title: '',
      url: '',
      enabled: true,
    }
    setLinks((prevLinks) => [...prevLinks, newLink])
    console.log(newLink)
  }, [])

  const toggleLinkEnabled = useCallback((id: string) => {
    setLinks((prevLinks) => prevLinks.map((link) => (link.id === id ? { ...link, enabled: !link.enabled } : link)))
  }, [])

  const deleteLink = useCallback((id: string) => {
    setLinks((prevLinks) => prevLinks.filter((link) => link.id !== id))
  }, [])

  const handleLinkEdit = useCallback((id: string, title: string, url: string) => {
    setLinks((prevLinks) => prevLinks.map((link) => (link.id === id ? { ...link, title, url } : link)))
    console.log(links)
  }, [])

  return (
    <div className="container">
      <div className="mt-[100px] mb-[100px]">
        <div>
          <Link href="/dashboard" className="bg-[#1D1F1F]/80 rounded-[24px] text-white flex justify-center font-[500] pr-[10px] w-[13%] items-center py-[8px] text-[16px] hover:bg-[#1D1F1F] transition-all max-sm:w-[100px]">
            <ChevronLeft className="w-5 h-5 font-bold" /> back
          </Link>
        </div>
        <div className="mb-[3rem]">
          <h2 className="text-4xl main-text-animation font-bold my-[16px] max-sm:text-[30px]">Edit Links</h2>
        </div>
        <div className={'flex justify-between gap-[30px]'}>
          <div className="grid grid-cols-1 gap-y-12">
            <div className={'grid grid-cols-1 gap-y-12'}>
              <div>
                <label className={'text-start text-white text-md font-medium'}>title</label>
                <Input
                  type={'text'}
                  className={'mt-[0.5rem] !bg-[#141616] border-transparent focus:!bg-transparent rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'}
                />
              </div>
              <div>
                <label className={'text-start text-white text-md font-medium'}>description</label>
                <Input
                  type={'text'}
                  className={'mt-[0.5rem] !bg-[#141616] border-transparent focus:!bg-transparent rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'}
                />
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
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                    <span className="text-start text-gray-400 text-sm font-medium">https://linkvertex-a-bd.me/</span>{' '}
                  </div>
                </div>
                {!isValid && <p className="text-red-500 text-sm">Please write a correct your page url title.</p>}{' '}
              </div>
            </div>
            <Alert className="!bg-[#1E2B32] border-transparent rounded-[24px]">
              <ShieldAlert className="bg-[#90CDF4] rounded-full flex items-center justify-center p-[4px]" />
              <AlertTitle className="text-white ml-2">Remember!</AlertTitle>
              <AlertDescription className="text-white ml-2 text-[16px] font-medium">To edit social links, go to Profile Settings. You can also use drag and drop to arrange the links sequence.</AlertDescription>
            </Alert>
            <div className="border-2 border-[#ffffff29] grid grid-cols-1 items-center rounded-[24px] p-[0.5rem]">
              {links.map((link, index) => (
                <div key={link.id} className={cn(link ? 'grid grid-cols-1 border-1 border-[#ffffff29] bg-[#1a202c99] p-[1rem] rounded-[24px] mb-[15px]' : 'hidden')}>
                  <h2 className="text-md uppercase font-bold text-white">URL {index + 1}</h2>
                  <div className="relative">
                    <Input
                      placeholder="Label"
                      value={link.title}
                      onChange={(e) => handleLinkEdit(link.id, e.target.value, link.url)}
                      type="text"
                      className="mt-[0.5rem] !bg-[#1C2129] border-transparent focus:!bg-transparent rounded-[20px] px-[40px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]"
                    />
                    <Tags className="text-white absolute top-[18px] left-3 w-5 h-5" />
                  </div>
                  <div className="relative">
                    <Input
                      placeholder="Link URL"
                      value={link.url}
                      onChange={(e) => handleLinkEdit(link.id, link.title, e.target.value)}
                      type="text"
                      className="mt-[0.5rem] !bg-[#1C2129] border-transparent focus:!bg-transparent rounded-[20px] px-[40px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]"
                    />
                    <Link2 className="text-white absolute top-[18px] left-3 w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-between mt-[15px]">
                    <Switch id={`switch-${link.id}`} checked={link.enabled} onChange={() => toggleLinkEnabled(link.id)} />
                    <Trash onClick={() => deleteLink(link.id)} className="text-red-500 w-5 h-5 cursor-pointer" />
                  </div>
                </div>
              ))}
              <Button onClick={addLink} className="!font-bold flex items-center justify-center rounded-[20px] px-[16px] text-[16px] bg-[#90CDF4] hover:bg-[#90CDF4]/90 text-black w-full">
                Add Link
              </Button>
            </div>
            <Button className="justify-center py-6 !font-bold flex items-center gap-2 rounded-[18px] px-[16px] text-[16px] bg-[#9AE6B4] hover:bg-[#9AE6B4]/90 text-black w-full">Save</Button>
          </div>
          <div>
            <div className={'p-[1rem] border-8 rounded-[32px] border-[#ffffff29] sticky top-[10%]'}>
              <div className={'w-[300px] h-[680px] flex items-center justify-center'}>
                <div className={'grid grid-cols-1 gap-y-4'}>
                  <div className={'flex items-center justify-center flex-col'}>
                    <h1 className={'text-4xl font-bold text-white'}>Abdul Basit</h1>
                    <p className={'text-white text-sm w-full text-center'}>Im looking for sponsorships for the featured repos below. This sponsorship will go towards maintaining some open-source applications with ongoing development.</p>
                  </div>
                  {links?.map((links: LinkItem) => (
                    <Link href={links?.url} className={'flex items-center justify-center text-white font-semibold text-lg border-2 border-[#ffffff29] bg-[#0e1312] leading-[1.2] w-[300px] h-[3rem] p-[0.75rem] rounded-[20px] hover:scale-105 transition-all shadow-style'}>
                      {links?.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditPage
