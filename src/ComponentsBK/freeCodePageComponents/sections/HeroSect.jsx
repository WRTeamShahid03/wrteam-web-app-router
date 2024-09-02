'use client'
import React from 'react'
import img from '../../../Asset/Images/sourceCodePage/Main image.png'
import Image from 'next/image'
import CommonBtnComp from '../CommonBtnComp'
import CommonTextComp from '../CommonTextComp'

const HeroSect = () => {
    return (
        <div className='heroSection commonBodyGlow flex_column container commonMT'>
            <CommonTextComp title={'Get Your Free Quiz Website Source Code'} blueText={'(Built-in PHP)'} desc={'Download now and start building interactive quizzes with ease. Perfect for devs who want to skip the setup and dive straight into coding!'} />
            <div>
                <Image src={img} width={0} height={0} className='heroImg' alt='heroImg' />
            </div>
            <CommonBtnComp />
        </div>
    )
}

export default HeroSect
