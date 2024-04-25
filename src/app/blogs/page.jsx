'use client'
import Breadcrum from '@/Components/Breadcrum'
import { React, useRef, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { BsArrowRightCircle } from 'react-icons/bs';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

// Images
import blog1 from '../../Asset/Images/Blog_1.webp'
import blog2 from '../../Asset/Images/Blog_2.webp'
import blog3 from '../../Asset/Images/Blog_3.webp'
import blog4 from '../../Asset/Images/Blog_4.webp'
import blog5 from '../../Asset/Images/Blog_5.webp'
import blog6 from '../../Asset/Images/Blog_6.webp'
import dateIcon from '../../Asset/Icons/ic_date.png'
import BlogsSideBoxes from '@/Components/BlogsSideBoxes';
import Link from 'next/link';
import Image from 'next/image';

const Index = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const swiperData = [
    {
      id: 0,
      badge: "Artificial Intelligence",
      date: "August 25, 2023",
      title: "Exploring the Evolution of AI in Healthcare",
      text: "Dive into the fascinating journey of Artificial Intelligence in the realm of healthcare. This blog post takes you through the significant advancements AI has made in diagnosing illnesses, personalized treatment plans, and...",
      img: blog1
    },
    {
      id: 1,
      badge: "Cybersecurity",
      date: "September 10, 2023",
      title: "The Rising Threat of Ransomware: Protecting Your Digital Fortress",
      text: "In this informative piece, we dissect the alarming surge of ransomware attacks and their far-reaching consequences. Gain insights into the tactics cybercriminals employ and learn effective strategies to safeguard your digital...",
      img: blog2
    },
    {
      id: 2,
      badge: "Space Exploration",
      date: "October 5, 2023",
      title: "Mars Colonization: Navigating the Challenges of Red Planet Habitability",
      text: "Embark on a celestial journey to explore the intricate challenges and breakthroughs in the quest for colonizing Mars. Delve into the complexities of creating a habitable environment, sustainable resource management...",
      img: blog3
    },
    {
      id: 3,
      badge: "Sustainable Technology",
      date: "November 15, 2023",
      title: "Solar Paint: Painting a Greener and More Energy-Efficient Future",
      text: "Discover the revolutionary concept of solar paint and its potential to transform ordinary surfaces into clean energy generators. This blog post unveils the science behind solar paint, its applications in architecture, transportation...",
      img: blog4
    },
    {
      id: 4,
      badge: "Future of Mobility",
      date: "December 8, 2023",
      title: "Flying Cars: Navigating the Path to Urban Air Mobility",
      text: "Take a leap into the future with a deep dive into the concept of flying cars and their role in urban transportation. Explore the technological marvels behind vertical takeoff and landing vehicles (VTOLs), the regulatory challenges they face...",
      img: blog5
    },
    {
      id: 5,
      badge: "Internet of Things (IoT)",
      date: "January 20, 2024",
      title: "Unleashing the Power of IoT in Smart Agriculture: Cultivating the Future",
      text: "Step into the world of smart agriculture, where Internet of Things (IoT) technologies are revolutionizing traditional farming practices. From precision farming and crop monitoring to automated irrigation and livestock...",
      img: blog6
    },
  ]


  const breakpoints = {
    320: {
      slidesPerView: 1,
      // spaceBetween: 40
    },
    375: {
      slidesPerView: 1,
      // spaceBetween: 40
    },
    576: {
      slidesPerView: 1,
      // spaceBetween: 40
    },
    768: {
      slidesPerView: 2,

    },
    992: {
      slidesPerView: 2,

    },
    1200: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 2,

    }
  };

  const sliderRef = useRef(null);

  const handlePageChange = selectedPage => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideTo(selectedPage);
    setCurrentPage(selectedPage);
  };

  return (
    <>
      <Breadcrum title="Our" blueText="Blogs" contentOne="Home" contentTwo="Our Blogs" />

      <section id='category' className='container'>

        <div className="row">

          <div className="col-sm-12 col-md-12 col-lg-8">
            <div className="teamSlider">
              <Swiper
                ref={sliderRef}
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                modules={[FreeMode, Pagination]}
                // pagination={{
                //   clickable: true,
                //   renderBullet: renderBullet
                // }}
                navigation
                className='testiSwiper'
                breakpoints={breakpoints}
                // data-aos="fade-up"  data-aos-once="true" data-aos-duration="800"
                id='teamSwiper'
              >
                {
                  swiperData.map((ele) => {
                    return <SwiperSlide key={ele.id}>

                      <div className="card text-white">
                        <span className='cateBadge'>{ele.badge}</span>
                        <Image height={0} width={0} loading="lazy" src={ele.img} className="card-img-top" alt="teamImg" />
                        <div className="card-img-top">
                          <div className="cateDetails">
                            <span className="cateDate">
                              <span> <Image height={0} width={0} loading="lazy" src={dateIcon} alt="" /></span>
                              <span> {ele.date}</span>
                            </span>
                            <p className="card-title">
                              {ele.title.length > 50 ? ele.title.slice(0, 55) + "" + "..." : ele.title}</p>
                            <p className='card-text'>{ele.text}</p>

                            <Link href="/blogs-details">  <button className='blogComman_btn'>Read More <BsArrowRightCircle style={{ paddingBottom: "2px" }} /> </button> </Link>
                          </div>

                        </div>
                      </div>


                      <div className="card text-white">
                        <span className='cateBadge'>{ele.badge}</span>
                        <Image height={0} width={0} loading="lazy" src={ele.img} className="card-img-top" alt="teamImg" />
                        <div className="card-img-top">
                          <div className="cateDetails">
                            <span className="cateDate">
                              <span> <Image height={0} width={0} loading="lazy" src={dateIcon} alt="" /></span>
                              <span> {ele.date}</span>
                            </span>
                            <p className="card-title">
                              {ele.title.length > 50 ? ele.title.slice(0, 55) + "" + "..." : ele.title}</p>
                            <p className='card-text'>{ele.text}</p>

                            <button className='blogComman_btn'>Read More <BsArrowRightCircle style={{ paddingBottom: "2px" }} /> </button>
                          </div>
                        </div>
                      </div>

                      <div className="card text-white">
                        <span className='cateBadge'>{ele.badge}</span>
                        <Image height={0} width={0} loading="lazy" src={ele.img} className="card-img-top" alt="teamImg" />
                        <div className="card-img-top">
                          <div className="cateDetails">
                            <span className="cateDate">
                              <span> <Image height={0} width={0} loading="lazy" src={dateIcon} alt="" /></span>
                              <span> {ele.date}</span>
                            </span>
                            <p className="card-title">
                              {ele.title.length > 50 ? ele.title.slice(0, 55) + "" + "..." : ele.title}</p>
                            <p className='card-text'>{ele.text}</p>

                            <button className='blogComman_btn'>Read More <BsArrowRightCircle style={{ paddingBottom: "2px" }} /> </button>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  })
                }
              </Swiper>

              <div className="navigation-buttons">

                <ReactPaginate
                  pageCount={3}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={1}
                  forcePage={currentPage}
                  onPageChange={({ selected }) => handlePageChange(selected)}
                  containerClassName="pagination"
                  activeClassName="active"
                  pageClassName="page-item"
                  previousLabel={<FaAngleLeft color="white" size={22} />}
                  nextLabel={<FaAngleRight color="white" size={22} />}
                  previousClassName="page-item"
                  nextClassName="page-item"
                  previousLinkClassName="page-link"
                  nextLinkClassName="page-link"
                  pageLinkClassName="page-link"
                />

              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4">

            <BlogsSideBoxes />

          </div>

        </div>

      </section>

    </>
  )
}

export default Index
