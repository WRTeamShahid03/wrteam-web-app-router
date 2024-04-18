import Link from 'next/link'
import React from 'react'

const TermsOfUse = () => {
  return (
    <>
      <section className='otherPages container'>
        <div>
          <h1 className='mainTitle'>Terms Of Use </h1>
        </div>
        <div className="contentWrapper">
          <div className="contentDiv">
            <span className='title'>Terms of use for WRTeam</span>
            <span className='para'>Welcome to WRTeam!</span>
            <span className='para'>These terms outline the rules and regulations for the use of the WRTeam website and the services we provide. By accessing this website, we assume you accept these terms and conditions. Do not continue to use WRTeam if you do not agree to take all of the terms and conditions stated on this page.</span>
          </div>

          <div className="contentDiv">
            <span className='title'>The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and all Agreements:
            </span>
            <div className="listDiv">
              <li>Client, User You, and Your refers to you, the person accessing this website and accepting the Company's terms and conditions.
              </li>
              <li> The Company,Ourselves,We,Our and Us refers to our Company.</li>
              <li> Party,Parties,or Us refers to both the Client and ourselves.</li>
            </div>
          </div>

          <div className="contentDiv">
            <span className='title'>Cookies :</span>
            <span className='para'>We employ the use of cookies. By accessing WRTeam, you agreed to use cookies in agreement with the WRTeam's Privacy Policy.</span>
          </div>

          <div className="contentDiv">
            <span className='title'>License:</span>
            <span className='para'>Unless otherwise stated, WRTeam and/or its licensors own the intellectual property rights for all material on WRTeam. All intellectual property rights are reserved.
            </span>
          </div>

          <div className="contentDiv">
            <span className='title'>Restrictions:</span>
            <span className='para'>You are specifically restricted from all of the following:</span>
            <div className="listDiv">
              <li>Publishing any website material in any other media.</li>
              <li>Selling,sublicensing,codes,templates and/or otherwise commercialising any website material.</li>
              <li>Reproduce,duplicate or copy material from website.</li>
            </div>
          </div>

          <div className="contentDiv">
            <span className='conclusionText'>For the complete "Terms of Use" document tailored to your business, including limitations and liabilities, please contact our legal team at <Link href={'mailto:support@wrteam.in'}>support@wrteam.in</Link>
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default TermsOfUse
