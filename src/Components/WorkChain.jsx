import React from 'react'
import workImg1 from '../../src/Asset/Images/work_chain_1.png'
import workImg2 from '../../src/Asset/Images/work_chain_2.png'
import workImg3 from '../../src/Asset/Images/work_chain_3.png'
import workImg4 from '../../src/Asset/Images/work_chain_4.png'
import workLines from '../../src/Asset/Images/Line.png'
import Image from 'next/image'

const WorkChain = () => {

    return (
        <section id="workChain" className='container'>

            <div className="workWrapper">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="workUpperDiv">
                            <h4 className='common_span'> Our Work<span> Chain</span></h4>
                            <span className='workHeadlines'>From Concept to Creation <span>Simplifying Your Project Journey</span></span>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="workBottDiv">
                            <div className="workCardsWrapper" style={{
                                background: `url(${workLines.src})`,
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}>

                                <div className="worklowerRow">

                                    <div className="row">

                                        <div className="col-sm-12 col-md-6 col-lg-3">
                                            <div className="workCard" id='wCard1'
                                            // data-aos="fade-down" data-aos-once="true" data-aos-duration="800"
                                            >
                                                <div className="custom">
                                                    <span className='workNumb num1'>1</span>
                                                    <Image height={0} width={0} loading="lazy" src={workImg1} alt="best web development company-WRTeam bhuj-kutch" className='workImg' />
                                                </div>
                                                <h5 className='workTitle'>Choose a service</h5>
                                                <span className='workDesc'>Choose the service from our list of solutions, Mobile Development, Web Development, UI/UX Design etc.</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-6 col-lg-3">
                                            <div className="workCard workCardReverse" id='wCard2'
                                            // data-aos="fade-up" data-aos-once="true" data-aos-duration="800"
                                            >
                                                <div className="custom">
                                                    <span className='workNumb workRevNumb num2'>2</span>
                                                    <div className="workImgDiv">

                                                        <Image height={0} width={0} loading="lazy" src={workImg2} alt="best mobile app service provider-WRTeam India" className='workImg' />
                                                    </div>
                                                </div>

                                                <div className="wrapper">
                                                    <span className='workDesc'>Connect with our professional experts and have a detailed discussion about your requirements.</span>

                                                    <h5 className='workTitle'>Request a meeting</h5>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-6 col-lg-3">
                                            <div className="workCard" id='wCard3'
                                            // data-aos="fade-down" data-aos-once="true" data-aos-duration="800"
                                            >
                                                <div className="custom">
                                                    <span className='workNumb num3'>3</span>
                                                    <Image height={0} width={0} loading="lazy" src={workImg3} alt="best UI/UX designing servicer provider-WRTeam bhuj gujrat" className='workImg' />
                                                </div>

                                                <h5 className='workTitle'>Start planning</h5>

                                                <span className='workDesc'>Detailed analysis and build a roadmap of what exactly you are looking for.</span>

                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-6 col-lg-3">
                                            <div className="workCard workCardReverse" id='wCard4'
                                            // data-aos="fade-up" data-aos-once="true" data-aos-duration="800"
                                            >
                                                <div className="custom">
                                                    <span className='workNumb workRevNumb num4'>4</span>
                                                    <Image height={0} width={0} loading="lazy" src={workImg4} alt="best digital marketing service provider -WRTeam bhuj gujrat" className='workImg' />
                                                </div>

                                                <div className="wrapper">
                                                    <span className='workDesc'>Time to build real solutions that work for you.</span>

                                                    <h5 className='workTitle'>Let's make it happen</h5>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>




            </div>
        </section >
    )
}

export default WorkChain
