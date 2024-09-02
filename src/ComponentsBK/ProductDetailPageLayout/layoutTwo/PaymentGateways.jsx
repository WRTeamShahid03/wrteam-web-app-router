import React from 'react'
import CommonTextDiv from '../layoutOne/CommonTextDiv'
import gatewaysImg from '../../../Asset/Images/product-detail-page/layout-2/gatewaysImg.png'
import Image from 'next/image'
import icon1 from '../../../Asset/Images/product-detail-page/layout-2/paymentsIcons/icon1.png'
import icon2 from '../../../Asset/Images/product-detail-page/layout-2/paymentsIcons/icon2.png'
import icon3 from '../../../Asset/Images/product-detail-page/layout-2/paymentsIcons/icon3.png'
import icon4 from '../../../Asset/Images/product-detail-page/layout-2/paymentsIcons/icon4.png'
import icon5 from '../../../Asset/Images/product-detail-page/layout-2/paymentsIcons/icon5.png'
import icon6 from '../../../Asset/Images/product-detail-page/layout-2/paymentsIcons/icon6.png'
import icon7 from '../../../Asset/Images/product-detail-page/layout-2/paymentsIcons/icon7.png'
import icon8 from '../../../Asset/Images/product-detail-page/layout-2/paymentsIcons/icon8.png'
import icon9 from '../../../Asset/Images/product-detail-page/layout-2/paymentsIcons/icon9.png'
import icon10 from '../../../Asset/Images/product-detail-page/layout-2/paymentsIcons/icon10.png'

const PaymentGateways = () => {

    const gateWays = [
        {
            id: 0,
            icon: icon1,
            name: 'Stripe'
        },
        {
            id: 1,
            icon: icon2,
            name: 'RazorPay'
        },
        {
            id: 2,
            icon: icon3,
            name: 'Paystack'
        },
        {
            id: 3,
            icon: icon4,
            name: 'Paypal'
        },
        {
            id: 4,
            icon: icon5,
            name: 'Myfatoorah'
        },
        {
            id: 5,
            icon: icon6,
            name: 'Paytm'
        },
        {
            id: 6,
            icon: icon7,
            name: 'Phonepe'
        },
        {
            id: 7,
            icon: icon8,
            name: 'Midtrans'
        },
        {
            id: 8,
            icon: icon9,
            name: 'Fluterwave'
        },
        {
            id: 9,
            icon: icon10,
            name: 'Wallet'
        },
    ]

    return (
        <>
            <section className='paymentGatewaysSect container'>
                <div className="row mainRow">
                    <div className="col-12">
                        <CommonTextDiv title={'Beyond Code, Beyond Limits: eBroker, Powered by 100+ Tech Titans'} desc={` 100+ APIs aren't just lines of code; they're rocket fuel for your real estate dreams. eBroker ignites them, propelling you to new heights of efficiency, control, and success. `} />
                    </div>
                    <div className="col-12">
                        <div className="row gateWaysWrapper">
                            <div className="col-lg-8 iconsDiv">
                                {
                                    gateWays.map((data) => {
                                        return <div className='iconWrapper' key={data.id}>
                                            <Image src={data.icon} height={0} width={0} alt='paymentsIcons' />
                                            <span>{data.name}</span>
                                        </div>
                                    })
                                }

                            </div>

                            <div className="col-lg-4 sideImgWrapper">
                                <Image src={gatewaysImg} height={0} width={0} alt='phoneImg' />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PaymentGateways
