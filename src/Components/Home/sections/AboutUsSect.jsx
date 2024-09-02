import React from 'react'
import Link from 'next/link'


import aboutImg1 from '../../../Asset/Images/AboutImage.webp'
import aboutImg2 from '../../../Asset/Images/CompanyExperience.webp'
import Image from 'next/image'

const AboutUs = () => {
    return (
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

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6">

                        <div className="aboutRightDiv">
                            <span className="common_span">About <span>WRTeam</span></span>
                            <h2 className='comman_Healines'>We are Committed to Providing our <span>Clients</span> with End-to-End <span>App and Website</span> Solutions.</h2>

                            <p className='firstP common_para'>WRTeam has experience of more than 7 years as a software development company, our experienced web and app developers deliver results that reach all your requirements
                                .</p>

                            <p className='common_para'>WRTeam is a team of web developers & app developers who are creative, dedicated, and experts in full stack development and UI/UX, using advanced technologies like Laravel, Flutter, Figma, etc.</p>

                            <div className="discover" data-aos="fade-up" data-aos-once="true" data-aos-duration="800">
                                <Link href='about-us'>  <button className='homeCommon_btn'>Discover More</button></Link>
                                {/* <span className='hoverArrSpan'>Let's Talk About Idea < BsArrowRightCircle className='discRightArr' /></span> */}
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default AboutUs
