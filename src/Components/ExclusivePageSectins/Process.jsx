import React from 'react'
import Image from 'next/image'
import icon1 from '../../Asset/Images/exclusiveLicensePage/process1.png'
import icon2 from '../../Asset/Images/exclusiveLicensePage/process2.png'
import icon3 from '../../Asset/Images/exclusiveLicensePage/process3.png'
import icon4 from '../../Asset/Images/exclusiveLicensePage/process4.png'
import arrowImg from '../../Asset/Images/exclusiveLicensePage/arrowImg.png'

const Process = () => {

    const Card2Data = [
        {
            id: 0,
            img: icon1,
            title: "Contact Us",
            desc: "Reach out via our form or email Support@wrteam.in",
        },
        {
            id: 1,
            img: icon2,
            title: "Schedule a Meeting",
            desc: "Discuss details and requirements with us.",
        },
        {
            id: 2,
            img: icon3,
            title: "Get a Quote",
            desc: "Receive a customized quote after the meeting.",
        },
        {
            id: 3,
            img: icon4,
            title: "Make Payment",
            desc: "Review the contract, pay, and get your license.",
        },
    ]

    return (
        <div className='processSect'>
            <section id='success'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="hireUpperDiv flex_column">
                                <span className="common_span">
                                    <span>Process To</span> Buy
                                </span>
                                <span className='comman_Headlines' >How to <span>Secure</span> Your Exclusive <span>License</span></span>

                                <span className='comman_para'>Follow these detailed steps to get started with your exclusive license, ensuring you
                                    effectively utilize all the benefits and opportunities it offers, and set
                                    yourself up for maximum success.</span>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12 lowerDiv">

                            <div className="row successCards">
                                <Image src={arrowImg} height={0} width={0} alt='arrow' className='arrow1' />
                                <Image src={arrowImg} height={0} width={0} alt='arrow' className='arrow2' />
                                <Image src={arrowImg} height={0} width={0} alt='arrow' className='arrow3' />
                                {
                                    Card2Data.map((e) => {
                                        return <div className="col-sm-12 col-md-6 col-lg-3" key={e.id}>
                                            <div className="card">
                                                <span className=''> <Image height={0} width={0} loading="lazy" className="card-img-top" src={e.img} alt="Card image cap" /> </span>
                                                <div className="card-body ">
                                                    <h5 className="card-title">{e.title}</h5>
                                                    <p className="card-text">{e.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Process
