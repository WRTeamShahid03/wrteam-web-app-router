import Image from 'next/image'
import React from 'react'
import logo from '../../Asset/navLogo.svg'

const FreeCodeHeader = () => {
  return (
    <div className='freeCodeHeader  container'>
      <Image src={logo} width={0} height={0} className=''/>
    </div>
  )
}

export default FreeCodeHeader
