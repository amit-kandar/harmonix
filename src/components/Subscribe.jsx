import React from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { SECTION_BG_IMG, SUBSCRIBE_BUTTON_TEXT, SUBSCRIBE_PLACEHOLDER, SUBSCRIBE_SUBTITLE, SUBSCRIBE_TITLE } from '../constants';

function Subscribe() {
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required')
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values.email);
            resetForm();
        }
    });

    return (
        <section className='w-full h-60' style={{ backgroundImage: `url(${SECTION_BG_IMG})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='w-full h-full flex justify-center flex-col px-5 md:px-10 xl:px-20 py-10 lg:py-16 bg-[#1c417f]'>
                <div className='w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-5'>
                    <div className='flex flex-col items-start gap-3'>
                        <motion.h1
                            className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-yellow-500'
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            viewport={{ once: true }}
                        >
                            {SUBSCRIBE_TITLE}
                        </motion.h1>
                        <motion.h3
                            className='text-sm md:text-base text-white'
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            {SUBSCRIBE_SUBTITLE}
                        </motion.h3>
                    </div>
                    <motion.form
                        className='border border-black rounded-md relative' onSubmit={formik.handleSubmit}
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        viewport={{ once: true }}
                    >
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className={`pl-3 w-44 sm:w-52 md:w-60 lg:w-72 sm:pl-5 py-3 outline-none rounded-s-md ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-black'}`}
                            placeholder={SUBSCRIBE_PLACEHOLDER}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        <button type='submit' className='px-2 md:px-6 py-3 bg-yellow-400 rounded-e-md'>{SUBSCRIBE_BUTTON_TEXT}</button>
                        {formik.touched.email && formik.errors.email ? (
                            <div className='text-red-500 absolute top-full mt-1'>{formik.errors.email}</div>
                        ) : null}
                    </motion.form>
                </div>
            </div>
        </section>
    )
}

export default Subscribe;