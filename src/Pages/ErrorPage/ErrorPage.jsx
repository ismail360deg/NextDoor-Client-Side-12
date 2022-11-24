import React from 'react';
import { Link } from 'react-router-dom';
import errorPage from '../../assets/76706-404-error-page.gif'

const ErrorPage = () => {
    return (
        <section className="flex items-center h-full sm:p-16 bg-gray-50 text-gray-800">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                <img className='w-3/4' src={errorPage} alt="" />
                <p className="text-3xl">Looks like our services are currently offline</p>
                <Link to='/' rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded bg-lime-500 text-gray-50">Back to homepage</Link>
            </div>
        </section>
    );
};

export default ErrorPage;