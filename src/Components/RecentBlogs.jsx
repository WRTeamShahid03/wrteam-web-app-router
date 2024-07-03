
'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import { recentBlogsSelector } from '@/redux/reuducer/recentBlogsSlice'
import { formatDate } from '@/utils'

import { BsArrowRightCircle } from 'react-icons/bs'
import dateIcon from '../../src/Asset/Icons/ic_date.png'
import Link from 'next/link'
import Image from 'next/image'

const RecentBlogs = () => {

    const recentBlogs = useSelector(recentBlogsSelector)

    return (

        recentBlogs && recentBlogs?.length > 1 &&
        <section className='recentBlogs container'>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="recentBlogHeading">
                        <span className="common_span">
                            Our <span>Blogs</span>
                        </span>
                        <h3 className="comman_Headlines">
                            Recent <span>Blogs</span>
                        </h3>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="row">
                        {
                            recentBlogs?.map((ele) => {
                                return <div className="col-sm-12 col-md-6 col-lg-4 recentBlogsCards" key={ele.id}>
                                    <div className="card text-white">
                                        {ele?.category_name &&
                                            <span className='cateBadge'>{ele?.category_name}</span>}
                                        <Image height={0} width={0} loading="lazy" src={ele?.image} className="card-img-top" alt="teamImg" />
                                        <div className="card-img-top">
                                            <div className="cateDetails">
                                                <span className="cateDate">
                                                    <span> <Image height={0} width={0} loading="lazy" src={dateIcon} alt="" /></span>
                                                    <span> {formatDate(ele?.created_at)}</span>
                                                </span>
                                                <p className="card-title">
                                                    {ele?.title.length > 50 ? ele?.title.slice(0, 55) + "" + "..." : ele?.title}</p>
                                                <p className='card-text'>{ele?.short_description.length > 180 ? ele?.short_description.slice(0, 180) + "" + "..." : ele?.short_description}</p>

                                                <Link href={`/blog/${ele?.slug}`}>  <button className='blogComman_btn'>Read More <BsArrowRightCircle style={{ paddingBottom: "2px" }} /> </button> </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            })
                        }

                    </div>
                </div>
            </div>
        </section>


    )
}

export default RecentBlogs
