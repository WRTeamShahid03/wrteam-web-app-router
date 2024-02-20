import Image from 'next/image'
import React from 'react'
import eliteAuthor from '../Asset/Images/Elite Author.png'
import winnerTeam from '../Asset/Images/Winner Team.png'
import saleCount from '../Asset/Images/Sale Count.png'
import Link from 'next/link'

const EnvantoProfileSection = () => {
    return (
        <>
            <section className="envantoProfileSect">
                <div className="container">
                    <div className="row">
                        <div className="col-12 upperDiv">
                            <div className="textWrapper">
                                <span className='common_span'>Exclusive on CodeCanyon</span>
                                <span className='common_headlines'>Your Gateway to <span>Premium</span> Solutions</span>
                                <span className='para'>Proudly recognised as an elite author on Codecanyon. Our premium, innovative customise applications and website source code prioritise user-centric and undergo consistent updates to stay ahead in the competition.</span>
                            </div>
                        </div>

                        <div className="col-12 bottomDiv">
                            <div><Image src={eliteAuthor} height={0} width={0} /></div>
                            <div><Image src={winnerTeam} height={0} width={0} /></div>
                            <div><Image src={saleCount} height={0} width={0} /></div>
                        </div>

                        <div className="col-12 btnWrapper">
                            <div>
                                <Link href={'https://1.envato.market/75rdmQ'} target='_blank'>
                                    <button>Explore</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default EnvantoProfileSection
