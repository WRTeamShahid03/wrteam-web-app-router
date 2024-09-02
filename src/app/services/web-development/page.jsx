import WebDevelopment from '@/Components/pagesComponent/WebDevelopment.jsx'
import { GET_SEO_SETTINGS } from '@/utils/api';
import axios from 'axios';

export const generateMetadata = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_END_POINT}${GET_SEO_SETTINGS}?type=web_development`
    );
    const SEOData = response.data;

    return {
      title: SEOData?.data?.title,
      description: SEOData?.data?.description,
      keywords:  SEOData?.data?.keywords,
      openGraph: {
        images: SEOData?.data?.ogImage ? [SEOData?.data?.ogImage] : [],
      },
    };
  } catch (error) {
    console.error("Error fetching MetaData:", error);
    return null;
  }
};

const page = () => {

  return (
    <>
      <WebDevelopment />
    </>
  )
}


export default page


