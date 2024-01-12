import React from 'react'
import ProductDetailsPage from '@/Components/pagesComponent/ProductDetailsPage';
import Head from 'next/head';
import Meta from '@/Components/Seo/Meta';
import { GET_PRODUCTS } from '@/utils/api';
import axios from 'axios';

// This is seo api
// const fetchDataFromSeo = async (slug) => {
//     try {
//         const response = await axios.get(
//             `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_END_POINT}${GET_PRODUCTS}?slug=${slug}`
//         );

//         const SEOData = response.data;
//         console.log(typeof (SEOData))

//         return SEOData;
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         return null;
//     }
// };


const Index = (
    // { seoData, currentURL }
) => {

    return (
        <>
            {/* <Meta
                title={seoData && seoData?.data?.title}
                description={seoData && seoData?.data?.description}
                keywords={seoData && seoData?.data?.keywords}
                ogImage={seoData && seoData?.data?.image}
                pathName={currentURL}
            /> */}
            <Head>
                <title>
                    Top IT company in India | Web Developer | App Developer - wrteam
                </title>
                <meta
                    name="description"
                    content="Grow your business with our top web developers, app developers, graphic designers and digital marketing and IT consulting services provider specialists."
                />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ProductDetailsPage />
        </>
    )
}

// let serverSidePropsFunction = null;
// if (process.env.NEXT_PUBLIC_SEO === "true") {
//     serverSidePropsFunction = async (context) => {
//         const { req } = context; // Extract query and request object from context
//         const { params } = req[Symbol.for('NextInternalRequestMeta')]._nextMatch;
//         // Accessing the slug property
//         const slugValue = params.slug;

//         // console.log(slugValue, "slugValue");
//         const currentURL = `${req.headers.host}${req.url}`;

//         const seoData = await fetchDataFromSeo(slugValue);
//         console.log("req=======", req);
//         // console.log("seoData=======", seoData);
//         return {
//             props: {
//                 seoData,
//                 currentURL,
//             },
//         };
//     };
// }
// export const getServerSideProps = serverSidePropsFunction;

export default Index