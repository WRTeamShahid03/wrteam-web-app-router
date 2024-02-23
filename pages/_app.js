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

function MyApp({ Component, pageProps, data }) {

  const queryClient = new QueryClient()

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
            {/* <TopHeader /> */}
            <Header />

            <Component {...pageProps} data={data} />

            <Footer />
          </>
        </Providers>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
