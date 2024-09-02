import Image from 'next/image'
import React from 'react'
import playStoreImg from '../Asset/Images/Play store.svg'
import iosStoreImg from '../Asset/Images/iOS-Store.svg'
import webImg from '../Asset/Images/internet_6104988.svg'
import Link from 'next/link'

const PortfolioSection = ({ title, headline, para, playStore, playStore2, iosStore, web, sectionImg, reverseSection, android, android2, ios, webLink, androidName, androidName2 }) => {
    return (
        <>
            <section className='portfolio container'>
                <div className={`row ${reverseSection ? 'flex-row-reverse' : ''}`}>
                    <div className="col-lg-6 textBox">
                        <div className="textWrapper">
                            <span className='common_span'>{title}</span>
                            <span className='commonHeadlines'>{headline}</span>
                            <p className='comman_para'>{para}</p>

                            <div className="storesWrapper">
                                {
                                    playStore ? <Link href={android} target='_blank'>
                                        <div>

                                            <span>
                                                <Image src={playStoreImg} height={0} width={0} alt="make apps supported on play store with best web development company WRTeam kutch" className='playStore' />
                                            </span>
                                            <span>{androidName === 'User' ? 'User' : 'Android'}</span>
                                        </div>
                                    </Link>
                                        : ""
                                }
                                {
                                    playStore2 ? <Link href={android2} target='_blank'>
                                        <div>

                                            <span>
                                                <Image src={playStoreImg} height={0} width={0} alt="make apps supported on play store with best web development company WRTeam kutch" className='playStore' />
                                            </span>
                                            <span>{androidName2 === 'Doctor' ? 'Doctor' : 'Android'}</span>
                                        </div>
                                    </Link>
                                        : ""
                                }

                                {
                                    iosStore ? <Link href={ios} target='_blank'>
                                        <div>
                                            <span>
                                                <Image src={iosStoreImg} height={0} width={0} alt="make apps supported on  IOS/apple store with best web development company WRTeam kutch" />
                                            </span>
                                            <span>iOS</span>
                                        </div>
                                    </Link>
                                        : ""
                                }
                                {
                                    web ? <Link href={webLink} target='_blank'>
                                        <div>
                                            <span>
                                                <Image src={webImg} height={0} width={0} alt="make a website with the best web developer at WRTeam bhuj" />
                                            </span>
                                            <span>Web</span>
                                        </div>
                                    </Link>
                                        : ""
                                }


                            </div>
                        </div>


                    </div>
                    <div className="col-lg-6 portfolioProductImgDiv">
                        <Image src={sectionImg} height={0} width={0} className='sectionImg' alt='sectionImg' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default PortfolioSection
