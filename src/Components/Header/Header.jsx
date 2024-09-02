'use client'
// import '../../../public/Css/header.css'
import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiHamburgerMenu } from "react-icons/gi";
import Offcanvas from 'react-bootstrap/Offcanvas';
import navLogo from '../../Asset/wrteam logo.svg';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ProductDropdown from './ProductDropdown';
import ServiceDropdown from './ServiceDropdown';
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css";
import MorePagesDropdown from './MorePagesDropdown';

const Header = () => {

  const router = useRouter();
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [headerTop, setHeaderTop] = useState(0);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {

    const nav = typeof document !== 'undefined' && document.querySelector(".nav");
    setHeaderTop(nav.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };


  return (
    <>

      <Navbar expand="lg" id="header" className={`nav ${scroll > headerTop ? "sticky " : ""}`}>

        <div className='container'>

          <div className="row navbarContainer">
            <div className="col-sm-5 col-md-5 col-lg-5 ">
              <div id="leftSide">
                <div className="navLogo">
                  <Link href="/">  <Image height={0} width={0} loading="lazy" src={navLogo} alt="wrteam(bhuj) leading IOS and Android software development company" /> </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-7 col-md-7 col-lg-7">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                  <Link className={`nav-link ${router.pathname === '/' ? 'navActive' : ''}`} href="/"> Home</Link>

                  <ProductDropdown setShow={setShow} />

                  <ServiceDropdown setShow={setShow} />

                  <Link className={`nav-link ${router.pathname === '/portfolio' ? 'navActive' : ''}`} href="/portfolio">Portfolio</Link>

                  {/* <Link className={`nav-link ${router.pathname === '/career' ? 'navActive' : ''}`} href="/career">Career</Link> */}

                  <Link className={`nav-link ${router.pathname === '/about-us' ? 'navActive' : ''}`} href='/about-us'> About Us </Link>

                  {/* <Link className={`nav-link ${router.pathname === '/contact-us' ? 'navActive' : ''}`} href="/contact-us">Contact Us</Link> */}

                  <MorePagesDropdown setShow={setShow} />

                  <div id="rightSide">

                    <Link href="/hire-us"> <button className="homeCommon_btn"> Hire Us </button> </Link>

                  </div>
                </Nav>

              </Navbar.Collapse>
            </div>
          </div>
          <span onClick={handleShow} id='hamburg'><GiHamburgerMenu size={36} /></span>
        </div>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement='end'
        scroll={true}
        backdrop={true}>
        <Offcanvas.Header closeButton className='btn-close-white'>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="me-auto">

            <Link className={`nav-link ${router.pathname === '/' ? 'navActive' : ''}`} href="/"> Home</Link>

            <ProductDropdown setShow={setShow} />

            <ServiceDropdown setShow={setShow} />

            <Link className={`nav-link ${router.pathname === '/portfolio' ? 'navActive' : ''}`} href="/portfolio">Portfolio</Link>

            {/* <Link className={`nav-link ${router.pathname === '/career' ? 'navActive' : ''}`} href="/career">Career</Link> */}

            <Link className={`nav-link ${router.pathname === '/about-us' ? 'navActive' : ''}`} href='/about-us'> About Us </Link>

            {/* <Link className={`nav-link ${router.pathname === '/contact-us' ? 'navActive' : ''}`} href="/contact-us">Contact Us</Link> */}

            <MorePagesDropdown setShow={setShow} />

            <div id="rightSide">

              <Link href="/hire-us"> <button className="homeCommon_btn"> Hire Us </button> </Link>

            </div>
          </Nav>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Header
