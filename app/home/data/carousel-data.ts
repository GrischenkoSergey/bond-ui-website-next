/**
 * Carousel slide data for the Bond UI Website homepage
 */

export interface CarouselSlide {
    image: string
    thumbnail: string
    description: string
}

export interface MobileSlide {
    image: string
    thumbnail: string
    title: string
    description: string
}

export interface SectionSlide {
    image: string
    thumbnail: string
    title: string
    description: string
}

/**
 * Desktop carousel slides - Main product showcase
 */
export const carouselSlides: CarouselSlide[] = [
    {
        image: "images/carousel/word1024x630start.webp",
        thumbnail: "images/carousel/word1024x630start.webp",
        description:
            "Use function keys to select drop down menus, menu commands, and dialogue box commands. Custom Quick Command Bars (QCB)- access commands with a single function key, customise your own Quick Command Bars. Custom Keyboard Drop Down Menu (KDDM)- add commands to 48 keyboard keys on one menu, 12 KDDMs available, mapped to function keys.",
    },
    {
        image: "images/carousel/word1024x630q.webp",
        thumbnail: "images/carousel/word1024x630q.webp",
        description: "Use function keys to access drop down menus and menu commands.",
    },
    {
        image: "images/carousel/word1024x630c2.webp",
        thumbnail: "images/carousel/word1024x630c2.webp",
        description:
            'Keyboard Drop Down Menu (KDDM) - fully customisable keyboard menu. 12 KDDMs to customise, each with 48 commands. Map any command to any key. Even map previously opened documents to any key. Rename KDDM menu titles - e.g. change "F1 File" to "F1 Main".',
    },
    {
        image: "images/carousel/word1024x630d2.webp",
        thumbnail: "images/carousel/word1024x630d2.webp",
        description:
            "Quick Command Bars (QCB) - fully customisable command bars. Create custom command bars with 11 commands per bar, each command instantly accessible with just one function key press. Easily change titles of QCBs. Display up to 12 QCBs at one time - 132 commands, all accessible with the mouse too!",
    },
    {
        image: "images/carousel/word1024x630n.webp",
        thumbnail: "images/carousel/word1024x630n.webp",
        description: "Add flyout menus to Quick Command Bars for quicker access.",
    },
    {
        image: "images/carousel/word1024x630o.webp",
        thumbnail: "images/carousel/word1024x630o.webp",
        description:
            "Show or hide individual Quick Command Bars, easily add new commands, rename QCBs, change display order.",
    },
    {
        image: "images/carousel/word1024x630p.webp",
        thumbnail: "images/carousel/word1024x630p.webp",
        description: "Custom colour themes supplied. User editable .xml file included, make your own themes!",
    },
]

/**
 * Mobile carousel slides - Optimized for mobile viewing
 */
export const mobileSlides: MobileSlide[] = [
    {
        image: "images/carousel/word1024x630a.webp",
        thumbnail: "",
        title: "Pull down menus and commands",
        description:
            "Use function keys to open pull down menus and run commands. Use function keys to adjust values in dialogue boxes",
    },
    {
        image: "images/carousel/word1024x630b.webp",
        thumbnail: "",
        title: "Drop down menus and menu commands",
        description: "Use function keys to access drop down menus and menu commands.",
    },
    {
        image: "images/carousel/word1024x630g.webp",
        thumbnail: "",
        title: "Keyboard Drop Down Menu (KDDM)",
        description:
            'Fully customisable keyboard menu. 12 KDDMs to customise, each with 48 commands. Map any command to any key. Rename KDDM menu titles - e.g. change "F1 File" to "F1 Main".',
    },
    {
        image: "images/carousel/word1024x630d2.webp",
        thumbnail: "",
        title: "Quick Command Bars (QCB)",
        description:
            "Fully customisable command bars. Create custom command bars with 11 commands per bar. Easily change titles of QCBs. Display up to 12 QCBs at one time - 132 commands, all accessible with the mouse too!",
    },
    {
        image: "images/carousel/word1024x630n.webp",
        thumbnail: "",
        title: "Flyout menus",
        description: "Add flyout menus to Quick Command Bars for quicker access.",
    },
    {
        image: "images/carousel/word1024x630o.webp",
        thumbnail: "",
        title: "Quick Command Bars management",
        description:
            "Show or hide individual Quick Command Bars, easily add new commands, rename QCBs, change display order.",
    },
    {
        image: "images/carousel/word1024x630p.webp",
        thumbnail: "",
        title: "Colour themes management",
        description: "Custom colour themes supplied. User editable .xml file included, make your own themes!",
    },
]

/**
 * Section carousel slides - Feature highlights
 */
export const sectionCarouselSlides: SectionSlide[] = [
    {
        image: "images/word2a.webp",
        thumbnail: "images/word2a.webp",
        title: "Use function keys to display pull down menus, and select commands.",
        description:
            "Quickly access your favorite commands with easy to remember function key sequences - F1 F1 Save, F1 F7 Print, etc.",
    },
    {
        image: "images/word1blue.webp",
        thumbnail: "images/word1blue.webp",
        title: "Quick Command Bars (QCBs)",
        description:
            "Single function key access to commands. Customise your own QCBs with 11 commands each. Easy to add, edit, and rename. Display 1-12 QCBs. Save settings as .xml file.",
    },
    {
        image: "images/word1336i2.webp",
        thumbnail: "images/word1336i2.webp",
        title: "Keyboard Drop Down Menu (KDDM)",
        description:
            "Map favourite commands to any key. Press the KDDM menu key, then press your command key. Simple to add and edit. Save settings as .xml file.",
    },
    {
        image: "images/word3a.webp",
        thumbnail: "images/word3a.webp",
        title: "New dialogue boxes use function keys to select commands.",
        description:
            "Large, easy-to-select buttons - ideal for both mouse and touchscreen use. F12 moves to the next sub-window, Escape moves to the previous sub-window.",
    },
    {
        image: "images/advancedfind.avifs",
        thumbnail: "images/word6.webp",
        title: "Advanced Find",
        description:
            "Intuitive dialog boxes are designed to support efficient keyboard use, while enlarged buttons enhance usability for mouse users.",
    },
    {
        image: "images/qcbaddcommand2.avifs",
        thumbnail: "images/qcbaddcommandsmall.webp",
        title: "Quick Command Bars (QCBs)",
        description:
            "Easily add custom commands to your QCBs. Press the function key of the command you wish to change. Select the new command from the standard drop-down menu. The command is immediately added to the QCB.",
    },
    {
        image: "images/word5.webp",
        thumbnail: "images/word5.webp",
        title: "Font selection made easy!",
        description:
            "See more fonts at a glance with a larger font menu. Quickly navigate to font sections by typing the first letter of the font, or section number (e.g., '01', '02'). Move in any direction with the arrow keys to quickly select fonts.",
    },
    {
        image: "images/word6.webp",
        thumbnail: "images/word6.webp",
        title: "Easy to use dialogue boxes.",
        description: "Press F1 and F2 Multi-Toggle Buttons to cycle through options.",
    },
    {
        image: "images/word7.webp",
        thumbnail: "images/word7.webp",
        title: "Insert Hyperlink dialogue box.",
        description: "Big, user-friendly buttons that are perfect for both mouse and touchscreen navigation.",
    },
]
