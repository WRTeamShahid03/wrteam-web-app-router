import ExclusiveLicensePage from '@/Components/pagesComponent/ExclusiveLicensePage'
import Head from 'next/head'
import React from 'react'

export const metadata = {
  title: 'Exclusive License',
  description: 'We prioritize customer satisfaction and transparency.',
  keywords: process.env.NEXT_PUBLIC_META_KEYWORD
}

const Index = () => {
  return (
    <>
      <ExclusiveLicensePage />
    </>
  )
}

export default Index