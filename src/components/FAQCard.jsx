import React, { useState } from 'react'

function FAQCard({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='w-full h-auto max-w-xl pb-3 overflow-hidden'>
            <div className='w-full flex justify-between gap-5 cursor-pointer' onClick={() => { setIsOpen(!isOpen) }}>
                <h2 className='text-lg sm:text-xl font-medium'>{question}</h2>
                <i className={`bx ${isOpen ? 'bx-chevron-up' : 'bx-chevron-down'} text-3xl`} ></i>
            </div>
            <div className={`w-full mt-3 ${isOpen ? 'block' : 'hidden'} border-b border-black/20`}>
                <p className='text-sm md:text-base text-yellow-600'>{answer}</p>
            </div>
        </div>
    )
}

export default FAQCard