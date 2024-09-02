'use client'
import React from 'react'
import CommonTextComp from '../freeCodePageComponents/CommonTextComp'
import { FaCheck } from "react-icons/fa";
import CommonBtnComp from '../freeCodePageComponents/CommonBtnComp';

const Bundles = () => {

    const data = [
        {
            id: 0,
            title: 'School management SaaS',
            value: '499',
            leftList: [
                { id: 0, text: 'Student App' },
                { id: 1, text: 'Teacher App' },
                { id: 2, text: 'Parents App' },
                { id: 3, text: 'Staff App' }
            ],
            rightList: [
                { id: 0, text: 'Teacher Panel' },
                { id: 1, text: 'Super Admin Panel' },
                { id: 2, text: 'School Admin Panel' },
                { id: 3, text: 'Landing Page' }
            ]
        },
        {
            id: 1,
            title: 'Classified Marketplace App + Web',
            value: '399',
            leftList: [
                { id: 0, text: 'Customer App' },
                { id: 1, text: 'Website' },
                { id: 2, text: 'Admin Panel' },
                { id: 3, text: 'Live Chat' }
            ],
            rightList: [
                { id: 0, text: 'Coding Structure' },
                { id: 1, text: 'Subscription Module' },
                { id: 2, text: 'Multilingual Support' },
                { id: 3, text: 'Multiple Payment Methods' }
            ]
        },
        {
            id: 2,
            title: 'Single-Vendor Food Ordering App',
            value: '399',
            leftList: [
                { id: 0, text: 'Customer App' },
                { id: 1, text: 'Rider App' },
                { id: 2, text: 'Rider Panel' },
                { id: 3, text: 'Admin Panel' }
            ],
            rightList: [
                { id: 0, text: 'Website' },
                { id: 1, text: '50+ Pages UI' },
                { id: 2, text: 'Live Tracking' },
                { id: 3, text: 'Refer & Earn' }
            ]
        },
        {
            id: 3,
            title: 'Real Estate App + Web',
            value: '499',
            leftList: [
                { id: 0, text: 'Customer App' },
                { id: 1, text: 'Admin Panel' },
                { id: 2, text: 'Website' },
                { id: 3, text: 'Subscription Module' }
            ],
            rightList: [
                { id: 0, text: '360 View' },
                { id: 1, text: 'Live Chat' },
                { id: 2, text: 'RTL Support' },
                { id: 3, text: 'Admob Integration' }
            ]
        },
        {
            id: 4,
            title: 'Multi-Vendor Handyman App + Web',
            value: '499',
            leftList: [
                { id: 0, text: 'Customer App' },
                { id: 1, text: 'Provider App' },
                { id: 2, text: 'Provider Panel' },
                { id: 3, text: 'Admin Panel' }
            ],
            rightList: [
                { id: 0, text: 'Website' },
                { id: 1, text: 'Admob Integration' },
                { id: 2, text: 'Chat System' },
                { id: 3, text: 'Time Slots' }
            ]
        },
        {
            id: 5,
            title: 'Multi-Vendor Food Ordering App',
            value: '499',
            leftList: [
                { id: 0, text: 'Customer App' },
                { id: 1, text: 'Rider App' },
                { id: 2, text: 'Restaurant App' },
                { id: 3, text: 'Rider Panel' }
            ],
            rightList: [
                { id: 0, text: 'Restaurant Panel' },
                { id: 1, text: 'Admin Panel' },
                { id: 2, text: '50+ Pages UI' },
                { id: 3, text: 'Live Tracking' }
            ]
        },
        {
            id: 6,
            title: 'Trivia Quiz Game Website',
            value: '299',
            leftList: [
                { id: 0, text: 'Website' },
                { id: 1, text: 'Admin Panel' },
                { id: 2, text: '9 Game Types' },
                { id: 3, text: 'Multiple Language' }
            ],
            rightList: [
                { id: 0, text: 'Lifelines' },
                { id: 1, text: 'Audio Questions' },
                { id: 2, text: 'Group Battle' },
                { id: 3, text: '1v1 Battle' }
            ]
        },
        {
            id: 7,
            title: 'Trivia Quiz Game App',
            value: '299',
            leftList: [
                { id: 0, text: 'Quiz App' },
                { id: 1, text: 'Admin Panel' },
                { id: 2, text: 'UI Kit' },
                { id: 3, text: 'Lottie Animation' }
            ],
            rightList: [
                { id: 0, text: '9 Game Types' },
                { id: 1, text: 'Audio Questions' },
                { id: 2, text: 'Invite & Earn' },
                { id: 3, text: 'Coin Store' }
            ]
        },
        {
            id: 8,
            title: 'News App + Web',
            value: '399',
            leftList: [
                { id: 0, text: 'News App' },
                { id: 1, text: 'News Website' },
                { id: 2, text: 'Admin Panel' },
                { id: 3, text: 'Live Streaming' }
            ],
            rightList: [
                { id: 0, text: 'Weather Forecast' },
                { id: 1, text: 'Admob Integration' },
                { id: 2, text: 'Video News' },
                { id: 3, text: 'Text to Speech' }
            ]
        },
        {
            id: 9,
            title: 'Single-Vendor eCommerce App',
            value: '499',
            leftList: [
                { id: 0, text: 'Customer App' },
                { id: 1, text: 'Delivery Boy App' },
                { id: 2, text: 'Admin App' },
                { id: 3, text: 'Admin Panel' }
            ],
            rightList: [
                { id: 0, text: '5 Layout' },
                { id: 1, text: 'Product Video' },
                { id: 2, text: 'Push Notification' },
                { id: 3, text: 'RTL Support' }
            ]
        },
        {
            id: 10,
            title: 'Multi-Vendor eCommerce App',
            value: '499',
            leftList: [
                { id: 0, text: 'Customer App' },
                { id: 1, text: 'Seller App' },
                { id: 2, text: 'Admin Panel' },
                { id: 3, text: 'Seller Panel' }
            ],
            rightList: [
                { id: 0, text: 'Delivery App' },
                { id: 1, text: 'Delivery Panel' },
                { id: 2, text: 'Product Videos' },
                { id: 3, text: 'Invoices' }
            ]
        }
    ];


    return (
        <section className='bundlesSect container commonMT'>
            <div className="row mainRow">
                <div className="col-12">
                    <CommonTextComp title={'This Bundle Comes with'} blueText={'Everything You Need, Like...'} />
                </div>
                {
                    data.map((item) => {
                        return <div className="cardWrapper col-xxl-4 col-xl-6 col-12" key={item.id}>
                            <div className="card">
                                <div className='header'>
                                    <span>{item.title}</span>
                                </div>

                                <div className="listWrapper row">
                                    <div className="col-6">
                                        {
                                            item.leftList.map((ele) => {
                                                return <div key={ele.id} className='d-flex gap-2'> <span><FaCheck /></span> <span>{ele.text}</span></div>
                                            })
                                        }
                                    </div>
                                    <div className="col-6">
                                        {
                                            item.rightList.map((ele) => {
                                                return <div key={ele.id} className='d-flex gap-2'> <span><FaCheck /></span> <span>{ele.text}</span></div>
                                            })
                                        }
                                    </div>
                                </div>

                                <div className='header footer'>
                                    <span>Value : <span>${item.value}</span></span>
                                </div>
                            </div>
                        </div>
                    })
                }

                <div className="col-12">
                    <span className='offerPriceText mb-4'>Get All This Today For <span>Just $699</span></span>


                    <CommonBtnComp />
                </div>

            </div>
        </section>
    )
}

export default Bundles