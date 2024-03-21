import React from 'react'
import HeroSect from '../ProductDetailPageSects/HeroSect'
import CounterSect from '../ProductDetailPageSects/CounterSect'
import ComesWithSect from '../ProductDetailPageSects/ComesWithSect'
import FeaturesSect from '../ProductDetailPageSects/FeaturesSect'
import Technology from '../ProductDetailPageSects/Technology'
import InnerPagesSect from '../ProductDetailPageSects/InnerPagesSect'

const ProductDeatailPage = () => {
    return (
        <div className='product_detail_page'>
            <HeroSect />
            <CounterSect />
            <ComesWithSect />
            <FeaturesSect />
            <Technology />
            <InnerPagesSect />
        </div>
    )
}

export default ProductDeatailPage
