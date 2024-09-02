import React from 'react'
import CommonTextDiv from './CommonTextDiv'
import LicensePlan from '../../LicensePlan'

const LicenseSect = ({layoutTwo}) => {
    return (
        <section className={`licenseSect ${layoutTwo ? 'layoutTwoLicense':''}`}>
            <CommonTextDiv title={'Unlock Your Success: Explore Our Competitive Pricing Options'} desc={`Hipster ipsum tattooed brunch I'm baby. Prism poutine pbr&b cardigan kinfolk tousled beard tote. Kinfolk tumeric mug literally tousled.`} />
            <LicensePlan productDetailPage={true} />
        </section>
    )
}

export default LicenseSect
