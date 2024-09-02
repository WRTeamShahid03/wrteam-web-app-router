import Head from "next/head";
import dynamic from "next/dynamic";
const FreeSourceCode = dynamic(() => import('@/Components/pagesComponent/FreeSourceCode'), { ssr: false })


const Index = () => {

  return (

    <>
      <Head>
        <title>Free Source Code</title>
        <meta name="description" content="We prioritize customer satisfaction and transparency." />
      </Head>
     <FreeSourceCode/>
    </>
  )
}


export default Index
