'use client'
import dynamic from 'next/dynamic'
import React from 'react'
import CheckOutSect from '../freeCodePageComponents/sections/CheckOutSect'
import LoveBundleSect from '../11OfferPageSections/LoveBundleSect'
import Bundles from '../11OfferPageSections/Bundles'
import BonusSect from '../11OfferPageSections/BonusSect'
import Testimonials from '../freeCodePageComponents/sections/Testimonials'
import GrabBundles from '../11OfferPageSections/GrabBundles'
import Faqs from '../11OfferPageSections/Faqs'
const VideoSect = dynamic(() => import('../11OfferPageSections/VideoSect'), { ssr: false })

const BundleOfferPage = () => {
  return (
    <div className='freeCodePage'>

      <VideoSect />
      <CheckOutSect freeCodePage={false} />
      <LoveBundleSect />
      <Bundles />
      <BonusSect />
      <Testimonials />
      <GrabBundles />
      <Faqs />

    </div>
  )
}

export default BundleOfferPage