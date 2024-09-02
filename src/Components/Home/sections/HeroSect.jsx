import React from 'react'
import rightDivImg from '../../../Asset/Images/heroImg.webp'
import likeIcon from "../../../Asset/Icons/Like.png"
import checkIcon from "../../../Asset/Icons/ic_check.png"
import teamImg from '../../../Asset/Images/teamImg.png'
import arrow from '../../../Asset/Icons/Arrow.svg'
import heroLine from '../../../Asset/Images/Hero_Line.png'
import { AiFillInstagram } from 'react-icons/ai';
import { LiaStarSolid } from 'react-icons/lia';
import { BsFacebook, BsLinkedin, BsYoutube } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'

const HeroSect = () => {

    const scrollToTestimonials = () => {
        const testimonialsSection = document.getElementById('testimonials');
        if (testimonialsSection) {
            testimonialsSection.scrollIntoView({ behavior: 'smooth' });
        }

    }

    return (
        <section id='homeHeroSect' className='container'>

            <div className="heroContainer">
                <div className="heroLines" style={{
                    background: `url(${heroLine.src})`,
                    backgroundSize: 'contain',
                    backgroundPosition: " 24px 186px",
                    backgroundRepeat: "no-repeat",
                }}>

                    <div className="heroContContent">
                        <div className="row">

                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="heroCont-leftDiv">
                                    <span className='mcWinner'>Most Creative Winner!</span>
                                    <h1 id='herocont_headline' className='comman_Headlines'>Streamline Your <span>Business</span> Website and Mobile App with the Best <span>IT Company</span></h1>

                                    <p>Upgrade your business administration with WRTeam. Create a customized and feature-loaded website or mobile app with expert and experienced developers at WRTeam, providing digital solutions tailored to your needs. </p>

                                    <div className="followDiv">
                                        <Link href='/about-us'> <button className='homeCommon_btn'>About Us</button></Link>

                                        <div className="follIcons">

                                            <span>Follow Us</span>
                                            <span className='heroContIcons'>
                                                <Link target='_blank' href={process.env.NEXT_PUBLIC_FACEBOOK}><BsFacebook size={20} /></Link>
                                                <Link target='_blank' href={process.env.NEXT_PUBLIC_INSTAGRAM}><AiFillInstagram size={24} /></Link>
                                                <Link target='_blank' href={process.env.NEXT_PUBLIC_LINKEDIN}><BsLinkedin size={20} /> </Link>
                                                <Link target='_blank' href={process.env.NEXT_PUBLIC_YOUTUBE}><BsYoutube size={25} /> </Link>
                                            </span>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="heroCont-rightDiv"
                                // data-aos="fade-right" data-aos-once="true" data-aos-duration="800" data-aos-delay="50"
                                >
                                    <div className="rightDivImg">
                                        <Image height={0} width={0} loading="lazy" src={rightDivImg} alt="" />
                                    </div>
                                    <div className="floatingCard1">
                                        <div className="fcardImg">
                                            <Image height={0} width={0} loading="lazy" src={likeIcon} alt="" />
                                        </div>
                                        <div className="floatCardContent">
                                            <span className='heroStars'>
                                                <LiaStarSolid size={20} color='#ffa800' />
                                                <LiaStarSolid size={20} color='#ffa800' />
                                                <LiaStarSolid size={20} color='#ffa800' />
                                                <LiaStarSolid size={20} color='#ffa800' />
                                                <LiaStarSolid size={20} color='#ffa800' />
                                            </span>
                                            <span style={{ cursor: 'pointer' }} onClick={() => scrollToTestimonials()}>(2k+) <span className='customerRev'>Customer Reviews </span></span>
                                        </div>
                                    </div>

                                    <div className="floatingCard2">
                                        <div className="fcardImg">
                                            <Image height={0} width={0} loading="lazy" src={checkIcon} alt="" />
                                        </div>
                                        <div className="floatCardContent">
                                            <span className='heroStars'>Sales Count</span>
                                            <span className=''>(17k+) <span className='customerRev'>Products </span></span>
                                        </div>
                                    </div>

                                    <div className="floatingCard3">
                                        <div className="floCard3Content">
                                            <span>Our Creative Team</span>
                                            <span className='teamIcons'>
                                                <Image height={0} width={0} loading="lazy" src={teamImg} alt="" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="arrow" data-aos="fade-down" data-aos-once="true" data-aos-duration="800">
                            <Image height={0} width={0} loading="lazy" src={arrow} alt="" />
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default HeroSect
