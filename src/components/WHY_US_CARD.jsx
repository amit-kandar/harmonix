import React from 'react'

function WHY_US_CARD({ img, title, desc }) {
    return (
        <div className='w-full max-w-80 h-40 flex flex-col items-center border-2 border-gray-500 rounded-md'>
            <div>
                <img src={img} alt="About card" className='w-full h-full' />
            </div>
            <div>
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default WHY_US_CARD