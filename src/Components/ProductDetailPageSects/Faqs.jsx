import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import CommonTextDiv from './CommonTextDiv';

const Faqs = () => {

    const [activeTab, setActiveTab] = useState(1)

    const faqs = [
        {
            id: 0,
            que: 'Buying Basics: How Do I Get Started in the Real Estate Market?',
            ans: `Hipster ipsum tattooed brunch I'm baby. Aesthetic squid selvage dollar cronut. Slow-carb brooklyn health whatever level unicorn chia offal. Bulb actually cardigan enamel probably stumptown. Ugh boys thundercats adaptogen kinfolk.`
        },
        {
            id: 1,
            que: 'Selling Savvy: What Are the Key Steps to Selling My Property?',
            ans: `Hipster ipsum tattooed brunch I'm baby. Aesthetic squid selvage dollar cronut. Slow-carb brooklyn health whatever level unicorn chia offal. Bulb actually cardigan enamel probably stumptown. Ugh boys thundercats adaptogen kinfolk.`
        },
        {
            id: 2,
            que: 'Financing Fundamentals: Demystifying Mortgages and Loans',
            ans: `Hipster ipsum tattooed brunch I'm baby. Aesthetic squid selvage dollar cronut. Slow-carb brooklyn health whatever level unicorn chia offal. Bulb actually cardigan enamel probably stumptown. Ugh boys thundercats adaptogen kinfolk.`
        },
        {
            id: 3,
            que: 'Investment Insights: Exploring the World of Real Estate Investing',
            ans: `Hipster ipsum tattooed brunch I'm baby. Aesthetic squid selvage dollar cronut. Slow-carb brooklyn health whatever level unicorn chia offal. Bulb actually cardigan enamel probably stumptown. Ugh boys thundercats adaptogen kinfolk.`
        },
        {
            id: 4,
            que: 'Renting Right: What You Need to Know as a Tenant or Landlord',
            ans: `Hipster ipsum tattooed brunch I'm baby. Aesthetic squid selvage dollar cronut. Slow-carb brooklyn health whatever level unicorn chia offal. Bulb actually cardigan enamel probably stumptown. Ugh boys thundercats adaptogen kinfolk.`
        },
    ]

    return (
        <div>
            <section className="faqsSect container">
                <div className="row">

                    <div className="col-12">
                        <CommonTextDiv title={`Essential FAQs for Every Real Estate Stage`} desc={`Hipster ipsum tattooed brunch I'm baby. Prism poutine pbr&b cardigan kinfolk tousled beard tote. Kinfolk tumeric mug literally tousled.`} />
                    </div>

                    <div className="col-lg-3">
                        <div className="tabsHeader">
                            <span className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => setActiveTab(1)}>Product</span>
                            <span className={`tab ${activeTab === 2 ? 'active' : ''}`} onClick={() => setActiveTab(2)}>Refund Product</span>
                            <span className={`tab ${activeTab === 3 ? 'active' : ''}`} onClick={() => setActiveTab(3)}>Re-skinning Product</span>
                            <span className={`tab ${activeTab === 4 ? 'active' : ''}`} onClick={() => setActiveTab(4)}>Customization of products</span>
                            <span className={`tab ${activeTab === 5 ? 'active' : ''}`} onClick={() => setActiveTab(5)}>Support Team</span>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="contentDiv">
                            {
                                activeTab === 1 &&
                                <div className="tab1content">
                                    <Accordion defaultActiveKey="0">
                                        {
                                            faqs.map((data) => {
                                                return <Accordion.Item eventKey={data.id}>
                                                    <Accordion.Header>{data.que}</Accordion.Header>
                                                    <Accordion.Body>
                                                        {data.ans}
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            })
                                        }
                                    </Accordion>
                                </div>
                            }
                            {
                                activeTab === 2 &&
                                <div className="tab1content">
                                    <Accordion defaultActiveKey="0">
                                        {
                                            faqs.map((data) => {
                                                return <Accordion.Item eventKey={data.id}>
                                                    <Accordion.Header>{data.que}</Accordion.Header>
                                                    <Accordion.Body>
                                                        {data.ans}
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            })
                                        }
                                    </Accordion>
                                </div>
                            }
                            {
                                activeTab === 3 &&
                                <div className="tab1content">
                                    <Accordion defaultActiveKey="0">
                                        {
                                            faqs.map((data) => {
                                                return <Accordion.Item eventKey={data.id}>
                                                    <Accordion.Header>{data.que}</Accordion.Header>
                                                    <Accordion.Body>
                                                        {data.ans}
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            })
                                        }
                                    </Accordion>
                                </div>
                            }
                            {
                                activeTab === 4 &&
                                <div className="tab1content">
                                    <Accordion defaultActiveKey="0">
                                        {
                                            faqs.map((data) => {
                                                return <Accordion.Item eventKey={data.id}>
                                                    <Accordion.Header>{data.que}</Accordion.Header>
                                                    <Accordion.Body>
                                                        {data.ans}
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            })
                                        }
                                    </Accordion>
                                </div>
                            }
                            {
                                activeTab === 5 &&
                                <div className="tab1content">
                                    <Accordion defaultActiveKey="0">
                                        {
                                            faqs.map((data) => {
                                                return <Accordion.Item eventKey={data.id}>
                                                    <Accordion.Header>{data.que}</Accordion.Header>
                                                    <Accordion.Body>
                                                        {data.ans}
                                                    </Accordion.Body>
                                                </Accordion.Item>
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
