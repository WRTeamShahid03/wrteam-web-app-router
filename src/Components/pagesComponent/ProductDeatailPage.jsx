'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useParams, useRouter } from 'next/navigation'
import { GetProductsDetailsApi } from '@/redux/actions/campaign'
import { setLayoutData, setProductDetails } from '@/redux/reuducer/productLayoutSlice'

const LayoutOne = dynamic(() => import('../ProductDetailPageLayout/layoutOne/LayoutOne'), { ssr: false })
const LayoutTwo = dynamic(() => import('../ProductDetailPageLayout/layoutTwo/LayoutTwo'), { ssr: false })
const Loader = dynamic(() => import('../Loader'), { ssr: false })
const NoDataFound = dynamic(() => import('../NoDataFound'), { ssr: false })

const ProductDeatailPage = ({ detailPageData }) => {

    const detailPageDataLength = Object.keys(detailPageData?.data).length

    const router = useParams()

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const slug = router?.slug;

    const [loading, setLoading] = useState(true)
    const [productData, setProductData] = useState([])

    // console.log('detailPageData =>', detailPageData?.data)

    useEffect(() => {
        if (slug) {
            setLoading(true)
            GetProductsDetailsApi({
                slug: slug,
                onSuccess: (response) => {
                    setProductData(response?.data);
                    document.documentElement.style.setProperty('--productPage-primary-color', response && response?.data?.theme_color)
                    // console.log(response?.data?.style, 'style')
                    // console.log(response?.data?.theme_color, 'theme_color')
                    setLayoutData({ data: response?.data?.style === 1 ? 1 : 2 })
                    setProductDetails({ data: detailPageData?.data })

                    detailPageDataLength > 0 ? setLoading(false) : setLoading(true)
                    // console.log('productDetails =>', response.data)
                },
                onError: (error) => {
                    setLoading(false)
                    setProductData([]);
                    console.log('productDetails =>', error);
                }
            });
        }
    }, [slug])

    // useEffect(() => {
    //     const objectLength = Object.keys(detailPageData?.data).length
    //     if (detailPageData && objectLength > 0) {
    //         setLoading(false)
    //     }
    //     else {
    //         setLoading(true)
    //     }
    //     // console.log('detailPageData => ',typeof detailPageData?.data )
    //     // console.log('detailPageData?.length => ',objectLength)
    // }, [detailPageData])



    return (
        <div className='product_detail_page'>
            {
                loading ? <Loader /> :
                    <>
                        {
                            productData && isClient ?
                                productData?.style === 1 ?
                                    <LayoutOne productData={productData} /> :
                                    <LayoutTwo productData={productData} />
                                : <NoDataFound />
                        }
                    </>
            }
        </div>
    )
}

export default ProductDeatailPage
