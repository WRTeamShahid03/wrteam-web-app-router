import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';

const TopHeader = () => {
  const [isClient, setIsClient] = useState(false);
  const [targetTime, setTargetTime] = useState(getTargetTime());

  useEffect(() => {
    setIsClient(true);
  }, []);

  function getTargetTime() {
    // Set the target time to March 31st, 2024, 6:30 PM
    const targetDate = new Date(2024, 2, 31, 18, 30, 0); // Note: Months are zero-indexed, so March is 2
    return targetDate;
  }

  if (targetTime <= new Date()) {
    // Countdown is over, render appropriate message
    return (
      <div className='countdownOver commonMT'>
      </div>
    );
  }

  return (
    <div className='topHeader'>
      <div>
        <span> 50% discount</span> on <span>Elite Quiz App & Web! Sale Ends In!</span>
      </div>

      <div className="countdownDiv">
        {isClient && (
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
          />
        )}
      </div>

      <div>
        <Link href='https://1.envato.market/nLWvR9' target='_blank'>
          <button>Buy Now <FaArrowRight /></button>
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
