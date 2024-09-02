import React from 'react'
import CommonTextDiv from '../layoutTwo/CommonTextDiv'
import Link from 'next/link'
import Image from 'next/image'

const HeroSect = ({ heroSectData, techData }) => {

    // console.log('heroSectData => ', data)

    const data = heroSectData && heroSectData[0];
    const technologyData = techData && techData[0];
    // console.log('newData =>', heroSectData)
    // console.log('technologyData =>', technologyData)

    return (
        <div>
            <section className='heroSect'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 middleDiv">
                            <CommonTextDiv title={data?.title} desc={data?.description} />
                            <div className="middleBtns">
                                <Link href='#operationSection'><button className='exploreBtn'>Explore Demo</button></Link>
                                <Link href='#licenceSection'><button className='buyBtn'>Buy Now</button></Link>
                            </div>
                        </div>

                        <div className="col-12 limitsDiv">
                            <div className="imgDiv">
                                <Image src={data?.image_url} height={0} width={0} alt='laptopImg' />
                                <span>{technologyData?.title}</span>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className=" systemsDivWrapper">
                                {
                                    technologyData && technologyData?.technologies?.map((data) => {
                                        return <div className="" key={data?.name}>
                                            <div className='systemDiv'>
                                                <Image src={data?.image_url} height={0} width={0} alt='techIcon' />
                                                <span>{data?.name}</span>
                                            </div>
                                        </div>
                                    })
                                }

                            </div>
                        </div>

                        {
                            data?.other_images_url &&
                            <div className="col-12 sideImgsWrapper">
                                <Image src={data?.other_images_url[0]} height={0} width={0} alt='sideImg' className='leftImg1' />
                                <Image src={data?.other_images_url[1]} height={0} width={0} alt='sideImg' className='leftImg2' />
                                <Image src={data?.other_images_url[2]} height={0} width={0} alt='sideImg' className='rightImg1' />
                                <Image src={data?.other_images_url[3]} height={0} width={0} alt='sideImg' className='rightImg2' />
                            </div>
                        }

                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSect
