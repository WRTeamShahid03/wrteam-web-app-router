import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import PortfolioSection from '../PortfolioSection';
import img from '../../Asset/Images/our_values.png'
import ReactPaginate from 'react-paginate';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const Portfolio = () => {
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState('3');
    const [sortOption, setSortOption] = useState('');
    const [page, setPage] = useState('1')

    const handlePageChange = ({ selected }) => {
        const nextPage = selected + 1;
        setCurrentPage(nextPage);
        loadPageData(nextPage);
        setSortOption('')
        // window.scrollTo(0, 0);
        setPage(nextPage)
        router.push(`/products/web-products/page/${nextPage}`)
    };
    return (
        <>
            <section className="portfolio webPro container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="webProHeadingDiv">
                            {
                                loading ?
                                    <span> <Skeleton width={300} height={25} /></span> :
                                    <span className='commonHeadlines' >We found <span>4</span> Products</span>

                            }
                            <div className="sortBy">
                                <span>Sort By :</span>
                                <select
                                    className="form-select form-select-md"
                                    aria-label=".form-select-lg example"
                                // onChange={handleFilterChange}
                                // value={sortOption}
                                >
                                    <option value={""}>Select</option>
                                    <option value={1}>Price: Low to High</option>
                                    <option value={2}>Price: High to Low</option>
                                    <option value={3}>Most Popular</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <PortfolioSection
                            title={'eShop'}
                            headline={`Hipster ipsum tattooed brunch I'm baby. Prism poutine pbr&b cardigan.`}
                            para={`Lorem ipsum dolor sit amet consectetur. Faucibus non mauris risus enim sed. Lectus fusce elit duis dignissim aliquet nisl vitae. Eget sit nisi vulputate enim sem. Facilisi tincidunt donec interdum in in eros quisque consectetur sit. Sagittis purus velit amet risus egestas. Pellentesque pharetra blandit fringilla volutpat tristique sit. Sit euismod praesent volutpat eu et. Id egestas dictum cursus purus morbi semper praesent quam.`}
                            playStore={true} iosStore={true} web={false}
                            sectionImg={img}
                            reverseSection={false} />
                    </div>
                    <div className="col-12 mt-5">
                        <PortfolioSection
                            title={'eShop'}
                            headline={`Hipster ipsum tattooed brunch I'm baby. Prism poutine pbr&b cardigan.`}
                            para={`Lorem ipsum dolor sit amet consectetur. Faucibus non mauris risus enim sed. Lectus fusce elit duis dignissim aliquet nisl vitae. Eget sit nisi vulputate enim sem. Facilisi tincidunt donec interdum in in eros quisque consectetur sit. Sagittis purus velit amet risus egestas. Pellentesque pharetra blandit fringilla volutpat tristique sit. Sit euismod praesent volutpat eu et. Id egestas dictum cursus purus morbi semper praesent quam.`}
                            playStore={true} iosStore={true} web={true}
                            sectionImg={img}
                            reverseSection={true} />
                    </div>
                    <div className="col-12 mt-5">
                        <PortfolioSection
                            title={'eShop'}
                            headline={`Hipster ipsum tattooed brunch I'm baby. Prism poutine pbr&b cardigan.`}
                            para={`Lorem ipsum dolor sit amet consectetur. Faucibus non mauris risus enim sed. Lectus fusce elit duis dignissim aliquet nisl vitae. Eget sit nisi vulputate enim sem. Facilisi tincidunt donec interdum in in eros quisque consectetur sit. Sagittis purus velit amet risus egestas. Pellentesque pharetra blandit fringilla volutpat tristique sit. Sit euismod praesent volutpat eu et. Id egestas dictum cursus purus morbi semper praesent quam.`}
                            playStore={true} iosStore={true} web={false}
                            sectionImg={img}
                            reverseSection={false} />
                    </div>
                    <div className="col-12 mt-5">
                        <PortfolioSection
                            title={'eShop'}
                            headline={`Hipster ipsum tattooed brunch I'm baby. Prism poutine pbr&b cardigan.`}
                            para={`Lorem ipsum dolor sit amet consectetur. Faucibus non mauris risus enim sed. Lectus fusce elit duis dignissim aliquet nisl vitae. Eget sit nisi vulputate enim sem. Facilisi tincidunt donec interdum in in eros quisque consectetur sit. Sagittis purus velit amet risus egestas. Pellentesque pharetra blandit fringilla volutpat tristique sit. Sit euismod praesent volutpat eu et. Id egestas dictum cursus purus morbi semper praesent quam.`}
                            playStore={true} iosStore={true} web={false}
                            sectionImg={img}
                            reverseSection={true} />
                    </div>
                </div>

                <div className="col-12">
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
                    </div>
                </div>

            </section>

        </>
    )
}

export default Portfolio
