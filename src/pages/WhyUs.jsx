import React from 'react';
import { motion } from 'framer-motion';
import { SECTION_BG_IMG, WHY_US_SUB_TITLE, WHY_US_TITLE, WHY_CHOOSE_US_POINT1, WHY_CHOOSE_US_POINT2, WHY_CHOOSE_US_POINT3 } from '../constants';

function WhyUs() {
    return (
        <section className='w-full max-h-fit flex justify-center px-5 py-20' style={{ backgroundImage: `url(${SECTION_BG_IMG})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='container w-full flex flex-col items-center'>
                <div className='w-full flex flex-col items-center gap-3'>
                    <motion.h1
                        className='text-3xl font-semibold md:text-5xl md:font-bold'
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        viewport={{ once: true }}
                    >
                        {WHY_US_TITLE}
                    </motion.h1>
                    <motion.span
                        className='text-center text-base text-gray-600'
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut', delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {WHY_US_SUB_TITLE}
                    </motion.span>
                </div>
                <div className='w-full xl:max-w-6xl grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                    <motion.div
                        className='w-full max-w-80 h-40 py-1 flex flex-col items-center border-2 border-gray-500 rounded-md'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <span>
                            <i className='bx bx-user-check text-5xl'></i>
                        </span>
                        <div className='w-full flex flex-col items-center gap-1'>
                            <h2 className='text-xl font-medium'>{WHY_CHOOSE_US_POINT1.title}</h2>
                            <p className='text-center text-base text-gray-600'>{WHY_CHOOSE_US_POINT1.description}</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className='w-full max-w-80 h-40 py-1 flex flex-col items-center border-2 border-gray-500 rounded-md'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut', delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <span>
                            <i className="uil uil-shield-check text-5xl"></i>
                        </span>
                        <div className='w-full flex flex-col items-center gap-1'>
                            <h2 className='text-xl font-medium'>{WHY_CHOOSE_US_POINT2.title}</h2>
                            <p className='text-center text-base text-gray-600'>{WHY_CHOOSE_US_POINT2.description}</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className='w-full max-w-80 h-40 py-1 flex flex-col items-center border-2 border-gray-500 rounded-md'
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <span>
                            <i className='bx bx-calendar text-5xl' ></i>
                        </span>
                        <div className='w-full flex flex-col items-center gap-1'>
                            <h2 className='text-xl font-medium'>{WHY_CHOOSE_US_POINT3.title}</h2>
                            <p className='text-center text-base text-gray-600'>{WHY_CHOOSE_US_POINT3.description}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs