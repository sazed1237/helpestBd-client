import React, { useState } from 'react';
import { GrLanguage } from "react-icons/gr";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()
    const { user, logOut } = useAuth()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleLogin = () => {
        navigate('/login')
    }

    const handleLogOut = () => {
        logOut()
    }


    const navItems = <>
        <li className='hover:text-tartiary cursor-pointer'><Link to={'overview'} spy={true} smooth={true} offset={-100} activeClass='active' >Overview</Link></li>
        <li className='hover:text-tartiary cursor-pointer'><Link to={'feature'} spy={true} smooth={true} offset={-100} activeClass='active' >Feature</Link></li>
        <li className='hover:text-tartiary cursor-pointer'><Link to={'about'} spy={true} smooth={true} offset={-100} activeClass='active' >About</Link></li>
        <li className='hover:text-tartiary cursor-pointer'><Link to={'pricing'} spy={true} smooth={true} offset={-100} activeClass='active' >Pricing</Link></li>
    </>

    const userProfile = <>
        {
            user ? <>
                <button onClick={handleLogOut} className='bg-secondary px-4 text-white py-2 transition-all duration-300 rounded hover:bg-indigo-600 ' >Logout</button>
            </>
                : <>

                    <button onClick={handleLogin} className='bg-secondary px-4 text-white py-2 transition-all duration-300 rounded hover:bg-indigo-600 ' >Login</button>
                </>
        }


    </>

    return (
        <>
            <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 left-0 right-0 border-b'>
                <div className='container mx-auto flex items-center justify-between text-lg font-medium'>

                    <div className='flex space-x-14 items-center'>
                        {/* logo */}
                        <a href="/" className='text-2xl  text-primary flex items-center '><span>helpesBd</span></a>

                        {/* Menu full */}
                        <ul className='md:flex space-x-12  items-center text-primary text-xl hidden '>
                            {navItems}
                        </ul>
                    </div>

                    {/* language and button */}
                    <div className='md:flex items-center space-x-12 hidden'>
                        <a href="#" className='hidden md:flex items-center  hover:text-secondary space-x-2'><GrLanguage /><span>Language</span></a>
                        {userProfile}
                    </div>

                    {/* menu btn for mobile */}
                    <div className='md:hidden'>

                        <button onClick={toggleMenu} className=' text-primary focus:outline-none '>
                            {
                                isMenuOpen ? (<FaXmark className='w-6 h-6 text-lg' />) : (<FaBars className='w-6 h-6 text-lg' />)
                            }
                        </button>

                    </div>
                </div>
            </nav>

            <div className={`space-y-4 px-4 pt-20 pb-5 text-lg bg-secondary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                <ul className='space-y-4 text-white'>
                    {navItems}
                </ul>
                {userProfile}
            </div>

        </>

    );
};

export default Navbar;