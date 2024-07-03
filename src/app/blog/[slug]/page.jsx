import React from 'react'
import Head from 'next/head';
import BlogDetailsPage from '@/Components/pagesComponent/BlogDetailsPage';



const Index = () => {

    return (
        <>
            <Head>
                <title>
                    {process.env.NEXT_PUBLIC_TITLE}
                </title>
                <meta
                    name="description"
                    content={process.env.NEXT_PUBLIC_DESCRIPTION}
                />
                <meta name='keywords' content={process.env.NEXT_PUBLIC_META_KEYWORD} />

                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <BlogDetailsPage/>
        </>
    )
}


export default Index