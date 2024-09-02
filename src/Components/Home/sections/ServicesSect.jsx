import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import servWebIcon from '../../../Asset/Icons/servWeb.svg'
import servwebHover from '../../../Asset/Icons/webHover.svg'
import servAppIcon from '../../../Asset/Icons/servApp.svg'
import appHover from '../../../Asset/Icons/appHover.svg'
import uiIcon from '../../../Asset/Icons/ui-ux_icone.svg'
import uiHover from '../../../Asset/Icons/uiHover.svg'
import digitalIcon from '../../../Asset/Icons/digital_marketing.svg'
import digitalHover from '../../../Asset/Icons/digitalHover.svg'
import { BsArrowRightCircle } from 'react-icons/bs'

const ServicesSect = () => {


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

    return (
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
                            <h3 className='common_Headlines'> <span>Innovate, Implement, Succeed:</span> We Offer Every IT Service You need, all in <span>One Place.</span></h3>

                            <p className='firstP common_para'>In the modern world having a digital presence is crucial, it's necessary to have a business website or app that leads to stronger administration & expansion. Remove limitations of place & time from your business with WRTeam's software services. </p>

                            <p className='firstP common_para'>We offer all software services in one place, from designing a personalized mobile app & website to streamlining your business website & mobile app.</p>

                            <p className='firstP common_para'>Our team has experienced UI/UX designers, web developers, native & flutter mobile app developers, and digital marketers to enhance your digital brand identity. Our experts are committed to delivering the best results and developing lifelong relationships. </p>
                        </div>
                    </div>

                </div>




            </div>

        </section>
    )
}

export default ServicesSect
