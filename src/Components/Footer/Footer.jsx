// import '../../../public/Css/footer.css'
import { FaLocationDot } from "react-icons/fa6";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { BsArrowRightCircle, BsFillTelephoneFill } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import navLogo from '../../Asset/navLogo.svg'
import GetInTouch from "../GetInTouch";
import { useRouter } from "next/router";
import Link from "next/link"
import Image from "next/image";

const Footer = () => {

   const router = useRouter()
   const { pathname } = router;

   // Check if the current route contains "contact-us"
   const isContactUsPage = pathname.includes("contact-us");

   return (
      <>
         <footer id='footer'>
            {!isContactUsPage && <GetInTouch />}

            <div className={`container footerContainer  ${isContactUsPage ? "footerTopPad " : ""}`}>
               <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-2">
                     <div className="cont logoCont">
                        <div className="footLogo">
                           <Link href={'/'}>
                           <Image height={0} width={0} loading="lazy" src={navLogo} alt='wrteam(bhuj) leading IOS and Android software development company' />
                           </Link>

                        </div>
                        <span>WRTeam has a creative and dedicated group of developers who are masters in app development and Web development with a nice to deliver quality solutions to customers across the globe.</span>
                        <div className='socialIcons'>
                           <span id='followSpan'>Follow Us</span>
                           <span className='icons'>
                              <Link target='_blank' href="https://www.facebook.com/wrteam.in">
                                 <BsFacebook />
                              </Link>
                              <Link target='_blank' href="https://www.instagram.com/wrteam.in/">
                                 <FaInstagram />
                              </Link>
                              <Link target='_blank' href="https://www.linkedin.com/company/wrteam/">
                                 <BsLinkedin />
                              </Link>
                              <Link target='_blank' href="https://www.youtube.com/channel/UCLt9XRUuiWsqKng4681_6cQ">
                                 <PiYoutubeLogoFill />
                              </Link>
                           </span>
                        </div>
                     </div>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-2">
                     <div className="cont productCont">
                        <span className='footercontHeading'>Menu Links</span>
                        <div className="flinks">
                           <span className='footerArrow'> < BsArrowRightCircle size={18} /></span>
                           <Link href='/about-us'>  <span className='footerLinks'> About Us</span></Link>

                        </div>

                        <div className="flinks">

                           <span className='footerArrow'> < BsArrowRightCircle size={18} /></span>
                           <Link href='/career'><span className='footerLinks'> Career</span></Link>

                        </div>

                        <div className="flinks">

                           <span className='footerArrow'> < BsArrowRightCircle size={18} /></span>
                           <Link href='/contact-us'> <span className='footerLinks'> Contact Us</span></Link>
                        </div>

                        <div className="flinks">
                           <span className='footerArrow'> < BsArrowRightCircle size={18} /></span>
                           <Link href='/hire-us'> <span className='footerLinks'>Hire Us</span></Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-2">

                     <div className="cont companyCont">
                        <span className='footercontHeading'>Services</span>

                        <div className="flinks">
                           <span className="footerArrow"> < BsArrowRightCircle size={18} /></span>
                           <Link href='/services/web-development'> <span className="footerLinks"> Web Development</span></Link>
                        </div>

                        <div className="flinks">
                           <span className="footerArrow"> < BsArrowRightCircle size={18} /></span>
                           <Link href='/services/app-development'> <span className="footerLinks"> App Development</span></Link>
                        </div>

                        <div className="flinks">
                           <span className="footerArrow"> < BsArrowRightCircle size={18} /></span>
                           <Link href='/services/ui-ux-design'> <span className="footerLinks"> UI/UX Design Service</span></Link>
                        </div>

                        <div className="flinks">
                           <span className="footerArrow"> < BsArrowRightCircle size={18} /></span>
                           <Link href='/services/digital-marketing'> <span className="footerLinks"> Digital Marketing Service</span></Link>
                        </div>
                     </div>

                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-2">

                     <div className="cont policyCont">
                        <span className='footercontHeading'>Product</span>

                        <div className="flinks">
                           <span className='footerArrow'> < BsArrowRightCircle size={18} /> </span>
                           <Link href='/products/web-products'>  <span className='footerLinks'> Web Products</span></Link>
                        </div>

                        <div className="flinks">
                           <span className='footerArrow'> < BsArrowRightCircle size={18} /></span>
                           <Link href='/products/app-products'><span className='footerLinks'>  App Products</span></Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-2" id='reachus_sect'>

                     <div className="cont reachusCont">
                        <span className='footercontHeading'>Get in Touch</span>

                        <div className="contactDetails">

                           <div className="footContCards">
                              <div className="contIconDiv">
                                 <span className='contactIcons'> <BsFillTelephoneFill size={22} /> </span>
                              </div>
                              <div className="contactContent">
                                 <span className='footerLinks'> Call </span>
                                 <span className='footerLinks'> <Link href={'tel:+91 97979 45459'}>+91 97979 45459</Link> </span>
                              </div>
                           </div>

                           <div className="footContCards">
                              <div className="contIconDiv">
                                 <span className='contactIcons'><AiOutlineMail size={22} />  </span>
                              </div>
                              <div className="contactContent">
                                 <span className='footerLinks'> Mail </span>
                                 <span className='footerLinks' ><Link href={'mailto:support@wrteam.in'}>Support@wrteam.in</Link>  </span>
                              </div>
                           </div>

                           <div className="footContCards">
                              <div className="contIconDiv">
                                 <span className='contactIcons' id='locationIcon'> <FaLocationDot size={22} /> </span>
                              </div>
                              <div className="contactContent">
                                 <span className='footerLinks'> Office Address </span>
                                 <span className='footerLinks'>  #262-263, Time Square Empire, SH 42 Mirjapar Highway, Bhuj - Kutch 370001 Gujarat India.
                                 </span>
                              </div>
                           </div>



                        </div>

                     </div>
                  </div>
               </div>
               <div className="copyRight ">
                  <span>Copyright © 2024 WRTeam | Powered by WRTeam</span>
                  <span>
                     <Link href='/terms-of-use'>Terms of Use</Link> | <Link href={'/privacy-policy'}>Privacy Policy</Link> | <Link href={'copyright-and-disclaimer'}>Copyright & Disclaimer</Link> | <Link href='/refund-policy'>Refund Policy</Link> | <Link href='/cancellation-policy'>Cancellation Policy</Link> | <Link href='/delivery-policy'>Delivery Policy</Link>
                     </span>
               </div>
            </div>


         </footer>
      </>
   )
}

export default Footer
