'use client'
import React from 'react'
import Breadcrum from '@/Components/Breadcrum'
import Card from 'react-bootstrap/Card'

//Images
import webDeveImg from '../../../src/Asset/Images/web-development/Web Devlopment.webp'
import circle from '../../../src/Asset/Images/Shape_1.svg'
import dottsShape from '../../../src/Asset/Images/Shape_2.png'
import crossShape from '../../../src/Asset/Images/Shape_3.png'
import triangle from '../../../src/Asset/Images/Shape_4.svg'
import arrowImg from '../../../src/Asset/Images/Arrow Left Down.svg'
import timelyUpdadtes from '../../../src/Asset/Icons/All_Icons/Benefits/Timely Updates-.png'
import quality from '../../../src/Asset/Icons/All_Icons/Benefits/Testing & Quality Assurance.png'
import support from '../../../src/Asset/Icons/All_Icons/Benefits/Ongoing Support.png'
import eliteAuthor from '../../../src/Asset/Icons/All_Icons/Benefits/Elite Author on Codecanyon – 1.png'
import laravel from '../../../src/Asset/Images/web-development/icon/Laravel.png'
import laravelHover from '../../../src/Asset/Images/web-development/icon/Laravel_Hover.png'
import php from '../../../src/Asset/Images/web-development/icon/php.png'
import phpHover from '../../../src/Asset/Images/web-development/icon/php_Hover.png'
import codeignitor from '../../../src/Asset/Images/web-development/icon/codeigniter.png'
import codeignitorHover from '../../../src/Asset/Images/web-development/icon/codeigniter_Hover.png'
import vueJs from '../../../src/Asset/Images/web-development/icon/Vue.js.png'
import vueJsHover from '../../../src/Asset/Images/web-development/icon/Vue.js_Hover.png'
import nextJs from '../../../src/Asset/Images/web-development/icon/nextjs.png'
import nextJsHover from '../../../src/Asset/Images/web-development/icon/nextjs_Hover.png'
import reactJs from '../../../src/Asset/Images/web-development/icon/React.png'
import reactJsHover from '../../../src/Asset/Images/web-development/icon/React_Hover.png'
import processImg from '../../../src/Asset/Images/web-development/Our Work Process Devlopment.webp'
import processImg2 from '../../../src/Asset/Images/web-development/Our Work Process_Devlopment.webp'
import NewSlider from '../../../src/Components/NewSlider'

import processIcon1 from '../../../src/Asset/Icons/All_Icons/Process/Development.png'
import processIcon2 from '../../../src/Asset/Icons/All_Icons/Process/Maintenance & Support.png'
import processIcon3 from '../../../src/Asset/Icons/All_Icons/Process/Design & Planning.png'
import processIcon4 from '../../../src/Asset/Icons/All_Icons/Process/Analysis of Demands.png'
import processIcon5 from '../../../src/Asset/Icons/All_Icons/Process/Testing & Quality Assurance.png'
import processIcon6 from '../../../src/Asset/Icons/All_Icons/Process/Deployment.png'
// swiper Imgs 
import frontendImg from '../../../src/Asset/Images/web-development/10-19- Front_end_Devlopment Service.webp'
import backendImg from '../../../src/Asset/Images/web-development/10-19- Back_end_Devlopment Service.webp'
import fullStactImg from '../../../src/Asset/Images/web-development/10-19- full_stak_Devlopment Service.webp'
import completeSolution from '../../../src/Asset/Images/web-development/10-19-Complete Solution Service.webp'
import Image from 'next/image'

import LottieComponent from '../LottieComponent'
import RecentBlogs from '../RecentBlogs'


const WebDevelopment = () => {

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
      desc: 'Our process of web development starts with in-depth analyses of your business and requirements.'
    },
    {
      id: 1,
      icon: processIcon2,
      title: 'Design & Planning',
      desc: 'We design a futuristic stunning website with a user-friendly interface that fulfills all your requirements.'
    },
    {
      id: 2,
      icon: processIcon3,
      title: 'Development',
      desc: 'Our experts develop an innovative website that aligns with all your requirements and provides timely updates on the projects.'
    },
  ]

  const processCard2Data = [
    {
      id: 0,
      icon: processIcon4,
      title: 'Testing & Quality Assurance',
      desc: `Once the work of web development is done, we ensure that it's working seamlessly without any errors on all platforms.`

    },
    {
      id: 1,
      icon: processIcon5,
      title: 'Deployment',
      desc: 'Once the website is fully ready, we deploy it to the real environment that allows users to access it across the world.'

    },
    {
      id: 2,
      icon: processIcon6,
      title: 'Maintenance & Support',
      desc: `We not only deploy the website but also ensure that your website remains up-to-date and fully operational. We believe in making long-term connections.`

    },
  ]

  const buildCardData = [
    {
      id: 0,
      icon: laravel,
      hoverIcon: laravelHover,
      title: 'Laravel',
      alt: `work with Laravel Technology's experts  with the best web-app development company WRTeam bhuj`

    },
    {
      id: 1,
      icon: php,
      hoverIcon: phpHover,
      title: 'Php',
      alt: `work with PHP Technology's experts  with the best web-app development company WRTeam bhuj`

    },
    {
      id: 2,
      icon: codeignitor,
      hoverIcon: codeignitorHover,
      title: 'CodeIgniter',
      alt: `work with codiginatorr Technology's experts  with the best web-app development company WRTeam bhuj`

    },
    {
      id: 3,
      icon: vueJs,
      hoverIcon: vueJsHover,
      title: 'VueJS',
      alt: `work with vue.js Technology's experts  with the best web-app development company WRTeam bhuj`

    },
    {
      id: 4,
      icon: nextJs,
      hoverIcon: nextJsHover,
      title: 'NextJS',
      alt: `work with next.js Technology experts  with the best web-app development company WRTeam bhuj`

    },
    {
      id: 5,
      icon: reactJs,
      hoverIcon: reactJsHover,
      title: 'ReactJS',
      alt: `work with react.js Technology experts  with the best web-app development company WRTeam bhuj`

    },
  ]

  const newSwiperData = [
    {
      id: 0,
      title: 'Front-end web development',
      desc: 'Our experts focus on front-end development creating flexible layouts, interactive interfaces, and seamless user experiences. Our websites and apps have the latest technologies and are optimized across platforms to make them work on all your devices.',
      img: frontendImg,
      alt: 'front hand service for your website with experts of the best it company WRTeam'
    },
    {
      id: 1,
      title: 'Back-end web development',
      desc: 'Our backend web development team builds strong, scalable server applications to support website functions. We use technologies like JavaScript, PHP, Codiginator, and Laravel to create secure and efficient backend solutions for your business needs.',
      img: backendImg,
      alt: 'back  hand service for your website with experts of the best it company WRTeam'
    },
    {
      id: 2,
      title: 'Full-stack web development',
      desc: 'WRTeam offers full-stack web development services that combine the best of front-end and back-end development. Our full-stack developers can handle everything needed to create a website. They design attractive, user-friendly interfaces and manage the complex code that makes the website run smoothly. They ensure all parts of the website work together seamlessly, providing a high-quality product.',
      img: fullStactImg,
      alt: 'front  hand - backhand - full stack development with the best it web web developers'
    },
    {
      id: 3,
      title: 'Customization',
      desc: 'Not only web development we also offer customization in source codes by WRTeam making it tailored to your needs, & our web development experts can also customize your existing website to make it personalized for your requirements and ensure a unique, userfriendly, & visually appealing online presence.',
      img: completeSolution,
      alt: 'get complete every digital solutions  with the best web development company WRTeam'
    },
  ]

  return (
    <div className='webDevelopmentPage'>

      <Breadcrum title='Web' blueText={'Development'} contentOne={'Home'} contentTwo={'Services'} contentThree={'Web Development'} />

      <section className='development container'>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="deveLeftDiv">
              <div className="deveHeadings">
                <span className="common_span">
                  Web <span>Development</span>
                </span>
                <h2 className='comman_Headlines'>
                Avail Web Development Services and Build <span>Stunning Websites</span> with the <span>Best IT Company</span> Personalized for Your Business.
                </h2>

                <p className="comman_para"> With over 7 years of experience, we create personalized business websites for E-commerce, Restaurants, Real Estate, Trivia games, and more. We aim to deliver fully functional, stunning websites with modern, user-friendly UI/UX.</p>
              </div>
            </div>

          </div>

          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="deveRightDiv"
            // data-aos="zoom-in" data-aos-once="true" data-aos-duration="800"
            >
              <div className="commonBorderDiv">
                <Image height={0} width={0} loading="lazy" src={webDeveImg} alt="best web development company for startups, businesses,hotel,etc." />
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
              <h2 className='comman_Headlines'>Unleashing the Potential of the Best <span>Web Development</span> Company</h2>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="benefitsPara">
              <p className='comman_para'>Discover unparalleled benefits with the top web development company. We are committed to delivering innovative & efficient websites to elevate your online success.</p>
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
                <Image height={0} width={0} loading="lazy" src={processImg} alt="work in progress with the best web-app development company WRTeam bhuj"  />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="upperDivRightContent">
              <div className="upperRightHeadings">
                <span className="common_span">
                  Our <span>Work Process</span>
                </span>
                <h2 className='comman_Headlines' >
                How Does Our <span>Web Development</span> Team Create a Website?
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
                <Image height={0} width={0} loading="lazy" src={processImg2} alt="work will never be on hold- with the best web-app development company WRTeam bhuj" />
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
                  We <span>Build</span> Dynamic Solutions with Leading <span> Web Development</span> Platforms

                </h2>
                <p className="comman_para firstP">
                  Harness the power of advanced technology and next-level web development for an online presence that captivates attention!
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
                          {/* <Image height={0} width={0} loading="lazy"  src={e.icon} alt="" className='buildIcon1' />
                                                    <Image height={0} width={0} loading="lazy"  src={e.hoverIcon} alt="" className='buildIcon2' /> */}
                          <Image height={0} width={0} loading="lazy" src={e.hoverIcon} alt={e.alt} className='buildIcon1' />
                          <Image height={0} width={0} loading="lazy" src={e.icon} alt={e.alt} className='buildIcon2' />
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

      {/* <LottieComponent/>

      <RecentBlogs/> */}

    </div>
  )
}

export default WebDevelopment


// style={{ filter: e.hoverIcon === phpHover ? 'brightness(25%) invert(202%) contrast(100%)' : '' }} 