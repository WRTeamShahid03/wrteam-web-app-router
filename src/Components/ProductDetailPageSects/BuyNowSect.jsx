import React from 'react'
import CommonTextDiv from './CommonTextDiv'
import Link from 'next/link'

const BuyNowSect = () => {
    return (
        <>
            <section className="buyNowSect container">
                <div className="row">
                    <div className="col-12">
                        <CommonTextDiv title={'Ready to Transform Your Business?'} desc={`Discover how eBroker can revolutionize your online venture. From seamless website building to powerful marketing tools, we've got you covered. Don't miss out - buy now or contact us!`} />
                    </div>
                    <div className="col-12">
                        <div className="wrapper">
                            <Link href={''}><button className='buyBtn'>Buy Now</button></Link>
                            <Link href={'/contact-us'}><button className='contactBtn'>Contact Us</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BuyNowSect
