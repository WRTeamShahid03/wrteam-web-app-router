import React from 'react'
import Skeleton from 'react-loading-skeleton'

const VacanciesCardSkeleton = () => {
    return (
            <div className="card" data-aos="fade-up" data-aos-once="true" data-aos-duration="800" style={{}}>
                <div className="cardBody">
                    <span className='card-title'> <Skeleton height={20} width={70} /></span>
                    <span className='card-text'> <Skeleton height={18} width={150} /></span>
                </div>
                <span><Skeleton width={60} height={20}/> </span>
            </div>
    )
}

export default VacanciesCardSkeleton