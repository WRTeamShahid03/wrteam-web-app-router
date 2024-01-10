import React from 'react'

import dateIcon from '../Asset/Icons/ic_date.png'
import rbImg1 from '../Asset/Images/recent_blog_1.png'
import rbImg2 from '../Asset/Images/recent_blog_2.png'
import rbImg3 from '../Asset/Images/recent_blog_3.png'
import rbImg4 from '../Asset/Images/recent_blog_4.png'
import rbImg5 from '../Asset/Images/recent_blog_5.png'
import Image from 'next/image'

const BlogsSideBoxes = () => {

  const category = [
    {
      id: 1,
      cate: "Artificial Intelligence",
      cateNum: "(02)"
    },
    {
      id: 2,
      cate: "Cybersecurity",
      cateNum: "(08)"
    },
    {
      id: 3,
      cate: "Space Exploration",
      cateNum: "(05)"
    },
    {
      id: 4,
      cate: "Sustainable Technology",
      cateNum: "(07)"
    },
    {
      id: 5,
      cate: "Future of Mobility",
      cateNum: "(09)"
    },
    {
      id: 6,
      cate: "Internet of Things (IoT)",
      cateNum: "(04)"
    },
  ]

  const recentBlogs = [
    {
      id: 0,
      img: rbImg1,
      date: "February 10, 2024",
      desc: "5G Unleashed: Transforming Industries and Redefining Connectivity"
    },
    {
      id: 1,
      img: rbImg2,
      date: "March 5, 2024",
      desc: "The Quantum Computing: Unlocking Unprecedented Computational Power"
    },
    {
      id: 2,
      img: rbImg3,
      date: "April 15, 2024",
      desc: "Augmented Reality in Education: Bridging Gaps and Enriching Learning"
    },
    {
      id: 3,
      img: rbImg4,
      date: "May 25, 2024",
      desc: "Blockchain Beyond Cryptocurrency: Real-World Applications and Implications"
    },
    {
      id: 4,
      img: rbImg5,
      date: "June 8, 2024",
      desc: "Ethics in AI: Navigating the Complex Landscape of Artificial Intelligence"
    },
  ]

  const tags = [
    {
      id: 1,
      tag: "Artificial Intelligence"
    },
    {
      id: 2,
      tag: "Internet of Things (IoT)"
    },
    {
      id: 3,
      tag: "Cybersecurity"
    },
    {
      id: 4,
      tag: "Quantum Computing"
    },
    {
      id: 5,
      tag: "Augmented Reality"
    },
    {
      id: 6,
      tag: "Blockchain Technology"
    },
    {
      id: 7,
      tag: "5G Connectivity"
    },
    {
      id: 8,
      tag: "Ethical AI"
    },

  ]

  return (
    <>
    <section id='category' className='cateSideBoxes'>
    
      <div className="cateBox">
        <span className='boxHeadline'>Category</span>

        {
          category.map((e) => {
            return <div className="boxDetails" key={e.id}>
              <span className='boxDetailsSpan1'>{e.cate}</span>
              <span>{e.cateNum}</span>
            </div>
          })
        }

      </div>

      <div className="recentBlogs">
        <span className='boxHeadline'>Recent Blogs</span>

        {
          recentBlogs.map((e) => {
            return <div className="boxDetails" key={e.id}>
              <span><Image height={0} width={0} loading="lazy"  src={e.img} alt="" className='rbImg' /></span>
              <span className='recentBoxContent'>
                <span className='rbDate'><Image height={0} width={0} loading="lazy"  src={dateIcon} alt="" /> {e.date}</span>
                <span>{e.desc}</span>
              </span>
            </div>
          })
        }


      </div>

      <div className="tags">
        <span className='boxHeadline'>Tags</span>
        {
          tags.map((e) => {
            return <span className='common_span' key={e.id}>{e.tag}</span>
          })
        }
      </div>

      </section>
    </>
  )
}

export default BlogsSideBoxes
