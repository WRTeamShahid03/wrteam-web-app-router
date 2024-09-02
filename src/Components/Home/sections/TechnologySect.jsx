import React from 'react'
import Image from 'next/image'

import techBg from '../../../Asset/Images/TechnologyImage.webp'
import flutterTech from '../../../Asset/Icons/FlutterColor.png'
import react from '../../../Asset/Icons/ReactColor.png'
import vue from '../../../Asset/Icons/VueColor.png'
import nextjs from '../../../Asset/Icons/nextjs-icon.svg'
import laravel from '../../../Asset/Icons/Laravel.svg'
import android from '../../../Asset/Icons/Android.svg'
import ios from '../../../Asset/Icons/iOS.svg'

const TechnologySect = () => {


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
        <section id="tech">
            <div className="techWrapper container">
                <div className="techUpperDiv">
                    <div className="techContent">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="techHeadlines">
                                    <h3 className='common_span'>Technology <span> We Use</span></h3>
                                    <h4 className='common_Headlines'>Our Developers Have a <span>Strong Grip</span> on Advanced <span>Technologies</span> to Enhance Your Website & App. </h4>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="techPara">
                                    <p>We are a team of web developers specialized in front-end, back-end, & full stack development using advanced technologies like laravel, Vue JS, Next JS, etc. Our team also has app developers specialized in making Android, iOS, & flutter applications.</p>
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
    )
}

export default TechnologySect
