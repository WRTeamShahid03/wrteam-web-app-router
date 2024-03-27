import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';

const TopHeader = () => {
  return (
    <div className='topHeader'>
      <span> <span> 50% discount</span> on <span>Elite Quiz App & Web</span> </span>
      <Link href='https://1.envato.market/nLWvR9' target='_blank'><button >Buy Now <FaArrowRight /></button></Link>
    </div>
  )
}

export default TopHeader
