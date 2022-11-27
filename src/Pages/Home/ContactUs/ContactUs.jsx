import React from 'react';
import contact from '../../../assets/76882-contact-us.gif'

const ContactUs = () => {
    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  bg-gray-800 text-white mb-16">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl pt-2 pb-4 font-bold leading-tight lg:text-5xl">Contact Us</h2>
                </div>
                <img src={contact} alt="" className='w-3/4' />
            </div>
            <form noValidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div>
                    <label for="name" className="text-sm">Full name</label>
                    <input id="name" type="text" placeholder="Enter Your Full Name" className="w-full p-3 rounded bg-gray-100" />
                </div>
                <div>
                    <label for="email" className="text-sm">Email</label>
                    <input id="email" type="email" placeholder="Enter Your Email" className="w-full p-3 rounded bg-gray-100"

                        data-temp-mail-org="1" />
                </div>
                <div>
                    <label for="message" className="text-sm">Message</label>
                    <textarea id="message" rows="3" placeholder="Write Your Message" className="w-full p-3 rounded bg-gray-100"></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-lime-600 text-gray-50">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;