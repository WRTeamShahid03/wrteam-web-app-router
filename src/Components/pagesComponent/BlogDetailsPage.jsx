'use client'
import BlogsSideBoxes from '@/Components/BlogsSideBoxes'
import Breadcrum from '@/Components/Breadcrum'
import React, { useEffect, useState } from 'react'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'

import dateIcon from '../../../src/Asset/Icons/ic_date.png'
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import Link from 'next/link'
import Image from 'next/image'
import { GetBlogsApi, GetCategoriesApi } from '@/redux/actions/campaign'
import { useRouter } from 'next/router'
import { FaRegClock } from "react-icons/fa";
import { calculateReadTime, extractTextFromHTML, formatDate } from '@/utils'
import BlogsDetailsSkeleton from '../Skeletons/BlogsDetailsSkeleton'
import { setRecentBlogsData } from '@/redux/reuducer/recentBlogsSlice'
import { useParams } from 'next/navigation'



const BlogDetailsPage = () => {

    const router = useParams()

    // console.log(router, 'router')
    const [loading, setLoading] = useState(false);
    const [blogsData, setBlogsData] = useState([])
    const [categories, setCategories] = useState([])
    // const [recentBlogsData, setRecentBlogsData] = useState([])

    const [text, setText] = useState('')

    const getBlogsData = () => {
        setLoading(true)
        GetBlogsApi({
            // id: router.query.slug,
            slug: router?.slug,
            onSuccess: (response) => {
                setBlogsData(response.data);
                // setRecentBlogsData(response.recent_blogs);
                setRecentBlogsData({ data: response?.recent_blogs })
                setTotalPage(response.data.last_page)
                // console.log(totalPage)
                setLoading(false)
                setIncreaseView(false)
            },
            onError: (error) => {
                setLoading(false)
                console.log(error);
            }
        });
    }



    useEffect(() => {
        if (router?.slug) {
            getBlogsData()
        }
    }, [router])

    useEffect(() => {
        // console.log('blogsData => ', blogsData)
    }, [blogsData])

    const getCategoriesData = () => {
        setLoading(true)
        GetCategoriesApi({
            onSuccess: (response) => {
                setCategories(response?.data);
                setTotalPage(response?.data?.last_page)
                // console.log(totalPage)
                setLoading(false)
            },
            onError: (error) => {
                setLoading(false)
                console.log(error);
            }
        });
    }

    useEffect(() => {
        getCategoriesData()
    }, [])
    useEffect(() => {
        if (typeof window !== 'undefined' && blogsData?.description) {
            const extractText = extractTextFromHTML(blogsData?.description);
            setText(extractText)
        }
    }, [blogsData]);


    // Calculate read time
    const readTime = calculateReadTime(text);

    return (
        <>
            <Breadcrum title="Blogs" blueText="Details" contentOne="Home" contentTwo="Blogs Details" contentThree={router?.query?.slug} />

            <section id='blogDetails' className='container'>
                <div className="row">

                    <div className="col-sm-12 col-md-12 col-lg-8 mb-4">
                        {
                            loading ? Array.from({ length: 12 }).map((_, index) => (
                                <div className="col-sm-12 col-md-6 col-lg-6 loading_data" key={index}>
                                    <BlogsDetailsSkeleton />
                                </div>
                            )) :
                                <>
                                    <div className="upperDiv">
                                        <div className="blogDetailCard">
                                            <div className='blogShortDetail'>
                                                <span className="blogDate">
                                                    <span> <Image height={0} width={0} loading="lazy" src={dateIcon} alt="" /></span>
                                                    <span>{formatDate(blogsData?.created_at)}</span>
                                                </span>
                                                {/* <span className='blogViews blogDate'>
                                        <MdRemoveRedEye />
                                        {blogViews}
                                    </span> */}
                                                <span className='blogReadTime blogDate'>
                                                    <FaRegClock />
                                                    {readTime > 1 ? readTime + ' ' + 'minutes read' : ''}
                                                </span>
                                            </div>

                                            <h1 className='blogHeadline'>{blogsData?.title}</h1>
                                            <div className="blogImg">
                                                <span className='cateBadge'>{blogsData?.category?.name}</span>
                                                <Image height={0} width={0} loading="lazy" src={blogsData?.image} alt="" />
                                            </div>

                                            <div className="blogDetailContent" dangerouslySetInnerHTML={{ __html: blogsData && blogsData?.description || "" }} />

                                        </div>

                                    </div>

                                    <div className="bottomDiv">
                                        <div className="tagDiv">
                                            <span>Follow Us : </span>
                                            <div className='tagIcons'>
                                                <Link href={process.env.NEXT_PUBLIC_FACEBOOK} target='_blank'>  <span className='facebook'>  <BsFacebook size={30} /> </span> </Link>
                                                <Link href={process.env.NEXT_PUBLIC_TWITTER} target='_blank'>  <span className='twitter'>  <FaSquareXTwitter size={30} /> </span> </Link>
                                                <Link href={process.env.NEXT_PUBLIC_YOUTUBE} target='_blank'>  <span className='pintrest'>  <TbBrandYoutubeFilled size={34} /> </span> </Link>
                                                <Link href={process.env.NEXT_PUBLIC_LINKEDIN} target='_blank'>  <span className='linkedin'>  <BsLinkedin size={30} /> </span> </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                        }

                    </div>


                    <div className="col-sm-12 col-md-12 col-lg-4">

                        <BlogsSideBoxes categories={categories} loading={loading} showRecentBlogs={true} />

                    </div>
                </div>
            </section >
        </>
    )
}

export default BlogDetailsPage
