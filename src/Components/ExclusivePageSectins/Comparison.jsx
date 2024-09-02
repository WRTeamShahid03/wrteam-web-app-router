import React from 'react'

const Comparison = () => {

    const data = [
        {
            id: 0,
            title: 'Regular License',
            point1: 'Use',
            point1Text: 'Personal or commercial with limited distribution.',
            point2: 'Resale',
            point2Text: 'Not allowed.',
            point3: 'Customization',
            point3Text: 'Full flexibility.',
        },
        {
            id: 1,
            title: 'Extended License',
            point1: 'Use',
            point1Text: 'Commercial projects with broader distribution.',
            point2: 'Resale',
            point2Text: 'Not allowed.',
            point3: 'Customization',
            point3Text: 'Full flexibility.',
        },
        {
            id: 2,
            title: 'Exclusive License',
            point1: 'Use',
            point1Text: 'Sole rights, unlimited distribution.',
            point2: 'Resale',
            point2Text: 'Allowed to multiple clients.',
            point3: 'Customization',
            point3Text: 'Full flexibility.',
        },
    ]

    return (
        <section className='comparisonSect container commonMT'>
            <div className="row">
                <div className="col-12">
                    <div className="comparisonText flex_column">
                        <span className="common_span">
                            <span>License </span>Comparison
                        </span>
                        <span className='comman_Headlines' >Difference Between <span>Regular, Extended,</span>
                            and <span>Exclusive</span> Licenses</span>

                        <span className='comman_para'>Discover the key differences between each license type to help you choose the one that best meets your needs and provides the right level of access and rights.</span>
                    </div>
                </div>

                <div className="col-12">
                    <div className="row comparisonCardsWrapper">
                        {
                            data.map((item) => {
                                return <div className="col-lg-4 col-md-6 col-12">
                                    <div className="card comparisonCard">
                                        <div className='titleWrapper'>
                                            <span className='title'>{item.title}</span>
                                        </div>

                                        <div className='comparisonPoints'>
                                            <div>
                                                <span>{item.point1} :</span>
                                                <span>{item.point1Text}</span>
                                            </div>
                                            <div>
                                                <span>{item.point2} :</span>
                                                <span>{item.point2Text}</span>
                                            </div>
                                            <div>
                                                <span>{item.point3} :</span>
                                                <span>{item.point3Text}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comparison