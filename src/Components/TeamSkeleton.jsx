import React from 'react'
import Skeleton from 'react-loading-skeleton'

const TeamSkeleton = () => {
    return (
        <div>
            <div className="card teamSkeletonCard text-white" style={{ height: '320px', background: '#d9d9d9' }}>

                <div style={{borderRadius: '50px',margin: '20px'}} >
                    <Skeleton height={100} width={180} style={{borderRadius: '20px'}}/> {/* Adjust height and width based on your image size */}
                </div>

                <div className="card-img-overlay">
                    <div className="teamDeatails">
                        <Skeleton height={20} />
                        <Skeleton height={15} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamSkeleton