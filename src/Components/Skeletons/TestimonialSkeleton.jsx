import React from 'react'
import Skeleton from 'react-loading-skeleton'

const TestimonialSkeleton = () => {
    return (
        <div>
            <div className="card swiperCard">
                <div className="card-header">
                    <Skeleton height={50} width={50} />
                </div>
                <div className="card-body">
                    <div className='testiDesc'>
                        <Skeleton height={100} />
                    </div>
                </div>
                <div className="card-footer">
                    <div className="testiFoot">
                        <div className="footText">
                            <Skeleton width={120} />
                            <Skeleton width={80} />
                        </div>
                        <div className="footRating">
                            <Skeleton width={50} />
                            <Skeleton width={30} height={30} />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default TestimonialSkeleton
