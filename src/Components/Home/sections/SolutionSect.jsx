import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


import appProduct from '../../../Asset/Images/AppImage.webp'
import webProduct from '../../../Asset/Images/WebImage.webp'
import appProIcon from '../../../Asset/Images/appProIcon.png'
import webProIcon from '../../../Asset/Images/webProIcon.png'
import { BsArrowRightCircle } from 'react-icons/bs'

const SolutionSect = () => {
    return (
        <section id='solutions'>

            <div className="soluHeadlines">
                <h2 className='common_span'>Our <span>Solutions</span></h2>
                <h3 className='comman_Healines'><span>Digital Solutions</span> We Offer, as the <span> Best Software</span> Development Company.</h3>
                <p >We are serving a huge variety of digital solutions specially designed for various businesses that help to create websites and mobile apps for e-commerce, restaurants, mobile games, etc.</p>
            </div>

            <div className="productsCardsWrapper container">

                <div className="row">

                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="mobilePro"
                        // data-aos="fade-up" data-aos-once="true" data-aos-duration="800"
                        >

                            <div className="mobProImg" style={{
                                background: `url(${appProduct.src})`,
                                backgroundRepeat: "no-repeat"
                            }}>
                                <Image height={0} width={0} loading="lazy" src={appProduct} alt="create a mobile app for both Android & ios with WRTeam(bhuj) experts" className='solu_product_img' />
                            </div>
                            <div className="mobProContent">
                                <span className='mobProIcon'><Image height={0} width={0} loading="lazy" src={appProIcon} alt="" /></span>
                                <h4 className='mobProText'>Mobile App Products</h4>
                                <Link href='/products/app-products'><button className='hoverArrSpan homeCommon_btn'>Discover More < BsArrowRightCircle className='discRightArr' /></button></Link>
                            </div>

                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 mobCards2">
                        <div className="mobilePro"
                        // data-aos="fade-down" data-aos-once="true" data-aos-duration="800"
                        >

                            <div className="mobProImg webProImg" style={{
                                background: `url(${webProduct.src})`,
                                backgroundRepeat: "no-repeat"
                            }}>
                                <Image height={0} width={0} loading="lazy" src={webProduct} alt="web development service for every type of website with WRTeam(bhuj) experts" className='solu_product_img' />
                            </div>
                            <div className="mobProContent">
                                <span className='mobProIcon'><Image height={0} width={0} loading="lazy" src={webProIcon} alt="" /></span>
                                <h4 className='mobProText'>Web App Products</h4>
                                <Link href='/products/web-products'> <button className='hoverArrSpan homeCommon_btn'>Discover More < BsArrowRightCircle className='discRightArr' /></button></Link>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default SolutionSect
