import React, { useCallback, useRef } from 'react'
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
import Image from 'next/image';
import Link from 'next/link';

import platStoreImg from '../../Asset/Images/product-detail-page/Play Store.png'
import iosStore from '../../Asset/Images/product-detail-page/App Store.png'
import dashboard from '../../Asset/Images/product-detail-page/Dashboard.png'
import web from '../../Asset/Images/product-detail-page/Web.png'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const ComesWithSect = () => {

    const data = [
        {
            id: 0,
            img: platStoreImg,
            title: 'Customer App',
            desc: `Hipster ipsum tattooed brunch I'm baby.`,
            link: ''
        },
        {
            id: 1,
            img: iosStore,
            title: 'Customer App',
            desc: `Hipster ipsum tattooed brunch I'm baby.`,
            link: ''
        },
        {
            id: 2,
            img: dashboard,
            title: 'Admin Panel',
            desc: `Hipster ipsum tattooed brunch I'm baby.`,
            link: ''
        },
        {
            id: 3,
            img: web,
            title: 'Web Version',
            desc: `Hipster ipsum tattooed brunch I'm baby.`,
            link: ''
        },

    ]

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
            <section className='comesWithSect container'>
                <div className="row">
                    <div className="col-12">
                        <div className="commonTextWrapper">
                            <div className="flex_center">
                                <div>
                                    <span className='comman_Headlines'>What Comes with eBroker?</span>
                                </div>
                                <div>
                                    <span className='comman_para'>
                                        Hipster ipsum tattooed brunch I'm baby. Prism poutine pbr&b cardigan kinfolk tousled
                                        beard tote. Kinfolk tumeric mug literally tousled.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="comesWithSlider">
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
                                className='comesWithSwiper'
                                breakpoints={breakpoints}
                            >
                                {
                                    data.map((data, index) => {
                                        return (
                                            <SwiperSlide key={data.id} >
                                                <div className="card">
                                                    <span className='imgWrapper'><Image src={data.img} height={0} width={0} alt='cardImg' /></span>
                                                    <span className='title'>{data.title}</span>
                                                    <span className='desc'>{data.desc}</span>
                                                    <Link href={data.link}>Explore Demo <BiRightArrowAlt size={18} /></Link>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                            <div className="swiper-button-prev" onClick={handlePrev} >
                                <span><GrFormPrevious color='white' size={24} /></span>
                            </div>
                            <div className="swiper-button-next" onClick={handleNext}>
                                <span><GrFormNext color='white' size={24} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ComesWithSect
