'use client'
import React from 'react'
import CommonTextComp from '../freeCodePageComponents/CommonTextComp'
import ReactPlayer from 'react-player';
import CommonBtnComp from '../freeCodePageComponents/CommonBtnComp';

const VideoSect = () => {

    const videoSrc = 'https://www.taxmann.com/emailer/images/CompaniesAct.mp4';

    return (
        <section className='videoSect commonBodyGlow container flex_column commonMT'>
            <CommonTextComp title={'Fed Up with Coding from Scratch? Get 11 Ready-to-Use'} blueText={'Source Codes for Just $699!'} desc={'Why start from zero? Use these ready-made Source codes and speed up your work instantly.'} />
            <div className='videoPlayer'>
                <ReactPlayer
                    url={videoSrc}
                    controls
                    width='100%'
                    height='100%'
                />
            </div>
            <CommonBtnComp />
        </section>
    )
}

export default VideoSect