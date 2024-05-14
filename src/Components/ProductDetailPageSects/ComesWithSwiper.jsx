'use client'
import React from 'react'
import img from '../../Asset/Images/product-detail-page/swiperTestimonialImg.png'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Image from 'next/image';

const ComesWithSwiper = () => {

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
            slidesPerView: 4,
        },
        1400: {
            slidesPerView: 4,

        }
    };

    const data = [
        {
            id: 0,
            title: 'E-commerce made easy!',
            desc: `Sarah Johnson`,
        },
        {
            id: 1,
            title: 'Seamless shopping, anytime, anywhere!',
            desc: `Michael Smith`,
        },
        {
            id: 2,
            title: 'Turned my business dream into an online reality!',
            desc: `Emily Chen`,
        },
        {
            id: 3,
            title: 'From idea to e-store in no time, simply amazing!',
            desc: `David Rodriguez`,
        },
        {
            id: 4,
            title: 'From idea to e-store in no time, simply amazing!',
            desc: `David Rodriguez`,
        },
        {
            id: 5,
            title: 'From idea to e-store in no time, simply amazing!',
            desc: `David Rodriguez`,
        },
        {
            id: 6,
            title: 'From idea to e-store in no time, simply amazing!',
            desc: `David Rodriguez`,
        },
        {
            id: 7,
            title: 'From idea to e-store in no time, simply amazing!',
            desc: `David Rodriguez`,
        },

    ]

    return (
        <>
            <Swiper
                // ref={sliderRef}
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
                    data.map((data, index) => {
                        return (
                            <SwiperSlide key={data.id} >
                                <div className="card">
                                    <span className='imgWrapper'><Image src={img} height={0} width={0} alt='cardImg' /></span>
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
        </>
    )
}

export default ComesWithSwiper
