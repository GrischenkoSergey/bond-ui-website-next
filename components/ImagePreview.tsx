"use client"

import type React from "react"

import { useState, useEffect, useRef, type ReactNode } from "react"

interface ImagePreviewProps {
  children: ReactNode
  fullImageSrc: string
  previewId?: string
  mobileEnabled?: boolean
}

const ImagePreview = ({
  children,
  fullImageSrc,
  previewId = "preview-container",
  mobileEnabled = false,
}: ImagePreviewProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isPreviewEnabled, setIsPreviewEnabled] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const lastTapRef = useRef<number>(0)

  useEffect(() => {
    const checkScreenSize = () => {
      const isLargeScreen = window.innerWidth >= 1200
      const isMobileScreen = window.innerWidth < 1200

      if (mobileEnabled) {
        setIsPreviewEnabled(true)
        setIsMobile(isMobileScreen)
      } else {
        // Desktop only mode - only enable on large screens
        setIsPreviewEnabled(isLargeScreen)
        setIsMobile(false)

        if (!isLargeScreen && isVisible) {
          setIsVisible(false)
        }
      }
    }

    checkScreenSize()

    window.addEventListener("resize", checkScreenSize)
    window.addEventListener("orientationchange", checkScreenSize)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
      window.removeEventListener("orientationchange", checkScreenSize)
    }
  }, [isVisible, mobileEnabled])

  const showPreview = () => {
    if (isPreviewEnabled) {
      setIsVisible(true)
      document.body.style.overflow = "hidden"
    }
  }

  const hidePreview = () => {
    setIsVisible(false)
    document.body.style.overflow = ""
  }

  const handleBackdropClick = (_: React.MouseEvent<HTMLDivElement>) => {
    hidePreview()
  }

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation()

    if (!isMobile) {
      hidePreview()
      return
    }

    const currentTime = new Date().getTime()
    const tapInterval = currentTime - lastTapRef.current

    // If tapped within 300ms, consider it a double-tap
    if (tapInterval < 300 && tapInterval > 0) {
      hidePreview()
      lastTapRef.current = 0 // Reset after double-tap
    } else {
      lastTapRef.current = currentTime
    }
  }

  return (
    <>
      <div onClick={showPreview} style={{ cursor: "pointer", width: "100%", height: "auto" }}>
        {children}
      </div>

      {isVisible && isPreviewEnabled && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              zIndex: 149,
              visibility: "visible",
              opacity: 1,
            }}
            onClick={handleBackdropClick}
          />
          <div
            id={previewId}
            style={{
              visibility: "visible",
              opacity: 1,
              position: "fixed",
              zIndex: 150,
              boxShadow: "1px 2px 2px 2px rgba(0,0,0,0.3)",
              width: isMobile ? "95vw" : previewId === "preview-container2" ? "516px" : "1356px",
              height: isMobile ? "95vh" : "auto",
              maxWidth: isMobile ? "95vw" : "90vw",
              maxHeight: isMobile ? "95vh" : "90vh",
              overflow: "auto",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "5px",
              padding: "10px",
              backgroundColor: "#3d3d3d",
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
            }}
            onClick={handleBackdropClick}
          >
            <img
              src={fullImageSrc || "/placeholder.svg"}
              style={{
                width: isMobile ? "auto" : "100%",
                minWidth: isMobile ? "100%" : "auto",
                minHeight: isMobile ? "100%" : "auto",
                height: "auto",
                maxWidth: isMobile ? "none" : "100%",
                maxHeight: isMobile ? "none" : "100%",
                display: "block",
                cursor: "grab",
              }}
              alt="Preview"
              onClick={handleImageClick}
              onMouseDown={(e) => {
                const img = e.currentTarget
                img.style.cursor = "grabbing"
              }}
              onMouseUp={(e) => {
                const img = e.currentTarget
                img.style.cursor = "grab"
              }}
            />
          </div>
        </>
      )}
    </>
  )
}

export default ImagePreview
