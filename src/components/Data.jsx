import React, { useEffect, useRef, useState } from 'react';
import { SECTION_BG_IMG, CHAPTERS_ICON, QUESTIONS, NOTES, CONCEPT_MAPS, DATA_CHAPTERS, DATA_QUESTIONS, DATA_NOTES, DATA_CONCEPT_MAP, TOTAL_CONCEPT_MAP, TOTAL_NOTES, TOTAL_CHAPTERS, TOTAL_QUESTIONS } from '../constants';
import DynamicCounter from './DynamicCounter';

const items = [
    { icon: CHAPTERS_ICON, data: DATA_CHAPTERS, total: TOTAL_CHAPTERS, initial: 50 },
    { icon: QUESTIONS, data: DATA_QUESTIONS, total: TOTAL_QUESTIONS, initial: 1000 },
    { icon: NOTES, data: DATA_NOTES, total: TOTAL_NOTES, initial: 300 },
    { icon: CONCEPT_MAPS, data: DATA_CONCEPT_MAP, total: TOTAL_CONCEPT_MAP, initial: 90 }
];

function DataCard({ item }) {
    const ref = useRef();
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;

        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div ref={ref} className='flex flex-col items-center gap-3'>
            <div className='w-20 h-20 flex justify-center items-center rounded-md bg-violet-300/50'>
                <img src={item.icon} alt="icon" className='w-10 h-10' />
            </div>
            <div className='flex flex-col items-center gap-1'>
                <h1 className='text-xl text-yellow-500 font-medium'>{item.data}</h1>
                <span className='text-4xl font-semibold text-white'>
                    {isInView && <DynamicCounter initialValue={item.initial} targetValue={item.total} />}
                </span>
            </div>
        </div>
    );
}

function Data() {
    return (
        <section className='w-full h-auto' style={{ backgroundImage: `url(${SECTION_BG_IMG})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='w-full h-full flex justify-center' style={{ backgroundColor: 'rgba(28, 65, 127, 0.80)' }}>
                <div className='container max-w-6xl py-16 grid gap-10 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    {items.map((item, index) => (
                        <DataCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Data;