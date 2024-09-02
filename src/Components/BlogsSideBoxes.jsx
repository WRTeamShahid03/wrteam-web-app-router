'use client'
import React from 'react'

import dateIcon from '../Asset/Icons/ic_date.png'
import Image from 'next/image'
import { formatDate } from '@/utils'
import CategoriesSkeleton from './Skeletons/CategoriesSkeleton'
import RecentBlogsSkeleton from './Skeletons/RecentBlogsSkeleton'
import { useSelector } from 'react-redux'
import { recentBlogsSelector } from '@/redux/reuducer/recentBlogsSlice'
import { categoriesSelector } from '@/redux/reuducer/categoriesSlice'
import Link from 'next/link'

const BlogsSideBoxes = ({ loading, categories, showRecentBlogs, catSlug }) => {

  const recentBlogsData = useSelector(recentBlogsSelector);
  // const categoriesData = useSelector(categoriesSelector);


  return (
    <>
      <section className='ourBlogs cateSideBoxes'>


        <div className={`cateBox ${!showRecentBlogs && 'mb-5'}`}>
          <span className='boxHeadline'>Category</span>

          {
            loading ? Array.from({ length: 3 }).map((_, index) => (
              <div className="col-sm-12 col-md-6 col-lg-6 loading_data mt-" key={index}>
                <CategoriesSkeleton />
              </div>
            )) :
              categories?.map((data) => {
                return <div>
                  <Link href={`/blogs/${data?.slug}`} key={data?.id}>
                    <div className="boxDetails" >
                      <span className={`boxDetailsSpan ${catSlug === data?.slug ? 'selectedCat' : ''}`}>{data?.name}</span>
                      {
                        data?.blogs_count &&
                        <span>({data?.blogs_count})</span>
                      }
                    </div>
                  </Link>
                </div>
              })
          }

        </div>

        {
          showRecentBlogs && recentBlogsData &&
          <div className="recentBlogs mb-5">
            <span className='boxHeadline'>Recent Blogs</span>

            {
              loading ? Array.from({ length: 2 }).map((_, index) => (
                <div className="col-sm-12 col-md-6 col-lg-6 loading_data" key={index}>
                  <RecentBlogsSkeleton />
                </div>
              )) :
                recentBlogsData?.map((data, index) => {
                  return <div key={data?.id}>
                    <Link href={`/blog/${data?.slug}`} >
                      <div className={`boxDetails ${recentBlogsData?.length - 1 === index ? 'lastDiv' : ''}`}>
                        <span><Image height={0} width={0} loading="lazy" src={data?.image} alt="" className='rbImg' /></span>
                        <div className='recentBoxContent'>
                          <span className='rbDate'><Image height={0} width={0} loading="lazy" src={dateIcon} alt="" /> {formatDate(data.created_at)}</span>
                          <span>{data?.short_description.length > 74 ? data?.short_description.slice(0, 74) + "" + "..." : data?.short_description}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                })
            }

          </div>
        }

        {/* <div className="tags">
        <span className='boxHeadline'>Tags</span>
        {
          tags.map((e) => {
            return <span className='common_span' key={e.id}>{e.tag}</span>
          })
        }
      </div> */}

      </section>
    </>
  )
}

export default BlogsSideBoxes
