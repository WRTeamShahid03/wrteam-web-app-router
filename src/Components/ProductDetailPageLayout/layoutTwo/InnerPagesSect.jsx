'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react';
import bg from '../../../Asset/Images/product-detail-page/innerPagesBG.png';
import bg2 from '../../../Asset/Images/product-detail-page/layout-2/innerPagesLayoutTwo.jpg';
import img from '../../../Asset/Images/product-detail-page/innerSwiperImg.png'

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Image from 'next/image';
import CommonTextDiv from './CommonTextDiv';
import LightBox from '@/Components/LightBox/Lightbox';

import leftShape from '../../../Asset/Images/product-detail-page/leftShape.png'
import rightShape from '../../../Asset/Images/product-detail-page/rightShape.png'
import { useSelector } from 'react-redux';
import { layoutSelector } from '@/redux/reuducer/productLayoutSlice';

const InnerPagesSect = ({ innerPagesSectData, title, desc }) => {

    const data = innerPagesSectData && innerPagesSectData[0]

    const [activeTab, setActiveTab] = useState(data?.tabs[0]?.tab_name);

    const [tabs, setTabs] = useState([])

    const productLayout = useSelector(layoutSelector)

    // console.log('innerPagesSectData =>', innerPagesSectData)


    useEffect(() => {

    }, [activeTab])

    useEffect(() => {
        const tabsData = data?.tabs.map((tab) => {
            return tab?.tab_name
        })
        // console.log('tabsData', tabsData)
        setTabs(tabsData)


    }, [data])

    const selectedTabData = data?.tabs?.filter((tab) => { return tab?.tab_name === activeTab })

    // console.log('selectedTabData =>', selectedTabData)

    const breakpoints = {
        0: {
            slidesPerView: 1.3,
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
            slidesPerView: 2.7,

        },
        1200: {
            slidesPerView: 2.7,
        },
        1400: {
            slidesPerView: 2.7,

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


    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [photos, setPhotos] = useState([])
    const [expandedItems, setExpandedItems] = useState({});

    const openLightbox = (data, index) => {
        setCurrentIndex(index);
        setViewerIsOpen(true);
        setPhotos(data)
    };

    const closeLightbox = () => {
        setViewerIsOpen(false);
    };

    useEffect(() => {
    }, [viewerIsOpen])


    const toggleText = (index) => {
        setExpandedItems((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };


    return (
        <section className={`innerPagesSect ${productLayout === 1 ? 'commonBgAndShape' : ''}`} style={{ background: `url(${productLayout === 1 ? '' : bg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

            {
                productLayout === 1 &&
                <>
                    <div className="leftShape">
                        <Image src={leftShape} alt='leftShape' height={0} width={0} />
                    </div>
                    <div className="rightShape">
                        <Image src={rightShape} alt='leftShape' height={0} width={0} />
                    </div>
                </>
            }


            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <CommonTextDiv title={data?.title} desc={data?.description} />
                    </div>

                    <div className="col-12 tabsWrapper">
                        <div className={`tabsHeader ${productLayout === 1 ? 'layoutOneTabsHeader' : ''}`}>
                            {
                                data?.tabs.map((tab) => {
                                    return <button key={tab?.tab_name} className={`tab tab1 ${activeTab === tab?.tab_name ? 'activeTab' : ''}`} onClick={() => setActiveTab(tab?.tab_name)}>{tab?.tab_name}</button>
                                })
                            }
                        </div>
                        <div className="tabContentWrapper">
                            {
                                data?.tabs?.filter((tab) => { return tab?.tab_name === activeTab }) && <div className={`content tab1`}>
                                    <Swiper
                                        ref={sliderRef}
                                        slidesPerView={4}
                                        loop={true}
                                        spaceBetween={30}
                                        freeMode={true}
                                        autoplay={{ delay: 1000 }}
                                        // modules={[Autoplay]}
                                        navigation
                                        breakpoints={breakpoints}
                                    >
                                        {
                                            selectedTabData && selectedTabData[0]?.details?.length > 0 && selectedTabData[0]?.details?.map((item, index) => {
                                                return (
                                                    <SwiperSlide key={item?.title} >
                                                        <div className="card">
                                                            <div className='imgWrapper' onClick={() => openLightbox(selectedTabData[0]?.details, index)}><Image src={item?.image_url} height={0} width={0} alt='cardImg' /></div>
                                                            <div>
                                                                <span className='title'>{item?.title}</span>
                                                                <span className={`desc ${expandedItems[index] ? 'expanded' : ''}`}>
                                                                    {
                                                                        item?.short_description?.length > 180 ?
                                                                            expandedItems[index] ? item?.short_description : item?.short_description?.slice(0, 180) + '...'
                                                                            : item?.short_description
                                                                    }
                                                                    {
                                                                        item?.short_description?.length > 180 &&
                                                                        <span className='toggleText' onClick={() => toggleText(index)}>
                                                                            {expandedItems[index] ? 'read less' : 'read more'}
                                                                        </span>
                                                                    }
                                                                </span>
                                                                {/* <span className={`desc ${expandedItems[index] ? 'expanded' : ''}`}>
                                                                    {item?.short_description}
                                                                </span> */}

                                                            </div>

                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper >
                                </div>
                            }
                        </div>
                    </div>

                    {
                        productLayout === 1 && data?.tabs?.length > 3 &&
                        <div className="col-12 navigateBtns">
                            <button className='previousBtn' onClick={handlePrev}><FaArrowLeft /></button>
                            <button className='nextBtn' onClick={handleNext}><FaArrowRight /></button>
                        </div>
                    }
                </div>
            </div>
            {/* <LightBox
                photos={currentImage}
                viewerIsOpen={viewerIsOpen}
                onClose={closeLightbox}
                titleImg={titleImg}
            /> */}
            <LightBox
                photos={photos}
                viewerIsOpen={viewerIsOpen}
                onClose={closeLightbox}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
        </section>
    );
};

export default InnerPagesSect;
