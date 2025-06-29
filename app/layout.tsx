import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CursorGlow } from "@/components/cursor-glow"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DOTpomodoro - The focus timer built to work for you",
  description:
    "Stay productive with deep work, Pomodoro, and task syncing. A beautiful menu bar app designed for macOS.",
  generator: 'v0.dev',
  icons: {
    icon: '/AppLogo.png',
    shortcut: '/AppLogo.png',
    apple: '/AppLogo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CursorGlow />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
