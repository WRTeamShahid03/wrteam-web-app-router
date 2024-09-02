'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
// import somthingWrong from "../Asset/Images/something_went_wrong.svg";
import Image from 'next/image';

export default function Error({ error, reset }) {
    const router = useRouter()
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])
    const navigateHome = () => {
        router.push('/')
        reset()
    }
    return (
        <div className='container wentWrong my-5'>
            <div>
                {/* <Image loading="lazy" className='m-auto d-block mb-4' src={somthingWrong} alt="no_img" width={200} height={200} /> */}
            </div>
            <div className="no_data_found_text d-flex flex-column justify-content-center align-items-center gap-4 text-center">
                <h3>Something went wrong</h3>
                <h4>Try Again Later</h4>
                <button onClick={navigateHome} className='homeCommon_btn mb-5'>
                    Back Home
                </button>
            </div>
        </div>
    )
}