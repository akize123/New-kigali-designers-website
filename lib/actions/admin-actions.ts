"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

// Simple admin credentials (in production, use proper authentication)
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin123",
}

export async function adminLogin(formData: FormData) {
  try {
    const username = formData.get("username") as string
    const password = formData.get("password") as string

    // Validate credentials
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      // Set admin session cookie
      const cookieStore = await cookies()
      cookieStore.set("admin-session", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24, // 24 hours
      })

      return { success: true }
    } else {
      return { success: false, error: "Invalid username or password" }
    }
  } catch (error) {
    console.error("[v0] Admin login error:", error)
    return { success: false, error: "Login failed" }
  }
}

export async function adminLogout() {
  const cookieStore = await cookies()
  cookieStore.delete("admin-session")
  redirect("/admin/login")
}

export async function checkAdminAuth() {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin-session")
  return session?.value === "authenticated"
}

export async function requireAdminAuth() {
  const isAuthenticated = await checkAdminAuth()
  if (!isAuthenticated) {
    redirect("/admin/login")
  }
}
