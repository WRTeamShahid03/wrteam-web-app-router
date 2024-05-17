'use client'
import { Providers } from "@/redux/store/providers";
import { store } from "@/redux/store";
import React, { useEffect, useState } from "react";
import "../../public/Css/style.css";
import "../../public/Css/responsive.css";
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
import ProductDetailHeader from "../Components/ProductDetailPageLayout/ProductDetailHeader/ProductDetailHeader.jsx";
import ProductDetailFooter from "../Components/ProductDetailPageLayout/ProductDetailFooter/ProductDetailFooter.jsx";
import Script from "next/script";
import { usePathname } from "next/navigation";


export default function RootLayout({ children }) {

  const router = usePathname()
  const [loading, setLoading] = useState(false)


  const queryClient = new QueryClient()

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <Providers store={store}>
            <Toaster position="top-center" reverseOrder={false} />

            <Head>
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous" />

              <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

              <link rel="shortcut icon" href="/favicon.ico" sizes="32x32" type="image/png" />

            </Head>


            <>
              {
                loading ? <Loader /> : <>


                  {/* <TopHeader /> */}
                  {
                    router.startsWith('/product-detail-page') ? <ProductDetailHeader layout={2}/> : <Header />
                  }
                  {/* <Header /> */}

                  {children}
                  {
                    router.startsWith('/product-detail-page') ? <ProductDetailFooter layout={2}/> : <Footer />
                  }

                  {/* <Footer /> */}
                </>
              }
            </>
          </Providers>
        </QueryClientProvider>


        {/* <!-- Google Tag Manager --> */}
        <Script id="gtmScript" dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-MG5P53R')

                `}}></Script>
        {/* <!-- End Google Tag Manager --> */}

        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MG5P53R"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}


        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossOrigin="anonymous"></script> */}
        <Script type="text/javascript" src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"></Script>
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js"></Script>

        {/* <!-- Include your React application --> */}
        <Script src="/path/to/your/react/app.js"></Script>

        {/* whatsapp widget  */}
        <Script
          type="text/javascript"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          widget-id="ETrrDX"
        ></Script>
      </body>
    </html>
  );
}

