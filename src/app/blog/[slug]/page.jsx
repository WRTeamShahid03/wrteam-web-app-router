import BlogDetailsPage from '@/Components/pagesComponent/BlogDetailsPage';

export const metadata = {
    title: process.env.NEXT_PUBLIC_TITLE,
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    keywords: process.env.NEXT_PUBLIC_META_KEYWORD
  }

const Index = () => {

    return (
        <>
            <BlogDetailsPage/>
        </>
    )
}


export default Index