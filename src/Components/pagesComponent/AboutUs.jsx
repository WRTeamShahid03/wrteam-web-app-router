import Breadcrum from '@/Components/Breadcrum'
import { React, useEffect, useRef, useState } from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import Counter from '../Counter.jsx'
import WorkChain from '@/Components/WorkChain'
import Testimonials from '@/Components/Testimonials'
import Link from 'next/link'


// images
import knowMoreImg from '../../Asset/Images/knowMore.webp'
import likeIcon from '../../Asset/Icons/ic_thumb.svg'
import trianglePattern from '../../Asset/Icons/Triangle Pattern.png'
import dotsPattern from '../../Asset/Icons/Dots Pattern.png'
import ourVision from '../../Asset/Images/our_vision.webp'
import ourMission from '../../Asset/Images/our_mission.webp'
import ourValues from '../../Asset/Images/our_values.webp'
import Team from '@/Components/Team'
import Head from 'next/head'
import Image from 'next/image'


const AboutUs = () => {

  return (

    <>

      {/* <Breadcrum title="About" blueText="Us" contentOne="Home" contentTwo="About Us" /> */}

      <section id='knowMore' className='container'>
        <div className="row">

          <div className="col-sm-12 col-md-12 col-lg-6">

            <div className="knowMoreLeftDiv">
              <div className="knowMoreImg" 
              // data-aos="fade-down-right" data-aos-once="true" data-aos-duration="800"
              >

                <Image height={0} width={0} loading="lazy" src={knowMoreImg} alt="know about the top marketers, developers, and experts at best wed development company-WRTeam" />
                <div className="business">
                  <span className='likeSpan'><Image height={0} width={0} loading="lazy" src={likeIcon} alt="likeIcon" /></span>
                  <span className='businessNum'>25+</span>
                  <span className='businessText'>Business Solution</span>
                </div>
              </div>

              <Image height={0} width={0} loading="lazy" src={trianglePattern} alt="trianglePattern" className='trianglePattern' data-aos="fade-right" data-aos-once="true" data-aos-duration="800" data-aos-delay="50" />
              <Image height={0} width={0} loading="lazy" src={dotsPattern} alt="dotsPattern" className='dotsPattern' />
            </div>


          </div>

          <div className="col-sm-12 col-md-12 col-lg-6">

            <div className="knowMoreRightDiv">
              <span className="common_span">Get to <span>know more</span></span>
              <h3 className='comman_Headlines'>Where Ideas Blossom into <span> Techno-Creative </span> Marvels.</h3>

              <p className='firstP comman_para'>WRTeam IT company located in Bhuj - India, working with the goal of putting the customer first. </p>

              <p className='comman_para'>We're a team of enthusiastic individuals with an eye for innovation and delivering the Best Quality products and services.</p>

              <p className='comman_para'>The WRTeam believes in our customer's ideas and wants to help bring them to life, allowing them to focus on their long-term goals while we take care of the details.</p>

              <p className='comman_para'>We offer the Best Mobile Application Services, Web Development Services, Graphic Design Services, IT Consulting Services and Digital Marketing Services.</p>
            </div>

          </div>

        </div>
      </section>

      <Counter />

      <section id="vision" className='container'>
        <div className="winnerWrapper">

          <div className="row">

            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="visionLeftDiv">
                <span className='common_span'>Our <span>Vision</span> </span>
                <h3 className='comman_Headlines'>Inspiring <span>Growth</span> Through Innovative  <span> Mobile and Web </span> Solutions</h3>

                <p className='firstP comman_para'>At WRTeam, we envision becoming a top provider of exceptional mobile and web solutions that inspire businesses and people to achieve their goals and enhance their lives.</p>

                <p className='comman_para'> We want to be known as the top company for app & web Solutions development that is creative, high-quality, and client-focused.</p>

                <p className='comman_para'>We believe that Apps & Webs Solutions development is the key to success in the future of business.</p>

                <p className='comman_para'>As businesses grow, they require Apps & Web Solutions that are perfect to their requirements. We are committed to providing our clients with the solutions they need to succeed digitally.</p>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="visionRightDiv">

                <div className="visionLeftImg" 
                // data-aos="fade-down-left" data-aos-once="true" data-aos-duration="800"
                >

                  <Image height={0} width={0} loading="lazy" src={ourVision} alt="" className='winnerTeamImg' />

                </div>

                <div data-aos="fade-left" data-aos-once="true" data-aos-duration="800">

                  <Image height={0} width={0} loading="lazy" src={trianglePattern} alt="trianglePattern" className='trianglePattern2' />
                </div>

                <Image height={0} width={0} loading="lazy" src={dotsPattern} alt="dotsPattern" className='dotsPattern2' />

              </div>
            </div>
          </div>
        </div>

      </section>

      <section id='mission' className='container'>
        <div className="row">

          <div className="col-sm-12 col-md-12 col-lg-6">

            <div className="missionLeftDiv">
              <div className="missionImg" 
              // data-aos="fade-down-right" data-aos-once="true" data-aos-duration="800"
              >

                <Image height={0} width={0} loading="lazy" src={ourMission} alt="" />
              </div>

              <Image height={0} width={0} loading="lazy" src={trianglePattern} alt="trianglePattern" className='trianglePattern' data-aos="fade-right" data-aos-once="true" data-aos-duration="800" data-aos-delay="50" />
              <Image height={0} width={0} loading="lazy" src={dotsPattern} alt="dotsPattern" className='dotsPattern' />
            </div>


          </div>

          <div className="col-sm-12 col-md-12 col-lg-6">

            <div className="missionRightDiv">
              <span className="common_span">Our  <span>Mission</span></span>
              <h3 className='comman_Headlines'>Fueling <span>Business Success</span> with Innovative <span> IT and Digital </span> Solutions </h3>

              <p className='firstP comman_para'>Our primary mission is to help our clients grow their businesses by providing modern technology and expertise in Mobile Application Development, Website Development, UX/UI Design, IT consulting, and Digital Marketing solutions . </p>

              <p className='comman_para'>We are dedicated to giving exceptional IT Solutions that meet and exceed our clients' expectations for excellence and creativity.</p>
            </div>

          </div>

        </div>
      </section>

      <section id="values" >
        <div className="container">

          <div className="row">

            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="valuesLeftDiv">
                <span className='common_span'>Our <span>Values</span> </span>
                <h3 className='comman_Headlines'>Where Integrity  Meets <span> Innovation, and Diversity </span> Shapes Success</h3>

                <div className="valuesList">

                  <span className='firstP'> <BsCheckCircle color='black' /> Integrity, quality, creativity, collaboration, customer focus, continuous improvement, and diversity and inclusion are all important to us.</span>

                  <span> <BsCheckCircle color='black' /> We conduct ourselves in an honest and ethical manner.</span>

                  <span> <BsCheckCircle color='black' /> We encourage innovation and collaborate with our clients.</span>

                  <span> <BsCheckCircle color='black' /> We prioritize our customers' needs and goals.</span>

                  <span> <BsCheckCircle color='black' /> We are dedicated to ongoing development and learning.</span>

                  <span> <BsCheckCircle color='black' /> We value diversity and strive to foster an inclusive culture.</span>


                </div>
                <Link href='/hire-us'><button className="homeCommon_btn" data-aos="fade-up" data-aos-once="true" data-aos-duration="800">Hire Us</button></Link>

              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="valuesRightDiv" >

                <div className="valuesLeftImg" 
                // data-aos="fade-down-left" data-aos-once="true" data-aos-duration="800"
                >

                  <Image height={0} width={0} loading="lazy" src={ourValues} alt="" className='winnerTeamImg' />

                </div>

                <div data-aos="fade-left" data-aos-once="true" data-aos-duration="800">
                  <Image height={0} width={0} loading="lazy" src={trianglePattern} alt="trianglePattern" className='trianglePattern2' />
                </div>
                <Image height={0} width={0} loading="lazy" src={dotsPattern} alt="dotsPattern" className='dotsPattern2' />
              </div>
            </div>
          </div>
        </div>

      </section>

      <WorkChain />

      <Team />

      <Testimonials />

    </>
  )
}

export default AboutUs
