'use client'
import Breadcrum from '@/Components/Breadcrum'
import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast'

// Images
import technicalExperties from '../../Asset/Images/Technical Expertise.webp'
import QualityAssurance from "../../Asset/Images/Quality Assurance.webp"
import CustomerSupport from '../../Asset/Images/Excellent Customer Support.webp'
import ClientSatisfaction from '../../Asset/Images/Client Satisfaction.webp'

import flutter from '../../Asset/Icons/FlutterColor.png'
import react from '../../Asset/Icons/ReactColor.png'
import vue from '../../Asset/Icons/VueColor.png'
import nextjs from '../../Asset/Icons/nextjs-icon.svg'
// import node from '../../Asset/Icons/NodeColor.png'
import laravel from '../../Asset/Icons/Laravel.svg'
import android from '../../Asset/Icons/Android.svg'
import ios from '../../Asset/Icons/iOS.svg'

import creativity from '../../Asset/Images/Creativity.png'
import trust from '../../Asset/Images/Trust.png'
import quality from '../../Asset/Images/Quality.png'
import teamWork from '../../Asset/Images/Team Work.png'
import Head from 'next/head';
import Image from 'next/image';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { GetSettingsApi, hireUsApi } from '@/redux/actions/campaign';
import FormLoader from '../FormLoader';

const HireUs = () => {

    const CardData = [
        {
            id: 0,
            img: technicalExperties,
            title: "Technical Expertise",
            desc: "Our experienced developers ensure innovative app & website crafting.",
        },
        {
            id: 1,
            img: QualityAssurance,
            title: "Quality Assurance",
            desc: "Thorough testing guarantees a seamless, glitch-free, responsive app & website.",
        },
        {
            id: 2,
            img: CustomerSupport,
            title: "Customer Support",
            desc: "We're about relationships. Our dedicated support team is here for you.",
        },
        {
            id: 3,
            img: ClientSatisfaction,
            title: "Client Satisfaction",
            desc: "Our track record reflects our commitment to exceed expectations.",
        },
    ]

    const Card2Data = [
        {
            id: 0,
            img: creativity,
            title: "Creativity",
            desc: "Creativity is directly related to Revolutionizing your Great Idea to Big Thing! Thinking creatively opens up the possibilities.",
        },
        {
            id: 1,
            img: trust,
            title: "Trust",
            desc: "Trust is not only related to giving a 100% refund policy, it's all about an effort to make it happen.",
        },
        {
            id: 2,
            img: quality,
            title: "Quality",
            desc: "Quality is the only thing that the team is not ready to compromise with, We believe delivering in high quality.",
        },
        {
            id: 3,
            img: teamWork,
            title: "Team Work",
            desc: "Our creative team is our power. WRTeam means we work together to bring real value through our projects.",
        },
    ]

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [budget, setBudget] = useState('')
    const [formLoader, setFormLoader] = useState(false)

    const form = useRef();

    const handleNumber = (e) => {
        const inputNumber = e.target.value.replace(/\D/g, '');
        const limitedNumber = inputNumber.slice(0, 16);
        setNumber(limitedNumber);
    }

    const [selectedCountryCode, setSelectedCountryCode] = useState('');

    const handlePhoneChange = (value, country) => {
        setNumber(value)
        setSelectedCountryCode(country?.dialCode);
    };

    // Function to return formatted phone number without country code if it starts with the selected country code
    const getFormattedPhoneNumber = () => {
        if (number.startsWith(selectedCountryCode)) {
            return number.slice(selectedCountryCode.length);
        }
        return number;
    };

    const formattedPhoneNumber = getFormattedPhoneNumber();

    const finalNum = (`+${selectedCountryCode} ${formattedPhoneNumber}`)

    // useEffect(() => {
    //     console.log('number', formattedPhoneNumber)
    //     console.log('numberFinal', finalNum)
    // }, [number])

    const sendEmail = (e) => {
        e.preventDefault();
        if (!name || !number || !email || !budget || !message) {
            toast.error('Fill out the form first')
        }
        else {
            setFormLoader(true)
            hireUsApi({
                name: name,
                email: email,
                budget: budget,
                phone: finalNum,
                message: message,
                onSuccess: (res) => {
                    toast.success('Submited Successfully !')
                    setFormLoader(false)
                    setName('')
                    setNumber('')
                    setEmail('')
                    setBudget('')
                    setMessage('')
                },
                onError: (error) => {
                    console.log(error)
                    toast.error(error.message)
                    setFormLoader(true)
                }
            }

            )

        }

    };


    return (
        <>

            {/* <Breadcrum title="Hire" blueText="Us" contentOne="Home" contentTwo="Hire Us" /> */}

            <section id='hireUs'>
                <div className="container">

                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="hireUpperDiv">
                                <h4 className='common_span'>Hire<span> Us</span></h4>
                                <span className='hireHeadlines'>Need <span>Assistance</span> With Your Project?</span>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="hireLowerDiv">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <span className='hireLowerDivHeadline'>
                                            <span>We stay on top of the latest tech advancements to ensure your project is completed quickly and uses the best of the Apps & Web solutions and frameworks suitable for your project.</span></span>
                                    </div>

                                    <div className="col-sm-12 col-md-12 col-lg-6">
                                        <div className="hireUsCardWrapper">

                                            <div className="hireUsCard">
                                                <span className='flutter'> <Image height={0} width={0} loading="lazy" src={flutter} alt="best flutter developers in Gujrat-WRTeam gujrat india" /> </span>
                                                <span className='title'>Flutter</span>
                                            </div>
                                            <div className="hireUsCard">
                                                <span className='react'> <Image height={0} width={0} loading="lazy" src={react} alt="best react.js service available at WRTeam bhuj gujrat" /> </span>
                                                <span className='title'>React Js</span>
                                            </div>
                                            <div className="hireUsCard">
                                                <span className='vue'> <Image height={0} width={0} loading="lazy" src={vue} alt="Vue service is available at WRTeam Bhuj" /> </span>
                                                <span className='title'>Vue Js</span>
                                            </div>
                                            <div className="hireUsCard">
                                                <span className='nextjs'> <Image height={0} width={0} loading="lazy" src={nextjs} alt="best next.js service provider in gujrat India" /> </span>
                                                <span className='title'>Next Js</span>
                                            </div>
                                            <div className="hireUsCard">
                                                <span className='laravel'> <Image height={0} width={0} loading="lazy" src={laravel} alt="Top Laravel developers & experts at WRTeam bhuj gujrat" /> </span>
                                                <span className='title'>Laravel</span>
                                            </div>
                                            <div className="hireUsCard">
                                                <span className='android'> <Image height={0} width={0} loading="lazy" src={android} alt="best android app development service provider in India-WRTeam" /> </span>
                                                <span className='title'>Android</span>
                                            </div>
                                            <div className="hireUsCard">
                                                <span className='ios'> <Image height={0} width={0} loading="lazy" src={ios} alt="best IOS app development service provider in India-WRTeam" /> </span>
                                                <span className='title'>iOS</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg-6">

                                        <div className="formDiv">

                                            <form ref={form} onSubmit={sendEmail}>

                                                <div className="mb-3 row">
                                                    <div className="col-sm-12 col-md-12 col-lg-12 mt-5">
                                                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" name='full_name' onChange={(e) => setName(e.target.value)} value={name} />
                                                    </div>

                                                    <div className="col-sm-12 col-md-12 col-lg-12 mt-4">
                                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                                                    </div>
                                                    <div className="col-sm-12 col-md-12 col-lg-12 mt-4">
                                                        {/* <input type="number" className="no-spinner form-control" id="exampleFormControlInput1" placeholder="Your Phone" name='contact_number' onChange={handleNumber} value={number} /> */}
                                                        <PhoneInput
                                                            country={'in'} // You can set the default country
                                                            value={number}
                                                            // onChange={(value) => setNumber(value)}
                                                            onChange={handlePhoneChange}
                                                            inputProps={{
                                                                name: 'contact_number',
                                                                placeholder: 'Enter Your Phone Number',
                                                                className: 'form-control reactPhoneInput'
                                                            }} />
                                                    </div>

                                                    <div className="col-sm-12 col-md-12 col-lg-12 mt-4">
                                                        <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example" name='budget' onChange={(e) => setBudget(e.target.value)} value={budget}>
                                                            <option defaultValue>Your Budget</option>
                                                            <option value="Below-$1000">Below - $1000</option>
                                                            <option value="$1000-$5000">$1000 - $5000</option>
                                                            <option value="Above-$5000">Above - $5000</option>
                                                        </select>
                                                    </div>

                                                    <div className="mb-3 mt-4">
                                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" name='message' placeholder='Your Message' onChange={(e) => setMessage(e.target.value)} value={message} />
                                                    </div>

                                                    <button type='submit' className='homeCommon_btn'>
                                                        {
                                                            formLoader ? <FormLoader /> : "Submit"
                                                        }
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id='whyHireUs'>
                <div className="container">

                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="hireUpperDiv">
                                <h4 className='common_span'> Why Hire<span> Us</span></h4>
                                <span className='hireHeadlines'>We Are <span>Experts</span> Dedicated to Making Your Concept  <span>Come True!</span></span>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">

                            <div className="row whyHireCards">

                                <span></span>
                                {
                                    CardData.map((e) => {
                                        return <div className="col-sm-12 col-md-6 col-lg-3" key={e.id}>
                                            <div className="card">
                                                <span className='contactCardSpan'> <Image height={0} width={0} loading="lazy" className="card-img-top card1Img" src={e.img} alt="Card image cap" /> </span>
                                                <div className="card-body ">
                                                    <h5 className="card-title card1Title">{e.title}</h5>
                                                    <p className="card-text card1Text">{e.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section id='success'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="hireUpperDiv">
                                <span className='commonHeadlines' >4 Steps to <span>Success</span> With <span>WRTeam</span></span>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12 lowerDiv">

                            <span className='cardsdot'></span>
                            <div className="row successCards">
                                {
                                    Card2Data.map((e) => {
                                        return <div className="col-sm-12 col-md-6 col-lg-3" key={e.id}>
                                            <div className="card">
                                                <span className=''> <Image height={0} width={0} loading="lazy" className="card-img-top" src={e.img} alt="Card image cap" /> </span>
                                                <div className="card-body ">
                                                    <h5 className="card-title">{e.title}</h5>
                                                    <p className="card-text">{e.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                            <span className='cardsdot2'></span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HireUs
