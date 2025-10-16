import Link from "next/link"

/**
 * Download and purchase call-to-action bar
 */
export default function BuyNowBar() {
    return (
        <div className="buynowbar">
            <p>
                Download our free 90 day trial of the Bond Add In for Microsoft Word.
                <br />
                Buy now for £24.99. Lifetime free updates.
            </p>
            <a className="downloadaddin" href="bondui-v270-setup.msi"></a>
            <Link className="buynow" href="/buynow"></Link>
        </div>
    )
}
