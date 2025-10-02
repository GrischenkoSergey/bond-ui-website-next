import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"
import "./styles/global.css"
import "./styles/layout.css"
import "./styles/typography.css"
import "./styles/components.css"
import "./styles/theme.css"
import "./styles/carousel.css"
import "./styles/devices.css" // Media queries should be loaded last

export const metadata: Metadata = {
  title: "The Bond Add-in for Microsoft Word",
  description: "A revolutionary new interface for Microsoft Word",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            {children}
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
