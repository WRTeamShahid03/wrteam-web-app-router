'use client'
import React from 'react'
import HeroSect from '../ProductDetailPageSects/HeroSect'
import CounterSect from '../ProductDetailPageSects/CounterSect'
import ComesWithSect from '../ProductDetailPageSects/ComesWithSect'
import FeaturesSect from '../ProductDetailPageSects/FeaturesSect'
import Technology from '../ProductDetailPageSects/Technology'
import InnerPagesSect from '../ProductDetailPageSects/InnerPagesSect'
import PaymentSect from '../ProductDetailPageSects/PaymentSect'
import InfoSect from '../ProductDetailPageSects/InfoSect'
import GuideSect from '../ProductDetailPageSects/GuideSect'
import Unlock from '../ProductDetailPageSects/Unlock'
import TestimonialsSect from '../ProductDetailPageSects/TestimonialsSect'
import LicenseSect from '../ProductDetailPageSects/LicenseSect'
import AssistanceSect from '../ProductDetailPageSects/AssistanceSect'
import Faqs from '../ProductDetailPageSects/Faqs'
import BuyNowSect from '../ProductDetailPageSects/BuyNowSect'

const ProductDeatailPage = () => {
    return (
        <div className='product_detail_page'>
            <HeroSect />
            {/* <CounterSect /> */}
            <ComesWithSect />
            <Technology />
            <PaymentSect />
            <InfoSect />
            <FeaturesSect />
            <InnerPagesSect />
            <GuideSect />
            <Unlock />
            <TestimonialsSect />
            <LicenseSect />
            <AssistanceSect/>
            <Faqs/>
            <BuyNowSect/>
        </div>
    )
}

export default ProductDeatailPage
