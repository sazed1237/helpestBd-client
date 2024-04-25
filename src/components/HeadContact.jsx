import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { FaPhone, } from 'react-icons/fa6';
import { SiMinutemailer } from "react-icons/si";


const HeadContact = () => {
    return (
        <div className=' md:px-14 p-4 max-w-screen-2xl mx-auto bg-[#010851] text-white md:flex flex-col sm:flex-row sm:items-center gap-2 justify-between py-2 hidden'>

            <span className='flex items-center text-xs md:text-sm gap-2'><FaPhone /><a href="#">+880100000000</a> or <SiMinutemailer /> <a href="#">helpest@bd.com</a></span>

            <div className='flex space-x-3'>
                <a href=""><FaFacebookSquare className='md:h-6 md:w-6 hover:-translate-y-1 transition-all duration-300  ' /> </a>
                <a href=""><FaInstagramSquare className='md:h-6 md:w-6 hover:-translate-y-1 transition-all duration-300  ' /> </a>
                <a href=""><FaTwitterSquare className='md:h-6 md:w-6 hover:-translate-y-1 transition-all duration-300  ' /> </a>
                <a href=""><FaLinkedin className='md:h-6 md:w-6 hover:-translate-y-1 transition-all duration-300  ' /> </a>
            </div>
        </div>
    );
};

export default HeadContact;