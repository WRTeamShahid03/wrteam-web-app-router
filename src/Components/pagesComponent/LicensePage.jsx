'use client'
import React, { useRef } from 'react'

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

    const regularlicenseData = [
        {
            id: 0,
            detail: 'Lifetime License Validity',
            add: true
        },
        {
            id: 1,
            detail: 'Permitted for 1 Domain',
            add: true
        },
        {
            id: 2,
            detail: '6 months of general and technical support',
            otherText: 'As per Envanto support policy',
            add: true
        },
        {
            id: 3,
            detail: 'All Premium Features',
            add: true
        },
        {
            id: 4,
            detail: 'Lifetime FREE Update',
            add: true
        },
        {
            id: 5,
            detail: 'For Personal Project',
            add: true
        },
        {
            id: 6,
            detail: 'For Commercial Projects',
            otherText: 'If the end project is paid for using or sell',
            add: false
        },
        {
            id: 7,
            detail: 'Postman Collection for REST API Documentation',
            add: false
        },
        {
            id: 8,
            detail: 'Admin Panel FREE Installation in cPanel',
            otherText: 'One Time',
            add: false
        },
        {
            id: 9,
            detail: 'Priority Support',
            add: false
        },
        {
            id: 10,
            detail: 'AnyDesk Support',
            add: false
        },
    ]

    const extendedlicenseData = [
        {
            id: 0,
            detail: 'Lifetime License Validity',
            add: true
        },
        {
            id: 1,
            detail: 'Permitted for 1 Domain',
            add: true
        },
        {
            id: 2,
            detail: '6 months of general and technical support',
            otherText: 'As per Envanto support policy',
            add: true
        },
        {
            id: 3,
            detail: 'All Premium Features',
            add: true
        },
        {
            id: 4,
            detail: 'Lifetime FREE Update',
            add: true
        },
        {
            id: 5,
            detail: 'For Personal Project',
            add: true
        },
        {
            id: 6,
            detail: 'For Commercial Projects',
            otherText: 'If the end project is paid for using or sell',
            add: true
        },
        {
            id: 7,
            detail: 'Postman Collection for REST API Documentation',
            add: true
        },
        {
            id: 8,
            detail: 'Admin Panel FREE Installation in cPanel',
            otherText: 'One Time',
            add: true
        },
        {
            id: 9,
            detail: 'Priority Support',
            add: true
        },
        {
            id: 10,
            detail: 'AnyDesk Support',
            add: true
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
            slidesPerView: 1,
            // spaceBetween: 40
        },
        768: {
            slidesPerView: 2,

        },
        992: {
            slidesPerView: 2,

        },
        1200: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 2,

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

    return (
        <>
            <section className="license container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='mainTitle'>Discover More Value: That is Align Your Needs</h1>
                    </div>

                    <div className="col-12">
                       <LicensePlan/>
                    </div>


                </div>
            </section>
        </>
    )
}

export default LicensePage
