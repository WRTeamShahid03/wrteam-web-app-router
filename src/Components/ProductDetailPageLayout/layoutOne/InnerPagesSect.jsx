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

import tab1Img1 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/Web-05-22-24-JPG/web1.jpg'
import tab1Img2 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/Web-05-22-24-JPG/web2.jpg'
import tab1Img3 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/Web-05-22-24-JPG/web3.jpg'
import tab1Img4 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/Web-05-22-24-JPG/web4.jpg'
import tab1Img5 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/Web-05-22-24-JPG/web5.jpg'
import tab1Img6 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/Web-05-22-24-JPG/web6.jpg'
import tab1Img7 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/Web-05-22-24-JPG/web7.jpg'
import tab1Img8 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/Web-05-22-24-JPG/web8.jpg'
import tab1Img9 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/Web-05-22-24-JPG/web9.jpg'
import tab1Img10 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/Web-05-22-24-JPG/web10.jpg'
import tab1Img11 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/Web-05-22-24-JPG/web11.jpg'

import tab2Img1 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/Admin penal-05-22-24-JPG/admin1.jpg'
import tab2Img2 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/Admin penal-05-22-24-JPG/admin2.jpg'
import tab2Img3 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/Admin penal-05-22-24-JPG/admin3.jpg'
import tab2Img4 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/Admin penal-05-22-24-JPG/admin4.jpg'
import tab2Img5 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/Admin penal-05-22-24-JPG/admin5.jpg'
import tab2Img6 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/Admin penal-05-22-24-JPG/admin6.jpg'

import tab3Img1 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/App-05-22-24-JPG/app1.jpg'
import tab3Img2 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/App-05-22-24-JPG/app2.jpg'
import tab3Img3 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/App-05-22-24-JPG/app3.jpg'
import tab3Img4 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/App-05-22-24-JPG/app4.jpg'
import tab3Img5 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/App-05-22-24-JPG/app5.jpg'
import tab3Img6 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/App-05-22-24-JPG/app6.jpg'
import tab3Img7 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/App-05-22-24-JPG/app7.jpg'
import tab3Img8 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/App-05-22-24-JPG/app8.jpg'
import tab3Img9 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/App-05-22-24-JPG/app9.jpg'
import tab3Img10 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/App-05-22-24-JPG/app10.jpg'
import tab3Img11 from '../../../Asset/Images/05-22-24-eBroker Img-/05-22-24-eBroker Img-/App-05-22-24-JPG/app11.jpg'


const InnerPagesSect = ({ layoutTwo, title, desc }) => {

    const [activeTab, setActiveTab] = useState('tab2');

    useEffect(() => {

    }, [activeTab])

    const tab1Data = [
        {
            id: 0,
            img: tab1Img1,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 1,
            img: tab1Img2,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 2,
            img: tab1Img3,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 3,
            img: tab1Img4,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 4,
            img: tab1Img5,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 5,
            img: tab1Img6,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 5,
            img: tab1Img7,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 5,
            img: tab1Img8,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 5,
            img: tab1Img9,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 5,
            img: tab1Img10,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 5,
            img: tab1Img11,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
    ];

    const tab2Data = [
        {
            id: 0,
            img: tab2Img1,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 1,
            img: tab2Img2,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 2,
            img: tab2Img3,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 3,
            img: tab2Img4,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 4,
            img: tab2Img5,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 5,
            img: tab2Img6,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
    ];

    const tab3Data = [
        {
            id: 0,
            img: tab3Img1,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 1,
            img: tab3Img2,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 2,
            img: tab3Img3,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 3,
            img: tab3Img4,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 4,
            img: tab3Img5,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 5,
            img: tab3Img6,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 5,
            img: tab3Img7,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 5,
            img: tab3Img8,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 5,
            img: tab3Img9,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 5,
            img: tab3Img10,
            title: 'Powerful Admin Dashbord',
            desc: 'Admin gets comprehensive control over customer management and property listing.'
        },
        {
            id: 5,
            img: tab3Img11,
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
                                            tab3Data.map((data) => {
                                                return (
                                                    <SwiperSlide key={data.id} >
                                                        <div className="card">
                                                            <div className='imgWrapper'><Image src={data.img} height={0} width={0} alt='cardImg' /></div>
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
                                            tab2Data.map((data) => {
                                                return (
                                                    <SwiperSlide key={data.id} >
                                                        <div className="card">
                                                            <div className='imgWrapper'><Image src={data.img} height={0} width={0} alt='cardImg' /></div>
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
                                                            <div className='imgWrapper'><Image src={data.img} height={0} width={0} alt='cardImg' /></div>
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
