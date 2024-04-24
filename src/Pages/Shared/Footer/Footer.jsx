import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { FaFacebook, FaRegCopyright } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white'>
            <div className='my-12 flex flex-col md:flex-row gap-10'>

                <div className='md:w-1/2 space-y-8'>
                    <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-white'>helpestBd</a>
                    <p className='md:w-1/2 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis provident non, deleniti odio dolores unde asperiores voluptate voluptates beatae vero cumque molestias animi dolor modi. Quisquam, mollitia. Et?</p>
                    <div>
                        <input type="email" name='email' id='email' placeholder='Your Email'
                            className='bg-[#9a7af159] py-2 px-4 text-white rounded-md focus:outline-none' />
                        <input type="submit" value='Subscribe'
                            className='px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary transition-all duration-300 ' />
                    </div>
                </div>

                {/* Footer navigation */}
                <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>

                    <div className='space-y-4 mt-5 '>
                        <h2 className='text-2xl'>PlatForm</h2>
                        <ul className='space-y-3'>
                            <a href="/" className='block hover:text-gray-300' >Overview</a>
                            <a href="/" className='block hover:text-gray-300' >Features</a>
                            <a href="/" className='block hover:text-gray-300' >About</a>
                            <a href="/" className='block hover:text-gray-300' >Pricing</a>
                        </ul>
                    </div>

                    <div className='space-y-4 mt-5 '>
                        <h2 className='text-2xl'>Help</h2>
                        <ul className='space-y-3'>
                            <a href="/" className='block hover:text-gray-300' >How does it works?</a>
                            <a href="/" className='block hover:text-gray-300' >Where to ask quetions?</a>
                            <a href="/" className='block hover:text-gray-300' >How to play?</a>
                            <a href="/" className='block hover:text-gray-300' >What is needed for this?</a>
                        </ul>
                    </div>

                    <div className='space-y-4 mt-5 '>
                        <h2 className='text-2xl'>Contact</h2>
                        <ul className='space-y-3'>
                            <p href="/" className='hover:text-gray-300' >Overview</p>
                            <p href="/" className='hover:text-gray-300' >Features</p>
                            <p href="/" className='hover:text-gray-300' >About</p>
                            <p href="/" className='hover:text-gray-300' >Pricing</p>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />

            <div className='flex flex-col sm:flex-row sm:items-center gap-8 justify-between my-6'>
                <p className='flex items-center gap-2'><FaRegCopyright /> <span>Sazed Creation's 2024. All rights reserved.</span></p>
                <div className='flex space-x-3'>
                    <a href=""><FaFacebookSquare className='h-8 w-8 hover:-translate-y-3 transition-all duration-300  ' /> </a>
                    <a href=""><FaInstagramSquare className='h-8 w-8 hover:-translate-y-3 transition-all duration-300  ' /> </a>
                    <a href=""><FaTwitterSquare className='h-8 w-8 hover:-translate-y-3 transition-all duration-300  ' /> </a>
                    <a href=""><FaLinkedin className='h-8 w-8 hover:-translate-y-3 transition-all duration-300  ' /> </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;