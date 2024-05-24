import Portfolio from '@/Components/pagesComponent/Portfolio'
export const metadata = {
    title: process.env.NEXT_PUBLIC_TITLE,
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
}

const page = () => {

    return (
        <>
            <Portfolio />
        </>
    )
}

export default page
