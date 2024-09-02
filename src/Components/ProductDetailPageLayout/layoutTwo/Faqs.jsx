import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import CommonTextDiv from './CommonTextDiv';

const Faqs = ({ title, desc, faqs }) => {

    const [tabsData, setTabsData] = useState([])

    const [activeTab, setActiveTab] = useState(1)


    useEffect(() => {
        if (faqs) {
            const tabs = Object?.keys(faqs);
            setTabsData(tabs)
            setActiveTab(tabs[0])
        }
    }, [faqs])


    return (
        <div>
            <section className="faqsSect container" id='faqsSection'>
                <div className="row">

                    <div className="col-12">
                        <CommonTextDiv title={title} desc={desc} />
                    </div>

                    <div className="col-lg-3">
                        <div className="tabsHeader">
                            {
                                tabsData?.map((ele) => {
                                    return <span key={ele} className={`tab ${activeTab === ele ? 'active' : ''}`} onClick={() => setActiveTab(ele)}>{ele}</span>
                                })
                            }

                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="contentDiv">
                            {
                                <div className="tab1content">
                                    <Accordion defaultActiveKey="0">
                                        {
                                            faqs && faqs[activeTab]?.map((data) => {
                                                return data?.map((ele, index) => {
                                                    return <Accordion.Item eventKey={index} key={index}>
                                                        <Accordion.Header>{ele.question}</Accordion.Header>
                                                        <Accordion.Body>
                                                            {ele.answer}
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                })

                                            })
                                        }
                                    </Accordion>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faqs
