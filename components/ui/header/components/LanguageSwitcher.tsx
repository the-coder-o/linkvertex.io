import React, { useState, useContext, createContext, ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image'
import { useTranslation } from 'react-i18next'

type Language = {
  code: string
  name: string
  image: StaticImageData
}

interface LanguageContextType {
  handleLanguageChange: () => void
  selectedLanguage: Language
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
  languages: Language[]
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children, languages }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0])
  const { i18n } = useTranslation()

  const handleLanguageChange = () => {
    const currentIndex = languages.findIndex((lang) => lang.code === selectedLanguage.code)
    const nextIndex = (currentIndex + 1) % languages.length
    setSelectedLanguage(languages[nextIndex])
    i18n.changeLanguage(languages[nextIndex].code)
  }

  return <LanguageContext.Provider value={{ handleLanguageChange, selectedLanguage }}>{children}</LanguageContext.Provider>
}

const LanguageSwitcher: React.FC = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('LanguageSwitcher must be used within a LanguageProvider')
  }
  const { handleLanguageChange, selectedLanguage } = context

  return (
    <button onClick={handleLanguageChange}>
      <Image src={selectedLanguage.image} alt={selectedLanguage.name} width={18} height={18} className="!bg-cover !w-[32px]" />
    </button>
  )
}

export { LanguageProvider, LanguageSwitcher }
