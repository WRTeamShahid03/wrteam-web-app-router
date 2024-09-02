'use client'
import Link from 'next/link'
import React from 'react'

const CopyRightDisclaimer = () => {
    return (
        <section className='otherPages container'>
            <div>
                <h1 className='mainTitle'>Copyright & Disclaimer</h1>
            </div>
            <div className="contentWrapper">
                <div className="contentDiv">
                    <span className='title'>Copyright:</span>
                    <span className='para'>The WRTeam website's design, images, and content are its proprietary property and are protected against breach by copyright laws. Copyright © All rights reserved. While some of the graphics were made by WRTeam, some might have come from non-copyrighted platforms. Every written content is original by WRTeam. Products listed on the website are the sole property of WRTeam.</span>
                </div>
                <div className="contentDiv">
                    <span className='title'>Disclaimer:</span>
                    <span className='para'>WRTeam is an expert in developing websites and applications. It offers customised code for multiple businesses via our <Link href={'https://wrteam.in/'}>website</Link> and <Link href={'https://1.envato.market/vNz3zy'}>envato profile.</Link> UI/UX design, digital marketing, and logo and banner creation are further services offered.</span>
                </div>
                <div className="contentDiv">
                    <span className='title'>Copyright Ownership:</span>
                    <span className='para'>WRTeam asserts its exclusive ownership over all graphics, content, and design displayed on the website. Some graphics are sourced from non-copyrighted platforms, while others are personally created by WRTeam. All written content is original and created by WRTeam. Products listed on the website are the sole property of WRTeam.</span>
                </div>
                <div className="contentDiv">
                    <span className='title'>Disclaimer Points:</span>
                    <div className="listDiv">
                        <li>WRTeam sells its products only through its <Link href={'https://wrteam.in/'}>website</Link> and <Link href={'https://1.envato.market/vNz3zy'}>envato profile.</Link></li>
                        <li>Products are not sold on any other platforms.</li>
                        <li>The refund policy for products purchased on Envato applies, and users are encouraged to read and review the documentation before seeking support.</li>
                    </div>
                </div>
                <div className="contentDiv">
                    <span className='title'>User Agreement:</span>
                    <span className='para'>The terms and conditions listed in the Copyright & Disclaimer section will be followed by users. Any use, reproduction, or distribution of content without written permission from WRTeam is strictly prohibited.</span>
                </div>
                <div className="contentDiv">
                    <span className='title'>Contact Information:</span>
                    <span className='para'>For any inquiries, support, or feedback, please contact us at:</span>
                    <div className="listDiv">
                        <li>Email: <Link href={'mailto:support@wrteam.in'}>support@wrteam.in</Link></li>
                        <li>Contact Number: <Link href={'tel:+919797945459'}>+919797945459</Link></li>
                    </div>
                </div>

                <div className="contentDiv">
                    <span className='conclusionText'>By using this website, you agree to the terms of this Copyright & Disclaimer. If you do not agree with these terms, please refrain from using our website.</span>
                </div>

            </div>
        </section>
    )
}

export default CopyRightDisclaimer
