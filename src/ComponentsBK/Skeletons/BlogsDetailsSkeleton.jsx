import React from 'react'
import Skeleton from 'react-loading-skeleton'

const BlogsDetailsSkeleton = () => {
    return (
        <div>
            <Skeleton height={20} width={'180%'} className='boxHeadline mt-1' />
        </div>
    )
}

export default BlogsDetailsSkeleton
