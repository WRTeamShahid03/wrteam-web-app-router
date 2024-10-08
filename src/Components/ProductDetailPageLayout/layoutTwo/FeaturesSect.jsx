'use client'
import React, { useCallback, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

import icon1 from '../../../Asset/Images/product-detail-page/FeatureIcon1.png'
import icon2 from '../../../Asset/Images/product-detail-page/FeatureIcon2.png'
import icon3 from '../../../Asset/Images/product-detail-page/FeatureIcon3.png'
import icon4 from '../../../Asset/Images/product-detail-page/FeatureIcon4.png'
import icon5 from '../../../Asset/Images/product-detail-page/FeatureIcon5.png'
import icon6 from '../../../Asset/Images/product-detail-page/FeatureIcon6.png'
import icon7 from '../../../Asset/Images/product-detail-page/FeatureIcon7.png'
import icon8 from '../../../Asset/Images/product-detail-page/FeatureIcon8.png'
import icon9 from '../../../Asset/Images/product-detail-page/FeatureIcon9.png'
import icon10 from '../../../Asset/Images/product-detail-page/FeatureIcon10.png'
import icon11 from '../../../Asset/Images/product-detail-page/FeatureIcon11.png'
import icon12 from '../../../Asset/Images/product-detail-page/FeatureIcon12.png'
import icon13 from '../../../Asset/Images/product-detail-page/FeatureIcon13.png'
import icon14 from '../../../Asset/Images/product-detail-page/FeatureIcon14.png'

const FeaturesSect = ({ featuresSectData }) => {

    const data = featuresSectData && featuresSectData[0];

    const breakpoints = {
        0: {
            slidesPerView: 1.5,
            // spaceBetween: 40
        },
        576: {
            slidesPerView: 2.5,
            // spaceBetween: 40
        },
        768: {
            slidesPerView: 3,

        },
        992: {
            slidesPerView: 3,

        },
        1200: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 3.2,

        }
    };


    const renderBullet = (index, className) => {
        return `<span class="${className}" style="
            outline: 1px solid #000;
            font-size: 20px;
            padding: 8px;
            border: 2px solid #fff;" id="renderBullets">
    </span>`;
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
            <section className='featuresSect'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="leftDiv">
                                <div>
                                    <span>{data?.title}</span>
                                </div>

                                <div className='navBtns'>
                                    <div className="swiper-button-prev" onClick={handlePrev} >
                                        <span><GrFormPrevious size={24} /></span>
                                    </div>
                                    <div className="swiper-button-next" onClick={handleNext}>
                                        <span><GrFormNext size={24} /></span>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="col-lg-7">

                            <div className="featureSlider">
                                <Swiper
                                    ref={sliderRef}
                                    slidesPerView={4}
                                    loop={true}
                                    spaceBetween={30}
                                    freeMode={true}
                                    modules={[FreeMode, Pagination]}
                                    pagination={{
                                        clickable: true,
                                        renderBullet: renderBullet
                                    }}
                                    navigation
                                    className=''
                                    breakpoints={breakpoints}
                                >
                                    {
                                        data && data?.features?.map((item) => {
                                            return (
                                                <SwiperSlide key={item?.name} >
                                                    <div className="card">
                                                        <span className='imgWrapper'><Image src={item?.image_url} height={0} width={0} alt='cardImg' /></span>
                                                        <span className='title'>{item?.name}</span>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                                {/* <div className="swiper-button-prev" onClick={handlePrev} >
                                    <span><GrFormPrevious color='white' size={24} /></span>
                                </div>
                                <div className="swiper-button-next" onClick={handleNext}>
                                    <span><GrFormNext color='white' size={24} /></span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturesSect
