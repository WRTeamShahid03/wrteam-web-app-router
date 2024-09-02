'use client'
import Image from 'next/image'
import React from 'react'
import eliteAuthor from '../../../Asset/Images/product-detail-page/Elite author.png'
import smileImg from '../../../Asset/Images/product-detail-page/Smile.png'
import updateImg from '../../../Asset/Images/product-detail-page/update.png'   
import customizable from '../../../Asset/Images/product-detail-page/customizable.png'
import buy from '../../../Asset/Images/product-detail-page/buy.png'
import CommonTextDiv from './CommonTextDiv'

const InfoSect = () => {

    const data = [
        {
            id: 0,
            img: eliteAuthor,
            title: 'Elite Author',
            desc: 'On CodeCanyon'
        },
        {
            id: 1,
            img: smileImg,
            title: 'Sales',
            desc: '390+'
        },
        {
            id: 2,
            img: updateImg,
            title: 'Lifetime',
            desc: 'Lifetime Free Update'
        },
        {
            id: 3,
            img: customizable,
            title: 'Customizable',
            desc: 'Easy Customizable'
        },
        {
            id: 3,
            img: buy,
            title: 'Buy Once',
            desc: 'One Time Purchase'
        },
    ]

    return (
        <>
            <section className="infoSect">
                <div className='container'>

                    <div className="row mainRow">
                        <div className="col-12">
                        <CommonTextDiv title='Your Guide to a Stress-Free Tenant Experience' desc={`Hipster ipsum tattooed brunch I'm baby. Prism poutine pbr&b cardigan kinfolk tousled
                        beard tote. Kinfolk tumeric mug literally tousled.`} />
                        </div>
                        <div className="col-12">
                            <div className="row cardsWrapper">
                                {
                                    data.map((info) => {
                                        return <div className="col-sm-6 col-md-6 col-lg-3" key={info.id}>
                                            <div className="card">
                                                <span className='imgDiv'>
                                                    <Image src={info.img} height={0} width={0} alt='icon' />
                                                </span>
                                                <span className='title'>{info.title}</span>
                                                <span className='desc'>{info.desc}</span>
                                            </div>
                                        </div>
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InfoSect
