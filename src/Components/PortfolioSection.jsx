import Image from 'next/image'
import React from 'react'
import playStoreImg from '../Asset/Images/Play store.svg'
import iosStoreImg from '../Asset/Images/iOS-Store.svg'
import webImg from '../Asset/Images/internet_6104988.svg'

const PortfolioSection = ({ title, headline, para, playStore, iosStore, web, sectionImg, reverseSection }) => {
    return (
        <>
            <section className='portfolio container'>
                <div className={`row ${reverseSection ? 'flex-row-reverse' : ''}`}>
                    <div className="col-lg-6 textBox">
                        <div className="textWrapper">
                            <span className='common_span'>eShop</span>
                            <span className='commonHeadlines'>Hipster ipsum tattooed brunch I'm baby. Prism poutine pbr&b cardigan.</span>
                            <p className='comman_para'>Lorem ipsum dolor sit amet consectetur. Faucibus non mauris risus enim sed. Lectus fusce elit duis dignissim aliquet nisl vitae. Eget sit nisi vulputate enim sem. Facilisi tincidunt donec interdum in in eros quisque consectetur sit. Sagittis purus velit amet risus egestas. Pellentesque pharetra blandit fringilla volutpat tristique sit. Sit euismod praesent volutpat eu et. Id egestas dictum cursus purus morbi semper praesent quam.</p>
                        </div>

                        <div className="storesWrapper">
                            {
                                playStore ? <div>

                                    <span>
                                        <Image src={playStoreImg} height={0} width={0} alt="playStore" className='playStore' />
                                    </span>
                                    <span>Android</span>
                                </div> : ""
                            }

                            {
                                iosStore ? <div>
                                    <span>
                                        <Image src={iosStoreImg} height={0} width={0} alt="ioS-Store" />
                                    </span>
                                    <span>iOS</span>
                                </div> : ""
                            }
                            {
                                web ? <div>
                                    <span>
                                        <Image src={webImg} height={0} width={0} alt="ioS-Store" />
                                    </span>
                                    <span>Web</span>
                                </div> : ""
                            }


                        </div>
                    </div>
                    <div className="col-lg-6">
                        <Image src={sectionImg} height={0} width={0} className='sectionImg' alt='sectionImg' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default PortfolioSection
