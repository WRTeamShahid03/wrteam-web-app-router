import Image from 'next/image'
import React from 'react'
import icon1 from '../../../Asset/Images/product-detail-page/layout-2/infoIcons/icon1.png'
import icon2 from '../../../Asset/Images/product-detail-page/layout-2/infoIcons/icon2.png'
import icon3 from '../../../Asset/Images/product-detail-page/layout-2/infoIcons/icon3.png'
import icon4 from '../../../Asset/Images/product-detail-page/layout-2/infoIcons/icon4.png'
import icon5 from '../../../Asset/Images/product-detail-page/layout-2/infoIcons/icon5.png'

const InfoSectTwo = () => {


    const data = [
        {
            id: 0,
            icon: icon1,
            title: 'Elite Author',
            desc: 'On CodeCanyon'
        },
        {
            id: 1,
            icon: icon2,
            title: '15k+',
            desc: 'Happy Clients'
        },
        {
            id: 2,
            icon: icon3,
            title: 'Customizable',
            desc: 'Easy Customizable'
        },
        {
            id: 3,
            icon: icon4,
            title: 'Lifetime',
            desc: 'Lifetime Free Update'
        },
        {
            id: 4,
            icon: icon5,
            title: 'Buy Once',
            desc: 'One Time Purchase'
        },
    ]

    return (
        <>
            <section className='infoSectTwo container'>
                {
                    data.map((item) => {
                        return <div className="card" key={item.id}>
                            <div className="imgWrapper">
                                <Image src={item.icon} height={0} width={0} alt={item.title} />
                            </div>
                            <div className='textDiv'>
                                <span className='title'>{item.title}</span>
                                <span className='desc'>{item.desc}</span>
                            </div>
                        </div>
                    })
                }

            </section>
        </>
    )
}

export default InfoSectTwo
