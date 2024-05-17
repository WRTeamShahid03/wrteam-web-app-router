'use client'
import Image from 'next/image'
import React from 'react'
import productLogo from '../../../Asset/Images/product-detail-page/ProductLogoFooter.png'
import codecanyon from '../../../Asset/Images/product-detail-page/Codecanyon.png'
import envato from '../../../Asset/Images/product-detail-page/Envato.png'
import Link from 'next/link'

const ProductDetailFooter = () => {

  const linksData = [
    {
      id: 0,
      title: '',
      link1: 'Installtion',
      link1link: '/services/installtion',
      link1: 'Customization',
      link1link: '/services/customization'
    }
  ]

  return (
    <footer className='productDetailFooter'>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <div className="productInfo">
              <div>
                <Link href={''}><Image src={productLogo} height={0} width={0} alt='productLogo' /></Link>
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
              <Link href={''}><span className='desc'>Customer App</span></Link>
              <Link href={''}><span className='desc'>Seller App</span></Link>
              <Link href={''}><span className='desc'>Admin Panel</span></Link>
              <Link href={''}><span className='desc'>Delivery Panel</span></Link>
              <Link href={''}><span className='desc'>Website</span></Link>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <div className="linksWrapper">
              <span className='title'>Help</span>
              <Link href={''}><span className='desc'>Documents</span></Link>
              <Link href={''}><span className='desc'>Support</span></Link>
              <Link href={'/contact-us'}><span className='desc'>Contact Us</span></Link>
              <Link href={'/hire-us'}><span className='desc'>Hire Us</span></Link>
            </div>
          </div>

        </div>
      </div>
      <div className="copyRight">
        <span>Copyright © 2024 WRTeam | Powered by WRTeam</span>
      </div>
    </footer>
  )
}

export default ProductDetailFooter
