"use client"

import { useState, useEffect, useCallback } from "react"
import Layout from "@/components/Layout"
import ImagePreview from "@/components/ImagePreview"
import Link from "next/link"
import { useIsMobile } from '@/hooks/use-mobile'

const Home = () => {
  const carouselSlides = [
    {
      image: "/images/carousel/Word1024x630start.png",
      thumbnail: "/images/carousel/Word1024x630startsmall.jpg",
      description:
        "Use function keys to select drop down menus, menu commands, and dialogue box commands. Custom Quick Command Bars (QCB)- access commands with a single function key, customise your own Quick Command Bars. Custom Keyboard Drop Down Menu (KDDM)- add commands to 48 keyboard keys on one menu, 12 KDDMs available, mapped to function keys.",
    },
    {
      image: "/images/carousel/Word1024x630q.png",
      thumbnail: "/images/carousel/Word1024x630qsmall.jpg",
      description: "Use function keys to access drop down menus and menu commands.",
    },
    {
      image: "images/carousel/Word1024x630c2.png",
      thumbnail: "images/carousel/Word1024x630c2small.jpg",
      description:
        'Keyboard Drop Down Menu (KDDM) - fully customisable keyboard menu. 12 KDDMs to customise, each with 48 commands. Map any command to any key. Even map previously opened documents to any key. Rename KDDM menu titles - e.g. change "F1 File" to "F1 Main".',
    },
    {
      image: "images/carousel/Word1024x630d2.png",
      thumbnail: "images/carousel/Word1024x630d2small.jpg",
      description:
        "Quick Command Bars (QCB) - fully customisable command bars. Create custom command bars with 11 commands per bar, each command instantly accessible with just one function key press. Easily change titles of QCBs. Display up to 12 QCBs at one time - 132 commands, all accessible with the mouse too!",
    },
    {
      image: "images/carousel/Word1024x630n.png",
      thumbnail: "images/carousel/Word1024x630nsmall.jpg",
      description: "Add flyout menus to Quick Command Bars for quicker access.",
    },
    {
      image: "images/carousel/Word1024x630o.png",
      thumbnail: "images/carousel/Word1024x630osmall.jpg",
      description:
        "Show or hide individual Quick Command Bars, easily add new commands, rename QCBs, change display order.",
    },
    {
      image: "images/carousel/Word1024x630p.png",
      thumbnail: "images/carousel/Word1024x630psmall.jpg",
      description: "Custom colour themes supplied. User editable .xml file included, make your own themes!",
    },
  ]

  const mobileSlides = [
    {
      image: "images/carousel/Word1024x630a.png",
      thumbnail: "",
      description:
        "Use function keys to open pull down menus and run commands. Use function keys to adjust values in dialogue boxes",
    },
    {
      image: "images/carousel/Word1024x630b.png",
      thumbnail: "",
      description: "Use function keys to access drop down menus and menu commands.",
    },
    {
      image: "images/carousel/Word1024x630g.png",
      thumbnail: "",
      description:
        'Keyboard Drop Down Menu (KDDM) - fully customisable keyboard menu. 12 KDDMs to customise, each with 48 commands. Map any command to any key. Rename KDDM menu titles - e.g. change "F1 File" to "F1 Main".',
    },
    {
      image: "images/carousel/Word1024x630d2.png",
      thumbnail: "",
      description:
        "Quick Command Bars (QCB) - fully customisable command bars. Create custom command bars with 11 commands per bar. Easily change titles of QCBs. Display up to 12 QCBs at one time - 132 commands, all accessible with the mouse too!",
    },
    {
      image: "images/carousel/Word1024x630n.png",
      thumbnail: "",
      description: "Add flyout menus to Quick Command Bars for quicker access.",
    },
    {
      image: "images/carousel/Word1024x630o.png",
      thumbnail: "",
      description:
        "Show or hide individual Quick Command Bars, easily add new commands, rename QCBs, change display order.",
    },
    {
      image: "images/carousel/Word1024x630p.png",
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
              <img
                key={index}
                src={slide.thumbnail || "/placeholder.svg"}
                data-index={index}
                className={current === index ? "active-thumb" : ""}
                onClick={() => showSlide(index)}
                alt={`Thumbnail ${index + 1}`}
              />
            ))}
          </div>

          <div className="carousel-track">
            {carouselSlides.map((slide, index) => (
              <div key={index} className={`slide fade ${current === index ? "active" : ""}`}>
                <img src={slide.image || "/placeholder.svg"} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div id="mobile-view">
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
                // <div key={index} className={`mobile-slide ${current === index ? "active" : ""}`}>
                <div key={index} className={`${current === index ? "" : "mobile-slide"}`}>
                  <ImagePreview fullImageSrc={slide.image} mobileEnabled={false}>
                    <img src={slide.image || "/placeholder.svg"} alt={`Mobile slide ${index + 1}`} />
                  </ImagePreview>
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
      </div> */}

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
                <div
                  key={index}
                  className={`slide fade ${current === index ? 'active' : ''}`}
                >
                  <img src={slide.image} alt={`Mobile slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="description-item-container">
            {mobileSlides.map((slide, index) => (
              <div
                key={index}
                className={`description-item ${current === index ? 'active' : ''}`}
                data-index={index}
              >
                <p>{index + 1} {slide.description}</p>
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
          <ImagePreview fullImageSrc="images/Word2A.png" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <img src="images/Word2Asmall.gif" className="slide-image2" alt="Word Add-in Menu Bar and QCB" />
              </div>
              <div className="Magnifying">
                <img src="images/3d-magnifier.svg" height="50" width="50" alt="Zoom Icon" />
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
          <ImagePreview fullImageSrc="images/Word1blue.png" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <img
                  src="images/Word1bluesmall.gif"
                  className="slide-image"
                  alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                />
              </div>
              <div className="Magnifying">
                <img src="images/3d-magnifier.svg" height="50" width="50" alt="Zoom Icon" />
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
          <ImagePreview fullImageSrc="images/Word1336I2.png" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <img
                  src="images/Word1336I2small.gif"
                  className="slide-image2"
                  alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                />
              </div>
              <div className="Magnifying">
                <img src="images/3d-magnifier.svg" height="50" width="50" alt="Zoom Icon" />
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
          <ImagePreview fullImageSrc="images/Word3A.png" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <img src="images/Word3Asmall.gif" className="slide-image2" alt="Word Add-in Menu Bar and QCB" />
              </div>
              <div className="Magnifying">
                <img src="images/3d-magnifier.svg" height="50" width="50" alt="Zoom Icon" />
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
          <ImagePreview fullImageSrc="images/AdvancedFind.gif" previewId="preview-container2" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <img
                  src="images/Word6small.gif"
                  className="slide-image"
                  alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                />
              </div>
              <div className="Magnifying">
                <img src="images/3d-magnifier.svg" height="50" width="50" alt="Zoom Icon" />
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
          <ImagePreview fullImageSrc="images/QCBAddCommand2.gif" previewId="preview-container2" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <img
                  src="images/QCBAddCommandsmall.gif"
                  className="slide-image2"
                  alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                />
              </div>
              <div className="Magnifying">
                <img src="images/3d-magnifier.svg" height="50" width="50" alt="Zoom Icon" />
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
          <ImagePreview fullImageSrc="images/Word5.png" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <img
                  src="images/Word5small.gif"
                  className="slide-image2"
                  alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                />
              </div>
              <div className="Magnifying">
                <img src="images/3d-magnifier.svg" height="50" width="50" alt="Zoom Icon" />
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
          <ImagePreview fullImageSrc="images/Word6.png" previewId="preview-container2" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <img
                  src="images/Word6small2.gif"
                  className="slide-image"
                  alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                />
              </div>
              <div className="Magnifying">
                <img src="images/3d-magnifier.svg" height="50" width="50" alt="Zoom Icon" />
              </div>
            </div>
          </ImagePreview>

          <div className="sub-section">
            <h2>Easy to use dialogue boxes.</h2>
            <p>Press F1 and F2 Multi-Toggle Buttons to cycle through options.</p>
          </div>
        </div>

        <div className="section">
          <ImagePreview fullImageSrc="images/Word7.png" mobileEnabled={isMobile}>
            <div className="image-wrapper">
              <div className="image-container">
                <img
                  src="images/Word7small.gif"
                  className="slide-image"
                  alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                />
              </div>
              <div className="Magnifying">
                <img src="images/3d-magnifier.svg" height="50" width="50" alt="Zoom Icon" />
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
