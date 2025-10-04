"use client"

import type { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
  pageId: string
}

const Layout = ({ children, pageId }: LayoutProps) => {
  return (
    <div className="container" id={pageId}>
      <main>{children}</main>
    </div>
  )
}

export default Layout
