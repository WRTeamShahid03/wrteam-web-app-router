'use client'
import React from 'react'
import { FaCheck } from "react-icons/fa";
import CommonBtnComp from '../CommonBtnComp';
import img from '../../../Asset/Images/sourceCodePage/checkoutSectImg.png'
import img2 from '../../../Asset/Images/sourceCodePage/buildSectImg.svg'
import Image from 'next/image';
import CommonTextComp from '../CommonTextComp';

const CheckOutSect = ({ freeCodePage }) => {

    const list1 = [
        {
            id: 0,
            text: 'True/False Quiz',
        },
        {
            id: 1,
            text: 'Quiz Battle',
        },
        {
            id: 2,
            text: 'Multiple Language Support',
        },
        {
            id: 3,
            text: 'Invite Friends',
        },
        {
            id: 4,
            text: 'Quiz Contest',
        },
        {
            id: 5,
            text: 'Contest Leaderboard',
        },
    ]

    const list2 = [
        {
            id: 0,
            text: 'Blowing Your Budget',
        },
        {
            id: 1,
            text: 'Wasting Hours on Basic Setup',
        },
        {
            id: 2,
            text: 'Debugging Common Issues',
        },
        {
            id: 3,
            text: 'Facing Compatibility Problems',
        },
        {
            id: 4,
            text: 'Dealing with Poor Documentation',
        },
    ]

    return (
        <section className='checkoutSect commonMT container'>
            <div className="row">
                <div className="col-lg-6 checkoutLeftDiv flex_column">
                    <CommonTextComp title={'Check Out What Makes This Quiz'} blueText={'Code Awesome'} desc={''} />
                    <div className="listWrapper flex_column">
                        {
                            freeCodePage ? list1.map((list) => {
                                return <span key={list.id}> <FaCheck /> {list.text}</span>

                            }) :
                                list2.map((list) => {
                                    return <span key={list.id}> <FaCheck /> {list.text}</span>

                                })
                        }

                    </div>
                    {
                        freeCodePage &&
                        <CommonBtnComp />
                    }
                </div>
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                    {
                        freeCodePage ?
                            <Image src={img} width={0} height={0} alt='checkoutSectImg' className='checkoutSectImg' /> :
                            <Image src={img2} width={0} height={0} alt='checkoutSectImg' className='checkoutSectImg' />
                    }
                </div>
            </div>
        </section>
    )
}

export default CheckOutSect