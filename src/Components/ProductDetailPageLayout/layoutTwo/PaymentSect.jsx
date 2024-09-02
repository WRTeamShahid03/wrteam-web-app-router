'use client'
import Image from 'next/image'
import React from 'react'
import paymentImg from '../../../Asset/Images/product-detail-page/paymentImg.png'
import paypal from '../../../Asset/Images/05-22-24-eBroker Img-/paypal.png'

const PaymentSect = ({ paymentGatewaySectData }) => {

    const data = paymentGatewaySectData && paymentGatewaySectData[0];

    return (
        <div className={`${data?.gateways?.length < 5 ? 'noBg' : ''}`}>
            <section className={`paymentSect container ${data?.gateways?.length < 5 ? 'bgGatewaysCircles' : ''} ${data?.gateways?.length < 5 ? 'bgGateways' : ''}`}>

                <div className="row orbitRow">
                    <div className="col-lg-6 leftDiv">
                        <span className='headline'>{data?.title}</span>
                        <span className='desc' dangerouslySetInnerHTML={{ __html: data?.description }}></span>
                    </div>
                    {
                        data?.gateways?.length < 5 ?
                            <div className="col-lg-6 cardsGatewaysUI">
                                <div className="card" key={data?.gateways[0].name}>
                                    <div>
                                        <img src={data?.gateways[0].image_url} alt="gatewayIcon" />
                                    </div>
                                    <div>
                                        <span>{data?.gateways[0].name}</span>
                                    </div>
                                </div>
                                <div className='midDiv'>
                                    <div className="card" key={data?.gateways[1].name}>
                                        <div>
                                            <img src={data?.gateways[1].image_url} alt="gatewayIcon" />
                                        </div>
                                        <div>
                                            <span>{data?.gateways[1].name}</span>
                                        </div>
                                    </div>
                                    <div className="card" key={data?.gateways[2].name}>
                                        <div>
                                            <img src={data?.gateways[2].image_url} alt="gatewayIcon" />
                                        </div>
                                        <div>
                                            <span>{data?.gateways[2].name}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card" key={data?.gateways[3].name}>
                                    <div>
                                        <img src={data?.gateways[3].image_url} alt="gatewayIcon" />
                                    </div>
                                    <div>
                                        <span>{data?.gateways[3].name}</span>
                                    </div>
                                </div>
                            </div>
                            :

                            <div className="col-lg-6 rightDiv">
                                <div className='orbitPaymentsWrapper'>
                                    <div className="orbit-container">
                                        <div className="center-img">
                                            <img src={data?.payment_gateway_main_image_url} alt="Center Image" />
                                        </div>
                                        <div className="orbit"></div>
                                        <div className="orbit-inner"></div>
                                        <div className="orbit-icon-container orbit-icon-container-outer">
                                            {
                                                data?.gateways?.slice(0, 4).map((item, index) => {
                                                    return <div className={`orbit-icon icon${index + 1}`} key={index}><img src={item?.image_url} alt="gatewayIcon" /><span>{item?.name}</span></div>
                                                })
                                            }
                                        </div>
                                        <div className="orbit-icon-container-inner">
                                            {
                                                data?.gateways?.slice(4, 8).map((item, index) => {
                                                    return <div className={`orbit-icon icon${index + 1}`} key={index}><img src={item?.image_url} alt="gatewayIcon" /><span>{item?.name}</span></div>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                    }
                </div>
            </section>
        </div>
    )
}

export default PaymentSect
