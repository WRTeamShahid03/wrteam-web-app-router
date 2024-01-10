import Loader from '@/Components/Loader';
import { GetProductsApi } from '@/redux/actions/campaign';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

import ProductDetailsSideCard from '@/Components/ProductDetailsSideCard';

const index = () => {


    const [productsDetails, setProductDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [checkoutLink, setCheckoutLink] = useState('')

    const router = useRouter();

    const productSlug = router.query.slug
    // console.log("ProductRouter", productSlug)

    useEffect(() => {
        GetProductsApi({
            slug: productSlug,
            onSuccess: (response) => {
                // console.log(response.data, 'productDetailsState');
                setProductDetails(response.data);
                setCheckoutLink(response?.data?.checkout_url)
                setLoading(false)
            },
            onError: (error) => {
                console.log(error);
                toast.error('Something Went Wrong!');
                setLoading(true)

            }
        });
    }, [])

    useEffect(() => {
        // console.log(checkoutLink, "links")

    }, [checkoutLink])


    return (
        <div className='productDetailsPage container'>
            {
                loading ?
                    <Loader /> :
                    <div className="row">

                        <div className="col-sm-12 col-md-12 col-lg-9">

                            <div className="Wrapper">

                                {/* ProductDetails Here */}

                                <div dangerouslySetInnerHTML={{ __html: productsDetails?.description || "" }} />
                            </div>

                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-3">
                            <ProductDetailsSideCard price={productsDetails?.price} sales={productsDetails?.sales} files={productsDetails?.subcategory?.name} rating={productsDetails?.rating} category={productsDetails?.category?.name} checkoutLink={checkoutLink} loading={loading} />
                        </div>

                    </div>
            }
        </div>
    )
}

export default index