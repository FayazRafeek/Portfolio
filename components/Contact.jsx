import React from 'react'

export default function Contact() {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            
            <div className="contact-parent w-10/12 mx-auto flex flex-col items-center gap-4">

                <h2 className='text-5xl font-bold'>Send me a message</h2>
                <p className='text-lg font-light text-center leading-8'>
                    Got a question or proposal, or just want <br />
                    to say hello? Go ahead.
                </p>

                <div className="contact-form flex flex-wrap gap-5 w-10/12 items-center justify-center mt-9">

                    <input type="text" className='form-inp' placeholder='NAME' />
                    <input type="text" className='form-inp' placeholder='EMAIL' />
                    <textarea placeholder='MESSAGE' className='form-inp-area' rows='4'/>

                    <button type="submit" className='py-3 px-8 bg-white hover:bg-purple-300 text-black font-bold text-lg mt-6'>SEND</button>
                </div>
            </div>
        </div>
    )
}
