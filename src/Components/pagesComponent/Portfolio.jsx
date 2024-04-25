'use client'
import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import PortfolioSection from '../PortfolioSection';
import ReactPaginate from 'react-paginate';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import Yakili from '../../Asset/Images/portfolio/Yakili.jpg'
import Tabebi from '../../Asset/Images/portfolio/Tabibe.jpg'
import Talanta from '../../Asset/Images/portfolio/Talenta.jpg'
import Strongtools from '../../Asset/Images/portfolio/Strongtools.jpg'
import Lokale from '../../Asset/Images/portfolio/Lokale-mand.jpg'
import AristoTrivia from '../../Asset/Images/portfolio/Aristo trivia.jpg'
import Quikup from '../../Asset/Images/portfolio/QuizUp.jpg'
import KppsQuiz from '../../Asset/Images/portfolio/KPSSBilgiYarismasi.jpg'

const Portfolio = () => {
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(2); // Adjusted total pages
    const [sortOption, setSortOption] = useState('');
    const [page, setPage] = useState(1);

    const portfolioItemsPerPage = 4; // Number of PortfolioSections per page

    const portfolioData = [
        {
            id: 0,
            title: 'Yakili',
            headline: 'Online Learning with Innovative School Management App',
            para: `Say goodbye to manual paperwork and administrative hassles, and embrace the future of education management with Yakili. An innovative school management app revolutionizing online learning! Developed using Flutter technology, which is compatible with both platform Android and iOS, managing student enrollment, attendance, scheduling, and resources is effortless. With Yakili, we've fulfilled client needs, ensuring seamless performance and user satisfaction.`,
            playStore: true,
            iosStore: true,
            web: false,
            sectionImg: Yakili,
            reverseSection: false,
            android: 'https://play.google.com/store/apps/details?id=com.yakili.lms',
            android2: '',
            ios: 'https://apps.apple.com/us/app/yakili/id6468250672',
            webLink: ''
        },
        {
            id: 1,
            title: 'Tabebi',
            headline: 'Convenient Healthcare System with Doctor-Patient Connection',
            para: 'Designed for both doctors and patients, these apps streamline appointment scheduling and enhance healthcare accessibility. Doctors can manage appointments efficiently, while patients can easily find and book appointments with their preferred healthcare providers.By bridging the gap between doctors and patients, this app promotes enhanced communication, increased accessibility to healthcare services, and improved patient outcomes.',
            playStore: true,
            playStore2: true,
            iosStore: false,
            web: false,
            sectionImg: Tabebi,
            reverseSection: true,
            android: 'https://play.google.com/store/apps/details?id=com.app.tabebiuser',
            android2: 'https://play.google.com/store/apps/details?id=com.tabebi.doctor',
            androidName: 'User',
            androidName2: 'Doctor',
            ios: '',
            webLink: ''
        },
        {
            id: 2,
            title: 'Talanta',
            headline: 'Spotlight on Talanta: Empowering Talent Showcase in the Digital Era!',
            para: 'This dynamic platform empowers users worldwide to showcase their talents and compete for top rankings in various categories. Developed for our valued client, Talanta offers a cutting-edge platform for individuals to showcase their talents and connect with opportunities. We take pride in developing this entertainment platform, offering a user-friendly interface and transparent ranking system to ensure a fair and rewarding experience for every participant.',
            playStore: false,
            iosStore: false,
            web: true,
            sectionImg: Talanta,
            reverseSection: false,
            android: '',
            android2: '',
            ios: '',
            webLink: 'https://talanta.thewrteam.in/'
        },
        {
            id: 3,
            title: 'Strongtools',
            headline: 'Strongtools Crypto Management: Admin Panel Build in Material UI',
            para: 'A custom Material UI Admin Panel crafted for StrongTools, a leading name in the crypto space. Our team spearheaded the design and development of this intuitive and feature-rich admin interface, tailored to streamline crypto management with elegance and efficiency. With a sleek and easy-to-use design thanks to Material UI, our admin panel simplifies tasks like handling user accounts, monitoring transactions, and analyzing data.',
            playStore: false,
            iosStore: false,
            web: true,
            sectionImg: Strongtools,
            reverseSection: true,
            android: '',
            android2: '',
            ios: '',
            webLink: 'https://strongtools.vercel.app/'
        },
        {
            id: 4,
            title: 'Lokale Mand',
            headline: 'Grocery Business App',
            para: `With Lokale Mand, we've crafted a seamless platform where both sellers and customers can connect and transact according to their unique needs. the power of the latest Flutter version, we 
            developed Lokale Mand to provide a superior user experience. With a sleek and intuitive interface, both sellers and customers can navigate the app with ease, enjoying features such as inventory management, order placement, and real-time communication.`,
            playStore: true,
            iosStore: false,
            web: false,
            sectionImg: Lokale,
            reverseSection: false,
            android: 'https://drive.google.com/file/d/17mwHcn0XSadwsvLRkdSgh7dlRBp-UC8I/view?usp=sharing',
            android2: '',
            ios: '',
            webLink: ''
        },
        {
            id: 5,
            title: 'Aristo Trivia',
            headline: 'Elevate Your Knowledge, Win Big',
            para: `AristoTrivia is your premier destination for engaging trivia experiences and exciting rewards, built using the versatile Flutter platform. Test your knowledge across various categories and compete with friends, colleagues, or loved ones. From sports enthusiasts to culture buffs, AristoTrivia offers something for everyone.`,
            playStore: true,
            iosStore: true,
            web: false,
            sectionImg: AristoTrivia,
            reverseSection: true,
            android: 'https://drive.google.com/file/d/17mwHcn0XSadwsvLRkdSgh7dlRBp-UC8I/view?usp=sharing',
            android2: '',
            ios: '',
            webLink: ''
        },
        {
            id: 6,
            title: 'QuizUp',
            headline: 'QuizUp - Thousands of questions with various difficulty levels!',
            para: `We developed QuizUp, a quiz app for learning and testing knowledge. It includes features like self-examination, contests, and battles with thousands of questions with various difficulty levels. Users can earn points by winning quizzes watching ads, and collecting badges to highlight achievements. We have a team of people with expertise in creating engaging and interactive applications.`,
            playStore: true,
            iosStore: true,
            web: false,
            sectionImg: Quikup,
            reverseSection: false,
            android: 'https://play.google.com/store/apps/details?id=dragon.games.biequiz',
            android2: '',
            ios: 'https://apps.apple.com/tr/app/quizup-quizapp/id6473742191?l=tr&platform=iphone',
            webLink: ''
        },
        {
            id: 7,
            title: 'KPSS Bilgi Yarismasi',
            headline: 'KPSS Bilgi Yarismasi- Best KPSS quiz game in Turkey',
            para: `We made KPSS Quiz, a fun quiz game in Turkish language, math, and general knowledge. You can play alone or with friends, earn points, and try to be at the top of the game's leaderboard. This shows our expertise in making fun and educational apps that you'll enjoy playing`,
            playStore: true,
            iosStore: false,
            web: false,
            sectionImg: KppsQuiz,
            reverseSection: true,
            android: 'https://play.google.com/store/apps/details?id=com.polatsoftware.kpssbilgileri',
            android2: '',
            ios: '',
            webLink: ''
        },
    ];

    // Logic to slice portfolioData based on currentPage
    const startIndex = (currentPage - 1) * portfolioItemsPerPage;
    const endIndex = startIndex + portfolioItemsPerPage;
    const visiblePortfolioItems = portfolioData.slice(startIndex, endIndex);

    const handlePageChange = ({ selected }) => {
        const nextPage = selected + 1;
        setCurrentPage(nextPage);
        setSortOption('');
        setPage(nextPage);
        window.scrollTo(0, 0);
    };
    return (
        <>
            <section className="portfolio webPro container">

                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 UpperDiv">
                        <div className="webProHeadingDiv">
                            {/* {
                                loading ?
                                    <span> <Skeleton width={300} height={25} /></span> :
                                    <span className='commonHeadlines' >We found <span>{portfolioData.length}</span> Products</span>

                            } */}
                            {/* <div className="sortBy">
                                <span>Sort By :</span>
                                <select
                                    className="form-select form-select-md"
                                    aria-label=".form-select-lg example"
                                // onChange={handleFilterChange}
                                // value={sortOption}
                                >
                                    <option value={""}>Select</option>
                                    <option value={1}>Price: Low to High</option>
                                    <option value={2}>Price: High to Low</option>
                                    <option value={3}>Most Popular</option>
                                </select>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="row mainRow">

                    {visiblePortfolioItems.map((item, index) => (
                        <div className="col-12" key={index}>
                            <PortfolioSection {...item} />
                        </div>
                    ))}
                </div>

                <div className="col-12">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="navigation-buttons">
                            <ReactPaginate
                                pageCount={totalPage}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={1}
                                forcePage={currentPage - 1} // react-paginate starts counting from 0
                                onPageChange={handlePageChange}
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

            </section>

        </>
    )
}

export default Portfolio