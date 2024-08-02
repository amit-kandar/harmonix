import React from 'react';
import { FAQ_SUB_TITLE, FAQ_TITLE, SECTION_BG_IMG } from '../constants';
import { FAQDetails } from '../utils/FAQDetails'
import FAQCard from './FAQCard';
import { motion } from 'framer-motion';

function FAQ() {
    return (
        <section className='w-full' style={{ backgroundImage: `url(${SECTION_BG_IMG})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='w-full h-full flex justify-center bg-blue-900/30'>
                <div className='w-full h-full py-10 px-5 lg:px-28'>
                    <div className='flex flex-col items-center'>
                        <motion.h1
                            className='text-4xl md:text-5xl lg:text-6xl text-black font-medium mb-2'
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            viewport={{ once: true }}
                        >
                            {FAQ_TITLE}
                        </motion.h1>
                        <motion.h3
                            className='text-sm sm:text-base text-center font-medium text-yellow-600'
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            viewport={{ once: true }}
                        >
                            {FAQ_SUB_TITLE}
                        </motion.h3>
                    </div>
                    <div className='w-full flex justify-center mt-12'>
                        <div className='w-fit h-full grid grid-cols-1 place-items-start gap-8'>
                            {
                                FAQDetails.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1, ease: 'easeInOut' }}
                                        viewport={{ once: true }}
                                    >
                                        <FAQCard question={item.question} answer={item.answer} index={index} />
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ