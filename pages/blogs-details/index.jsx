import BlogsSideBoxes from '@/Components/BlogsSideBoxes'
import Breadcrum from '@/Components/Breadcrum'
import React, { useState } from 'react'
import { BsFacebook, BsLinkedin, BsPinterest, BsReplyAll } from 'react-icons/bs'

import dateIcon from '../../src/Asset/Icons/ic_date.png'
import blog5 from "../../src/Asset/Images/Blog_5@2x.png"
import blog from '../../src/Asset/Images/blog_img.png'
import blog1 from '../../src/Asset/Images/blog_img1.png'
import { AiFillTwitterCircle } from 'react-icons/ai'
import previousBlog from '../../src/Asset/Images/recent_blog_4.png'
import nextBlog from '../../src/Asset/Images/recent_blog_5.png'
import user1 from '../../src/Asset/Images/user_pic_1.png'
import user2 from '../../src/Asset/Images/user_pic_2.png'
import user3 from '../../src/Asset/Images/user_pic_3.png'
import user4 from '../../src/Asset/Images/user_pic_4.png'
import GetInTouch from '@/Components/GetInTouch'
import Link from 'next/link'
import Image from 'next/image'


const index = () => {

    const [replyInput, setReplyInput] = useState('');
    const [replyText, setReplyText] = useState('');
    const [commentsData] = useState([
        {
            id: 1,
            name: 'SkyTraveler123',
            comment:
                'Fascinating read! The concept of flying cars has always captured my imagination. As a tech enthusiast, I\'m thrilled to see these advancements taking shape. The potential for reducing urban congestion and transforming how we move is truly exciting.',
            date: 'May 25 , 2024',
            img: user1,
            replies: [],
        },
        {
            id: 2,
            name: 'AeroPioneer87',
            comment:
                'Brilliant post! The integration of autonomous flight and electric propulsion is a game-changer. I\'ve been following flying car prototypes closely, and the progress they\'ve made is astonishing. Can\'t wait to witness the skies teeming with these marvels',
            date: 'August 26, 2023',
            img: user2,
            replies: [],
        },
        {
            id: 3,
            name: 'UrbanNomad22',
            comment:
                'An insightful overview of the challenges and opportunities presented by urban air mobility. The thought of seamless transitions from ground to air travel has me intrigued. Addressing safety concerns and collaborating with city planners will be pivotal in making this a reality',
            date: 'August 28, 2023',
            img: user3,
            replies: [],
        },
        {
            id: 4,
            name: 'FutureSkyways',
            comment:
                'Great post! I appreciate the emphasis on sustainable aviation solutions. The potential reduction in carbon emissions could have a profound impact on our cities\' environmental health. Flying cars could redefine not just how we travel, but how we view urban sustainability',
            date: 'August 30, 2023',
            img: user4,
            replies: [],
        },
    ]);

    const handleReply = (commentId) => {
        setReplyInput(commentId);
    };

    const handleReplySubmit = (commentId) => {
        const updatedComments = commentsData.map((comment) => {
            if (comment.id === commentId) {
                return {
                    ...comment,
                    replies: [
                        ...comment.replies,
                        {
                            id: comment.replies.length + 1,
                            name: 'Your Name', // Get user's name from input field or authentication
                            comment: replyText,
                            date: new Date().toLocaleDateString(), // Current date
                        },
                    ],
                };
            }
            return comment;
        });

        setReplyInput('');
        setReplyText('');
        // Update comments with new replies
        // You might want to send updatedComments to your API or wherever you're storing your data
    };

    return (
        <>
            <Breadcrum title="Blogs" blueText="Details" contentOne="Home" contentTwo="Blogs Details" />

            <section id='blogDetails' className='container'>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-8">
                        <div className="upperDiv">
                            <div className="blogDetailCard">
                                <span className="blogDate">
                                    <span> <Image height={0} width={0} loading="lazy"  src={dateIcon} alt="" /></span>
                                    <span> August 25, 2023</span>
                                </span>

                                <h1 className='blogHeadline'>Flying Cars: Navigating the Path to Urban Air Mobility</h1>
                                <div className="blogImg">
                                    <span className='cateBadge'>Future of Mobility</span>
                                    <Image height={0} width={0} loading="lazy"  src={blog5} alt="" />
                                </div>
                                <div className="blogDetailContent">
                                    <span className='blogContentWrapper'>
                                        <span className='title'>Introduction:</span>
                                        <span className='desc'> The future of transportation is taking to the skies, quite literally. The concept of flying cars, once relegated to science fiction, is now edging closer to reality, promising a transformative leap in urban mobility. In this blog post, we embark on an exhilarating journey through the world of flying cars, exploring their technological evolution, the challenges they face, and the potential they hold for revolutionizing urban transportation.</span>
                                    </span>

                                    <span className='blogContentWrapper'>
                                        <span className='title'>The Vision of Urban Air Mobility:</span>
                                        <span className='desc'> Imagine a bustling cityscape where traffic congestion becomes a thing of the past, and the skies above are filled with sleek, vertical takeoff and landing vehicles (VTOLs). The vision of urban air mobility promises to alleviate ground-level congestion, reduce commute times, and provide a new dimension of accessibility.</span>
                                    </span>

                                    <span className='blogContentWrapper'>

                                        <span className='title'>Technological Innovations Driving the Dream:</span>
                                        <span className='desc'> The development of flying cars hinges on cutting-edge technologies that blend aviation, autonomy, and sustainable energy solutions. Electric propulsion systems, advanced navigation algorithms, and autonomous flight capabilities are converging to create the building blocks of this futuristic mode of transportation. </span>
                                    </span>

                                    <span className='blogContentWrapper'>
                                        <span className='title'>From Prototypes to Real-world Testing:</span>
                                        <span className='desc'>Companies across the globe are actively prototyping and testing flying car concepts. These prototypes range from compact, single-passenger VTOLs to larger, multi-passenger aerial vehicles. Successful test flights are demonstrating the feasibility of the technology, instilling confidence in the potential of flying cars to become a viable urban transportation solution.</span>
                                    </span>

                                </div>

                            </div>

                        </div>

                        <div className="middleDiv">

                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <Image height={0} width={0} loading="lazy"  src={blog} alt="" className='middleDivImg' />
                                </div>

                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <Image height={0} width={0} loading="lazy"  src={blog1} alt="" className='middleDivImg' />
                                </div>

                            </div>

                            <div className="blogDetailContent">
                                <span className='blogContentWrapper'>
                                    <span className='title'> Overcoming Technical and Regulatory Challenges:</span>
                                    <span className='desc'> As with any groundbreaking innovation, flying cars face their share of technical and regulatory hurdles. Ensuring air traffic management, noise reduction, safety systems, and infrastructure compatibility are just a few of the challenges that must be navigated to bring flying cars to urban skies</span>
                                </span>

                                <span className='blogContentWrapper'>
                                    <span className='title'> Shaping Urban Planning and Design: </span>
                                    <span className='desc'>The advent of urban air mobility is not only about reimagining transportation but also about reshaping the very fabric of our cities. Urban planners and architects are envisioning landing pads atop buildings, integrating VTOL hubs into urban infrastructure, and designing cities with aerial transportation in mind.</span>
                                </span>

                                <span className='blogContentWrapper'>

                                    <span className='title'>Transforming Accessibility and Sustainability:</span>
                                    <span className='desc'> Flying cars have the potential to bridge accessibility gaps, connecting remote or underserved areas to urban centers with unprecedented speed. Additionally, the shift toward electric propulsion systems promises reduced carbon emissions and a more sustainable mode of travel, contributing to greener urban environments. </span>
                                </span>

                                <span className='blogContentWrapper'>
                                    <span className='title'>Public Perception and Acceptance:</span>
                                    <span className='desc'> As flying cars inch closer to reality, public perception and acceptance become pivotal. Building trust and familiarity with this innovative mode of transportation will require clear communication, safety demonstrations, and collaborative efforts between technology developers and the public.</span>
                                </span>

                                <span className='blogContentWrapper'>
                                    <span className='title'>The Road Ahead:</span>
                                    <span className='desc'> A Sky Full of Promise: The path to realizing urban air mobility is a complex one, yet the promise it holds is truly captivating. From redefining daily commutes to enabling rapid medical transport and disaster response, flying cars have the potential to revolutionize the way we navigate our urban environments. </span>
                                </span>

                                <span className='blogContentWrapper'>
                                    <span className='title'>Conclusion:</span>
                                    <span className='desc'>A New Era of Urban Mobility: The idea of flying cars may have once seemed like a fantasy, but it is steadily soaring into reality. As technological advancements continue to accelerate and regulatory frameworks take shape, the dream of urban air mobility draws nearer. In this exciting age of innovation, we find ourselves on the cusp of a new era of urban mobility, where the sky is no longer the limit.</span>
                                </span>

                            </div>

                        </div>

                        <div className="bottomDiv">

                            <div className="tagDiv">
                                <span>
                                    <span>Tag:</span>
                                    <span className="common_span">Artificial Intelligence</span>
                                    <span className="common_span">Internet of Things (IoT)</span>
                                </span>

                                <span className='tagIcons'>
                                    <Link href="">  <span className='facebook'>  <BsFacebook size={30} /> </span> </Link>
                                    <Link href="">  <span className='twitter'>  <AiFillTwitterCircle size={34} /> </span> </Link>
                                    <Link href="">  <span className='pintrest'>  <BsPinterest size={30} /> </span> </Link>
                                    <Link href="">  <span className='linkedin'>  <BsLinkedin size={30} /> </span> </Link>
                                </span>
                            </div>

                            <div className="previousBlogs">
                                <div className='prevNextHeadDiv'>

                                    <span className='boxHeadline'>Previous Blogs</span>
                                    <span className='boxHeadline'>Next Blogs</span>

                                </div>

                                <div className="boxWrapper">
                                    <div className="boxDetails">

                                        <span><Image height={0} width={0} loading="lazy"  src={previousBlog} alt="" className='rbImg' /></span>
                                        <span className='recentBoxContent'>
                                            <span className='rbDate'><Image height={0} width={0} loading="lazy"  src={dateIcon} alt="" /> May 25, 2024</span>
                                            <span>Blockchain Beyond Cryptocurrency: Real-World Applications and Implications</span>
                                        </span>
                                    </div>
                                    <div className="boxDetails" >

                                        <span className='recentBoxContent'>
                                            <span className='rbDate'><Image height={0} width={0} loading="lazy"  src={dateIcon} alt="" /> June 8, 2024</span>
                                            <span>Ethics in AI: Navigating the Complex Landscape of Artificial Intelligence</span>
                                        </span>
                                        <span><Image height={0} width={0} loading="lazy"  src={nextBlog} alt="" className='rbImg' /></span>
                                    </div>
                                </div>

                            </div>

                            {/* <div className="commentBox">
                                <span className='boxHeadline'>Comments (03)</span>

                                <div className="commentWrapper">

                                    <div className="commentCard">
                                        <span><Image height={0} width={0} loading="lazy"  src={commentsData[0].img} alt="userPic" /></span>
                                        <span className='userContent'>
                                            <span className='userName'>{commentsData[0].name}</span>
                                            <span className='userComment'>{commentsData[0].comment}</span>
                                            <span className='rbDate'>
                                                <span className='blogDate'> <Image height={0} width={0} loading="lazy"  src={dateIcon} alt="" />{commentsData[0].date} </span>
                                                <span className='replyBtn' onClick={() => setReplyInput(true)}> <BsReplyAll size={22} /> Reply </span>
                                            </span>

                                            {
                                                replyInput ? <span className='replyInput'>
                                                    <div className="input-group">
                                                        <textarea className="form-control leaveInputColor" aria-label="With textarea" placeholder='Write Reply'></textarea>

                                                    </div>
                                                    <button className='homeCommon_btn' type='submit'>Submit</button>

                                                </span> : ""
                                            }



                                        </span>

                                    </div>
                                </div>

                                <div className="commentWrapper">

                                    <div className="commentCard">
                                        <span><Image height={0} width={0} loading="lazy"  src={commentsData[1].img} alt="userPic" /></span>
                                        <span className='userContent'>
                                            <span className='userName'>{commentsData[1].name}</span>
                                            <span className='userComment'>{commentsData[1].comment}</span>
                                            <span className='rbDate'>
                                                <span className='blogDate'> <Image height={0} width={0} loading="lazy"  src={dateIcon} alt="" />{commentsData[1].date} </span>
                                                <span className='replyBtn' onClick={() => setReplyInput(true)}> <BsReplyAll size={22} /> Reply </span>
                                            </span>

                                        </span>
                                    </div>

                                    <div className="commentCard subCommentCard">
                                        <span><Image height={0} width={0} loading="lazy"  src={commentsData[2].img} alt="userPic" /></span>
                                        <span className='userContent'>
                                            <span className='userName'>{commentsData[2].name}</span>
                                            <span className='userComment'>{commentsData[2].comment}</span>
                                            <span className='rbDate'>
                                                <span className='blogDate'> <Image height={0} width={0} loading="lazy"  src={dateIcon} alt="" />{commentsData[2].date} </span>
                                                <span className='replyBtn' onClick={() => setReplyInput(true)}> <BsReplyAll size={22} /> Reply </span>
                                            </span>

                                        </span>
                                    </div>

                                </div>

                                <div className="commentWrapper">

                                    <div className="commentCard">
                                        <span><Image height={0} width={0} loading="lazy"  src={commentsData[3].img} alt="userPic" /></span>
                                        <span className='userContent'>
                                            <span className='userName'>{commentsData[3].name}</span>
                                            <span className='userComment'>{commentsData[3].comment}</span>
                                            <span className='rbDate'>
                                                <span className='blogDate'> <Image height={0} width={0} loading="lazy"  src={dateIcon} alt="" />{commentsData[3].date} </span>
                                                <span className='replyBtn' onClick={() => setReplyInput(true)}> <BsReplyAll size={22} /> Reply </span>
                                            </span>

                                            {
                                                replyInput ? <span className='replyInput'>
                                                    <div className="input-group">
                                                        <textarea className="form-control leaveInputColor" aria-label="With textarea" placeholder='Write Reply'></textarea>

                                                    </div>
                                                    <button className='homeCommon_btn' type='submit'>Submit</button>

                                                </span> : ""
                                            }

                                        </span>

                                    </div>
                                </div>

                            </div> */}

                            {/* <div className="commentBox">
                                <span className="boxHeadline">Comments ({commentsData.length})</span>

                                {commentsData.map((comment) => (
                                    <div className="commentWrapper" key={comment.id}>
                                        <div className="commentCard">
                                            <span>
                                                <Image height={0} width={0} loading="lazy"  src={comment.img} alt="userPic" />
                                            </span>
                                            <span className="userContent">
                                                <span className="userName">{comment.name}</span>
                                                <span className="userComment">{comment.comment}</span>
                                                <span className="rbDate">
                                                    <span className="blogDate">
                                                        {' '}
                                                        <Image height={0} width={0} loading="lazy"  src={dateIcon} alt="" />
                                                        {comment.date}{' '}
                                                    </span>
                                                    <span className="replyBtn" onClick={() => handleReply(comment.id)}>
                                                        {' '}
                                                        <BsReplyAll size={22} /> Reply{' '}
                                                    </span>
                                                </span>
                                            </span>
                                            {replyInput === comment.id && (
                                                <div className="replyInput">
                                                    <textarea
                                                        className="form-control leaveInputColor"
                                                        value={replyText}
                                                        onChange={(e) => setReplyText(e.target.value)}
                                                        placeholder="Write Reply"
                                                    />
                                                    <button className="homeCommon_btn" onClick={() => handleReplySubmit(comment.id)}>
                                                        Submit
                                                    </button>
                                                </div>
                                            )}
                                        </div>

                                        {comment.replies &&
                                            comment.replies.map((reply) => (
                                                <div className="commentCard subCommentCard" key={reply.id}>
                                                    <span>
                                                        <Image height={0} width={0} loading="lazy"  src={reply.img} alt="userPic" />
                                                    </span>
                                                    <span className="userContent">
                                                        <span className="userName">{reply.name}</span>
                                                        <span className="userComment">{reply.comment}</span>
                                                        <span className="rbDate">
                                                            <span className="blogDate">
                                                                {' '}
                                                                <Image height={0} width={0} loading="lazy"  src={dateIcon} alt="" />
                                                                {reply.date}{' '}
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div>
                                            ))}
                                    </div>
                                ))}
                            </div> */}

                            {/* <div className="leaveReplyBox">
                                <span className="boxHeadline">Leave A Reply</span>

                                <div className="mb-3 row leaveInput">
                                    <div className="col-sm-12 col-md-6 col-lg-6">
                                        <input type="text" className="form-control leaveInputColor" id="exampleFormControlInput1" placeholder="Your Name" />
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6">
                                        <input type="email" className="form-control leaveInputColor" id="exampleFormControlInput1" placeholder="Your Email"></input>
                                    </div>

                                    <div className="mb-3 mt-3">
                                        <textarea className="form-control leaveInputColor" id="exampleFormControlTextarea1" rows="3" placeholder='Enter Your Comment'></textarea>
                                    </div>

                                    <div className="form-check leaveCheckBox">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label className="form-check-label" for="flexCheckChecked">
                                            Save my name, email, in this browser for the next time I comment.
                                        </label> <br />

                                        <button className='homeCommon_btn' type='submit'>Post Comment</button>
                                    </div>

                                </div>
                            </div> */}

                        </div>

                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-4">

                        <BlogsSideBoxes />

                    </div>
                </div>
            </section >
        </>
    )
}

export default index
