'use client'
import React from 'react'
import Breadcrum from '../Breadcrum'
import { FaCheck } from 'react-icons/fa6'
import { IoClose } from "react-icons/io5";
import Image from 'next/image';
import sideImg from '../../Asset/Images/installationSideImg.svg'
import Link from 'next/link';

const Installation = () => {
    const data = [
        {
            id: 0,
            packageName: 'Basic',
            setups: 'Web Setup',
            cutPrice: '199',
            price: '149',
        },
        {
            id: 1,
            packageName: 'Standard',
            setups: 'Android OR iOS Setup',
            cutPrice: '299',
            price: '199',
        },
        {
            id: 2,
            packageName: 'Advance',
            setups: 'Android + iOS Setup (Combo)',
            cutPrice: '598',
            price: '349',
        },
        {
            id: 3,
            packageName: 'Premium',
            setups: 'Android + iOS + Web Setup',
            cutPrice: '797',
            price: '449',
        },
    ]

    const basicServices = [
        {
            id: 0,
            service: 'Change App Name (Re-Brand)',
            add: true,
        },
        {
            id: 1,
            service: 'Package Name',
            add: true,
        },
        {
            id: 2,
            service: 'Notification Configuration',
            add: true,
        },
        {
            id: 3,
            service: 'Login Configuration (Firebase and Everything)',
            add: true,
        },
        {
            id: 4,
            service: 'Change Theme colour according to LOGO(reskin)',
            add: true,
        },
        {
            id: 5,
            service: 'Configuration Firebase',
            add: true,
        },
        {
            id: 6,
            service: 'Setup Admin panel',
            add: true,
        },
        {
            id: 7,
            service: 'Live on Server',
            add: true,
        },
        {
            id: 8,
            service: 'Configuration Advertisement',
            add: false,
        },
        {
            id: 9,
            service: 'In-app Purchase Configuration',
            add: false,
        },
        {
            id: 10,
            service: 'Live over PlayStore',
            add: false,
        },
        {
            id: 11,
            service: 'Live over App Store',
            add: false,
        },
    ]

    const standardAndAdvanceServices = [
        {
            id: 0,
            service: 'Change App Name (Re-Brand)',
            add: true,
        },
        {
            id: 1,
            service: 'Package Name',
            add: true,
        },
        {
            id: 2,
            service: 'Notification Configuration',
            add: true,
        },
        {
            id: 3,
            service: 'Login Configuration (Firebase and Everything)',
            add: true,
        },
        {
            id: 4,
            service: 'Change Theme colour according to LOGO(reskin)',
            add: true,
        },
        {
            id: 5,
            service: 'Configuration Firebase',
            add: true,
        },
        {
            id: 6,
            service: 'Setup Admin panel',
            add: true,
        },
        {
            id: 8,
            service: 'Configuration Advertisement',
            add: true,
        },
        {
            id: 9,
            service: 'In-app Purchase Configuration',
            add: true,
        },
        {
            id: 10,
            service: 'Live over PlayStore',
            add: true,
        },
        {
            id: 11,
            service: 'Live over App Store',
            add: true,
        },
        {
            id: 7,
            service: 'Live on Server',
            add: false,
        },
    ]

    const premiumServices = [
        {
            id: 0,
            service: 'Change App Name (Re-Brand)',
            add: true,
        },
        {
            id: 1,
            service: 'Package Name',
            add: true,
        },
        {
            id: 2,
            service: 'Notification Configuration',
            add: true,
        },
        {
            id: 3,
            service: 'Login Configuration (Firebase and Everything)',
            add: true,
        },
        {
            id: 4,
            service: 'Change Theme colour according to LOGO(reskin)',
            add: true,
        },
        {
            id: 5,
            service: 'Configuration Firebase',
            add: true,
        },
        {
            id: 6,
            service: 'Setup Admin panel',
            add: true,
        },
        {
            id: 7,
            service: 'Live on Server',
            add: true,
        },
        {
            id: 8,
            service: 'Configuration Advertisement',
            add: true,
        },
        {
            id: 9,
            service: 'In-app Purchase Configuration',
            add: true,
        },
        {
            id: 10,
            service: 'Live over PlayStore',
            add: true,
        },
        {
            id: 11,
            service: 'Live over App Store',
            add: true,
        },
    ]

    const infoData = [
        {
            id: 0,
            text: 'App LOGO / ICON'
        },
        {
            id: 1,
            text: 'Advertisement ID'
        },
        {
            id: 2,
            text: 'Firebase Access'
        },
        {
            id: 3,
            text: 'Play Console Access'
        },
        {
            id: 4,
            text: 'Server Access'
        },
        {
            id: 5,
            text: 'Admin Details to be set (User Name / Password)'
        },
    ]


    return (
        <>
            <Breadcrum title={'Installation &'} blueText={'Setup'} contentOne={'Home'} contentTwo={'Services'} contentThree={'Installation'} />
            <section className='installation container'>
                <div className="row">
                    <div className="col-12">
                        <div className="commonTextWrapper">
                            <div className="flex_center">

                                <span className='comman_Headlines'>Flexible Packages to Match <span>Your Needs</span></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="packages">
                            <div className="row">
                                {
                                    data.map((ele) => {
                                        return <div className="col-12 col-md-6 col-lg-3">
                                            <div className={`card ${ele.packageName === 'Premium' ? 'premiumPack' : ''} ${ele.packageName === 'Standard' ? 'standardPack' : ''}`}>
                                                {
                                                    ele.packageName === 'Premium' ? <span className='recommended'>Full Setup</span> : ''
                                                }
                                                <div className="upperDiv">
                                                    <span className="packageName">{ele.packageName}</span>
                                                    <span className={`setup ${ele.packageName === 'Standard' ? 'standardSetUp' : ''}`}>{ele.setups}</span>
                                                    <span className="price"><span className='cutPrice'>${ele.cutPrice}</span>${ele.price}</span>
                                                </div>
                                                {
                                                    ele.packageName === 'Basic' ?
                                                        basicServices.map((elem) => {
                                                            return <div className="bottomDiv">
                                                                <span className='service'>{elem.service}</span>
                                                                {
                                                                    elem.add ? <span className='icon'><FaCheck /></span> :
                                                                        <span className='icon close'><IoClose /></span>
                                                                }
                                                            </div>
                                                        })
                                                        : ele.packageName === 'Standard' || ele.packageName === 'Advance' ? standardAndAdvanceServices.map((elem) => {
                                                            return <div className="bottomDiv">
                                                                <span className='service'>{elem.service}</span>
                                                                {
                                                                    elem.add ? <span className='icon'><FaCheck /></span> :
                                                                        <span className='icon close'><IoClose /></span>
                                                                }
                                                            </div>
                                                        }) : premiumServices.map((elem) => {
                                                            return <div className="bottomDiv">
                                                                <span className='service'>{elem.service}</span>
                                                                {
                                                                    elem.add ? <span className='icon'><FaCheck /></span> :
                                                                        <span className='icon close'><IoClose /></span>
                                                                }
                                                            </div>
                                                        })
                                                }
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row shareDetails">
                            <div className="col-lg-7 leftDiv">
                                <div className="textWrapper">
                                    <span className='headline'>For reskinning you have shared with us:</span>
                                </div>
                                <div className="infoBox">
                                    {
                                        infoData.map((info) => {
                                            return <div className="infoWrapper mt-4 d-flex" key={info.id}>
                                                <span className='icon me-2'><FaCheck /></span>
                                                <span>{info.text}</span>
                                            </div>
                                        })
                                    }
                                </div>

                                <div className="textWrapper mt-5">
                                    <span className='para'>After everything, we will provide you with all your original code and keys. You can revoke access rights from your original account.</span>
                                </div>

                            </div>
                            <div className="col-lg-5">
                                <div className="rightDiv">
                                    <span>Take the First Step and Select the Right Package for You!</span>
                                    <Link href={'/contact-us'}><button className='homeCommon_btn'>Contact Us</button></Link>
                                    <Image src={sideImg} height={0} width={0} alt='sideImg' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Installation
