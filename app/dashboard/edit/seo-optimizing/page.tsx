'use client'

import { ShieldAlert } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const Page = () => {
  const { t } = useTranslation('seo_page')

  return (
    <div>
      <Alert className="!bg-[#1E2B32] w-full border-transparent rounded-[24px] mb-8">
        <ShieldAlert className="bg-[#90CDF4] rounded-full flex items-center justify-center p-[4px]" />
        <AlertTitle className="text-white ml-2">{t('alert_message_title')}</AlertTitle>
        <AlertDescription className="text-white ml-2 text-[16px] font-medium">{t('alert_message_text')}</AlertDescription>
      </Alert>
      <div className={'flex flex-col gap-5'}>
        <div>
          <label className={'text-start text-white text-md font-medium'}>Meta title</label>
          <Input disabled={true} type="text" placeholder={'Example: @the_coder_o'} className={'cursor-not-allowed mt-[0.5rem] !bg-transparent border-2 rounded-[20px] px-[16px] text-[1rem] pt-[5px] text-white placeholder:text-[#BDC3DD] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'} id="hs-inline-add-on" name="hs-inline-add-on" />
        </div>
        <div>
          <label className={'text-start text-white text-md font-medium'}>Meta description</label>
          <Textarea disabled={true} placeholder={'Example: Linktree. Make your link do more. Changes to metadata may take some time to appear on other platforms.'} className={' placeholder:text-[#BDC3DD] cursor-not-allowed mt-[0.5rem] h-[150px] !bg-transparent !pt-[16px] border-2 !outline-none rounded-[20px] px-[16px] text-[1rem] text-white placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'} />
        </div>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem className={'!border-b-[#fff]/50'} value="item-1">
          <AccordionTrigger className={'text-white'}>What is SEO Optimization?</AccordionTrigger>
          <AccordionContent className={'text-white'}> SEO optimization is the process of making your website more visible to search engines. It involves adjusting various elements of your site so that search engines can understand it better and rank it higher in the search results for relevant queries.</AccordionContent>
        </AccordionItem>
        <AccordionItem className={'!border-b-[#fff]/50'} value="item-2">
          <AccordionTrigger className={'text-white'}>What should we do until SEO optimization...</AccordionTrigger>
          <AccordionContent className={'text-white'}>The image suggests thanking users for their understanding. Until SEO optimization is released, continue creating content and preparing your site's structure and metadata for the update.</AccordionContent>
        </AccordionItem>
        <AccordionItem className={'!border-b-[#fff]/50'} value="item-3">
          <AccordionTrigger className={'text-white'}>What is a Meta title?</AccordionTrigger>
          <AccordionContent className={'text-white'}>A meta title is an HTML element that specifies the title of a web page. It is a critical factor in both SEO and user experience and usually appears as the title of a search result in search engines.</AccordionContent>
        </AccordionItem>
        <AccordionItem className={'!border-b-[#fff]/50'} value="item-4">
          <AccordionTrigger className={'text-white'}>What is a Meta description?</AccordionTrigger>
          <AccordionContent className={'text-white'}>A meta description is an HTML attribute that provides a brief summary of the content of the web page. It is also important for SEO and can influence the click-through rate from the search engine results page.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Page
