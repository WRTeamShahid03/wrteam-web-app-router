
import React from 'react';
// ** Next Import
import Document, { Html, Head, Main, NextScript } from 'next/document';
const CustomDocument = () => {


    return (
        <Html>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous" />

                <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

                <link rel="shortcut icon" href="/favicon.ico" sizes="32x32" type="image/png" />



                {/* <!-- Google Tag Manager --> */}
                <script dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-MG5P53R')

                `}}></script>
                {/* <!-- End Google Tag Manager --> */}

            </Head>

            <body>
                {/* <!-- Google Tag Manager (noscript) --> */}
                <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MG5P53R"
                    height="0" width="0" style={{ display:'none',visibility:'hidden' }}></iframe></noscript>
                {/* <!-- End Google Tag Manager (noscript) --> */}
                <Main />

                <NextScript />

                {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossOrigin="anonymous"></script> */}
                <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"></script>
                <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

                {/* <!-- Include your React application --> */}
                <script src="/path/to/your/react/app.js"></script>
            </body>
        </Html >
    );
};
export default CustomDocument;






