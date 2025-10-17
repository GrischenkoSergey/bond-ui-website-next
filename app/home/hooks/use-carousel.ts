/**
 * Custom hook for carousel state and logic
 */

import { useState, useEffect, useCallback, useRef } from 'react'

export interface UseCarouselProps {
    totalSlides: number
    autoPlay: boolean
    autoPlayInterval: number
    isPreviewActive: boolean
    isScrolling?: boolean  // Optional: pause during scroll
}

export interface UseCarouselReturn {
    current: number
    isPaused: boolean
    carouselRef: React.RefObject<HTMLDivElement>
    intervalRef: React.RefObject<NodeJS.Timeout | null>
    showSlide: (index: number) => void
    nextSlide: () => void
    prevSlide: () => void
    goToSlide: (index: number) => void
    setIsPaused: React.Dispatch<React.SetStateAction<boolean>>
    handleMouseEnter: () => void
    handleMouseLeave: () => void
}

/**
 * Manages carousel state, navigation, and auto-play functionality
 */
export function useCarousel({
    totalSlides,
    autoPlay,
    autoPlayInterval,
    isPreviewActive,
    isScrolling = false,  // Default to false for backward compatibility
}: UseCarouselProps): UseCarouselReturn {
    const [current, setCurrent] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const carouselRef = useRef<HTMLDivElement>(null)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    // Navigation functions
    const showSlide = useCallback((index: number) => {
        setCurrent(index)
    }, [])

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev + 1) % totalSlides)
    }, [totalSlides])

    const prevSlide = useCallback(() => {
        setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides)
    }, [totalSlides])

    const goToSlide = useCallback((index: number) => {
        setCurrent(index)
    }, [])

    // Pause on hover handlers
    const handleMouseEnter = useCallback(() => {
        if (autoPlay && !isPreviewActive) {
            setIsPaused(true)
        }
    }, [autoPlay, isPreviewActive])

    const handleMouseLeave = useCallback(() => {
        if (autoPlay && !isPreviewActive) {
            setIsPaused(false)
        }
    }, [autoPlay, isPreviewActive])

    // Auto-play functionality with pause support (includes scroll pause)
    useEffect(() => {
        // Pause if: auto-play disabled, only 1 slide, manually paused, preview active, or scrolling
        if (!autoPlay || totalSlides <= 1 || isPaused || isPreviewActive || isScrolling) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
            return
        }

        intervalRef.current = setInterval(nextSlide, autoPlayInterval)

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
        }
    }, [autoPlay, autoPlayInterval, nextSlide, totalSlides, isPaused, isPreviewActive, isScrolling])

    return {
        current,
        isPaused,
        carouselRef,
        intervalRef,
        showSlide,
        nextSlide,
        prevSlide,
        goToSlide,
        setIsPaused,
        handleMouseEnter,
        handleMouseLeave,
    }
}

/**
 * Keyboard navigation for carousel
 */
export function useCarouselKeyboard(
    carouselRef: React.RefObject<HTMLDivElement>,
    totalSlides: number,
    isPreviewActive: boolean,
    prevSlide: () => void,
    nextSlide: () => void,
    goToSlide: (index: number) => void,
    setIsPaused: React.Dispatch<React.SetStateAction<boolean>>
) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Only handle keyboard events when carousel is in focus and preview is not active
            if (!carouselRef.current?.contains(document.activeElement) || isPreviewActive) {
                return
            }

            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault()
                    prevSlide()
                    break
                case 'ArrowRight':
                    e.preventDefault()
                    nextSlide()
                    break
                case 'Home':
                    e.preventDefault()
                    goToSlide(0)
                    break
                case 'End':
                    e.preventDefault()
                    goToSlide(totalSlides - 1)
                    break
                case ' ': // Spacebar
                    e.preventDefault()
                    setIsPaused(prev => !prev)
                    break
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [carouselRef, totalSlides, isPreviewActive, prevSlide, nextSlide, goToSlide, setIsPaused])
}

/**
 * Image preloading for better carousel performance
 */
export function useImagePreloader() {
    const preloadedImagesRef = useRef<Set<string>>(new Set())

    const preloadImage = useCallback((src: string) => {
        if (preloadedImagesRef.current.has(src)) {
            return // Already preloaded
        }

        if (typeof window === 'undefined') return // Server-side rendering guard

        const img = window.document.createElement('img')
        img.decoding = 'async' // Use async decoding for better performance
        img.fetchPriority = 'low' // Don't interfere with current slide
        img.src = src

        img.onload = () => {
            preloadedImagesRef.current.add(src)
        }
    }, [])

    return { preloadImage, preloadedImagesRef }
}

/**
 * Preview mode detection
 */
export function usePreviewMode() {
    const [isPreviewActive, setIsPreviewActive] = useState(false)

    useEffect(() => {
        const checkPreviewActive = () => {
            const previewElement = document.querySelector('#preview-container, #preview-container2, #section-carousel-preview')
            setIsPreviewActive(previewElement !== null && getComputedStyle(previewElement).visibility === 'visible')
        }

        // Check initially
        checkPreviewActive()

        // Set up observer for preview changes
        const observer = new MutationObserver(checkPreviewActive)
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['style', 'class']
        })

        return () => observer.disconnect()
    }, [])

    return isPreviewActive
}

/**
 * Scroll detection for pausing carousel during scroll
 * Improves performance on Android devices by pausing auto-play while scrolling
 */
export function useScrollPause() {
    const [isScrolling, setIsScrolling] = useState(false)
    const scrollTimerRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (typeof window === 'undefined') return

        const handleScroll = () => {
            // Set scrolling state to true
            setIsScrolling(true)

            // Clear existing timer
            if (scrollTimerRef.current) {
                clearTimeout(scrollTimerRef.current)
            }

            // Set timer to detect when scrolling stops
            scrollTimerRef.current = setTimeout(() => {
                setIsScrolling(false)
            }, 150) // Resume 150ms after scroll stops
        }

        // Listen to scroll events
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (scrollTimerRef.current) {
                clearTimeout(scrollTimerRef.current)
            }
        }
    }, [])

    return isScrolling
}
