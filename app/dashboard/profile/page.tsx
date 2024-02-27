'use client'

import React, { useState } from 'react'

import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const validateWhatsApp = (input: string) => /^\+\d{1,3}-\d{3}-\d{4}-\d{3,4}$/.test(input)
const validateEmail = (input: string) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input)
const validateSpotify = (input: string) => /^https:\/\/open\.spotify\.com\/.*/.test(input)
const validateAppleMusic = (input: string) => /^https:\/\/apple\.music\.com\/.*/.test(input)
const validateSnapchat = (input: string) => /^https:\/\/www\.snapchat\.com\/add\/[a-zA-Z0-9_]+$/.test(input)
const validateAppStore = (input: string) => /^https:\/\/apps\.apple\.com\/.*/.test(input)
const validateGooglePlay = (input: string) => /^https:\/\/play\.google\.com\/store\/apps\/details\?id=.*/.test(input)
const validateFacebook = (input: string) => /^https:\/\/facebook\.com\/[a-zA-Z0-9._%+-]+$/.test(input)
const validateYoutube = (input: string) => /https?:\/\/(www\.)?youtube\.com\/channel\/([^/]+)/.test(input)
const validateTwitch = (input: string) => /https?:\/\/(www\.)?twitch\.tv\/([^/]+)/.test(input)
const validateLinkedin = (input: string) => /https?:\/\/(www\.)?linkedin\.com\/in\/([^/]+)/.test(input)

const Profile = () => {
  const [input, setInput] = useState({
    whatsapp: '',
    email: '',
    spotify: '',
    appleMusic: '',
    snapchat: '',
    appStore: '',
    googlePlay: '',
    facebook: '',
    youtube: '',
    twitch: '',
    linkedin: '',
  })
  const [isValid, setIsValid] = useState({
    whatsapp: true,
    email: true,
    spotify: true,
    appleMusic: true,
    snapchat: true,
    appStore: true,
    googlePlay: true,
    facebook: true,
    youtube: true,
    twitch: true,
    linkedin: true,
  })

  const handleChange = (service: string, validator: (input: string) => boolean) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setInput({ ...input, [service]: value })
    setIsValid({ ...isValid, [service]: validator(value) })
  }

  return (
    <div className={'container'}>
      <div className={'mt-[100px]'}>
        <div>
          <Link href={'/dashboard'} className={'bg-[#1D1F1F]/80 rounded-[24px] text-white flex justify-center font-[500] pr-[10px] w-[13%] items-center py-[8px] text-[16px] hover:bg-[#1D1F1F] transition-all'}>
            <ChevronLeft className={'w-5 h-5 font-bold'} />
            back
          </Link>
        </div>
        <div className={'mb-[3rem]'}>
          <h2 className={'text-4xl main-text-animation font-bold my-[16px]'}>Profile Settings</h2>
        </div>
        <div className={'flex flex-col gap-[2.5rem]'}>
          <div>
            <h2 className={'text-3xl font-bold text-white mb-[16px]'}>Social Links</h2>
          </div>
          <div className={'grid grid-cols-1 space-y-[2rem] mb-[100px]'}>
            <div className={'flex flex-row gap-[1rem]'}>
              <i className="fa-brands fa-instagram text-[25px] text-white"></i>
              <div className={'w-full'}>
                <label className={'text-start text-white text-md font-medium'}>Instagram</label>
                <div>
                  <Input type={'text'} placeholder={'username'} className={'mt-[0.5rem] border border-[#ffffff29] rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'} />
                </div>
              </div>
            </div>
            <div className={'flex flex-row gap-[1rem]'}>
              <i className="fa-brands fa-twitter text-[22px] text-white"></i>
              <div className={'w-full'}>
                <label className={'text-start text-white text-md font-medium'}>Twitter</label>
                <div>
                  <Input type={'text'} placeholder={'username'} className={'mt-[0.5rem] border border-[#ffffff29] rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'} />
                </div>
              </div>
            </div>
            <div className={'flex flex-row gap-[1rem]'}>
              <i className="fa-brands fa-mastodon text-[25px] text-white"></i>
              <div className={'w-full'}>
                <label className={'text-start text-white text-md font-medium'}>Mastodon</label>
                <div>
                  <Input
                    type={'text'}
                    placeholder={'@username@domain'}
                    className={'mt-[0.5rem] border border-[#ffffff29] rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'}
                  />
                </div>
              </div>
            </div>
            <div className={'flex flex-row gap-[1rem]'}>
              <i className="fa-brands fa-youtube text-[20px] text-white"></i>
              <div className={'w-full'}>
                <label className={'text-start text-white text-md font-medium'}>YouTube</label>
                <div>
                  <Input
                    value={input.youtube}
                    onChange={handleChange('youtube', validateYoutube)}
                    type={'text'}
                    placeholder={'https://www.youtube.com/channel/channel_id'}
                    className={'mt-[0.5rem] border border-[#ffffff29] rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'}
                  />
                  {!isValid.youtube && <p className={'text-red-500 text-sm mt-1.5'}>Please enter a valid twitch url.</p>}
                </div>
              </div>
            </div>
            <div className={'flex flex-row gap-[1rem]'}>
              <i className="fa-brands fa-tiktok text-[25px] text-white"></i>
              <div className={'w-full'}>
                <label className={'text-start text-white text-md font-medium'}>Tiktok</label>
                <div>
                  <Input type={'text'} placeholder={'@username'} className={'mt-[0.5rem] border border-[#ffffff29] rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'} />
                </div>
              </div>
            </div>
            <div className={'flex flex-row gap-[1rem]'}>
              <i className="fa-brands fa-twitch text-[20px] text-white"></i>
              <div className={'w-full'}>
                <label className={'text-start text-white text-md font-medium'}>Twitch</label>
                <div>
                  <Input
                    value={input.twitch}
                    onChange={handleChange('twitch', validateTwitch)}
                    type={'text'}
                    placeholder={'https://www.twitch.tv/username'}
                    className={'mt-[0.5rem] border border-[#ffffff29] rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'}
                  />
                  {!isValid.twitch && <p className={'text-red-500 text-sm mt-1.5'}>Please enter a valid twitch url.</p>}
                </div>
              </div>
            </div>
            <div className={'flex flex-row gap-[1rem]'}>
              <i className="fa-brands fa-linkedin text-[20px] text-white"></i>
              <div className={'w-full'}>
                <label className={'text-start text-white text-md font-medium'}>Linkedin</label>
                <div>
                  <Input
                    value={input.linkedin}
                    onChange={handleChange('linkedin', validateLinkedin)}
                    type={'text'}
                    placeholder={'https://www.linkedin.com/in/username'}
                    className={'mt-[0.5rem] border border-[#ffffff29] rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'}
                  />
                  {!isValid.linkedin && <p className={'text-red-500 text-sm mt-1.5'}>Please enter a valid linkedin url.</p>}
                </div>
              </div>
            </div>
            <div className={'flex flex-row gap-[1rem]'}>
              <i className="fa-brands fa-whatsapp text-[22px] text-white"></i>
              <div className={'w-full'}>
                <label className={'text-start text-white text-md font-medium'}>WhatsApp</label>
                <div>
                  <Input
                    value={input.whatsapp}
                    onChange={handleChange('whatsapp', validateWhatsApp)}
                    type={'text'}
                    placeholder={'+62-812-3456-7890'}
                    className={'mt-[0.5rem] border border-[#ffffff29] rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'}
                  />
                  {!isValid.whatsapp && <p className={'text-red-500 text-sm mt-1.5'}>Please enter a valid WhatsApp number.</p>}
                </div>
              </div>
            </div>
            <div className={'flex flex-row gap-[1rem]'}>
              <i className="fa-brands fa-telegram text-[21px] text-white"></i>
              <div className={'w-full'}>
                <label className={'text-start text-white text-md font-medium'}>Telegram</label>
                <div>
                  <Input type={'text'} placeholder={'@username'} className={'mt-[0.5rem] border border-[#ffffff29] rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'} />
                </div>
              </div>
            </div>
            <div className={'flex flex-row gap-[1rem]'}>
              <i className="fa-solid fa-envelope text-[20px] text-white"></i>
              <div className={'w-full'}>
                <label className={'text-start text-white text-md font-medium'}>E-mail</label>
                <div>
                  <Input
                    value={input.email}
                    onChange={handleChange('email', validateEmail)}
                    type={'text'}
                    placeholder={'youremail@address.com'}
                    className={'mt-[0.5rem] border border-[#ffffff29] rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'}
                  />
                  {!isValid.email && <p className={'text-red-500 text-sm mt-1.5'}>Please enter a valid email.</p>}
                </div>
              </div>
            </div>
            <div className={'flex flex-row gap-[1rem]'}>
              <i className="fa-brands fa-pinterest text-[21px] text-white"></i>
              <div className={'w-full'}>
                <label className={'text-start text-white text-md font-medium'}>Pinterest</label>
                <div>
                  <Input type={'text'} placeholder={'username'} className={'mt-[0.5rem] border border-[#ffffff29] rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'} />
                </div>
              </div>
            </div>
            <div className={'flex flex-row gap-[1rem]'}>
              <i className="fa-brands fa-spotify text-[21px] text-white"></i>
              <div className={'w-full'}>
                <label className={'text-start text-white text-md font-medium'}>Spotify</label>
                <div>
                  <Input
                    value={input.spotify}
                    onChange={handleChange('spotify', validateSpotify)}
                    type={'text'}
                    placeholder={'https://open.spotify.com/...'}
                    className={'mt-[0.5rem] border border-[#ffffff29] rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'}
                  />
                  {!isValid.spotify && <p className={'text-red-500 text-sm mt-1.5'}>Please enter a valid spotify url.</p>}
                </div>
              </div>
            </div>
            <div className={'flex flex-row gap-[1rem]'}>
              <i className="fa-solid fa-music text-[21px] text-white"></i>
              <div className={'w-full'}>
                <label className={'text-start text-white text-md font-medium'}>Apple Music</label>
                <div>
                  <Input
                    value={input.appleMusic}
                    onChange={handleChange('appleMusic', validateAppleMusic)}
                    type={'text'}
                    placeholder={'https://apple.music.com/...'}
                    className={'mt-[0.5rem] border border-[#ffffff29] rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'}
                  />
                  {!isValid.appleMusic && <p className={'text-red-500 text-sm mt-1.5'}>Please enter a valid apple music url.</p>}
                </div>
              </div>
            </div>
            <div className={'flex flex-row gap-[1rem]'}>
              <i className="fa-brands fa-snapchat text-[21px] text-white"></i>
              <div className={'w-full'}>
                <label className={'text-start text-white text-md font-medium'}>Snapchat</label>
                <div>
                  <Input
                    value={input.snapchat}
                    onChange={handleChange('snapchat', validateSnapchat)}
                    type={'text'}
                    placeholder={'https://www.snapchat.com/add/username'}
                    className={'mt-[0.5rem] border border-[#ffffff29] rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'}
                  />
                  {!isValid.snapchat && <p className={'text-red-500 text-sm mt-1.5'}>Please enter a valid snapchat url.</p>}
                </div>
              </div>
            </div>
            <div className={'flex flex-row gap-[1rem]'}>
              <i className="fa-brands fa-app-store text-[21px] text-white"></i>
              <div className={'w-full'}>
                <label className={'text-start text-white text-md font-medium'}>App Store</label>
                <div>
                  <Input
                    value={input.appStore}
                    onChange={handleChange('appStore', validateAppStore)}
                    type={'text'}
                    placeholder={'https://apps.apple.com/...'}
                    className={'mt-[0.5rem] border border-[#ffffff29] rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'}
                  />
                  {!isValid.appStore && <p className={'text-red-500 text-sm mt-1.5'}>Please enter a valid appstore url.</p>}
                </div>
              </div>
            </div>
            <div className={'flex flex-row gap-[1rem]'}>
              <i className="fa-brands fa-google-play text-[21px] text-white"></i>
              <div className={'w-full'}>
                <label className={'text-start text-white text-md font-medium'}>Google Play</label>
                <div>
                  <Input
                    value={input.googlePlay}
                    onChange={handleChange('googlePlay', validateGooglePlay)}
                    type={'text'}
                    placeholder={'https://play.google.com/store/apps/details?id='}
                    className={'mt-[0.5rem] border border-[#ffffff29] rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'}
                  />
                  {!isValid.googlePlay && <p className={'text-red-500 text-sm mt-1.5'}>Please enter a valid google play url.</p>}
                </div>
              </div>
            </div>
            <div className={'flex flex-row gap-[1rem]'}>
              <i className="fa-brands fa-facebook text-[21px] text-white"></i>
              <div className={'w-full'}>
                <label className={'text-start text-white text-md font-medium'}>Facebook</label>
                <div>
                  <Input
                    value={input.facebook}
                    onChange={handleChange('facebook', validateFacebook)}
                    type={'text'}
                    placeholder={'https://facebook.com/page-url'}
                    className={'mt-[0.5rem] border border-[#ffffff29] rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'}
                  />
                  {!isValid.facebook && <p className={'text-red-500 text-sm mt-1.5'}>Please enter a valid facebook url.</p>}
                </div>
              </div>
            </div>
            <div className={'flex flex-row gap-[1rem]'}>
              <i className="fa-brands fa-github text-[21px] text-white"></i>
              <div className={'w-full'}>
                <label className={'text-start text-white text-md font-medium'}>Github</label>
                <div>
                  <Input
                    type={'text'}
                    placeholder={'github username'}
                    className={'mt-[0.5rem] border border-[#ffffff29] rounded-[20px] px-[16px] bg-transparent text-[1rem] pt-[5px] text-white placeholder:text-[#454646] placeholder:font-medium focus:!border-2 focus:!transition focus:!border-[#63b3ed]'}
                  />
                </div>
              </div>
            </div>
            <Button className={'bg-[#9ae6b4] rounded-[20px] font-semibold text-black text-md hover:bg-[#9ae6c9]'}>Save</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
