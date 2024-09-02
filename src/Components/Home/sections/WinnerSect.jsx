import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


import winnerImg1 from '../../../Asset/Images/Achievement.webp'

const WinnerSect = () => {
    return (
        <section id="winner" className='container'>
            <div className="winnerWrapper">

                <div className="row">

                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="winnLeftDiv">
                            <span className='common_span'>Achievement <span>on Envato</span> </span>
                            <h2 className='comman_Healines'>WRTeam is Honored as the <span>“Most Creative”</span> Author on Envato.</h2>

                            <p className='firstP comman_para'>WRTeam is honored as the most creative author on Envato (Code Canyon). We are also recognized as an elite author on Code Canyon, selling source codes to create websites and mobile apps.</p>

                            <p className='common_para'> This achievement became possible just because of our expert and experienced team, specialized knowledge, and expertise.</p>
                            <p className='common_para'> We appreciate innovative thinking and creativity, and our staff always believes in evolution and bringing new ideas. Moreover, Credit for this remarkable achievement goes to our team's dedication and passion for excellence</p>

                            <Link href='https://1.envato.market/R5YR7b' target='_blank'> <button className="homeCommon_btn" data-aos="fade-up" data-aos-once="true" data-aos-duration="800">Read More</button></Link>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="winnRightDiv"
                        // data-aos="fade-down-left" data-aos-once="true" data-aos-duration="800"
                        >

                            <div className="winnerLeftImg">

                                <Image height={0} width={0} loading="lazy" src={winnerImg1} alt="team of creative and innovative designers using most advanced tools & technology" className='winnerTeamImg' />
                                <div className="winnerSmImg" >
                                    {/* <Image height={0} width={0} loading="lazy" src={trophy} alt="" /> */}

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <h2 id='winnText' data-fill-text="WINNER">WINNER</h2>
            </div>

        </section>
    )
}

export default WinnerSect
