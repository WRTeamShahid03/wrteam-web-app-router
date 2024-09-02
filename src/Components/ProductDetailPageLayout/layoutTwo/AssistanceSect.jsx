import React, { useEffect } from 'react'
import CommonTextDiv from './CommonTextDiv'
import Image from 'next/image'
import Link from 'next/link'
import contact from '../../../Asset/Images/product-detail-page/contact.png'
import doc from '../../../Asset/Images/product-detail-page/Documents.png'
import faq from '../../../Asset/Images/product-detail-page/FAQ.png'
import tutorials from '../../../Asset/Images/product-detail-page/Video.png'
import { setSupportLinksData } from '@/redux/reuducer/productLayoutSlice'

const AssistanceSect = ({ assistanceSectData }) => {

    const data = assistanceSectData && assistanceSectData[0]

    const dataIcons = [
        {
            id: 0,
            img: contact,
        },
        {
            id: 1,
            img: doc,
        },
        {
            id: 2,
            img: faq,
        },
        {
            id: 4,
            img: tutorials,
        },
    ]

    useEffect(() => {
        if (data?.sections) {
            setSupportLinksData({ data: data?.sections })
        }
    }, [data])


    return (
        <>
            <section className='assistanceSect container' id='assistanceSection'>
                <div className="row">
                    <div className="col-12">
                        <CommonTextDiv title={data?.title} desc={data?.description} />
                    </div>
                    <div className="col-12">
                        <div className="row cardsWrapper">
                            {
                                data?.sections?.map((item, index) => {
                                    return <div className="col-sm-6 col-md-6 col-lg-3" key={item?.name}>
                                        <div className="card">
                                            <div className='imgWrapper'>
                                                <Image src={dataIcons[index]?.img} height={0} width={0} alt='cardImg' />
                                            </div>
                                            <div className='textDiv'>
                                                <span className='title'>{item?.name}</span>
                                                <span className='desc'>{item?.detail}</span>
                                            </div>
                                            <div>
                                                {
                                                    item?.link &&
                                                    <Link href={item?.link} target='_blank'><button className='assistanceBtn'>Contact Now</button></Link>

                                                }
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
