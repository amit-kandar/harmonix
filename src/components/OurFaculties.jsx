import React from 'react'
import InfiniteMovingCards from './InfiniteMovingCards'
import { FACULTY_SUB_TITLE, FACULTY_TITLE } from '../constants'
import { facultyDetails } from '../utils/facultyDetails';
import FacultyCard from './FacultyCard';

function OurFaculties() {
    return (
        <section className='w-full py-20 px-5'>
            <div className='w-full flex flex-col gap-3 items-center'>
                <h1 className='text-3xl text-center sm:text-5xl lg:text-6xl font-medium text-black'>{FACULTY_TITLE}</h1>
                <h3 className='text-sm text-center md:text-base lg:text-xl text-yellow-400/80'>{FACULTY_SUB_TITLE}</h3>
            </div>
            <div className='w-full mt-10 lg:mt-20'>
                <InfiniteMovingCards Card={FacultyCard} data={facultyDetails} />
            </div>
        </section>
    )
}

export default OurFaculties