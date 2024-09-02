'use client'
import Image from 'next/image'
import React from 'react'
import img from '../../Asset/Images/sourceCodePage/grabBundle.png'
import { FaCheckCircle } from 'react-icons/fa'
import CommonBtnComp from '../freeCodePageComponents/CommonBtnComp'

const GrabBundles = () => {

    const list = [
        {
            id: 0,
            text: 'School Management SaaS (Flutter App + Laravel Admin)',
            worth: '499'
        },
        {
            id: 1,
            text: 'Classified Marketplace (Flutter App + Next.js Website + Laravel Admin Panel)',
            worth: '399'
        },
        {
            id: 2,
            text: 'Real Estate App + Web (Flutter App + Next.js Website + Laravel Admin Panel)',
            worth: '399'
        },
        {
            id: 3,
            text: 'Multi-Vendor Handyman App + Web (Flutter App + Next.js Website + CodeIgniter Admin Panel)',
            worth: '499'
        },
        {
            id: 4,
            text: 'Trivia Quiz Game App (Flutter App + CodeIgniter Admin Panel)',
            worth: '299'
        },
        {
            id: 5,
            text: 'News App + Web (Flutter App + Next.js Website + Laravel Admin Panel)',
            worth: '399'
        },
        {
            id: 6,
            text: 'Lifetime Free Updates',
            worth: '999'
        },
        {
            id: 7,
            text: '30-Day Money Back Guarantee*',
            worth: '300'
        },
        {
            id: 8,
            text: 'Complete Documentation',
            worth: '300'
        },
        {
            id: 9,
            text: '30% Discount On Installation Service',
            worth: '400'
        },
        {
            id: 10,
            text: 'Prioritized Customer Support',
            worth: '500'
        },
        {
            id: 11,
            text: 'Error Free Code',
            worth: '500'
        }
    ];

    return (
        <section className='grabBundlesSect container commonMT'>
            <div className="card grabBundleCard commonMT">
                <div className="upperDiv">
                    <div>
                        <Image src={img} height={0} width={0} alt='bundlesImg' />
                    </div>
                    <div>
                        <span className='mainTitle'>Check Out Everything You’ll Get When You
                            Grab the Bundle Today!</span>
                    </div>
                </div>

                <div className="middleDiv">

                    {
                        list.map((item) => {
                            return <div key={item.id} className='listDiv'>
                                <div className='d-flex gap-3 align-items-center'>
                                    <span>
                                        <FaCheckCircle />
                                    </span>
                                    <span className='name'>{item.text}</span>
                                </div>
                                <span className='price'>Worth : ${item.worth}</span>
                            </div>
                        })
                    }
                </div>

                <div className="bottomDiv">
                    <h3>Total Value : $7788</h3>
                    <h3>Normal Price : $1299</h3>
                </div>

                <div className="buyBtnDiv">

                    <div>
                        <button className='ifBuyBtn'>If You Buy Now <span>$699</span></button>
                    </div>

                    <CommonBtnComp />
                </div>



            </div>
        </section>
    )
}

export default GrabBundles
