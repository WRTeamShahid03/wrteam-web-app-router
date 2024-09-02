import React, { useEffect, useState } from 'react';
import noDataImg from '../Asset/Images/Data_Not_Found.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NoDataFound = () => {
    const router = useRouter();
    const [canGoBack, setCanGoBack] = useState(false);

    useEffect(() => {
        if (window.history.length > 1) {
            setCanGoBack(true);
        }
    }, []);

    const handleGoBack = () => {
        router.back();
    };

    return (
        <div className='err404'>
            <Image height={0} width={0} loading="lazy" src={noDataImg} alt="noDataImg" />
            <div>
                <h2>Data Not Found!</h2>
                <span>No results found. We're sorry, but we couldn't find anything matching your request.</span>
                {canGoBack ? (
                    <button onClick={handleGoBack} className='homeCommon_btn'>Go Back</button>
                ) : (
                    <Link href='/'><button className='homeCommon_btn'>Go To Home</button></Link>
                )}
            </div>
        </div>
    );
};

export default NoDataFound;

