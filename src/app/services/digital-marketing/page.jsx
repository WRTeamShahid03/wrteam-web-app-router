import { GET_SEO_SETTINGS } from '@/utils/api';
import axios from 'axios';
import DigitalMarketing from "@/Components/pagesComponent/DigitalMarketing"

export const generateMetadata = async () => {
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_END_POINT}${GET_SEO_SETTINGS}?type=digital_marketing`
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

const page = () => {

    return (
        <>
            <DigitalMarketing />
        </>
    )
}

export default page
