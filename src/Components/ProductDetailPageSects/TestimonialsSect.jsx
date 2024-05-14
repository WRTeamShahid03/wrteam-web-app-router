import Image from 'next/image'
import React, { useCallback, useRef } from 'react'
import img from '../../Asset/Images/product-detail-page/clientImg.png'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from 'react-icons/fa';
import CommonTextDiv from './CommonTextDiv';
import { FaRegCheckCircle } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


const TestimonialsSect = () => {

    const breakpoints = {
        0: {
            slidesPerView: 1,
        },
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
            <section className='testimonialsSect'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Swiper
                                ref={sliderRef}
                                slidesPerView={4}
                                loop={true}
                                spaceBetween={30}
                                freeMode={true}
                                autoplay={{ delay: 1000 }}
                                modules={[Autoplay]}
                                navigation
                                breakpoints={breakpoints}
                            >

                                <SwiperSlide >
                                    <div className="card">
                                        <div className="upperDiv">
                                            <div className="details">
                                                <span><Image src={img} height={0} width={0} alt='clientImg' /></span>
                                                <div className='textWrapper'>
                                                    <span>Jenny Wilson</span>
                                                    <span>Developer, AppQonics</span>
                                                </div>
                                            </div>
                                            <div className="swiperBtnsWrapper">
                                                <span onClick={handlePrev}><FaChevronLeft /></span>
                                                <span onClick={handleNext}><FaChevronRight /></span>
                                            </div>
                                        </div>
                                        <div className="bottomDiv">
                                            <span className='comman_para'>Selling my house was turning into a nightmare. Traditional agents were pushy, communication was lacking, and the whole process felt overwhelming. Then I found eBroker! It was like a breath of fresh air. Their platform was intuitive and easy to navigate, and their team was incredibly supportive and responsive. They guided me through every step, answered all my questions patiently, and even helped me negotiate a fantastic offer.</span>
                                        </div>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide >
                                    <div className="card">
                                        <div className="upperDiv">
                                            <div className="details">
                                                <span><Image src={img} height={0} width={0} alt='clientImg' /></span>
                                                <div className='textWrapper'>
                                                    <span>Jenny Wilson</span>
                                                    <span>Developer, AppQonics</span>
                                                </div>
                                            </div>
                                            <div className="swiperBtnsWrapper">
                                                <span onClick={handlePrev}><FaChevronLeft /></span>
                                                <span onClick={handleNext}><FaChevronRight /></span>
                                            </div>
                                        </div>
                                        <div className="bottomDiv">
                                            <span className='comman_para'>Selling my house was turning into a nightmare. Traditional agents were pushy, communication was lacking, and the whole process felt overwhelming. Then I found eBroker! It was like a breath of fresh air. Their platform was intuitive and easy to navigate, and their team was incredibly supportive and responsive. They guided me through every step, answered all my questions patiently, and even helped me negotiate a fantastic offer.</span>
                                        </div>
                                    </div>

                                </SwiperSlide>

                            </Swiper >
                        </div>
                        <div className="col-lg-6">
                            <CommonTextDiv title={'Trusted by Thousands: Hear Why Clients Choose Us'} desc={`Hipster ipsum tattooed brunch I'm baby. Prism poutine pbr&b cardigan kinfolk tousled beard tote. Kinfolk tumeric mug literally tousled.`} />

                            <div className="listDiv">
                                <span className='title'>Don't just like it, LOVE it: The eBroker fan club is calling.</span>
                                <div className='listWrapper'>
                                    <div>
                                        <span> <FaRegCheckCircle /> </span>
                                        <span>Donec porta augue fringilla eleifend ornare.</span>
                                    </div>
                                    <div>
                                        <span> <FaRegCheckCircle /> </span>
                                        <span>Sed bibendum felis ut egestas fermentum.</span>
                                    </div>
                                    <div>
                                        <span> <FaRegCheckCircle /> </span>
                                        <span>Nunc in libero convallis, semper urna ac, blandit orci.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default TestimonialsSect
