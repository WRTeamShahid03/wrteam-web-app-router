import React from 'react'
import Image from 'next/image'
import techImg1 from '../../Asset/Images/product-detail-page/techImg1.png'
const CommonTechSect = () => {

    const data = [
        {
            id: 0,
            img: '',
            name: 'Nextjs13.3+'
        },
    ]

    return (
        <section className='productTechSect'>
            <div className="row">
                <div className="col-12 col-lg-6 leftDiv">
                    <Image src={techImg1} height={0} width={0} alt='techImg' />
                </div>

                <div className="col-12 col-lg-6 rightDiv">
                    <span className='headline'>Technology Powering Your
                        Real Estate Journey</span>

                        <div className="cardsWrapper">
                            <div className="card">
                                <Image src={''} height={0} width={0} alt='techImg'/>
                            </div>
                        </div>
                </div>

            </div>
        </section>
    )
}

export default CommonTechSect
