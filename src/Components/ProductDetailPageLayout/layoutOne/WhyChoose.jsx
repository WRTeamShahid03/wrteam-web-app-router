import React from 'react'
import CommonTextDiv from '../layoutTwo/CommonTextDiv'
import Image from 'next/image'
import icon1 from '../../../Asset/Images/product-detail-page/layout-2/sideCardIcon1.png'
import icon2 from '../../../Asset/Images/product-detail-page/layout-2/sideCardIcon2.png'
import icon3 from '../../../Asset/Images/product-detail-page/layout-2/sideCardIcon3.png'
import icon4 from '../../../Asset/Images/product-detail-page/layout-2/sideCardIcon4.png'
import icon5 from '../../../Asset/Images/product-detail-page/layout-2/sideCardIcon5.png'
import icon6 from '../../../Asset/Images/product-detail-page/layout-2/sideCardIcon6.png'
import middleImg from '../../../Asset/Images/product-detail-page/layout-2/whyChooseImg.png'

const WhyChoose = ({ whyChooseData }) => {

    const data = whyChooseData && whyChooseData[0]

    // console.log('whyChooseData =>', data)

    return (
        <div>
            <section className='whyChooseSect container'>
                <div className="row mainRow">
                    <div className="col-12">
                        <CommonTextDiv title={data?.title} desc={data?.description} />
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 col-lg-3">
                                <div className="sideCardsWrapper">
                                    {
                                        data && data?.features?.slice(0, 3)?.map((item) => {
                                            return <div className="sideCard" key={item?.name}>
                                                <div className='imgWrapper'>
                                                    <Image src={item?.image_url} width={40} height={40} alt='cardImg'/>
                                                </div>
                                                <span className='title'>{item?.name}</span>
                                                <span className='desc' dangerouslySetInnerHTML={{ __html: item?.detail }}></span>
                                            </div>
                                        })
                                    }

                                </div>
                            </div>

                            <div className="col-12 col-lg-6 middleDiv">
                                <Image src={data?.main_image_url} height={0} width={0} alt='middleImg' />
                            </div>

                            <div className="col-12 col-lg-3">
                                <div className="sideCardsWrapper rightSideCards">
                                    {
                                        data && data?.features?.slice(3, 6)?.map((item) => {
                                            return <div className="sideCard" key={item?.name}>
                                                <div className='imgWrapper'>
                                                <Image src={item?.image_url} width={40} height={40} alt='cardImg'/>
                                                </div>
                                                <span className='title'>{item?.name}</span>
                                                <span className='desc' dangerouslySetInnerHTML={{ __html: item?.detail }}></span>
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
