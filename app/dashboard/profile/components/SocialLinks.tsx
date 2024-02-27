import React from 'react'
import SocialLinkInput from './SocialLinkInput'
import {
  validateYoutube,
  validateTwitter,
  validateInstagram,
  validateMastodon,
  validateTiktok,
  validateTwitch,
  validateLinkedin,
  validateWhatsApp,
  validateTelegram,
  validateEmail,
  validatePinterest,
  validateSpotify,
  validateAppleMusic,
  validateSnapchat,
  validateAppStore,
  validateFacebook,
  validateGithub,
  validateGooglePlay,
} from '@/app/dashboard/profile/lib/validation-inputs'

interface SocialLinksInput {
  instagram: string
  mastodon: string
  tiktok: string
  telegram: string
  pinterest: string
  github: string
  whatsapp: string
  email: string
  spotify: string
  appleMusic: string
  snapchat: string
  appStore: string
  googlePlay: string
  facebook: string
  youtube: string
  twitch: string
  linkedin: string
  twitter: string
}

interface SocialLinksIsValid {
  instagram: boolean
  mastodon: boolean
  tiktok: boolean
  telegram: boolean
  pinterest: boolean
  github: boolean
  whatsapp: boolean
  email: boolean
  spotify: boolean
  appleMusic: boolean
  snapchat: boolean
  appStore: boolean
  googlePlay: boolean
  facebook: boolean
  youtube: boolean
  twitch: boolean
  linkedin: boolean
  twitter: boolean
}

interface SocialLinksProps {
  input: SocialLinksInput
  handleChange: (platform: keyof SocialLinksInput, validator: (value: string) => boolean) => (event: React.ChangeEvent<HTMLInputElement>) => void
  isValid: SocialLinksIsValid
}

const SocialLinks: React.FC<SocialLinksProps> = ({ input, handleChange, isValid }) => (
  <>
    <SocialLinkInput iconClass="fa-brands fa-instagram" label="Instagram" value={input.instagram} placeholder="username" onChange={handleChange('instagram', validateInstagram)} isValid={isValid.instagram} validationMessage="Please enter a valid instagram username." />
    <SocialLinkInput iconClass="fa-brands fa-twitter" label="Twitter" value={input.twitter} placeholder="username" onChange={handleChange('twitter', validateTwitter)} isValid={isValid.twitter} validationMessage="Please enter a valid twitter username" />
    <SocialLinkInput iconClass="fa-brands fa-mastodon" label="Mastodon" value={input.mastodon} placeholder="@username@domain" onChange={handleChange('mastodon', validateMastodon)} isValid={isValid.mastodon} validationMessage="Please enter a valid mastodon username." />
    <SocialLinkInput iconClass="fa-brands fa-youtube" label="YouTube" value={input.youtube} placeholder="https://www.youtube.com/channel/channel_id" onChange={handleChange('youtube', validateYoutube)} isValid={isValid.youtube} validationMessage="Please enter a valid YouTube URL." />
    <SocialLinkInput iconClass="fa-brands fa-tiktok" label="TikTok" value={input.tiktok} placeholder="@username" onChange={handleChange('tiktok', validateTiktok)} isValid={isValid.tiktok} validationMessage="Please enter a valid tiktok username." />
    <SocialLinkInput iconClass="fa-brands fa-twitch" label="Twitch" value={input.twitch} placeholder="https://www.twitch.tv/username" onChange={handleChange('twitch', validateTwitch)} isValid={isValid.twitch} validationMessage="Please enter a valid twitch URL." />
    <SocialLinkInput iconClass="fa-brands fa-linkedin" label="Linkedin" value={input.linkedin} placeholder="https://www.linkedin.com/in/username" onChange={handleChange('linkedin', validateLinkedin)} isValid={isValid.linkedin} validationMessage="Please enter a valid linkedin URL." />
    <SocialLinkInput iconClass="fa-brands fa-whatsapp" label="WhatsApp" value={input.whatsapp} placeholder="+62-812-3456-7890" onChange={handleChange('whatsapp', validateWhatsApp)} isValid={isValid.whatsapp} validationMessage="Please enter a valid whatsapp URL." />
    <SocialLinkInput iconClass="fa-brands fa-telegram" label="Telegram" value={input.telegram} placeholder="@username" onChange={handleChange('telegram', validateTelegram)} isValid={isValid.telegram} validationMessage="Please enter a valid telegram username." />
    <SocialLinkInput iconClass="fa-regular fa-envelope" label="E-mail" value={input.email} placeholder="youremail@address.com" onChange={handleChange('email', validateEmail)} isValid={isValid.email} validationMessage="Please enter a valid email address." />
    <SocialLinkInput iconClass="fa-brands fa-pinterest" label="Pinterest" value={input.pinterest} placeholder="username" onChange={handleChange('pinterest', validatePinterest)} isValid={isValid.pinterest} validationMessage="Please enter a valid Pinterest username." />
    <SocialLinkInput iconClass="fa-brands fa-spotify" label="Spotify" value={input.spotify} placeholder="https://open.spotify.com/user/username" onChange={handleChange('spotify', validateSpotify)} isValid={isValid.spotify} validationMessage="Please enter a valid Spotify URL." />
    <SocialLinkInput iconClass="fa-brands fa-apple" label="Apple Music" value={input.appleMusic} placeholder="https://apple.music.com/username" onChange={handleChange('appleMusic', validateAppleMusic)} isValid={isValid.appleMusic} validationMessage="Please enter a valid Apple Music URL." />
    <SocialLinkInput iconClass="fa-brands fa-snapchat-ghost" label="Snapchat" value={input.snapchat} placeholder="https://www.snapchat.com/add/username" onChange={handleChange('snapchat', validateSnapchat)} isValid={isValid.snapchat} validationMessage="Please enter a valid Snapchat URL." />
    <SocialLinkInput iconClass="fa-brands fa-app-store-ios" label="App Store" value={input.appStore} placeholder="https://apps.apple.com/app/id" onChange={handleChange('appStore', validateAppStore)} isValid={isValid.appStore} validationMessage="Please enter a valid App Store URL." />
    <SocialLinkInput
      iconClass="fa-brands fa-google-play"
      label="Google Play"
      value={input.googlePlay}
      placeholder="https://play.google.com/store/apps/details?id=your_app_id"
      onChange={handleChange('googlePlay', validateGooglePlay)}
      isValid={isValid.googlePlay}
      validationMessage="Please enter a valid Google Play URL."
    />
    <SocialLinkInput iconClass="fa-brands fa-facebook" label="Facebook" value={input.facebook} placeholder="https://facebook.com/your_page_url" onChange={handleChange('facebook', validateFacebook)} isValid={isValid.facebook} validationMessage="Please enter a valid Facebook URL." />
    <SocialLinkInput iconClass="fa-brands fa-github" label="Github" value={input.github} placeholder="username" onChange={handleChange('github', validateGithub)} isValid={isValid.github} validationMessage="Please enter a valid GitHub username." />
  </>
)

export default SocialLinks
