import React from 'react'
import Link from 'next/link'
import { FaCheckCircle } from "react-icons/fa";
import { RiCloseCircleFill } from "react-icons/ri";

const LicenseCard = ({ title, licenseData,badge ,darkBg}) => {
    return (
        <>
            <div className={`card ${darkBg? 'bgDark': ''}`}>
                {
                    badge ? <span className='badge'>Recommended</span> : null
                }

                <div className="upperDiv">
                    <span className='title'>{title}</span>
                    <span></span>
                </div>

                <div className="bottomDiv">
                    <div className="listWrapper">
                        {
                            licenseData.map((data) => {
                                return (
                                    <div className="list">
                                        {
                                            data.add ?
                                                <span className='checkIcon'><FaCheckCircle /></span>
                                                : <span className='closeIcon'><RiCloseCircleFill /></span>
                                        }
                                        <div>
                                            <span className='detail'>{data.detail}</span>
                                            {
                                                data?.otherText ?
                                                    <span className='otherText'>({data.otherText})</span>
                                                    : null
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {/* <div className="list">
                                        <span className='checkIcon'><FaCheckCircle /></span>
                                        <span className='detail'></span>
                                    </div>
                                    <div className="list">

                                        <span className='detail'>Core Platform</span>
                                    </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LicenseCard
