# Mobile Carousel Controls Documentation

## Overview
Both mobile carousels (main carousel and section carousel) now have configurable UI controls that allow you to show or hide specific features **in mobile mode only**. These controls do not affect desktop carousel functionality.

## Configuration Variables

The controls are defined at the top of the `Home` component in `app/home/page.tsx`:

### Main Mobile Carousel Controls
```typescript
const mobileCarouselControls = {
  showNavigationButtons: true,    // Show prev/next arrow buttons
  showProgressDots: true,          // Show progress indicator dots
  showPauseIndicator: true,        // Show "Paused" indicator when hovering
  showSlideCounter: false,         // Show "1 / 7" slide counter (disabled by default)
}
```

### Section Carousel Controls
```typescript
const sectionCarouselControls = {
  showNavigationButtons: true,    // Show prev/next arrow buttons
  showProgressDots: true,          // Show progress indicator dots
  showPauseIndicator: true,        // Show "Paused" indicator when hovering
  showSlideCounter: false,         // Show "1 / 9" slide counter (disabled by default)
}
```

## Available Options

### 1. `showNavigationButtons` (boolean)
- **Default**: `true`
- **Controls**: Left and right arrow buttons (❮ and ❯)
- **Purpose**: Allows users to manually navigate between slides
- **Recommendation**: Keep enabled for better user control

### 2. `showProgressDots` (boolean)
- **Default**: `true`
- **Controls**: Interactive dots at the bottom of the carousel
- **Purpose**: Shows current slide position and allows direct navigation to any slide
- **Recommendation**: Keep enabled for better navigation experience

### 3. `showPauseIndicator` (boolean)
- **Default**: `true`
- **Controls**: "⏸ Paused" indicator that appears when hovering over the carousel
- **Purpose**: Provides visual feedback that auto-play has been paused
- **Recommendation**: Keep enabled for better user awareness

### 4. `showSlideCounter` (boolean)
- **Default**: `false`
- **Controls**: Numeric counter showing "1 / 7" or "1 / 9" format
- **Purpose**: Shows exact slide number out of total slides
- **Recommendation**: Optional - enable if you prefer numeric indicators over progress dots
- **Note**: Can be used alongside or instead of progress dots

## Usage Examples

### Example 1: Minimal UI (Only Images and Text)
```typescript
const mobileCarouselControls = {
  showNavigationButtons: false,
  showProgressDots: false,
  showPauseIndicator: false,
  showSlideCounter: false,
}
```
Result: Clean carousel with only images and descriptions, relies on auto-play and swipe gestures.

### Example 2: Navigation Only
```typescript
const mobileCarouselControls = {
  showNavigationButtons: true,
  showProgressDots: false,
  showPauseIndicator: false,
  showSlideCounter: true,
}
```
Result: Arrow buttons and slide counter for simple navigation.

### Example 3: Full UI (Maximum Information)
```typescript
const mobileCarouselControls = {
  showNavigationButtons: true,
  showProgressDots: true,
  showPauseIndicator: true,
  showSlideCounter: true,
}
```
Result: All navigation and informational elements visible.

### Example 4: Progress Dots Only
```typescript
const mobileCarouselControls = {
  showNavigationButtons: false,
  showProgressDots: true,
  showPauseIndicator: false,
  showSlideCounter: false,
}
```
Result: Clean UI with only progress dots for navigation.

## Important Notes

1. **Mobile Mode Only**: These controls only affect the mobile carousels (displayed when screen width ≤ 1151px). Desktop carousel is not affected.

2. **Independent Controls**: Main carousel and section carousel have separate control objects, so you can configure them differently.

3. **Preview Mode**: All controls are automatically hidden when the image preview (zoom) mode is active.

4. **Auto-play**: Auto-play functionality continues to work regardless of these settings.

5. **Accessibility**: Navigation buttons and progress dots include proper ARIA labels for screen readers.

6. **Touch Support**: Swipe gestures work regardless of whether navigation buttons are visible.

## Recommendation

The default configuration provides the best balance:
- ✅ Navigation buttons: Enabled (easy manual control)
- ✅ Progress dots: Enabled (visual progress and quick navigation)
- ✅ Pause indicator: Enabled (user feedback)
- ❌ Slide counter: Disabled (progress dots provide similar information)

You can adjust these settings based on your design preferences and user experience goals.
