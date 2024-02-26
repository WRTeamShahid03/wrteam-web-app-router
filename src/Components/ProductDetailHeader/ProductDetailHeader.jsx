import Image from 'next/image'
import React from 'react'
import productLogo from '../../Asset/Images/product-detail-page/productLogo.png'
import Link from 'next/link'

const ProductDetailHeader = () => {
    return (
        <>
            <header className='productDetailsNavbar'>
                <div className="container">
                    <div className="navbarWrapper">
                        <div className="leftDiv">
                            <div className="productLogo">
                                <Image src={productLogo} height={0} width={0} alt='productLogo' />
                            </div>
                        </div>
                        <div className="centerDiv">
                            <Link href={''}>
                                Home
                            </Link>
                            <Link href={''}>
                                Home
                            </Link>
                            <Link href={''}>
                                Home
                            </Link>
                            <Link href={''}>
                                Home
                            </Link>
                            <Link href={''}>
                                Home
                            </Link>
                        </div>
                        <div className="rightDiv">

                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default ProductDetailHeader
