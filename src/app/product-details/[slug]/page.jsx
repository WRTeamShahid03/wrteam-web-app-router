import { GET_PRODUCTS, GET_SEO_SETTINGS } from '@/utils/api';
import axios from 'axios';
// import ProductDetailsPage from '@/Components/pagesComponent/ProductDetailsPage';
import dynamic from 'next/dynamic'
const ProductDetailsPage = dynamic(() => import('@/Components/pagesComponent/ProductDetailsPage'), { ssr: false })

export const generateMetadata = async (params) => {
    // console.log('slug === > ',slug.params)
    const slug = params?.params?.slug
    try {
        const response = await axios.get(
           `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_END_POINT}${GET_PRODUCTS}?slug=${slug}`
        );
        const SEOData = response.data;

        // console.log('SEOData =====>  ',SEOData)

        return {
            title: SEOData && SEOData?.data?.seo_title,
            description: SEOData && SEOData?.data?.seo_keywords,
            keywords: SEOData && SEOData?.data?.seo_description,
            openGraph: {
                images: SEOData?.data?.ogImage ? [SEOData?.data?.ogImage] : [],
            },
        };
    } catch (error) {
        console.error("Error fetching MetaData:", error);
        return null;
    }
};


const Index = () => {

    return (
        <>
            <ProductDetailsPage />
        </>
    )
}


Index.getInitialProps = async ({ query }) => {
    const { slug } = query;
    return { slug };
};


export default Index