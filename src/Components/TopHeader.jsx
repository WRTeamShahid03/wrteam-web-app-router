import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';

const TopHeader = () => {
  return (
    <div className='topHeader'>
      <span> Steals Of The Week Sale Is Live - Enjoy <span className='boldText'> Flat 50%</span> Discount</span>
      <Link href='https://wrteam.in/steals-of-the-week-sale/' target='_blank'><button >Buy Now <FaArrowRight /></button></Link>
    </div>
  )
}

export default TopHeader
