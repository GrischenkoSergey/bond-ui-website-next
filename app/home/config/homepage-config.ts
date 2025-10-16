/**
 * Homepage carousel configuration settings
 */

/**
 * Carousel UI control interface
 */
export interface CarouselControls {
    showNavigationButtons: boolean  // Show prev/next arrow buttons
    showProgressDots: boolean        // Show progress indicator dots
    showPauseIndicator: boolean      // Show "Paused" indicator when hovering
    showSlideCounter: boolean        // Show slide counter (e.g., "1 / 7")
}

/**
 * Homepage feature configuration
 */
export interface HomePageConfig {
    autoPlay: boolean                          // Enable auto-play for carousels
    autoPlayInterval: number                   // Auto-play interval in milliseconds
    showSectionCardsOnMobile: boolean         // Show static section cards on mobile
    mobileCarouselControls: CarouselControls  // Mobile carousel UI controls
    sectionCarouselControls: CarouselControls // Section carousel UI controls
}

/**
 * Default homepage configuration
 * 
 * Customize these settings to control carousel behavior:
 * - Set autoPlay to false to disable automatic sliding
 * - Adjust autoPlayInterval to change slide duration (in ms)
 * - Set showSectionCardsOnMobile to true to show static cards below carousel on mobile
 * - Customize UI controls for each carousel independently
 */
export const homePageConfig: HomePageConfig = {
    // Auto-play settings
    autoPlay: true,
    autoPlayInterval: 20000, // 20 seconds

    // Feature toggles
    // Set to false to hide the STATIC section cards grid on mobile devices
    // Note: The section CAROUSEL is always visible on mobile
    // When false: Hides the duplicate static section cards grid below the carousel
    showSectionCardsOnMobile: false,

    // Mobile carousel UI controls (main carousel on mobile)
    mobileCarouselControls: {
        showNavigationButtons: true,   // Show prev/next arrow buttons
        showProgressDots: true,         // Show progress indicator dots
        showPauseIndicator: false,      // Show "Paused" indicator when hovering
        showSlideCounter: true,         // Show "1 / 7" slide counter
    },

    // Section carousel UI controls (feature carousel on mobile)
    sectionCarouselControls: {
        showNavigationButtons: true,   // Show prev/next arrow buttons
        showProgressDots: true,         // Show progress indicator dots
        showPauseIndicator: false,      // Show "Paused" indicator when hovering
        showSlideCounter: true,         // Show "1 / 9" slide counter
    },
}
