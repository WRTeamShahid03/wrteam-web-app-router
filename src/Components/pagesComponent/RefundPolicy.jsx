import React from 'react'

const RefundPolicy = () => {
    return (
        <section className='otherPages container'>
            <div>
                <h1 className='mainTitle'>Refund Policy</h1>
            </div>
            <div className="contentWrapper">
                <div className="contentDiv">
                    <span className='title'>WRTeam strive to ensure that every customer is satisfied with their purchase. If for any reason you are not completely happy with your order, you may be eligible for a refund under the following conditions:</span>

                    <div className="listDiv numListDiv">
                        <li>Item is "Not as Described" or Malfunctions</li>
                        <li>Security Vulnerability</li>
                        <li>Promised Item Support Not Provided</li>
                        <li>Items Not Downloaded</li>
                    </div>
                </div>

                <div className="contentDiv">
                    <span className='title'>Submitting a Refund Request:</span>
                    <span className='para'>After submit request we will review your request and respond to you as soon as possible with further instructions.</span>
                </div>

                <div className="contentDiv">
                    <span className='title'>Reasons that Do Not Entitle Customers to Policy Refunds:</span>
                    <div className="listDiv numListDiv">
                        <li>They Don't Want It After Downloading</li>
                        <li>Item Did Not Meet Expectations or Perceived Quality</li>
                        <li>Change of Mind</li>
                        <li>Mistaken Purchase</li>
                        <li>Insufficient Expertise to Use the Item</li>
                        <li>Insufficient Reason Provided</li>
                        <li>No longer access the item because it has been removed</li>
                        <li>Product purchase was made over 180 days ago (CodeCanyon supported items) or over 30 days ago (CodeCanyon unsupported items)</li>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default RefundPolicy
