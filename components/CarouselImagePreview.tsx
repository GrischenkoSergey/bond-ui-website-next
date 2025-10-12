"use client"

import type React from "react"
import { useState, useRef, type ReactNode } from "react"

interface CarouselImagePreviewProps {
    children: ReactNode
    fullImageSrc: string
}

const CarouselImagePreview = ({ children, fullImageSrc }: CarouselImagePreviewProps) => {
    const [isVisible, setIsVisible] = useState(false)
    const [hasMoved, setHasMoved] = useState(false)
    const lastTapRef = useRef<number>(0)
    const startPosRef = useRef<{ x: number; y: number } | null>(null)
    const isDraggingRef = useRef(false)

    const showPreview = () => {
        setIsVisible(true)
        setHasMoved(false)
        document.body.style.overflow = "hidden"
    }

    const hidePreview = () => {
        setIsVisible(false)
        setHasMoved(false)
        startPosRef.current = null
        isDraggingRef.current = false
        document.body.style.overflow = ""
    }

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget && !hasMoved) {
            hidePreview()
        }
    }

    const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // Only close on backdrop click or image click (not double-tap)
        if (e.target === e.currentTarget) {
            return
        }

        const currentTime = new Date().getTime()
        const tapInterval = currentTime - lastTapRef.current

        // Double-tap to close
        if (tapInterval < 300 && tapInterval > 0) {
            if (!hasMoved) {
                hidePreview()
            }
            lastTapRef.current = 0
            setHasMoved(false)
        } else {
            lastTapRef.current = currentTime
            setHasMoved(false)
        }
    }

    const handleScroll = () => {
        setHasMoved(true)
    }

    return (
        <>
            <div onClick={showPreview} style={{ cursor: "pointer", width: "100%", height: "100%" }}>
                {children}
            </div>

            {isVisible && (
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
                        id="section-carousel-preview"
                        style={{
                            visibility: "visible",
                            opacity: 1,
                            position: "fixed",
                            zIndex: 150,
                            boxShadow: "1px 2px 2px 2px rgba(0,0,0,0.3)",
                            width: "95vw",
                            height: "95vh",
                            maxWidth: "95vw",
                            maxHeight: "95vh",
                            overflow: "auto",
                            overscrollBehavior: "contain",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            borderRadius: "5px",
                            padding: "10px",
                            backgroundColor: "#3d3d3d",
                            WebkitOverflowScrolling: "touch",
                        }}
                        onClick={handleContainerClick}
                        onScroll={handleScroll}
                    >
                        <img
                            src={fullImageSrc || "/placeholder.svg"}
                            style={{
                                width: "auto",
                                minWidth: "100%",
                                minHeight: "100%",
                                height: "auto",
                                maxWidth: "none",
                                maxHeight: "none",
                                display: "block",
                                cursor: "grab",
                                userSelect: "none",
                                WebkitUserSelect: "none",
                                pointerEvents: "auto",
                            } as React.CSSProperties}
                            alt="Preview"
                            draggable={false}
                        />
                    </div>
                </>
            )}
        </>
    )
}

export default CarouselImagePreview
