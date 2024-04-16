'use client'
import React, { useEffect, useRef, useState } from 'react'
import Breadcrum from '../Breadcrum'
import Image from 'next/image'
import discuss1 from '../../Asset/Images/customization/discuss1.jpg'
import discuss2 from '../../Asset/Images/customization/discuss2.jpg'
import discuss3 from '../../Asset/Images/customization/discuss3.jpg'
import sideImg from '../../Asset/Images/customization/customizationImg.png'
import arrow from '../../Asset/Images/customization/arrow.svg'
import line from '../../Asset/Images/customization/lines.svg'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import FormLoader from '../FormLoader'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { pdfjs } from 'react-pdf';
import { FiUpload, FiUploadCloud } from 'react-icons/fi'
import { IoIosCloseCircle } from "react-icons/io";
import toast from 'react-hot-toast'
import { Select } from 'antd';

const Customization = () => {

    const onChange = (value) => {
        // console.log(`selected ${value}`);
        setProductName(value)
    };
    const onSearch = (value) => {
        // console.log('search:', value);
    };

    // Filter `option.label` match the user type `input`
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [requirement, setRequirement] = useState('')
    const [productName, setProductName] = useState('')
    const [formLoader, setFormLoader] = useState(false)
    const [pdfFileUrl, setPdfFileUrl] = useState(null)
    const [inputKey, setInputKey] = useState(Date.now());
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileDataUrl, setFileDataUrl] = useState(null);

    const form = useRef();

    const data = [
        {
            id: 0,
            numb: '01',
            img: discuss1,
            title: 'Define Requirements',
            desc: 'Share your needs for customizing our product. The more details you give, the better we can make it suit you.'

        },
        {
            id: 0,
            numb: '02',
            img: discuss2,
            title: `We'll Discuss the Details`,
            desc: `We'll go through your requirements together, sort out any questions, and make sure we're clear on what you need`

        },
        {
            id: 0,
            numb: '03',
            img: discuss3,
            title: 'Sit Back as We Customize',
            desc: `We'll start working on your project once we understand your requirements. We'll keep you updated on how it's going.`

        }
    ]

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

    const handleFileRemove = () => {
        setSelectedFile(null);
        setFileDataUrl(null);
        setPdfFileUrl(null)
        setInputKey(Date.now());
        // console.log(selectedFile.type)
    }

    const sendEmail = (e) => {
        e.preventDefault();
        if (!name || !number || !email || !productName || !requirement) {
            toast.error('Fill out the form first')
        }
        else {
            setFormLoader(true)
            //     hireUsApi({
            //         name: name,
            //         email: email,
            //         productName: productName,
            //         phone: finalNum,
            //         requirement: requirement,
            //         onSuccess: (res) => {
            //             toast.success('Submited Successfully !')
            //             setFormLoader(false)
            //             setName('')
            //             setNumber('')
            //             setEmail('')
            //             setProductName('')
            //             setRequirement('')
            //         },
            //         onError: (error) => {
            //             console.log(error)
            //             toast.error(error.message)
            //             setFormLoader(true)
            //         }
            //     }

            //     )

        }

    };

    useEffect(() => {
        console.log(productName)
    }, [productName])


    return (
        <>
            <Breadcrum title={'Customization'} blueText={'Process section'} contentOne={'Home'} contentTwo={'Services'} contentThree={'Customizatoin'} />
            <section className='customization container'>
                <div className='headlines'>
                    <div className="row">
                        <div className="col-12">
                            <div className="commonTextWrapper">
                                <div className="flex_center">

                                    <span className='comman_Headlines'>Want Customization in <span>Our Products?</span></span>
                                    <span className='comman_para'>Customize our products to fit you perfectly! Just tell us what you need, and we'll make it happen. Your happiness is our top priority, so let's work together to create exactly what you want</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dicussionSect">
                    <div className="row">
                        {
                            data.map((ele) => {
                                return <div className="col-lg-4" key={ele.id}>
                                    <div className="card">
                                        <span className='numbWrapper'>
                                            <span className='numb'>{ele.numb}</span>
                                        </span>
                                        <div className='imgDiv'>
                                            <Image src={ele.img} alt="cardImg" height={0} width={0} />
                                        </div>
                                        <div>
                                            <span className='title'>{ele.title}</span>
                                        </div>
                                        <div>
                                            <span className='desc'>{ele.desc}</span>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <Image src={arrow} alt="arrow" height={0} width={0} className='arr1' />
                    <Image src={arrow} alt="arrow" height={0} width={0} className='arr2' />
                    <Image src={line} alt="bgline" height={0} width={0} className='line1' />
                    <Image src={line} alt="bgline" height={0} width={0} className='line2' />

                </div>

                <div className="customizationDetails">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="textWrapper">
                                <span className='comman_Headlines'>Want Customization in <span>Our Products?</span></span>
                                <span className='comman_para'>After reviewing your customization requirements? we will provide an estimated timeframe for completing your project. Our standard rate for customization is $15 per hour.</span>
                            </div>
                            <div>
                                <Image src={sideImg} height={0} width={0} alt='sideImg' />
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <div className="formDiv">
                                <form ref={form} onSubmit={sendEmail}>

                                    <div className="row">
                                        <div className="col-12">
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" name='full_name' onChange={(e) => setName(e.target.value)} value={name} />
                                        </div>

                                        <div className="col-12">
                                            <PhoneInput
                                                country={'in'}
                                                value={number}
                                                onChange={handlePhoneChange}
                                                inputProps={{
                                                    name: 'contact_number',
                                                    placeholder: 'Enter Your Phone Number',
                                                    className: 'form-control reactPhoneInput'
                                                }} />
                                        </div>

                                        <Select
                                            showSearch
                                            placeholder="Product Name"
                                            optionFilterProp="children"
                                            onChange={onChange}
                                            onSearch={onSearch}
                                            filterOption={filterOption}
                                            className='productDropdown'
                                            options={[
                                                {
                                                    value: 'eSchool SAAS',
                                                    label: 'eSchool SAAS',
                                                },
                                                {
                                                    value: 'eRestro- Single',
                                                    label: 'eRestro- Single',
                                                },
                                                {
                                                    value: 'eBroker',
                                                    label: 'eBroker',
                                                },
                                                {
                                                    value: 'eDemand',
                                                    label: 'eDemand',
                                                },
                                                {
                                                    value: 'eGrocer',
                                                    label: 'eGrocer',
                                                },
                                                {
                                                    value: 'eSchool',
                                                    label: 'eSchool',
                                                },
                                                {
                                                    value: 'eRestro- multi',
                                                    label: 'eRestro- multi',
                                                },
                                                {
                                                    value: 'Elite Quiz web',
                                                    label: 'Elite Quiz web',
                                                },
                                                {
                                                    value: 'eSpeech',
                                                    label: 'eSpeech',
                                                },
                                                {
                                                    value: 'Prime web',
                                                    label: 'Prime web',
                                                },
                                                {
                                                    value: 'eShop - multi',
                                                    label: 'eShop - multi',
                                                },
                                                {
                                                    value: 'Smartkit pro',
                                                    label: 'Smartkit pro',
                                                },
                                                {
                                                    value: 'Tic-tac-toe',
                                                    label: 'Tic-tac-toe',
                                                },
                                                {
                                                    value: 'Elite Quiz app',
                                                    label: 'Elite Quiz app',
                                                },
                                                {
                                                    value: 'Qearner',
                                                    label: 'Qearner',
                                                },
                                                {
                                                    value: 'eCart web - multi',
                                                    label: 'eCart web - multi',
                                                },
                                                {
                                                    value: 'eBook app',
                                                    label: 'eBook app',
                                                },
                                                {
                                                    value: 'News',
                                                    label: 'News',
                                                },
                                                {
                                                    value: 'eCart - multi vendor system',
                                                    label: 'eCart - multi vendor system',
                                                },
                                                {
                                                    value: 'eShop manager- admin',
                                                    label: 'eShop manager- admin',
                                                },
                                                {
                                                    value: 'eShop - web - single',
                                                    label: 'eShop - web - single',
                                                },
                                                {
                                                    value: 'eShop - app - single',
                                                    label: 'eShop - app - single',
                                                },
                                                {
                                                    value: 'eCart web',
                                                    label: 'eCart web',
                                                },
                                                {
                                                    value: 'Radio',
                                                    label: 'Radio',
                                                },
                                                {
                                                    value: 'Quiz online iOS',
                                                    label: 'Quiz online iOS',
                                                },
                                                {
                                                    value: 'Quiz online android',
                                                    label: 'Quiz online android',
                                                },
                                                {
                                                    value: 'eCart- app',
                                                    label: 'eCart- app',
                                                },
                                                {
                                                    value: 'Quotes app',
                                                    label: 'Quotes app',
                                                },
                                            ]}
                                        />

                                        <div className={`col-12 ${selectedFile ? 'mb-4' : ''}`}>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                                        </div>
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
                                                                    {/* <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
                                                                        <Viewer fileUrl={pdfFileUrl} />
                                                                    </Worker> */}
                                                                    <span className='p-2'>{selectedFile.name}</span>
                                                                </>
                                                                :
                                                                <Image height={0} width={0} loading="lazy" src={fileDataUrl} alt="" />
                                                        }

                                                    </div>
                                                ) : (<>
                                                    <label style={{ cursor: "pointer" }} htmlFor="file_upload">
                                                        <div className="h-100">
                                                            <div className="dplay-tbl">
                                                                <div className="dplay-tbl-cell">
                                                                    <h6 className="filePlaceholder">Upload PDF File</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                    <label style={{ cursor: "pointer" }} htmlFor="file_upload">
                                                        <div className="h-100">
                                                            <div className="dplay-tbl">
                                                                <div className="dplay-tbl-cell">
                                                                    <div className='uploadBtnWrapper'>
                                                                        <FiUpload size={26} color='white' />
                                                                        <h6> Upload</h6>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </>


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

                                        <div className="">
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" name='requirements' placeholder='Requirements Explanation' onChange={(e) => setRequirement(e.target.value)} value={requirement} />
                                        </div>

                                        <button type='submit' className='homeCommon_btn'>
                                            {
                                                formLoader ? <FormLoader /> : "Submit"
                                            }
                                        </button>
                                    </div>
                                </form>
                                {/* <div className="row">
                                    <div className="col-12">
                                        <input type="text" placeholder='Your Name' />
                                    </div>
                                    <div className="col-12">
                                        <PhoneInput
                                            country={'in'} // You can set the default country
                                            value={number}
                                            onChange={handlePhoneChange}
                                            inputProps={{
                                                name: 'contact_number',
                                                placeholder: 'Enter Your Phone Number',
                                                className: 'form-control reactPhoneInput'
                                            }} />
                                    </div>
                                    <div className="col-12">
                                        <input type="email" placeholder='Your Email' />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" placeholder='Product Name' />
                                    </div>
                                    <div className="col-12">
                                        <textarea name="requirement" id="requirement" cols="30" rows="10" placeholder='Requirements Explanation'></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button type='submit' className='homeCommon_btn'>
                                            Submit
                                            
                                        </button>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Customization
