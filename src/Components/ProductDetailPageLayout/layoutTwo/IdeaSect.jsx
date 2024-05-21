import React from 'react'
import CommonTextDiv from '../layoutOne/CommonTextDiv'
import Image from 'next/image'
import icon1 from '../../../Asset/Images/product-detail-page/layout-2/ideaSect/icon1.png'
import icon2 from '../../../Asset/Images/product-detail-page/layout-2/ideaSect/icon2.png'
import icon3 from '../../../Asset/Images/product-detail-page/layout-2/ideaSect/icon3.png'
import bg from '../../../Asset/Images/product-detail-page/layout-2/ideaSect/line.svg'

const IdeaSect = () => {

    const data = [
        {
            id: 0,
            icon: icon1,
            title: 'Purchase',
            desc: 'Elevate Your Brokerage - Grab Your eBroker Script on Envato Now!'

        },
        {
            id: 1,
            icon: icon2,
            title: 'Complete Setup',
            desc: 'Elevate Your Brokerage - Grab Your eBroker Script on Envato Now!'

        },
        {
            id: 2,
            icon: icon3,
            title: 'Publish App',
            desc: 'Elevate Your Brokerage - Grab Your eBroker Script on Envato Now!'

        },
    ]

    return (
        <>
            <section className="ideaSect container">
                <div className="row">
                    <div className="col-12">
                        <CommonTextDiv title={'From Idea to Reality: Launching Your E-commerce Journey with Ekart'} desc={`Turn your e-commerce dreams into reality with Ekart's intuitive and streamlined process. Dive into the easy 3-step journey, from choosing your perfect script to publishing your app `} />
                    </div>

                    <div className="col-12">
                        <div className="row cardsWrapper" style={{ background: `url(${bg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: '62%',backgroundPosition: '50% 2%' }}>
                            {
                                data.map((item) => {
                                    return <div className="col-lg-4" key={item.id}>
                                        <div className="card">
                                            <div>
                                                <Image src={item.icon} height={0} width={0} alt='cardIcon' />
                                            </div>
                                            <span className='title'>{item.title}</span>
                                            <span className='desc'>{item.desc}</span>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IdeaSect
