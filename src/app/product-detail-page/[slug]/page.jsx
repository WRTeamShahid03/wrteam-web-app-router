import { GET_PRODUCTS } from "@/utils/api";
import axios from "axios";
import dynamic from "next/dynamic";
const ProductDeatailPage = dynamic(() => import('@/Components/pagesComponent/ProductDeatailPage'), { ssr: false })

const getDetailsProductData = async (params) => {
    const slug = params?.slug;
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_END_POINT}${GET_PRODUCTS}?slug=${slug}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export async function generateMetadata({ params }) {
    const getDatafromProductApi = await getDetailsProductData(params);
    return {
        title: getDatafromProductApi.data?.seo_title,
        description: getDatafromProductApi && getDatafromProductApi?.data?.seo_keywords,
        keywords: getDatafromProductApi && getDatafromProductApi?.data?.seo_description,
        openGraph: {
            images: getDatafromProductApi?.data?.ogImage ? [getDatafromProductApi?.data?.ogImage] : [],
        },
    };
}

const Index = async ({ params }) => {
    const getDatafromProductApi = await getDetailsProductData(params);
    return (
        <>
            <ProductDeatailPage detailPageData={getDatafromProductApi} />
        </>
    );
};
export default Index;
