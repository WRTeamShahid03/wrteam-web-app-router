import React from 'react'
import CommonTextDiv from '../layoutOne/CommonTextDiv'
import Link from 'next/link'
import Image from 'next/image'
import lapImg from '../../../Asset/Images/product-detail-page/layout-2/heroLapImg.png'
import system1 from '../../../Asset/Images/product-detail-page/layout-2/Android.svg'
import system2 from '../../../Asset/Images/product-detail-page/layout-2/iOS.svg'
import system3 from '../../../Asset/Images/product-detail-page/layout-2/Flutter.svg'
import system4 from '../../../Asset/Images/product-detail-page/layout-2/Laravel.svg'
import system5 from '../../../Asset/Images/product-detail-page/layout-2/Node JS.svg'
import system6 from '../../../Asset/Images/product-detail-page/layout-2/react-svg.svg'
import leftImg1 from '../../../Asset/Images/product-detail-page/layout-2/leftImg1.png'
import leftImg2 from '../../../Asset/Images/product-detail-page/layout-2/leftImg2.png'
import rightImg1 from '../../../Asset/Images/product-detail-page/layout-2/rightImg1.png'
import rightImg2 from '../../../Asset/Images/product-detail-page/layout-2/rightImg2.png'

const HeroSect = () => {

    const systemsData = [
        {
            id: 0,
            img: system1,
            title: 'Android'
        },
        {
            id: 1,
            img: system2,
            title: 'IOS'
        },
        {
            id: 2,
            img: system3,
            title: 'Flutter'
        },
        {
            id: 3,
            img: system4,
            title: 'Laravel'
        },
        {
            id: 4,
            img: system5,
            title: 'Node JS'
        },
        {
            id: 5,
            img: system6,
            title: 'React JS'
        },
    ]
    return (
        <div>
            <section className='heroSect'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 middleDiv">
                            <CommonTextDiv title={'Simplify Your Ecommerce. Empower Your Business.'} desc={'From seamless operations to delighted customers, Ekart equips you with the tools to streamline every step. '} />
                            <div className="middleBtns">
                                <Link href={''}><button className='exploreBtn'>Explore Demo</button></Link>
                                <Link href={''}><button className='buyBtn'>Buy Now</button></Link>
                            </div>
                        </div>

                        <div className="col-12 limitsDiv">
                            <div className="imgDiv">
                                <Image src={lapImg} height={0} width={0} alt='laptopImg' />
                                <span>Beyond Limits: Powered by Innovation</span>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className=" systemsDivWrapper">
                                {
                                    systemsData.map((data) => {
                                        return <div className="" key={data.id}>
                                            <div className='systemDiv'>
                                                <Image src={data.img} height={0} width={0} alt='androidImg' />
                                                <span>{data.title}</span>
                                            </div>
                                        </div>
                                    })
                                }

                            </div>
                        </div>

                        <div className="col-12 sideImgsWrapper">
                            <Image src={leftImg1} height={0} width={0} alt='sideImg' className='leftImg1'/>
                            <Image src={leftImg2} height={0} width={0} alt='sideImg' className='leftImg2'/>
                            <Image src={rightImg1} height={0} width={0} alt='sideImg' className='rightImg1'/>
                            <Image src={rightImg2} height={0} width={0} alt='sideImg' className='rightImg2'/>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroSect
