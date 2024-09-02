'use client'
import React from 'react'
import techImg1 from '../../../Asset/Images/product-detail-page/techImg1.png'
import Image from 'next/image'

const Technology = ({ technologyData }) => {

    const techData = technologyData && technologyData[0]

    return (
        <section className='productTechSect'>
            <div className={`row`}>
                <div className="col-12 col-lg-6 leftDiv">
                    <Image src={techImg1} height={0} width={0} alt='techImg' />
                </div>

                <div className="col-12 col-lg-6 rightDiv">
                    <span className='headline'>{techData?.title}</span>

                    <div className="cardsWrapper">
                        {
                            techData && techData?.technologies?.map((data) => {
                                return (
                                    <div className="card" key={data?.name}>
                                        <Image src={data?.image_url} height={0} width={0} alt='techImg' />
                                        <span>{data?.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Technology
