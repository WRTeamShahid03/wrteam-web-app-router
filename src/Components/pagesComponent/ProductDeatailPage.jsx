'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
const LayoutOne = dynamic(() => import('../ProductDetailPageLayout/layoutOne/LayoutOne'), { ssr: false })
const LayoutTwo = dynamic(() => import('../ProductDetailPageLayout/layoutTwo/LayoutTwo'), { ssr: false })
import { useParams, useRouter } from 'next/navigation'
import { GetProductsDetailsApi } from '@/redux/actions/campaign'
import Loader from '../Loader'
import { setLayoutData, setProductDetails } from '@/redux/reuducer/productLayoutSlice'
import NoDataFound from '../NoDataFound'

const ProductDeatailPage = ({ detailPageData }) => {

    const metadata = {
        title: detailPageData.detailPageData,
        description: detailPageData.description
    }

    const router = useParams()

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const slug = router?.slug;

    const [loading, setLoading] = useState(false)
    const [productData, setProductData] = useState([])

    console.log('detailPageData =>', detailPageData?.data)

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
                    setLoading(false)
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


    return (
        <div className='product_detail_page'>
            {
                loading && !isClient ? <Loader /> :
                    <>
                        {
                            productData ?
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
