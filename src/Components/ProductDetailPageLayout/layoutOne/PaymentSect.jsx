'use client'
import Image from 'next/image'
import React from 'react'
import paymentImg from '../../../Asset/Images/product-detail-page/paymentImg.png'
import paypal from '../../../Asset/Images/05-22-24-eBroker Img-/paypal.png'

const PaymentSect = () => {
    return (
        <section className='paymentSect container'>
            <div className="row">
                <div className="col-lg-6 leftDiv">
                    <span className='headline'>Secure Payment Options for Every Step</span>
                    <span className='desc'>Frictionless Transactions, Seamless Revenue: Experience the power of eBroker's diverse payment platform.</span>
                </div>
                <div className="col-lg-6 rightDiv">
                    <div className='orbitPaymentsWrapper'>
                        <div class="orbit-container">
                            <div class="center-img">
                                <img src={paypal.src} alt="Center Image" />
                                <span>Paypal</span>
                            </div>
                            <div class="orbit"></div>
                            <div class="orbit-inner"></div>
                            <div class="orbit-icon-container">
                                <div class="orbit-icon icon1"><img src={paypal.src} alt="Icon 1" /><span>Paypal</span></div>
                                <div class="orbit-icon icon2"><img src={paypal.src} alt="Icon 2" /><span>Paypal</span></div>
                                <div class="orbit-icon icon3"><img src={paypal.src} alt="Icon 3" /><span>Paypal</span></div>
                                <div class="orbit-icon icon4"><img src={paypal.src} alt="Icon 4" /><span>Paypal</span></div>
                            </div>
                            <div class="orbit-icon-container-inner">
                                <div class="orbit-icon icon5"><img src={paypal.src} alt="Icon 5" /><span>Paypal</span></div>
                                <div class="orbit-icon icon6"><img src={paypal.src} alt="Icon 6" /><span>Paypal</span></div>
                                <div class="orbit-icon icon7"><img src={paypal.src} alt="Icon 7" /><span>Paypal</span></div>
                                <div class="orbit-icon icon8"><img src={paypal.src} alt="Icon 8" /><span>Paypal</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PaymentSect
