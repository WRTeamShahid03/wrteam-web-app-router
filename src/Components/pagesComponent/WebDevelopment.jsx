import React, { useEffect, useState } from 'react'
import Breadcrum from '@/Components/Breadcrum'
import Card from 'react-bootstrap/Card'
import Link from 'next/link'
import Lottie from 'react-lottie-player'
import helloText from '../../../src/Components/animatedText.json'
import { BiRightArrowCircle } from 'react-icons/bi'
import { BsArrowRightCircle } from 'react-icons/bs'

//Images
import webDeveImg from '../../../src/Asset/Images/web-development/Web Devlopment.webp'
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
import Head from 'next/head'
import Image from 'next/image'
import { GetSettingsApi } from '@/redux/actions/campaign'


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
      title: 'Analysis',
      desc: 'We recognise your business objectives and website standards as part of our requirement analysis stage, which starts our work process.'
    },
    {
      id: 1,
      icon: processIcon2,
      title: 'Design & Planning',
      desc: 'Following this, we collaborate with UI/UX experts and designers to create a visually appealing and user-friendly website design and plan.'
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
      desc: ' After website development, we ensure its performance through rigorous testing and quality assurance processes to ensure it functions seamlessly on all platforms.'

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
      title: 'Support',
      desc: `Our work process doesn't end with deployment. We provide regular updates to keep your website up-to-date.`

    },
  ]

  const buildCardData = [
    {
      id: 0,
      icon: laravel,
      hoverIcon: laravelHover,
      title: 'Laravel'

    },
    {
      id: 1,
      icon: php,
      hoverIcon: phpHover,
      title: 'Php'

    },
    {
      id: 2,
      icon: codeignitor,
      hoverIcon: codeignitorHover,
      title: 'CodIgnitor'

    },
    {
      id: 3,
      icon: vueJs,
      hoverIcon: vueJsHover,
      title: 'VueJS'

    },
    {
      id: 4,
      icon: nextJs,
      hoverIcon: nextJsHover,
      title: 'NextJS'

    },
    {
      id: 5,
      icon: reactJs,
      hoverIcon: reactJsHover,
      title: 'ReactJS'

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
      title: 'Front-end web development',
      desc: 'Our backend web development experts focus to developing powerful, scalable server-side applications which support website functionality. We use various programming languages such as JavaScript, PHP, Ruby and frameworks such as Django, Laravel and Ruby on Rails to build secure and efficient backend solutions for your business requirements.',
      img: frontendImg,
    },
    {
      id: 1,
      title: 'Back-end web development',
      desc: 'Our backend web development experts focus to developing powerful, scalable server-side applications which support website functionality. We use various programming languages ​​such as JavaScript, PHP, Ruby and frameworks such as Django, Laravel and Ruby on Rails to build secure and efficient backend solutions for your business requirements',
      img: backendImg,
    },
    {
      id: 2,
      title: 'Full-stack web development',
      desc: 'WRTeam offers full-stack web development services that combine the best of front-end and back-end development. Our full-stack developers are experts in handling all aspects of website development, from designing attractive interfaces to implementing difficult business logic in the back-end. Comprehensive features ensure seamless integration between the various layers of your website, delivering a high-end product.',
      img: fullStactImg,
    },
    {
      id: 3,
      title: 'Complete Solution',
      desc: 'WRTeam provides professional web development services that satisfy the demands of online businesses. Our experienced programmers employ the most modern technology to build adaptable, practical websites that comply with certain specifications.Our web development services include front-end web development, back-end web development, and full-stack web development. WRTeam believes in delivering end-to-end web development services.',
      img: completeSolution,
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
                <h1 className='comman_Headlines'>
                  Build <span>Future-Ready Websites</span> for Your Brand: Drive Traffic, Capture Success
                </h1>

                <p className="comman_para"> Our web development service is ready to meet your unique business needs and deliver high-quality, responsive websites that are visually appealing and fully functional.</p>
              </div>
            </div>

          </div>

          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="deveRightDiv"
            // data-aos="zoom-in" data-aos-once="true" data-aos-duration="800"
            >
              <div className="commonBorderDiv">
                <Image height={0} width={0} loading="lazy" src={webDeveImg} alt="" />
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
              <h3 className='comman_Headlines'>Unleashing the Potential of the Best <span>Web Development</span> company</h3>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="benefitsPara">
              <p className='comman_para'>Discover unparalleled benefits with the top web development company. We unleash innovation and efficiency to elevate your online success.</p>
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
                <h3 className='comman_Headlines' >
                  How Our <span>Web Development </span> Transforms Businesses?
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
                <h3 className='comman_Headlines' >
                  We <span>Build</span> Dynamic Solutions with Leading <span> Web Development</span> Platforms

                </h3>
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
                          <Image height={0} width={0} loading="lazy" src={e.hoverIcon} alt="" className='buildIcon1' />
                          <Image height={0} width={0} loading="lazy" src={e.icon} alt="" className='buildIcon2' />
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

      <section className='webDevContact'>
        <div className="getInTouch container" style={{
          background: `rgb(23 79 196 / 83%) url(${getTouch.src})`,
          backgroundSize: 'cover',
          backgroundBlendMode: 'darken'
        }}>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-10">
              <div className="getTouchText">
                {/* <span className='word'>{words[wordIndex].substr(0, offset)}</span> */}
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
      </section>
      {/* webDevContact ends  */}

      <section className='recentBlogs container'>
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
      </section>
      {/* recentBlogs ends  */}
    </div>
  )
}

export default WebDevelopment


// style={{ filter: e.hoverIcon === phpHover ? 'brightness(25%) invert(202%) contrast(100%)' : '' }} 