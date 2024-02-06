import React, { use, useEffect, useRef, useState } from 'react'
import Breadcrum from '@/Components/Breadcrum'
import trianglePattern from '../../Asset/Icons/Triangle Pattern.png'
import dotsPattern from '../../Asset/Icons/Dots Pattern.png'
// import ourValues from '../../Asset/Images/our_values.png'
import ourValues from '../../Asset/Images/our_values.webp'
import Link from 'next/link'
import { BsArrowRightCircle } from 'react-icons/bs'
import { FiUploadCloud } from 'react-icons/fi'
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast'
import Head from 'next/head'
import Image from 'next/image'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { GetSettingsApi, GetVacanciesApi, careerMailApi } from '@/redux/actions/campaign'
import { IoIosCloseCircle } from "react-icons/io";
// import { Viewer } from '@react-pdf-viewer/core'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { pdfjs } from 'react-pdf';
import VacanciesCardSkeleton from '../Skeletons/VacanciesCardSkeleton'


const Career = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [fileDataUrl, setFileDataUrl] = useState(null);
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [experience, setExperience] = useState('')
    const [qualification, setQualification] = useState('')
    const [applyFor, setApplyFor] = useState('')
    const form = useRef();
    const [pdfFileUrl, setPdfFileUrl] = useState(null)
    const [inputKey, setInputKey] = useState(Date.now());
    const [vacancies, setVacancies] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetVacanciesApi({
            onSuccess: (response) => {
                console.log(response.data, 'vacanciesState');
                setVacancies(response.data);
                setLoading(false)
            },
            onError: (error) => {
                console.log(error);
                toast.error('Something Went Wrong!');
                setLoading(true)

            }
        })

    }, [])



    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const pdfFile = event.target.files;
        pdfFile.length > 0 && setPdfFileUrl(URL.createObjectURL(pdfFile[0]));

        // Check if a file is selected
        if (file) {
            const reader = new FileReader();
            // console.log(file)
            reader.onloadend = () => {
                // After reading the file, set it in the state
                setSelectedFile(file);
                setFileDataUrl(reader.result);
            };

            // Read the file as a data URL
            reader.readAsDataURL(file);
        } else {
            // No file selected, reset the state
            setSelectedFile(null);
            setFileDataUrl('');
        }
    };

    const workListData = [
        {
            id: 0,
            srn: '01',
            text: 'Competitive Salary and Incentives'
        },
        {
            id: 1,
            srn: '02',
            text: 'Collaborative Work ulture'
        },
        {
            id: 2,
            srn: '03',
            text: 'Learning and Growth'
        },
        {
            id: 3,
            srn: '04',
            text: 'Flexible Timings'
        },
        {
            id: 4,
            srn: '05',
            text: 'Birthday Celebrations'
        },
        {
            id: 5,
            srn: '06',
            text: 'Rewards, Recognition and Appreciation'
        },
        {
            id: 6,
            srn: '07',
            text: 'SatFun activities'
        },
    ]

    const jobCardData = [
        {
            id: 0,
            title: 'Flutter Developer',
            text: 'Experience: Freshers , 1+ Years',
            link: '#applyNow'
        },
        {
            id: 1,
            title: 'Laravel Developer',
            text: 'Experience: 1+ Years',
            link: '#applyNow'
        },
        {
            id: 2,
            title: 'SEO Expert',
            text: 'Experience: 1+ Years',
            link: '#applyNow'
        },

    ]

    const handleNumber = (e) => {
        const inputNumber = e.target.value.replace(/\D/g, '');
        const limitedNumber = inputNumber.slice(0, 16);
        setNumber(limitedNumber);
    }

    const sendEmail = (e) => {
        e.preventDefault();
        if (number.length > 16) {
            toast.error('Enter a valid number')
        }
        if (!name || !number || !email || !qualification || !applyFor || !experience || !selectedFile) {
            toast.error('Fill out the form first')
        }
        else {
            // console.log(selectedFile, 'selectedFile')
            careerMailApi({
                full_name: name,
                email: email,
                qualification: qualification,
                contact: number,
                apply_for: applyFor,
                experience: experience,
                file: selectedFile,
                onSuccess: (res) => {
                    // console.log(res)
                    toast.success(res.message)
                    setName('')
                    setEmail('')
                    setNumber('')
                    setExperience('')
                    setQualification('')
                    setApplyFor('')
                    handleFileRemove()
                },
                onError: (error) => {
                    console.log(error)
                    toast.error(error.message)
                }
            })

        }

    };

    const handleFileRemove = () => {
        setSelectedFile(null);
        setFileDataUrl(null);
        setPdfFileUrl(null)
        setInputKey(Date.now());
        // console.log(selectedFile.type)
    }


    return (
        <div className='careerPage'>

            {/* <Breadcrum title='Career' contentOne='Home' contentTwo='Career' /> */}

            <section id='empire' className='container'>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="emipreHeadlines">
                            <span className="common_span">
                                Work <span> With Us</span>
                            </span>
                            <h1 className="commonHeadlines" >
                                Join Our <span>Empire</span>
                            </h1>

                            <span className='commonPara'>
                                WRTeam invites all aspiring and experienced IT professionals to join and become a part of our family and give the right direction to their career. We're a leading web & mobile app development company, offering the best App development solutions at reasonable prices. Our motto is to grow together, and we focus on the holistic development of enter your career along with the growth of the company.
                            </span>
                        </div>
                    </div>
                </div>

            </section>

            <section id='wrTeamWork'>
                <div className="container">
                    <div className="row">

                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="wrTeamLeftDiv">
                                <span className='common_span'>Career <span>Growth</span> </span>
                                <h3 className='comman_Headlines'>Why Work With <span>WRTeam </span></h3>

                                <p className='firstP comman_para'>We value creativity, collaboration, and continuous learning</p>

                                <div className="workList">
                                    {
                                        workListData.map((e) => {
                                            return <div className="list" key={e.id} data-aos="fade-left" data-aos-once="true" data-aos-duration="800">
                                                <span>{e.srn}</span>
                                                <span>{e.text}</span>
                                            </div>
                                        })

                                    }

                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="wrTeamRightDiv" >

                                <div className="rightDivImg"
                                // data-aos="fade-down-left" data-aos-once="true" data-aos-duration="800"
                                >

                                    <Image height={0} width={0} loading="lazy" src={ourValues} alt="" />

                                </div>

                                <div data-aos="fade-left" data-aos-once="true" data-aos-duration="800">

                                    <Image height={0} width={0} loading="lazy" src={trianglePattern} alt="trianglePattern" className='trianglePattern2' />
                                </div>
                                <Image height={0} width={0} loading="lazy" src={dotsPattern} alt="dotsPattern" className='dotsPattern' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='jobOpening' className='container'>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="jobHeadlines">
                            <span className='common_span'><span>Career</span> Opportunities</span>
                            <h3 className='commonHeadlines' >Current <span> Job Openings</span> At WRTeam</h3>
                            <span className='commonPara'>Explore our current opportunities and fill in the necessary details to apply for the desired profile. We'll be in touch with you very soon. If you don't hear from us within 7 days, you can reach us at <span className='mailHR'>hr@wrteam.in</span></span>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="row jobCards">
                            {
                                loading ? Array.from({ length: 3 }).map((_, index) => (
                                    <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
                                        <VacanciesCardSkeleton />
                                    </div>
                                ))
                                    :
                                    <>
                                        {
                                            vacancies?.map((e) => {
                                                return <div className="col-sm-12 col-md-6 col-lg-4" key={e.id}>
                                                    <div className="card" data-aos="fade-up" data-aos-once="true" data-aos-duration="800">
                                                        <div className="cardBody">
                                                            <span className='card-title'>{e.title}</span>
                                                            <span className='card-text'>Experience: {e.experience}</span>
                                                        </div>
                                                        <Link href={'#applyNow'}> <span className='applyBtn'>Apply Now < BsArrowRightCircle /> </span></Link>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </>

                            }
                        </div>

                    </div>
                </div>
            </section>

            <section id='applyNow' className='container'>
                <div className="wrapper">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="applyHeadlines">
                                <h3 className='comman_Headlines'>Apply<span> Now</span></h3>

                                <span className='commonPara'>Explore our current opportunities and fill in the necessary details to apply for the desired profile. We'll be in touch with you very soon. If you don't hear from us within 7 days, you can reach us at <span className='mailHR'>hr@wrteam.in</span></span>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="formDiv">

                                <form ref={form} onSubmit={sendEmail}>

                                    <div className="mb-3 row">
                                        <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                            <label htmlFor="name">Full Name</label>
                                            <input type="text" className="form-control" name='full_name' id="exampleFormControlInput1" placeholder="Enter Your Full Name" onChange={(e) => setName(e.target.value)} value={name} />
                                        </div>

                                        <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                            <label htmlFor="name">Email</label>
                                            <input type="email" className="form-control" name='email' id="exampleFormControlInput1" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                            <label htmlFor="name">Contact Number</label>
                                            {/* <input type="number" className="no-spinner form-control" name='contact_number' id="exampleFormControlInput1" placeholder="Enter Your Phone Number" onChange={handleNumber} value={number} /> */}
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
                                            <label htmlFor="name">Qualification</label>
                                            <input type="text" className="form-control" name='qualification' id="exampleFormControlInput1" placeholder="Enter Your Qualification" onChange={(e) => setQualification(e.target.value)} value={qualification} />
                                        </div>

                                        <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                            <label htmlFor="name">Apply For</label>
                                            <select className="form-select form-select-md mb-3" name='apply_for' aria-label=".form-select-lg example" onChange={(e) => setApplyFor(e.target.value)} value={applyFor} >
                                                <option defaultValue>Select Apply For</option>
                                                {
                                                    vacancies?.map((option) => {
                                                        return <option value={option.title}>{option.title}</option>
                                                    })
                                                }
                                                {/* <option value="Flutter Developer">Flutter Developer</option>
                                                <option value="Laravel Developer">Laravel Developer</option>
                                                <option value="SEO Expert">SEO Expert</option> */}
                                            </select>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                            <label htmlFor="name">Experience</label>
                                            <select className="form-select form-select-md mb-3" name='experience' aria-label=".form-select-lg example" onChange={(e) => setExperience(e.target.value)} value={experience} >
                                                <option defaultValue>Select Your Experience</option>
                                                <option value="Fresher">Fresher</option>
                                                <option value="1+ Years">1+ Years</option>
                                                <option value="3+ Years">3+ Years</option>
                                                <option value="5+ Years">5+ Years</option>
                                            </select>
                                        </div>
                                        <div className="item-wrapper one col-sm-12 col-md-12 col-lg-12">
                                            <div className="item">
                                                {selectedFile ? <p className='fileName'>Uploaded File: {selectedFile.name}</p> : <p className='fileName'>Upload File</p>}
                                                <div className="item-inner">
                                                    <div className="item-content">
                                                        {
                                                            selectedFile !== null ? <span className='removeFileBtn' onClick={handleFileRemove}> Remove Selected File<IoIosCloseCircle /></span> : ''
                                                        }

                                                        <div className="image-upload">
                                                            {selectedFile ? (
                                                                <div className="img-uploaded">
                                                                    {
                                                                        selectedFile.type === "application/pdf"
                                                                            ? <>
                                                                                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
                                                                                    <Viewer fileUrl={pdfFileUrl} />
                                                                                </Worker>
                                                                            </>
                                                                            :
                                                                            <Image height={0} width={0} loading="lazy" src={fileDataUrl} alt="" />
                                                                    }

                                                                </div>
                                                            ) : (
                                                                <label style={{ cursor: "pointer" }} htmlFor="file_upload">
                                                                    <div className="h-100">
                                                                        <div className="dplay-tbl">
                                                                            <div className="dplay-tbl-cell">
                                                                                <FiUploadCloud size={30} color='#545A6880' />
                                                                                <h6 className="mt-10 mb-70 filePlaceholder">Choose A File Or Drag It Here.</h6>
                                                                                <span className='supportedImgSpan'>(Only PNG , JPG and PDF Files are supported)</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </label>
                                                            )}

                                                            <input
                                                                key={inputKey} // Add this line
                                                                data-required="image"
                                                                type="file"
                                                                accept='image/*,.pdf,.doc,.docx,jpg,png'
                                                                name="file_uploaded"
                                                                id="file_upload"
                                                                className="image-input"
                                                                onChange={handleFileChange}
                                                            />

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                            <button type='submit' className='homeCommon_btn'>Submit</button>
                                        </div>


                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Career
