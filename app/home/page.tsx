"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import Layout from "@/components/Layout"
import ImagePreview from "@/components/ImagePreview"
import CarouselImagePreview from "@/components/CarouselImagePreview"
import { useIsMobile } from '@/hooks/use-mobile'

const Home = () => {
  const carouselSlides = [
    {
      image: "images/carousel/word1024x630start.webp",
      thumbnail: "images/carousel/word1024x630startsmall.webp",
      description:
        "Use function keys to select drop down menus, menu commands, and dialogue box commands. Custom Quick Command Bars (QCB)- access commands with a single function key, customise your own Quick Command Bars. Custom Keyboard Drop Down Menu (KDDM)- add commands to 48 keyboard keys on one menu, 12 KDDMs available, mapped to function keys.",
    },
    {
      image: "images/carousel/word1024x630q.webp",
      thumbnail: "images/carousel/Word1024x630qsmall.webp",
      description: "Use function keys to access drop down menus and menu commands.",
    },
    {
      image: "images/carousel/word1024x630c2.webp",
      thumbnail: "images/carousel/word1024x630c2small.webp",
      description:
        'Keyboard Drop Down Menu (KDDM) - fully customisable keyboard menu. 12 KDDMs to customise, each with 48 commands. Map any command to any key. Even map previously opened documents to any key. Rename KDDM menu titles - e.g. change "F1 File" to "F1 Main".',
    },
    {
      image: "images/carousel/word1024x630d2.webp",
      thumbnail: "images/carousel/word1024x630d2small.webp",
      description:
        "Quick Command Bars (QCB) - fully customisable command bars. Create custom command bars with 11 commands per bar, each command instantly accessible with just one function key press. Easily change titles of QCBs. Display up to 12 QCBs at one time - 132 commands, all accessible with the mouse too!",
    },
    {
      image: "images/carousel/word1024x630n.webp",
      thumbnail: "images/carousel/word1024x630nsmall.webp",
      description: "Add flyout menus to Quick Command Bars for quicker access.",
    },
    {
      image: "images/carousel/word1024x630o.webp",
      thumbnail: "images/carousel/word1024x630osmall.webp",
      description:
        "Show or hide individual Quick Command Bars, easily add new commands, rename QCBs, change display order.",
    },
    {
      image: "images/carousel/word1024x630p.webp",
      thumbnail: "images/carousel/word1024x630psmall.webp",
      description: "Custom colour themes supplied. User editable .xml file included, make your own themes!",
    },
  ]

  const mobileSlides = [
    {
      image: "images/carousel/word1024x630a.webp",
      thumbnail: "",
      title: "Pull down menus and commands",
      description:
        "Use function keys to open pull down menus and run commands. Use function keys to adjust values in dialogue boxes",
    },
    {
      image: "images/carousel/word1024x630b.webp",
      thumbnail: "",
      title: "Drop down menus and menu commands",
      description: "Use function keys to access drop down menus and menu commands.",
    },
    {
      image: "images/carousel/word1024x630g.webp",
      thumbnail: "",
      title: "Keyboard Drop Down Menu (KDDM)",
      description:
        'Fully customisable keyboard menu. 12 KDDMs to customise, each with 48 commands. Map any command to any key. Rename KDDM menu titles - e.g. change "F1 File" to "F1 Main".',
    },
    {
      image: "images/carousel/word1024x630d2.webp",
      thumbnail: "",
      title: "Quick Command Bars (QCB)",
      description:
        "Fully customisable command bars. Create custom command bars with 11 commands per bar. Easily change titles of QCBs. Display up to 12 QCBs at one time - 132 commands, all accessible with the mouse too!",
    },
    {
      image: "images/carousel/word1024x630n.webp",
      thumbnail: "",
      title: "Flyout menus",
      description: "Add flyout menus to Quick Command Bars for quicker access.",
    },
    {
      image: "images/carousel/word1024x630o.webp",
      thumbnail: "",
      title: "Quick Command Bars management",
      description:
        "Show or hide individual Quick Command Bars, easily add new commands, rename QCBs, change display order.",
    },
    {
      image: "images/carousel/word1024x630p.webp",
      thumbnail: "",
      title: "Colour themes management",
      description: "Custom colour themes supplied. User editable .xml file included, make your own themes!",
    },
  ]

  const sectionCarouselSlides = [
    {
      image: "images/word2a.webp",
      thumbnail: "images/word2asmall.webp",
      title: "Use function keys to display pull down menus, and select commands.",
      description:
        "Quickly access your favorite commands with easy to remember function key sequences - F1 F1 Save, F1 F7 Print, etc.",
    },
    {
      image: "images/word1blue.webp",
      thumbnail: "images/word1bluesmall.webp",
      title: "Quick Command Bars (QCBs)",
      description:
        "Single function key access to commands. Customise your own QCBs with 11 commands each. Easy to add, edit, and rename. Display 1-12 QCBs. Save settings as .xml file.",
    },
    {
      image: "images/word1336i2.webp",
      thumbnail: "images/word1336i2small.webp",
      title: "Keyboard Drop Down Menu (KDDM)",
      description:
        "Map favourite commands to any key. Press the KDDM menu key, then press your command key. Simple to add and edit. Save settings as .xml file.",
    },
    {
      image: "images/word3a.webp",
      thumbnail: "images/word3asmall.webp",
      title: "New dialogue boxes use function keys to select commands.",
      description:
        "Large, easy-to-select buttons — ideal for both mouse and touchscreen use. F12 moves to the next sub-window, Escape moves to the previous sub-window.",
    },
    {
      image: "images/advancedfind.avifs",
      thumbnail: "images/word6small.webp",
      title: "Advanced Find",
      description:
        "Intuitive dialog boxes are designed to support efficient keyboard use, while enlarged buttons enhance usability for mouse users.",
    },
    {
      image: "images/qcbaddcommand2.avifs",
      thumbnail: "images/qcbaddcommandsmall.webp",
      title: "Quick Command Bars (QCBs)",
      description:
        "Easily add custom commands to your QCBs. Press the function key of the command you wish to change. Select the new command from the standard drop-down menu. The command is immediately added to the QCB.",
    },
    {
      image: "images/word5.webp",
      thumbnail: "images/word5small.webp",
      title: "Font selection made easy!",
      description:
        "See more fonts at a glance with a larger font menu. Quickly navigate to font sections by typing the first letter of the font, or section number (e.g., '01', '02'). Move in any direction with the arrow keys to quickly select fonts.",
    },
    {
      image: "images/word6.webp",
      thumbnail: "images/word6small.webp",
      title: "Easy to use dialogue boxes.",
      description: "Press F1 and F2 Multi-Toggle Buttons to cycle through options.",
    },
    {
      image: "images/word7.webp",
      thumbnail: "images/word7small.webp",
      title: "Insert Hyperlink dialogue box.",
      description: "Big, user-friendly buttons that are perfect for both mouse and touchscreen navigation.",
    },
  ]

  const autoPlay = true
  const autoPlayInterval = 20000
  const total = carouselSlides.length
  const totalSectionSlides = sectionCarouselSlides.length

  // Mobile carousel UI controls (only for mobile mode)
  const mobileCarouselControls = {
    showNavigationButtons: true,    // Show prev/next arrow buttons
    showProgressDots: true,          // Show progress indicator dots
    showPauseIndicator: false,        // Show "Paused" indicator when hovering
    showSlideCounter: true,         // Show "1 / 7" slide counter (disabled by default)
  }

  // Section carousel UI controls (only for mobile mode)
  const sectionCarouselControls = {
    showNavigationButtons: true,    // Show prev/next arrow buttons
    showProgressDots: true,          // Show progress indicator dots
    showPauseIndicator: false,        // Show "Paused" indicator when hovering
    showSlideCounter: true,         // Show "1 / 9" slide counter (disabled by default)
  }

  // Page flip effect configuration
  const enablePageFlipEffect = true  // Set to false to disable flip animation on swipe

  // Flip effect enhancements
  const flipEnhancements = {
    enablePageShadow: true,      // Add subtle shadow during flip for depth effect
    enableHapticFeedback: true,  // Vibrate on flip completion (mobile only)
    enableNextSlidePeek: true,   // Show peek of next slide at bottom during flip
  }

  const [current, setCurrent] = useState(0)
  const [currentSection, setCurrentSection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isSectionPaused, setIsSectionPaused] = useState(false)
  const [isPreviewActive, setIsPreviewActive] = useState(false)
  const [isMainFlipping, setIsMainFlipping] = useState(false)
  const [isSectionFlipping, setIsSectionFlipping] = useState(false)
  const [mainFlipDirection, setMainFlipDirection] = useState<'left' | 'right'>('left')
  const [sectionFlipDirection, setSectionFlipDirection] = useState<'left' | 'right'>('left')
  const isMobile = useIsMobile()
  const carouselRef = useRef<HTMLDivElement>(null)
  const sectionCarouselRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const sectionIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const preloadedImagesRef = useRef<Set<string>>(new Set())

  const showSlide = useCallback((index: number) => {
    setCurrent(index)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total)
  }, [total])

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total)
  }, [total])

  const goToSlide = useCallback((index: number) => {
    setCurrent(index)
  }, [])

  // Section carousel callbacks
  const nextSectionSlide = useCallback(() => {
    setCurrentSection((prev) => (prev + 1) % totalSectionSlides)
  }, [totalSectionSlides])

  const prevSectionSlide = useCallback(() => {
    setCurrentSection((prev) => (prev - 1 + totalSectionSlides) % totalSectionSlides)
  }, [totalSectionSlides])

  const goToSectionSlide = useCallback((index: number) => {
    setCurrentSection(index)
  }, [])

  // Image preloading function for faster preview loading
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

  // Preload current, next, and previous images for both carousels
  useEffect(() => {
    if (!isMobile) return // Only preload for mobile carousels

    // Main mobile carousel preloading
    const currentImg = `/${mobileSlides[current]?.image}`
    const nextImg = `/${mobileSlides[(current + 1) % total]?.image}`
    const prevImg = `/${mobileSlides[(current - 1 + total) % total]?.image}`

    // Preload current and adjacent images
    preloadImage(currentImg)
    preloadImage(nextImg)
    preloadImage(prevImg)

    // Section carousel preloading
    const currentSectionImg = `/${sectionCarouselSlides[currentSection]?.image}`
    const nextSectionImg = `/${sectionCarouselSlides[(currentSection + 1) % totalSectionSlides]?.image}`
    const prevSectionImg = `/${sectionCarouselSlides[(currentSection - 1 + totalSectionSlides) % totalSectionSlides]?.image}`

    preloadImage(currentSectionImg)
    preloadImage(nextSectionImg)
    preloadImage(prevSectionImg)
  }, [current, currentSection, isMobile, preloadImage, total, totalSectionSlides, mobileSlides, sectionCarouselSlides])

  // Keyboard navigation
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
          goToSlide(total - 1)
          break
        case ' ': // Spacebar
          e.preventDefault()
          setIsPaused(prev => !prev)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [prevSlide, nextSlide, goToSlide, total, isPreviewActive])

  // Auto-play functionality with pause support
  useEffect(() => {
    if (!autoPlay || total <= 1 || isPaused || isPreviewActive) {
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
  }, [autoPlay, autoPlayInterval, nextSlide, total, isPaused, isPreviewActive])

  // Auto-play functionality for section carousel
  useEffect(() => {
    if (!autoPlay || totalSectionSlides <= 1 || isSectionPaused || isPreviewActive) {
      if (sectionIntervalRef.current) {
        clearInterval(sectionIntervalRef.current)
        sectionIntervalRef.current = null
      }
      return
    }

    sectionIntervalRef.current = setInterval(nextSectionSlide, autoPlayInterval)

    return () => {
      if (sectionIntervalRef.current) {
        clearInterval(sectionIntervalRef.current)
        sectionIntervalRef.current = null
      }
    }
  }, [autoPlay, autoPlayInterval, nextSectionSlide, totalSectionSlides, isSectionPaused, isPreviewActive])

  // Pause on hover handlers
  const handleMouseEnter = () => {
    if (autoPlay && !isPreviewActive) {
      setIsPaused(true)
    }
  }

  const handleMouseLeave = () => {
    if (autoPlay && !isPreviewActive) {
      setIsPaused(false)
    }
  }

  // Pause on hover handlers for section carousel
  const handleSectionMouseEnter = () => {
    if (autoPlay && !isPreviewActive) {
      setIsSectionPaused(true)
    }
  }

  const handleSectionMouseLeave = () => {
    if (autoPlay && !isPreviewActive) {
      setIsSectionPaused(false)
    }
  }

  // Listen for preview mode changes
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

  // Haptic feedback utility function
  const triggerHapticFeedback = useCallback(() => {
    if (!flipEnhancements.enableHapticFeedback) return

    // Check if Vibration API is supported
    if ('vibrate' in navigator) {
      // Short, subtle vibration (20ms)
      navigator.vibrate(20)
    }
  }, [flipEnhancements.enableHapticFeedback])

  // Touch swipe handlers for main mobile carousel
  const handleMainTouchStart = useCallback((e: React.TouchEvent) => {
    if (isPreviewActive || !enablePageFlipEffect) return
    const touch = e.touches[0]
    const carousel = carouselRef.current
    if (!carousel) return

    carousel.setAttribute('data-touch-start-x', touch.clientX.toString())
    carousel.setAttribute('data-touch-start-y', touch.clientY.toString())
    carousel.setAttribute('data-is-dragging', 'false')
  }, [isPreviewActive, enablePageFlipEffect])

  const handleMainTouchMove = useCallback((e: React.TouchEvent) => {
    if (isPreviewActive) return
    const carousel = carouselRef.current
    if (!carousel) return

    const startX = parseFloat(carousel.getAttribute('data-touch-start-x') || '0')
    const startY = parseFloat(carousel.getAttribute('data-touch-start-y') || '0')
    const touch = e.touches[0]
    const deltaX = touch.clientX - startX
    const deltaY = touch.clientY - startY

    // Check if this is a horizontal swipe
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
      e.preventDefault()

      if (enablePageFlipEffect) {
        carousel.setAttribute('data-is-dragging', 'true')

        // Get carousel width for calculating rotation
        const carouselWidth = carousel.offsetWidth

        // Calculate rotation angle based on drag distance (0 to 90 degrees)
        // Max rotation at 70% of screen width
        const maxDragDistance = carouselWidth * 0.7
        const dragProgress = Math.min(Math.abs(deltaX) / maxDragDistance, 1)
        const rotationAngle = dragProgress * 90 // 0 to 90 degrees

        // Calculate opacity (1 to 0.3 as rotation increases)
        const opacity = 1 - (dragProgress * 0.7)

        // Calculate shadow intensity (0 to 1 as rotation increases)
        const shadowIntensity = flipEnhancements.enablePageShadow ? dragProgress * 0.5 : 0

        // Find the carousel track and container
        const track = carousel.querySelector('.carousel-track') as HTMLElement
        const container = carousel.querySelector('.carousel-container') as HTMLElement

        if (track) {
          // Apply the rotation based on swipe direction
          if (deltaX < 0) {
            // Swiping left (next slide)
            track.style.transform = `perspective(1000px) rotateY(-${rotationAngle}deg)`
            track.style.opacity = opacity.toString()

            // Add dynamic shadow on the left edge (page lifting)
            if (flipEnhancements.enablePageShadow) {
              track.style.boxShadow = `-10px 0 ${20 + (shadowIntensity * 30)}px rgba(0, 0, 0, ${0.2 + shadowIntensity})`
            }

            setMainFlipDirection('left')
          } else {
            // Swiping right (previous slide)
            track.style.transform = `perspective(1000px) rotateY(${rotationAngle}deg)`
            track.style.opacity = opacity.toString()

            // Add dynamic shadow on the right edge
            if (flipEnhancements.enablePageShadow) {
              track.style.boxShadow = `10px 0 ${20 + (shadowIntensity * 30)}px rgba(0, 0, 0, ${0.2 + shadowIntensity})`
            }

            setMainFlipDirection('right')
          }
          track.style.transition = 'none' // Disable transition during drag
        }

        // Show peek of next slide at bottom
        if (flipEnhancements.enableNextSlidePeek && container && dragProgress > 0.3) {
          // Calculate peek amount (0 to 30px as drag progresses)
          const peekAmount = Math.min((dragProgress - 0.3) / 0.7, 1) * 30
          container.style.transform = `translateY(-${peekAmount}px)`
          container.style.transition = 'none'
        }
      }
    }
  }, [isPreviewActive, enablePageFlipEffect])

  const handleMainTouchEnd = useCallback((e: React.TouchEvent) => {
    if (isPreviewActive) return
    const carousel = carouselRef.current
    if (!carousel) return

    const startX = parseFloat(carousel.getAttribute('data-touch-start-x') || '0')
    const startY = parseFloat(carousel.getAttribute('data-touch-start-y') || '0')
    const endX = e.changedTouches[0].clientX
    const endY = e.changedTouches[0].clientY
    const deltaX = endX - startX
    const deltaY = endY - startY
    const isDragging = carousel.getAttribute('data-is-dragging') === 'true'

    const track = carousel.querySelector('.carousel-track') as HTMLElement

    // Only trigger swipe if horizontal movement is greater than vertical and exceeds threshold
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (enablePageFlipEffect && isDragging) {
        // Complete the flip animation
        setIsMainFlipping(true)

        if (track) {
          // Re-enable transition for completion animation
          track.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out'

          // Complete the flip to -90 or +90 degrees
          if (deltaX < 0) {
            track.style.transform = 'perspective(1000px) rotateY(-90deg)'
            track.style.opacity = '0.3'
          } else {
            track.style.transform = 'perspective(1000px) rotateY(90deg)'
            track.style.opacity = '0.3'
          }
        }

        // Change slide at midpoint and reset
        setTimeout(() => {
          if (deltaX > 0) {
            prevSlide()
          } else {
            nextSlide()
          }

          // Trigger haptic feedback on successful flip
          triggerHapticFeedback()

          // Reset the transform and shadow
          if (track) {
            track.style.transform = ''
            track.style.opacity = ''
            track.style.transition = ''
            track.style.boxShadow = ''
          }

          // Reset peek effect
          const container = carousel.querySelector('.carousel-container') as HTMLElement
          if (container && flipEnhancements.enableNextSlidePeek) {
            container.style.transform = ''
            container.style.transition = ''
          }

          setTimeout(() => setIsMainFlipping(false), 50)
        }, 300)
      } else if (!enablePageFlipEffect) {
        // No flip effect, instant transition
        if (deltaX > 0) {
          prevSlide()
        } else {
          nextSlide()
        }
      }
    } else {
      // Swipe cancelled or too short - snap back
      if (track && isDragging) {
        track.style.transition = 'transform 0.2s ease-out, opacity 0.2s ease-out, box-shadow 0.2s ease-out'
        track.style.transform = 'perspective(1000px) rotateY(0deg)'
        track.style.opacity = '1'
        track.style.boxShadow = ''

        // Reset peek effect
        const container = carousel.querySelector('.carousel-container') as HTMLElement
        if (container && flipEnhancements.enableNextSlidePeek) {
          container.style.transition = 'transform 0.2s ease-out'
          container.style.transform = ''
        }

        setTimeout(() => {
          track.style.transform = ''
          track.style.opacity = ''
          track.style.transition = ''
          track.style.boxShadow = ''
          if (container) {
            container.style.transform = ''
            container.style.transition = ''
          }
        }, 200)
      }
    }

    carousel.removeAttribute('data-touch-start-x')
    carousel.removeAttribute('data-touch-start-y')
    carousel.removeAttribute('data-is-dragging')
  }, [isPreviewActive, prevSlide, nextSlide, enablePageFlipEffect, triggerHapticFeedback])

  // Touch swipe handlers for section carousel
  const handleSectionTouchStart = useCallback((e: React.TouchEvent) => {
    if (isPreviewActive || !enablePageFlipEffect) return
    const touch = e.touches[0]
    const carousel = sectionCarouselRef.current
    if (!carousel) return

    carousel.setAttribute('data-touch-start-x', touch.clientX.toString())
    carousel.setAttribute('data-touch-start-y', touch.clientY.toString())
    carousel.setAttribute('data-is-dragging', 'false')
  }, [isPreviewActive, enablePageFlipEffect])

  const handleSectionTouchMove = useCallback((e: React.TouchEvent) => {
    if (isPreviewActive) return
    const carousel = sectionCarouselRef.current
    if (!carousel) return

    const startX = parseFloat(carousel.getAttribute('data-touch-start-x') || '0')
    const startY = parseFloat(carousel.getAttribute('data-touch-start-y') || '0')
    const touch = e.touches[0]
    const deltaX = touch.clientX - startX
    const deltaY = touch.clientY - startY

    // Check if this is a horizontal swipe
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
      e.preventDefault()

      if (enablePageFlipEffect) {
        carousel.setAttribute('data-is-dragging', 'true')

        // Get carousel width for calculating rotation
        const carouselWidth = carousel.offsetWidth

        // Calculate rotation angle based on drag distance (0 to 90 degrees)
        const maxDragDistance = carouselWidth * 0.7
        const dragProgress = Math.min(Math.abs(deltaX) / maxDragDistance, 1)
        const rotationAngle = dragProgress * 90

        // Calculate opacity
        const opacity = 1 - (dragProgress * 0.7)

        // Calculate shadow intensity (0 to 1 as rotation increases)
        const shadowIntensity = flipEnhancements.enablePageShadow ? dragProgress * 0.5 : 0

        // Find the carousel track and container
        const track = carousel.querySelector('.carousel-track') as HTMLElement
        const container = carousel.querySelector('.carousel-container') as HTMLElement

        if (track) {
          // Apply the rotation based on swipe direction
          if (deltaX < 0) {
            // Swiping left (next slide)
            track.style.transform = `perspective(1000px) rotateY(-${rotationAngle}deg)`
            track.style.opacity = opacity.toString()

            // Add dynamic shadow on the left edge (page lifting)
            if (flipEnhancements.enablePageShadow) {
              track.style.boxShadow = `-10px 0 ${20 + (shadowIntensity * 30)}px rgba(0, 0, 0, ${0.2 + shadowIntensity})`
            }

            setSectionFlipDirection('left')
          } else {
            // Swiping right (previous slide)
            track.style.transform = `perspective(1000px) rotateY(${rotationAngle}deg)`
            track.style.opacity = opacity.toString()

            // Add dynamic shadow on the right edge
            if (flipEnhancements.enablePageShadow) {
              track.style.boxShadow = `10px 0 ${20 + (shadowIntensity * 30)}px rgba(0, 0, 0, ${0.2 + shadowIntensity})`
            }

            setSectionFlipDirection('right')
          }
          track.style.transition = 'none'
        }

        // Show peek of next slide at bottom
        if (flipEnhancements.enableNextSlidePeek && container && dragProgress > 0.3) {
          // Calculate peek amount (0 to 30px as drag progresses)
          const peekAmount = Math.min((dragProgress - 0.3) / 0.7, 1) * 30
          container.style.transform = `translateY(-${peekAmount}px)`
          container.style.transition = 'none'
        }
      }
    }
  }, [isPreviewActive, enablePageFlipEffect])

  const handleSectionTouchEnd = useCallback((e: React.TouchEvent) => {
    if (isPreviewActive) return
    const carousel = sectionCarouselRef.current
    if (!carousel) return

    const startX = parseFloat(carousel.getAttribute('data-touch-start-x') || '0')
    const startY = parseFloat(carousel.getAttribute('data-touch-start-y') || '0')
    const endX = e.changedTouches[0].clientX
    const endY = e.changedTouches[0].clientY
    const deltaX = endX - startX
    const deltaY = endY - startY
    const isDragging = carousel.getAttribute('data-is-dragging') === 'true'

    const track = carousel.querySelector('.carousel-track') as HTMLElement

    // Only trigger swipe if horizontal movement is greater than vertical and exceeds threshold
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (enablePageFlipEffect && isDragging) {
        // Complete the flip animation
        setIsSectionFlipping(true)

        if (track) {
          track.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out'

          // Complete the flip to -90 or +90 degrees
          if (deltaX < 0) {
            track.style.transform = 'perspective(1000px) rotateY(-90deg)'
            track.style.opacity = '0.3'
          } else {
            track.style.transform = 'perspective(1000px) rotateY(90deg)'
            track.style.opacity = '0.3'
          }
        }

        // Change slide at midpoint and reset
        setTimeout(() => {
          if (deltaX > 0) {
            prevSectionSlide()
          } else {
            nextSectionSlide()
          }

          // Trigger haptic feedback on successful flip
          triggerHapticFeedback()

          // Reset the transform and shadow
          if (track) {
            track.style.transform = ''
            track.style.opacity = ''
            track.style.transition = ''
            track.style.boxShadow = ''
          }

          // Reset peek effect
          const container = carousel.querySelector('.carousel-container') as HTMLElement
          if (container && flipEnhancements.enableNextSlidePeek) {
            container.style.transform = ''
            container.style.transition = ''
          }

          setTimeout(() => setIsSectionFlipping(false), 50)
        }, 300)
      } else if (!enablePageFlipEffect) {
        // No flip effect, instant transition
        if (deltaX > 0) {
          prevSectionSlide()
        } else {
          nextSectionSlide()
        }
      }
    } else {
      // Swipe cancelled or too short - snap back
      if (track && isDragging) {
        track.style.transition = 'transform 0.2s ease-out, opacity 0.2s ease-out, box-shadow 0.2s ease-out'
        track.style.transform = 'perspective(1000px) rotateY(0deg)'
        track.style.opacity = '1'
        track.style.boxShadow = ''

        // Reset peek effect
        const container = carousel.querySelector('.carousel-container') as HTMLElement
        if (container && flipEnhancements.enableNextSlidePeek) {
          container.style.transition = 'transform 0.2s ease-out'
          container.style.transform = ''
        }

        setTimeout(() => {
          track.style.transform = ''
          track.style.opacity = ''
          track.style.transition = ''
          track.style.boxShadow = ''
          if (container) {
            container.style.transform = ''
            container.style.transition = ''
          }
        }, 200)
      }
    }

    carousel.removeAttribute('data-touch-start-x')
    carousel.removeAttribute('data-touch-start-y')
    carousel.removeAttribute('data-is-dragging')
  }, [isPreviewActive, prevSectionSlide, nextSectionSlide, enablePageFlipEffect, triggerHapticFeedback])

  if (!carouselSlides.length) return null

  return (
    <Layout pageId="home">
      <div className="sectionhead">
        <div className="sectionheadtext">
          <h1>The Bond Add-in</h1>
          <h2>
            A revolutionary
            <br />
            new interface for <br />
            Microsoft Word
          </h2>
          <h2 className="price">£24.99</h2>
          <div className="description-item-container">
            {carouselSlides.map((slide, index) => (
              <div key={index} className={`description-item ${current === index ? "active" : ""}`} data-index={index}>
                <p>{slide.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={carouselRef}
          className="carousel"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          role="region"
          aria-label="Product showcase carousel"
          aria-live="polite"
          tabIndex={0}
        >
          <button
            className={`carousel-btn prev ${isPreviewActive ? 'hidden' : ''}`}
            onClick={prevSlide}
            aria-label="Previous slide"
            title="Previous (Left Arrow)"
          >
            ❮
          </button>
          <button
            className={`carousel-btn next ${isPreviewActive ? 'hidden' : ''}`}
            onClick={nextSlide}
            aria-label="Next slide"
            title="Next (Right Arrow)"
          >
            ❯
          </button>

          {/* Progress indicators */}
          <div className={`carousel-progress ${isPreviewActive ? 'hidden' : ''}`}>
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                className={`progress-dot ${current === index ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={current === index ? "true" : "false"}
              />
            ))}
          </div>

          {/* Pause indicator */}
          {isPaused && autoPlay && !isPreviewActive && (
            <div className="carousel-pause-indicator" aria-live="polite">
              <span>⏸ Paused</span>
            </div>
          )}

          <div className={`carousel-thumbnails ${isPreviewActive ? 'hidden' : ''}`}>
            {carouselSlides.map((slide, index) => (
              <Image
                key={index}
                src={`/${slide.thumbnail}` || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                width={150}
                height={92}
                data-index={index}
                className={current === index ? "active-thumb" : ""}
                onClick={() => showSlide(index)}
                quality={75}
                loading={index < 3 ? "eager" : "lazy"}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    showSlide(index)
                  }
                }}
              />
            ))}
          </div>

          <div className={`carousel-track ${isMainFlipping ? `flipping flip-${mainFlipDirection}` : ''}`}>
            {carouselSlides.map((slide, index) => (
              <div
                key={index}
                className={`slide fade ${current === index ? "active" : ""}`}
                aria-hidden={current !== index}
              >
                <Image
                  src={`/${slide.image}` || "/placeholder.svg"}
                  alt={`Slide ${index + 1}: ${slide.description.substring(0, 50)}...`}
                  width={1024}
                  height={630}
                  priority={index === 0}
                  quality={90}
                  loading={index === 0 ? "eager" : "lazy"}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            ))}
          </div>

          {/* Slide counter */}
          <div className={`carousel-counter ${isPreviewActive ? 'hidden' : ''}`} aria-live="polite" aria-atomic="true">
            {current + 1} / {total}
          </div>
        </div>
      </div>

      <div id="mobile-view">
        <div className="mobile-header-text">
          <h1>The Bond Add-in</h1>
          <h1>A revolutionary</h1>
          <h1>new interface for</h1>
          <h1>Microsoft Word</h1>
        </div>
        <div
          ref={carouselRef}
          className="carousel-mobile main-mobile-carousel"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMainTouchStart}
          onTouchMove={handleMainTouchMove}
          onTouchEnd={handleMainTouchEnd}
          role="region"
          aria-label="Product showcase carousel"
          aria-live="polite"
        >
          <div className="carousel-functions">
            {/* Navigation buttons - conditionally rendered */}
            {mobileCarouselControls.showNavigationButtons && (
              <>
                <button
                  className={`carousel-btn prev ${isPreviewActive ? 'hidden' : ''}`}
                  onClick={prevSlide}
                  aria-label="Previous slide"
                >
                  ❮
                </button>
                <button
                  className={`carousel-btn next ${isPreviewActive ? 'hidden' : ''}`}
                  onClick={nextSlide}
                  aria-label="Next slide"
                >
                  ❯
                </button>
              </>
            )}

            {/* Mobile progress indicators - conditionally rendered */}
            {mobileCarouselControls.showProgressDots && (
              <div className={`carousel-progress-mobile ${isPreviewActive ? 'hidden' : ''}`}>
                {mobileSlides.map((_, index) => (
                  <button
                    key={index}
                    className={`progress-dot ${current === index ? "active" : ""}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={current === index ? "true" : "false"}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Slide counter - conditionally rendered */}
          {mobileCarouselControls.showSlideCounter && (
            <div className={`carousel-counter-mobile ${isPreviewActive ? 'hidden' : ''}`} aria-live="polite" aria-atomic="true">
              {current + 1} / {mobileSlides.length}
            </div>
          )}

          {/* Pause indicator - conditionally rendered */}
          {mobileCarouselControls.showPauseIndicator && isPaused && autoPlay && !isPreviewActive && (
            <div className="carousel-pause-indicator" aria-live="polite">
              <span>⏸ Paused</span>
            </div>
          )}

          <div className="carousel-container">
            <div className={`carousel-track ${isMainFlipping ? `flipping flip-${mainFlipDirection}` : ''}`}>
              {mobileSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`slide fade ${current === index ? "active" : ""}`}
                  aria-hidden={current !== index}
                >
                  <CarouselImagePreview fullImageSrc={`/${slide.image}`}>
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                      <Image
                        src={`/${slide.image}`}
                        alt={`Mobile slide ${index + 1}`}
                        fill
                        sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, (max-width: 768px) 720px, (max-width: 1024px) 980px, (max-width: 1151px) 1100px, 0px"
                        priority={index === 0 || index === current || index === (current + 1) % total || index === (current - 1 + total) % total}
                        quality={85}
                        loading="eager"
                        unoptimized={false}
                        style={{ objectFit: 'cover', objectPosition: 'top left' }}
                      />
                    </div>
                  </CarouselImagePreview>
                </div>
              ))}
            </div>
          </div>

          <div className="description-item-container mobile-descriptions">
            {mobileSlides.map((slide, index) => (
              <div key={index} className={`description-item ${current === index ? "active" : ""}`} data-index={index}>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="buynowbar">
        <p>
          Download our free 90 day trial of the Bond Add In for Microsoft Word.
          <br />
          Buy now for £24.99. Lifetime free updates.
        </p>
        <a className="downloadaddin" href="bondui-v270-setup.msi"></a>
        <Link className="buynow" href="/buynow"></Link>
      </div>

      {/* Section Features Carousel - Mobile Only */}
      <div id="mobile-view">
        <div
          ref={sectionCarouselRef}
          className="carousel-mobile section-carousel"
          onMouseEnter={handleSectionMouseEnter}
          onMouseLeave={handleSectionMouseLeave}
          onTouchStart={handleSectionTouchStart}
          onTouchMove={handleSectionTouchMove}
          onTouchEnd={handleSectionTouchEnd}
          role="region"
          aria-label="Product features carousel"
          aria-live="polite"
        >
          <div className="carousel-functions">
            {/* Navigation buttons - conditionally rendered */}
            {sectionCarouselControls.showNavigationButtons && (
              <>
                <button
                  className={`carousel-btn prev ${isPreviewActive ? 'hidden' : ''}`}
                  onClick={prevSectionSlide}
                  aria-label="Previous slide"
                >
                  ❮
                </button>
                <button
                  className={`carousel-btn next ${isPreviewActive ? 'hidden' : ''}`}
                  onClick={nextSectionSlide}
                  aria-label="Next slide"
                >
                  ❯
                </button>
              </>
            )}

            {/* Mobile progress indicators - conditionally rendered */}
            {sectionCarouselControls.showProgressDots && (
              <div className={`carousel-progress-mobile ${isPreviewActive ? 'hidden' : ''}`}>
                {sectionCarouselSlides.map((_, index) => (
                  <button
                    key={index}
                    className={`progress-dot ${currentSection === index ? "active" : ""}`}
                    onClick={() => goToSectionSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={currentSection === index ? "true" : "false"}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Slide counter - conditionally rendered */}
          {sectionCarouselControls.showSlideCounter && (
            <div className={`carousel-counter-mobile ${isPreviewActive ? 'hidden' : ''}`} aria-live="polite" aria-atomic="true">
              {currentSection + 1} / {sectionCarouselSlides.length}
            </div>
          )}

          {/* Pause indicator - conditionally rendered */}
          {sectionCarouselControls.showPauseIndicator && isSectionPaused && autoPlay && !isPreviewActive && (
            <div className="carousel-pause-indicator" aria-live="polite">
              <span>⏸ Paused</span>
            </div>
          )}

          <div className="carousel-container">
            <div className={`carousel-track ${isSectionFlipping ? `flipping flip-${sectionFlipDirection}` : ''}`}>
              {sectionCarouselSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`slide fade ${currentSection === index ? "active" : ""}`}
                  aria-hidden={currentSection !== index}
                >
                  <CarouselImagePreview fullImageSrc={`/${slide.image}`}>
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                      <Image
                        src={`/${slide.thumbnail || slide.image}`}
                        alt={`${slide.title} - Feature ${index + 1}`}
                        fill
                        sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, (max-width: 768px) 720px, (max-width: 1024px) 980px, (max-width: 1151px) 1100px, 0px"
                        priority={index === 0 || index === currentSection || index === (currentSection + 1) % totalSectionSlides || index === (currentSection - 1 + totalSectionSlides) % totalSectionSlides}
                        quality={85}
                        loading="eager"
                        unoptimized={false}
                        style={{ objectFit: 'cover', objectPosition: 'top left' }}
                      />
                    </div>
                  </CarouselImagePreview>
                </div>
              ))}
            </div>
          </div>

          <div className="description-item-container section-descriptions">
            {sectionCarouselSlides.map((slide, index) => (
              <div key={index} className={`description-item ${currentSection === index ? "active" : ""}`} data-index={index}>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sectionrow">
        <div className="section">
          <ImagePreview fullImageSrc="/images/word2a.webp" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <Image
                  src="/images/word2asmall-section.webp"
                  className="slide-image2"
                  alt="Word Add-in Menu Bar and QCB"
                  width={800}
                  height={500}
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="Magnifying">
                <Image src="/images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
              </div>
            </div>
          </ImagePreview>

          <div className="sub-section">
            <h2>Use function keys to display pull down menus, and select commands.</h2>
            <p>
              Quickly access your favorite commands with easy to remember function key sequences - F1 F1 Save, F1 F7
              Print, etc.
            </p>
          </div>
        </div>

        <div className="section">
          <ImagePreview fullImageSrc="/images/word1blue.webp" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <Image
                  src="/images/word1bluesmall-section.webp"
                  className="slide-image"
                  alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                  width={800}
                  height={500}
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="Magnifying">
                <Image src="/images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
              </div>
            </div>
          </ImagePreview>

          <div className="sub-section">
            <h2>Quick Command Bars</h2>
            <p>Access commands with a single function key, customise your own Quick Command Bars (QCBs).</p>
            <p>11 commands per QCB. Easy to add and edit commands.</p>
            <p>
              Rename QCBs, change display order, turn on and off individual QCBs, change number of QCBs displayed, from
              1 to 12.
            </p>
            <p>Save your QCB settings as a standard .xml file.</p>
          </div>
        </div>

        <div className="section">
          <ImagePreview fullImageSrc="/images/word1336i2.webp" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <Image
                  src="/images/word1336i2small-section.webp"
                  className="slide-image2"
                  alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                  width={800}
                  height={500}
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="Magnifying">
                <Image src="/images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
              </div>
            </div>
          </ImagePreview>

          <div className="sub-section">
            <h2>Keyboard Drop Down Menu (KDDM)</h2>
            <p>Map your favourite commands to any key.</p>
            <p>Access the KDDM by pressing its menu function key, then press the key of the command you want.</p>
            <p>Super easy to add or change commands.</p>
            <p>Save your KDDM settings as a standard .xml file.</p>
          </div>
        </div>
      </div>

      <div className="sectionrow">
        <div className="section">
          <ImagePreview fullImageSrc="/images/word3a.webp" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <Image
                  src="/images/word3asmall-section.webp"
                  className="slide-image2"
                  alt="Word Add-in Menu Bar and QCB"
                  width={800}
                  height={500}
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="Magnifying">
                <Image src="/images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
              </div>
            </div>
          </ImagePreview>

          <div className="sub-section">
            <h2>New dialogue boxes use function keys to select commands.</h2>
            <p>Large, easy-to-select buttons — ideal for both mouse and touchscreen use.</p>
            <p>F12 key moves down to next sub-window, Escape key moves up to previous sub-window.</p>
          </div>
        </div>

        <div className="section">
          <ImagePreview fullImageSrc="/images/advancedfind.avifs" previewId="preview-container2" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <Image
                  src="/images/word6small-section.webp"
                  className="slide-image"
                  alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                  width={800}
                  height={500}
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="Magnifying">
                <Image src="/images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
              </div>
            </div>
          </ImagePreview>

          <div className="sub-section">
            <h2>Advanced Find</h2>
            <p>
              Intuitive dialog boxes are designed to support efficient keyboard use, while enlarged buttons enhance
              usability for mouse users.
            </p>
          </div>
        </div>

        <div className="section">
          <ImagePreview fullImageSrc="/images/qcbaddcommand2.avifs" previewId="preview-container2" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <Image
                  src="/images/qcbaddcommandsmall-section.webp"
                  className="slide-image2"
                  alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                  width={800}
                  height={500}
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="Magnifying">
                <Image src="/images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
              </div>
            </div>
          </ImagePreview>

          <div className="sub-section">
            <h2>Quick Command Bars (QCBs)</h2>
            <p>Easily add custom commands to your QCBs.</p>
            <p>Press the function key of the command you wish to change:</p>
            <p>Select the new command from the standard drop down menu:</p>
            <p>The command is immediately added to the Quick Command Bar.</p>
          </div>
        </div>
      </div>

      <div className="sectionrow">
        <div className="section">
          <ImagePreview fullImageSrc="/images/word5.webp" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <Image
                  src="/images/word5small-section.webp"
                  className="slide-image2"
                  alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                  width={800}
                  height={500}
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="Magnifying">
                <Image src="/images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
              </div>
            </div>
          </ImagePreview>

          <div className="sub-section">
            <h2>Font selection made easy!</h2>
            <p>See more fonts at a glance with a larger font menu.</p>
            <p>
              Quickly navigate to font sections by typing the first letter of the font, or section number (e.g., '01',
              '02').
            </p>
            <p>Move in any direction with the arrow keys to quickly select fonts.</p>
          </div>
        </div>

        <div className="section">
          <ImagePreview fullImageSrc="/images/word6.webp" previewId="preview-container2" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <Image
                  src="/images/word6small-section.webp"
                  className="slide-image"
                  alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                  width={800}
                  height={500}
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="Magnifying">
                <Image src="/images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
              </div>
            </div>
          </ImagePreview>

          <div className="sub-section">
            <h2>Easy to use dialogue boxes.</h2>
            <p>Press F1 and F2 Multi-Toggle Buttons to cycle through options.</p>
          </div>
        </div>

        <div className="section">
          <ImagePreview fullImageSrc="/images/word7.webp" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <Image
                  src="/images/word7small-section.webp"
                  className="slide-image2"
                  alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                  width={800}
                  height={500}
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="Magnifying">
                <Image src="/images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
              </div>
            </div>
          </ImagePreview>

          <div className="sub-section">
            <h2>Insert Hyperlink dialogue box.</h2>
            <p>Big, user-friendly buttons that are perfect for both mouse and touchscreen navigation.</p>
          </div>
        </div>
      </div>

      <div className="sectionrowtext">
        <h2>The Bond Add In for Microsoft Word</h2>
        <p>
          The revolutionary new interface for Word. The fastest way to access commands with your keyboard. A classic
          menu with function key access.
        </p>
      </div>
    </Layout>
  )
}

export default Home