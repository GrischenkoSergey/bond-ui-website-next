# Section Carousel Description Fix

## Issue
The titles and descriptions in the new section carousel were not visible because the CSS positioning wasn't correctly configured for the `.section-descriptions` container.

## Root Cause
The `.description-item` elements inside `.section-descriptions` were inheriting the default `.description-item` styles which use `position: absolute` with `height: 100%`, but the parent container didn't have proper positioning context and minimum height to display them.

## Solution

### Updated CSS in `app/styles/carousel.css`

#### 1. Main Section Descriptions Styles
```css
.section-descriptions {
    padding: 20px;
    min-height: 200px;              /* Increased from 150px */
    text-align: center;
    position: relative;              /* Added positioning context */
}

.section-descriptions .description-item {
    position: absolute;              /* Absolute positioning for overlay effect */
    top: 20px;                       /* Position from top */
    left: 20px;                      /* Position from left */
    right: 20px;                     /* Position from right */
    width: calc(100% - 40px);        /* Full width minus padding */
    opacity: 0;                      /* Hidden by default */
    transition: opacity 1s ease;     /* Smooth fade transition */
    pointer-events: none;            /* No interaction when hidden */
}

.section-descriptions .description-item.active {
    opacity: 1;                      /* Visible when active */
    pointer-events: auto;            /* Enable interaction when active */
    z-index: 1;                      /* Ensure it's on top */
}
```

#### 2. Mobile Responsive Adjustments (max-width: 1151px)
- Increased `min-height` to 180px
- Adjusted positioning: `top: 15px`, `left: 15px`, `right: 15px`
- Width: `calc(100% - 30px)`

#### 3. Landscape Mobile Adjustments
- `min-height`: 140px
- Maintained proper positioning

#### 4. Small Mobile (max-width: 600px)
- `min-height`: 220px (more space for longer text)
- Reduced font sizes for better fit

## How It Works

1. **Container**: `.section-descriptions` provides a positioned container with minimum height
2. **Items**: All `.description-item` elements are absolutely positioned in the same space, overlaying each other
3. **Active State**: Only the active item has `opacity: 1` and is visible
4. **Transitions**: Smooth 1-second fade transitions between descriptions
5. **Responsive**: Different minimum heights ensure all content is visible across device sizes

## Result
- Titles (h3) and descriptions (p) now display correctly
- Smooth fade transitions between slides
- Proper spacing and sizing on all screen sizes
- Content is fully readable on mobile devices (where the carousel is shown)

## Testing Recommendations
1. View on mobile device or use browser DevTools mobile emulation
2. Navigate through carousel slides
3. Verify titles and descriptions fade smoothly
4. Check different orientations (portrait/landscape)
5. Test on various screen sizes (320px to 1150px width)
