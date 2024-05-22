'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import CommonTextDiv from '../layoutOne/CommonTextDiv'
import bg from '../../../Asset/Images/product-detail-page/layout-2/innerPagesLayoutTwo.jpg';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';
import img1 from '../../../Asset/Images/product-detail-page/layout-2/appImg1.png'
import img2 from '../../../Asset/Images/product-detail-page/layout-2/appImg2.png'
import img3 from '../../../Asset/Images/product-detail-page/layout-2/appImg3.png'
import img4 from '../../../Asset/Images/product-detail-page/layout-2/appImg4.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const AppSect = () => {

    const [activeTab, setActiveTab] = useState('tab2');

    useEffect(() => {

    }, [activeTab])

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
            <section className="appSect" style={{ background: `url(${bg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <CommonTextDiv title={'The Proof is in the Performance: Testimonial-Driven Success with Ekart'} desc={''} />
                        </div>

                        <div className="col-12">
                            <div className="tabsWrapper">
                                <div className="upperDiv">
                                    <div className="tabsHeader">
                                        <button className={`tab tab1 ${activeTab === 'tab1' ? 'activeTab' : ''}`} onClick={() => setActiveTab('tab1')}>Customer App</button>
                                        <button className={`tab tab2 ${activeTab === 'tab2' ? 'activeTab' : ''}`} onClick={() => setActiveTab('tab2')}>Seller App</button>
                                        <button className={`tab tab3 ${activeTab === 'tab3' ? 'activeTab' : ''}`} onClick={() => setActiveTab('tab3')}>Delivery Boy App</button>
                                    </div>
                                    <div className="swiperBtns">
                                        <button onClick={handlePrev}><FaArrowLeft /></button>
                                        <button onClick={handleNext}><FaArrowRight /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="contentDiv">

                                {
                                    activeTab === 'tab1' && <div className="cotent1">
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
                                                tab1.map((data, index) => {
                                                    return (
                                                        <SwiperSlide key={data.id} >
                                                            <div className="card">
                                                                <Image src={data.img} height={0} width={0} alt='appImg' />
                                                                <span>{data.title}</span>
                                                            </div>
                                                        </SwiperSlide>
                                                    )
                                                })
                                            }
                                        </Swiper >

                                    </div>
                                }

                                {
                                    activeTab === 'tab2' && <div className="cotent1">
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
                                                tab1.map((data, index) => {
                                                    return (
                                                        <SwiperSlide key={data.id} >
                                                            <div className="card">
                                                                <Image src={data.img} height={0} width={0} alt='appImg' />
                                                                <span>{data.title}</span>
                                                            </div>
                                                        </SwiperSlide>
                                                    )
                                                })
                                            }
                                        </Swiper >

                                    </div>
                                }

                                {
                                    activeTab === 'tab3' && <div className="cotent1">
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
                                                tab1.map((data, index) => {
                                                    return (
                                                        <SwiperSlide key={data.id} >
                                                            <div className="card">
                                                                <Image src={data.img} height={0} width={0} alt='appImg' />
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
