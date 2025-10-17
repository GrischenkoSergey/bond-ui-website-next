# iOS Carousel Flash - Quick Fix Summary

## Problem
Carousel slides flash/flicker during fade transitions on iOS Safari. Works fine on Android and desktop.

## Root Cause
iOS Safari compositing bug: When slides transition with CSS animations, iOS briefly destroys and recreates the rendering layer, causing a visible flash.

## Solution Applied

### Hardware Acceleration (iOS Only)
Added to `app/styles/mobile-preview.css`:

```css
@supports (-webkit-touch-callout: none) {
    /* Force GPU acceleration on slides */
    .slide, .fade {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-backface-visibility: hidden;
        will-change: opacity;
    }
    
    /* iOS-specific fadeIn animation */
    @keyframes fadeInIOS {
        from { opacity: 0; transform: translateZ(0) scale(1); }
        to { opacity: 1; transform: translateZ(0) scale(1); }
    }
    
    .fade.active {
        animation: fadeInIOS 1s ease !important;
    }
    
    /* Hardware acceleration for carousel container */
    .carousel-track {
        -webkit-transform: translate3d(0, 0, 0);
    }
    
    /* Hardware acceleration for images */
    .slide img {
        -webkit-transform: translateZ(0);
    }
}
```

## Why This Works

1. **translateZ(0)**: Forces GPU rendering, creates stable compositing layer
2. **will-change: opacity**: Hints to iOS to pre-optimize for animation
3. **backface-visibility: hidden**: Prevents rendering artifacts
4. **Custom iOS animation**: Maintains transform throughout fade, preventing layer destruction
5. **iOS-only**: Uses `@supports (-webkit-touch-callout: none)` to target only iOS Safari

## Files Changed

| File | Change |
|------|--------|
| `app/styles/mobile-preview.css` | Added iOS carousel animation fixes |

## Testing Required

- [x] Code implemented
- [ ] Test on iPhone 16 Pro
- [ ] Test on iPhone 15 Pro  
- [ ] Verify smooth fade (no flash)
- [ ] Verify no regression on Android/Desktop

## Expected Result

**Before**: Slide appears → Flash → Fade in  
**After**: Smooth fade in (no flash) ✨

## Quick Test on iPhone

1. Open website in Safari
2. Watch carousel auto-advance or swipe manually
3. **Expected**: Smooth fade transition
4. **Before Fix**: Brief flash during transition

---

**Status**: ✅ Ready for Testing  
**Impact**: Fixes visible iOS UX bug  
**Risk**: Low (iOS-only, feature detected)

See `IOS_CAROUSEL_FLASH_FIX.md` for detailed technical documentation.
