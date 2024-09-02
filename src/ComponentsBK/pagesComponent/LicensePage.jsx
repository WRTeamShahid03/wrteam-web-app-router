'use client'
import React from 'react'
import LicensePlan from '../LicensePlan';


const LicensePage = () => {

    return (
        <>
            <section className="license container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='mainTitle'>Discover More Value: That is Align Your Needs</h1>
                    </div>

                    <div className="col-12">
                        <LicensePlan />
                    </div>


                </div>
            </section>
        </>
    )
}

export default LicensePage
