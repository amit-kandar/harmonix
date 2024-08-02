import React from 'react';
import { SECTION_BG_IMG, SUCCESS_STORIES_SUB_TITLE, SUCCESS_STORIES_TITLE } from '../constants';
import { success_stories } from '../utils/successStories';
import InfiniteMovingCards from './InfiniteMovingCards'
import SuccessStoryCard from './SuccessStoryCard';

function SuccessStories() {
    return (
        <div className='w-full h-screen' style={{ backgroundImage: `url(${SECTION_BG_IMG})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='w-full h-full flex flex-col items-center py-10 lg:py-16 px-5 lg:px-10 bg-blue-300/30'>
                <div className='w-full flex flex-col items-center'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-2 lg:mb-5 text-center'>{SUCCESS_STORIES_TITLE}</h1>
                    <h3 className='text-xs md:text-base text-center text-black/70'>{SUCCESS_STORIES_SUB_TITLE}</h3>
                </div>
                <div className='w-full mt-10 lg:mt-20'>
                    <InfiniteMovingCards Card={SuccessStoryCard} data={success_stories} />
                </div>
            </div>
        </div>
    )
}

export default SuccessStories