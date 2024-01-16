import React from 'react'
import getTouch from '../Asset/Images/getTouch.webp'
import { useState } from 'react';
import { toast } from 'react-hot-toast';
// import toast from 'react-hot-toast';

const GetInTouch = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false)

    const scriptURL = 'https://script.google.com/macros/s/AKfycbw2EYgABa9JHHyH1b1Ylrc-bxYtnhMGHgDzMPm7B-nXdQvfoZajvcxqhwdiwVINTkcp/exec';

    const handleSubmit = async (e) => {
        e.preventDefault();
        const clearForm = document.forms['submit-to-google-sheet'];

        if (email.trim() === '' || name.trim() === '') {
            toast.error('Please fill out the form!')
        } else {
            try {
                setLoading(true)
                const response = await fetch(scriptURL, {
                    method: 'POST',
                    body: new FormData(e.target),
                });

                if (response.ok) {
                    setLoading(false)
                    toast.success('Subscribe successfully!')
                    setEmail('');
                    setName('');
                    clearForm.reset();
                    // You can update the UI or perform other actions upon success.
                } else {
                    console.error('Error!', response);
                    // Handle errors here.
                }
            } catch (error) {
                console.error('Error!', error.message);
                // Handle network or other errors here.
            }
        }
    };
    return (
        <div className="getInTouch container" style={{
            background: `url(${getTouch.src})`,
            backgroundSize: 'cover'
        }}>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-9">
                    <div className="getTouchText">
                        <span className='getTouchTitle'>Newsletter</span>
                        <span className='getTouchDesc'>Subscribe for exclusive deals and exciting updates - join the coolest community now! 💌</span>
                    </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-3">
                    <div id='newsletter' className="getTouchBtn">
                        <form name='submit-to-google-sheet' onSubmit={handleSubmit}>
                            <div className="row inputFields">
                                <span className="col-sm-12 col-md-12 col-lg-12 input">
                                    <input type="text" name='Name' placeholder='Your Name' value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                </span>
                                <span className="col-sm-12 col-md-12 col-lg-12 input">
                                    <input type="email" name='Email' placeholder='Your Email Address' value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </span>
                                <button type="submit" value="Send" className='homeCommon_btn'>
                                    {
                                        loading ? <div className="loader-cont">
                                            <div className="loader"></div>
                                        </div> : <span> Subscribe</span>
                                    }
                                </button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch
