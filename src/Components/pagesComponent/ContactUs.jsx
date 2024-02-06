import Breadcrum from '@/Components/Breadcrum'
import React, { useEffect, useRef, useState } from 'react'
// import location from '../../src/Asset/Icons/ic_location.svg'
// import mail from '../../src/Asset/Icons/mail.svg'
// import call from '../../src/Asset/Icons/phone.svg'
import contactBg from '../../Asset/Images/contactFormBg.webp'
import socialBg from '../../Asset/Images/Social_BG.webp'
import companyLogo from '../../Asset/navLogo.svg'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import Link from 'next/link'
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast'
import Head from 'next/head'
import Image from 'next/image'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FaYoutube } from 'react-icons/fa6'
import { GrLocation } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { RiCustomerService2Fill } from "react-icons/ri";
import whatsappQR from '../../Asset/Images/whatsappQR.png'
import { GetSettingsApi, contactUsApi } from '@/redux/actions/campaign';


const ContactUs = () => {

    const [loading, setLoading] = useState(true)
    const [seoData, setSeoData] = useState([])

    // useEffect(() => {
    //     setLoading(true)
    //     GetSettingsApi({
    //         onSuccess: (response) => {
    //             // console.log(response.data, "settingsResabout")
    //             setSeoData(response.data)
    //             setLoading(false)
    //         },
    //         onError: (error) => {
    //             console.log(error)
    //         }
    //     })
    // }, [])

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const form = useRef();

    const handleNumber = (e) => {
        const inputNumber = e.target.value.replace(/\D/g, '');
        const limitedNumber = inputNumber.slice(0, 16);
        setNumber(limitedNumber);
    }

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     if (!name || !number || !email || !subject || !message) {
    //         toast.error('Fill out the form first')
    //     }
    //     else {
    //         emailjs.sendForm('service_f0zhqhh', 'template_zxke4jz', form.current, 'RITTN3aEr8VNyLQdN')
    //             .then((result) => {
    //                 console.log(result.text);
    //             }, (error) => {
    //                 console.log(error.text);
    //             });
    //         toast.success('Submited Successfully !')
    //         setEmail('')
    //         setMessage('')
    //         setName('')
    //         setSubject('')
    //         setNumber('')
    //     }

    // };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!name || !number || !email || !subject || !message) {
            toast.error('Fill out the form first')
        }
        else {
            contactUsApi({
                name: name,
                email: email,
                subject: subject,
                phone: number,
                message: message,
                onSuccess: (res) => {
                    toast.success('Submited Successfully !')
                    setName('')
                    setNumber('')
                    setEmail('')
                    setSubject('')
                    setMessage('')
                },
                onError: (error) => {
                    console.log(error)
                    toast.error(error.message)
                }
            }

            )
        }

    };

    const cardData = [
        {
            id: 0,
            img: <GrLocation />,
            title: "Our Address",
            desc1: "#262-263, Time Square Empire, SH 42 Mirjapar highway, ",
            desc2: "Bhuj - Kutch 370001 Gujarat India.",
            link1: '#map',
            link2: '#map'
        },
        {
            id: 1,
            img: <FiMail />,
            title: "Email Address",
            desc1: "support@wrteam.in",
            desc2: "",
            link1: 'mailto:support@wrteam.in',
            link2: 'mailto:sales@wrteam.in'
        },
        {
            id: 2,
            img: <RiCustomerService2Fill />,
            title: "Phone Number",
            desc1: "+91 97979 45459",
            desc2: "",
            link1: 'tel:+91 97979 45459',
            link2: 'tel:+91 97124 45459'
        },
    ]

    return (
        <>

            {/* <Breadcrum title="Contact" blueText="Us" contentOne="Home" contentTwo="Contact Us" />/ */}

            <section id='contactUs' className='container'>
                <div className="row contactCards">
                    {
                        cardData.map((e) => {
                            return <div className="col-sm-6 col-md-6 col-lg-3" key={e.id}>

                                <div className="card">
                                    <span className='contactCardSpan'>
                                        <span id='contactCardIcon' > {e.img}</span>
                                    </span>
                                    <div className="card-body ">
                                        <h5 className="card-title contactCardTitle">{e.title}</h5>
                                        {
                                            e.link1 && e.link2 === '' ? <>
                                                <p className="card-text contactCardText1">{e.desc1}</p>
                                                <p className="card-text contactCardText2">{e.desc2}</p>
                                            </> :
                                                <>
                                                    <p className="card-text contactCardText1"><Link href={e.link1} className='cardLink'>{e.desc1}</Link></p>
                                                    <p className="card-text contactCardText2"><Link href={e.link2} className='cardLink'>{e.desc2}</Link></p>
                                                </>}
                                    </div>
                                </div>
                            </div>
                        })
                    }
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="card">
                            <span className='contactQR'>
                                <Image height={0} width={0} loading="lazy" className="card-img-top" src={whatsappQR} alt="Card image cap" id='whatsAppQR' />
                                {/* <span id='contactCardIcon' > {cardData[2].img}</span> */}
                            </span>
                            <div className="card-body ">
                                <h5 className="card-title contactCardTitle">Quick Scan To Whatsapp</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='contactForm' style={{
                background: `#283042 url(${contactBg.src})`,
                backgroundSize: 'cover',
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: 'darken'
            }}>
                <div className='container'>

                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4 formWrapper">


                            <div className="socialDiv" style={{
                                background: `rgb(2 0 16 / 61%) url(${socialBg.src})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: "no-repeat"
                            }}>
                                <div className="blueBg">

                                    <div className="logo">
                                        <Image height={0} width={0} loading="lazy" src={companyLogo} alt="" />
                                    </div>
                                    <div className="socialContent">
                                        <span className='text'>Stay connected with us on social media for the latest updates, content, and more. Follow us today!</span>
                                        <span className='icons'>
                                            <Link target='_blank' href="https://www.facebook.com/wrteam.in">
                                                <span>  <BsFacebook color='white' size={30} /> </span>
                                            </Link>

                                            <Link target='_blank' href="https://www.instagram.com/wrteam.in/">
                                                <span>  <AiFillInstagram color='white' size={30} /></span>
                                            </Link>

                                            <Link target='_blank' href="https://www.youtube.com/channel/UCLt9XRUuiWsqKng4681_6cQ">
                                                <span> <FaYoutube color='white' size={30} /> </span>
                                            </Link>

                                            <Link target='_blank' href="https://www.linkedin.com/company/wrteam/">
                                                <span style={{ borderRadius: "100%" }}>  <BsLinkedin color='white' size={30} /> </span>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-8 formWrapper">

                            <div className="formDiv">
                                <span className='formHeading'>Have something to ask or share? or just want to say HI!</span>

                                <form ref={form} onSubmit={sendEmail}>

                                    <div className="mb-3 row">
                                        <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" name='full_name' onChange={(e) => setName(e.target.value)} value={name} />
                                        </div>

                                        <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                            {/* <input type="number" className="no-spinner form-control" id="exampleFormControlInput1" placeholder="Your Phone" name='contact_number' onChange={handleNumber} value={number} /> */}
                                            <PhoneInput
                                                country={'in'} // You can set the default country
                                                value={number}
                                                onChange={(value) => setNumber(value)}
                                                inputProps={{
                                                    name: 'contact_number',
                                                    placeholder: 'Enter Your Phone Number',
                                                    className: 'form-control reactPhoneInput'
                                                }} />
                                        </div>

                                        <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Subject" name='subject' onChange={(e) => setSubject(e.target.value)} value={subject} />
                                        </div>

                                        <div className="mb-3 mt-4">
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" name='message' placeholder='Your Message' onChange={(e) => setMessage(e.target.value)} value={message} />
                                        </div>

                                        <button type='submit' className='homeCommon_btn'>Submit</button>

                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>

            </section >

            <section id="map" className='container'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6879.666659015773!2d69.63730994896257!3d23.23263359742167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39511e5b00000001%3A0x99eb1d2a09bf7685!2sWRTeam!5e0!3m2!1sen!2sin!4v1694243415170!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </>
    )
}

export default ContactUs
