import React, { useEffect, useState } from 'react'
import Breadcrum from '@/Components/Breadcrum'
import Card from 'react-bootstrap/Card'
import Link from 'next/link'
import Lottie from 'react-lottie-player'
import helloText from '../../../src/Components/animatedText.json'
import { BiRightArrowCircle } from 'react-icons/bi'
import { BsArrowRightCircle } from 'react-icons/bs'
import NewSlider from '@/Components/NewSlider'

//Images
import appDeveImg from '../../../src/Asset/Images/app-development/AppDevlopment.webp'
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
import Head from 'next/head'
import Image from 'next/image'
import { GetSettingsApi } from '@/redux/actions/campaign'



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
            desc: 'Work starts with requirement analysis, where we identify your business objectives and site specifications.'

        },
        {
            id: 1,
            icon: processIcon2,
            title: 'Design & Planning',
            desc: 'Following that, we collaborate with UI/UX specialists and designers to create and plan an attractive and user-friendly website.'

        },
        {
            id: 2,
            icon: processIcon3,
            title: 'Development',
            desc: 'Our experienced developers code and develop the website according to your requirements. We also provide regular updates to our clients.'

        },
    ]

    const processCard2Data = [
        {
            id: 0,
            icon: processIcon4,
            title: 'Testing & Quality Assurance',
            desc: 'After website development, we ensure its performance through rigorous testing and quality assurance processes to ensure it functions seamlessly on all platforms.'

        },
        {
            id: 1,
            icon: processIcon5,
            title: 'Deployment',
            desc: 'Once the website is ready, we deploy it to a live environment so that your audience can access it.'

        },
        {
            id: 2,
            icon: processIcon6,
            title: 'Maintenance & Support',
            desc: 'Our commitment to your project extends beyond deployment. We provide ongoing maintenance to ensure your website remains up-to-date and fully operational.'

        },
    ]

    const buildCardData = [
        {
            id: 0,
            icon: androidIcon,
            hoverIcon: androidIconHover,
            title: 'Android'

        },
        {
            id: 1,
            icon: flutterIcon,
            hoverIcon: flutterIconHover,
            title: 'Flutter'

        },
        {
            id: 2,
            icon: iosIcon,
            hoverIcon: iosIconHover,
            title: 'iOS'

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
            title: 'Android app development',
            desc: `Our app development team possesses extensive knowledge and expertise in Android app development. We are deeply dedicated to delivering outstanding solutions that are perfectly tailored to our clients' unique needs and go above and beyond their expectations. Our primary focus is on providing exceptional services that not only meet but exceed our client's requirements, make sure their maximal satisfaction.`,
            img: android,
        },
        {
            id: 1,
            title: 'iOS app development',
            desc: 'There are over 1 billion globally active users of iPhones , making it a huge market for iOS apps. Our team is specialised in iOS app development and has the skills to create a great app for you.',
            img: ios,
        },
        {
            id: 2,
            title: 'Flutter app development',
            desc: 'Flutter app development is the process of creating mobile apps with the Flutter framework. Flutter is an open-source, cross-platform framework created by Google. It means developers can use Flutter for build apps which can run on both Android and iOS devices, by single code.',
            img: flutter,
        },
        {
            id: 3,
            title: 'Complete Solution',
            desc: `WRTeam provides comprehensive app development services to organisations of all sizes. Our talented App Developers are committed to developing robust, feature-rich apps that meet your company's specific aims and requirements by utilising the most up-to-date tools, technologies, and industry standards. WRTeam specialises in Android app development, Flutter app development, and iOS app development to give the finest solutions for our client's needs. Our team has extensive expertise in developing high-quality mobile applications for the Android, Flutter, and iOS platforms. We have the competence to offer excellent outcomes whether you require an Android app, a Flutter app, or an iOS app.`,
            img: completeSolution,
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
                                <h1 className='comman_Headlines'>
                                    Make Mobile App  With the Best <span>App Development</span> Company
                                </h1>

                                <p className="comman_para"> Our app development service is available to meet your unique business needs and create high-quality, user-friendly apps.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="deveRightDiv"
                        // data-aos="zoom-in" data-aos-once="true" data-aos-duration="800"
                        >
                            <div className="commonBorderDiv">
                                <Image height={0} width={0} loading="lazy" src={appDeveImg} alt="" />
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
                            <h3 className='comman_Headlines'>Explore the Extensive Benefits of Our <span>App Development </span> Excellence</h3>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="benefitsPara">
                            <p className='comman_para'>Experience a business revolution with our app development expertise, transforming your ideas into powerful digital solutions that redefine success.</p>
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
                                    How Our <span>App Development </span> Redefines Business Potential?</h3>
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
                                <h3 className='comman_Headlines' >
                                    App <span>Development</span> Services Tailored for <span>Latest Platforms</span>
                                </h3>
                                <p className="comman_para firstP">
                                    Our app development mastery across iOS, Android and compatible with cross platforms. Tailored solutions, universal impact.

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
                            <h3 className="comman_Headlines" >
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
                                                        <span><Image height={0} width={0} loading="lazy" src={dateIcon} alt="" /></span>
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

export default AppDevelopment
