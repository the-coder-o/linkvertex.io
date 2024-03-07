import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react'
import { LinkItem } from '@/app/dashboard/edit/interfaces/LinkItemProps'
import { useTranslation } from 'react-i18next'

interface DataContextProps {
  links: LinkItem[]
  setLinks: Dispatch<SetStateAction<LinkItem[]>>
  title: string
  setTitle: Dispatch<SetStateAction<string>>
  description: string
  setDescription: Dispatch<SetStateAction<string>>
}

const DataContext = createContext<DataContextProps | undefined>(undefined)

export const useDataContext = () => useContext(DataContext)!

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [links, setLinks] = useState<LinkItem[]>([])
  const [title, setTitle] = useState('My Page Title')
  const { t } = useTranslation('edit_link_page')
  const description1 = t('description_label')
  const [description, setDescription] = useState(description1 as string)

  useEffect(() => {
    setDescription(description1)
  }, [description1])

  return <DataContext.Provider value={{ links, setLinks, title, setTitle, description, setDescription }}>{children}</DataContext.Provider>
}
