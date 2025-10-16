import Image from "next/image"
import type { CarouselSlide } from "../data/carousel-data"

interface DesktopCarouselProps {
    slides: CarouselSlide[]
    current: number
    isPaused: boolean
    autoPlay: boolean
    isPreviewActive: boolean
    carouselRef: React.RefObject<HTMLDivElement>
    onMouseEnter: () => void
    onMouseLeave: () => void
    onPrevSlide: () => void
    onNextSlide: () => void
    onGoToSlide: (index: number) => void
    onShowSlide: (index: number) => void
}

/**
 * Desktop carousel with thumbnails and full navigation
 * Displays main product showcase with keyboard navigation support
 */
export default function DesktopCarousel({
    slides,
    current,
    isPaused,
    autoPlay,
    isPreviewActive,
    carouselRef,
    onMouseEnter,
    onMouseLeave,
    onPrevSlide,
    onNextSlide,
    onGoToSlide,
    onShowSlide,
}: DesktopCarouselProps) {
    return (
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
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`description-item ${current === index ? "active" : ""}`}
                            data-index={index}
                        >
                            <p>{slide.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div
                ref={carouselRef}
                className="carousel"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                role="region"
                aria-label="Product showcase carousel"
                aria-live="polite"
                tabIndex={0}
            >
                <button
                    className={`carousel-btn prev ${isPreviewActive ? 'hidden' : ''}`}
                    onClick={onPrevSlide}
                    aria-label="Previous slide"
                    title="Previous (Left Arrow)"
                >
                    ❮
                </button>
                <button
                    className={`carousel-btn next ${isPreviewActive ? 'hidden' : ''}`}
                    onClick={onNextSlide}
                    aria-label="Next slide"
                    title="Next (Right Arrow)"
                >
                    ❯
                </button>

                {/* Progress indicators */}
                <div className={`carousel-progress ${isPreviewActive ? 'hidden' : ''}`}>
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

                {/* Pause indicator */}
                {isPaused && autoPlay && !isPreviewActive && (
                    <div className="carousel-pause-indicator" aria-live="polite">
                        <span>⏸ Paused</span>
                    </div>
                )}

                <div className={`carousel-thumbnails ${isPreviewActive ? 'hidden' : ''}`}>
                    {slides.map((slide, index) => (
                        <Image
                            key={index}
                            src={`/${slide.thumbnail}` || "/placeholder.svg"}
                            alt={`Thumbnail ${index + 1}`}
                            width={150}
                            height={92}
                            data-index={index}
                            className={current === index ? "active-thumb" : ""}
                            onClick={() => onShowSlide(index)}
                            quality={75}
                            loading={index < 3 ? "eager" : "lazy"}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault()
                                    onShowSlide(index)
                                }
                            }}
                        />
                    ))}
                </div>

                <div className="carousel-track">
                    {slides.map((slide, index) => (
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
                    {current + 1} / {slides.length}
                </div>
            </div>
        </div>
    )
}
