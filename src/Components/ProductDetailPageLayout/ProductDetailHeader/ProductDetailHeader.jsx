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
import { useSelector } from 'react-redux'
import { layoutSelector, productDataSelector } from '@/redux/reuducer/productLayoutSlice'
import navLogo from '../../../Asset/wrteam logo.svg';

const ProductDetailHeader = () => {

    const layout = useSelector(layoutSelector)

    const productData = useSelector(productDataSelector)

    console.log('productData redux =>',productData)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
      
    }, [productData])
    

    return (
        <>
            <header className={`productDetailsNavbar ${scrolled ? 'productDetailsStickyNavbar' : ''} ${layout === 1 ? 'layoutOneHeader' : ''}`}>
                <div className="container">
                    <div className="navbarWrapper">
                        <div className="leftDiv">
                            <div className="productLogo">
                                {
                                    productData?.icon_image ?
                                        <Link href={productData?.codecanyon_link ? productData?.codecanyon_link : '/'} target='_blank'>  <Image src={productData?.icon_image} className='productLogoImg' height={0} width={0} alt='productLogo' /></Link> :
                                        <Link href={'/'}>  <Image src={navLogo} className='companyLogo' height={0} width={0} alt='productLogo' /></Link>
                                }
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
                            <Link href={productData?.checkout_url ? productData?.checkout_url : '/'} target='_blank'>
                                <button className={`productCommonBtn ${layout === 1 ? 'layoutOneproductCommonBtn' : ''}`}>
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
                            <div className="rightDiv">
                                <Link href={''}>
                                    <button className={`productCommonBtn ${layout !== 1 ? 'layoutTwoproductCommonBtn' : ''}`}>
                                        Purchase Now
                                    </button>
                                </Link>

                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </header>
        </>
    )
}

export default ProductDetailHeader
