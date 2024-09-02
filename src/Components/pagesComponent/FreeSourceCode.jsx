'use client'
import React from 'react'
import HeroSect from '../freeCodePageComponents/sections/HeroSect'
import CheckOutSect from '../freeCodePageComponents/sections/CheckOutSect'
import Testimonials from '../freeCodePageComponents/sections/Testimonials'
import DontMissSect from '../freeCodePageComponents/sections/DontMissSect'

const FreeSourceCode = () => {
    return (
        <div className='freeCodePage'>
            <HeroSect />
            <CheckOutSect freeCodePage={true}/>
            <Testimonials />
            <DontMissSect />
        </div>
    )
}

export default FreeSourceCode