'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import productLogo from '../../../Asset/Images/product-detail-page/productLogo.png'
import productLogo2 from '../../../Asset/Images/product-detail-page/layout-2/ecart.png'
import Link from 'next/link'
import ProductDropdown from './ProductDropdown'
import ServiceDropdown from './ServiceDropdown'
import HelpDropDown from './HelpDropDown'
import MoreDropDown from './MoreDropDown'
import { GiHamburgerMenu } from "react-icons/gi";
import Offcanvas from 'react-bootstrap/Offcanvas';

const ProductDetailHeader = ({ layout }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <header className={`productDetailsNavbar ${layout === 2 ? 'layoutTwoHeader' : ''}`}>
                <div className="container">
                    <div className="navbarWrapper">
                        <div className="leftDiv">
                            <div className="productLogo">
                                <Link href={''}>  <Image src={!layout ? productLogo : productLogo2} height={0} width={0} alt='productLogo' /></Link>
                            </div>
                        </div>
                        <div className="centerDiv">
                            <Link href={'/'} className='nav-link'>
                                Home
                            </Link>
                            <ProductDropdown setShow={setShow} />
                            <ServiceDropdown setShow={setShow} />
                            <HelpDropDown setShow={setShow} />
                            <MoreDropDown setShow={setShow} />
                        </div>
                        <div className="rightDiv">
                            <Link href={''}>
                                <button className="productCommonBtn">
                                    Purchase Now
                                </button>
                            </Link>

                        </div>
                        <span onClick={handleShow} id='hamburg'><GiHamburgerMenu size={36} /></span>
                    </div>

                    <Offcanvas show={show} onHide={handleClose} placement='end'
                        scroll={true}
                        backdrop={true}>
                        <Offcanvas.Header closeButton className='btn-close-white'>
                            <Offcanvas.Title></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className="centerDiv">
                                <Link href={''} className='nav-link'>
                                    Home
                                </Link>
                                <ProductDropdown setShow={setShow} />
                                <ServiceDropdown setShow={setShow} />
                                <HelpDropDown setShow={setShow} />
                                <MoreDropDown setShow={setShow} />
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </header>
        </>
    )
}

export default ProductDetailHeader
