"use client"

import { useState } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import type { SectionSlide } from "../data/carousel-data"

interface MultiCarouselProps {
    slides: SectionSlide[]
}

/**
 * Multi-item carousel using react-multi-carousel
 * Displays one slide at a time
 */
export default function MultiCarousel({ slides }: MultiCarouselProps) {
    const [currentSlide, setCurrentSlide] = useState(0)

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1536 },
            items: 1,
            slidesToSlide: 1
        },
        desktop: {
            breakpoint: { max: 1536, min: 1024 },
            items: 1,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    }

    // Custom dot component matching section carousel style
    const CustomDot = ({ onClick, active, index }: any) => {
        return (
            <button
                className={`progress-dot ${active ? "active" : ""}`}
                onClick={() => {
                    onClick()
                    setCurrentSlide(index)
                }}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={active ? "true" : "false"}
            />
        )
    }

    return (
        <div style={{
            width: '100%',
            margin: '40px auto',
            padding: '0 0px',
            boxSizing: 'border-box'
        }}>
            <div style={{
                position: 'relative',
                boxShadow: '0 0 11px 0 #aaaaaa',
                borderRadius: '10px',
                overflow: 'hidden',
                minHeight: '80vh',
                height: 'auto',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={9000}
                    keyBoardControl={true}
                    customTransition="transform 600ms ease-in-out"
                    transitionDuration={600}
                    containerClass="multi-carousel-container"
                    removeArrowOnDeviceType={[]}
                    dotListClass="carousel-progress-mobile"
                    itemClass="multi-carousel-item"
                    showDots={true}
                    customDot={<CustomDot />}
                    renderDotsOutside={false}
                    arrows={true}
                    swipeable={true}
                    draggable={true}
                    beforeChange={(nextSlide) => setCurrentSlide(nextSlide)}
                    afterChange={(currentSlide) => setCurrentSlide(currentSlide)}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            style={{
                                minHeight: '80vh',
                                position: 'relative'
                            }}
                        >
                            {/* Image container - fills available space using calc */}
                            <div style={{
                                width: '100%',
                                height: 'calc(80vh - 200px)',
                                minHeight: '50vh',
                                overflow: 'hidden',
                                backgroundColor: '#f5f5f5',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                                className="multi-carousel-image-container"
                            >
                                <img
                                    src={`/${slide.thumbnail || slide.image}`}
                                    alt={slide.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'block',
                                        objectFit: 'cover',
                                        objectPosition: 'top left'
                                    }}
                                />
                            </div>

                            {/* Description section - matching section carousel style */}
                            <div style={{
                                width: '100%',
                                height: '200px',
                                padding: '15px',
                                backgroundColor: '#28013e',
                                textAlign: 'center',
                                position: 'relative'
                            }}
                                className="multi-carousel-description"
                            >
                                <h3 style={{
                                    fontSize: '1.2rem',
                                    fontWeight: '600',
                                    marginBottom: '12px',
                                    color: 'rgb(60, 60, 0)'
                                }}>
                                    {slide.title}
                                </h3>
                                <p style={{
                                    fontSize: '1.0rem',
                                    lineHeight: '1.4',
                                    color: 'oklch(0.145 0 0)'
                                }}>
                                    {slide.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}
