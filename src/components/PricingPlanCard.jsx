import React from 'react';

function PricingPlanCard({ data, isActive, setIsActive }) {
    const handleClick = () => {
        setIsActive(prevState => ({
            ...Object.fromEntries(Object.entries(prevState).map(([key]) => [key, false])),
            [data.id]: true
        }));
    };

    return (
        <div className={`w-full max-w-xs min-h-[600px] bg-gradient-to-br from-stone-950 to-stone-700 rounded-xl py-8 px-5 shadow-lg`} onClick={handleClick}>
            <div className='w-full flex flex-col items-start justify-center'>
                <h1 className='text-2xl md:text-3xl font-semibold text-yellow-400 tracking-wider'>{data.name}</h1>
                <h3 className='text-white/70 tracking-widest mt-2'>Save {data.saveAmount} every month</h3>
                <h1 className='text-5xl font-bold text-white mt-7'>{data.price}</h1>

                <button type='button' className={`w-full px-4 py-2 text-lg font-medium border-2 rounded-3xl border-yellow-400 mt-12 ${isActive[data.id] ? 'bg-yellow-400 text-black' : 'text-yellow-400'}`}>Get Started</button>

                <div className='w-full py-3 flex flex-col gap-3 items-start border-t border-yellow-500/50 mt-6'>
                    {
                        data.features.map((item, index) => (
                            <div className='flex items-center gap-3' key={index}>
                                <i className='bx bx-check-circle text-xl text-yellow-400'></i>
                                <h4 className='text-base text-white/70'>{item}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default PricingPlanCard;
