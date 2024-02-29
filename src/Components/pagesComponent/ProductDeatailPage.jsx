import React from 'react'
import HeroSect from '../ProductDetailPageSects/HeroSect'
import CounterSect from '../ProductDetailPageSects/CounterSect'
import ComesWithSect from '../ProductDetailPageSects/ComesWithSect'
import FeaturesSect from '../ProductDetailPageSects/FeaturesSect'

const ProductDeatailPage = () => {
    return (
        <div className='product_detail_page'>
            <HeroSect />
            <CounterSect />
            <ComesWithSect/>
            <FeaturesSect/>
        </div>
    )
}

export default ProductDeatailPage
