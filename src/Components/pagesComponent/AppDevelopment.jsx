'use client'
import React from 'react'
import Breadcrum from '@/Components/Breadcrum'
import Card from 'react-bootstrap/Card'
import NewSlider from '@/Components/NewSlider'

//Images
import appDeveImg from '../../../src/Asset/Images/app-development/AppDevlopment.webp'
import circle from '../../../src/Asset/Images/Shape_1.svg'
import dottsShape from '../../../src/Asset/Images/Shape_2.png'
import crossShape from '../../../src/Asset/Images/Shape_3.png'
import triangle from '../../../src/Asset/Images/Shape_4.svg'
import arrowImg from '../../../src/Asset/Images/Arrow Left Down.svg'
import timelyUpdadtes from '../../../src/Asset/Icons/All_Icons/Benefits/Timely Updates-.png'
import quality from '../../../src/Asset/Icons/All_Icons/Benefits/Testing & Quality Assurance.png'
import support from '../../../src/Asset/Icons/All_Icons/Benefits/Ongoing Support.png'
import eliteAuthor from '../../../src/Asset/Icons/All_Icons/Benefits/Elite Author on Codecanyon – 1.png'
import androidIcon from '../../../src/Asset/Images/app-development/icon/Android.png'
import androidIconHover from '../../../src/Asset/Images/app-development/icon/Android_Hover – 1.png'
import flutterIcon from '../../../src/Asset/Images/app-development/icon/flutter.png'
import flutterIconHover from '../../../src/Asset/Images/app-development/icon/flutterHover.png'
import iosIcon from '../../../src/Asset/Images/app-development/icon/iOS.png'
import iosIconHover from '../../../src/Asset/Images/app-development/icon/iOSHover.png'
import processImg from '../../../src/Asset/Images/app-development/10-10-05-Our_Work Process.webp'
import processImg2 from '../../../src/Asset/Images/app-development/11-10-05-Our Work Process Devlopment.psd.webp'

import processIcon1 from '../../../src/Asset/Icons/All_Icons/Process/Development.png'
import processIcon2 from '../../../src/Asset/Icons/All_Icons/Process/Maintenance & Support.png'
import processIcon3 from '../../../src/Asset/Icons/All_Icons/Process/Design & Planning.png'
import processIcon4 from '../../../src/Asset/Icons/All_Icons/Process/Analysis of Demands.png'
import processIcon5 from '../../../src/Asset/Icons/All_Icons/Process/Testing & Quality Assurance.png'
import processIcon6 from '../../../src/Asset/Icons/All_Icons/Process/Deployment.png'

// swiper Imgs 
import android from '../../../src/Asset/Images/app-development/andriod Devlopment Service.webp'
import flutter from '../../../src/Asset/Images/app-development/flutter Devlopment Service.webp'
import ios from '../../../src/Asset/Images/app-development/iOS- Devlopment Service.webp'
import completeSolution from '../../../src/Asset/Images/app-development/Complete Solution Service.webp'
import Image from 'next/image'
import LottieComponent from '../LottieComponent'
import RecentBlogs from '../RecentBlogs'



const AppDevelopment = () => {

    const benefitsCardData = [
        {
            id: 0,
            icon: timelyUpdadtes,
            title: 'Timely Updates'

        },
        {
            id: 1,
            icon: quality,
            title: 'Testing & Quality Assurance'

        },
        {
            id: 2,
            icon: support,
            title: 'Ongoing Support'

        },
        {
            id: 3,
            icon: eliteAuthor,
            title: 'Elite Author on Codecanyon'

        },
    ]

    const processCard1Data = [
        {
            id: 0,
            icon: processIcon1,
            title: 'Analysis of Demands',
            desc: 'Our process of development starts with in-depth analyses of your business and requirements.'

        },
        {
            id: 1,
            icon: processIcon2,
            title: 'Design & Planning',
            desc: 'We design a futuristic mobile app with a user-friendly interface that fulfills all your requirements.'

        },
        {
            id: 2,
            icon: processIcon3,
            title: 'Development',
            desc: 'Our experts develop a stunning mobile app that aligns with all your requirements and provides timely updates on the projects.'

        },
    ]

    const processCard2Data = [
        {
            id: 0,
            icon: processIcon4,
            title: 'Testing & Quality Assurance',
            desc: 'Once the app development is done, we ensure that it’s working seamlessly without any errors on all platforms. '

        },
        {
            id: 1,
            icon: processIcon5,
            title: 'Deployment',
            desc: 'Once the application is fully ready, we deploy it to the real environment that allows users to access it across the world.'

        },
        {
            id: 2,
            icon: processIcon6,
            title: 'Maintenance & Support',
            desc: 'We not only deploy the website but also ensure that your website remains up-to-date and fully operational. We believe in making long-term connections.'

        },
    ]

    const buildCardData = [
        {
            id: 0,
            icon: androidIcon,
            hoverIcon: androidIconHover,
            title: 'Android',
            alt: 'android app development service provider-WRTeam'

        },
        {
            id: 1,
            icon: flutterIcon,
            hoverIcon: flutterIconHover,
            title: 'Flutter',
            alt: 'bet flutter technology developers will work for you WRTeam bhuj'

        },
        {
            id: 2,
            icon: iosIcon,
            hoverIcon: iosIconHover,
            title: 'iOS',
            alt: 'ios app development service provider-WRTeam'
        },
    ]

    const newSwiperData = [
        {
            id: 0,
            title: 'Android app development',
            desc: `Our app development team has experience, knowledge, and expertise in Android mobile app development. We are committed to delivering unique interactive mobile applications that are perfectly tailored to our clients. Our Primary focus is on providing the best mobile application development service and making sure that our clients will have maximum satisfaction with our app development service.`,
            img: android,
            alt: 'top android mobile app development  service provider & experts'
        },
        {
            id: 1,
            title: 'iOS app development',
            desc: 'Due to the increase in the number of iOS device users, it become crucial to have a native iOS app & make it a huge market for iOS applications. Our app development team consists of iOS app development experts with experience of more than 6 years making us the best iOS app development service provider. We are committed to delivering unique interactive mobile applications that are perfectly tailored to our clients.',
            img: ios,
            alt: 'top IOS mobile app development  service provider & experts'
        },
        {
            id: 2,
            title: 'Flutter app development',
            desc: 'Flutter apps are continuously booming, it has revolutionized cross-platform app development that allows the creation of stunning and natively compiled applications for mobile, web, and desktop from a single codebase. Our app development team includes specialized experts for Flutter app development with 6+ years of experience making us a leading Flutter app development service provider.',
            img: flutter,
            alt: 'best fluter mobile app development service with WRTeam bhuj'
        },
        {
            id: 3,
            title: 'Customization',
            desc: `Not only app development we also offer customization in source codes by WRTeam making it tailored to your needs, & our mobile app development experts can also customize your existing application to make it personalized for your requirements and ensure a unique, user-friendly, & visually appealing online presence.`,
            img: completeSolution,
            alt: 'complete solution for all your digital problems with WRTeam bhuj'
        },
    ]

    return (
        <div className='webDevelopmentPage appDevelopmentPage'>

            <Breadcrum title='App' blueText={'Development'} contentOne={'Home'} contentTwo={'Services'} contentThree={'App Development'} />

            <section className='development container'>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="deveLeftDiv">
                            <div className="deveHeadings">
                                <span className="common_span">
                                    App <span>Development</span>
                                </span>
                                <h2 className='comman_Headlines'>
                                    Make Mobile App  With the Best <span>App Development</span> Company
                                </h2>

                                <p className="comman_para"> Our app development service is available to meet your unique business needs and create high-quality, user-friendly mobile applications.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="deveRightDiv"
                        // data-aos="zoom-in" data-aos-once="true" data-aos-duration="800"
                        >
                            <div className="commonBorderDiv">
                                <Image height={0} width={0} loading="lazy" src={appDeveImg} alt="best android & ios app development company -WRTeam Bhuj- gujrat" />
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
                                    <span>What</span> We Can Do <span>For You</span>
                                </span>
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
                            <h2 className='comman_Headlines'>Unleashing the Potential of the Best Mobile <span>App  Development</span> Service.</h2>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="benefitsPara">
                            <p className='comman_para'>Discover unparalleled benefits with the best app development service provider. We are committed to delivering innovative & efficient apps to elevate your online success.</p>
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
                                <Image height={0} width={0} loading="lazy" src={processImg} alt="every work is done in systematic way at best it company WRTeam bhuj" />
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
                                    How Does Our <span>App Development</span> Team Create an App For You?</h2>
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
                                <Image height={0} width={0} loading="lazy" src={processImg2} alt="work in progress with the best web-app development company WRTeam bhuj" />
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
                                <h2 className='comman_Headlines' >
                                    App <span>Development</span> Services Tailored for <span>Latest Platforms</span>
                                </h2>
                                <p className="comman_para firstP">
                                    Our app development mastery is across iOS, and Android and is compatible with cross platforms. Tailored solutions, universal impact.

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

export default AppDevelopment
