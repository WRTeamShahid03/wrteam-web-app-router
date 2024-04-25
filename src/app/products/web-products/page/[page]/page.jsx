'use client'
import Breadcrum from '@/Components/Breadcrum'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { LiaStarSolid } from 'react-icons/lia';
import { BsStarHalf } from 'react-icons/bs';
import { RiShoppingCartFill } from 'react-icons/ri';
import Link from 'next/link';

import Head from 'next/head';
import Image from 'next/image';
import { GetProductsApi, GetSettingsApi } from '@/redux/actions/campaign';
import ProductsSkeleton from '../../../../../src/Components/Skeletons/ProductsSkeleton.jsx';
import ReactPaginate from 'react-paginate';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import Skeleton from 'react-loading-skeleton';
import { useParams, useRouter } from 'next/navigation';

const AppProducts = () => {

    const router = useRouter()
    const pageParams = useParams()
    const routerPage = pageParams?.page
    // console.log('router.query.page', router.query.page)

    const [productsData, setProductsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalPage, setTotalPage] = useState('');
    const [sortOption, setSortOption] = useState('');

    const handleFilterChange = (e) => {
        setSortOption(e.target.value);
        setLoading(true)
        GetProductsApi({
            category_id: 8,
            product_filter: e.target.value,
            onSuccess: (response) => {
                // console.log(response?.data?.data, "PriceFiterData");
                setProductsData(response.data.data);
                setTotalPage(response.data.last_page)
                // console.log(totalPage)
                setLoading(false)
            },
            onError: (error) => {
                console.log(error);
            }
        });
    }


    const loadPageData = (page) => {
        setLoading(true);
        GetProductsApi({
            page,
            category_id: 8,
            onSuccess: (response) => {
                // console.log(response?.data?.data, "ProductsResponse");
                setProductsData(response.data.data);
                setTotalPage(response.data.last_page)
                // console.log(totalPage)
                setLoading(false)
            },
            onError: (error) => {
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
        // setPage(nextPage)
        router.push(`/products/web-products/page/${nextPage}`)
    };



    useEffect(() => {
        // console.log(sortOption, 'sortOption')
    }, [sortOption]);

    useEffect(() => {
        loadPageData(routerPage);
    }, [routerPage]);

    const renderStars = (rating) => {
        const totalStars = 5;
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        const stars = [];

        for (let i = 0; i < totalStars; i++) {
            if (i < fullStars) {
                stars.push(<LiaStarSolid key={i} size={20} color='#FFA800' />);
            } else if (hasHalfStar && i === fullStars) {
                stars.push(<BsStarHalf key='half' size={18} color='#FFA800' />);
            } else {
                stars.push(<LiaStarSolid key={i} size={20} color='#bfc3c7' />);
            }
        }

        return stars;
    };

    return (
        <>

            <Head>
                <title> Create Websites with WRTeam's Digital Products</title>
                <meta name="description" content="Complete business solutions. Clean & safe code for your Ecom. business, grocery business, local business & make educational and game apps and web." />
            </Head>
            <Breadcrum title='Web' blueText='Products' contentOne={'Home'} contentTwo={'Products'} contentThree={'Web Products'} />
            <section className='container webPro'>

                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="webProHeadingDiv">
                            {
                                loading ?
                                    <span> <Skeleton width={300} height={25} /></span> :
                                    <span className='commonHeadlines' >We found <span>{productsData?.length}</span> Products</span>

                            }
                            <div className="sortBy">
                                <span>Sort By :</span>
                                <select
                                    className="form-select form-select-md"
                                    aria-label=".form-select-lg example"
                                    onChange={handleFilterChange}
                                    value={sortOption}
                                >
                                    <option value={""}>Select</option>
                                    <option value={1}>Price: Low to High</option>
                                    <option value={2}>Price: High to Low</option>
                                    <option value={3}>Most Popular</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="row cardsWrapper">
                            {
                                loading ? Array.from({ length: 8 }).map((_, index) => (
                                    <div className="col-sm-12 col-md-6 col-lg-3 loading_data" key={index}>
                                        <ProductsSkeleton />
                                    </div>
                                )) : <>
                                    {
                                        productsData.map((e, index) => {
                                            return <div className="col-sm-12 col-md-6 col-lg-3" key={e.id}
                                            // ref={index === productsData.length - 1 ? lastProductRef : null}
                                            >
                                                <Link href={`/product-details/${e.slug}`}>
                                                    <Card>
                                                        <Image height={0} width={0} loading="lazy" alt='product_img' className='webProImg card-img-top' src={e.banner_image} />
                                                        <Card.Body>
                                                            <div className="ratingDiv">
                                                                <span className='sales'>{e.sales} Sales</span>
                                                                {e.rating == '0' ? '' :
                                                                    <span className='rating'> <span>
                                                                        {renderStars(e.rating)}
                                                                    </span>({e.rating})</span>
                                                                }
                                                            </div>
                                                            {
                                                                e.name?.length > 60 ? <Card.Title>{e.name.slice(0, 50)}...</Card.Title> : <Card.Title>{e.name}</Card.Title>
                                                            }
                                                            <Card.Text>
                                                                {e.subcategory?.name}
                                                            </Card.Text>
                                                        </Card.Body>
                                                        <hr />
                                                        <div className="cardFooter">
                                                            <div className='priceDiv'>
                                                                <span>Price</span>
                                                                <div className='productPriceWrapper'>
                                                                    {
                                                                        e.sale_price === '' || e.sale_price === null ?
                                                                            <span className='originalPrice'>${e.price}</span> :
                                                                            <>
                                                                                <span className='originalPrice' style={{ textDecorationLine: 'line-through', fontSize: '24px', color: '#22A869' }}>${e.price}</span>
                                                                                <span className='salePrice'>${e.sale_price}</span>
                                                                            </>

                                                                    }

                                                                </div>
                                                            </div>
                                                            <span className='buyBtn'> <span><RiShoppingCartFill /></span>Buy</span>
                                                        </div>
                                                    </Card>
                                                </Link>
                                            </div>

                                        })}
                                </>
                            }

                        </div>

                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="navigation-buttons">
                            <ReactPaginate
                                pageCount={totalPage}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={1}
                                forcePage={routerPage - 1} // react-paginate starts counting from 0
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
                    </div>

                </div>
            </section>
        </>
    )
}

export default AppProducts