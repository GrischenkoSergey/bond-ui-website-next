"use client"

import type { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"
import BackToTop from "./BackToTop"

interface LayoutProps {
  children: ReactNode
  pageId: string
}

const Layout = ({ children, pageId }: LayoutProps) => {
  return (
    <div className="container" id={pageId}>
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default Layout
