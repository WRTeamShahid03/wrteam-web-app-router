'use client'
import React from 'react'
import CommonTechSect from './CommonTechSect'

// images 
import techImg1 from '../../../Asset/Images/product-detail-page/techImg1.png'
import techImg2 from '../../../Asset/Images/product-detail-page/techImg2.png'
import flutter from '../../../Asset/Images/product-detail-page/Flutter.png'
import nextjs from '../../../Asset/Images/product-detail-page/nextjs.png'
import admob from '../../../Asset/Images/product-detail-page/admob.png'
import firebase from '../../../Asset/Images/product-detail-page/firebase.png'
import laravel from '../../../Asset/Images/product-detail-page/Laravel.png'
import paypal from '../../../Asset/Images/product-detail-page/paypal.png'
import paystack from '../../../Asset/Images/product-detail-page/paystack.png'
import razorpay from '../../../Asset/Images/product-detail-page/Razorpay.png'
import stripe from '../../../Asset/Images/product-detail-page/stripe.png'

const Technology = () => {

    const firstSect = [
        {
            id: 0,
            img: flutter,
            name: 'Flutter 3.16+'
        },
        {
            id: 1,
            img: nextjs,
            name: 'Nextjs13.3+'
        },
        {
            id: 2,
            img: admob,
            name: 'Admob'
        },
        {
            id: 3,
            img: laravel,
            name: 'Laravel 9.5+'
        },
        {
            id: 4,
            img: firebase,
            name: 'Firebase'
        },
    ]
    const secondSect = [
        {
            id: 0,
            img: paypal,
            name: 'Paypal'
        },
        {
            id: 1,
            img: paystack,
            name: 'Paystack'
        },
        {
            id: 2,
            img: razorpay,
            name: 'Razorpay'
        },
        {
            id: 3,
            img: stripe,
            name: 'Stripe'
        },
    ]

    return (
        <>
            <CommonTechSect data={firstSect} sectImg={techImg1} title={'Technology Powering Your Real Estate Journey'}/>
        </>
    )
}

export default Technology
