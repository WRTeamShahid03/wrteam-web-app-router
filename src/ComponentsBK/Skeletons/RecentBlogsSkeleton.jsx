import React from 'react'
import Skeleton from 'react-loading-skeleton'

const RecentBlogsSkeleton = () => {
    return (
        <div className="boxDetails" >
            <div>
                <Skeleton height={70} width={70} className='rbImg' />
            </div>
            <div className='recentBoxContent'>
                <div className='rbDate'>
                    <Skeleton height={20} width={30} />
                    <Skeleton height={20} width={100} />
                </div>
                <Skeleton height={20} width={150} />
            </div>
        </div>
    )
}

export default RecentBlogsSkeleton
