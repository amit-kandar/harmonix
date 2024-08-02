import React, { useEffect, useRef, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { BG_VIDEO, HERO_TYPING_TITLE, HERO_SUB_HEADING, NAVLINK_CONTACT_US } from '../constants';
import Typewriter from 'typewriter-effect';

// Lazy load components
const About = lazy(() => import('./About'));
const Courses = lazy(() => import('./Courses'));
const WhyUs = lazy(() => import('./WhyUs'));
const Data = lazy(() => import('../components/Data'));
const BookDemo = lazy(() => import('../components/BookDemo'));
const OurFaculties = lazy(() => import('../components/OurFaculties'));
const FAQ = lazy(() => import('../components/FAQ'));
const SuccessStories = lazy(() => import('../components/SuccessStories'));
const Subscribe = lazy(() => import('../components/Subscribe'));
const PricingPlan = lazy(() => import('./PricingPlan'));

function LazyVideo({ src, type, poster }) {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    videoElement.play();
                } else {
                    videoElement.pause();
                }
            });
        }, {
            threshold: 0.25
        });

        if (videoElement) {
            observer.observe(videoElement);
        }

        return () => {
            if (videoElement) {
                observer.unobserve(videoElement);
            }
        };
    }, []);

    return (
        <video ref={videoRef} src={src} type={type} poster={poster} muted loop preload="none" className='w-full h-screen bg-cover bg-center object-cover bg-no-repeat' />
    );
}
// className = 'w-full h-screen bg-cover bg-center object-cover bg-no-repeat'
function Home() {
    const videoSrc = BG_VIDEO;
    const videoType = "video/mp4";
    const posterSrc = "path/to/poster.jpg";

    return (
        <Suspense fallback={null}>
            <section className='relative min-h-screen flex p-5 md:p-10'>
                <div className="absolute inset-0 w-full h-full">
                    <LazyVideo src={videoSrc} type={videoType} poster={posterSrc} />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className='max-w-5xl h-full z-10 flex flex-col justify-center items-start px-3 sm:px-5 mt-32 md:mt-36'>
                    <div className='text-3xl md:text-5xl xl:text-6xl text-white font-bold mt-10'>
                        <Typewriter
                            options={{
                                strings: HERO_TYPING_TITLE,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <motion.div
                        className='mt-5 max-w-2xl'
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <p className='text-sm text-gray-200/40'>
                            {HERO_SUB_HEADING}
                        </p>
                    </motion.div>
                    <motion.div
                        className='mt-10 lg:mt-16'
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: 1, delay: 0.5 }}
                    >
                        <button type='button' className='px-8 py-3 bg-yellow-500 rounded-xl text-xl font-medium'>
                            <Link to={NAVLINK_CONTACT_US.path}>{NAVLINK_CONTACT_US.text}</Link>
                        </button>
                    </motion.div>
                </div>
            </section>
            <Courses />
            <PricingPlan />
            <WhyUs />
            <Data />
            <BookDemo />
            <About />
            <OurFaculties />
            <FAQ />
            <SuccessStories />
            <Subscribe />
        </Suspense>
    );
}

export default Home;