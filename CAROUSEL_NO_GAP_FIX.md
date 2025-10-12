# Section Carousel - Prevent Description Gap Fix

## Issue
The `.description-item-container` (section-descriptions) needed to be attached to the bottom of the carousel to prevent gaps when the carousel is resized vertically.

## Root Cause
The carousel container and description container were not using flexbox layout, causing potential gaps when the viewport size changes, especially during orientation changes or window resizing.

## Solution Applied

### 1. Made `.section-carousel` a Flex Container
```css
.section-carousel {
    display: flex;
    flex-direction: column;  /* Stack image and description vertically */
}
```

### 2. Made Image Container Flexible
```css
.section-carousel .carousel-container {
    flex: 1;                 /* Take remaining space */
    min-height: 40vh;        /* Minimum height for images */
}
```

### 3. Fixed Description Container at Bottom
```css
.section-descriptions {
    flex-shrink: 0;          /* Prevent shrinking - maintain minimum height */
}
```

### 4. Responsive Adjustments
- **Landscape Mobile**: Reduced container min-height to `35vh` for better balance

## How It Works

1. **Flex Column Layout**: The section-carousel uses `flex-direction: column` to stack the image area and description area vertically.

2. **Image Area Grows**: The carousel-container uses `flex: 1` to take up all available space, pushing the description area to the bottom.

3. **Description Stays Fixed**: The section-descriptions uses `flex-shrink: 0` to maintain its minimum height and never shrink, always staying at the bottom.

4. **No Gaps**: This ensures there are never any gaps between the image area and description area, regardless of viewport size changes.

## Benefits

✅ Description area always attached to bottom of carousel
✅ No gaps during viewport resizing
✅ Smooth behavior during orientation changes
✅ Proper space distribution between images and descriptions
✅ Maintains minimum heights for both sections
✅ Works across all screen sizes and orientations

## Visual Result

```
┌─────────────────────────┐
│   Section Carousel      │
│  ┌─────────────────┐   │
│  │                 │   │
│  │  Image Area     │   │ ← Grows to fill space (flex: 1)
│  │  (min 40vh)     │   │
│  │                 │   │
│  └─────────────────┘   │
│  ┌─────────────────┐   │
│  │ Descriptions    │   │ ← Fixed at bottom (flex-shrink: 0)
│  │ (min 200px)     │   │
│  └─────────────────┘   │ ← Rounded bottom corners
└─────────────────────────┘
```

No matter how the viewport changes, the description area will always be attached to the bottom with no gaps!
