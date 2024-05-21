import React from 'react'
import CommonTextDiv from '../layoutOne/CommonTextDiv'
import Image from 'next/image'
import icon1 from '../../../Asset/Images/product-detail-page/layout-2/sideCardIcon1.png'
import icon2 from '../../../Asset/Images/product-detail-page/layout-2/sideCardIcon2.png'
import icon3 from '../../../Asset/Images/product-detail-page/layout-2/sideCardIcon3.png'
import icon4 from '../../../Asset/Images/product-detail-page/layout-2/sideCardIcon4.png'
import icon5 from '../../../Asset/Images/product-detail-page/layout-2/sideCardIcon5.png'
import icon6 from '../../../Asset/Images/product-detail-page/layout-2/sideCardIcon6.png'
import middleImg from '../../../Asset/Images/product-detail-page/layout-2/whyChooseImg.png'

const WhyChoose = () => {

    const data = [
        {
            id: 0,
            img: icon1,
            title: 'Developed For Cross Platform',
            desc: 'Developed For Cross Platform'
        },
        {
            id: 1,
            img: icon2,
            title: 'Code Confidence',
            desc: 'Deliver with assurance through robust, dependable code'
        },
        {
            id: 2,
            img: icon3,
            title: 'Enhanced Customer Engagement',
            desc: 'Boost customer engagement effortlessly'
        },
        {
            id: 3,
            img: icon4,
            title: 'Future-Proof Code',
            desc: 'Ensure longevity with forward-thinking, adaptable code.'
        },
        {
            id: 4,
            img: icon5,
            title: 'Modern & Engaging UI',
            desc: 'Captivate users with a sleek, contemporary interface'
        },
        {
            id: 5,
            img: icon6,
            title: 'Streamlined Integration',
            desc: 'Effortlessly integrate with third-party services.'
        },
    ]

    return (
        <div>
            <section className='whyChooseSect container'>
                <div className="row mainRow">
                    <div className="col-12">
                        <CommonTextDiv title={'Why Choose eCart?'} desc={`eCart is your go-to for hassle-free online shopping. With our range of cool features, friendly support, and secure payment options, we've got everything you need for a smooth and enjoyable experience.`} />
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 col-lg-3">
                                <div className="sideCardsWrapper">
                                    {
                                        data.slice(0, 3).map((item) => {
                                            return <div className="sideCard" key={item.id}>
                                                <div className='imgWrapper'>
                                                    <Image src={item.img} />
                                                </div>
                                                <span className='title'>{item.title}</span>
                                                <span className='desc'>{item.desc}</span>
                                            </div>
                                        })
                                    }

                                </div>
                            </div>

                            <div className="col-12 col-lg-6 middleDiv">
                                <Image src={middleImg} height={0} width={0} alt='middleImg'/>
                            </div>

                            <div className="col-12 col-lg-3">
                                <div className="sideCardsWrapper rightSideCards">
                                    {
                                        data.slice(3, 6).map((item) => {
                                            return <div className="sideCard" key={item.id}>
                                                <div className='imgWrapper'>
                                                    <Image src={item.img} />
                                                </div>
                                                <span className='title'>{item.title}</span>
                                                <span className='desc'>{item.desc}</span>
                                            </div>
                                        })
                                    }

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default WhyChoose
