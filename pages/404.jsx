import React from 'react'
import err404 from '../src/Asset/Images/404.png'
import NoDataImg from '../src/Asset/Images/NoDataImg.webp'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa6'

const Index = ({ page }) => {
  return (
    <div className='err404'>
      {
        page == 'product-detail' ?
          <Image height={0} width={0} loading="lazy" src={NoDataImg} alt="N0-Data-Found-Img" /> :
          <Image height={0} width={0} loading="lazy" src={err404} alt="404-Img" />
      }
      <Link href='/' ><button className='btn'><FaArrowLeft /> Back</button></Link>
    </div>
  )
}

export default Index
