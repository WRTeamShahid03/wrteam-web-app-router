import { GET_SEO_SETTINGS } from '@/utils/api';
import axios from 'axios';
import TermsOfUse from '@/Components/pagesComponent/TermsOfUse';


export const generateMetadata = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_END_POINT}${GET_SEO_SETTINGS}?type=terms_of_use`
    );
    const SEOData = response.data;

    return {
      title: SEOData?.data?.title,
      description: SEOData?.data?.description,
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
      <TermsOfUse />
    </>
  )
}

export default page
