'use client'
import React from 'react'
import CommonTextComp from '../freeCodePageComponents/CommonTextComp'
import Image from 'next/image'
import img1 from '../../Asset/Images/sourceCodePage/bonus1.png'
import img2 from '../../Asset/Images/sourceCodePage/bonus2.png'
import img3 from '../../Asset/Images/sourceCodePage/bonus3.png'
import img4 from '../../Asset/Images/sourceCodePage/bonus4.png'
import img5 from '../../Asset/Images/sourceCodePage/bonus5.png'
import img6 from '../../Asset/Images/sourceCodePage/bonus6.png'
import CommonBtnComp from '../freeCodePageComponents/CommonBtnComp'

const BonusSect = () => {

    const data = [
        {
            id: 0,
            title: 'Bonus #1',
            text: 'Lifetime Free Updates',
            img: img1,
            price: '999',
        },
        {
            id: 1,
            title: 'Bonus #2',
            text: '30-Day Money Back Guarantee*',
            img: img2,
            price: '300',
        },
        {
            id: 2,
            title: 'Bonus #3',
            text: 'Complete & Detailed Documentation',
            img: img3,
            price: '200',
        },
        {
            id: 3,
            title: 'Bonus #4',
            text: '30% Discount On Installation Service',
            img: img4,
            price: '400',
        },
        {
            id: 4,
            title: 'Bonus #5',
            text: 'Prioritized Customer Support',
            img: img5,
            price: '600',
        },
        {
            id: 4,
            title: 'Bonus #6',
            text: 'Error Free  & Clean Code',
            img: img6,
            price: '500',
        },
    ]

    return (
        <section className='bonusSect container commonMT'>
            <div className="row">
                <div className="col-12">
                    <CommonTextComp title={'Free Bonuses Worth'} blueText={'$2999'} />
                </div>

                {
                    data.map((item) => {
                        return <div className="col-lg-4 col-md-6 col-12" key={item.id}>
                            <div className="card bonusCard">
                                <div>
                                    <span className='title'>{item.title}</span>
                                </div>
                                <div>
                                    <Image src={item.img} height={0} width={0} alt='bonusImg' />
                                </div>
                                <div>
                                    <span className='desc'>{item.text}</span>
                                    <span></span>
                                </div>
                                <div>
                                    <button><span> Worth :</span> ${item.price}</button>
                                </div>
                            </div>
                        </div>
                    })
                }

                <div className="col-12">
                    <CommonBtnComp />
                </div>

            </div>
        </section>
    )
}

export default BonusSect
