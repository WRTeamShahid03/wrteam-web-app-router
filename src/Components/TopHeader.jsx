import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';

const TopHeader = () => {


  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])


  const [targetTime, setTargetTime] = useState(getTargetTime());
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function getTargetTime() {
    const today = new Date(); // Get today's date and time
    today.setHours(18, 30, 0, 0); // Set the time to 6:30 PM (18:30)

    return today;
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date();
    const timeDifference = targetTime - now;
    if (timeDifference >= 0) {
      // Countdown is over
      return {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      };
    }

    const days = Math.max(0, Math.floor(timeDifference / (1000 * 60 * 60 * 24))).toString().padStart(2, '0');
    const hours = Math.max(0, Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).toString().padStart(2, '0');
    const minutes = Math.max(0, Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))).toString().padStart(2, '0');
    const seconds = Math.max(0, Math.floor((timeDifference % (1000 * 60)) / 1000)).toString().padStart(2, '0');

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  if (targetTime <= new Date()) {
    // Countdown is over, render appropriate message
    return (<div className='countdownOver commonMT'>
      <span> Sorry You Are Late 😕 </span>
      <span>Sale Is Over</span>
      <span className='boldText'>Subscribe Newsletter For Upcoming Offer! 📩</span>
    </div>)
  }



  return (
    <div className='topHeader'>
      <span> <span> 50% discount</span> on <span>Elite Quiz App & Web!</span> </span>
      Sale Ends In!
      <div className="countdownDiv">
        {
          isClient ?
            <Countdown
              date={targetTime}
              suppressHydrationWarning={true}
              renderer={({ days, hours, minutes, seconds }) => (
                <div className="countdown-container">
                  <div className="countdown-box">

                    <span className='countTimer'> {days} </span>

                    <span className="countdown-label">Days</span>
                  </div>
                  :
                  <div className="countdown-box">

                    <span className='countTimer'> {hours} </span>

                    <span className="countdown-label">Hours</span>
                  </div>
                  :
                  <div className="countdown-box">

                    <span className='countTimer'> {minutes} </span>

                    <span className="countdown-label">Minutes</span>
                  </div>
                  :
                  <div className="countdown-box">
                  <span className='countTimer'> {seconds} </span>

                  <span className="countdown-label">Seconds</span>
                </div>
                </div>
              )}
            /> : null
        }

    </div>
    <Link href='https://1.envato.market/nLWvR9' target='_blank'><button >Buy Now <FaArrowRight /></button></Link>

    </div >
  )
}

export default TopHeader
