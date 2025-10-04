"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [menuStyle, setMenuStyle] = useState<React.CSSProperties>({})
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      const updateMenuPosition = () => {
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight
        const menuWidth = 280
        const margin = 20

        let style: React.CSSProperties = {}

        if (viewportWidth < menuWidth + margin + 20) {
          style = {
            left: "50%",
            right: "auto",
            transform: "translateX(-50%)",
            width: `${Math.min(menuWidth, viewportWidth - margin)}px`,
          }
        } else if (viewportWidth < 400) {
          style = {
            right: "10px",
            width: "260px",
          }
        }

        const isLandscape = viewportWidth > viewportHeight
        if (isLandscape && viewportHeight < 500) {
          const topSpacing = viewportHeight < 400 ? 50 : 60
          const maxHeight = viewportHeight - (topSpacing + 20)

          style = {
            ...style,
            top: `${topSpacing}px`,
            maxHeight: `${maxHeight}px`,
            overflowY: "auto",
          }
        } else if (isLandscape && viewportHeight < 800) {
          style = {
            ...style,
            top: "80px",
            maxHeight: `${viewportHeight - 100}px`,
          }
        }

        setMenuStyle(style)
      }

      updateMenuPosition()
      window.addEventListener("resize", updateMenuPosition)

      return () => {
        window.removeEventListener("resize", updateMenuPosition)
      }
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleOverlayClick = () => {
    closeMenu()
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      <header>
        <div id="logo">
          <Link href="/">
            <Image src="/images/logowhite.webp" width={230} height={44} alt="Bond Logo" />
          </Link>
        </div>

        <div id="logo2">
          <Link href="/">
            <Image src="/images/logoblack.webp" width={230} height={44} alt="Bond Logo" />
          </Link>
        </div>

        <div id="heading">
          <nav>
            <button className="menu-toggle" id="menu-toggle" aria-label="Toggle Navigation" onClick={toggleMenu}>
              &#9776;
            </button>

            <div className={`scrollmenu ${isMenuOpen ? "show" : ""}`} style={menuStyle}>
              <Link href="/" title="Word Add-in" className="homelink" onClick={closeMenu}>
                Word Add-in
              </Link>
              <Link href="/addinmanual" title="Word Add-in Manual" className="addinmanuallink" onClick={closeMenu}>
                Word Add-in Manual
              </Link>
              <Link href="/programpicker" title="Program Picker" className="programpickerlink" onClick={closeMenu}>
                Program Picker
              </Link>
              <Link
                href="/programpickermanual"
                title="Program Picker Manual"
                className="ppmanuallink"
                onClick={closeMenu}
              >
                Program Picker Manual
              </Link>
              <Link href="/buynow" title="Buy Now" className="buynowlink" onClick={closeMenu}>
                Buy Now
              </Link>
              <Link href="/support" title="Support" className="supportlink" onClick={closeMenu}>
                Support
              </Link>
              <button
                className="theme-toggle-btn"
                onClick={() => {
                  toggleTheme()
                  closeMenu()
                }}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "1.1rem",
                  fontFamily: '"ADLaM Display", sans-serif',
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                {theme === "dark" ? "=Light=" : "=Dark="}
              </button>
            </div>
          </nav>
        </div>
      </header>
      {isMenuOpen && <div className="menu-overlay" onClick={handleOverlayClick} />}
    </>
  )
}

export default Header
