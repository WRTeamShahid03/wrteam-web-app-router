'use client'
import React, { useCallback, useRef } from 'react'
import CommonTextDiv from '../layoutOne/CommonTextDiv'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



import Image from 'next/image';
import icon1 from '../../../Asset/Images/product-detail-page/layout-2/optIcon1.png'
import icon2 from '../../../Asset/Images/product-detail-page/layout-2/optIcon2.png'
import icon3 from '../../../Asset/Images/product-detail-page/layout-2/optIcon3.png'
import icon4 from '../../../Asset/Images/product-detail-page/layout-2/optIcon4.png'

const OperationsSect = () => {


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
            img: icon1,
            title: 'Admin Panel',
            desc: 'Command Your Real Estate omain: Intuitive admin panel empowers management mastery.',
        },
        {
            id: 1,
            img: icon2,
            title: 'Seller Panel',
            desc: 'Command Your Real Estate omain: Intuitive admin panel empowers management mastery.',
        },
        {
            id: 2,
            img: icon3,
            title: 'Delivery Boy Panel',
            desc: 'Command Your Real Estate omain: Intuitive admin panel empowers management mastery.',
        },
        {
            id: 3,
            img: icon4,
            title: 'Customer App',
            desc: 'Command Your Real Estate omain: Intuitive admin panel empowers management mastery.',
        },
    ]


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
        <div>
            <section className='operationSect container'>
                <div className="row">
                    <div className="col-lg-6">
                        <CommonTextDiv title={'Ekart: Powering Your Business with Seamless Operations'} desc={'Ekart: Command, Captivate, Elevate your e-commerce. Manage, engage, track everything with our suite. Simplify, succeed, grow!'} />
                    </div>

                    <div className="col-lg-6 swiperBtnsWrapper">
                        <button onClick={handlePrev}><FaArrowLeft /></button>
                        <button onClick={handleNext}><FaArrowRight /></button>
                    </div>

                    <div className="col-12 cardsRow">
                        <Swiper
                            ref={sliderRef}
                            slidesPerView={4}
                            loop={true}
                            spaceBetween={30}
                            freeMode={true}
                            // autoplay={{ delay: 1000 }}
                            // modules={[Autoplay]}
                            navigation
                            className=''
                            breakpoints={breakpoints}
                        >
                            {
                                data.map((item) => {
                                    return <SwiperSlide key={data.id}>
                                        <div className="card">
                                            <div className="imgDiv">
                                                <Image src={item.img} height={0} width={0} alt='cardIcon' />
                                            </div>
                                            <div className='textDiv'>
                                                <span className='title'>{item.title}</span>
                                                <span className='desc'>{item.desc}</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                })
                            }
                        </Swiper >
                    </div>

                </div>
            </section>
        </div>
    )
}

export default OperationsSect
