import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton';

const Portfolio = () => {
    const [loading, setLoading] = useState(false);
    return (
        <>
            <section className="portfolio webPro container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="webProHeadingDiv">
                            {/* {
                                loading ?
                                    <span> <Skeleton width={300} height={25} /></span> :
                                    <span className='commonHeadlines' >We found <span>4</span> Products</span>

                            } */}
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
                </div>

            </section>

        </>
    )
}

export default Portfolio
