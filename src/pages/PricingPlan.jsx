import React, { useState } from 'react';
import { PRICING_SECTION_SUBTITLE, PRICING_SECTION_TITLE, SECTION_BG_IMG } from '../constants';
import { pricingPlans } from '../utils/pricingPlans';
import PricingPlanCard from '../components/PricingPlanCard';
import { motion } from 'framer-motion';

function PricingPlan() {
    const [isActive, setIsActive] = useState({
        1: false,
        2: true,
        3: false
    });

    return (
        <div className='w-full' style={{ backgroundImage: `url(${SECTION_BG_IMG})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='w-full h-full flex justify-center bg-blue-400/40'>
                <div className="container flex flex-col items-center py-24 px-5 md:px-10 lg:px-20">
                    <h1 className='text-3xl lg:text-5xl font-medium text-gray-700'>{PRICING_SECTION_TITLE}</h1>
                    <span className='mt-3 text-base text-gray-500 lg:text-lg'>{PRICING_SECTION_SUBTITLE}</span>
                    <div className='w-full flex flex-wrap justify-center md:justify-center lg:justify-start xl:justify-center gap-10 mt-10 lg:mt-20'>
                        {
                            pricingPlans.map((item, index) => (
                                <motion.div
                                    initial={{ x: -200, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1, ease: 'easeInOut', delay: index * 0.5 }}
                                    viewport={{ once: true }}
                                    key={index}
                                >
                                    <PricingPlanCard data={item} isActive={isActive} setIsActive={setIsActive} />
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingPlan