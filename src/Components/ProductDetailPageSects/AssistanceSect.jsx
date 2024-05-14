import React from 'react'
import CommonTextDiv from './CommonTextDiv'
import Image from 'next/image'
import Link from 'next/link'
import contact from '../../Asset/Images/product-detail-page/contact.png'
import doc from '../../Asset/Images/product-detail-page/Documents.png'
import faq from '../../Asset/Images/product-detail-page/FAQ.png'
import tutorials from '../../Asset/Images/product-detail-page/Video.png'

const AssistanceSect = () => {
    const data = [
        {
            id: 0,
            img: contact,
            title: 'Contact Support',
            desc: 'Get assistance with your queries from our dedicated support team members.',
            link: ''
        },
        {
            id: 1,
            img: doc,
            title: 'Documentation',
            desc: 'Get assistance with your queries from our dedicated support team members.',
            link: ''
        },
        {
            id: 2,
            img: faq,
            title: `FAQ's`,
            desc: 'Get assistance with your queries from our dedicated support team members.',
            link: ''
        },
        {
            id: 4,
            img: tutorials,
            title: 'Tutorials',
            desc: 'Get assistance with your queries from our dedicated support team members.',
            link: ''
        },
    ]

    return (
        <>
            <section className='assistanceSect container'>
                <div className="row">
                    <div className="col-12">
                        <CommonTextDiv title={`Reliable Assistance Awaits: eBroker's Dedicated Support Team`} desc={`Hipster ipsum tattooed brunch I'm baby. Prism poutine pbr&b cardigan kinfolk tousled beard tote. Kinfolk tumeric mug literally tousled.`} />
                    </div>
                    <div className="col-12">
                        <div className="row cardsWrapper">
                            {
                                data.map((item) => {
                                    return <div className="col-sm-6 col-md-6 col-lg-3" key={item.id}>
                                        <div className="card">
                                            <div className='imgDiv'>
                                                <Image src={item.img} height={0} width={0} alt='cardImg' />
                                            </div>
                                            <div className='textDiv'>
                                                <span className='title'>{item.title}</span>
                                                <span className='desc'>{item.desc}</span>
                                            </div>
                                            <div>
                                                <Link href={'/contact-us'}><button className='assistanceBtn'>Contact Now</button></Link>
                                            </div>
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

export default AssistanceSect
