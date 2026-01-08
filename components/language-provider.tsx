"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { LanguageContext } from "@/lib/language-context"
import type { Language } from "@/lib/i18n"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Get language from localStorage or browser preference
    const savedLanguage = localStorage.getItem("language") as Language | null
    if (savedLanguage) {
      setLanguage(savedLanguage)
    } else {
      const browserLang = navigator.language.startsWith("fr") ? "fr" : "en"
      setLanguage(browserLang as Language)
    }
    setIsLoaded(true)
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  if (!isLoaded) {
    return <>{children}</>
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>{children}</LanguageContext.Provider>
  )
}
