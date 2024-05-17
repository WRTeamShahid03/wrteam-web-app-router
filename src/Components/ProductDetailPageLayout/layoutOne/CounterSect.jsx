'use client'
import Image from 'next/image'
import React from 'react'
import eliteAuthor from '../../../Asset/Images/product-detail-page/Elite author.png'
import smileImg from '../../../Asset/Images/product-detail-page/Smile.png'
import starImg from '../../../Asset/Images/product-detail-page/Star.png'
import updateImg from '../../../Asset/Images/product-detail-page/update.png'

const CounterSect = () => {

    const cardData = [
        {
            id: 0,
            img: eliteAuthor,
            title: 'Elite Author',
            desc: 'On CodeCanyon'
        },
        {
            id: 1,
            img: smileImg,
            title: '15K',
            desc: 'Happy Client'
        },
        {
            id: 2,
            img: starImg,
            title: '4.9',
            desc: 'Ratings'
        },
        {
            id: 3,
            img: updateImg,
            title: 'Lifetime',
            desc: 'Lifetime Free Update'
        }
    ]

    return (
        <section className='productCounterSect'>
            <div className="container">
                <div className="row mainRow">
                    <div className="col-12 textWrapper">
                        <div>
                            <span>See how eBroker delivers real results</span>
                        </div>
                    </div>
                    <div className="col-12 resultsWrapper">
                        <div className="row">
                            {
                                cardData.map((data) => {
                                    return (
                                        <div className="col-6 col-sm-6 col-md-3 col-lg-3" key={data.id}>
                                            <div className="card" style={{ borderRight: data.id === 3 ? 'none' : '1px solid #5C788C66' }}>
                                                <span className='imgDiv'>
                                                    <Image src={data.img} height={0} width={0} alt='icon' />
                                                </span>
                                                <span className='title'>{data.title}</span>
                                                <span className='desc'>{data.desc}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CounterSect
