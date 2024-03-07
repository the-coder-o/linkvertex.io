import React, { useState, useContext, createContext, ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image'
import { useTranslation } from 'react-i18next'

// Define a type for the language structure
type Language = {
  code: string
  name: string
  image: StaticImageData
}

// Define the context value structure
interface LanguageContextType {
  handleLanguageChange: () => void
  selectedLanguage: Language
}

// Create a context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Define the props for the LanguageProvider component
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
      <Image src={selectedLanguage.image} alt={selectedLanguage.name} width={18} height={18} className="!bg-cover !w-[30px]" />
    </button>
  )
}

export { LanguageProvider, LanguageSwitcher }
