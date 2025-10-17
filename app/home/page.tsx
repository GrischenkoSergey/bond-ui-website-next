"use client"

import { useEffect } from "react"
import Layout from "@/components/Layout"
import { useIsMobile } from '@/hooks/use-mobile'
import { useSwipeableCarousel } from '@/hooks/use-swipeable-mobile'

// Import configuration and data
import { homePageConfig } from "./config/homepage-config"
import { carouselSlides, mobileSlides, sectionCarouselSlides } from "./data/carousel-data"

// Import custom hooks
import {
  useCarousel,
  useCarouselKeyboard,
  useImagePreloader,
  usePreviewMode,
  useScrollPause
} from "./hooks/use-carousel"

// Import components
import DesktopCarousel from "./components/DesktopCarousel"
import MobileCarousel from "./components/MobileCarousel"
import BuyNowBar from "./components/BuyNowBar"
import SectionCarousel from "./components/SectionCarousel"
import SectionCards from "./components/SectionCards"

/**
 * Homepage - Bond UI Website
 * 
 * Displays product showcase with:
 * - Desktop carousel with thumbnails
 * - Mobile-optimized carousel with swipe gestures
 * - Section features carousel (mobile only)
 * - Static section cards grid (configurable on mobile)
 */
export default function Home() {
  const {
    autoPlay,
    autoPlayInterval,
    showSectionCardsOnMobile,
    mobileCarouselControls,
    sectionCarouselControls
  } = homePageConfig

  // Hooks
  const isMobile = useIsMobile()
  const isPreviewActive = usePreviewMode()
  const isScrolling = useScrollPause() // Pause carousel during scroll
  const { preloadImage } = useImagePreloader()

  // Main carousel (desktop and mobile)
  const mainCarousel = useCarousel({
    totalSlides: carouselSlides.length,
    autoPlay,
    autoPlayInterval,
    isPreviewActive,
    isScrolling, // Pass scroll state
  })

  // Section carousel (mobile only)
  const sectionCarousel = useCarousel({
    totalSlides: sectionCarouselSlides.length,
    autoPlay,
    autoPlayInterval,
    isPreviewActive,
    isScrolling, // Pass scroll state
  })

  // Swipe handlers for mobile carousels - disabled in preview mode
  const mobileSwipeHandlers = useSwipeableCarousel({
    enabled: isMobile && !isPreviewActive,
    onSwipeLeft: () => mainCarousel.nextSlide(),
    onSwipeRight: () => mainCarousel.prevSlide(),
  })

  const sectionSwipeHandlers = useSwipeableCarousel({
    enabled: isMobile && !isPreviewActive,
    onSwipeLeft: () => sectionCarousel.nextSlide(),
    onSwipeRight: () => sectionCarousel.prevSlide(),
  })

  // Keyboard navigation for desktop carousel
  useCarouselKeyboard(
    mainCarousel.carouselRef,
    carouselSlides.length,
    isPreviewActive,
    mainCarousel.prevSlide,
    mainCarousel.nextSlide,
    mainCarousel.goToSlide,
    mainCarousel.setIsPaused
  )

  // Preload current, next, and previous images for both carousels
  useEffect(() => {
    if (!isMobile) return // Only preload for mobile carousels

    // Main mobile carousel preloading
    const currentImg = `/${mobileSlides[mainCarousel.current]?.image}`
    const nextImg = `/${mobileSlides[(mainCarousel.current + 1) % carouselSlides.length]?.image}`
    const prevImg = `/${mobileSlides[(mainCarousel.current - 1 + carouselSlides.length) % carouselSlides.length]?.image}`

    preloadImage(currentImg)
    preloadImage(nextImg)
    preloadImage(prevImg)

    // Section carousel preloading
    const currentSectionImg = `/${sectionCarouselSlides[sectionCarousel.current]?.image}`
    const nextSectionImg = `/${sectionCarouselSlides[(sectionCarousel.current + 1) % sectionCarouselSlides.length]?.image}`
    const prevSectionImg = `/${sectionCarouselSlides[(sectionCarousel.current - 1 + sectionCarouselSlides.length) % sectionCarouselSlides.length]?.image}`

    preloadImage(currentSectionImg)
    preloadImage(nextSectionImg)
    preloadImage(prevSectionImg)
  }, [mainCarousel.current, sectionCarousel.current, isMobile, preloadImage])

  if (!carouselSlides.length) return null

  return (
    <Layout pageId="home">
      {/* Desktop Carousel */}
      {!isMobile && (
        <DesktopCarousel
          slides={carouselSlides}
          current={mainCarousel.current}
          isPaused={mainCarousel.isPaused}
          autoPlay={autoPlay}
          isPreviewActive={isPreviewActive}
          carouselRef={mainCarousel.carouselRef}
          onMouseEnter={mainCarousel.handleMouseEnter}
          onMouseLeave={mainCarousel.handleMouseLeave}
          onPrevSlide={mainCarousel.prevSlide}
          onNextSlide={mainCarousel.nextSlide}
          onGoToSlide={mainCarousel.goToSlide}
          onShowSlide={mainCarousel.showSlide}
        />
      )}

      {/* Mobile Carousel */}
      {isMobile && (
        <MobileCarousel
          slides={mobileSlides}
          current={mainCarousel.current}
          isPaused={mainCarousel.isPaused}
          autoPlay={autoPlay}
          isPreviewActive={isPreviewActive}
          controls={mobileCarouselControls}
          swipeHandlers={mobileSwipeHandlers}
          onMouseEnter={mainCarousel.handleMouseEnter}
          onMouseLeave={mainCarousel.handleMouseLeave}
          onPrevSlide={mainCarousel.prevSlide}
          onNextSlide={mainCarousel.nextSlide}
          onGoToSlide={mainCarousel.goToSlide}
        />
      )}

      {/* Buy Now Bar */}
      <BuyNowBar />

      {/* Section Features Carousel - Mobile Only - Always visible on mobile */}
      {isMobile && (
        <SectionCarousel
          slides={sectionCarouselSlides}
          current={sectionCarousel.current}
          isPaused={sectionCarousel.isPaused}
          autoPlay={autoPlay}
          isPreviewActive={isPreviewActive}
          controls={sectionCarouselControls}
          swipeHandlers={sectionSwipeHandlers}
          sectionCarouselRef={sectionCarousel.carouselRef}
          onMouseEnter={sectionCarousel.handleMouseEnter}
          onMouseLeave={sectionCarousel.handleMouseLeave}
          onPrevSlide={sectionCarousel.prevSlide}
          onNextSlide={sectionCarousel.nextSlide}
          onGoToSlide={sectionCarousel.goToSlide}
        />
      )}

      {/* Static Section Cards Grid - Controlled visibility on mobile */}
      <SectionCards
        isMobile={isMobile}
        showOnMobile={showSectionCardsOnMobile}
      />
    </Layout>
  )
}
