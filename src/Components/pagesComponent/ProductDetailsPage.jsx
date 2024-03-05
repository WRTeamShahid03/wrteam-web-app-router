import Loader from '@/Components/Loader';
import { GetProductsApi } from '@/redux/actions/campaign';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import NoDataFound from '../../../pages/404'

import ProductDetailsSideCard from '@/Components/ProductDetailsSideCard';
import Breadcrum from '../Breadcrum';

const ProductDetailsPage = () => {


    const [productsDetails, setProductDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [checkoutLink, setCheckoutLink] = useState('')
    const [salePrice, setSalePrice] = useState('')

    const router = useRouter();

    const productSlug = router.query.slug
    // console.log("ProductRouter", productSlug)

    useEffect(() => {
        if (productSlug) {
            GetProductsApi({
                slug: productSlug,
                onSuccess: (response) => {
                    // console.log(response.data, 'productDetailsState');
                    setProductDetails(response.data);
                    setCheckoutLink(response?.data?.checkout_url)
                    setSalePrice(response?.data?.sale_price)
                    setLoading(false)
                },
                onError: (error) => {
                    console.log(error);
                    toast.error('Something Went Wrong!');
                    setLoading(true)

                }
            });
        }
    }, [productSlug])

    useEffect(() => {
        // console.log(salePrice, "links")

    }, [checkoutLink, productSlug,salePrice])


    return (

        <>

            {/* <Breadcrum title={productsDetails.productTitle} blueText="Details" contentOne="Home" contentTwo="Products" contentThree={productsDetails?.category?.name == 'Web Development' ? "Web-Products" : "App-Products"} contentFour={productsDetails?.name} /> */}

            <div className='productDetailsPage container'>
                {
                    loading ?
                        <Loader /> :
                        <div className="row">

                            {
                                productsDetails.length < 0 || productsDetails.description == '' || productsDetails.description == null ?
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <div className="wrapper d-flex justify-content-center align-items-center">
                                            <NoDataFound page={'product-detail'} />
                                        </div>
                                    </div> : <>
                                        <div className="col-sm-12 col-md-12 col-lg-9">

                                            <div className="Wrapper">
                                                <div dangerouslySetInnerHTML={{ __html: productsDetails && productsDetails?.description || "" }} />
                                            </div>

                                        </div>

                                        <div className="col-sm-12 col-md-12 col-lg-3">
                                            <ProductDetailsSideCard data={productsDetails} checkoutLink={checkoutLink} salePrice={salePrice} />
                                        </div>
                                    </>
                            }

                        </div>
                }
            </div >
        </>

    )
}

export default ProductDetailsPage