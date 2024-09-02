import React from 'react'
import CommonTextDiv from './CommonTextDiv'
import LicensePlan from '../../LicensePlan'
import { useSelector } from 'react-redux'
import { layoutSelector } from '@/redux/reuducer/productLayoutSlice'

const LicenseSect = () => {

    const layout = useSelector(layoutSelector)

    return (
        <section className={`licenseSect ${layout === 1 ? 'layoutOneLicense' : ''}`} id='licenceSection'>
            <div className='px-3'>

            <CommonTextDiv title={'Unlock Your Success: Explore Our Competitive Pricing Options'} desc={`Hipster ipsum tattooed brunch I'm baby. Prism poutine pbr&b cardigan kinfolk tousled beard tote. Kinfolk tumeric mug literally tousled.`} />
            </div>
            <LicensePlan productDetailPage={true} />
        </section>
    )
}

export default LicenseSect
