"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useTranslate } from "@/hooks/use-language"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslate()

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-3">
            <img src="/images/nkd21.jpeg" alt="NKD Logo" className="h-8 w-8 object-contain" />
            <Link href="/" className="text-xl font-bold text-gray-900">
              New Kigali Designers
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-baseline space-x-4">
              <Link
                href="/"
                className="hover:text-blue-600 py-2 rounded-md font-semibold leading-[1.85rem] text-base text-black px-3.5"
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/gallery"
                className="hover:text-blue-600 py-2 rounded-md font-medium px-3.5 shadow-md text-base leading-[1.85rem] text-black"
              >
                {t("nav.gallery")}
              </Link>
              <Link
                href="/services"
                className="hover:text-blue-600 py-2 rounded-md font-medium text-black px-3.5 leading-[1.85rem] text-base"
              >
                {t("nav.services")}
              </Link>
              <Link
                href="/production"
                className="hover:text-blue-600 py-2 rounded-md font-medium leading-[1.85rem] text-base text-black px-3.5"
              >
                {t("nav.production")}
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:text-blue-600 py-2 rounded-md font-medium flex items-center gap-1 text-base leading-[1.85rem] text-black px-3.5">
                  {t("nav.careers")}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/careers">{t("nav.jobOpportunities")}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/careers/internship">{t("nav.internshipProgram")}</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
              <LanguageSwitcher />
              <Button variant="outline" size="sm" asChild>
                <Link href="/admin/login">{t("nav.admin")}</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <Link
              href="/"
              className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/gallery"
              className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("nav.gallery")}
            </Link>
            <Link
              href="/services"
              className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("nav.services")}
            </Link>
            <Link
              href="/production"
              className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("nav.production")}
            </Link>
            <Link
              href="/careers"
              className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("nav.jobOpportunities")}
            </Link>
            <Link
              href="/careers/internship"
              className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              {t("nav.internshipProgram")}
            </Link>
            <div className="px-3 py-2 space-y-2">
              <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                <Link href="/admin/login">{t("nav.adminLogin")}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
