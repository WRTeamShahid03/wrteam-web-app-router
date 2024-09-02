import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { RiCloseCircleFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import Table from 'react-bootstrap/Table';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { productDataSelector } from '@/redux/reuducer/productLayoutSlice';

const LicensePlan = ({ productDetailPage }) => {

    const regularlicenseData = [
        {
            id: 0,
            detail: 'Lifetime License Validity',
            add: true
        },
        {
            id: 1,
            detail: 'Permitted for 1 Domain',
            add: true
        },
        {
            id: 2,
            detail: '6 months of general and technical support',
            otherText: 'As per Envato support policy',
            add: true
        },
        {
            id: 3,
            detail: 'All Premium Features',
            add: true
        },
        {
            id: 4,
            detail: 'Lifetime FREE Update',
            add: true
        },
        {
            id: 5,
            detail: 'For Personal Project',
            add: true
        },
        {
            id: 6,
            detail: 'For Commercial Projects',
            otherText: 'If the end project is paid for using or sell',
            add: false
        },
        {
            id: 7,
            detail: 'Postman Collection for REST API Documentation',
            add: false
        },
        {
            id: 8,
            detail: 'Admin Panel FREE Installation in cPanel',
            otherText: 'One Time',
            add: false
        },
        {
            id: 9,
            detail: 'Priority Support',
            add: false
        },
        {
            id: 10,
            detail: 'AnyDesk Support',
            add: false
        },
    ]

    const extendedlicenseData = [
        {
            id: 0,
            detail: 'Lifetime License Validity',
            add: true
        },
        {
            id: 1,
            detail: 'Permitted for 1 Domain',
            add: true
        },
        {
            id: 2,
            detail: '6 months of general and technical support',
            otherText: 'As per Envanto support policy',
            add: true
        },
        {
            id: 3,
            detail: 'All Premium Features',
            add: true
        },
        {
            id: 4,
            detail: 'Lifetime FREE Update',
            add: true
        },
        {
            id: 5,
            detail: 'For Personal Project',
            add: true
        },
        {
            id: 6,
            detail: 'For Commercial Projects',
            otherText: 'If the end project is paid for using or sell',
            add: true
        },
        {
            id: 7,
            detail: 'Postman Collection for REST API Documentation',
            add: true
        },
        {
            id: 8,
            detail: 'Admin Panel FREE Installation in cPanel',
            otherText: 'One Time',
            add: true
        },
        {
            id: 9,
            detail: 'Priority Support',
            add: true
        },
        {
            id: 10,
            detail: 'AnyDesk Support',
            add: true
        },
    ]

    const productData = useSelector(productDataSelector)

    return (
        <>
            <section className="licensePlan container">

                <Table bordered >
                    <thead>
                        <tr>
                            <th className='plansContent plansHead'>
                                <div>

                                    <span className='title'>Product Plans</span>
                                </div>
                            </th>
                            <th className='priceHead'>
                                <div>
                                    {
                                        productDetailPage &&
                                        <span className='price'>$59</span>
                                    }
                                    <span>Regular License</span>
                                    {
                                        productDetailPage &&
                                        <Link href={productData?.checkout_url ? productData?.checkout_url : '#licenceSection'} target='_blank'>
                                            <button>Purchase Now <FaArrowRight /></button>
                                        </Link>
                                    }
                                </div>
                            </th>
                            <th className='priceHead'>
                                <div className='extendedDiv'>
                                    <span className='recommended'>Recommended</span>
                                    {
                                        productDetailPage &&
                                        <span className='price'>$360</span>
                                    }
                                    <span>Extended License</span>
                                    {
                                        productDetailPage &&
                                        <Link href={productData?.extended_license_link ? productData?.extended_license_link : '#licenceSection'}>
                                            <button className='extendedPurchase'>Purchase Now <FaArrowRight /></button>
                                        </Link>
                                    }
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div>
                                    <span>{regularlicenseData[0].detail}</span>
                                    {
                                        regularlicenseData[0].otherText ? <span className='otherText'>({regularlicenseData[0].otherText})</span> : ''
                                    }

                                </div>
                            </td>
                            <td>{regularlicenseData[0].add ? <FaCheckCircle className='checkIcon' /> : <RiCloseCircleFill className='closeIcon' />}</td>
                            <td>{extendedlicenseData[0].add ? <FaCheckCircle className='checkIcon' /> : <RiCloseCircleFill className='closeIcon' />}</td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <span>{regularlicenseData[1].detail}</span>
                                    {
                                        regularlicenseData[1].otherText ? <span className='otherText'>({regularlicenseData[1].otherText})</span> : ''
                                    }

                                </div>
                            </td>
                            <td>{regularlicenseData[1].add ? <FaCheckCircle className='checkIcon' /> : <RiCloseCircleFill className='closeIcon' />}</td>
                            <td>{extendedlicenseData[1].add ? <FaCheckCircle className='checkIcon' /> : <RiCloseCircleFill className='closeIcon' />}</td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <span>{regularlicenseData[2].detail}</span>
                                    {
                                        regularlicenseData[2].otherText ? <span className='otherText'>({regularlicenseData[2].otherText})</span> : ''
                                    }

                                </div>
                            </td>
                            <td>{regularlicenseData[2].add ? <FaCheckCircle className='checkIcon otherTextIcon' /> : <RiCloseCircleFill className='closeIcon otherTextIcon' />}</td>
                            <td>{extendedlicenseData[2].add ? <FaCheckCircle className='checkIcon otherTextIcon' /> : <RiCloseCircleFill className='closeIcon otherTextIcon' />}</td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <span>{regularlicenseData[3].detail}</span>
                                    {
                                        regularlicenseData[3].otherText ? <span className='otherText'>({regularlicenseData[3].otherText})</span> : ''
                                    }

                                </div>
                            </td>
                            <td>{regularlicenseData[3].add ? <FaCheckCircle className='checkIcon' /> : <RiCloseCircleFill className='closeIcon' />}</td>
                            <td>{extendedlicenseData[3].add ? <FaCheckCircle className='checkIcon' /> : <RiCloseCircleFill className='closeIcon' />}</td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <span>{regularlicenseData[4].detail}</span>
                                    {
                                        regularlicenseData[4].otherText ? <span className='otherText'>({regularlicenseData[4].otherText})</span> : ''
                                    }

                                </div>
                            </td>
                            <td>{regularlicenseData[4].add ? <FaCheckCircle className='checkIcon' /> : <RiCloseCircleFill className='closeIcon' />}</td>
                            <td>{extendedlicenseData[4].add ? <FaCheckCircle className='checkIcon' /> : <RiCloseCircleFill className='closeIcon' />}</td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <span>{regularlicenseData[5].detail}</span>
                                    {
                                        regularlicenseData[5].otherText ? <span className='otherText'>({regularlicenseData[5].otherText})</span> : ''
                                    }

                                </div>
                            </td>
                            <td>{regularlicenseData[5].add ? <FaCheckCircle className='checkIcon' /> : <RiCloseCircleFill className='closeIcon' />}</td>
                            <td>{extendedlicenseData[5].add ? <FaCheckCircle className='checkIcon' /> : <RiCloseCircleFill className='closeIcon' />}</td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <span>{regularlicenseData[6].detail}</span>
                                    {
                                        regularlicenseData[6].otherText ? <span className='otherText'>({regularlicenseData[6].otherText})</span> : ''
                                    }

                                </div>
                            </td>
                            <td>{regularlicenseData[6].add ? <FaCheckCircle className='checkIcon otherTextIcon' /> : <RiCloseCircleFill className='closeIcon otherTextIcon' />}</td>
                            <td>{extendedlicenseData[6].add ? <FaCheckCircle className='checkIcon otherTextIcon' /> : <RiCloseCircleFill className='closeIcon otherTextIcon' />}</td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <span>{regularlicenseData[7].detail}</span>
                                    {
                                        regularlicenseData[7].otherText ? <span className='otherText'>({regularlicenseData[7].otherText})</span> : ''
                                    }

                                </div>
                            </td>
                            <td>{regularlicenseData[7].add ? <FaCheckCircle className='checkIcon' /> : <RiCloseCircleFill className='closeIcon' />}</td>
                            <td>{extendedlicenseData[7].add ? <FaCheckCircle className='checkIcon' /> : <RiCloseCircleFill className='closeIcon' />}</td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <span>{regularlicenseData[8].detail}</span>
                                    {
                                        regularlicenseData[8].otherText ? <span className='otherText'>({regularlicenseData[8].otherText})</span> : ''
                                    }

                                </div>
                            </td>
                            <td>{regularlicenseData[8].add ? <FaCheckCircle className='checkIcon otherTextIcon' /> : <RiCloseCircleFill className='closeIcon otherTextIcon' />}</td>
                            <td>{extendedlicenseData[8].add ? <FaCheckCircle className='checkIcon otherTextIcon' /> : <RiCloseCircleFill className='closeIcon otherTextIcon' />}</td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <span>{regularlicenseData[9].detail}</span>
                                    {
                                        regularlicenseData[9].otherText ? <span className='otherText'>({regularlicenseData[9].otherText})</span> : ''
                                    }

                                </div>
                            </td>
                            <td>{regularlicenseData[9].add ? <FaCheckCircle className='checkIcon' /> : <RiCloseCircleFill className='closeIcon' />}</td>
                            <td>{extendedlicenseData[9].add ? <FaCheckCircle className='checkIcon' /> : <RiCloseCircleFill className='closeIcon' />}</td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <span>{regularlicenseData[10].detail}</span>
                                    {
                                        regularlicenseData[10].otherText ? <span className='otherText'>({regularlicenseData[10].otherText})</span> : ''
                                    }

                                </div>
                            </td>
                            <td>{regularlicenseData[10].add ? <FaCheckCircle className='checkIcon' /> : <RiCloseCircleFill className='closeIcon' />}</td>
                            <td>{extendedlicenseData[10].add ? <FaCheckCircle className='checkIcon' /> : <RiCloseCircleFill className='closeIcon' />}</td>
                        </tr>
                    </tbody>
                </Table>
                {/* <div className="row">
                    <div className="col-4 plansDiv contentWrapper">
                        <div className='plansContent plansHead'>
                            <span className='title'>Product Plans</span>
                            <span className='desc'>Choose the ideal plan that caters to your business requirements and maximizes your potential</span>
                        </div>
                        {
                            regularlicenseData.map((data) => {
                                return <div className='plansContent'>
                                    <span>{data.detail}</span>
                                    {
                                        data.otherText ?
                                            <span className='otherText'>({data.otherText})</span> : ''
                                    }
                                </div>
                            })
                        }

                    </div>
                    <div className="col-4 regularPlan priceDiv contentWrapper">
                        <div className='plansContent plansHead'>
                            <span className='price'>$59</span>
                            <span>Regular License</span>
                            <button>Purchase Now</button>
                        </div>

                        {
                            regularlicenseData.map((data) => {
                                return <div className="plansContent"><span>{data.add ? <FaCheckCircle className='checkIcon ' /> : <RiCloseCircleFill className='closeIcon' />}</span>
                                </div>
                            })
                        }

                    </div>
                    <div className="col-4 extendedPlan  priceDiv contentWrapper">
                        <div className='plansContent plansHead'>
                            <span className='price'>$360</span>
                            <span>Extended License</span>
                            <button className='extendedPurchase'>Purchase Now</button>
                        </div>
                        {
                            extendedlicenseData.map((data) => {
                                return <div className="plansContent"><span>{data.add ? <FaCheckCircle className='checkIcon' /> : <RiCloseCircleFill className='closeIcon' />}</span>
                                </div>
                            })
                        }
                    </div>
                </div> */}
            </section>
        </>
    )
}

export default LicensePlan
