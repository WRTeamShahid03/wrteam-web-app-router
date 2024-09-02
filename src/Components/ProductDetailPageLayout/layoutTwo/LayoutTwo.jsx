'use client'
import React from 'react'
import dynamic from 'next/dynamic'
const HeroSect = dynamic(() => import('./HeroSect'), { ssr: false })
const ComesWithSect = dynamic(() => import('./ComesWithSect'), { ssr: false })
const FeaturesSect = dynamic(() => import('./FeaturesSect'), { ssr: false })
const Technology = dynamic(() => import('./Technology'), { ssr: false })
const InnerPagesSect = dynamic(() => import('./InnerPagesSect'), { ssr: false })
const PaymentSect = dynamic(() => import('./PaymentSect'), { ssr: false })
const InfoSect = dynamic(() => import('./InfoSect'), { ssr: false })
const GuideSect = dynamic(() => import('./GuideSect'), { ssr: false })
const Unlock = dynamic(() => import('./Unlock'), { ssr: false })
const TestimonialsSect = dynamic(() => import('./TestimonialsSect'), { ssr: false })
const LicenseSect = dynamic(() => import('./LicenseSect'), { ssr: false })
const AssistanceSect = dynamic(() => import('./AssistanceSect'), { ssr: false })
const Faqs = dynamic(() => import('./Faqs'), { ssr: false })
const BuyNowSect = dynamic(() => import('./BuyNowSect'), { ssr: false })

const LayoutTwo = ({ productData }) => {


  const heroSectData = productData?.product_description?.map((ele) => ele?.intro_section);
  const comesWithSectData = productData?.product_description?.map((ele) => ele?.product_element_section);
  const technologyData = productData?.product_description?.map((ele) => ele?.technology_section);
  const featuresSectData = productData?.product_description?.map((ele) => ele?.feature_section);
  const paymentGatewaySectData = productData?.product_description?.map((ele) => ele?.payment_gateway_section);
  const innerPagesSectData = productData?.product_description?.map((ele) => ele?.panel_wise_feature_section);
  const appSectData = productData?.product_description?.map((ele) => ele?.app_wise_feature_section);
  const testimonialsData = productData?.product_testimonials
  const faqData = productData?.product_faqs
  const assistanceSectData = productData?.product_description?.map((ele) => ele?.help_section);

  return (
    <div className='layoutTwo'>
      <HeroSect heroSectData={heroSectData} />
      {/* <CounterSect /> */}
      <ComesWithSect comesWithSectData={comesWithSectData} />
      <Technology technologyData={technologyData} />
      <PaymentSect paymentGatewaySectData={paymentGatewaySectData} />
      <InfoSect />
      <FeaturesSect featuresSectData={featuresSectData}/>
      <InnerPagesSect innerPagesSectData={innerPagesSectData} title={'Inner Pages Collections'} desc={`Hipster ipsum tattooed brunch I'm baby. Prism poutine pbr&b cardigan kinfolk tousled beard tote. Kinfolk tumeric mug literally tousled.`} />
      <GuideSect />
      <Unlock />
      <TestimonialsSect testimonialsData={testimonialsData}/>
      <LicenseSect />
      <AssistanceSect assistanceSectData={assistanceSectData} />
      <Faqs faqs={faqData} title={`Questions & Answers`} desc={`Whether you're just starting with our product or a seasoned user, our FAQs hold the key to unlocking your full potential.`} />
      <BuyNowSect />
    </div>
  )
}

export default LayoutTwo
