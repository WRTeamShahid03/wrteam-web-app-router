import { GET_SEO_SETTINGS } from '@/utils/api';
import axios from 'axios';  
import ProductDeatailPage from '@/Components/pagesComponent/ProductDeatailPage'
import React from 'react'


export const generateMetadata = async () => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_END_POINT}${GET_SEO_SETTINGS}?type=home`
        );
        const SEOData = response.data;

        return {
            title: SEOData?.data?.title,
            openGraph: {
                images: SEOData?.data?.ogImage ? [SEOData?.data?.ogImage] : [],
            },
        };
    } catch (error) {
        console.error("Error fetching MetaData:", error);
        return null;
    }
};

const index = () => {

    return (
        <>
            <ProductDeatailPage />
        </>
    )
}

export default index
