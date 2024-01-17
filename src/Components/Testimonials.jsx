import React, { useCallback, useEffect, useRef, useState } from 'react'
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';
import { LiaStarSolid } from 'react-icons/lia';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import dobleQuotes from '../../src/Asset/Icons/double-quotes-l.svg'
import Image from 'next/image';
import { GetTestimonialsApi } from '@/redux/actions/campaign';
import TestimonialSkeleton from './Skeletons/TestimonialSkeleton';


const Testimonials = () => {

    const [data, setdata] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetTestimonialsApi({
            onSuccess: (response) => {
                // console.log(response.data.data, "testimonilas");
                setdata(response.data.data)
            },
            onError: (error) => {
                console.log(error);
            }
        });

    }, [])


    const breakpoints = {
        0: {
            slidesPerView: 1,
            // spaceBetween: 40
        },
        375: {
            slidesPerView: 1,
            // spaceBetween: 40
        },
        576: {
            slidesPerView: 1.5,
            // spaceBetween: 40
        },
        768: {
            slidesPerView: 2,

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
        <section id="testimonials" className='container'>
            {
                data.length > 0 ? (<>
                    <div className="testiUpperDiv">
                        <h5 className='common_span'>Our <span>Testimonials</span></h5>
                        <h6 className='testiHeadline'>Real  <span> Words</span> From Real <span>Clients</span></h6>
                    </div>
                    <div className="testSlider">
                        <Swiper
                            ref={sliderRef}
                            slidesPerView={3}
                            loop={true}
                            spaceBetween={30}
                            freeMode={true}
                            modules={[FreeMode, Pagination]}
                            pagination={{
                                clickable: true,
                                renderBullet: renderBullet
                            }}
                            navigation
                            className='testiSwiper'
                            breakpoints={breakpoints}
                        >
                            {
                                data.map((ele, index) => {
                                    return (
                                        <SwiperSlide key={ele.id} >
                                            <div className="card swiperCard">
                                                <div className="card-header">
                                                    <span className="testiImg">
                                                        <Image height={0} width={0} loading="lazy" src={dobleQuotes} alt="" />
                                                    </span>
                                                </div>
                                                <div className="card-body">
                                                    <div className='testiDesc'>
                                                        <span className='swiperDesc'>{ele.description}</span>
                                                    </div>
                                                </div>
                                                <div className="card-footer">
                                                    <div className="testiFoot">
                                                        <div className="footText">
                                                            <span className='swiperName'>{ele.name}</span>
                                                            <span className='swiperWork'>{ele.rating_for}</span>
                                                        </div>
                                                        <div className="footRating">
                                                            <span className='swiperRating'>{ele.ratings}.0</span>
                                                            <span><LiaStarSolid size={28} color='#FFA800' /></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                        <div className="swiper-button-prev" onClick={handlePrev} >
                            <span><BiLeftArrowAlt color='white' size={42} /></span>
                        </div>
                        <div className="swiper-button-next" onClick={handleNext}>
                            <span><BiRightArrowAlt color='white' size={42} /></span>
                        </div>
                    </div>
                </>

                ) : null
            }
        </section>
    )
}

export default Testimonials
