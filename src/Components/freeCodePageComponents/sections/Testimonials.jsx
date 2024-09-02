'use client'
import React from 'react'
import img1 from '../../../Asset/Images/sourceCodePage/profile1.svg'
import Image from 'next/image'
import { LiaStarSolid } from 'react-icons/lia'
import { BsStarHalf } from 'react-icons/bs'
import CommonBtnComp from '../CommonBtnComp'
import CommonTextComp from '../CommonTextComp'

const Testimonials = () => {

    const data = [
        {
            id: 0,
            img: img1,
            name: 'John Clark',
            reviewFor: 'Lead Designer',
            rating: '4',
            title: 'It was a very good experience',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.'
        },
        {
            id: 1,
            img: img1,
            name: 'John Clark',
            reviewFor: 'Lead Designer',
            rating: '4',
            title: 'It was a very good experience',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.'
        },
        {
            id: 2,
            img: img1,
            name: 'John Clark',
            reviewFor: 'Lead Designer',
            rating: '4',
            title: 'It was a very good experience',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.'
        },
        {
            id: 3,
            img: img1,
            name: 'John Clark',
            reviewFor: 'Lead Designer',
            rating: '4',
            title: 'It was a very good experience',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.'
        },
        {
            id: 4,
            img: img1,
            name: 'John Clark',
            reviewFor: 'Lead Designer',
            rating: '4',
            title: 'It was a very good experience',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.'
        },
        {
            id: 5,
            img: img1,
            name: 'John Clark',
            reviewFor: 'Lead Designer',
            rating: '4',
            title: 'It was a very good experience',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.'
        },
    ]

    const renderStars = (rating) => {
        const totalStars = 5;
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        const stars = [];

        for (let i = 0; i < totalStars; i++) {
            if (i < fullStars) {
                stars.push(<LiaStarSolid key={i} size={20} color='#FFC66B' />);
            } else if (hasHalfStar && i === fullStars) {
                stars.push(<BsStarHalf key='half' size={18} color='#FFC66B' />);
            } else {
                stars.push(<LiaStarSolid key={i} size={20} color='#bfc3c7' />);
            }
        }

        return stars;
    };

    return (
        <section className='testimonials commonBodyGlow2 commonMT container'>
            <div className="row">
                <div className="col-12">
                    <CommonTextComp title={`Don't Just Take Our Word For It - Hear From `} blueText={'Our Satisfied Customers!'} desc={''}/>
                </div>
                {
                    data?.map((item) => {
                        return <div className="col-12 col-md-6 col-lg-4">
                            <div className="card">
                                <div className="profileWrapper">
                                    <div className='profileInfo'>
                                        <Image src={item.img} height={''} width={0} alt='profile' />
                                        <div className='userInfo'>
                                            <span className='name'>{item.name}</span>
                                            <span className='reviewFor'>{item.reviewFor}</span>
                                        </div>
                                    </div>
                                    <div className='rating'>
                                        <span>{renderStars(item.rating)}</span>
                                    </div>
                                </div>
                                <div className='textWrapper'>
                                    <span className='title'>{item.title}</span>
                                    <span className='desc'>{item.desc}</span>
                                </div>
                            </div>
                        </div>
                    })
                }

                <div className="col-12">
                    <CommonBtnComp />
                </div>

            </div>
        </section>
    )
}

export default Testimonials