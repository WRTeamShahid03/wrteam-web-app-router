'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import productLogo from '../../../Asset/Images/product-detail-page/productLogo.png'
import Link from 'next/link'
import ProductDropdown from './ProductDropdown'
import ServiceDropdown from './ServiceDropdown'
import HelpDropDown from './HelpDropDown'
import MoreDropDown from './MoreDropDown'
import { GiHamburgerMenu } from "react-icons/gi";
import Offcanvas from 'react-bootstrap/Offcanvas';

const ProductDetailHeader = () => {
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [headerTop, setHeaderTop] = useState(0);
    const [scroll, setScroll] = useState(0);

    // useEffect(() => {

    //     const nav = typeof document !== 'undefined' && document.querySelector(".nav");
    //     setHeaderTop(nav.offsetTop);
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);

    // const handleScroll = () => {
    //     setScroll(window.scrollY);
    // };
    return (
        <>
            <header className='productDetailsNavbar'>
                <div className="container">
                    <div className="navbarWrapper">
                        <div className="leftDiv">
                            <div className="productLogo">
                                <Image src={productLogo} height={0} width={0} alt='productLogo' />
                            </div>
                        </div>
                        <div className="centerDiv">
                            <Link href={''} className='nav-link'>
                                Home
                            </Link>
                            <ProductDropdown />
                            <ServiceDropdown />
                            <HelpDropDown />
                            <MoreDropDown />
                        </div>
                        <div className="rightDiv">
                            <button className="productCommonBtn">
                                Purchase Now
                            </button>

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
                                <ProductDropdown />
                                <ServiceDropdown />
                                <HelpDropDown />
                                <MoreDropDown />
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </header>
        </>
    )
}

export default ProductDetailHeader
