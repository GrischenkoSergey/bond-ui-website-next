import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import BackToTop from "@/components/BackToTop"
import "./globals.css"
import "./styles/global.css"
import "./styles/layout.css"
import "./styles/typography.css"
import "./styles/components.css"
import "./styles/theme.css"
import "react-multi-carousel/lib/styles.css" // Import react-multi-carousel styles
import "./styles/carousel.css"
import "./styles/mobile-preview.css" // iOS Safari preview fixes
import "./styles/devices.css" // Media queries should be loaded last

export const metadata: Metadata = {
  title: "Bond Add-in for Microsoft Word - Revolutionary Interface",
  description: "The revolutionary new interface for Microsoft Word. Access commands faster with function keys. Quick Command Bars, custom menus, and intuitive dialogue boxes.",
  keywords: "Microsoft Word, Word Add-in, productivity, keyboard shortcuts, function keys",
  authors: [{ name: "Bond Interface Design Ltd" }],
  // openGraph: {
  //   title: "Bond Add-in for Microsoft Word",
  //   description: "Revolutionary keyboard-driven interface for Microsoft Word",
  //   images: ["/images/banner.webp"],
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <Header />
            {children}
            <Footer />
            <BackToTop />
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
