'use client'
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
              <h3 className='comman_Headlines'>Your Work Partner in <span>Transforming</span> Your Vision into Reality.</h3>

              <p className='firstP comman_para'>WRTeam is, a software development company located in Bhuj - India, serving IT services & digital solutions around the globe. </p>

              <p className='comman_para'>We're a team of experienced & expert developers with a specialization in making mobile apps, websites, and digital solutions tailored to your business.</p>

              <p className='comman_para'>WRTeam is the elite author on Envato selling digital solutions ( pre-built source codes) to make applications & websites 5X faster, make websites & apps for e-commerce, hotels & restaurants, real estate, school management, mobile games, etc.</p>

              <p className='comman_para'>WRTeam is the one-stop solution for all your digital needs, WRTeam is your working partner that helps you with its expertise in web & app development, UI/UX designing, digital marketing, etc.</p>
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

                <p className='firstP comman_para'>At WRTeam, we manifest to be the best provider of software solutions including source codes to make apps & websites and services like IT consultation, software development, UI/UX designing, and digital marketing</p>

                <p className='comman_para'> Having a website or app is crucial for business growth, we are committed to providing innovative, stunning, and smooth software solutions that are perfectly made for your business.</p>

                <p className='comman_para'>We aim to be the best IT company known for its creativity, and high-quality software solutions, focussing on client satisfaction.</p>
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
              <h3 className='comman_Headlines'>Bring Change With <span>Best Software</span> Solutions. </h3>

              <p className='firstP comman_para'>We are on a mission to bring revolution in the way of making websites and applications, we make it possible with our easily customizable & error-free source codes.</p>

              <p className='comman_para'>We aim to help businesses enhance their virtual presence with our best software solutions, with a strong focus on client satisfaction and growth.</p>
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
                <h3 className='comman_Headlines'><span>Integrity</span> and <span>Creativity</span> Lead to Success.</h3>

                <div className="valuesList">

                  <span className='firstP'> <BsCheckCircle color='black' /> We act with honesty and integrity</span>

                  <span> <BsCheckCircle color='black' /> We strive for quality and creativity.</span>

                  <span> <BsCheckCircle color='black' /> We work closely with our clients.</span>

                  <span> <BsCheckCircle color='black' /> We put our customers' needs first</span>

                  <span> <BsCheckCircle color='black' /> We are always learning and improving</span>
                  <span> <BsCheckCircle color='black' /> We value diversity and promote inclusion.</span>


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
