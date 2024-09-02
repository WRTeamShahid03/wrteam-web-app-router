import Image from 'next/image'
import React from 'react'
import img1 from '../../../Asset/Images/product-detail-page/1.png'
import img2 from '../../../Asset/Images/product-detail-page/2.png'
import img3 from '../../../Asset/Images/product-detail-page/3.png'
import guideArr from '../../../Asset/Images/product-detail-page/guideArrow.png'
import CommonTextDiv from './CommonTextDiv'

const GuideSect = () => {

    const cardsdata = [
        {
            id: 0,
            img: img1,
            title: 'Purchase Script',
            desc: `Hipster ipsum tattooed brunch I'm baby. Trade 90's meh intelligentsia photo bun.`
        },
        {
            id: 1,
            img: img2,
            title: 'Install & Configure',
            desc: `Hipster ipsum tattooed brunch I'm baby. Trade 90's meh intelligentsia photo bun.`
        },
        {
            id: 2,
            img: img3,
            title: 'Publish App',
            desc: `Hipster ipsum tattooed brunch I'm baby. Trade 90's meh intelligentsia photo bun.`
        }
    ]

    return (
        <>
            <section className="guideSect container">
                <div className="row">
                    <div className="col-12">
                        <CommonTextDiv title='Your Guide to a Stress-Free Tenant Experience' desc={`Hipster ipsum tattooed brunch I'm baby. Prism poutine pbr&b cardigan kinfolk tousled
                        beard tote. Kinfolk tumeric mug literally tousled.`} />
                    </div>
                    <div className="col-12">
                        <div className="row cardsWrapper">

                            <Image src={guideArr} height={0} width={0} className='arr1' />
                            <Image src={guideArr} height={0} width={0} className='arr2' />
                            {
                                cardsdata.map((data) => {
                                    return <div className="col-12 col-md-6 col-lg-4" key={data.id}>
                                        <div className="card">
                                            <div className='imgWrapper'><Image src={data.img} height={0} width={0} alt='cardImg' /></div>
                                            <div>
                                                <span className='title'>{data.title}</span>
                                                <span className='desc'>{data.desc}</span>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default GuideSect
