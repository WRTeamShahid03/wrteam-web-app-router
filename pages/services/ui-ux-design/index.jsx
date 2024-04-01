import UIUXDevelopment from '@/Components/pagesComponent/UIUXDevelopment'
import Meta from '@/Components/Seo/Meta';
import { GET_SEO_SETTINGS } from '@/utils/api';
import axios from 'axios';
import Head from "next/head";

// This is seo api
// const fetchDataFromSeo = async (page) => {
//   try {
//     const response = await axios.get(
//       `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_END_POINT}${GET_SEO_SETTINGS}?type=ui_ux_development`
//     );

//     const SEOData = response.data;

//     return SEOData;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return null;
//   }
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
        <title>UI/UX Service Provider IT Company | Graphic Designer - WRTeam</title>
        <meta name="description" content="Want to improve user experience? User engagement and brand positioning are given top priority by our UI/UX team while creating designs. Click Now!" />
      </Head>
      <UIUXDevelopment />
    </>
  )
}


// let serverSidePropsFunction = null;
// if (process.env.NEXT_PUBLIC_SEO === "true") {
//   serverSidePropsFunction = async (context) => {
//     const { req } = context; // Extract query and request object from context
//     const currentURL = `${req.headers.host}${req.url}`;
//     const seoData = await fetchDataFromSeo();
//     // Pass the fetched data as props to the page component
//     return {
//       props: {
//         seoData,
//         currentURL,
//       },
//     };
//   };
// }

// export const getServerSideProps = serverSidePropsFunction;

export default Index
