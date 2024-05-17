import React from 'react'
import HeroSect from './HeroSect'
import CounterSect from './CounterSect'
import ComesWithSect from './ComesWithSect'
import FeaturesSect from './FeaturesSect'
import Technology from './Technology'
import InnerPagesSect from './InnerPagesSect'
import PaymentSect from './PaymentSect'
import InfoSect from './InfoSect'
import GuideSect from './GuideSect'
import Unlock from './Unlock'
import TestimonialsSect from './TestimonialsSect'
import LicenseSect from './LicenseSect'
import AssistanceSect from './AssistanceSect'
import Faqs from './Faqs'
import BuyNowSect from './BuyNowSect'

const LayoutOne = () => {
  return (
    <div className='layoutOne'>
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
      <AssistanceSect />
      <Faqs />
      <BuyNowSect />
    </div>
  )
}

export default LayoutOne
