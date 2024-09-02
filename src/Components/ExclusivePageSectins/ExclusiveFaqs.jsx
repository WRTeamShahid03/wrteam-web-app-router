'use client'
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import CommonTextComp from '../freeCodePageComponents/CommonTextComp';

const ExclusiveFaqs = () => {

    const data = [
        {
            id: 0,
            question: 'If i buy exclusive license i can sell product on any other platforms?',
            answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum laborum ad quibusdam debitis delectus!`,
        },
        {
            id: 1,
            question: 'Can I transfer the exclusive license to another party?',
            answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum laborum ad quibusdam debitis delectus!`,
        },
        {
            id: 2,
            question: 'Are there any restrictions on how I can market the product?',
            answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum laborum ad quibusdam debitis delectus!`,
        },
        {
            id: 3,
            question: 'How do I handle customer support and inquiries?',
            answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum laborum ad quibusdam debitis delectus!`,
        },
    ];


    return (
        <section className='faqsSect container commonMT'>

            <div className="row">
                <div className="col-12">
                    <div className="textWrapper flex_column">
                        <span className="common_span">
                            <span>All You Need</span> To Know
                        </span>
                        <span className='comman_Headlines' >Frequently Asked <span>Questions</span></span>

                        <span className='comman_para'>Find clear answers to common questions about our exclusive licenses. This
                            section covers everything you need to know to understand your license and make the most of it.</span>
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <Accordion defaultActiveKey="0">
                        {
                            data?.map((ele) => {
                                return <Accordion.Item eventKey={ele.id} key={ele.id}>
                                    <Accordion.Header>{ele.question}</Accordion.Header>
                                    <Accordion.Body>
                                        {ele.answer}
                                    </Accordion.Body>
                                </Accordion.Item>

                            })
                        }
                    </Accordion>
                </div>

            </div>
        </section>
    )
}

export default ExclusiveFaqs
