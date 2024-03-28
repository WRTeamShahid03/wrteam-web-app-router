import React, { useCallback, useEffect, useRef, useState } from 'react'
import { BsArrowRightCircle, BsFacebook, BsLinkedin, BsWhatsapp, BsYoutube } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai';
import { LiaStarSolid } from 'react-icons/lia';

import AOS from 'aos';
import 'aos/dist/aos.css';


//Images
// import rightDivImg from '../../Asset/Images/Hero Img.png'
import rightDivImg from '../../Asset/Images/heroImg.webp'
import likeIcon from "../../Asset/Icons/Like.png"
import checkIcon from "../../Asset/Icons/ic_check.png"
import team1 from '../../Asset/Icons/team1.png'
import team2 from '../../Asset/Icons/team2.png'
import team3 from '../../Asset/Icons/team3.png'
import team4 from '../../Asset/Icons/team4.png'
import arrow from '../../Asset/Icons/Arrow.svg'
import aboutImg1 from '../../Asset/Images/AboutImage.webp'
import aboutImg2 from '../../Asset/Images/bg-image.png'
import winnerImg1 from '../../Asset/Images/winnerImage.webp'
import trophy from '../../Asset/Images/TrophyImage.webp'
import appProduct from '../../Asset/Images/AppImage.webp'
import webProduct from '../../Asset/Images/WebImage.webp'
import appProIcon from '../../Asset/Images/appProIcon.png'
import webProIcon from '../../Asset/Images/webProIcon.png'
import servWebIcon from '../../Asset/Icons/servWeb.svg'
import servwebHover from '../../Asset/Icons/webHover.svg'
import servAppIcon from '../../Asset/Icons/servApp.svg'
import appHover from '../../Asset/Icons/appHover.svg'
import uiIcon from '../../Asset/Icons/ui-ux_icone.svg'
import uiHover from '../../Asset/Icons/uiHover.svg'
import digitalIcon from '../../Asset/Icons/digital_marketing.svg'
import digitalHover from '../../Asset/Icons/digitalHover.svg'
import techBg from '../../Asset/Images/TechnologyImage.png'
import flutterTech from '../../Asset/Icons/FlutterColor.png'
import react from '../../Asset/Icons/ReactColor.png'
import vue from '../../Asset/Icons/VueColor.png'
import nextjs from '../../Asset/Icons/nextjs-icon.svg'
import laravel from '../../Asset/Icons/Laravel.svg'
import android from '../../Asset/Icons/Android.svg'
import ios from '../../Asset/Icons/iOS.svg'
import heroLine from '../../Asset/Images/Hero_Line.png'


// import required modules
import Counter from '../Counter';
import WorkChain from '../WorkChain';
import Testimonials from '../Testimonials';
import Link from 'next/link';
import Image from 'next/image';
import EnvantoSection from '../EnvantoSection';
import EnvantoProfileSection from '../EnvantoProfileSection';


const Home = () => {

    // const [scrollValue, setScrollValue] = useState(0);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollY = window.scrollY;
    //         // console.log('Scroll position:', scrollY);
    //         setScrollValue(scrollY);
    //     };

    //     // Add event listener for scroll
    //     window.addEventListener('scroll', handleScroll);

    //     // Cleanup the event listener on component unmount
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // useEffect(() => {
    //     // Change body background color based on scroll value
    //     document.body.style.transition = 'background-color 0.5s ease';
    //     document.body.style.backgroundColor =
    //         scrollValue >= 1150 && scrollValue < 2580 ? '#81B441' : '';
    //     document.body.style.position = 'relative';
    //     document.body.style.zIndex = '200';

    //     // Disable user interactions if scroll value is within the specified range

    //     if (scrollValue >= 1150 && scrollValue < 2580) {
    //         document.body.style.pointerEvents = 'none';
    //     } else {
    //         document.body.style.pointerEvents = '';
    //     }



    // }, [scrollValue]);


    useEffect(() => {
        AOS.init();
    }, []);

    const servCardData = [
        {
            id: 1,
            title: "Web Development",
            desc: "Build a user-friendly website that showcases your business online.",
            icon: servWebIcon,
            alt: 'best web development service provider BHUJ-GUJRAT-INDIA'
        },
        {
            id: 2,
            title: "App Development",
            desc: "Create a custom app for your business that makes your tasks easier.",
            icon: servWebIcon,
            alt: 'best affordable mobile app creator WRTeam bhuj-gujrat-india'
        },
        {
            id: 3,
            title: "UI/UX Services",
            desc: "Design and develop engaging and user-friendly websites and apps.",
            icon: servWebIcon,
            alt: 'a large variety of  trendy & innovative customizable UI / UX designs-WRTeam bhuj'
        },
        {
            id: 4,
            title: "Digital Marketing",
            desc: "Promote your business online, reach new customers and increase sales.",
            icon: servWebIcon,
            alt: 'best digital marketing agency to grow your business rapidly-WRTeam(Bhuj)'
        },
    ]

    const techCardData = [
        {
            id: 1,
            title: "Flutter",
            icon: flutterTech,
            alt: 'top Flutter technology software development service provider-WRTeam(bhuj)'
        },
        {
            id: 2,
            title: "React Js",
            icon: react,
            alt: 'react color experts-WRTeam(bhuj)'
        },
        {
            id: 3,
            title: "Vue JS",
            icon: vue,
            alt: 'tools like Vuecolor experts-WRTeam(bhuj)'
        },
        {
            id: 4,
            title: "Next JS",
            icon: nextjs,
            alt: 'best next.js software developer-WRTeam(bhuj)'
        },
        {
            id: 5,
            title: "Laravel",
            icon: laravel,
            alt: 'best Laravel technology software developer-WRTeam(bhuj)'
        },
        {
            id: 6,
            title: "Android",
            icon: android,
            alt: 'best Android app development service provider-WRTeam(bhuj)'
        },
        {
            id: 7,
            title: "iOS",
            icon: ios,
            alt: 'best IOS app development service provider-WRTEam (Bhuj)'
        },

    ]

    return (
        <>
            <div className="homePageWrapper">

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
                                            <h1 id='herocont_headline' className='comman_Headlines'>Unlock Your <span>Business</span> Potential with an Expert <span>IT Company</span></h1>

                                            <p>Optimize Your Business Operations Using WRTeam's Powerful App and Website Solutions & Streamlined Workflows. We are committed to providing our clients with End-to-End App and Website Solutions.</p>

                                            <div className="followDiv">
                                                <Link href='/about-us'> <button className='homeCommon_btn'>About Us</button></Link>

                                                <div className="follIcons">

                                                    <span>Follow Us</span>
                                                    <span className='heroContIcons'>
                                                        <Link target='_blank' href="https://www.facebook.com/wrteam.in"><BsFacebook size={20} /></Link>
                                                        <Link target='_blank' href="https://www.instagram.com/wrteam.in/"><AiFillInstagram size={24} /></Link>
                                                        <Link target='_blank' href="https://www.linkedin.com/company/wrteam/"><BsLinkedin size={20} /> </Link>
                                                        <Link target='_blank' href="https://www.youtube.com/channel/UCLt9XRUuiWsqKng4681_6cQ"><BsYoutube size={25} /> </Link>
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
                                                    <span>(2k+) <span className='customerRev'>Customer Reviews </span></span>
                                                </div>
                                            </div>

                                            <div className="floatingCard2">
                                                <div className="fcardImg">
                                                    <Image height={0} width={0} loading="lazy" src={checkIcon} alt="" />
                                                </div>
                                                <div className="floatCardContent">
                                                    <span className='heroStars'>Sales Count</span>
                                                    <span className=''>(16k+) <span className='customerRev'>Products </span></span>
                                                </div>
                                            </div>

                                            <div className="floatingCard3">
                                                <div className="floCard3Content">
                                                    <span>Our Creative Team</span>
                                                    <span className='teamIcons'>
                                                        <Image height={0} width={0} loading="lazy" src={team1} alt="" />
                                                        <Image height={0} width={0} loading="lazy" src={team2} alt="" />
                                                        <Image height={0} width={0} loading="lazy" src={team3} alt="" />
                                                        <Image height={0} width={0} loading="lazy" src={team4} alt="" />
                                                        <span className='teamMem'>40+</span>
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
                {/* homeHeroSect ends here  */}


                <section id='aboutUs' className='container'>
                    <div className="aboutWrapper">
                        <h2 id='wrTeam' data-fill-text="WRTEAM">WRTEAM</h2>

                        <div className="row">

                            <div className="col-sm-12 col-md-12 col-lg-6">

                                <div className="aboutLeftDiv">
                                    <div className="aboutImg"
                                    // data-aos="fade-down-right" data-aos-once="true" data-aos-duration="800"
                                    >

                                        <Image height={0} width={0} loading="lazy" src={aboutImg1} alt="expert, experienced & skilled  software developers for your business" />
                                        <div className="aboutSmImg" style={{
                                            background: `url(${aboutImg2.src})`,
                                            backgroundSize: 'cover'
                                        }}>
                                            <div className="experience">
                                                <span className='experNum' style={{
                                                    background: `url(${aboutImg2.src})`,
                                                    backgroundSize: 'cover',
                                                    backgroundClip: "text",
                                                    WebkitBackgroundClip: "text"
                                                }}>6+</span>
                                                <span className='experNum' style={{
                                                    background: `url(${aboutImg2.src})`,
                                                    backgroundSize: 'cover',
                                                    backgroundClip: "text",
                                                    WebkitBackgroundClip: "text"
                                                }}>Years</span>
                                                <span>Experience</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-6">

                                <div className="aboutRightDiv">
                                    <span className="common_span">About <span>WRTeam</span></span>
                                    <h2 className='comman_Healines'>Deliver <span>Business solution </span>  with The Goal Of <span>Long-Term </span> Relationships</h2>

                                    <p className='firstP common_para'>WRTeam is an award-winning Web & App Development & IT consulting company, serving clients across the Globe.</p>

                                    <p className='common_para'>We have 6+ Years of market business experience which could be more chances of success to connect with us.</p>

                                    <p className='common_para'>WRTeam is a creative and dedicated group of developers who are mastered in Mobile & Web Development with expertise in delivering quality solutions to customers across the globe.</p>

                                    <div className="discover" data-aos="fade-up" data-aos-once="true" data-aos-duration="800">
                                        <Link href='about-us'>  <button className='homeCommon_btn'>Discover More</button></Link>
                                        {/* <span className='hoverArrSpan'>Let's Talk About Idea < BsArrowRightCircle className='discRightArr' /></span> */}
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>
                {/* aboutUs ends here  */}

                {/* <div className={`envantoProfile`}
                // style={{
                //     zIndex: scrollValue >= 1150 && scrollValue < 2580 ? '100000' : '1'
                // }}
                >
                    <EnvantoSection />
                </div> */}


                <section id="winner" className='container'>
                    <div className="winnerWrapper">

                        <div className="row">

                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="winnLeftDiv">
                                    <span className='common_span'>Achievement <span>on Envato</span> </span>
                                    <h2 className='comman_Healines'><span>Meet the Most Creative Team </span> Award-Winning Web & App Development</h2>

                                    <p className='firstP comman_para'>Meet the winner of the 'Most Creative' competition on codecanyon! WRTeam is proud of our team members who came out on top with their outstanding creativity and innovative ideas.</p>

                                    <p className='common_para'> We value innovative thinking and creativity, and our staff is always pushing the envelope and bringing new ideas to the fore. Moreover, this remarkable achievement is a testament to our team's dedication and passion for excellence.</p>

                                    <p className='common_para'>As we continue to evolve and innovate, we look forward to inspiring others in the industry with our ingenuity.</p>

                                    <Link href='https://1.envato.market/R5YR7b' target='_blank'> <button className="homeCommon_btn" data-aos="fade-up" data-aos-once="true" data-aos-duration="800">Read More</button></Link>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="winnRightDiv"
                                // data-aos="fade-down-left" data-aos-once="true" data-aos-duration="800"
                                >

                                    <div className="winnerLeftImg">

                                        <Image height={0} width={0} loading="lazy" src={winnerImg1} alt="team of creative and innovative designers using most advanced tools & technology" className='winnerTeamImg' />
                                        <div className="winnerSmImg" >
                                            <Image height={0} width={0} loading="lazy" src={trophy} alt="" />

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <h2 id='winnText' data-fill-text="WINNER">WINNER</h2>
                    </div>

                </section>
                {/* winner ends  */}


                <Counter />
                {/* counter ends  */}


                <section id='solutions'>

                    <div className="soluHeadlines">
                        <h2 className='common_span'>Our <span>Solutions</span></h2>
                        <h3 className='comman_Healines'>Empowering Business <span>Growth </span>  with <span>Personalized </span>  Products</h3>
                        <p >Here is our wide variety of digital products or solutions for your businesses such as categories of e-commerce apps and websites, educational apps and websites, gaming apps and websites, and many more business digital products.</p>
                    </div>

                    <div className="productsCardsWrapper container">

                        <div className="row">

                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="mobilePro"
                                // data-aos="fade-up" data-aos-once="true" data-aos-duration="800"
                                >

                                    <div className="mobProImg" style={{
                                        background: `url(${appProduct.src})`,
                                        backgroundRepeat: "no-repeat"
                                    }}>
                                        <Image height={0} width={0} loading="lazy" src={appProduct} alt="create a mobile app for both Android & ios with WRTeam(bhuj) experts" className='solu_product_img' />
                                    </div>
                                    <div className="mobProContent">
                                        <span className='mobProIcon'><Image height={0} width={0} loading="lazy" src={appProIcon} alt="" /></span>
                                        <h4 className='mobProText'>Mobile App Products</h4>
                                        <Link href='/products/app-products'><button className='hoverArrSpan homeCommon_btn'>Discover More < BsArrowRightCircle className='discRightArr' /></button></Link>
                                    </div>

                                </div>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-6 mobCards2">
                                <div className="mobilePro"
                                // data-aos="fade-down" data-aos-once="true" data-aos-duration="800"
                                >

                                    <div className="mobProImg webProImg" style={{
                                        background: `url(${webProduct.src})`,
                                        backgroundRepeat: "no-repeat"
                                    }}>
                                        <Image height={0} width={0} loading="lazy" src={webProduct} alt="web development service for every type of website with WRTeam(bhuj) experts" className='solu_product_img' />
                                    </div>
                                    <div className="mobProContent">
                                        <span className='mobProIcon'><Image height={0} width={0} loading="lazy" src={webProIcon} alt="" /></span>
                                        <h4 className='mobProText'>Web App Products</h4>
                                        <Link href='/products/web-products'> <button className='hoverArrSpan homeCommon_btn'>Discover More < BsArrowRightCircle className='discRightArr' /></button></Link>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                {/* solutions ends  */}

                <section id="services" className='container'>

                    <div className="serviesWrapper">

                        <div className="row">

                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="servleftDiv">

                                    <Link href='/services/web-development'>
                                        <div className="servCard" id='lightGrnCard'
                                        // data-aos="fade-down" data-aos-once="true" data-aos-duration="800"
                                        >
                                            <span className="servImg lightgrnServ">
                                                <Image height={0} width={0} loading="lazy" src={servWebIcon} alt={servCardData[0].alt} className='servNorImg' />
                                                <Image height={0} width={0} loading="lazy" src={servwebHover} alt={servCardData[0].alt} className='servHoverImg' />
                                            </span>
                                            <div className="servContent">
                                                <h4 className='servHeadline'>{servCardData[0].title}</h4>
                                                <span className='servText'>{servCardData[0].desc}</span>
                                                <span className='hoverArrSpan'>Explore Service < BsArrowRightCircle className='discRightArr' /></span>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link href='/services/app-development'>
                                        <div className="servCard servCardDown" id='orangeCard'
                                        // data-aos="fade-down" data-aos-once="true" data-aos-duration="800"
                                        >
                                            <span className="servImg orangeServ">
                                                <Image height={0} width={0} loading="lazy" src={servAppIcon} alt={servCardData[1].alt} className='servNorImg' />
                                                <Image height={0} width={0} loading="lazy" src={appHover} alt={servCardData[1].alt} className='servHoverImg' />
                                            </span>
                                            <div className="servContent">
                                                <h4 className='servHeadline'>{servCardData[1].title}</h4>
                                                <span className='servText'>{servCardData[1].desc}</span>
                                                <span className='hoverArrSpan'>Explore Service < BsArrowRightCircle className='discRightArr' /></span>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link href='/services/ui-ux-design'>
                                        <div className="servCard" id='crimsonCard'
                                        // data-aos="fade-down" data-aos-once="true" data-aos-duration="800"
                                        >
                                            <span className="servImg crimsonServ">
                                                <Image height={0} width={0} loading="lazy" src={uiIcon} alt={servCardData[2].alt} className='servNorImg' />
                                                <Image height={0} width={0} loading="lazy" src={uiHover} alt={servCardData[2].alt} className='servHoverImg' />
                                            </span>
                                            <div className="servContent">
                                                <h4 className='servHeadline'>{servCardData[2].title}</h4>
                                                <span className='servText'>{servCardData[2].desc}</span>
                                                <span className='hoverArrSpan'>Explore Service < BsArrowRightCircle className='discRightArr' /></span>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link href='/services/digital-marketing'>
                                        <div className="servCard servCardDown" id='greenCard'
                                        // data-aos="fade-down" data-aos-once="true" data-aos-duration="800"
                                        >
                                            <span className="servImg greenServ">
                                                <Image height={0} width={0} loading="lazy" src={digitalIcon} alt={servCardData[3].alt} className='servNorImg' />
                                                <Image height={0} width={0} loading="lazy" src={digitalHover} alt={servCardData[3].alt} className='servHoverImg' />
                                            </span>
                                            <div className="servContent">
                                                <h4 className='servHeadline'>{servCardData[3].title}</h4>
                                                <span className='servText'>{servCardData[3].desc}</span>
                                                <span className='hoverArrSpan'>Explore Service < BsArrowRightCircle className='discRightArr' /></span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="servrightDiv">
                                    <h2 className='common_span'>Best <span>  IT Services</span> </h2>
                                    <h3 className='common_Headlines'> <span>Innovate, Implement, Succeed:</span> Leverage Our IT Services to <span>Turn Ideas</span> into Reality</h3>

                                    <p className='firstP common_para'>For skyrocket business growth, the right IT service is more important from building engaging websites and user-friendly apps to crafting stunning designs and boosting your online presence. </p>

                                    <p className='firstP common_para'> Our team of experts in app development, web development, UI/UX design, IT consulting, and digital marketing can help you achieve your business goals.</p>

                                    <p className='firstP common_para'>Get ready for your business to shine! Our teamwork-based strategy ensures success with innovative solutions and customer satisfaction. </p>

                                    <p className='firstP common_para'>Let's revamp your online presence and lead your business to extraordinary success and growth!</p>
                                </div>
                            </div>

                        </div>




                    </div>

                </section>
                {/* services ends  */}


                <section id="tech">
                    <div className="techWrapper container">
                        <div className="techUpperDiv">
                            <div className="techContent">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-6">
                                        <div className="techHeadlines">
                                            <h3 className='common_span'>Technology <span> We Use</span></h3>
                                            <h4 className='common_Headlines'>We Embrace Advanced & Latest <span>Technologies</span> to Enhance Your Projects</h4>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg-6">
                                        <div className="techPara">
                                            <p>In today's rapidly changing digital world, staying up-to-date with the latest technologies and tools is important. At WRTeam, we pride ourselves on using the latest technologies across our different services and products.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="techbg" style={{
                                    background: `url(${techBg.src})`,
                                    backgroundSize: 'cover'
                                }}>
                                    <div className="techBottDiv" >
                                        <div className="row">
                                            {
                                                techCardData.map((ele, index) => {
                                                    return (
                                                        <div className="col-sm-6 col-md-6 col-lg-1" key={index}>
                                                            <div className="techMainCard"
                                                                // data-aos="slide-left" data-aos-once="true" data-aos-duration="800"
                                                                key={ele.icon}>
                                                                <div className="techCard">
                                                                    <Image height={0} width={0} loading="lazy" src={ele.icon} alt={ele.alt} className='techIcons' />
                                                                </div>
                                                                <span className="colorDot">
                                                                    <span className='darkDot'></span>
                                                                </span>
                                                                <span className='techName'>{ele.title}</span>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
                {/* tech ends */}

                <WorkChain />
                {/* workChain ends  */}

                <EnvantoProfileSection />

                <Testimonials />
                {/* testimonials ends  */}
                {/* <div className="backDrop" style={{ opacity: scrollValue >= 1150 && scrollValue < 2580 ? '1' : '0' }}></div> */}
            </div>

        </>
    )
}

export default Home