import Cart from '@/Components/pagesComponent/Cart'
import Head from 'next/head'
import React from 'react'

const Index = () => {
    return (
        <>
            <Head>
                <title>
                Best Web-APP development & Design Company in Gujrat-India
                </title>
                <meta
                    name="description"
                    content="Grow your business with our top web developers, app developers, graphic designers and digital marketing and IT consulting services provider specialists."
                />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <Cart />
        </>
    )
}

export default Index
