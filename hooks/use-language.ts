"use client"

import { useContext } from "react"
import { LanguageContext } from "@/lib/language-context"
import { getTranslation } from "@/lib/i18n"

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}

export function useTranslate() {
  const { language } = useLanguage()
  return (path: string) => getTranslation(language, path)
}
