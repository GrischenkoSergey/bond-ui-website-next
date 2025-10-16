import Image from "next/image"
import CarouselImagePreview from "@/components/CarouselImagePreview"
import type { SectionSlide } from "../data/carousel-data"
import type { CarouselControls } from "../config/homepage-config"

interface SectionCarouselProps {
    slides: SectionSlide[]
    current: number
    isPaused: boolean
    autoPlay: boolean
    isPreviewActive: boolean
    controls: CarouselControls
    swipeHandlers: any
    sectionCarouselRef: React.RefObject<HTMLDivElement>
    onMouseEnter: () => void
    onMouseLeave: () => void
    onPrevSlide: () => void
    onNextSlide: () => void
    onGoToSlide: (index: number) => void
}

/**
 * Section carousel for mobile - displays product features with swipe support
 * Always visible on mobile devices regardless of showSectionCardsOnMobile setting
 */
export default function SectionCarousel({
    slides,
    current,
    isPaused,
    autoPlay,
    isPreviewActive,
    controls,
    swipeHandlers,
    sectionCarouselRef,
    onMouseEnter,
    onMouseLeave,
    onPrevSlide,
    onNextSlide,
    onGoToSlide,
}: SectionCarouselProps) {
    return (
        <div id="mobile-view">
            <div
                ref={sectionCarouselRef}
                className="carousel-mobile section-carousel"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                role="region"
                aria-label="Product features carousel"
                aria-live="polite"
            >
                <div className="carousel-functions">
                    {/* Navigation buttons - conditionally rendered */}
                    {controls.showNavigationButtons && (
                        <>
                            <button
                                className={`carousel-btn prev ${isPreviewActive ? 'hidden' : ''}`}
                                onClick={onPrevSlide}
                                aria-label="Previous slide"
                            >
                                ❮
                            </button>
                            <button
                                className={`carousel-btn next ${isPreviewActive ? 'hidden' : ''}`}
                                onClick={onNextSlide}
                                aria-label="Next slide"
                            >
                                ❯
                            </button>
                        </>
                    )}

                    {/* Mobile progress indicators - conditionally rendered */}
                    {controls.showProgressDots && (
                        <div className={`carousel-progress-mobile ${isPreviewActive ? 'hidden' : ''}`}>
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    className={`progress-dot ${current === index ? "active" : ""}`}
                                    onClick={() => onGoToSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                    aria-current={current === index ? "true" : "false"}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Slide counter - conditionally rendered */}
                {controls.showSlideCounter && (
                    <div className={`carousel-counter-mobile ${isPreviewActive ? 'hidden' : ''}`} aria-live="polite" aria-atomic="true">
                        {current + 1} / {slides.length}
                    </div>
                )}

                {/* Pause indicator - conditionally rendered */}
                {controls.showPauseIndicator && isPaused && autoPlay && !isPreviewActive && (
                    <div className="carousel-pause-indicator" aria-live="polite">
                        <span>⏸ Paused</span>
                    </div>
                )}

                <div className="carousel-container" {...swipeHandlers}>
                    <div className="carousel-track">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`slide fade ${current === index ? "active" : ""}`}
                                aria-hidden={current !== index}
                            >
                                <CarouselImagePreview fullImageSrc={`/${slide.image}`}>
                                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                        <Image
                                            src={`/${slide.thumbnail || slide.image}`}
                                            alt={`${slide.title} - Feature ${index + 1}`}
                                            fill
                                            sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, (max-width: 768px) 720px, (max-width: 1024px) 980px, (max-width: 1151px) 1100px, 0px"
                                            priority={index === 0 || index === current || index === (current + 1) % slides.length || index === (current - 1 + slides.length) % slides.length}
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
                    {slides.map((slide, index) => (
                        <div key={index} className={`description-item ${current === index ? "active" : ""}`} data-index={index}>
                            <h3>{slide.title}</h3>
                            <p>{slide.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
