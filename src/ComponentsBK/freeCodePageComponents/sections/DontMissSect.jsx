'use client'
import React from 'react'
import CommonBtnComp from '../CommonBtnComp'
import Image from 'next/image'
import img from '../../../Asset/Images/sourceCodePage/dontMiss.png'

const DontMissSect = () => {
    return (
        <section className='dontMissSect commonMT container'>
            <div className="row">
                <div className="col-lg-8">
                    <div className="leftDiv">
                        <Image src={img} height={0} width={0} alt='dontMissImg' />
                        <span className='heading'>Don't Miss Out! Grab Your Free Code and Get Building!</span>
                    </div>
                </div>
                <div className="col-lg-4 rightDiv">
                    <CommonBtnComp />
                </div>
            </div>
        </section>
    )
}

export default DontMissSect