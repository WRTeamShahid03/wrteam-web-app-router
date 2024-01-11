import WebDevelopment from '../../../src/Components/pagesComponent/WebDevelopment.jsx'
import Meta from '@/Components/Seo/Meta';
import { GET_SEO_SETTINGS } from '@/utils/api';
import axios from 'axios';
import Head from "next/head";

// This is seo api
// const fetchDataFromSeo = async (page) => {
//   try {
//     const response = await axios.get(
//       `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_END_POINT}${GET_SEO_SETTINGS}?type=web_development`
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
        <title>WRTeam - Web App Development Service Provider IT Company</title>
        <meta name="description" content="Need a high speed website for business growth? Our expert web development team creates customised, responsive sites that engage users and boost roi." />
      </Head>
      <WebDevelopment />
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


