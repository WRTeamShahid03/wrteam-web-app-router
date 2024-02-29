import React, { useEffect, useState } from 'react'
import Breadcrum from '@/Components/Breadcrum'
import Card from 'react-bootstrap/Card'
import Link from 'next/link'
// import Lottie from 'react-lottie-player'
import helloText from '../../../src/Components/animatedText.json'
import { BiRightArrowCircle } from 'react-icons/bi'
import { BsArrowRightCircle } from 'react-icons/bs'

//Images
import digitalMarketingServImg from '../../../src/Asset/Images/digital-marketing/Digital_Marketing Service.webp'
import circle from '../../../src/Asset/Images/Shape_1.svg'
import dottsShape from '../../../src/Asset/Images/Shape_2.png'
import crossShape from '../../../src/Asset/Images/Shape_3.png'
import triangle from '../../../src/Asset/Images/Shape_4.svg'
import arrowImg from '../../../src/Asset/Images/Arrow Left Down.svg'
import getTouch from '../../../src/Asset/Images/getTouch.webp'
import blog1 from '../../../src/Asset/Images/Blog_1.png'
import blog2 from '../../../src/Asset/Images/Blog_2.png'
import blog3 from '../../../src/Asset/Images/Blog_3.png'
import dateIcon from '../../../src/Asset/Icons/ic_date.png'
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
import Head from 'next/head'
import Image from 'next/image'
import { GetSettingsApi } from '@/redux/actions/campaign'

const DigitalMarketing = () => {

    const [lottieLoaded, setLottieLoaded] = useState(false);

    useEffect(() => {
      setLottieLoaded(true);
    }, []);

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
            desc: 'We will study your business, target audience, and new trends to gain insights into shaping our marketing approach.'

        },
        {
            id: 1,
            icon: processIcon2,
            title: 'Competitor Analysis',
            desc: 'Analyzing your competitors helps us understand their marketing strategies, strengths, and weaknesses, guiding our approach to standing out.'

        },
        {
            id: 2,
            icon: processIcon3,
            title: 'Strategy Building',
            desc: 'We create a personolized marketing strategy based on our research, aligning with your business goals and setting you apart in the industry.'

        },
    ]

    const processCard2Data = [
        {
            id: 0,
            icon: processIcon4,
            title: 'Strategy Implementation',
            desc: 'We execute the strategy across channels to reach and engage your target audience effectively.'

        },
        {
            id: 1,
            icon: processIcon5,
            title: 'Performance Monitoring',
            desc: 'We regularly check how well your marketing campaigns are doing, making changes if needed to stay on track with your goals.'

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
            title: 'Email Marketing'

        },
        {
            id: 1,
            icon: fbAdds,
            hoverIcon: fbAddsHover,
            title: 'Facebood Adds'

        },
        {
            id: 2,
            icon: googleAdds,
            hoverIcon: googleAddsHover,
            title: 'Google Adds'

        },
        {
            id: 3,
            icon: googleAna,
            hoverIcon: googleAnaHover,
            title: 'Google Analytics'

        },
        {
            id: 4,
            icon: seoIcon,
            hoverIcon: seoIconHover,
            title: 'SEO'

        },
        {
            id: 5,
            icon: seoYT,
            hoverIcon: seoYTHover,
            title: 'SEO Youtube'

        },
    ]

    const blogsData = [
        {
            id: 0,
            badge: "Artificial Intelligence",
            date: "August 25, 2023",
            title: "Exploring the Evolution of AI in Healthcare",
            text: "Dive into the fascinating journey of Artificial Intelligence in the realm of healthcare. This blog post takes you through the significant advancements AI has made in diagnosing illnesses, personalized treatment plans, and...",
            img: blog1
        },
        {
            id: 1,
            badge: "Cybersecurity",
            date: "September 10, 2023",
            title: "The Rising Threat of Ransomware: Protecting Your Digital Fortress",
            text: "In this informative piece, we dissect the alarming surge of ransomware attacks and their far-reaching consequences. Gain insights into the tactics cybercriminals employ and learn effective strategies to safeguard your digital...",
            img: blog2
        },
        {
            id: 2,
            badge: "Space Exploration",
            date: "October 5, 2023",
            title: "Mars Colonization: Navigating the Challenges of Red Planet Habitability",
            text: "Embark on a celestial journey to explore the intricate challenges and breakthroughs in the quest for colonizing Mars. Delve into the complexities of creating a habitable environment, sustainable resource management...",
            img: blog3
        },
    ]

    const newSwiperData = [
        {
            id: 0,
            title: 'SEO (Search Engine Optimization)',
            desc: `We will work with you to improve position of your website's on search engine results pages (SERPs) and secure the top at page. We will increase visibility of your site and chances of ranking higher on the SERPs by keyword reasearch, optimizing content and structure.`,
            img: seo,
        },
        {
            id: 1,
            title: 'SMM (Social Media Marketing)',
            desc: `We'll help you establish a strong social media presence by creating and managing your profile, and developing and publishing engaging content that will appeal to your target audience.`,
            img: smm,
        },
        {
            id: 2,
            title: 'Email Marketing',
            desc: 'We will help you reach your target audience with personalized email campaigns that are tailored to their interests and behaviors.',
            img: emailMarketing,
        },
        {
            id: 3,
            title: 'Local Marketing',
            desc: 'WRTeam helps businesses increase their brand exposure and connect with their local customers. Our special approaches to local SEO and local ads help businesses to reach new customers and increase foot traffic to your actual locations.',
            img: localMarketing,
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
                                <h1 className='comman_Headlines' >
                                    Grow your business with the Best <span> Digital Marketing </span> Services
                                </h1>

                                <p className="comman_para"> Drive traffic, increase ROI, maximise conversions, increase brand awareness, and grow your brand or business online with our best digital marketing services.</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="deveRightDiv"
                        // data-aos="zoom-in" data-aos-once="true" data-aos-duration="800"
                        >
                            <div className="commonBorderDiv">
                                <Image height={0} width={0} loading="lazy" src={digitalMarketingServImg} alt="" />
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
                                <h3 className='comman_Headlines'>
                                    Services <span>We Can Help </span>You With
                                </h3>
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
                            <h3 className='comman_Headlines'> Leverage the Power of <span>Digital Marketing</span> for Precise and Targeted Results.</h3>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="benefitsPara">
                            <p className='comman_para'>Go global with cost-effective digital marketing. Measure success, target precisely, and gain a competitive edge in the digital arena.</p>
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
                                <Image height={0} width={0} loading="lazy" src={processImg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="upperDivRightContent">
                            <div className="upperRightHeadings">
                                <span className="common_span">
                                    Our <span>Work Process</span>
                                </span>
                                <h3 className='comman_Headlines'>
                                    Grow your business with the Best <span> Digital Marketing </span> Services
                                </h3>
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
                                <Image height={0} width={0} loading="lazy" src={processImg2} alt="" />
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
                                    <span>We</span> Build
                                </span>
                                <h3 className='comman_Headlines'>
                                    Leveraging Industry- <span>Leading Technology</span> in Our Services
                                </h3>
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
                                                    <Image height={0} width={0} loading="lazy" src={e.icon} alt="" className='buildIcon1' />
                                                    <Image height={0} width={0} loading="lazy" src={e.hoverIcon} alt="" className='buildIcon2' />
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

            {/* <section className='webDevContact'>
                <div className="getInTouch container" style={{
                    background: `rgb(23 79 196 / 83%) url(${getTouch.src})`,
                    backgroundSize: 'cover',
                    backgroundBlendMode: 'darken'
                }}>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-10">
                            <div className="getTouchText">
                                <span className='word'>
                                    <Lottie
                                        loop
                                        animationData={helloText}
                                        play
                                    /></span>
                                <span className='getTouchDesc'>Got A Quastion? We Would Be Happy To Help!</span>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-2">
                            <div className="getTouchBtn">
                                <Link href='/contact-us'> <button className='homeCommon_btn'>Contact Us <BiRightArrowCircle size={20} /></button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* webDevContact ends  */}

            {/* <section className='recentBlogs container'>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="recentBlogHeading">
                            <span className="common_span">
                                Our <span>Blogs</span>
                            </span>
                            <h3 className="comman_Headlines">
                                Recent <span>Blogs</span>
                            </h3>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="row">
                            {
                                blogsData.map((ele) => {
                                    return <div className="col-sm-12 col-md-6 col-lg-4 recentBlogsCards" key={ele.id}>
                                        <div className="card text-white">
                                            <span className='cateBadge'>{ele.badge}</span>
                                            <Image height={0} width={0} loading="lazy" src={ele.img} className="card-img-top" alt="teamImg" />
                                            <div className="card-img-top">
                                                <div className="cateDetails">
                                                    <span className="cateDate">
                                                        <span> <Image height={0} width={0} loading="lazy" src={dateIcon} alt="" /></span>
                                                        <span> {ele.date}</span>
                                                    </span>
                                                    <p className="card-title">
                                                        {ele.title.length > 50 ? ele.title.slice(0, 55) + "" + "..." : ele.title}</p>
                                                    <p className='card-text'>{ele.text}</p>

                                                    <button className='blogComman_btn'>Read More <BsArrowRightCircle style={{ paddingBottom: "2px" }} /> </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                })
                            }

                        </div>
                    </div>
                </div>
            </section> */}
            {/* recentBlogs ends  */}
        </div>
    )
}

export default DigitalMarketing
