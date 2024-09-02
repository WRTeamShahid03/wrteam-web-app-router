'use client'
import React from 'react'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa6'
import Link from 'next/link'

const HeroSect = ({ heroSectData }) => {

    const data = heroSectData && heroSectData[0];

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
                                            <span className='comman_Headlines'>
                                                {data?.title}
                                            </span>
                                        </div>
                                        <div>
                                            <span className='comman_para' dangerouslySetInnerHTML={{ __html: data?.description }} ></span>
                                        </div>
                                        <div>
                                            <div className='commonTextBtns'>
                                                <Link href={'#comesWithSection'}> <button className='productCommonBtn'>Explore Demo</button></Link>
                                                <Link href={'#licenceSection'}> <button className='productCommonBtn buyBtn'>Buy Now</button></Link>
                                                {/* <Link href={''}>
                                                    <div className='exploreDiv'>
                                                        <span className='playerBtn'><FaPlay />
                                                        </span>
                                                        <div className='textDiv'>
                                                            <span>Explore</span>
                                                            <span>Tutorial Video</span>
                                                        </div>
                                                    </div>
                                                </Link> */}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-12 bgLines">
                            </div>
                            <div className="col-12 productImgsDiv">
                                <div>
                                    <Image src={data?.image_url} className='adminImg' height={0} width={0} alt='productImg1' />
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
