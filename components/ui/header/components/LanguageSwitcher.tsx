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
  // Initially, we don't have a selected language until we've checked local storage
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null)
  const { i18n } = useTranslation()

  useEffect(() => {
    // Function to fetch the stored language or default to the first one
    const getDefaultLanguage = (): Language => {
      if (typeof window === 'undefined') return languages[0] // SSR

      const storedLanguageCode = localStorage.getItem('selectedLanguageCode')
      if (storedLanguageCode) {
        const storedLanguage = languages.find((lang) => lang.code === storedLanguageCode)
        if (storedLanguage) return storedLanguage
      }
      return languages[0] // Default language if not found in storage
    }

    const defaultLanguage = getDefaultLanguage()
    setSelectedLanguage(defaultLanguage) // Set the language from storage or default
    i18n.changeLanguage(defaultLanguage.code) // Set i18n language as well
  }, [languages, i18n])

  useEffect(() => {
    // Don't try to set local storage during SSR
    if (selectedLanguage && typeof window !== 'undefined') {
      localStorage.setItem('selectedLanguageCode', selectedLanguage.code)
      i18n.changeLanguage(selectedLanguage.code)
    }
  }, [selectedLanguage, i18n])

  const handleLanguageChange = () => {
    const currentIndex = languages.findIndex((lang) => lang === selectedLanguage)
    const nextIndex = (currentIndex + 1) % languages.length
    setSelectedLanguage(languages[nextIndex])
  }

  // Render nothing until we have a selected language
  if (!selectedLanguage) return null

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
