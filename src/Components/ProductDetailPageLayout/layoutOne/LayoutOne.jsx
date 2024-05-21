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
      <InnerPagesSect title={'Inner Pages Collections'} desc={`Hipster ipsum tattooed brunch I'm baby. Prism poutine pbr&b cardigan kinfolk tousled beard tote. Kinfolk tumeric mug literally tousled.`} />
      <GuideSect />
      <Unlock />
      <TestimonialsSect />
      <LicenseSect />
      <AssistanceSect title={`Reliable Assistance Awaits: eBroker's Dedicated Support Team`} desc={`Hipster ipsum tattooed brunch I'm baby. Prism poutine pbr&b cardigan kinfolk tousled beard tote. Kinfolk tumeric mug literally tousled.`} />
      <Faqs title={`Essential FAQs for Every Real Estate Stage`} desc={`Hipster ipsum tattooed brunch I'm baby. Prism poutine pbr&b cardigan kinfolk tousled beard tote. Kinfolk tumeric mug literally tousled.`} />
      <BuyNowSect buyNowLink={''} />
    </div>
  )
}

export default LayoutOne
