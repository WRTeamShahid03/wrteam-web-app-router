import React from 'react'
import CommonTextDiv from '../layoutTwo/CommonTextDiv'
import Image from 'next/image'

const PaymentGateways = ({ paymentGatewaySectData }) => {

    const data = paymentGatewaySectData && paymentGatewaySectData[0];

    return (
        <>
            <section className='paymentGatewaysSect container'>
                <div className="row mainRow">
                    <div className="col-12">
                        <CommonTextDiv title={data?.title} desc={data?.description} />
                    </div>
                    <div className="col-12">
                        <div className="row gateWaysWrapper">
                            <div className="col-lg-8 iconsDiv">
                                {
                                    data?.gateways?.map((item) => {
                                        return <div className='iconWrapper' key={item?.name}>
                                            <Image src={item?.image_url} height={0} width={0} alt='paymentsIcons' />
                                            <span>{item?.name}</span>
                                        </div>
                                    })
                                }

                            </div>

                            <div className="col-lg-4 sideImgWrapper">
                                <Image src={data?.payment_gateway_main_image_url} height={0} width={0} alt='phoneImg' />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PaymentGateways
