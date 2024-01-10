import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import ReactPaginate from 'react-paginate';
import teamDefaultImg from '../Asset/Images/teamDefaultImg.png';
import Image from 'next/image';
import { GetTeamMembersApi } from '@/redux/actions/campaign';
import TeamSkeleton from './TeamSkeleton';


const Team = () => {
    
    const [teamData, setTeamData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalPage, setTotalPage] = useState('');

    const loadPageData = (page) => {
        setLoading(true);
        GetTeamMembersApi({
            page,
            onSuccess: (response) => {
                setTeamData(response.data.data);
                setTotalPage(response.data.last_page);
                setLoading(false);
            },
            onError: (error) => {
                console.log(error);
                toast.error('Something Went Wrong!');
                setLoading(true);
            }
        });
    };

    const handlePageChange = ({ selected }) => {
        const nextPage = selected + 1;
        setCurrentPage(nextPage);
        loadPageData(nextPage);
    };

    useEffect(() => {
        loadPageData(currentPage);
    }, [currentPage]);


    return (
        <section id="team">
            <div className="teamWrapper container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="teamUpperDiv">
                            <h4 className="common_span">
                                Expert<span> Team</span>
                            </h4>
                            <span
                                className="comman_Headlines"
                            >
                                Catalyzing Global Reach The
                                <span> Expert Team Powering IT Solutions Worldwide</span>
                            </span>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="teamSlider">
                            <div className="row">
                                {
                                    loading ? Array.from({ length: 4 }).map((_, index) => (
                                        <div className="col-sm-12 col-md-6 col-lg-3 loading_data" key={index}>
                                            <TeamSkeleton />
                                        </div>
                                    )) : <>
                                        {teamData.map((ele, index) => (
                                            <div className="col-sm-12 col-md-6 col-lg-3" key={ele.id}>
                                                <div className="card text-white">
                                                    <Image height={0} width={0} loading="lazy"
                                                        src={ele.img || teamDefaultImg}
                                                        className="card-img-top"
                                                        alt="teamImg"
                                                    />
                                                    <div className="card-img-overlay">
                                                        <div className="teamDeatails">
                                                            <p className="card-title teamName">{ele.name}</p>
                                                            <span className="card-text teamWork">{ele.designation}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                }

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
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Team;
