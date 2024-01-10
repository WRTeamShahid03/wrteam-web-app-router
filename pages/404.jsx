import React from 'react'
import err404 from '../src/Asset/Images/404.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa6'

const Index = () => {
  return (
    <div className='err404'>
      <Image height={0} width={0} loading="lazy" src={err404} alt="" />
      <Link href='/' ><button className='btn'><FaArrowLeft/> Back</button></Link>
    </div>
  )
}

export default Index
