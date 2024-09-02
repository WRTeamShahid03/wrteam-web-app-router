'use client'
import React, { useCallback, useRef } from 'react'
import CommonTextDiv from '../layoutOne/CommonTextDiv'
import Image from 'next/image'
import envatoleaf from '../../../Asset/Images/product-detail-page/layout-2/EnvatoLeaf.png'
import { FaStar } from "react-icons/fa";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const LayoutTwoTestimonials = () => {

    const breakpoints = {
        0: {
            slidesPerView: 1,
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
            slidesPerView: 3,

        },
        1200: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 3,

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
            <section className='layoutTwoTestimonials'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <CommonTextDiv title={`Unlock Growth Potential: Hear Our Customers' Stories`} desc={''} />
                        </div>

                        <div className="col-12">
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
                                <SwiperSlide>
                                    <div className="card">
                                        <div className='ratingDiv'>
                                            <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                            <span>Best Support</span>
                                        </div>
                                        <div>
                                            <span className='desc'>WRTeam, we are continually impressed by the robustness, performance and scalability of the code developed for our app. </span>
                                        </div>
                                        <div className='nameDiv'>
                                            <span>Ckkapel,<span>USA</span></span>
                                        </div>
                                        <div className='imgWrapper'>
                                            <Image src={envatoleaf} height={0} width={0} alt='envatoLeaf' />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card">
                                        <div className='ratingDiv'>
                                            <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                            <span>Best Support</span>
                                        </div>
                                        <div>
                                            <span className='desc'>WRTeam, we are continually impressed by the robustness, performance and scalability of the code developed for our app. </span>
                                        </div>
                                        <div className='nameDiv'>
                                            <span>Ckkapel,<span>USA</span></span>
                                        </div>
                                        <div className='imgWrapper'>
                                            <Image src={envatoleaf} height={0} width={0} alt='envatoLeaf' />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card">
                                        <div className='ratingDiv'>
                                            <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                            <span>Best Support</span>
                                        </div>
                                        <div>
                                            <span className='desc'>WRTeam, we are continually impressed by the robustness, performance and scalability of the code developed for our app. </span>
                                        </div>
                                        <div className='nameDiv'>
                                            <span>Ckkapel,<span>USA</span></span>
                                        </div>
                                        <div className='imgWrapper'>
                                            <Image src={envatoleaf} height={0} width={0} alt='envatoLeaf' />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card">
                                        <div className='ratingDiv'>
                                            <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                            <span>Best Support</span>
                                        </div>
                                        <div>
                                            <span className='desc'>WRTeam, we are continually impressed by the robustness, performance and scalability of the code developed for our app. </span>
                                        </div>
                                        <div className='nameDiv'>
                                            <span>Ckkapel,<span>USA</span></span>
                                        </div>
                                        <div className='imgWrapper'>
                                            <Image src={envatoleaf} height={0} width={0} alt='envatoLeaf' />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="col-12 swiperBtns">
                            <button onClick={handlePrev} className='prevBtn'><FaArrowLeft /></button>
                            <button onClick={handleNext} className='nextBtn'><FaArrowRight /></button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default LayoutTwoTestimonials
