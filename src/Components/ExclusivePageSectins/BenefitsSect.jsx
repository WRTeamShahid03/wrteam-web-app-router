import React from 'react'
import Image from 'next/image'

import benefitsImg from '../../Asset/Images/exclusiveLicensePage/benefitsImg.png'
import icon1 from '../../Asset/Images/exclusiveLicensePage/icon1.png'
import icon2 from '../../Asset/Images/exclusiveLicensePage/icon2.png'
import icon3 from '../../Asset/Images/exclusiveLicensePage/icon3.png'
import icon4 from '../../Asset/Images/exclusiveLicensePage/icon4.png'

import advantagesImg from '../../Asset/Images/exclusiveLicensePage/advantagesImg.png'

import adIcon1 from '../../Asset/Images/exclusiveLicensePage/advantageIcon1.png'
import adIcon2 from '../../Asset/Images/exclusiveLicensePage/advantageIcon2.png'
import adIcon3 from '../../Asset/Images/exclusiveLicensePage/advantageIcon3.png'
import adIcon4 from '../../Asset/Images/exclusiveLicensePage/advantageIcon4.png'


const BenefitsSect = ({ advantageSect }) => {

    const benefitsCardData = [
        {
            id: 0,
            icon: icon1,
            title: '01. Developers and Agencies',
            desc: `Perfect for those who want to offer unique solutions without competition.`

        },
        {
            id: 1,
            icon: icon2,
            title: '02. Entrepreneurs',
            desc: 'Ideal for creating a distinctive market presence with a unique product.'

        },
        {
            id: 2,
            icon: icon3,
            title: '03. Businesses',
            desc: `Customize and brand the product to meet specific needs.`

        },
        {
            id: 3,
            icon: icon4,
            title: '04. Digital Asset Investors',
            desc: `Enhance your portfolio with exclusive, valuable digital assets.`

        },
    ]

    const advantageCardsData = [
        {
            id: 0,
            icon: adIcon1,
            title: 'Unlimited Resale',
            desc: `Sell to as many clients as you want.`

        },
        {
            id: 1,
            icon: adIcon2,
            title: 'Exclusive Opportunity',
            desc: 'Only one license available per product.'

        },
        {
            id: 2,
            icon: adIcon3,
            title: '100% Profit',
            desc: `Keep all the revenue from your sales.`

        },
        {
            id: 3,
            icon: adIcon4,
            title: 'Full Control',
            desc: `Manage and leverage the product as you see fit.`

        },
    ]

    return (
        <section className={`benefitsSect commonMT ${advantageSect ? 'advantageSect' : ''}`}>
            <div className="container">
                <div className={`row upperDivWrapper benefitsContent ${advantageSect ? 'flex-row-reverse advantageContent' : ''}`}>
                    <div className={`col-sm-12 col-md-12 ${advantageSect ? 'col-lg-8' : 'col-lg-6'}`}>
                        <div className="leftContent">
                            {
                                advantageSect ?
                                    <div className="upperRightHeadings">
                                        <span className="common_span">
                                            <span>Exclusive License</span> Advantages
                                        </span>
                                        <h2 className='comman_Headlines' >
                                            Why Choose Our <span>Exclusive</span> Licenses?
                                        </h2>
                                    </div> :
                                    <div className="upperRightHeadings">
                                        <span className="common_span">
                                            <span>Is This For</span> You?
                                        </span>
                                        <h2 className='comman_Headlines' >
                                            Who Can <span>Benefit</span> from
                                            Our <span>Exclusive</span> Licenses?
                                        </h2>
                                    </div>
                            }

                            {
                                !advantageSect ?
                                    <div className="benefitsCardWrapper">
                                        {
                                            benefitsCardData.map((e) => {
                                                return <div className="benefitsCard" data-aos="fade-up" data-aos-once="true" data-aos-duration="800" key={e.id}>
                                                    <span className='cardIcon'>
                                                        <Image height={0} width={0} loading="lazy" src={e.icon} alt="" />
                                                    </span>
                                                    <span className='cardContent'>
                                                        <span className='title'>{e.title}</span>
                                                        <span className='comman_para'>{e.desc}</span>
                                                    </span>
                                                </div>

                                            })
                                        }
                                    </div> :
                                    <div className="row advantageCardWrapper benefitsCardWrapper">
                                        <div className="col-md-6">
                                            {
                                                advantageCardsData.slice(0, 2).map((e) => {
                                                    return <div className="benefitsCard" data-aos="fade-up" data-aos-once="true" data-aos-duration="800" key={e.id}>
                                                        <span className='cardIcon'>
                                                            <Image height={0} width={0} loading="lazy" src={e.icon} alt="" />
                                                        </span>
                                                        <span className='cardContent'>
                                                            <span className='title'>{e.title}</span>
                                                            <span className='comman_para'>{e.desc}</span>
                                                        </span>
                                                    </div>

                                                })
                                            }
                                        </div>
                                        <div className="col-md-6">
                                            {
                                                advantageCardsData.slice(2, 4).map((e) => {
                                                    return <div className="benefitsCard" data-aos="fade-up" data-aos-once="true" data-aos-duration="800" key={e.id}>
                                                        <span className='cardIcon'>
                                                            <Image height={0} width={0} loading="lazy" src={e.icon} alt="" />
                                                        </span>
                                                        <span className='cardContent'>
                                                            <span className='title'>{e.title}</span>
                                                            <span className='comman_para'>{e.desc}</span>
                                                        </span>
                                                    </div>

                                                })
                                            }
                                        </div>
                                    </div>
                            }


                        </div>
                    </div>
                    <div className={`col-sm-12 col-md-12 ${advantageSect ? 'col-lg-4' : 'col-lg-6'}`}>
                        <div className="rightContent d-flex align-items-center justify-content-center h-100">
                            <Image height={0} width={0} loading="lazy" src={advantageSect ? advantagesImg : benefitsImg} alt="benefitsImg" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BenefitsSect
