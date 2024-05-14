'use client'
import Image from 'next/image'
import React from 'react'
import paymentImg from '../../Asset/Images/product-detail-page/paymentImg.png'

const PaymentSect = () => {
    return (
        <section className='paymentSect container'>
            <div className="row">
                <div className="col-lg-6 leftDiv">
                    <span className='headline'>Secure Payment Options for Every Step</span>
                    <span className='desc'>Frictionless Transactions, Seamless Revenue: Experience the power of eBroker's diverse payment platform.</span>
                </div>
                <div className="col-lg-6 rightDiv">
                    <Image src={paymentImg} height={0} width={0} alt='paymentImg'/>
                </div>
            </div>
        </section>
    )
}

export default PaymentSect
