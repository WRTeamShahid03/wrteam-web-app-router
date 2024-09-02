'use client'
import React from 'react'
import Breadcrum from '@/Components/Breadcrum'
import Card from 'react-bootstrap/Card'

//Images
import digitalMarketingServImg from '../../../src/Asset/Images/digital-marketing/Digital_Marketing Service.webp'
import circle from '../../../src/Asset/Images/Shape_1.svg'
import dottsShape from '../../../src/Asset/Images/Shape_2.png'
import crossShape from '../../../src/Asset/Images/Shape_3.png'
import triangle from '../../../src/Asset/Images/Shape_4.svg'
import arrowImg from '../../../src/Asset/Images/Arrow Left Down.svg'
import timelyUpdadtes from '../../../src/Asset/Icons/All_Icons/Benefits/Timely Updates-.png'
import quality from '../../../src/Asset/Icons/All_Icons/Benefits/Testing & Quality Assurance.png'
import support from '../../../src/Asset/Icons/All_Icons/Benefits/Ongoing Support.png'
import eliteAuthor from '../../../src/Asset/Icons/All_Icons/Benefits/Elite Author on Codecanyon – 1.png'
import emailmarIcon from '../../../src/Asset/Images/digital-marketing/icon/email_marketing.png'
import emailmarIconHover from '../../../src/Asset/Images/digital-marketing/icon/email_marketingHover.png'
import fbAdds from '../../../src/Asset/Images/digital-marketing/icon/FB_ADD.png'
import fbAddsHover from '../../../src/Asset/Images/digital-marketing/icon/FB_ADDHover.png'
import googleAdds from '../../../src/Asset/Images/digital-marketing/icon/google_ads.png'
import googleAddsHover from '../../../src/Asset/Images/digital-marketing/icon/google_adsHover.png'
import googleAna from '../../../src/Asset/Images/digital-marketing/icon/Google_Analytics.png'
import googleAnaHover from '../../../src/Asset/Images/digital-marketing/icon/Google_AnalyticsHover.png'
import seoIcon from '../../../src/Asset/Images/digital-marketing/icon/seo.png'
import seoIconHover from '../../../src/Asset/Images/digital-marketing/icon/seoHover.png'
import seoYT from '../../../src/Asset/Images/digital-marketing/icon/YT_seo.png'
import seoYTHover from '../../../src/Asset/Images/digital-marketing/icon/YT_seoHover.png'


import processImg from '../../../src/Asset/Images/digital-marketing/13-10-05-Our Work Process Digital Marketing  service.webp'
import processImg2 from '../../../src/Asset/Images/digital-marketing/13-10-05-Our Work Process_Digital Marketing_service copy.webp'
import NewSlider from '../../../src/Components/NewSlider'

import processIcon1 from '../../../src/Asset/Icons/All_Icons/Process/Development.png'
import processIcon2 from '../../../src/Asset/Icons/All_Icons/Process/Maintenance & Support.png'
import processIcon3 from '../../../src/Asset/Icons/All_Icons/Process/Design & Planning.png'
import processIcon4 from '../../../src/Asset/Icons/All_Icons/Process/Analysis of Demands.png'
import processIcon5 from '../../../src/Asset/Icons/All_Icons/Process/Testing & Quality Assurance.png'
import processIcon6 from '../../../src/Asset/Icons/All_Icons/Process/Deployment.png'
// swiper Imgs 
import emailMarketing from '../../../src/Asset/Images/digital-marketing/Email Marketing.webp'
import seo from '../../../src/Asset/Images/digital-marketing/SEO.webp'
import smm from '../../../src/Asset/Images/digital-marketing/SMM.webp'
import localMarketing from '../../../src/Asset/Images/digital-marketing/Local Marketing.webp'
import Image from 'next/image'
import LottieComponent from '../LottieComponent'
import RecentBlogs from '../RecentBlogs'

const DigitalMarketing = () => {

    const benefitsCardData = [
        {
            id: 0,
            icon: timelyUpdadtes,
            title: 'Global Reach'

        },
        {
            id: 1,
            icon: quality,
            title: 'Cost Effective'

        },
        {
            id: 2,
            icon: support,
            title: 'Measurable Results'

        },
        {
            id: 3,
            icon: eliteAuthor,
            title: 'Targeted Advertising'

        },
    ]

    const processCard1Data = [
        {
            id: 0,
            icon: processIcon1,
            title: 'Market Research',
            desc: 'Our experts will do in-depth analyses of your business & align it with current market trends and demands.'

        },
        {
            id: 1,
            icon: processIcon2,
            title: 'Competitor Analysis',
            desc: 'We analyze your competitor’s strategies, strengths & weaknesses to design the best strategy for you.'

        },
        {
            id: 2,
            icon: processIcon3,
            title: 'Strategy Building',
            desc: 'We customize a perfect strategy for your business by considering the targeted audience, market trends & competition.'

        },
    ]

    const processCard2Data = [
        {
            id: 0,
            icon: processIcon4,
            title: 'Strategy Implementation',
            desc: 'Our digital marketing experts ensure 360° strategy implementation to get the best results from all directions.'

        },
        {
            id: 1,
            icon: processIcon5,
            title: 'Performance Monitoring',
            desc: 'Our experts regularly go through the performance of implemented strategies and make changes for the best outcomes.'

        },
        {
            id: 2,
            icon: processIcon6,
            title: 'Reporting',
            desc: 'We provide transparent reports to keep you informed about your campaign impact and areas for improvement'

        },
    ]

    const buildCardData = [
        {
            id: 0,
            icon: emailmarIcon,
            hoverIcon: emailmarIconHover,
            title: 'Email Marketing',
            alt: 'bulk email marketing service provider-WRTeam bhuj gujrat'

        },
        {
            id: 1,
            icon: fbAdds,
            hoverIcon: fbAddsHover,
            title: 'Facebook Ads',
            alt: 'Facebook marketing and handling service provider-WRTeam bhuj'

        },
        {
            id: 2,
            icon: googleAdds,
            hoverIcon: googleAddsHover,
            title: 'Google Ads',
            alt: 'best google ads service provider in Gujrat-WRTeam bhuj kutch'

        },
        {
            id: 3,
            icon: googleAna,
            hoverIcon: googleAnaHover,
            title: 'Google Analytics',
            alt: 'hire a team of  best Google analytics experts at WRTeam Bhuj Gujrat'

        },
        {
            id: 4,
            icon: seoIcon,
            hoverIcon: seoIconHover,
            title: 'SEO',
            alt: 'get your work done with SEO experts at WRTeam kutch gujrat'

        },
        {
            id: 5,
            icon: seoYT,
            hoverIcon: seoYTHover,
            title: 'SEO Youtube',
            alt: 'top YouTube  SEO by experts at WRTeam gujrat India'

        },
    ]

    const newSwiperData = [
        {
            id: 0,
            title: 'SEO (Search Engine Optimization)',
            desc: `Avail SEO service from top digital marketers with expertise in generating organic results, & specialization in making & implementing strategies for technical SEO, off-page SEO, local SEO, etc. `,
            img: seo,
            alt: 'most effective SEO strategies  and services with experts of WRTeam kutch-gujrat'
        },
        {
            id: 1,
            title: 'SMM (Social Media Marketing)',
            desc: `Social media plays a crucial role in making the brand identity, we are a creative team that helps you create your brand’s unique identity. Our team comprises digital marketers with specialized expertise in various social media platforms like Facebook, Instagram, and YouTube. `,
            img: smm,
            alt: 'best social media management service provider WRTeam bhuj'
        },
        {
            id: 2,
            title: 'Email Marketing',
            desc: 'Best email marketing service provider! We use tested strategies that help your business utilize its full potential. Our digital marketers ensure your emails reach the right audience, boosting customer engagement and conversions.',
            img: emailMarketing,
            alt: 'E-mail marketing services by experts are also available at WRTeam  bhuj Gujrat'
        },
        {
            id: 3,
            title: 'Local Marketing',
            desc: 'WRTeam helps businesses increase their brand exposure and connect with their local customers. Our special approaches to local SEO and local ads help businesses to reach new customers and increase foot traffic to your actual locations.',
            img: localMarketing,
            alt: 'get a local SEO service & local marketing with expert marketers of WRTeam gujrat india'
        },
    ]

    return (
        <div className='webDevelopmentPage digitalMarketingPage'>

            <Breadcrum title='Digital Marketing' blueText={'Services'} contentOne={'Home'} contentTwo={'Services'} contentThree={'Digital Marketing Services'} />

            <section className='development container'>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="deveLeftDiv">
                            <div className="deveHeadings">
                                <span className="common_span">
                                    Digital Marketing <span>Services</span>
                                </span>
                                <h2 className='comman_Headlines' >
                                    Grow your business with the Best <span> Digital Marketing </span> Services
                                </h2>

                                <p className="comman_para">Allow your business to grow globally with our best digital marketing services, get every marketing service in one place from expert marketers. </p>
                            </div>
                        </div>

                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="deveRightDiv"
                        // data-aos="zoom-in" data-aos-once="true" data-aos-duration="800"
                        >
                            <div className="commonBorderDiv">
                                <Image height={0} width={0} loading="lazy" src={digitalMarketingServImg} alt="most effective SEO strategies  and services with experts of WRTeam kutch-gujrat" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* development ends */}

            <section className='backend'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="backendHeadings">
                                <span className="common_span">
                                    {/* <span> What We</span> Offer</span> */}
                                    <span> What </span>We Offer</span>
                                <h2 className='comman_Headlines'>
                                    Services <span>We Can Help </span>You With
                                </h2>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12 sliderContainer">
                            <div className="leftDivshapes">
                                <Image height={0} width={0} loading="lazy" src={crossShape} alt="" className='crossShape' />
                                <Image height={0} width={0} loading="lazy" src={dottsShape} alt="" className='dottsShape' />
                            </div>
                            <div className="rightDivshapes">
                                <Image height={0} width={0} loading="lazy" src={circle} alt="" className='circleShape' />
                                <Image height={0} width={0} loading="lazy" src={triangle} alt="" className='triangleShape' />
                            </div>
                            <NewSlider newSwiperData={newSwiperData} />
                        </div>


                    </div>
                </div>

            </section>
            {/* backend ends  */}

            <section className='benefits container'>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="benefitsHeadings">
                            <span className="common_span">
                                Extensive <span>Benefits</span>
                            </span>
                            <h2 className='comman_Headlines'> Avail <span>Digital Marketing</span> by Experts for Precise and Targeted Results. </h2>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="benefitsPara">
                            <p className='comman_para'>Expand your business globally with digital marketing experts,  get global reach, and cost-effective results by targeted advertising.</p>
                        </div>
                    </div>

                </div>

                <div className="row benefitsCards">
                    {
                        benefitsCardData.map((e) => {
                            return <div className="col-sm-6 col-md-6 col-lg-3" key={e.id}>
                                <Card>
                                    {/* <Card.Img variant="top" src="..." /> */}
                                    <span className='card-img-top'><Image height={0} width={0} loading="lazy" src={e.icon} style={{ filter: e.icon === eliteAuthor ? 'none' : '' }} alt="" /></span>
                                    <Card.Body>
                                        <Card.Title>{e.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        })
                    }
                </div>
            </section>
            {/* benefits ends  */}

            <section className='process container'>
                <div className="row upperDivWrapper">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="upperDivLeftContent"
                        // data-aos="zoom-in" data-aos-once="true" data-aos-duration="800"
                        >
                            <div className="commonBorderDiv">
                                <Image height={0} width={0} loading="lazy" src={processImg} alt="all types of digital marketing services are available at the best IT consultants-WRTeam Bhuj Gujrat" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="upperDivRightContent">
                            <div className="upperRightHeadings">
                                <span className="common_span">
                                    Our <span>Work Process</span>
                                </span>
                                <h2 className='comman_Headlines'>
                                    Grow your business with the Best <span> Digital Marketing </span> Services
                                </h2>
                            </div>

                            <div className="processCardWrapper">
                                {
                                    processCard1Data.map((e) => {
                                        return <div className="processCard" data-aos="fade-up" data-aos-once="true" data-aos-duration="800" key={e.id}>
                                            <span className='cardIcon'>
                                                <Image height={0} width={0} loading="lazy" src={e.icon} alt="" />
                                            </span>
                                            <span className='cardContent'>
                                                <span className='title'>{e.title}</span>
                                                <span className='comman_para'>{e.desc}</span>
                                            </span>
                                        </div>

                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>
                {/* upperDivWrapper ends  */}
                <div className="row lowerDivWrapper">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="upperDivRightContent">
                            <div className="arrowImg">
                                <Image height={0} width={0} loading="lazy" src={arrowImg} alt="" />
                            </div>

                            <div className="processCardWrapper">
                                {
                                    processCard2Data.map((e) => {
                                        return <div className="processCard" data-aos="fade-up" data-aos-once="true" data-aos-duration="800" key={e.id}>
                                            <span className='cardIcon'>
                                                <Image height={0} width={0} loading="lazy" src={e.icon} alt="" />
                                            </span>
                                            <span className='cardContent'>
                                                <span className='title'>{e.title}</span>
                                                <span className='comman_para'>{e.desc}</span>
                                            </span>
                                        </div>

                                    })
                                }
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="upperDivLeftContent"
                        // data-aos="zoom-in" data-aos-once="true" data-aos-duration="800"
                        >
                            <div className="commonBorderDiv">
                                <Image height={0} width={0} loading="lazy" src={processImg2} alt="detailed digital marketing work process report at WRTeam kutch" />
                            </div>
                        </div>
                    </div>

                </div>


            </section>
            {/* process ends  */}

            <section className='build'>
                <div className="bgDiv">
                    <div className="blueBg"></div>
                </div>
                <div className="container">
                    <div className="row buildWrapper">
                        <div className="col-sm-12 col-md-12 col-lg-5 leftDiv" >
                            <div className="buildHeadings">
                                <span className="common_span">
                                    <span>Our</span>  Expertise</span>
                                <h2 className='comman_Headlines'>
                                    Avail Our <span>Expertise</span> In The Following Work Area.
                                </h2>
                                <p className="comman_para firstP">
                                    Experience excellence with our services, powered by top-notch platforms for unmatched performance and innovation.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6 rightDiv">
                            <div className="row buildCardsWrapper">
                                {
                                    buildCardData.map((e) => {
                                        return <div className="col-6 col-sm-6 col-md-3 col-lg-4" key={e.id}
                                        // data-aos="fade-left" data-aos-once="true" data-aos-duration="800"
                                        >
                                            <div className="card">
                                                <span className='buildCardIcon'>
                                                    <Image height={0} width={0} loading="lazy" src={e.icon} alt={e.alt} className='buildIcon1' />
                                                    <Image height={0} width={0} loading="lazy" src={e.hoverIcon} alt={e.alt} className='buildIcon2' />
                                                </span>
                                                <span>{e.title}</span>
                                            </div>
                                        </div>

                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* build ends  */}

            {/* <LottieComponent />

            <RecentBlogs /> */}

        </div>
    )
}

export default DigitalMarketing
