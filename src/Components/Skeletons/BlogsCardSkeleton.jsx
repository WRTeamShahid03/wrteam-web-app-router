import React from 'react'
import Skeleton from 'react-loading-skeleton'

const BlogsCardSkeleton = () => {
    return (
        <div className="card text-white">
            <Skeleton height={30} width={100} className='mt-2 ms-3' />
            <Skeleton height={200} width={300} className="card-img-top mt-3 ms-3" />
            <div className="card-img-top">
                <div className="cateDetails">
                    <div className="cateDate">
                        <Skeleton height={20} width={20} />
                        <Skeleton height={20} width={100} />
                    </div>
                    <Skeleton height={30} width={'80%'} className="card-title" />
                    <Skeleton height={20} width={'90%'} className='card-text' count={3} />
                    <Skeleton height={40} width={100} />
                </div>
            </div>
        </div>
    )
}

export default BlogsCardSkeleton
