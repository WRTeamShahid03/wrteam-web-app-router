import { GET_PRODUCTS, GET_SEO_SETTINGS } from '@/utils/api';
import axios from 'axios';
import dynamic from 'next/dynamic'
// const ProductDetailsPage = dynamic(() => import('@/Components/pagesComponent/ProductDetailsPage'), { ssr: false })
const ProductDeatailPage = dynamic(() => import('@/Components/pagesComponent/ProductDeatailPage'), { ssr: false })



const Index = async ({ params }) => {

    // const generateDataforDetails = async () => {
    //     // console.log('slug === > ',slug.params)

    //     const slug = params?.slug;
    //     try {
    //         const response = await axios.get(
    //             `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_END_POINT}${GET_PRODUCTS}?slug=${slug}`
    //         );
    //         const SEOData = response.data;

    //         async function generateMetadata() {

    //             return {
    //                 title: SEOData && SEOData?.data?.seo_title,
    //                 description: SEOData && SEOData?.data?.seo_keywords,
    //                 keywords: SEOData && SEOData?.data?.seo_description,
    //                 openGraph: {
    //                     images: SEOData?.data?.ogImage ? [SEOData?.data?.ogImage] : [],
    //                 },
    //             }
    //         }

    //         generateMetadata()


    //         // console.log('SEOData =====>  ',SEOData)

    //         return {
    //             // title: SEOData && SEOData?.data?.seo_title,
    //             // description: SEOData && SEOData?.data?.seo_keywords,
    //             // keywords: SEOData && SEOData?.data?.seo_description,
    //             // openGraph: {
    //             //     images: SEOData?.data?.ogImage ? [SEOData?.data?.ogImage] : [],
    //             // },
    //             SEOData
    //         };
    //     } catch (error) {
    //         console.error("Error fetching MetaData:", error);
    //         return null;
    //     }
    // };


    const SEOData = await generateDataforDetails();

    // console.log('SEOData =>', SEOData)

    return (


        <>
            {console.log('SEOData =>', SEOData)}
            <ProductDeatailPage detailPageData={SEOData} />
        </>
    )
}


export default Index