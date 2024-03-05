import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';

const TopHeader = () => {
  return (
    <div className='topHeader'>
      <span> Get eCommerce Business Solution with <span className='boldText'> 50% Discount </span></span>
      <Link href='https://wrteam.in/product-details/eshop-multipurpose-ecommercestore-website/' target='_blank'><button >Buy Now <FaArrowRight /></button></Link>
    </div>
  )
}

export default TopHeader
