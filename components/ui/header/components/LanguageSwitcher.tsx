import React, { useState, useEffect, useContext, createContext, ReactNode } from 'react'
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
  const getDefaultLanguage = () => {
    const storedLanguageCode = localStorage.getItem('selectedLanguageCode')
    if (storedLanguageCode) {
      const storedLanguage = languages.find((lang) => lang.code === storedLanguageCode)
      if (storedLanguage) {
        return storedLanguage
      }
    }
    return languages[0]
  }

  const [selectedLanguage, setSelectedLanguage] = useState<Language>(getDefaultLanguage())
  const { i18n } = useTranslation()

  useEffect(() => {
    localStorage.setItem('selectedLanguageCode', selectedLanguage.code)
    i18n.changeLanguage(selectedLanguage.code)
  }, [selectedLanguage, i18n])

  const handleLanguageChange = () => {
    const currentIndex = languages.findIndex((lang) => lang.code === selectedLanguage.code)
    const nextIndex = (currentIndex + 1) % languages.length
    setSelectedLanguage(languages[nextIndex])
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
