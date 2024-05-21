'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react';
import bg from '../../../Asset/Images/product-detail-page/innerPagesBG.png';
import bg2 from '../../../Asset/Images/product-detail-page/layout-2/innerPagesLayoutTwo.jpg';
import img from '../../../Asset/Images/product-detail-page/innerSwiperImg.png'

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Image from 'next/image';
import CommonTextDiv from './CommonTextDiv';

const InnerPagesSect = ({ layoutTwo, title, desc }) => {

    const [activeTab, setActiveTab] = useState('tab2');

    useEffect(() => {

    }, [activeTab])

    const tab1Data = [
        {
            id: 0,
            img: '',
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 1,
            img: '',
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 2,
            img: '',
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 3,
            img: '',
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 4,
            img: '',
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
    ];

    const breakpoints = {
        0: {
            slidesPerView: 1.3,
            // spaceBetween: 40
        },
        576: {
            slidesPerView: 1.3,
            // spaceBetween: 40
        },
        768: {
            slidesPerView: 1.3,

        },
        992: {
            slidesPerView: 2.7,

        },
        1200: {
            slidesPerView: 2.7,
        },
        1400: {
            slidesPerView: 2.7,

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
        <section className='innerPagesSect' style={{ background: `url(${layoutTwo ? bg2.src : bg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <CommonTextDiv title={title} desc={desc} />
                    </div>

                    <div className="col-12 tabsWrapper">
                        <div className={`tabsHeader ${layoutTwo ? 'layoutTwoTabsHeader' : ''}`}>
                            <button className={`tab tab1 ${activeTab === 'tab1' ? 'activeTab' : ''}`} onClick={() => setActiveTab('tab1')}>Customer App</button>
                            <button className={`tab tab2 ${activeTab === 'tab2' ? 'activeTab' : ''}`} onClick={() => setActiveTab('tab2')}>Admin Panel</button>
                            <button className={`tab tab3 ${activeTab === 'tab3' ? 'activeTab' : ''}`} onClick={() => setActiveTab('tab3')}>Website</button>
                        </div>
                        <div className="tabContentWrapper">
                            {activeTab === 'tab1' && (
                                <div className={`content tab1`}>
                                    <Swiper
                                        ref={sliderRef}
                                        slidesPerView={4}
                                        loop={true}
                                        spaceBetween={30}
                                        freeMode={true}
                                        autoplay={{ delay: 1000 }}
                                        modules={[Autoplay]}
                                        navigation
                                        breakpoints={breakpoints}
                                    >
                                        {
                                            tab1Data.map((data) => {
                                                return (
                                                    <SwiperSlide key={data.id} >
                                                        <div className="card">
                                                            <div className='imgWrapper'><Image src={img} height={0} width={0} alt='cardImg' /></div>
                                                            <div>
                                                                <span className='title'>{data.title}</span>
                                                                <span className='desc'>{data.desc}</span>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper >
                                </div>
                            )}
                            {activeTab === 'tab2' && (
                                <div className={`content tab1`}>
                                    <Swiper
                                        ref={sliderRef}
                                        slidesPerView={4}
                                        loop={true}
                                        spaceBetween={30}
                                        freeMode={true}
                                        autoplay={{ delay: 1000 }}
                                        modules={[Autoplay]}
                                        navigation
                                        breakpoints={breakpoints}
                                    >
                                        {
                                            tab1Data.map((data) => {
                                                return (
                                                    <SwiperSlide key={data.id} >
                                                        <div className="card">
                                                            <div className='imgWrapper'><Image src={img} height={0} width={0} alt='cardImg' /></div>
                                                            <div>
                                                                <span className='title'>{data.title}</span>
                                                                <span className='desc'>{data.desc}</span>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper >
                                </div>
                            )}
                            {activeTab === 'tab3' && (
                                <div className={`content tab1`}>
                                    <Swiper
                                        ref={sliderRef}
                                        slidesPerView={4}
                                        loop={true}
                                        spaceBetween={30}
                                        freeMode={true}
                                        autoplay={{ delay: 1000 }}
                                        modules={[Autoplay]}
                                        navigation
                                        breakpoints={breakpoints}
                                    >
                                        {
                                            tab1Data.map((data) => {
                                                return (
                                                    <SwiperSlide key={data.id} >
                                                        <div className="card">
                                                            <div className='imgWrapper'><Image src={img} height={0} width={0} alt='cardImg' /></div>
                                                            <div>
                                                                <span className='title'>{data.title}</span>
                                                                <span className='desc'>{data.desc}</span>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper >
                                </div>
                            )}
                        </div>
                    </div>

                    {
                        layoutTwo &&
                        <div className="col-12 navigateBtns">
                            <button className='previousBtn' onClick={handlePrev}><FaArrowLeft /></button>
                            <button className='nextBtn' onClick={handleNext}><FaArrowRight /></button>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default InnerPagesSect;
