import Blogs from '@/Components/pagesComponent/Blogs';

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
