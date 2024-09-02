'use client'
import React from 'react'
import Image from 'next/image'


const CommonTechSect = ({title,data,reverseSect,sectImg}) => {

    return (
        <section className='productTechSect'>
            <div className={`row ${reverseSect ? 'flex-row-reverse reverseSect' : ''}`}>
                <div className="col-12 col-lg-6 leftDiv">
                    <Image src={sectImg} height={0} width={0} alt='techImg' />
                </div>

                <div className="col-12 col-lg-6 rightDiv">
                    <span className='headline'>{title}</span>

                    <div className="cardsWrapper">
                        {
                            data.map((data) => {
                                return (
                                    <div className="card" key={data.id}>
                                        <Image src={data.img} height={0} width={0} alt='techImg' />
                                        <span>{data.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}

export default CommonTechSect
