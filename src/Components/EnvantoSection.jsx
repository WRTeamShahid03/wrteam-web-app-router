import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaArrowRightArrowLeft } from 'react-icons/fa6'
import { FiArrowRightCircle } from 'react-icons/fi'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import envantoImg from '../Asset/Images/EnvantoImg.png'
import Image from 'next/image'

const EnvantoSection = () => {

  return (
    <>

      <section className="envantoSect container">
        <div className="row" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="valuesLeftDiv">
              <span className='common_span'>Exclusive on <span>CodeCanyon</span> </span>
              <h3 className='comman_Headlines'>Your Gateway to <span>Premium</span> Solutions</h3>

              <div className="envantoList">

                <span className='firstP'> Proudly recognised as an elite author on Codecanyon. Our premium, innovative customise applications and website source code prioritise user-centric and undergo consistent updates to stay ahead in the competition.</span>

                <span className='mileStone'>Milestones Unleashed</span>

                <span> <IoMdCheckmarkCircleOutline size={20} color='green' /> Elite Author</span>

                <span> <IoMdCheckmarkCircleOutline size={20} color='green' /> “Most Creative” Winner Team</span>

                <span> <IoMdCheckmarkCircleOutline size={20} color='green' /> Top Monthly and Weekly Author(Developer)</span>

                <span> <IoMdCheckmarkCircleOutline size={20} color='green' /> 15000+ Solutions Sell</span>


              </div>
              <Link href='/hire-us'><button className="homeCommon_btn" data-aos="fade-up" data-aos-once="true" data-aos-duration="800">Explore Now <FiArrowRightCircle size={18} /></button></Link>

            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="enavantoImgWrapper">
              <Image src={envantoImg} height={0} width={0} loading="lazy" alt='envantoImg' />
            </div>
          </div>
        </div>
      </section>

      <div className="envantoTextWrapper container" id='reached'>
        <span>envanto</span>
      </div>
    </>

  )
}

export default EnvantoSection