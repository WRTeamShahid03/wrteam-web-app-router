'use client'
import React, { useState } from 'react'
import img from '../../../Asset/Images/product-detail-page/layout-2/saveMoneyImg.png'
import CommonTextDiv from '../layoutOne/CommonTextDiv'
import Image from 'next/image'

const SaveMoneySect = () => {

    const [list, setList] = useState([
        {
            id: 1,
            list: 'Comprehensive Platform Solutions',
        },
        {
            id: 2,
            list: 'Flash Sale & Offer Creation Section',
        },
        {
            id: 3,
            list: 'Personalized Recommendations',
        },
        {
            id: 4,
            list: 'Detailed Product Comparison',
        },
    ])

    return (
        <>
            <section className="saveMoneySect container">

                <div className="row">

                    <div className="col-lg-6">
                        <CommonTextDiv title={`Save Money & Time With eCart`} desc={`See the cold, hard facts come to life as real businesses share their quantifiable successes achieved with Ekart's innovative solutions.`} />
                        {
                            list.map((item) => {
                                return <div className='listDiv'>
                                    <span>{item.id}</span>
                                    <span>{item.list}</span>
                                </div>

                            })
                        }
                    </div>
                    <div className="col-lg-6">
                        <Image src={img} height={0} width={0} alt='sideImg' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SaveMoneySect
