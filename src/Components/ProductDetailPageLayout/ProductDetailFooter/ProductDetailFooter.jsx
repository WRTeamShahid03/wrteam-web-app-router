'use client'
import Image from 'next/image'
import React from 'react'
import productLogo from '../../../Asset/Images/product-detail-page/ProductLogoFooter.png'
import productLogo2 from '../../../Asset/Images/product-detail-page/layout-2/ecart.png'
import codecanyon from '../../../Asset/Images/product-detail-page/Codecanyon.png'
import envato from '../../../Asset/Images/product-detail-page/Envato.png'
import navLogo from '../../../Asset/navLogo.svg';
import Link from 'next/link'

// layoutTwo imports 
import footerBg from '../../../Asset/Images/product-detail-page/layout-2/footerBg.jpg'
import playStore from '../../../Asset/Images/product-detail-page/layout-2/playStore.png'
import appStore from '../../../Asset/Images/product-detail-page/layout-2/appStore.png'

import { RiMailSendLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { useSelector } from 'react-redux'
import { layoutSelector, productDataSelector, supportLinksDataSelector } from '@/redux/reuducer/productLayoutSlice'


const ProductDetailFooter = () => {

  const layout = useSelector(layoutSelector)

  const productData = useSelector(productDataSelector)

  const supportLinks = useSelector(supportLinksDataSelector)

  return (
    <>

      <footer className='productDetailFooter'
        style={{ background: layout === 1 ? `url(${footerBg.src})` : '', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
              <div className="productInfo">
                <div>
                  {
                    productData?.icon_image ?
                      <Link href={productData?.codecanyon_link ? productData?.codecanyon_link : '/'} target='_blank'>  <Image src={productData?.icon_image} className='productLogoImg' height={0} width={0} alt='productLogo' /></Link> :
                      <Link href={'/'}>  <Image src={navLogo} className='companyLogo' height={0} width={0} alt='productLogo' /></Link>
                  }
                </div>
                <div className='storeImgs'>
                  {
                    productData?.codecanyon_link &&
                    <Link href={productData?.codecanyon_link} target='_blank'><Image src={codecanyon} height={0} width={0} alt='codecanyon' /></Link>
                  }
                  <Link href={'https://codecanyon.net/user/wrteam/portfolio'} target='_blank'><Image src={envato} height={0} width={0} alt='envato' /></Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
              <div className="linksWrapper servicesLinks">
                <span className='title'>Company</span>
                <Link href={'/about-us'}><span className='desc'>About Us</span></Link>
                <Link href={'/contact-us'}><span className='desc'>Contact Us</span></Link>
                <Link href={'/privacy-policy'}><span className='desc'>Privacy Policy</span></Link>
                <Link href={'/privacy-policy'}><span className='desc'>Service Policy</span></Link>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
              <div className="linksWrapper">
                <span className='title'>Help Center</span>
                {
                  supportLinks && supportLinks[0]?.link &&
                  <Link href={supportLinks[0]?.link} target='_blank'><span className='desc'>Support</span></Link>
                }

                {
                  supportLinks && supportLinks[1]?.link &&
                  <Link href={supportLinks[1]?.link} target='_blank'><span className='desc'>Documents</span></Link>
                }

                <Link href={'/contact-us'}><span className='desc'>Contact Us</span></Link>
                <Link href={'/hire-us'}><span className='desc'>Hire Us</span></Link>


              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
              <div className="linksWrapper">
                <span className='title'>Contact Info</span>
                <div className='contactDiv'>
                  <span><RiMailSendLine /></span>
                  <div>
                    <span className='desc'>Email</span>
                    <Link href={'mailto:Support@wrteam.in'}><span>Support@wrteam.in</span></Link>
                  </div>
                </div>

                <div className='contactDiv'>
                  <span><FiPhoneCall /></span>
                  <div>
                    <span className='desc'>Contact Us</span>
                    <Link href={'tel:+91 97979 45459'}><span>+91 97979 45459</span></Link>
                  </div>
                </div>

                <div className='contactDiv'>
                  <span><IoLocationOutline size={30} /></span>
                  <div>
                    <span className='desc'>Address</span>
                    <span>#262-263, Time Square Empire, SH 42 Mirjapar Highway, Bhuj - Kutch 370001 Gujarat India.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="copyRight">
          <span>Copyright © 2024 WRTeam | Powered by WRTeam</span>
        </div>
      </footer>
      {/* {
        layout !== 1 ?
          <footer className='productDetailFooter'>
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                  <div className="productInfo">
                    <div>
                      {
                        productData?.icon_image ?
                          <span> <Image src={productData?.icon_image} className='productLogoImg' height={0} width={0} alt='productLogo' /></span> :
                          <Link href={'/'}>  <Image src={navLogo} className='companyLogo' height={0} width={0} alt='productLogo' /></Link>
                      }
                    </div>
                    <div>
                      <span>eBroker: Rule Your Real Estate Realm. Manage properties, connect seamlessly, and thrive with this all-in-one app for landlords and renters.</span>
                    </div>
                    <div>
                      <Link href={''}><Image src={codecanyon} height={0} width={0} alt='codecanyon' /></Link>
                      <Link href={''}><Image src={envato} height={0} width={0} alt='envato' /></Link>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                  <div className="linksWrapper servicesLinks">
                    <span className='title'>Services</span>
                    <Link href={'/services/installation'}><span className='desc'>Installtion</span></Link>
                    <Link href={'/services/customization'}><span className='desc'>Customization</span></Link>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                  <div className="linksWrapper">
                    <span className='title'>Demos</span>
                    {
                      demoLinks[0]?.link &&
                      <Link href={demoLinks[0]?.link}><span className='desc'>Android App</span></Link>
                    }

                    {
                      demoLinks[1]?.link &&
                      <Link href={demoLinks[1]?.link}><span className='desc'>iOS App</span></Link>
                    }

                    {
                      demoLinks[3]?.link &&
                      <Link href={demoLinks[3]?.link}><span className='desc'>Admin Panel</span></Link>
                    }

                    {
                      demoLinks[2]?.link &&
                      <Link href={demoLinks[2]?.link}><span className='desc'>Website</span></Link>
                    }
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                  <div className="linksWrapper">
                    <span className='title'>Help</span>
                    {
                      supportLinks && supportLinks[1]?.link &&
                      <Link href={supportLinks[1]?.link} target='_blank'><span className='desc'>Documents</span></Link>
                    }

                    {
                      supportLinks && supportLinks[0]?.link &&
                      <Link href={supportLinks[0]?.link} target='_blank'><span className='desc'>Support</span></Link>
                    }
                    <Link href={'/contact-us'} target='_blank'><span className='desc'>Contact Us</span></Link>
                    <Link href={'/hire-us'} target='_blank'><span className='desc'>Hire Us</span></Link>
                  </div>
                </div>

              </div>
            </div>
            <div className="copyRight">
              <span>Copyright © 2024 WRTeam | Powered by WRTeam</span>
            </div>
          </footer>
          :
          <footer className='productDetailFooter'
            style={{ background: `url(${footerBg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
          >
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                  <div className="productInfo">
                    <div>
                      {
                        productData?.icon_image ?
                          <Link href={''}>  <Image src={productData?.icon_image} className='productLogoImg' height={0} width={0} alt='productLogo' /></Link> :
                          <Link href={'/'}>  <Image src={navLogo} className='companyLogo' height={0} width={0} alt='productLogo' /></Link>
                      }
                    </div>
                    <div className='storeImgs'>
                      <Link href={''}><Image src={playStore} height={0} width={0} alt='playStore' /></Link>
                      <Link href={''}><Image src={appStore} height={0} width={0} alt='appStore' /></Link>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                  <div className="linksWrapper servicesLinks">
                    <span className='title'>Company</span>
                    <Link href={'/about-us'}><span className='desc'>About Us</span></Link>
                    <Link href={'/contact-us'}><span className='desc'>Contact Us</span></Link>
                    <Link href={'/privacy-policy'}><span className='desc'>Privacy Policy</span></Link>
                    <Link href={'/privacy-policy'}><span className='desc'>Service Policy</span></Link>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                  <div className="linksWrapper">
                    <span className='title'>Help Center</span>
                    {
                      supportLinks && supportLinks[0]?.link &&
                      <Link href={supportLinks[0]?.link} target='_blank'><span className='desc'>Support</span></Link>
                    }

                    {
                      supportLinks && supportLinks[1]?.link &&
                      <Link href={supportLinks[1]?.link} target='_blank'><span className='desc'>Documents</span></Link>
                    }

                    <Link href={'/contact-us'}><span className='desc'>Contact Us</span></Link>
                    <Link href={'/hire-us'}><span className='desc'>Hire Us</span></Link>


                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                  <div className="linksWrapper">
                    <span className='title'>Contact Info</span>
                    <div className='contactDiv'>
                      <span><RiMailSendLine /></span>
                      <div>
                        <span className='desc'>Email</span>
                        <Link href={'mailto:Support@wrteam.in'}><span>Support@wrteam.in</span></Link>
                      </div>
                    </div>

                    <div className='contactDiv'>
                      <span><FiPhoneCall /></span>
                      <div>
                        <span className='desc'>Contact Us</span>
                        <Link href={'tel:+91 97979 45459'}><span>+91 97979 45459</span></Link>
                      </div>
                    </div>

                    <div className='contactDiv'>
                      <span><IoLocationOutline size={30} /></span>
                      <div>
                        <span className='desc'>Address</span>
                        <span>#262-263, Time Square Empire, SH 42 Mirjapar Highway, Bhuj - Kutch 370001 Gujarat India.</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="copyRight">
              <span>Copyright © 2024 WRTeam | Powered by WRTeam</span>
            </div>
          </footer>
      } */}
    </>


  )
}

export default ProductDetailFooter
