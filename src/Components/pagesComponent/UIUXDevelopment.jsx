import React, { useEffect, useState } from 'react'
import Breadcrum from '@/Components/Breadcrum'
import Card from 'react-bootstrap/Card'
import Link from 'next/link'
// import Lottie from 'react-lottie-player'
import helloText from '../../../src/Components/animatedText.json'
import { BiRightArrowCircle } from 'react-icons/bi'
import { BsArrowRightCircle } from 'react-icons/bs'

//Images
import uiuxDeveImg from '../../../src/Asset/Images/ui-ux-development/ux-ui-design.webp'
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
import figma from '../../../src/Asset/Images/ui-ux-development/icon/Figma.png'
import figmaHover from '../../../src/Asset/Images/ui-ux-development/icon/FigmaHover.png'
import illustrator from '../../../src/Asset/Images/ui-ux-development/icon/Illustrator.png'
import illustratorHover from '../../../src/Asset/Images/ui-ux-development/icon/IllustratorHover.png'
import photoShop from '../../../src/Asset/Images/ui-ux-development/icon/Photoshop.png'
import photoShopHover from '../../../src/Asset/Images/ui-ux-development/icon/PhotoshopHover.png'
import xd from '../../../src/Asset/Images/ui-ux-development/icon/XD.png'
import xdHover from '../../../src/Asset/Images/ui-ux-development/icon/XDHover.png'
import processImg from '../../../src/Asset/Images/ui-ux-development/12-10-05-Our Work Process_Ui-ux Disign service-.webp'
import processImg2 from '../../../src/Asset/Images/ui-ux-development/12-10-05-Our Work Process Ui-ux Disign service.webp'
import NewSlider from '../../../src/Components/NewSlider'

import processIcon1 from '../../../src/Asset/Icons/All_Icons/Process/Development.png'
import processIcon2 from '../../../src/Asset/Icons/All_Icons/Process/Maintenance & Support.png'
import processIcon3 from '../../../src/Asset/Icons/All_Icons/Process/Design & Planning.png'
import processIcon4 from '../../../src/Asset/Icons/All_Icons/Process/Analysis of Demands.png'
import processIcon5 from '../../../src/Asset/Icons/All_Icons/Process/Testing & Quality Assurance.png'
import processIcon6 from '../../../src/Asset/Icons/All_Icons/Process/Deployment.png'
// swiper Imgs 
import appDesign from '../../../src/Asset/Images/ui-ux-development/app_design.webp'
import webDesign from '../../../src/Asset/Images/ui-ux-development/web_design.webp'
import brandDesign from '../../../src/Asset/Images/ui-ux-development/Brand design.webp'
import completeSolution from '../../../src/Asset/Images/ui-ux-development/Complete Solution Service.webp'
import Head from 'next/head'
import Image from 'next/image'
import { GetSettingsApi } from '@/redux/actions/campaign'

const UIUXDevelopment = () => {

  const [lottieLoaded, setLottieLoaded] = useState(false);

  useEffect(() => {
    setLottieLoaded(true);
  }, []);

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
      title: 'Discovery & Research',
      desc: 'We gather insights about your project, audience, and market to create designs that connect with your audience effectively.'

    },
    {
      id: 1,
      icon: processIcon2,
      title: 'Wireframing',
      desc: 'We sketch the basic layout and functionality of your design, ensuring it meets your goals and the needs of users'

    },
    {
      id: 2,
      icon: processIcon3,
      title: 'Prototyping',
      desc: 'After wireframing, we create interactive mockups to simulate user interactions and refine the design.'

    },
  ]

  const processCard2Data = [
    {
      id: 0,
      icon: processIcon4,
      title: 'Visual Design',
      desc: 'We designs the visual elements of your product or service, ensuring they reflect your brand and maintain consistency across all platforms.'

    },
    {
      id: 1,
      icon: processIcon5,
      title: 'Iteration and Refinement',
      desc: 'We refine based on feedback, ensuring our work evolves to meet changing needs and trends.'

    },
    {
      id: 2,
      icon: processIcon6,
      title: 'Final Delivery',
      desc: 'Once everything is refined and approved, we deliver the finalized product or service, ready for implementation.'

    },
  ]

  const buildCardData = [
    {
      id: 0,
      icon: figma,
      hoverIcon: figmaHover,
      title: 'Figma',
      alt: 'best Figma service provider WRTeam bhuj'

    },
    {
      id: 1,
      icon: illustrator,
      hoverIcon: illustratorHover,
      title: 'Illustrator',
      alt: 'best illustrator service provider WRTeam bhuj'

    },
    {
      id: 2,
      icon: photoShop,
      hoverIcon: photoShopHover,
      title: 'Photoshop',
      alt: 'best photoshop service provider WRTeambhuj'

    },
    {
      id: 3,
      icon: xd,
      hoverIcon: xdHover,
      title: 'XD',
      alt: 'Best Adobe XD service provider WRTeam Bhuj'

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
      title: 'Web design',
      desc: 'Our backend web development experts focus on developing powerful, scalable server-side applications that support website functionality. We use various programming languages ​​such as JavaScript, PHP, and Ruby frameworks such as Django, Laravel, and Ruby on Rails to build secure and efficient backend solutions for your business requirements.',
      img: webDesign,
      alt: 'best web design service provider WRTeam  kutch'
    },
    {
      id: 1,
      title: 'App design',
      desc: 'Our backend web development experts focus on developing powerful, scalable server-side applications that support website functionality. We use various programming languages ​​such as JavaScript, PHP, and Ruby  frameworks such as Django, Laravel, and Ruby on Rails to build secure and efficient backend solutions for your business requirements.',
      img: appDesign,
      alt: 'best app designing service provider WRTeam kutch'
    },
    {
      id: 2,
      title: 'Brand design',
      desc: 'WRTeam offers full-stack web development services that combine the best of front-end and back-end development. Our full-stack developers are experts in handling all aspects of website development, from designing attractive interfaces to implementing difficult business logic in the back-end. Comprehensive features ensure seamless integration between the various layers of your website, delivering a high-end product.',
      img: brandDesign,
      alt: 'top branding strategist at the best IT development company WRTeam'
    },
    {
      id: 3,
      title: 'Complete Solution',
      desc: `At WRTeam, we understand that your website or app is your online presence and the first impression you make on potential customers. That's why we provide the best UI/UX design services and develop beautiful and user-friendly websites or apps that increase conversion rates. WRTeam believes that good design should be both attractive and functional, which is why we focus on user experience (UX) design. Our aim is to ensure that your website or app is easy to use, clean, and focused on conversion. We strive to provide comprehensive solutions for creating user-friendly and efficient websites and apps.`,
      img: completeSolution,
      alt:  'complete solution service with design experts at WRTeam bhuj'
    },
  ]

  return (
    <div className='webDevelopmentPage uiUxDesignPage'>

      <Breadcrum title='UI-UX' blueText={'Services'} contentOne={'Home'} contentTwo={'Services'} contentThree={'UI-UX Development'} />

      <section className='development container'>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="deveLeftDiv">
              <div className="deveHeadings">
                <span className="common_span">
                  UI-UX <span>Services</span>
                </span>
                <h1 className='comman_Headlines'>
                  Make Your App More User-Friendly with the Best <span> UI/UX Design </span> Services
                </h1>

                <p className="comman_para"> Our Best UI/UX design service aims to enhance your brand's digital presence by creating visually stunning designs that provide a seamless user experience for your target audience.</p>
              </div>
            </div>

          </div>

          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="deveRightDiv"
            // data-aos="zoom-in" data-aos-once="true" data-aos-duration="800"
            >
              <div className="commonBorderDiv">
                <Image height={0} width={0} loading="lazy" src={uiuxDeveImg} alt="best UI/UX service provider WRTeam kutch" />
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
              <h3 className='comman_Headlines'>The Transformative Benefits of Our <span>UI/UX</span> Solutions</h3>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="benefitsPara">
              <p className='comman_para'>Transform your digital presence with our UI/UX mastery. Elevate user experiences, captivate audiences, and strategically enhance your brand's success.</p>
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
                <Image height={0} width={0} loading="lazy" src={processImg} alt="work done by enhancing clients' needs with innovative design at WRTeam bhuj" />
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
                  Make Your App More User-Friendly with the Best <span>UI/UX Design</span> Services
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
                <Image height={0} width={0} loading="lazy" src={processImg2} alt="creative work done by experts at WRTeam bhuj" />
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
                  <span>Crafting</span> Dynamic Solutions with <span>Leading Tools</span> for Your Digital Presence.
                </h3>
                <p className="comman_para firstP">
                  From Illustrator's finesse to Figma's innovation, we blend pixel-perfect precision from Photoshop with Adobe XD's seamless design.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 rightDiv">
              <div className="row buildCardsWrapper">
                {
                  buildCardData.map((e) => {
                    return <div className="col-6 col-sm-6 col-md-3 col-lg-4" key={e.id}
                    //  data-aos="fade-left" data-aos-once="true" data-aos-duration="800"
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

export default UIUXDevelopment
