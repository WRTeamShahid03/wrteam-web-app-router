import Link from 'next/link'
import React from 'react'
import { AiOutlineDoubleRight } from 'react-icons/ai'

const Breadcrum = ({ title, blueText, contentOne, contentTwo, contentThree,contentFour }) => {
    return (
        <div className='breadcrum'>
            <div className="lines">
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>
                <span className='line4'></span>
                <span className='line5'></span>
            </div>
            <div className="container breadcrumContent">
                <h1
                // data-aos="fade-down"  data-aos-once="true" data-aos-duration="800"
                >{title} <span>{blueText}</span></h1>
                <div className='pageName'
                //  data-aos="fade-left"  data-aos-once="true" data-aos-duration="800"
                >
                    <Link href={'/'}><span>{contentOne} </span></Link>
                    <span> <AiOutlineDoubleRight size={20} /> </span>
                    <span>{contentTwo}</span>
                    {
                        contentThree ?
                            <>
                                <span> <AiOutlineDoubleRight size={20} /> </span>
                                <span>{contentThree}</span>
                                <span> <AiOutlineDoubleRight size={20} /> </span>
                                <span>{contentFour}</span>
                                </> : ""

                    }

                </div>

            </div>
        </div>
    )
}

export default Breadcrum
