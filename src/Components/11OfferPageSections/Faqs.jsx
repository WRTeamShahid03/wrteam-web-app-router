'use client'
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import CommonTextComp from '../freeCodePageComponents/CommonTextComp';

const Faqs = () => {

    const data = [
        {
            id: 0,
            question: 'Can i use 1 product for multiple clients?',
            answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum laborum ad quibusdam debitis delectus!`,
        },
        {
            id: 1,
            question: 'Can i fully customize all source codes?',
            answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum laborum ad quibusdam debitis delectus!`,
        },
        {
            id: 2,
            question: 'How can i obtain 30% discount on installation service?',
            answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum laborum ad quibusdam debitis delectus!`,
        },
        {
            id: 3,
            question: 'What if I face any issues during installation?',
            answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum laborum ad quibusdam debitis delectus!`,
        },
        {
            id: 4,
            question: 'Can I contact support if I have questions before buying?',
            answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum laborum ad quibusdam debitis delectus!`,
        },
        {
            id: 5,
            question: 'What platforms are the source codes compatible with?',
            answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum laborum ad quibusdam debitis delectus!`,
        },
        {
            id: 6,
            question: 'Do you offer customization services?',
            answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum laborum ad quibusdam debitis delectus!`,
        },
    ];


    return (
        <section className='faqsSect container commonMT'>

            <div className="row">
                <div className="col-12">
                    <CommonTextComp title={`Don't Just Take Our Word For It - Hear From `} blueText={'Our Satisfied Customers!'} desc={''} />
                </div>

                <div className="col-12">
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

export default Faqs
