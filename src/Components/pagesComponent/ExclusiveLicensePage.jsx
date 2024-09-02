'use client'
import React from 'react'
import UpperText from '../ExclusivePageSectins/UpperText'
import BenefitsSect from '../ExclusivePageSectins/BenefitsSect'
import Process from '../ExclusivePageSectins/Process'
import Comparison from '../ExclusivePageSectins/Comparison'
import ExClusivePageContactUs from '../ExclusivePageSectins/ExClusivePageContactUs'
import ExclusiveFaqs from '../ExclusivePageSectins/ExclusiveFaqs'

const ExclusiveLicensePage = () => {

    return (
        <div className='exclusiveLicensePage'>

            <UpperText />
            <BenefitsSect advantageSect={false} />
            <BenefitsSect advantageSect={true} />
            <Process />
            <Comparison />
            <ExClusivePageContactUs/>
            <ExclusiveFaqs/>

        </div>
    )
}

export default ExclusiveLicensePage
