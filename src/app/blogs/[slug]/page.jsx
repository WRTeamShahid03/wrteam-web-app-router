import Blogs from '@/Components/pagesComponent/Blogs';
// import dynamic from 'next/dynamic'
// const Blogs = dynamic(() => import('@/Components/pagesComponent/Blogs'), { ssr: false })

export const metadata = {
  title: process.env.NEXT_PUBLIC_TITLE,
  description: process.env.NEXT_PUBLIC_DESCRIPTION,
  keywords: process.env.NEXT_PUBLIC_META_KEYWORD
}

const Index = () => {

  return (

    <>
      <Blogs />
    </>
  )
}


export default Index
