import React, { useState } from 'react';
import ReactPlayer from 'react-player';

function SuccessStoryCard({ data }) {
    const { name, image, video_url } = data;
    const [isHover, setIsHover] = useState(false);

    return (
        <div className='relative min-w-80 max-w-3xl pb-5 rounded-md mx-10 bg-yellow-400/50'
            onMouseEnter={() => { setIsHover(true) }}
            onMouseLeave={() => { setIsHover(false) }}
        >
            <img src={image} alt={name} className='w-full h-60 rounded-md' />
            <h1 className='text-3xl font-semibold text-black text-center mt-3'>{name}</h1>
            <div className={`absolute h-full w-full bottom-0 left-0 bg-black/30 backdrop-blur-sm transform transition duration-300 ${isHover ? 'translate-y-0' : 'translate-y-full'}`}>
                <ReactPlayer url={video_url} height="100%" width="100%" />
            </div>
        </div>
    );
}

export default SuccessStoryCard;