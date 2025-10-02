"use client"

import Layout from "@/components/Layout"
import Link from "next/link"

export default function BuyNow() {
  return (
    <Layout pageId="buynow">
      <div className="sectionrowtext">
        <h2>The Bond Add In for Microsoft Word</h2>
        <p>
          The revolutionary new interface for Word. The fastest way to access commands with your keyboard. A classic
          menu with function key access.
        </p>
      </div>

      <div className="buynowbar">
        <p>Buy now for £24.99. Lifetime free updates.</p>
        <Link className="buynow" href="/buynow"></Link>
      </div>

      <div className="sectionrowtext">
        <h2>Program Picker</h2>
        <p>
          Program Picker is a fast and easy program launcher and task switcher, using just two consecutive keys to
          launch and switch to up to 40 different programs and/or files.
          <br />
          Pin any file to any tile – pin up to 8,000 files and programs to Program Picker tiles – access any of the
          first 1,600 with just four consecutive keypresses.
        </p>
        <p>
          Includes: <br />
          Program Launcher
          <br />
          Task Switcher
          <br />
          File Launcher <br />
          Quick Snap – Window Resizer <br />
          Switcher Mode – hold CTRL to switch between up to four programs <br />
          Power User (Win X) Commands <br />
          System Shut Down Window <br />
          Tablet Mode (large tiles for touchscreens)
        </p>
      </div>

      <div className="buynowbar">
        <p>Buy now for £14.99. Lifetime free updates.</p>
        <a className="buynowpp" href="buynow.php"></a>
      </div>
    </Layout>
  )
}
