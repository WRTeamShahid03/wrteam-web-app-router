'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
const HeroSect = dynamic(() => import('./HeroSect'), { ssr: false })
const OperationsSect = dynamic(() => import('./OperationsSect'), { ssr: false })
const WhyChoose = dynamic(() => import('./WhyChoose'), { ssr: false })
const PaymentGateways = dynamic(() => import('./PaymentGateways'), { ssr: false })
const InfoSect = dynamic(() => import('./InfoSectTwo'), { ssr: false })
const InnerPagesSect = dynamic(() => import('../layoutTwo/InnerPagesSect'), { ssr: false })
const SaveMoneySect = dynamic(() => import('./SaveMoneySect'), { ssr: false })
const AppSect = dynamic(() => import('./AppSect'), { ssr: false })
const IdeaSect = dynamic(() => import('./IdeaSect'), { ssr: false })
const LayoutTwoTestimonials = dynamic(() => import('./LayoutTwoTestimonials'), { ssr: false })
const LicenseSect = dynamic(() => import('../layoutTwo/LicenseSect'), { ssr: false })
const Faqs = dynamic(() => import('../layoutTwo/Faqs'), { ssr: false })
const AssistanceSect = dynamic(() => import('../layoutTwo/AssistanceSect'), { ssr: false })
const BuyNowSect = dynamic(() => import('../layoutTwo/BuyNowSect'), { ssr: false })
const NoDataFound = dynamic(() => import('@/Components/NoDataFound'), { ssr: false })



const LayoutOne = ({ productData }) => {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const [noData, setNoData] = useState(false)

    const heroSectData = productData?.product_description?.map((ele) => ele?.intro_section);
    const technologyData = productData?.product_description?.map((ele) => ele?.technology_section);
    const opterationSectData = productData?.product_description?.map((ele) => ele?.product_element_section);
    const whyChooseData = productData?.product_description?.map((ele) => ele?.feature_section);
    const paymentGatewaySectData = productData?.product_description?.map((ele) => ele?.payment_gateway_section);
    const innerPagesSectData = productData?.product_description?.map((ele) => ele?.panel_wise_feature_section);
    const appSectData = productData?.product_description?.map((ele) => ele?.app_wise_feature_section);
    const testimonialsData = productData?.product_testimonials
    const faqData = productData?.product_faqs
    const assistanceSectData = productData?.product_description?.map((ele) => ele?.help_section);

    useEffect(() => {
        if (productData?.product_description <= 0 && productData?.product_faqs <= 0 && productData?.product_testimonials <= 0) {
            setNoData(true)
        }
    }, [productData])

    // console.log('opterationSectDataLayout =>', opterationSectData)

    return (
        noData ? <NoDataFound /> :
            isClient &&
            <div className='layoutOne'>
                {
                    heroSectData && heroSectData[0] != null &&
                    <HeroSect heroSectData={heroSectData} techData={technologyData} />
                }
                {
                    opterationSectData && opterationSectData[0] != null &&
                    <OperationsSect opterationSectData={opterationSectData} />
                }
                {
                    whyChooseData && whyChooseData[0] != null &&
                    <WhyChoose whyChooseData={whyChooseData} />
                }
                {
                    paymentGatewaySectData && paymentGatewaySectData[0] != null &&
                    <PaymentGateways paymentGatewaySectData={paymentGatewaySectData} />
                }
                <InfoSect />
                {
                    innerPagesSectData && innerPagesSectData[0] != null &&
                    <InnerPagesSect innerPagesSectData={innerPagesSectData} title={'The Proof is in the Performance: Testimonial-Driven Success with Ekart'} desc={`See the cold, hard facts come to life as real businesses share their quantifiable successes achieved with Ekart's innovative solutions. Get inspired by their journeys and envision your own growth.`} />
                }
                <SaveMoneySect />
                {
                    appSectData && appSectData[0] != null &&
                    <AppSect appSectData={appSectData} />
                }
                <IdeaSect />
                {
                    testimonialsData && testimonialsData[0] != null &&
                    <LayoutTwoTestimonials testimonialsData={testimonialsData} />
                }
                <LicenseSect />
                {
                    faqData && faqData != null &&
                    <Faqs title={'Questions & Answers'} desc={`Whether you're just starting with our product or a seasoned user, our FAQs hold the key to unlocking your full potential.`} faqs={faqData} />
                }
                {
                    assistanceSectData && assistanceSectData[0] != null &&
                    <AssistanceSect assistanceSectData={assistanceSectData} />
                }
                <BuyNowSect />
            </div>

    )
}

export default LayoutOne
