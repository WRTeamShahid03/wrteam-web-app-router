import React, { useRef, useState } from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import toast from 'react-hot-toast';
import FormLoader from '../FormLoader';
import { contactUsApi } from '@/redux/actions/campaign';
import { Select } from 'antd';

const ExClusivePageContactUs = () => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [product, setProduct] = useState('')
    const [country, setCountry] = useState('')
    const form = useRef();
    const [formLoader, setFormLoader] = useState(false)

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


    const sendEmail = (e) => {
        e.preventDefault();
        if (number.length > 16) {
            toast.error('Enter a valid number')
        }
        if (!name || !number || !email || !country || !product) {
            toast.error('Fill out the form first')
        }
        else {
            setFormLoader(true)
            contactUsApi({
                name: name,
                email: email,
                subject: '',
                phone: finalNum,
                message: '',
                country: country,
                product: product,
                onSuccess: (res) => {
                    toast.success('Submited Successfully !')
                    setFormLoader(false)
                    setName('')
                    setNumber('')
                    setEmail('')
                    setCountry('')
                    setProduct('')
                },
                onError: (error) => {
                    console.log(error)
                    toast.error(error.message)
                    setFormLoader(false)
                }
            }

            )
        }

    };

    const onChange = (value) => {
        // console.log(`selected ${value}`);
        setProduct(value)
    };
    const onSearch = (value) => {
        // console.log('search:', value);
    };

    // Filter `option.label` match the user type `input`
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


    return (
        <section className='exclusiveContactSect container commonMT'>
            <div className="wrapper">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="contactText flex_column">
                            <span className="common_span">
                                <span>Contact </span>Us
                            </span>
                            <span className='comman_Headlines' >Request Your <span>Exclusive License</span></span>

                            <span className='comman_para'>Fill out the form below to inquire about securing an
                                exclusive license for our product.</span>
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

                                    <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
                                        <label htmlFor="name">Country</label>
                                        <input type="text" className="form-control" name='country' id="exampleFormControlInput1" placeholder="Enter Your Country Name" onChange={(e) => setCountry(e.target.value)} value={country} />
                                    </div>

                                    <div className="col-12 mt-4">
                                        <label htmlFor="name">Product</label>
                                        <Select
                                            showSearch
                                            placeholder="Select Your Product"
                                            optionFilterProp="children"
                                            onChange={onChange}
                                            onSearch={onSearch}
                                            value={product}
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
                                                {
                                                    value: 'eClassify',
                                                    label: 'eClassify',
                                                },
                                            ]}
                                        />
                                    </div>
                                    <div className="item-wrapper one col-sm-12 col-md-12 col-lg-12">

                                        <button type='submit' className='homeCommon_btn'>
                                            {
                                                formLoader ? <FormLoader /> : "Submit"
                                            }
                                        </button>
                                    </div>


                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ExClusivePageContactUs