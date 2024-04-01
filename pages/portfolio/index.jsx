import Portfolio from '@/Components/pagesComponent/Portfolio'
import React from 'react'
import Meta from '@/Components/Seo/Meta';
import { GET_SEO_SETTINGS } from '@/utils/api';
import axios from 'axios';
import Head from 'next/head';


// This is seo api
// const fetchDataFromSeo = async (page) => {
//     try {
//         const response = await axios.get(
//             `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_END_POINT}${GET_SEO_SETTINGS}?type=contact_us`
//         );

//         const SEOData = response.data;

//         return SEOData;
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         return null;
//     }
// };

const index = (
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
                Our Work- Collection of Best Web & App Products-WRTeam
                </title>
                <meta
                    name="description"
                    content="WRTeam is a mobile app and web development company that helps bring your digital product visions to life. Contact us to create your best website or app.                    "
                />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <Portfolio />
        </>
    )
}

// let serverSidePropsFunction = null;
// if (process.env.NEXT_PUBLIC_SEO === "true") {
//     serverSidePropsFunction = async (context) => {
//         const { req } = context; // Extract query and request object from context
//         const currentURL = `${req.headers.host}${req.url}`;
//         const seoData = await fetchDataFromSeo();
//         // Pass the fetched data as props to the page component
//         return {
//             props: {
//                 seoData,
//                 currentURL,
//             },
//         };
//     };
// }

// export const getServerSideProps = serverSidePropsFunction;

export default index
