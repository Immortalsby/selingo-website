'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import type { Locale } from '@/i18n/config'
import { defaultLocale } from '@/i18n/config'
import zh from '@/i18n/zh'
import en from '@/i18n/en'

type TranslationsContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: keyof typeof zh) => string
}

const TranslationsContext = createContext<TranslationsContextType | null>(null)

const translations = {
  zh,
  en,
}

export function TranslationsProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  const t = useCallback(
    (key: keyof typeof zh) => {
      return translations[locale][key]
    },
    [locale]
  )

  return (
    <TranslationsContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </TranslationsContext.Provider>
  )
}

export function useTranslations() {
  const context = useContext(TranslationsContext)
  if (!context) {
    throw new Error('useTranslations must be used within a TranslationsProvider')
  }
  return context
} 