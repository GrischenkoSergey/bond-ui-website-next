"use client"

import { useSwipeable } from 'react-swipeable'

interface UseSwipeableCarouselOptions {
    enabled: boolean // Only enable on mobile
    onSwipeLeft: () => void
    onSwipeRight: () => void
}

export function useSwipeableCarousel({
    enabled,
    onSwipeLeft,
    onSwipeRight,
}: UseSwipeableCarouselOptions) {
    const handlers = useSwipeable({
        onSwipedLeft: () => enabled && onSwipeLeft(),
        onSwipedRight: () => enabled && onSwipeRight(),
        trackMouse: false, // Only track touch, not mouse
        trackTouch: true,
        preventScrollOnSwipe: false,
        delta: 50, // Minimum distance for swipe
    })

    return enabled ? handlers : {}
}
