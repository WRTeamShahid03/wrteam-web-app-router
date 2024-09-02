'use client'
import React, { useRef } from 'react'
import LicenseCard from '../LicenseCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import LicensePlan from '../LicensePlan';


const LicensePage = () => {

    return (
        <>
            <section className="license container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='mainTitle'>Discover More Value: That is Align Your Needs</h1>
                    </div>

                    <div className="col-12">
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
                                <SwiperSlide >
                                    <LicenseCard title="Regular License" licenseData={regularlicenseData} />
                                </SwiperSlide>

                                <SwiperSlide >
                                    <LicenseCard title="Extended License" darkBg={true} badge={true} licenseData={extendedlicenseData} />
                                </SwiperSlide>
                            </Swiper>
                        </div> */}

                        <>
                        <LicensePlan/>
                        </>
                    </div>


                </div>
            </section>
        </>
    )
}

export default LicensePage
