import React from 'react'

function InfiniteMovingCards({ data, Card }) {
    return (
        <div className='w-full h-full flex justify-center'>
            <div className='w-full overflow-hidden flex group'>
                <div className='flex animate-slide group-hover:animate-paused'>
                    {data.map((item, index) => (
                        <Card key={index} data={item} />
                    ))}
                </div>
                <div className='flex animate-slide group-hover:animate-paused'>
                    {data.map((item, index) => (
                        <Card key={index} data={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default InfiniteMovingCards