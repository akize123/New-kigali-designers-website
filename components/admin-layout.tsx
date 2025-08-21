import type React from "react"
import { requireAdminAuth } from "@/lib/actions/admin-actions"
import { AdminNavigation } from "@/components/admin-navigation"

interface AdminLayoutProps {
  children: React.ReactNode
}

export async function AdminLayout({ children }: AdminLayoutProps) {
  await requireAdminAuth()

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavigation />
      <main className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  )
}
