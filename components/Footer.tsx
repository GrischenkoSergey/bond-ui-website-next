"use client"

import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer>
      <div id="footernav">
        <ul>
          <li>
            <Link href="/" title="Home" className="homelink">
              <b>Word Add-in</b>
            </Link>
          </li>
          <li>
            <Link href="/addinmanual" title="Word Add-in Manual" className="addinmanuallink">
              <b>Word Add-in Manual</b>
            </Link>
          </li>
          <li>
            <Link href="/programpicker" title="Program Picker" className="programpickerlink">
              <b>Program Picker</b>
            </Link>
          </li>
          <li>
            <Link href="/programpickermanual" title="Program Picker Manual" className="ppmanuallink">
              <b>Program Picker Manual</b>
            </Link>
          </li>
          <li>
            <Link href="/support" title="Support" className="supportlink">
              <b>Support</b>
            </Link>
          </li>
          <li>
            <Link href="/terms" title="Terms and Conditions" className="termslink">
              <b>Terms and Conditions</b>
            </Link>
          </li>
          <li>
            <Link href="/privacypolicy" title="Privacy Policy" className="privacypolicylink">
              <b>Privacy Policy</b>
            </Link>
          </li>
          <li>
            <Link href="/privacynotice" title="Privacy Notice" className="privacynoticelink">
              <b>Privacy Notice</b>
            </Link>
          </li>
          <li>
            <Link href="/refundpolicy" title="Refund Policy" className="refundpolicylink">
              <b>Refund Policy</b>
            </Link>
          </li>
        </ul>
      </div>

      <div id="copy">
        <div className="copybox">
          <Image src="/images/logosmallwhite.webp" width={150} height={27} alt="Bond Logo" />
        </div>

        <div className="copybox2">
          <Image src="/images/logosmallblack.webp" width={150} height={27} alt="Bond Logo" />
        </div>

        <div className="copyboxdetails">
          <p>
            &#169; Bond Interface Design Ltd
            <br />
            Company no. 09226830 <br />
            Registered in England and Wales
            <br />
            <br />
            Registered address:
            <br />
            16 Blenman Close, Bristol, BS16 1JH
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
