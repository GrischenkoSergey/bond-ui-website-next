"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import Layout from "@/components/Layout"
import ImagePreview from "@/components/ImagePreview"
import { useIsMobile } from '@/hooks/use-mobile'

const Home = () => {
  const carouselSlides = [
    {
      image: "/images/carousel/word1024x630start.webp",
      thumbnail: "/images/carousel/word1024x630startsmall.webp",
      description:
        "Use function keys to select drop down menus, menu commands, and dialogue box commands. Custom Quick Command Bars (QCB)- access commands with a single function key, customise your own Quick Command Bars. Custom Keyboard Drop Down Menu (KDDM)- add commands to 48 keyboard keys on one menu, 12 KDDMs available, mapped to function keys.",
    },
    {
      image: "/images/carousel/word1024x630q.webp",
      thumbnail: "/images/carousel/Word1024x630qsmall.webp",
      description: "Use function keys to access drop down menus and menu commands.",
    },
    {
      image: "images/carousel/word1024x630c2.webp",
      thumbnail: "images/carousel/word1024x630c2small.webp",
      description:
        'Keyboard Drop Down Menu (KDDM) - fully customisable keyboard menu. 12 KDDMs to customise, each with 48 commands. Map any command to any key. Even map previously opened documents to any key. Rename KDDM menu titles - e.g. change "F1 File" to "F1 Main".',
    },
    {
      image: "images/carousel/word1024x630d2.webp",
      thumbnail: "images/carousel/word1024x630d2small.webp",
      description:
        "Quick Command Bars (QCB) - fully customisable command bars. Create custom command bars with 11 commands per bar, each command instantly accessible with just one function key press. Easily change titles of QCBs. Display up to 12 QCBs at one time - 132 commands, all accessible with the mouse too!",
    },
    {
      image: "images/carousel/word1024x630n.webp",
      thumbnail: "images/carousel/word1024x630nsmall.webp",
      description: "Add flyout menus to Quick Command Bars for quicker access.",
    },
    {
      image: "images/carousel/word1024x630o.webp",
      thumbnail: "images/carousel/word1024x630osmall.webp",
      description:
        "Show or hide individual Quick Command Bars, easily add new commands, rename QCBs, change display order.",
    },
    {
      image: "images/carousel/word1024x630p.webp",
      thumbnail: "images/carousel/word1024x630psmall.webp",
      description: "Custom colour themes supplied. User editable .xml file included, make your own themes!",
    },
  ]

  const mobileSlides = [
    {
      image: "images/carousel/word1024x630a.webp",
      thumbnail: "",
      description:
        "Use function keys to open pull down menus and run commands. Use function keys to adjust values in dialogue boxes",
    },
    {
      image: "images/carousel/word1024x630b.webp",
      thumbnail: "",
      description: "Use function keys to access drop down menus and menu commands.",
    },
    {
      image: "images/carousel/word1024x630g.webp",
      thumbnail: "",
      description:
        'Keyboard Drop Down Menu (KDDM) - fully customisable keyboard menu. 12 KDDMs to customise, each with 48 commands. Map any command to any key. Rename KDDM menu titles - e.g. change "F1 File" to "F1 Main".',
    },
    {
      image: "images/carousel/word1024x630d2.webp",
      thumbnail: "",
      description:
        "Quick Command Bars (QCB) - fully customisable command bars. Create custom command bars with 11 commands per bar. Easily change titles of QCBs. Display up to 12 QCBs at one time - 132 commands, all accessible with the mouse too!",
    },
    {
      image: "images/carousel/word1024x630n.webp",
      thumbnail: "",
      description: "Add flyout menus to Quick Command Bars for quicker access.",
    },
    {
      image: "images/carousel/word1024x630o.webp",
      thumbnail: "",
      description:
        "Show or hide individual Quick Command Bars, easily add new commands, rename QCBs, change display order.",
    },
    {
      image: "images/carousel/word1024x630p.webp",
      thumbnail: "",
      description: "Custom colour themes supplied. User editable .xml file included, make your own themes!",
    },
  ]

  const className = ""
  const autoPlay = true
  const autoPlayInterval = 20000
  const total = carouselSlides.length

  const [current, setCurrent] = useState(0)
  const isMobile = useIsMobile()

  const showSlide = useCallback((index: number) => {
    setCurrent(index)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total)
  }, [total])

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total)
  }, [total])

  // useEffect(() => {
  //   if (!autoPlay || total <= 1) return

  //   const interval = setInterval(nextSlide, autoPlayInterval)
  //   return () => clearInterval(interval)
  // }, [autoPlay, autoPlayInterval, nextSlide, total])

  // if (!carouselSlides.length) return null

  return (
    <Layout pageId="home">
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
            {carouselSlides.map((slide, index) => (
              <div key={index} className={`description-item ${current === index ? "active" : ""}`} data-index={index}>
                <p>{slide.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={`carousel ${className}`}>
          <button className="carousel-btn prev" onClick={prevSlide}>
            ❮
          </button>
          <button className="carousel-btn next" onClick={nextSlide}>
            ❯
          </button>

          <div className="carousel-thumbnails">
            {carouselSlides.map((slide, index) => (
              <Image
                key={index}
                src={slide.thumbnail || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                width={150}
                height={92}
                data-index={index}
                className={current === index ? "active-thumb" : ""}
                onClick={() => showSlide(index)}
                quality={75}
                loading={index < 3 ? "eager" : "lazy"}
              />
            ))}
          </div>

          <div className="carousel-track">
            {carouselSlides.map((slide, index) => (
              <div key={index} className={`slide fade ${current === index ? "active" : ""}`}>
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={`Slide ${index + 1}`}
                  width={1024}
                  height={630}
                  priority={index === 0}
                  quality={90}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="mobile-view">
        <div className="mobile-header-text">
          <h1>The Bond Add-in</h1>
          <h1>A revolutionary</h1>
          <h1>new interface for</h1>
          <h1>Microsoft Word</h1>
        </div>
        <div className="carousel-mobile">
          <div className="carousel-functions">
            <button className="carousel-btn prev" onClick={prevSlide}>
              ❮
            </button>
            <button className="carousel-btn next" onClick={nextSlide}>
              ❯
            </button>
          </div>
          <div className="carousel-container">
            <div className="carousel-track">
              {mobileSlides.map((slide, index) => (
                <div key={index} className={`slide fade ${current === index ? "active" : ""}`}>
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={`Mobile slide ${index + 1}`}
                    width={1024}
                    height={630}
                    priority={index === 0}
                    quality={90}
                    loading={index === 0 ? "eager" : "lazy"}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="description-item-container">
            {mobileSlides.map((slide, index) => (
              <div key={index} className={`description-item ${current === index ? "active" : ""}`} data-index={index}>
                <p>
                  {index + 1} {slide.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="buynowbar">
        <p>
          Download our free 90 day trial of the Bond Add In for Microsoft Word.
          <br />
          Buy now for £24.99. Lifetime free updates.
        </p>
        <a className="downloadaddin" href="bondui-v270-setup.msi"></a>
        <Link className="buynow" href="/buynow"></Link>
      </div>

      <div className="sectionrow">
        <div className="section">
          <ImagePreview fullImageSrc="images/word2a.webp" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <Image
                  src="images/word2asmall.gif"
                  className="slide-image2"
                  alt="Word Add-in Menu Bar and QCB"
                  width={800}
                  height={500}
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="Magnifying">
                <Image src="images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
              </div>
            </div>
          </ImagePreview>

          <div className="sub-section">
            <h2>Use function keys to display pull down menus, and select commands.</h2>
            <p>
              Quickly access your favorite commands with easy to remember function key sequences - F1 F1 Save, F1 F7
              Print, etc.
            </p>
          </div>
        </div>

        <div className="section">
          <ImagePreview fullImageSrc="images/word1blue.webp" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <Image
                  src="images/word1bluesmall.gif"
                  className="slide-image"
                  alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                  width={800}
                  height={500}
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="Magnifying">
                <Image src="images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
              </div>
            </div>
          </ImagePreview>

          <div className="sub-section">
            <h2>Quick Command Bars</h2>
            <p>Access commands with a single function key, customise your own Quick Command Bars (QCBs).</p>
            <p>11 commands per QCB. Easy to add and edit commands.</p>
            <p>
              Rename QCBs, change display order, turn on and off individual QCBs, change number of QCBs displayed, from
              1 to 12.
            </p>
            <p>Save your QCB settings as a standard .xml file.</p>
          </div>
        </div>

        <div className="section">
          <ImagePreview fullImageSrc="images/word1336i2.webp" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <Image
                  src="images/word1336I2small.gif"
                  className="slide-image2"
                  alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                  width={800}
                  height={500}
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="Magnifying">
                <Image src="images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
              </div>
            </div>
          </ImagePreview>

          <div className="sub-section">
            <h2>Keyboard Drop Down Menu (KDDM)</h2>
            <p>Map your favourite commands to any key.</p>
            <p>Access the KDDM by pressing its menu function key, then press the key of the command you want.</p>
            <p>Super easy to add or change commands.</p>
            <p>Save your KDDM settings as a standard .xml file.</p>
          </div>
        </div>
      </div>

      <div className="sectionrow">
        <div className="section">
          <ImagePreview fullImageSrc="images/word3a.webp" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <Image
                  src="images/word3asmall.gif"
                  className="slide-image2"
                  alt="Word Add-in Menu Bar and QCB"
                  width={800}
                  height={500}
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="Magnifying">
                <Image src="images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
              </div>
            </div>
          </ImagePreview>

          <div className="sub-section">
            <h2>New dialogue boxes use function keys to select commands.</h2>
            <p>Large, easy-to-select buttons — ideal for both mouse and touchscreen use.</p>
            <p>F12 key moves down to next sub-window, Escape key moves up to previous sub-window.</p>
          </div>
        </div>

        <div className="section">
          <ImagePreview fullImageSrc="images/advancedfind.gif" previewId="preview-container2" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <Image
                  src="images/word6small.gif"
                  className="slide-image"
                  alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                  width={800}
                  height={500}
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="Magnifying">
                <Image src="images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
              </div>
            </div>
          </ImagePreview>

          <div className="sub-section">
            <h2>Advanced Find</h2>
            <p>
              Intuitive dialog boxes are designed to support efficient keyboard use, while enlarged buttons enhance
              usability for mouse users.
            </p>
          </div>
        </div>

        <div className="section">
          <ImagePreview fullImageSrc="images/qcbaddcommand2.gif" previewId="preview-container2" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <Image
                  src="images/qcbaddcommandsmall.gif"
                  className="slide-image2"
                  alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                  width={800}
                  height={500}
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="Magnifying">
                <Image src="images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
              </div>
            </div>
          </ImagePreview>

          <div className="sub-section">
            <h2>Quick Command Bars (QCBs)</h2>
            <p>Easily add custom commands to your QCBs.</p>
            <p>Press the function key of the command you wish to change:</p>
            <p>Select the new command from the standard drop down menu:</p>
            <p>The command is immediately added to the Quick Command Bar.</p>
          </div>
        </div>
      </div>

      <div className="sectionrow">
        <div className="section">
          <ImagePreview fullImageSrc="images/word5.webp" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <Image
                  src="images/word5small.gif"
                  className="slide-image2"
                  alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                  width={800}
                  height={500}
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="Magnifying">
                <Image src="images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
              </div>
            </div>
          </ImagePreview>

          <div className="sub-section">
            <h2>Font selection made easy!</h2>
            <p>See more fonts at a glance with a larger font menu.</p>
            <p>
              Quickly navigate to font sections by typing the first letter of the font, or section number (e.g., '01',
              '02').
            </p>
            <p>Move in any direction with the arrow keys to quickly select fonts.</p>
          </div>
        </div>

        <div className="section">
          <ImagePreview fullImageSrc="images/word6.webp" previewId="preview-container2" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <Image
                  src="images/Word6small2.gif"
                  className="slide-image"
                  alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                  width={800}
                  height={500}
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="Magnifying">
                <Image src="images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
              </div>
            </div>
          </ImagePreview>

          <div className="sub-section">
            <h2>Easy to use dialogue boxes.</h2>
            <p>Press F1 and F2 Multi-Toggle Buttons to cycle through options.</p>
          </div>
        </div>

        <div className="section">
          <ImagePreview fullImageSrc="images/word7.webp" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <Image
                  src="images/word7small.gif"
                  className="slide-image2"
                  alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                  width={800}
                  height={500}
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="Magnifying">
                <Image src="images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
              </div>
            </div>
          </ImagePreview>

          <div className="sub-section">
            <h2>Insert Hyperlink dialogue box.</h2>
            <p>Big, user-friendly buttons that are perfect for both mouse and touchscreen navigation.</p>
          </div>
        </div>
      </div>

      <div className="sectionrowtext">
        <h2>The Bond Add In for Microsoft Word</h2>
        <p>
          The revolutionary new interface for Word. The fastest way to access commands with your keyboard. A classic
          menu with function key access.
        </p>
      </div>
    </Layout>
  )
}

export default Home
