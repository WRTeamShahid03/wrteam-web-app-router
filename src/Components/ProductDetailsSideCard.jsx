import React from 'react'
import { FaCartShopping } from 'react-icons/fa6';
import Link from 'next/link';
import ProdctDetailsSkeleton from './Skeletons/ProdctDetailsSkeleton';
import { LiaStarSolid } from 'react-icons/lia';
import { BsStarHalf } from 'react-icons/bs';

const ProductDetailsSideCard = ({ loading, data, checkoutLink }) => {
    // console.log(checkoutLink, "slugData in detailPage")
    // console.log(data, "dataaaa")

    console.log(data.sale_price,'saleee')
    const renderStars = (rating) => {
        const totalStars = 5;
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        const stars = [];

        for (let i = 0; i < totalStars; i++) {
            if (i < fullStars) {
                stars.push(<LiaStarSolid key={i} size={18} color='#FFA800' />);
            } else if (hasHalfStar && i === fullStars) {
                stars.push(<BsStarHalf key='half' size={15} color='#FFA800' />);
            } else {
                stars.push(<LiaStarSolid key={i} size={18} color='gray' />);
            }
        }

        return stars;
    };
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
                                    {
                                        data?.sale_price == '' || data?.sale_price === null ?
                                            <span>
                                                ${data?.price}
                                            </span> :
                                            <span>
                                                <span style={{textDecoration: 'line-through',color: '#22A869',fontSize: '24px',marginRight: '4px'}}>${data?.price}</span>
                                                <span className='salePrice'>${data?.sale_price}</span>
                                            </span>
                                    }

                                </div>

                                <div className="checkoutLink">
                                    <Link href={data && data?.checkout_url ? data?.checkout_url : "/"} target='_blank'>
                                        {/* {console.log(checkoutLink,"linkinDetails")} */}
                                        <button className='checkOutBtn'>
                                            <FaCartShopping /> Buy Product
                                        </button>
                                    </Link>
                                </div>

                            </div>

                            <div className="middleDiv">

                                <span className='salesCount'> <span>{data?.sales}</span> Sales</span>

                                <div className="filesInclude">
                                    <div className="files">
                                        <span className='fileTitle'>Files :</span>
                                        <span className='fileDesc'>{data?.subcategory?.name}</span>

                                    </div>

                                    <span className='fileTitle'>Rating :
                                        <span className='fileDesc'>{data?.rating}</span>
                                        <span className='stars'>{renderStars(data?.rating)}</span>
                                    </span>


                                    <div className="files">

                                        <span className='fileTitle'>Category <span>:</span> </span>
                                        <span className='fileDesc'>{data?.category?.name}</span>
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