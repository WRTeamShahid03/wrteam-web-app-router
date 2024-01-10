import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

import counterBg from '../../src/Asset/Images/CounterImg.png'
import happy from '../../src/Asset/Icons/Happy Clients.svg'
import projectDone from '../../src/Asset/Icons/Projects Done.svg'
import reconnet from '../../src/Asset/Icons/Reconecct.svg'
import satisfaction from '../../src/Asset/Icons/Satisfaction.svg'
import Image from 'next/image';


const Counter = () => {

    const [counter, setCounter] = useState(false)

  return (
    <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
    <div id="counter" className='container' style={{
        background: `url(${counterBg.src})`,
        backgroundSize: 'cover'
    }}>
    
        <div className="countWrapper">
    
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="countCard">
                        <div className="fcardImg">
                            <Image height={0} width={0} loading="lazy"  src={happy} alt="" />
                        </div>
                        <div className="countContent">
                            {counter && <span className='countNum'><CountUp start={0} end={15} duration={2} delay={0} />k+</span>}
    
                            <span className='countText'>
                                Happy Clients
                            </span>
                        </div>
                    </div>
                </div>
    
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="countCard">
                        <div className="fcardImg">
                            <Image height={0} width={0} loading="lazy"  src={projectDone} alt="" />
                        </div>
                        <div className="countContent">
                            {counter && <span className='countNum'> <CountUp start={0} end={450} duration={2} delay={0} />+</span>}
    
                            <span className='countText'>
                                Project Wrapped up
                            </span>
                        </div>
                    </div>
                </div>
    
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="countCard">
                        <div className="fcardImg">
                            <Image height={0} width={0} loading="lazy"  src={reconnet} alt="" />
                        </div>
                        <div className="countContent">
                            {counter && <span className='countNum'><CountUp start={0} end={94} duration={2} delay={0} />%</span>}
                            <span className='countText'>
                                Reconnect
                            </span>
                        </div>
                    </div>
                </div>
    
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <div className="countCard">
                        <div className="fcardImg">
                            <Image height={0} width={0} loading="lazy"  src={satisfaction} alt="" />
                        </div>
                        <div className="countContent">
                            {counter && <span className='countNum'><CountUp start={0} end={98} duration={2} delay={0} />%</span>}
                            <span className='countText'>
                                Satisfaction
                            </span>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
    
    </div>
    </ScrollTrigger>
  )
}

export default Counter
