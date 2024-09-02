'use client'
import React, { useCallback, useRef } from 'react'
import CommonTextDiv from '../layoutTwo/CommonTextDiv'
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
import { LiaStarSolid } from 'react-icons/lia'

const LayoutTwoTestimonials = ({ testimonialsData }) => {

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

    const renderStars = (rating) => {
        const totalStars = 5;
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        const stars = [];

        for (let i = 0; i < totalStars; i++) {
            if (i < fullStars) {
                stars.push(<LiaStarSolid key={i} size={20} color='#FFA800' />);
            } else if (hasHalfStar && i === fullStars) {
                stars.push(<BsStarHalf key='half' size={18} color='#FFA800' />);
            } else {
                stars.push(<LiaStarSolid key={i} size={20} color='#bfc3c7' />);
            }
        }

        return stars;
    };

    return (
        <>
            <section className='layoutOneTestimonials'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <CommonTextDiv title={`Unlock Growth Potential: Hear Our Customers' Stories`} desc={''} />
                        </div>

                        <div className="col-12">
                            <Swiper
                                ref={sliderRef}
                                slidesPerView={4}
                                loop={testimonialsData?.lenght > 3 ? true : false}
                                spaceBetween={30}
                                freeMode={true}
                                autoplay={{ delay: 1000 }}
                                modules={[Autoplay]}
                                navigation
                                breakpoints={breakpoints}
                            >
                                {
                                    testimonialsData && testimonialsData?.map((ele) => {
                                        return <SwiperSlide key={ele?.name}>
                                            <div className="card">
                                                <div className='ratingDiv'>
                                                    <span> {renderStars(ele?.ratings)}</span>
                                                    <span>{ele?.rating_for}</span>
                                                </div>
                                                <div>
                                                    <span className='desc'>{ele?.review} </span>
                                                </div>
                                                <div className='nameDiv'>
                                                    <span>{ele?.name}</span>
                                                </div>
                                                <div className='imgWrapper'>
                                                    <Image src={envatoleaf} height={0} width={0} alt='envatoLeaf' />
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                    })
                                }
                            </Swiper>
                        </div>
                        {
                            testimonialsData?.lenght > 3 &&
                            <div className="col-12 swiperBtns">
                                <button onClick={handlePrev} className='prevBtn'><FaArrowLeft /></button>
                                <button onClick={handleNext} className='nextBtn'><FaArrowRight /></button>
                            </div>
                        }
                    </div>
                </div>

            </section>
        </>
    )
}

export default LayoutTwoTestimonials
