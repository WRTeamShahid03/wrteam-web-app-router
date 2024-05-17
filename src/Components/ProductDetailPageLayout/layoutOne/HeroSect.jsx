'use client'
import React from 'react'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa6'
import adminPanelImg from '../../../Asset/Images/product-detail-page/adminPanelImg.png'
import appImg from '../../../Asset/Images/product-detail-page/appImg.png'
import Link from 'next/link'

const HeroSect = () => {
    return (
        <>
            <section className='productHeroSect'>
                <div className="bgLines">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="commonTextWrapper">
                                    <div className="flex_center">
                                        <div>
                                            <span className='comman_Headlines'>Powerful Solution
                                                for <span> Real Estate</span> Company
                                            </span>
                                        </div>
                                        <div>
                                            <span className='comman_para'>
                                                Hipster ipsum tattooed brunch I'm baby. Prism poutine pbr&b cardigan kinfolk tousled beard tote.
                                                Kinfolk tumeric mug literally tousled. Bushwick of meh mumblecore sartorial fanny.
                                            </span>
                                        </div>
                                        <div>
                                            <div className='commonTextBtns'>
                                               <Link href={'/contact-us'}> <button className='productCommonBtn'>Contact Us</button></Link>
                                               <Link href={''}>
                                                <div className='exploreDiv'>
                                                    <span className='playerBtn'><FaPlay />
                                                    </span>
                                                    <div className='textDiv'>
                                                        <span>Explore</span>
                                                        <span>Tutorial Video</span>
                                                    </div>
                                                </div>
                                               </Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-12 bgLines">
                            </div>
                            <div className="col-12 productImgsDiv">
                                <div>
                                    <Image src={adminPanelImg} className='adminImg' height={0} width={0} alt='productImg1' />
                                </div>
                                <div>
                                    <Image src={appImg} className='appImg' height={0} width={0} alt='productImg2' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section >
        </>
    )
}

export default HeroSect
