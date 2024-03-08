import { Dispatch, SetStateAction } from 'react'

export interface LinkItem {
  id: string
  title: string
  url: string
  enabled: boolean
}

export interface LinkItemProps {
  link?: LinkItem
  onToggle: (id: string) => void
  onEdit: (id: string, title: string, url: string) => void
  onDelete: (id: string) => void
}

export interface DataContextProps {
  links: LinkItem[]
  setLinks: Dispatch<SetStateAction<LinkItem[]>>
  title: string
  setTitle: Dispatch<SetStateAction<string>>
  description: string
  setDescription: Dispatch<SetStateAction<string>>
}
