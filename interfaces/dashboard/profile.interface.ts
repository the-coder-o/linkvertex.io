import { ChangeEvent } from 'react'

export interface SocialLinkInputProps {
  iconClass: string
  label: string
  value: string
  placeholder: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  isValid: boolean
  validationMessage?: string
}

export interface SocialLinksInput {
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

export interface SocialLinksIsValid {
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

export interface SocialLinksProps {
  input: SocialLinksInput
  handleChange: (platform: keyof SocialLinksInput, validator: (value: string) => boolean) => (event: ChangeEvent<HTMLInputElement>) => void
  isValid: SocialLinksIsValid
}
