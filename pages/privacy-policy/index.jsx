import TermsOfUse from '@/Components/pagesComponent/TermsOfUse';
import AboutUs from '../../src/Components/pagesComponent/AboutUs'
import Meta from '@/Components/Seo/Meta';
import { GET_SEO_SETTINGS } from '@/utils/api';
import axios from 'axios';
import Head from "next/head";
import { useEffect } from 'react';
import PrivacyPolicy from '@/Components/pagesComponent/PrivacyPolicy';

// This is seo api
const fetchDataFromSeo = async (page) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_END_POINT}${GET_SEO_SETTINGS}?type=privacy-policy`
    );

    const SEOData = response.data;
    // console.log('SEOData: ', SEOData)
    // console.log('SEOData.Data: ', SEOData?.data?.description)

    return SEOData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};


const Index = (
  { seoData, currentURL }
) => {

  return (

    <>
      <Meta
        title={seoData?.data && seoData?.data?.title}
        description={seoData?.data && seoData?.data?.description}
        keywords={seoData?.data && seoData?.data?.keywords}
        ogImage={seoData?.data && seoData?.data?.image}
        pathName={currentURL}
      />
      {/* <Head>
        <title>WRTeam bhuj based best IT company with all digital solutions.</title>
        <meta name="description" content="WRTeam Gujarat based IT company which has created code of website & application. Also provide UI/UX, IT consulting and digital marketing services." />
      </Head> */}
     <PrivacyPolicy/>
    </>
  )
}

let serverSidePropsFunction = null;
if (process.env.NEXT_PUBLIC_SEO === "true") {
  serverSidePropsFunction = async (context) => {
    const { req } = context; // Extract query and request object from context
    const currentURL = `${req.headers.host}${req.url}`;
    const seoData = await fetchDataFromSeo();
    // Pass the fetched data as props to the page component
    return {
      props: {
        seoData,
        currentURL,
      },
    };
  };
}

export const getServerSideProps = serverSidePropsFunction;

export default Index
