import React from 'react';
import { COMPANY_EMAIL, COMPANY_PHONE_NUMBER, CONTACT_US_FORM_TITLE, CONTACT_US_SUBTITLE, CONTACT_US_TITLE, SECTION_BG_IMG } from '../constants';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        message: ''
    };

    const validationSchema = Yup.object({
        first_name: Yup.string().required('First Name is required'),
        last_name: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        phone_number: Yup.string().required('Phone Number is required'),
        message: Yup.string().required('Message is required')
    });

    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
    };

    return (
        <section className='w-full' style={{ backgroundImage: `url(${SECTION_BG_IMG})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='w-full h-full flex justify-center bg-gradient-to-br from-blue-500/30 to-stone-900/40 py-24 px-5 lg:px-10'>
                <div className='container h-full flex flex-col items-center justify-around md:flex-row gap-10'>
                    <div className='w-full h-full max-w-sm'>
                        <div className='w-full flex flex-col items-start justify-center'>
                            <h1 className='text-4xl text-start md:text-5xl lg:text-6xl font-semibold text-yellow-500'>{CONTACT_US_TITLE}</h1>
                            <h3 className='text-sm md:text-base mt-2'>{CONTACT_US_SUBTITLE}</h3>
                            <div className='flex flex-col gap-3 mt-10'>
                                <div className='flex items-center gap-3 cursor-pointer hover:scale-110 duration-300' onClick={() => { window.location = `mailto:${COMPANY_EMAIL}` }}>
                                    <i className='bx bx-envelope text-xl text-yellow-400' ></i>
                                    <span className='text-sm'>{COMPANY_EMAIL}</span>
                                </div>
                                <Link to={`tel:${COMPANY_PHONE_NUMBER}`} className='flex items-center gap-3 hover:scale-110 duration-300'>
                                    <i className='bx bx-phone text-xl text-yellow-400' ></i>
                                    <span className='text-sm'>{COMPANY_PHONE_NUMBER}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:min-w-[550px] xl:max-w-[700px] h-full px-5 md:px-10 py-5 max-w-md bg-gradient-to-br from-blue-400/30 to-stone-800 rounded-md'>
                        <h1 className='text-2xl lg:text-3xl font-medium'>{CONTACT_US_FORM_TITLE}</h1>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form className='w-full grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 md:mt-10'>
                                    <div className='w-full flex flex-col'>
                                        <label htmlFor="first_name" className="text-base font-medium after:content-['*'] after:ml-0.5 after:text-red-500">First Name</label>
                                        <Field type="text" name="first_name" id="first_name" placeholder='John' className='py-2 rounded-md outline-none pl-3' />
                                        <ErrorMessage name="first_name" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className='w-full flex flex-col'>
                                        <label htmlFor="last_name" className="text-base font-medium after:content-['*'] after:ml-0.5 after:text-red-500">Last Name</label>
                                        <Field type="text" name="last_name" id="last_name" placeholder='Doe' className='py-2 rounded-md outline-none pl-3' />
                                        <ErrorMessage name="last_name" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className='w-full flex flex-col'>
                                        <label htmlFor="email" className="text-base font-medium">Email</label>
                                        <Field type="email" name="email" id="email" placeholder='info@example.com' className='py-2 rounded-md pl-3 outline-none' />
                                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className='w-full flex flex-col'>
                                        <label htmlFor="phone_number" className="text-base font-medium after:content-['*'] after:ml-0.5 after:text-red-500">Phone Number</label>
                                        <Field type="tel" name="phone_number" id="phone_number" placeholder='(+21) 123 456  586' className='py-2 rounded-md outline-none pl-3' />
                                        <ErrorMessage name="phone_number" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className='w-full flex flex-col lg:col-span-2'>
                                        <label htmlFor="message" className="text-base font-medium after:content-['*'] after:ml-0.5 after:text-red-500">Message</label>
                                        <Field as="textarea" name="message" id="message" placeholder='Message' cols="10" rows="5" className='resize-none rounded-md p-3 outline-none'></Field>
                                        <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className='w-full flex justify-start'>
                                        <button type='submit' className='py-2 px-6 bg-yellow-400 rounded-md font-medium cursor-pointer hover:bg-yellow-600' disabled={isSubmitting}>Send Message</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
