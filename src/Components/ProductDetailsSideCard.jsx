import React from 'react'
import { FaCartShopping } from 'react-icons/fa6';
import Link from 'next/link';
import ProdctDetailsSkeleton from './Skeletons/ProdctDetailsSkeleton';

const ProductDetailsSideCard = ({ price, sales, files, rating, category, checkoutLink, loading }) => {
    return (
        <div>
            <div className="productDetailsCardWrapper">
                {
                    loading ?
                        <ProdctDetailsSkeleton /> :

                        <div className="card">
                            <div className="upperDiv">
                                <div className="priceWrapper">

                                    <span className='price'>Price :</span>
                                    <span>
                                        $ {price}
                                    </span>
                                </div>

                                <div className="checkoutLink">
                                    <Link href={checkoutLink} target='_blank'>
                                        {/* {console.log(checkoutLink,"linkinDetails")} */}
                                        <button className='checkOutBtn'>
                                            <FaCartShopping /> Buy Product
                                        </button>
                                    </Link>
                                </div>

                            </div>

                            <div className="middleDiv">

                                <span className='salesCount'> <span>{sales}</span> Sales</span>

                                <div className="filesInclude">
                                    <div className="files">
                                        <span className='fileTitle'>Files :</span>
                                        <span className='fileDesc'>{files}</span>

                                    </div>

                                    <span className='fileTitle'>Rating : <span className='fileDesc'>{rating}</span></span>


                                    <div className="files">

                                        <span className='fileTitle'>Category <span>:</span> </span>
                                        <span className='fileDesc'>{category}</span>
                                    </div>
                                </div>


                            </div>

                            <div className="bottomDiv">

                                <span>Want To Customization ?</span>

                                <Link href={'/hire-us'}>
                                    <button>Hire Us</button>
                                </Link>

                            </div>

                        </div>
                }

            </div>
        </div>
    )
}

export default ProductDetailsSideCard