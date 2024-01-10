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


const Testimonials = () => {

    const [data, setdata] = useState([])

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


    const swiperData = [
        {
            id: 0,
            text: "Can explain of these guys. They are so talented and customer support is beyond the limit.Recommended them to all. They work professionally. Awesome!!!",
            name: "Johnepse",
            work: "For Customer Support",
            rating: "5.0"
        },
        {
            id: 1,
            text: "Amazing! The team is amazing. The professionalism is high level. They respond to you whenever you want. They are the high discipline team I have worked with so far. Our plan is building IOS app for this as well.",
            name: "Akam_Barznji",
            work: "For Code Quality",
            rating: "5.0"
        },
        {
            id: 2,
            text: "Best app ever i seen on codecanyon.. and best part is the service..they provide best services.. keep it up team",
            name: "Ajayambaliya",
            work: "For Customer Support",
            rating: "5.0"
        },
        {
            id: 3,
            text: "WRTeam, we are continually impressed by the robustness, performance and scalability of the code developed for our app. Your rigorous standards and best practices deliver optimized, bug-free code of the highest quality.",
            name: "ckkapel",
            work: "For Code Quality",
            rating: "5.0"
        },
        {
            id: 4,
            text: "I'm very satisfied with both the code quality and support. I can easily say that they have the fastest support team I have ever seen here.",
            name: "musbarozkok",
            work: "For Code Quality & Support",
            rating: "5.0"
        },
        {
            id: 5,
            text: "Well organized code and good support, highly recommended, thank you very much!!!",
            name: "lizbethlove",
            work: "For Code Quality & Support",
            rating: "5.0"
        },

    ]

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
            <div className="testiUpperDiv">
                <h5 className='common_span'>Our <span>Testimonials</span></h5>
                <h6 className='testiHeadline'>Real  <span> Words</span> From Real <span>Clients</span></h6>
            </div>
            {/* <div className="testSlider">
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
                        swiperData.map((ele, index) => {
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
                                                <span className='swiperDesc'>{ele.text}</span>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="testiFoot">
                                                <div className="footText">
                                                    <span className='swiperName'>{ele.name}</span>
                                                    <span className='swiperWork'>{ele.work}</span>
                                                </div>
                                                <div className="footRating">
                                                    <span className='swiperRating'>{ele.rating}</span>
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
            </div> */}

            {/* api data  */}
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
        </section>
    )
}

export default Testimonials
