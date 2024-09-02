import React from 'react'

const CommonTextComp = ({title,blueText,desc}) => {
    return (
        <div className="codePageCommonTextDiv">
            <span className='heading'>{title} <span className='blueText'>{blueText}</span></span>

            <span className='desc'>{desc}</span>
        </div>
    )
}

export default CommonTextComp