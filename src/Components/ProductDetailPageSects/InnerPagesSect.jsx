'use client'
import React, { useEffect, useState } from 'react';
import bg from '../../Asset/Images/product-detail-page/innerPagesBG.png';
import img from '../../Asset/Images/product-detail-page/innerSwiperImg.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Image from 'next/image';
import CommonTextDiv from './CommonTextDiv';

const InnerPagesSect = () => {

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
            slidesPerView: 2.5,
            // spaceBetween: 40
        },
        768: {
            slidesPerView: 2.7,

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


    return (
        <section className='innerPagesSect' style={{ background: `url(${bg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <CommonTextDiv title='Inner Pages Collections' desc={`Hipster ipsum tattooed brunch I'm baby. Prism poutine pbr&b cardigan kinfolk tousled
                        beard tote. Kinfolk tumeric mug literally tousled.`} />
                    </div>

                    <div className="col-12 tabsWrapper">
                        <div className="tabsHeader">
                            <button className={`tab tab1 ${activeTab === 'tab1' ? 'activeTab' : ''}`} onClick={() => setActiveTab('tab1')}>Customer App</button>
                            <button className={`tab tab2 ${activeTab === 'tab2' ? 'activeTab' : ''}`} onClick={() => setActiveTab('tab2')}>Admin Panel</button>
                            <button className={`tab tab3 ${activeTab === 'tab3' ? 'activeTab' : ''}`} onClick={() => setActiveTab('tab3')}>Website</button>
                        </div>
                        <div className="tabContentWrapper">
                            {activeTab === 'tab1' && (
                                <div className={`content tab1`}>
                                    <Swiper
                                        //  ref={sliderRef}
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
                                        //   ref={sliderRef}
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
                                        // ref={sliderRef}
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
                </div>
            </div>
        </section>
    );
};

export default InnerPagesSect;
