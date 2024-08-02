import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ course_image, course_name, class_details, redirect_path }) {
    return (
        <Link to={`${redirect_path}`} className='w-full px-5 py-4 rounded-md shadow-lg bg-white'>
            <div className='w-full flex items-center gap-3'>
                <div className='w-16 h-16'>
                    <img src={course_image} alt="course" className='w-full h-full rounded-xl' />
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='text-lg font-semibold'>{course_name}</div>
                    <span className='text-base'>{class_details}</span>
                </div>
            </div>
        </Link>
    )
}

export default CourseCard