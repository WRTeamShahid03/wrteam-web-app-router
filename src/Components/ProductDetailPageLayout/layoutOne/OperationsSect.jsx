'use client'
import React, { useCallback, useRef } from 'react'
import CommonTextDiv from '../layoutTwo/CommonTextDiv'
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
import Link from 'next/link';

const OperationsSect = ({ opterationSectData }) => {

    const data = opterationSectData && opterationSectData[0];

    // console.log('operationSect =>', data)

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
            <section className='operationSect container' id='operationSection'>
                <div className="row">
                    <div className="col-lg-6">
                        <CommonTextDiv title={data?.title} desc={data?.description} />
                    </div>
                    {
                        data?.elements?.length > 4 &&
                        <div className="col-lg-6 swiperBtnsWrapper">
                            <button onClick={handlePrev}><FaArrowLeft /></button>
                            <button onClick={handleNext}><FaArrowRight /></button>
                        </div>
                    }

                    <div className="col-12 cardsRow">
                        <Swiper
                            ref={sliderRef}
                            slidesPerView={4}
                            loop={false}
                            spaceBetween={30}
                            freeMode={true}
                            // autoplay={{ delay: 1000 }}
                            // modules={[Autoplay]}
                            navigation
                            className=''
                            breakpoints={breakpoints}
                        >
                            {
                                data && data?.elements?.map((item) => {
                                    return <SwiperSlide key={item.name}>
                                        <div className={`card operationCard ${item?.panel_link || item?.android_link || item?.ios_link ? 'hover' : 'noHover'}`}>
                                        <div className="imgDiv">
                                            <Image src={item?.image_url} height={0} width={0} alt='cardIcon' />
                                        </div>
                                        <div className='textDiv'>
                                            <span className='title'>{item?.name}</span>
                                            <span className='desc' dangerouslySetInnerHTML={{ __html: item?.details }}></span>
                                        </div>
                                        <div className='hoverBtns'>
                                            {
                                                item?.panel_link &&
                                                <Link href={item?.panel_link} target='blank'> <button className='exploreBtn'>Explore Demo</button></Link>
                                            }
                                            {
                                                item?.android_link &&
                                                <Link href={item?.android_link} target='blank'> <button className='exploreBtn'>Android</button></Link>
                                            }
                                            {
                                                item?.ios_link &&
                                                <Link href={item?.android_link} target='blank'> <button className='otherBtn'>iOS </button></Link>
                                            }
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                })
                            }
                    </Swiper >
                </div>

        </div>
            </section >
        </div >
    )
}

export default OperationsSect
