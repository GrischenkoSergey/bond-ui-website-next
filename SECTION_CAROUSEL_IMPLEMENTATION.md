# Section Carousel Implementation

## Overview
Added a second carousel for mobile mode that displays all section card images and descriptions. This carousel is placed after the "buynowbar" section and is only visible on mobile devices.

## Changes Made

### 1. app/home/page.tsx

#### New Data Structure
- Added `sectionCarouselSlides` array containing 9 slides with images, thumbnails, titles, and descriptions from all section cards:
  1. Function keys for pull down menus
  2. Quick Command Bars
  3. Keyboard Drop Down Menu (KDDM)
  4. New dialogue boxes
  5. Advanced Find
  6. Quick Command Bars (QCBs) - Add Commands
  7. Font selection
  8. Easy to use dialogue boxes
  9. Insert Hyperlink dialogue box

#### New State Management
- `currentSection`: Current slide index for section carousel
- `isSectionPaused`: Pause state for section carousel
- `totalSectionSlides`: Total number of section slides
- `sectionCarouselRef`: Reference to section carousel DOM element
- `sectionIntervalRef`: Interval reference for auto-play

#### New Functions
- `nextSectionSlide()`: Navigate to next slide
- `prevSectionSlide()`: Navigate to previous slide
- `goToSectionSlide(index)`: Navigate to specific slide
- `handleSectionMouseEnter()`: Pause carousel on hover
- `handleSectionMouseLeave()`: Resume carousel on hover exit

#### New Auto-play Effect
- Added `useEffect` hook for section carousel auto-play
- 20-second interval (same as main carousel)
- Pauses when hovered or when image preview is active

#### New JSX Component
- Complete mobile carousel structure wrapped in `#mobile-view` div
- Features:
  - Navigation buttons (prev/next)
  - Progress dots indicator
  - Pause indicator
  - Slide counter
  - Image preview integration
  - Descriptions with title and text
  - Full accessibility support (ARIA labels)

### 2. app/styles/carousel.css

#### New CSS Classes
- `.section-carousel`: Main container styling
  - Increased margins (40px top/bottom)
  - Minimum height of 70vh
  
- `.section-carousel .carousel-container`: Slide container
  - Flexbox centering
  - Padding for content spacing

- `.section-carousel .carousel-track`: Track styling
  - Full width/height
  - Centered content

- `.section-carousel .slide`: Individual slide
  - Centered content
  - Fade transitions

- `.section-carousel .slide img`: Image styling
  - Max height 50vh
  - Object-fit: contain
  - Border radius
  - Responsive sizing

- `.section-descriptions`: Description container
  - Padding: 20px
  - Minimum height: 150px
  - Centered text

- `.section-descriptions h3`: Title styling
  - Font size: 1.3rem
  - Font weight: 600
  - Bottom margin

- `.section-descriptions p`: Paragraph styling
  - Font size: 1rem
  - Line height: 1.5

#### Responsive Adjustments
- **Mobile (max-width: 1151px)**:
  - Reduced margins
  - Smaller font sizes

- **Landscape Mobile**:
  - Increased min-height (85vh)
  - Reduced image max-height (40vh)
  - Adjusted description padding

## Features

1. **Auto-play**: 20-second interval with automatic transitions
2. **Pause on Hover**: Carousel pauses when user hovers over it
3. **Navigation Controls**: 
   - Previous/Next buttons
   - Progress dots for direct navigation
   - Slide counter showing current position
4. **Accessibility**: Full ARIA support for screen readers
5. **Image Preview**: Integration with ImagePreview component for zoom
6. **Responsive**: Optimized for both portrait and landscape mobile views
7. **Smooth Transitions**: Fade animations between slides
8. **Preview Awareness**: Carousel pauses when image preview is active

## Mobile Only Display
The carousel is wrapped in `#mobile-view` div, which should be styled to only display on mobile devices (max-width: 1151px based on existing patterns).

## Usage
The carousel automatically starts when the page loads on mobile devices. Users can:
- Click/tap navigation arrows to move between slides
- Click/tap progress dots to jump to specific slides
- Hover over carousel to pause auto-play
- Click/tap images to open full-size preview (via ImagePreview component)

## Browser Compatibility
- Works with all modern browsers
- Supports touch events for mobile devices
- Keyboard navigation support (inherited from carousel behavior)
