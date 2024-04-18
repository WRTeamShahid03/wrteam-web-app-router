import React from 'react'

const CancellationPolicy = () => {
    return (
        <section className='otherPages container'>
            <div>
                <h1 className='mainTitle'>Cancellation Policy</h1>
            </div>
            <div className="contentWrapper">
                <div className="contentDiv">
                    <span className='title'>All cancellation requests must be submitted to our Business Head of WRTeam. You must submit your cancellation requests by email. Once submitted, it will be approved by our team and considered accepted when you receive a reply to your request.
                        We take a minimum of 1 week to process the cancellation request.</span>
                   <div className="listDiv">
                    <li>We take a minimum of 1 week to process the cancellation request.</li>
                    <li>Cancellation of a project is based on the service level agreement, as agreed upon with you while starting the project.</li>
                    <li>Once a project is released for alpha/beta delivery to stakeholders of a client, it cannot be cancelled.</li>
                    <li>In the event of the cancellation of a project mutually decided between you and our team, you have to pay for efforts invested in the project up to the date of cancellation.</li>
                    <li>Source Code, Design, or any other material related to the project will not be delivered if payment is not settled by the client.</li>
                   </div>
                </div>
            </div>
        </section>
    )
}

export default CancellationPolicy
