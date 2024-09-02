import Link from 'next/link'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const ProdctDetailsSkeleton = () => {
    return (
        <div>
            <div className="card">
                <div className="upperDiv">
                    <div className="priceWrapper">
                        <Skeleton width={80} />
                        <Skeleton width={50} />
                    </div>
                    <div className="checkoutLink">
                        <Skeleton width={150} height={40} />
                    </div>
                </div>

                <div className="middleDiv">
                    <Skeleton width={100} />
                    <div className="filesInclude">
                        <div className="files">
                            <Skeleton width={60} />
                            <Skeleton width={80} />
                        </div>
                        <Skeleton width={80} />
                        <div className="files">
                            <Skeleton width={80} />
                            <Skeleton width={80} />
                        </div>
                    </div>
                </div>

                <div className="bottomDiv">
                    <Skeleton width={150} />
                    {/* <Link href={'/hire-us'}> */}
                        <span>
                            <Skeleton width={80} />
                        </span>
                    {/* </Link> */}
                </div>
            </div>

        </div>
    )
}

export default ProdctDetailsSkeleton