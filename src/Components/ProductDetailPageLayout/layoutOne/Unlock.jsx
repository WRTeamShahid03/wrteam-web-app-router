import React from 'react'
import bgImg from '../../../Asset/Images/product-detail-page/unlockBg.svg'
import { BiRightArrowAlt } from 'react-icons/bi'
import Link from 'next/link'

const Unlock = () => {
    return (
        <>
            <section className="unlockSect container">
                <div className="row" style={{ background: `url(${bgImg.src})` }}>
                    <div className="col-12">
                        <div className="commonTextWrapper">
                            <div className="flex_center">
                                <div>
                                    <span className='comman_Headlines'>Unlock Your E-commerce Potential with eBroker</span>
                                </div>
                                <div>
                                    <span className='comman_para'>
                                        Hipster ipsum tattooed brunch I'm baby. Prism poutine pbr&b cardigan kinfolk tousled beard tote. Kinfolk tumeric mug literally tousled.
                                    </span>
                                </div>
                                <div>
                                    <Link href={''}><button className='startNowBtn'>Start Now <BiRightArrowAlt /></button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Unlock
