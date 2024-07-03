'use client'
import Breadcrum from '@/Components/Breadcrum'
import { React, useEffect, useRef, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { BsArrowRightCircle } from 'react-icons/bs';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

// Images
import dateIcon from '../../../src/Asset/Icons/ic_date.png'
import BlogsSideBoxes from '@/Components/BlogsSideBoxes';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { GetBlogsApi, GetCategoriesApi } from '@/redux/actions/campaign';
import { formatDate } from '@/utils';
import BlogsCardSkeleton from '../Skeletons/BlogsCardSkeleton';
import { setRecentBlogsData } from '@/redux/reuducer/recentBlogsSlice';
import { setCategoriesData } from '@/redux/reuducer/categoriesSlice';
import { useParams } from 'next/navigation';

const Blogs = () => {

  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsData, setBlogsData] = useState([])
  const [categories, setCategories] = useState([])
  const router = useParams()
  // console.log('routeCat', router)

  const getCategoriesData = () => {
    setLoading(true)
    GetCategoriesApi({
      onSuccess: (response) => {
        setCategories(response?.data);
        // setCategoriesData({ data: response?.data })
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
    loadPageData()
    getCategoriesData()
  }, [router])

  useEffect(() => {
    // console.log('blogsData => ', blogsData)
    // console.log('categoriesData => ', categories)
  }, [blogsData, categories])

  const loadPageData = (page) => {
    setLoading(true)
    GetBlogsApi({
      category_slug: router?.slug,
      onSuccess: (response) => {
        setBlogsData(response?.data?.data);
        setTotalPage(response?.data?.last_page)
        // console.log(totalPage)
        setLoading(false)
      },
      onError: (error) => {
        setLoading(false)
        console.log(error);
      }
    });
  };

  const handlePageChange = ({ selected }) => {
    const nextPage = selected + 1;
    setCurrentPage(nextPage);
    loadPageData(nextPage);
    setSortOption('')
    // window.scrollTo(0, 0);
    setPage(nextPage)
    router.push(`/blogs/page/${nextPage}`)
  };

  useEffect(() => {
    loadPageData(currentPage);
  }, [currentPage]);

  return (
    <>
      {
        router?.slug &&
        <Breadcrum title="" blueText="Blogs" contentOne="Home" contentTwo="Blogs" contentThree={router?.slug.toLocaleLowerCase()} />
      }

      <section className='ourBlogs container'>

        <div className="row">

          <div className="row">


            <div className="col-sm-12 col-md-12 col-lg-8  mb-5">
              <div className="row blogsRow">
                {
                  loading ? Array.from({ length: 2 }).map((_, index) => (
                    <div className="col-sm-12 col-md-6 col-lg-6 loading_data" key={index}>
                      <BlogsCardSkeleton />
                    </div>
                  )) :
                    blogsData?.length > 0 ?
                      blogsData?.map((blogs) => {
                        return <div className="col-lg-6" key={blogs?.id}>
                          <div className="card text-white">
                            <span className='cateBadge'>{blogs?.category?.name}</span>
                            <Image height={0} width={0} loading="lazy" src={blogs?.image} className="card-img-top" alt="teamImg" />
                            <div className="card-img-top">
                              <div className="cateDetails">
                                <div className="cateDate">
                                  <div> <Image height={0} width={0} loading="lazy" src={dateIcon} alt="" /></div>
                                  <span> {formatDate(blogs?.created_at)}</span>
                                </div>
                                <p className="card-title">{blogs?.title.length > 50 ? blogs?.title.slice(0, 55) + "" + "..." : blogs?.title}</p>

                                <p className='card-text'>{blogs?.short_description.length > 180 ? blogs?.short_description.slice(0, 180) + "" + "..." : blogs?.short_description}</p>

                                <Link href={`/blog/${blogs?.slug}`}>  <button className='blogComman_btn'>Read More <BsArrowRightCircle style={{ paddingBottom: "2px" }} /> </button> </Link>
                              </div>

                            </div>
                          </div>
                        </div>
                      }) :
                      <div>No Data Found</div>
                }

                {
                  totalPage > 1 ?
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <div className="navigation-buttons">
                        <ReactPaginate
                          pageCount={totalPage}
                          pageRangeDisplayed={3}
                          marginPagesDisplayed={1}
                          forcePage={currentPage - 1} // react-paginate starts counting from 0
                          onPageChange={handlePageChange}
                          containerClassName="pagination"
                          activeClassName="active"
                          pageClassName="page-item"
                          previousLabel={<FaAngleLeft color="white" size={22} />}
                          nextLabel={<FaAngleRight color="white" size={22} />}
                          previousClassName="page-item"
                          nextClassName="page-item"
                          previousLinkClassName="page-link"
                          nextLinkClassName="page-link"
                          pageLinkClassName="page-link"
                        />
                      </div>
                    </div> : null
                }
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4">

              <BlogsSideBoxes categories={categories} showRecentBlogs={false} recentBlogs={blogsData} loading={loading} catSlug={router?.slug} />

            </div>
          </div>

        </div>

      </section>

    </>
  )
}

export default Blogs
