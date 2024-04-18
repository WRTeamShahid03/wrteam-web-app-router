import Link from 'next/link'
import React from 'react'

const PrivacyPolicy = () => {
    return (
        <section className='otherPages container'>
            <div>
                <h1 className='mainTitle'>Privacy Policy</h1>
            </div>
            <div className="contentWrapper">
                <div className="contentDiv">
                    <span className='title'>Privacy Policy Updates:</span>
                    <span className='para'>We reserve the right to update this privacy policy to reflect changes in our practices. Users are encouraged to review this policy periodically.By using our website, you consent to the terms outlined in this privacy policy.The security of the privacy of our clients is our first concern. We are committed to making sure each user has a private and secure experience.
                    </span>
                </div>
                <div className="contentDiv">
                    <span className='title'>Information We Collect:</span>
                    <span className='para'>We use technologies like cookies (small files stored by your browser), web beacons, or unique device identifiers to anonymously identify your computer or device so we can deliver a better experience. This may include names, email addresses, and contact details. Additionally, we automatically collect usage data, such as IP addresses and browsing patterns.</span>
                </div>
                <div className="contentDiv">
                    <span className='title'>How We Use Your Information:</span>
                    <span className='para'>We use collected information to enhance user experience, deliver services, offers, and respond to inquiries. Analytics tools may be used to improve our offerings.</span>
                </div>
                <div className="contentDiv">
                    <span className='title'>How We Protect Your Information:</span>
                    <span className='para'>We implement security measures to prevent unauthorized access, alteration, disclosure, or destruction of personal information.</span>
                </div>
                <div className="contentDiv">
                    <span className='title'>Links To External Sites:</span>
                    <span className='para'>Our website may contain links to external sites. We are not responsible for the content or practices of these sites. Users should review the privacy policies of If you have any questions, please contact us at <Link href={'mailto:support@wrteam.in'}>support@wrteam.in</Link> </span>
                </div>
            </div>
        </section>
    )
}

export default PrivacyPolicy
