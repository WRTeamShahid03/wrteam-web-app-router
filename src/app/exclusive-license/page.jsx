import ExclusiveLicensePage from '@/Components/pagesComponent/ExclusiveLicensePage'
import Head from 'next/head'
import React from 'react'

const Index = () => {
  return (
    <>
      <Head>
        <title>Exclusive License</title>
        <meta name="description" content="We prioritize customer satisfaction and transparency." />
      </Head>
      <ExclusiveLicensePage />
    </>
  )
}

export default Index