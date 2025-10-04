"use client"

import Layout from "@/components/Layout"
import { useEffect } from "react"
import Image from "next/image"

export default function AddinManual() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    handleHashChange()
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return (
    <Layout pageId="addinmanual">
      <div className="sectionmanual">
        <h1>Word Add-in Manual</h1>
        <ul>
          <a href="#download">
            <li>Download.</li>
          </a>
          <a href="#install">
            <li>How to install.</li>
          </a>
          <a href="#menus">
            <li>Standard drop down menus.</li>
          </a>
          <a href="#dialogue">
            <li>Dialogue boxes.</li>
          </a>
          <a href="#qcb">
            <li>Quick Command Bars.</li>
          </a>
          <a href="#kddm">
            <li>Keyboard Drop Down Menus.</li>
          </a>
          <a href="#disable">
            <li>How to temporarily disable the Add in.</li>
          </a>
        </ul>

        <div id="download" className="anchor-section">
          <h2>Download</h2>
        </div>
        <p>Download the 90 day free trial version of the Bond Add In for Word by clicking the button below.</p>
        <a className="manualdownloadaddin" href="bondui-v270-setup.msi"></a>

        <div id="install" className="anchor-section">
          <h2>How to install</h2>
        </div>
        <p>Double click on the saved file &apos;bondui-v270-setup.msi&apos; to install the Add In.</p>
        <p>You will see the Bond Add In when you next open a document in Word.</p>
        <p>The Ribbon is initially hidden, in &apos;Show tabs only&apos; mode.</p>
        <div className="manual-image-container">
          <Image
            src="/images/manual1.gif"
            alt="The Ribbon is hidden in 'Tabs only mode' initially."
            width={800}
            height={450}
            unoptimized
          />
        </div>
        <p>
          To access Ribbon commands with the mouse, click on the tab title, such as &apos;Insert&apos;,
          &apos;Draw&apos;, etc. The relevant Ribbon tab will be temporarily displayed.
        </p>
        <p>
          To permanently display the Ribbon, click on any Ribbon tab, then click on the down arrow in the lower right
          corner of the Ribbon, to access the Ribbon display menu. Then click on &apos;Always shown Ribbon&apos;.
        </p>
        <div className="manual-image-container">
          <Image
            src="/images/manual2.gif"
            alt="Click on down arrow. Click on 'Always show Ribbon'."
            width={800}
            height={450}
            unoptimized
          />
        </div>
        <p>
          To hide the Ribbon again, click on any Ribbon tab, click on the down arrow in the lower right corner, and
          click on &apos;Show tabs only&apos;.
        </p>

        <div id="menus" className="anchor-section">
          <h2>Standard drop down menus</h2>
        </div>
        <p>
          Press the function key of the menu you want to access. The menu will open. Then press the function key of the
          command you wish to use.
        </p>
        <p>
          The drop down menus contain commands which correspond to the commands in the Ribbon tabs of the same name.
        </p>
        <p>
          For example, the &apos;Home&apos; drop down menu contains the commands in the &apos;Home&apos; tab of the
          Ribbon.
        </p>
        <div className="manual-image-container">
          <Image src="/images/manual3.gif" alt="Drop down menu." width={800} height={450} unoptimized />
        </div>

        <div id="dialogue" className="anchor-section">
          <h2>Dialogue boxes</h2>
        </div>
        <p>Press the function key of the command you want to use.</p>
        <div className="manual-image-container">
          <Image src="/images/dialoguebox1.gif" alt="Dialogue Box." width={800} height={450} unoptimized />
        </div>
        <p>Multi toggle buttons - press the function key repeatedly until you have selected the option you want.</p>
        <div className="manual-image-container">
          <Image src="/images/multitoggle.gif" alt="Multi toggle button." width={800} height={450} unoptimized />
        </div>
        <p>Press F12 to move to the next sub window.</p>
        <p>
          Press Esc to move the previous sub window, or to close the dialogue box if you are currently in the first sub
          window.
        </p>
        <div className="manual-image-container">
          <Image src="/images/dialoguebox2.gif" alt="Dialogue Box." width={800} height={450} unoptimized />
        </div>

        <div id="qcb" className="anchor-section">
          <h2>Quick Command Bars</h2>
        </div>
        <p>
          The Bond Add In comes with built in Quick Command Bars (QCBs). You can edit QCBs by pressing F12 F10 Select
          QCBs.
        </p>
        <div className="manual-image-container">
          <Image src="/images/selectqcb.gif" alt="Select Quick Command Bars." width={800} height={450} unoptimized />
        </div>
        <p>
          Hold down the function key of the QCB you want to edit. The &apos;Edit Custom Quick Command Bar&apos; window
          will open.
        </p>
        <div className="manual-image-container">
          <Image
            src="/images/editcustom.gif"
            alt="Edit Custom Quick Command Bar."
            width={800}
            height={450}
            unoptimized
          />
        </div>

        <div id="kddm" className="anchor-section">
          <h2>Keyboard Drop Down Menus</h2>
        </div>
        <p>
          Designed for desktop computers with mouse and keyboard, and multiple monitors, Desktop Mode has a grid of four
          rows of tiles, mapped to the first four rows of your keyboard. This allows you to access forty programs or
          files from any program with just two keypresses. The bottom row (ZXCVBNM) is used for Quick Snap layouts, and
          &apos;Move between monitors&apos; commands.
        </p>
        <p>
          The two display modes, Desktop Mode and Tablet Mode, have two submodes - Launcher Mode and Normal Mode.
          Launcher Mode is used for launching programs and files, and switching to open programs. Normal Mode is used
          for switching to open programs (but not for launching them), and to select programs to pin to Launcher Mode.
          Usually Launcher Mode is used for all Program Picker operations, but Normal Mode can be used to switch to
          running programs that haven&apos;t been pinned to Launcher Mode.
        </p>
        <p>
          When you first use Program Picker, the Launcher Mode tiles will be empty. Press the Spacebar to change to
          Normal Mode. Here you will see all the currently running programs on your PC. From this screen you can select
          programs to pin to tiles on the Launcher Mode page.
        </p>

        <div id="disable" className="anchor-section">
          <h2>How to temporarily disable the Add in</h2>
        </div>
        <p>
          Designed for desktop computers with mouse and keyboard, and multiple monitors, Desktop Mode has a grid of four
          rows of tiles, mapped to the first four rows of your keyboard. This allows you to access forty programs or
          files from any program with just two keypresses. The bottom row (ZXCVBNM) is used for Quick Snap layouts, and
          &apos;Move between monitors&apos; commands.
        </p>
        <p>
          The two display modes, Desktop Mode and Tablet Mode, have two submodes - Launcher Mode and Normal Mode.
          Launcher Mode is used for launching programs and files, and switching to open programs. Normal Mode is used
          for switching to open programs (but not for launching them), and to select programs to pin to Launcher Mode.
          Usually Launcher Mode is used for all Program Picker operations, but Normal Mode can be used to switch to
          running programs that haven&apos;t been pinned to Launcher Mode.
        </p>
        <p>
          When you first use Program Picker, the Launcher Mode tiles will be empty. Press the Spacebar to change to
          Normal Mode. Here you will see all the currently running programs on your PC. From this screen you can select
          programs to pin to tiles on the Launcher Mode page.
        </p>
      </div>
    </Layout>
  )
}
