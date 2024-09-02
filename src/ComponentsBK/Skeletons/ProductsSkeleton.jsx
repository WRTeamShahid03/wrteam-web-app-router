import React from 'react'
import { Card } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'

const ProductsSkeleton = () => {
    return (
        <div>
            <Card>
                <Skeleton height={200} />
                <Card.Body>
                    <div className="ratingDiv">
                        <Skeleton width={80} />
                    </div>
                    <Skeleton height={20} width={60} />
                    <Skeleton height={15} width={150} />
                </Card.Body>
                <hr />
                <div className="cardFooter">
                    <span className='priceDiv'>
                        <Skeleton width={80} />
                        <div className='productPriceWrapper'>
                            <Skeleton width={50} />
                            <Skeleton width={50} />
                        </div>
                    </span>
                    <span>
                        <Skeleton width={60} />
                    </span>
                </div>
            </Card>

        </div>
    )
}

export default ProductsSkeleton