'use client'

import Image from 'next/image'
import dynamic from 'next/dynamic'

import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'

import { Link2, ShieldAlert, Tags, Trash } from 'lucide-react'

import { DropResult } from 'react-beautiful-dnd'
import { ChangeEvent, useCallback, useState } from 'react'
import { useDataContext } from '@/app/dashboard/edit/edit-context'
import { LinkItem } from '@/app/dashboard/edit/interfaces/LinkItemProps'

import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import EmojiIcon from '@/assets/dashboard/smile.png'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const Droppable = dynamic(() => import('react-beautiful-dnd').then((mod) => mod.Droppable), { ssr: false })
const Draggable = dynamic(() => import('react-beautiful-dnd').then((mod) => mod.Draggable), { ssr: false })
const DragDropContext = dynamic(() => import('react-beautiful-dnd').then((mod) => mod.DragDropContext), { ssr: false })

const Page = () => {
  const [inputValue, setInputValue] = useState('your-page-url')
  const [isValid, setIsValid] = useState(true)
  const [error, setError] = useState('')
  const [error2, setError2] = useState('')

  const { links, setLinks, setTitle, setDescription, title, description } = useDataContext()

  const { t } = useTranslation('edit_link_page')
  const regexForPageTitle = /^[A-Za-z-]+$/

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setInputValue(value)
    setIsValid(regexForPageTitle.test(value))
  }, [])

  const handleInputChangeValidation = (e: any) => {
    const { value } = e.target
    if (value.length <= 50) {
      setTitle(value)
      setError('')
    } else setError('Title cannot exceed 50 characters.')
  }

  const handleInputChangeDescription = (e: any) => {
    const { value } = e.target
    if (value.length <= 500) {
      setDescription(value)
      setError2('')
    } else setError2('Description cannot exceed 150 characters.')
  }

  const addLink = useCallback(() => {
    const newLink: LinkItem = { id: Date.now().toString(), title: '', url: '', enabled: true }
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
      if (!result.destination) return

      const items = Array.from(links)
      const [reorderedItem] = items.splice(result.source.index, 1)
      items.splice(result.destination.index, 0, reorderedItem)

      setLinks(items)
    },
    [links],
  )

  return (
    <>
      <div className={cn('grid grid-cols-1 gap-y-12')}>
        <div className={'grid grid-cols-1 gap-y-6'}>
          <div className={'relative'}>
            <label className={'text-start text-white text-md font-medium'}> {t('label')}</label>
            <Input value={title} onChange={handleInputChangeValidation} type={'text'} className={'mt-[0.5rem] !bg-[#141616] border-transparent focus:!bg-transparent rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'} />
            <Image src={EmojiIcon} alt={'EmojiIcon'} width={18} height={18} className={'absolute top-[42.8px] cursor-pointer right-3'} />
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          </div>
          <div>
            <label className={'text-start text-white text-md font-medium'}>{t('profile_title')}</label>
            <div className="relative">
              <Input value={inputValue} onChange={handleInputChange} type="text" className={'mt-[0.5rem] !pl-[190px] !bg-[#141616] border-transparent focus:!bg-transparent rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'} id="hs-inline-add-on" name="hs-inline-add-on" />
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                <span className="text-start text-gray-400 text-sm font-medium">https://linkvertex-a-bd.me/</span>
              </div>
            </div>
            {!isValid && <p className="text-red-500 text-sm">Please write a correct your page url title.</p>}
          </div>
          <div>
            <label className={'text-start text-white text-md font-medium'}>{t('description')}</label>
            <Textarea value={description} onChange={handleInputChangeDescription} className={'mt-[0.5rem] h-[150px] !bg-[#141616] !pt-[16px] border-transparent !outline-none focus:!bg-transparent rounded-[20px] px-[16px] bg-transparent text-[1rem] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'} />
            {error2 && <div className="text-red-500 text-sm mt-2">{error2}</div>}
          </div>
        </div>
        <Alert className="!bg-[#1E2B32] border-transparent rounded-[24px]">
          <ShieldAlert className="bg-[#90CDF4] rounded-full flex items-center justify-center p-[4px]" />
          <AlertTitle className="text-white ml-2">{t('alert_title')}</AlertTitle>
          <AlertDescription className="text-white ml-2 text-[16px] w-full font-medium">{t('alert_text')}</AlertDescription>
        </Alert>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable-links">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="border-2 border-[#ffffff29] grid grid-cols-1 items-center rounded-[24px] p-[0.5rem]">
                {links.map((link, index) => (
                  <Draggable key={link.id} draggableId={link.id} index={index}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className={'grid grid-cols-1 border-2 border-[#ffffff29] bg-[#1a202c99] p-[1.2rem] rounded-[24px] mb-[15px]'}>
                        <h2 className="text-md uppercase font-bold text-white">URL {index + 1}</h2>
                        <div className="relative">
                          <Input placeholder="Label" value={link.title} onChange={(e) => handleLinkEdit(link.id, e.target.value, link.url)} type="text" className="mt-[0.5rem] !bg-[#1C2129] border-transparent focus:!bg-transparent rounded-[20px] px-[40px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]" />
                          <Tags className="text-white absolute top-[18px] left-3 w-5 h-5" />
                        </div>
                        <div className="relative">
                          <Input placeholder="Link URL" value={link.url} onChange={(e) => handleLinkEdit(link.id, link.title, e.target.value)} type="text" className="mt-[0.5rem] !bg-[#1C2129] border-transparent focus:!bg-transparent rounded-[20px] px-[40px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]" />
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
                  {t('add_link_btn')}
                </Button>
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <Button className="justify-center py-6 !font-bold flex items-center gap-2 rounded-[18px] px-[16px] text-[16px] bg-[#9AE6B4] hover:bg-[#9AE6B4]/90 text-black w-full"> {t('save_btn')}</Button>
      </div>
    </>
  )
}

export default Page
