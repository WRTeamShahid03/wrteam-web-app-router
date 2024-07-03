// import Blogs from '@/Components/pagesComponent/Blogs';
import dynamic from 'next/dynamic'
const Blogs = dynamic(() => import('@/Components/pagesComponent/Blogs'), { ssr: false })
const Index = () => {

  return (

    <>
      <Blogs />
    </>
  )
}


export default Index
