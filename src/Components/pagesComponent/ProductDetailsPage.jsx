'use client'
import Loader from '@/Components/Loader';
import { GetProductsApi } from '@/redux/actions/campaign';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';


import ProductDetailsSideCard from '@/Components/ProductDetailsSideCard';
import Breadcrum from '../Breadcrum';
import Image from 'next/image';
import NoDataFound from '../NoDataFound';

const ProductDetailsPage = () => {


    const [productsDetails, setProductDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [checkoutLink, setCheckoutLink] = useState('')
    const [salePrice, setSalePrice] = useState('')
    const [landscape_preview, setLandscape_preview] = useState('')

    const router = useParams();

    // console.log(router)

    const productSlug = router.slug
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

    }, [checkoutLink, productSlug, salePrice])

    useEffect(() => {
        if (productsDetails?.codecanyon_other_data) {

            const data = JSON.parse(productsDetails?.codecanyon_other_data);

            // console.log('codecanyon_other_data => ', data)

            // Access the landscape_url from the codecanyon_other_data field
            const landscapeUrl = data?.previews?.landscape_preview?.landscape_url;
            setLandscape_preview(landscapeUrl)
        }
    }, [productsDetails])


    return (

        <>

            {/* <Breadcrum title={productsDetails.productTitle} blueText="Details" contentOne="Home" contentTwo="Products" contentThree={productsDetails?.category?.name == 'Web Development' ? "Web-Products" : "App-Products"} contentFour={productsDetails?.name} /> */}

            <div className='productDetailsPage container'>
                {
                    loading ?
                        <Loader /> :
                        <div className="row productDetailRow">

                            {
                                productsDetails?.length < 0 || productsDetails?.description == '' || productsDetails?.description == null ?
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <div className="wrapper d-flex justify-content-center align-items-center">
                                            <NoDataFound />
                                        </div>
                                    </div> : <>
                                        <div className="col-sm-12 col-md-12 col-lg-7">
                                            {
                                                productsDetails?.codecanyon_other_data ?
                                                    <div className="promoImgWrapper">
                                                        <Image src={landscape_preview} height={0} width={0} />
                                                    </div> : null
                                            }


                                            <div className="Wrapper">
                                                <div dangerouslySetInnerHTML={{ __html: productsDetails && productsDetails?.description || "" }} />
                                            </div>

                                        </div>

                                        <div className="col-sm-12 col-md-12 col-lg-5">
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