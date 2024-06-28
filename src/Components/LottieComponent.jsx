'use client'
import React from 'react'
import Lottie from 'react-lottie-player'
import helloText from '../../src/Components/animatedText.json'
import getTouch from '../../src/Asset/Images/getTouch.webp'
import Link from 'next/link'
import { BiRightArrowCircle } from 'react-icons/bi'

const LottieComponent = () => {
    return (
        <section className='webDevContact'>
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
        </section>
    )
}

export default LottieComponent
