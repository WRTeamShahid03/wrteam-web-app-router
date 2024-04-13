import { Providers } from "@/redux/store/providers";
import { store } from "@/redux/store";
import React, { useEffect, useState } from "react";
import "../public/Css/style.css";
import "../public/Css/responsive.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import TopHeader from "@/Components/TopHeader";
import { GetSeoSettingsApi } from "@/redux/actions/campaign";
import Loader from "@/Components/Loader";
import 'react-loading-skeleton/dist/skeleton.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useRouter } from "next/router";
import ProductDetailHeader from "@/Components/ProductDetailPageSects/ProductDetailHeader/ProductDetailHeader";
import ProductDetailFooter from "@/Components/ProductDetailPageSects/ProductDetailFooter/ProductDetailFooter";

function MyApp({ Component, pageProps, data }) {

  const router = useRouter()
  const [loading, setLoading] = useState(false)


  const queryClient = new QueryClient()
  useEffect(() => {
    if (router.pathname.startsWith('/product-detail-page')) {
      document.body.style.backgroundColor = "#F2F5F7";
    } else {
      document.body.style.backgroundColor = "initial";
    }

    // if (router.asPath.startsWith('/steals-of-the-week-sale/') || router.asPath.startsWith('/independence-day-sale') || router.asPath.startsWith('/september-super-sale') || router.asPath.startsWith('/cyber-week-sale') || router.asPath.startsWith('/black-friday-sale') || router.asPath.startsWith('/year-end-flash-sale')) {
    //   setLoading(true)
    //   router.push('/')
    // }

    if(router.asPath === '/'){
      setLoading(false)
    }

    // console.log('router.pathname :', router)
  }, [router.pathname, router.asPath]);


  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Providers store={store}>
          <Toaster position="top-center" reverseOrder={false} />

          <Head>
            {/* whatsapp widget  */}
            <script
              type="text/javascript"
              src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
              id="aisensy-wa-widget"
              widget-id="ETrrDX"
            ></script>
          </Head>


          <>
            {
              loading ? <Loader /> : <>


                {/* <TopHeader /> */}
                {
                  router.pathname.startsWith('/product-detail-page') ? <ProductDetailHeader /> : <Header />
                }
                {/* <Header /> */}

                <Component {...pageProps} data={data} />

                {
                  router.pathname.startsWith('/product-detail-page') ? <ProductDetailFooter /> : <Footer />
                }

                {/* <Footer /> */}
              </>
            }
          </>
        </Providers>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
