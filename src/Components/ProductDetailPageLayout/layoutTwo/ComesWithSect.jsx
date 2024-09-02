'use client'
import React, { useCallback, useEffect, useRef } from 'react'
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
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import ComesWithSwiper from './ComesWithSwiper';
import startNowBg from '../../../Asset/Images/product-detail-page/innerPagesBG.png'
import CommonTextDiv from './CommonTextDiv';
import { productDataSelector } from '@/redux/reuducer/productLayoutSlice';
import { useSelector } from 'react-redux';

const ComesWithSect = ({ comesWithSectData }) => {

    const productData = useSelector(productDataSelector)

    const data = comesWithSectData && comesWithSectData[0];

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
        <div className='comesWithWrapper' >

            <ComesWithSwiper />

            {
                data &&
                <section className='comesWithSect container' id='comesWithSection'>
                    <div className="row firstRow">
                        <div className="col-12">
                            <CommonTextDiv title={data?.title} desc={data?.description} />
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
                                        data && data?.elements?.map((item, index) => {
                                            return (
                                                <SwiperSlide key={index} >
                                                    <div className="card">
                                                        <span className='imgWrapper'><Image src={item?.image_url} height={0} width={0} alt='cardIcon' /></span>
                                                        <span className='title'>{item?.name}</span>
                                                        <span className='desc' dangerouslySetInnerHTML={{ __html: item?.details }}></span>

                                                        <div className='linksWrapper'>
                                                            {
                                                                item?.panel_link &&
                                                                <Link href={item?.panel_link} className='demoLink'> Panel<BiRightArrowAlt size={18} /></Link>
                                                            }
                                                            {
                                                                item?.android_link &&
                                                                <Link href={item?.android_link} className='demoLink'> Android <BiRightArrowAlt size={18} /></Link>
                                                            }
                                                            {
                                                                item?.ios_link &&
                                                                <Link href={item?.ios_link} className='demoLink'> iOS <BiRightArrowAlt size={18} /></Link>
                                                            }

                                                        </div>




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

                        <div className="col-12">
                            <div className="startNowWrapper row" style={{
                                background: `url(${startNowBg.src})`
                            }}>
                                <div className="col-lg-8 leftDiv">
                                    <span className='headline'>Your real estate brokerage business begins here</span>
                                </div>
                                <div className="col-lg-4 rightDiv">
                                    <Link href={productData?.checkout_url ? productData?.checkout_url : '/'} target='_blank'><button className='startNowBtn'>Start Now <BiRightArrowAlt /></button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }



        </div>
    )
}

export default ComesWithSect
