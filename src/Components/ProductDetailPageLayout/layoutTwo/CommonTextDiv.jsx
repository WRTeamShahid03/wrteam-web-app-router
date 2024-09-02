import React from 'react'

const CommonTextDiv = ({ title, desc }) => {
    return (
        <>
            <div className="commonTextWrapper">
                <div className="flex_center">
                    <div>
                        <span className='comman_Headlines'>{title}</span>
                    </div>
                    <div>
                        <span className='comman_para'  dangerouslySetInnerHTML={{ __html: desc }}  ></span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CommonTextDiv
