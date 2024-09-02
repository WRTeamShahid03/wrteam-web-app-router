'use client'
import React from 'react'
import CommonTextComp from '../freeCodePageComponents/CommonTextComp'
import Image from 'next/image'
import icon1 from '../../Asset/Images/sourceCodePage/Icon1.png'
import icon2 from '../../Asset/Images/sourceCodePage/Icon2.png'
import icon3 from '../../Asset/Images/sourceCodePage/Icon3.png'
import icon4 from '../../Asset/Images/sourceCodePage/Icon4.png'
import CommonBtnComp from '../freeCodePageComponents/CommonBtnComp'


const LoveBundleSect = () => {

  const bundleData = [
    {
      id: 0,
      img: icon1,
      title: 'A Freelancer',
      desc: 'Who need to deliver high-quality projects in short of time multiple clients.',
    },
    {
      id: 0,
      img: icon2,
      title: 'A Developer',
      desc: 'Who is looking for efficient tools to speed up your coding and enhance your workflow.',
    },
    {
      id: 0,
      img: icon3,
      title: 'A Entrepreneur',
      desc: 'Who is ready to launch new apps or websites without getting bogged down in development.',
    },
    {
      id: 0,
      img: icon4,
      title: 'A Student',
      desc: 'Who wanting to build real-world projects and learn from well structured code examples.',
    },
  ]


  return (
    <section className='loveBundleSect container commonMT'>
      <div className="row">
        <div className="col-12">
          <CommonTextComp title={`You Gonna Love This Bundle`} blueText={`If You're…`} desc={''} />
        </div>

        {
          bundleData.map((item) => {
            return <div className="col-lg-3 col-md-4 col-12" key={item.id}>
              <div className="card">
                <div className="imgWrapper">
                  <Image src={item.img} height={0} width={0} alt='cardIcon' />
                </div>
                <div className='d-flex flex-column gap-1'>
                  <span className='title'>{item.title}</span>
                  <span className='desc'>{item.desc}</span>
                </div>
              </div>
            </div>
          })
        }

        <div className="col-12">
          <CommonBtnComp />
        </div>

      </div>
    </section>
  )
}

export default LoveBundleSect