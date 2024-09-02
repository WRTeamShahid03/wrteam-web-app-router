'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import CommonTextDiv from '../layoutTwo/CommonTextDiv'
import bg from '../../../Asset/Images/product-detail-page/layout-2/innerPagesLayoutTwo.jpg';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';
import img1 from '../../../Asset/Images/product-detail-page/layout-2/appImg1.png'
import img2 from '../../../Asset/Images/product-detail-page/layout-2/appImg2.png'
import img3 from '../../../Asset/Images/product-detail-page/layout-2/appImg3.png'
import img4 from '../../../Asset/Images/product-detail-page/layout-2/appImg4.png'

import leftShape from '../../../Asset/Images/product-detail-page/leftShape.png'
import rightShape from '../../../Asset/Images/product-detail-page/rightShape.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const AppSect = ({ appSectData }) => {

    const data = appSectData && appSectData[0]

    // console.log('appSectData =>', data)

    // const [selectedTab, setSelectedTab] = useState('')


    const [activeTab, setActiveTab] = useState(data?.tabs[0]?.app_name);

    useEffect(() => {
        // setSelectedTab(data?.filter((tab) => { return tab?.app_name === activeTab })?.[0]?.app_name)
        // console.log('selectedTab', selectedTab)
    }, [activeTab])

    // useEffect(() => {

    // }, [selectedTab])

    const selectedTabData = data?.tabs?.filter((tab) => { return tab?.app_name === activeTab })

    const [tab1, setTab1] = useState([
        {
            id: 0,
            img: img1,
            title: 'Home Screen'
        },
        {
            id: 1,
            img: img2,
            title: 'Category Screen'
        },
        {
            id: 2,
            img: img3,
            title: 'Explore Page'
        },
        {
            id: 3,
            img: img4,
            title: 'Wallet Screen'
        },
        {
            id: 4,
            img: img1,
            title: 'Home Screen'
        },
        {
            id: 5,
            img: img2,
            title: 'Category Screen'
        },
        {
            id: 6,
            img: img3,
            title: 'Explore Page'
        },
        {
            id: 7,
            img: img4,
            title: 'Wallet Screen'
        },
    ])

    const breakpoints = {
        0: {
            slidesPerView: 1,
            // spaceBetween: 40
        },
        576: {
            slidesPerView: 2,
            // spaceBetween: 40
        },
        768: {
            slidesPerView: 3,

        },
        992: {
            slidesPerView: 3,

        },
        1200: {
            slidesPerView: 3.8,
        },
        1400: {
            slidesPerView: 3.8,

        }
    };

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;

        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);



    return (
        <>
            <section className="appSect commonBgAndShape"
            // style={{ background: `url(${bg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
            >
                <div className="leftShape">
                    <Image src={leftShape} alt='leftShape' height={0} width={0} />
                </div>
                <div className="rightShape">
                    <Image src={rightShape} alt='leftShape' height={0} width={0} />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <CommonTextDiv title={'The Proof is in the Performance: Testimonial-Driven Success with Ekart'} desc={''} />
                        </div>

                        <div className="col-12">
                            <div className="tabsWrapper">
                                <div className="upperDiv">
                                    <div className="tabsHeader">
                                        {
                                            data && data?.tabs?.map((tab) => {
                                                return <button key={tab?.app_name} className={`tab tab1 ${activeTab === tab?.app_name ? 'activeTab' : ''}`} onClick={() => setActiveTab(tab?.app_name)}>{tab?.app_name}</button>
                                            })
                                        }
                                    </div>
                                    {
                                        data?.tabs?.length > 4 &&
                                        <div className="swiperBtns">
                                            <button onClick={handlePrev}><FaArrowLeft /></button>
                                            <button onClick={handleNext}><FaArrowRight /></button>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="contentDiv">

                                {
                                    data?.tabs.filter((tab) => { return tab?.app_name === activeTab }) && <div className="cotent1">
                                        <Swiper
                                            ref={sliderRef}
                                            slidesPerView={4}
                                            loop={true}
                                            spaceBetween={30}
                                            freeMode={true}
                                            autoplay={{ delay: 1000 }}
                                            modules={[Autoplay]}
                                            navigation
                                            className='comesWithTestimonialSwiper'
                                            breakpoints={breakpoints}
                                        >
                                            {
                                                selectedTabData[0]?.features?.map((data, index) => {
                                                    return (
                                                        <SwiperSlide key={index} >
                                                            <div className="card">
                                                                <Image src={data?.image_url} height={0} width={0} alt='appImg' />
                                                                <span>{data.title}</span>
                                                            </div>
                                                        </SwiperSlide>
                                                    )
                                                })
                                            }
                                        </Swiper >

                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default AppSect
