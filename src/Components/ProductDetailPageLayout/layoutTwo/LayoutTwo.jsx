import React from 'react'
import HeroSect from './HeroSect'
import OperationsSect from './OperationsSect'
import WhyChoose from './WhyChoose'
import PaymentGateways from './PaymentGateways'
import InfoSect from './InfoSectTwo'
import InnerPagesSect from '../layoutOne/InnerPagesSect'
import SaveMoneySect from './SaveMoneySect'
import AppSect from './AppSect'
import IdeaSect from './IdeaSect'
import LayoutTwoTestimonials from './LayoutTwoTestimonials'
import LicensePlan from '@/Components/LicensePlan'
import LicenseSect from '../layoutOne/LicenseSect'
import Faqs from '../layoutOne/Faqs'
import AssistanceSect from '../layoutOne/AssistanceSect'
import BuyNowSect from '../layoutOne/BuyNowSect'



const LayoutTwo = () => {
    return (
        <div className='layoutTwo'>
            <HeroSect />
            <OperationsSect />
            <WhyChoose />
            <PaymentGateways />
            <InfoSect />
            <InnerPagesSect layoutTwo={true} title={'The Proof is in the Performance: Testimonial-Driven Success with Ekart'} desc={`See the cold, hard facts come to life as real businesses share their quantifiable successes achieved with Ekart's innovative solutions. Get inspired by their journeys and envision your own growth.`} />
            <SaveMoneySect />
            <AppSect />
            <IdeaSect />
            <LayoutTwoTestimonials />
            <LicenseSect layoutTwo={true} />
            <Faqs title={'Questions & Answers'} desc={`Whether you're just starting with eBroker or a seasoned user, our FAQs hold the key to unlocking your full potential.`}/>
            <AssistanceSect title={'Helping Hands Are Just a Click Away: Ekart Support - Always Here for You'} desc={'Encountered an issue? Have a question? Our dedicated Ekart Support team is just a click away. Get quick assistance and expert guidance.'}/>
            <BuyNowSect buyNowLink={''}/>
        </div>
    )
}

export default LayoutTwo
