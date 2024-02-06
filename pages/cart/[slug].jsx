import Cart from '@/Components/pagesComponent/Cart'
import Head from 'next/head'
import React from 'react'

const Index = () => {
    return (
        <>
            <Head>
                <title>
                    Top IT company in India | Web Developer | App Developer - wrteam
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
