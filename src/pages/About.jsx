import React from 'react';
import { motion } from "framer-motion"
import { ABOUT_SUB_HEADING, ABOUT_TITLE, SECTION_BG_IMG, ABOUT_IMG, aboutUsPoints } from '../constants';

function About() {
    return (
        <section className='w-full' style={{ backgroundImage: `url(${SECTION_BG_IMG})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='w-full h-full flex justify-center' style={{ backgroundColor: 'rgba(247, 252, 197, 0.3)' }}>
                <div className='w-full h-full flex flex-col md:flex-row justify-between items-center pt-10 md:pt-0 px-5 sm:px-8 lg:px-16'>
                    <div className="max-w-5xl lg:w-full h-full flex flex-col justify-start items-start py-10 xl:py-0">
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold text-gray-600"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            viewport={{ once: true }}
                        >
                            {ABOUT_TITLE}
                        </motion.h1>
                        <motion.span
                            className="text-lg text-start text-gray-500 mt-2"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            viewport={{ once: true }}
                        >
                            {ABOUT_SUB_HEADING}
                        </motion.span>
                        <div className='mt-5'>
                            {
                                aboutUsPoints.map((item, index) => {
                                    return (
                                        <motion.div
                                            className='flex items-center gap-3' key={index}
                                            initial={{ y: 100, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 1, ease: 'easeInOut', delay: index * 0.5 }}
                                            viewport={{ once: true }}
                                        >
                                            <i className='bx bx-check-square text-2xl'></i>
                                            <span className='text-gray-500 text-base'>{item}</span>
                                        </motion.div>
                                    )
                                })
                            }
                        </div>
                        <motion.div
                            className='mt-10 px-6 py-3 md:px-8 md:py-4 bg-yellow-500 rounded-lg cursor-pointer hover:bg-yellow-400'
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            viewport={{ once: true }}
                        >
                            <button type='button' className='text-base md:text-lg md:font-medium'>Get Started</button>
                        </motion.div>
                    </div>
                    <div className='w-full md:max-w-[500px] lg:min-w-[600px] xl:min-w-[800px] flex items-end'>
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            viewport={{ once: true }}
                        >
                            <img src={ABOUT_IMG} alt="About" className='w-full h-full' />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About