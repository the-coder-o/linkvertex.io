'use client'

import React, { useCallback, useState } from 'react'

import dynamic from 'next/dynamic'
import { DropResult } from 'react-beautiful-dnd'

const DragDropContext = dynamic(() => import('react-beautiful-dnd').then((mod) => mod.DragDropContext), { ssr: false })
const Droppable = dynamic(() => import('react-beautiful-dnd').then((mod) => mod.Droppable), { ssr: false })
const Draggable = dynamic(() => import('react-beautiful-dnd').then((mod) => mod.Draggable), { ssr: false })

import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

import { ChevronLeft, Link2, ShieldAlert, Tags, Trash } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

import { Bar } from '@/types/button-card-props'
import { LinkItem } from '@/app/dashboard/edit/interfaces/LinkItemProps'

import EmojiIcon from '@/assets/dashboard/smile.png'
import LinkVertexIoIcon from '@/assets/images/link-logo.png'
import ButtonCard from '@/components/button-card'

const regexForPageTitle = /^[A-Za-z-]+$/

const EditPage: React.FC = () => {
  const [inputValue, setInputValue] = useState('your-page-url')
  const [isValid, setIsValid] = useState(true)
  const [links, setLinks] = useState<LinkItem[]>([])
  const [title, setTitle] = useState('My Page')
  const [description, setDescription] = useState('One Place for All Your Links. One link to rule them all. Easily place your links in a beautiful single page.')
  const [error, setError] = useState('')
  const [error2, setError2] = useState('')
  const [tab, setTab] = useState(1)

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setInputValue(value)
    setIsValid(regexForPageTitle.test(value))
  }, [])

  const handleInputChangeValidation = (e: any) => {
    const { value } = e.target
    if (value.length <= 50) {
      setTitle(value)
      setError('')
    } else {
      setError('Title cannot exceed 50 characters.')
    }
  }

  const handleInputChangeDescription = (e: any) => {
    const { value } = e.target
    if (value.length <= 150) {
      setDescription(value)
      setError2('')
    } else {
      setError2('Description cannot exceed 150 characters.')
    }
  }

  const updateTab = (id: number) => {
    setTab(id)
  }

  const addLink = useCallback(() => {
    const newLink: LinkItem = {
      id: Date.now().toString(),
      title: '',
      url: '',
      enabled: true,
    }
    setLinks((prevLinks) => [...prevLinks, newLink])
  }, [])

  const toggleLinkEnabled = useCallback((id: string) => {
    setLinks((prevLinks) => prevLinks.map((link) => (link.id === id ? { ...link, enabled: !link.enabled } : link)))
  }, [])

  const deleteLink = useCallback((id: string) => {
    setLinks((prevLinks) => prevLinks.filter((link) => link.id !== id))
  }, [])

  const handleLinkEdit = useCallback((id: string, title: string, url: string) => {
    setLinks((prevLinks) => prevLinks.map((link) => (link.id === id ? { ...link, title, url } : link)))
  }, [])

  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) {
        return
      }

      const items = Array.from(links)
      const [reorderedItem] = items.splice(result.source.index, 1)
      items.splice(result.destination.index, 0, reorderedItem)

      setLinks(items)
    },
    [links],
  )

  const cards: { title: string; bars: Bar[] }[] = [
    {
      title: 'Air Leaf',
      bars: [
        { color: 'bg-green-500', width: 'w-3/4' },
        { color: 'bg-green-500', width: 'w-3/4' },
        { color: 'bg-green-500', width: 'w-3/4' },
      ],
    },
  ]

  return (
    <div className="container">
      <div className="mt-[100px] mb-[100px]">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }}>
          <Link href={'/dashboard'} className="bg-[#1D1F1F]/80 rounded-[24px] text-white flex justify-center font-[500] pr-[10px] w-[13%] items-center py-[8px] text-[16px] hover:bg-[#1D1F1F] transition-all max-sm:w-[100px]">
            <ChevronLeft className="w-5 h-5 font-bold" /> back
          </Link>
        </motion.div>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 2 * 0.1 }} className="mb-[3rem]">
          <h2 className="text-4xl main-text-animation font-bold my-[16px] max-sm:text-[30px]">Edit Links</h2>
        </motion.div>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 3 * 0.1 }} className={'flex items-center gap-6 border-b-2 border-b-white/40 mb-[20px]'}>
          <span onClick={() => updateTab(1)} className={cn('text-white cursor-pointer', tab === 1 ? 'border-b-2' : 'border-b-transparent')}>
            links
          </span>
          <span onClick={() => updateTab(2)} className={cn('text-white cursor-pointer', tab === 2 ? 'border-b-2' : 'border-b-transparent')}>
            themes
          </span>
        </motion.div>
        <div className={'flex justify-between gap-[30px] max-md:gap-0'}>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 3 * 0.1 }} className={cn('grid grid-cols-1 gap-y-12', tab === 1 ? 'block' : 'hidden')}>
            <div className={'grid grid-cols-1 gap-y-6'}>
              <div className={'relative'}>
                <label className={'text-start text-white text-md font-medium'}>title</label>
                <Input
                  value={title}
                  onChange={handleInputChangeValidation}
                  type={'text'}
                  className={'mt-[0.5rem] !bg-[#141616] border-transparent focus:!bg-transparent rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'}
                />
                <Image src={EmojiIcon} alt={'EmojiIcon'} width={18} height={18} className={'absolute top-[42.8px] cursor-pointer right-3'} />
                {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
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
              <div>
                <label className={'text-start text-white text-md font-medium'}>description</label>
                <Textarea
                  value={description}
                  onChange={handleInputChangeDescription}
                  className={
                    'mt-[0.5rem] h-[150px] !bg-[#141616] !pt-[16px] border-transparent !outline-none focus:!bg-transparent rounded-[20px] px-[16px] bg-transparent text-[1rem] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'
                  }
                />
                {error2 && <div className="text-red-500 text-sm mt-2">{error2}</div>}
              </div>
            </div>
            <Alert className="!bg-[#1E2B32] border-transparent rounded-[24px] mt-8">
              <ShieldAlert className="bg-[#90CDF4] rounded-full flex items-center justify-center p-[4px]" />
              <AlertTitle className="text-white ml-2">Remember!</AlertTitle>
              <AlertDescription className="text-white ml-2 text-[16px] font-medium">To edit social links, go to Profile Settings. You can also use drag and drop to arrange the links sequence.</AlertDescription>
            </Alert>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable-links">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef} className="border-2 border-[#ffffff29] grid grid-cols-1 mt-10 items-center rounded-[24px] p-[0.5rem]">
                    {links.map((link, index) => (
                      <Draggable key={link.id} draggableId={link.id} index={index}>
                        {(provided) => (
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className={'grid grid-cols-1 border-2 border-[#ffffff29] bg-[#1a202c99] p-[1.2rem] rounded-[24px] mb-[15px]'}>
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
                              <Switch id={`switch-${link.id}`} checked={link.enabled} onClick={() => toggleLinkEnabled(link.id)} />
                              <Trash onClick={() => deleteLink(link.id)} className="text-red-500 w-5 h-5 cursor-pointer" />
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                    <Button onClick={addLink} className="!font-bold flex items-center justify-center rounded-[20px] px-[16px] text-[16px] bg-[#90CDF4] hover:bg-[#90CDF4]/90 text-black w-full">
                      Add Link
                    </Button>
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <Button className="justify-center mt-12 py-6 !font-bold flex items-center gap-2 rounded-[18px] px-[16px] text-[16px] bg-[#9AE6B4] hover:bg-[#9AE6B4]/90 text-black w-full">Save</Button>
          </motion.div>
          <div className={cn(tab === 2 ? 'block' : 'hidden')}>
            <ButtonCard />
          </div>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 4 * 0.1 }}>
            <div className={'p-[1rem] overflow-auto h-[730px] border-8 rounded-[32px] border-[#ffffff29] bg-[#0A0C0C] sticky top-[10%] max-md:hidden'}>
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
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default EditPage
