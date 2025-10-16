import Image from "next/image"
import ImagePreview from "@/components/ImagePreview"

interface SectionCardsProps {
    isMobile: boolean
    showOnMobile: boolean
}

/**
 * Static section cards grid displaying product features
 * Shows 9 cards in 3 rows on desktop, controlled visibility on mobile
 */
export default function SectionCards({ isMobile, showOnMobile }: SectionCardsProps) {
    const hideStyle = isMobile && !showOnMobile ? { display: 'none' } : undefined

    return (
        <>
            {/* First Row - 3 cards */}
            <div className="sectionrow" style={hideStyle}>
                <div className="section">
                    <ImagePreview fullImageSrc="/images/word2a.webp" mobileEnabled={isMobile}>
                        <div className="image-wrapper">
                            <div className="image-container">
                                <Image
                                    src="/images/word2a.webp"
                                    className="slide-image2"
                                    alt="Word Add-in Menu Bar and QCB"
                                    width={411}
                                    height={253}
                                    loading="lazy"
                                    quality={85}
                                />
                            </div>
                            <div className="Magnifying">
                                <Image src="/images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
                            </div>
                        </div>
                    </ImagePreview>

                    <div className="sub-section">
                        <h2>Use function keys to display pull down menus, and select commands.</h2>
                        <p>
                            Quickly access your favorite commands with easy to remember function key sequences - F1 F1 Save, F1 F7 Print, etc.
                        </p>
                    </div>
                </div>

                <div className="section">
                    <ImagePreview fullImageSrc="/images/word1blue.webp" mobileEnabled={isMobile}>
                        <div className="image-wrapper">
                            <div className="image-container">
                                <Image
                                    src="/images/word1blue.webp"
                                    className="slide-image"
                                    alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                                    width={411}
                                    height={253}
                                    loading="lazy"
                                    quality={85}
                                />
                            </div>
                            <div className="Magnifying">
                                <Image src="/images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
                            </div>
                        </div>
                    </ImagePreview>

                    <div className="sub-section">
                        <h2>Quick Command Bars</h2>
                        <p>
                            Access commands with a single function key, customise your own Quick Command Bars (QCBs). 11 commands per QCB. Easy to add and edit commands. Rename QCBs, change display order, turn on and off individual QCBs, change number of QCBs displayed, from 1 to 12. Save your QCB settings as a standard .xml file.
                        </p>
                    </div>
                </div>

                <div className="section">
                    <ImagePreview fullImageSrc="/images/word1336i2.webp" mobileEnabled={isMobile}>
                        <div className="image-wrapper">
                            <div className="image-container">
                                <Image
                                    src="/images/word1336i2.webp"
                                    className="slide-image2"
                                    alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                                    width={411}
                                    height={253}
                                    loading="lazy"
                                    quality={85}
                                />
                            </div>
                            <div className="Magnifying">
                                <Image src="/images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
                            </div>
                        </div>
                    </ImagePreview>

                    <div className="sub-section">
                        <h2>Keyboard Drop Down Menu (KDDM)</h2>
                        <p>Map your favourite commands to any key. Access the KDDM by pressing its menu function key, then press the key of the command you want. Super easy to add or change commands. Save your KDDM settings as a standard .xml file.</p>
                    </div>
                </div>
            </div>

            {/* Second Row - 3 cards */}
            <div className="sectionrow" style={hideStyle}>
                <div className="section">
                    <ImagePreview fullImageSrc="/images/word3a.webp" mobileEnabled={isMobile}>
                        <div className="image-wrapper">
                            <div className="image-container">
                                <Image
                                    src="/images/word3a.webp"
                                    className="slide-image2"
                                    alt="Word Add-in Menu Bar and QCB"
                                    width={411}
                                    height={253}
                                    loading="lazy"
                                    quality={85}
                                />
                            </div>
                            <div className="Magnifying">
                                <Image src="/images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
                            </div>
                        </div>
                    </ImagePreview>

                    <div className="sub-section">
                        <h2>New dialogue boxes use function keys to select commands.</h2>
                        <p>
                            Large, easy-to-select buttons — ideal for both mouse and touchscreen use. F12 key moves down to next sub-window, Escape key moves up to previous sub-window.
                        </p>
                    </div>
                </div>

                <div className="section">
                    <ImagePreview fullImageSrc="/images/advancedfind.avifs" previewId="preview-container2" mobileEnabled={isMobile}>
                        <div className="image-wrapper">
                            <div className="image-container">
                                <Image
                                    src="/images/word6.webp"
                                    className="slide-image"
                                    alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                                    width={411}
                                    height={253}
                                    loading="lazy"
                                    quality={85}
                                />
                            </div>
                            <div className="Magnifying">
                                <Image src="/images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
                            </div>
                        </div>
                    </ImagePreview>

                    <div className="sub-section">
                        <h2>Advanced Find</h2>
                        <p>
                            Intuitive dialog boxes are designed to support efficient keyboard use, while enlarged buttons enhance usability for mouse users.
                        </p>
                    </div>
                </div>

                <div className="section">
                    <ImagePreview fullImageSrc="/images/qcbaddcommand2.avifs" previewId="preview-container2" mobileEnabled={isMobile}>
                        <div className="image-wrapper">
                            <div className="image-container">
                                <Image
                                    src="/images/qcbaddcommandsmall.webp"
                                    className="slide-image2"
                                    alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                                    width={411}
                                    height={253}
                                    loading="lazy"
                                    quality={85}
                                />
                            </div>
                            <div className="Magnifying">
                                <Image src="/images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
                            </div>
                        </div>
                    </ImagePreview>

                    <div className="sub-section">
                        <h2>Quick Command Bars (QCBs)</h2>
                        <p>
                            Easily add custom commands to your QCBs. Press the function key of the command you wish to change. Select the new command from the standard drop down menu. The command is immediately added to the Quick Command Bar.
                        </p>
                    </div>
                </div>
            </div>

            {/* Third Row - 3 cards */}
            <div className="sectionrow" style={hideStyle}>
                <div className="section">
                    <ImagePreview fullImageSrc="/images/word5.webp" mobileEnabled={isMobile}>
                        <div className="image-wrapper">
                            <div className="image-container">
                                <Image
                                    src="/images/word5.webp"
                                    className="slide-image2"
                                    alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                                    width={411}
                                    height={253}
                                    loading="lazy"
                                    quality={85}
                                />
                            </div>
                            <div className="Magnifying">
                                <Image src="/images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
                            </div>
                        </div>
                    </ImagePreview>

                    <div className="sub-section">
                        <h2>Font selection made easy!</h2>
                        <p>
                            See more fonts at a glance with a larger font menu. Quickly navigate to font sections by typing the first letter of the font, or section number (e.g., '01', '02'). Move in any direction with the arrow keys to quickly select fonts.
                        </p>
                    </div>
                </div>

                <div className="section">
                    <ImagePreview fullImageSrc="/images/word6.webp" previewId="preview-container2" mobileEnabled={isMobile}>
                        <div className="image-wrapper">
                            <div className="image-container">
                                <Image
                                    src="/images/word6.webp"
                                    className="slide-image"
                                    alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                                    width={411}
                                    height={253}
                                    loading="lazy"
                                    quality={85}
                                />
                            </div>
                            <div className="Magnifying">
                                <Image src="/images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
                            </div>
                        </div>
                    </ImagePreview>

                    <div className="sub-section">
                        <h2>Easy to use dialogue boxes.</h2>
                        <p>
                            Press F1 and F2 Multi-Toggle Buttons to cycle through options.
                        </p>
                    </div>
                </div>

                <div className="section">
                    <ImagePreview fullImageSrc="/images/word7.webp" mobileEnabled={isMobile}>
                        <div className="image-wrapper">
                            <div className="image-container">
                                <Image
                                    src="/images/word7.webp"
                                    className="slide-image2"
                                    alt="Word Add-in Menu Bar and Drop Down Menu With Flyout Menu"
                                    width={411}
                                    height={253}
                                    loading="lazy"
                                    quality={85}
                                />
                            </div>
                            <div className="Magnifying">
                                <Image src="/images/3d-magnifier.svg" height={50} width={50} alt="Zoom Icon" loading="lazy" />
                            </div>
                        </div>
                    </ImagePreview>

                    <div className="sub-section">
                        <h2>Insert Hyperlink dialogue box.</h2>
                        <p>
                            Big, user-friendly buttons that are perfect for both mouse and touchscreen navigation.
                        </p>
                    </div>
                </div>
            </div>

            {/* Section Text */}
            <div className="sectionrowtext" style={hideStyle}>
                <h2>The Bond Add In for Microsoft Word</h2>
                <p>
                    The revolutionary new interface for Word. The fastest way to access commands with your keyboard. A classic
                    menu with function key access.
                </p>
            </div>
        </>
    )
}
