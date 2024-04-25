import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa6';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const { googleSingIn } = useAuth()
    const navigate = useNavigate()

    const handleGoogleSingIn = () => {
        googleSingIn()
            .then(result => {
                console.log(result.user)

                navigate('/')
            })
    }

    return (
        <div className='space-x-3'>
            <button onClick={handleGoogleSingIn}><FaGoogle className='h-8 w-8 hover:text-secondary hover:-translate-y-2 transition-all duration-300' /></button>
            <button><FaFacebookSquare className='h-8 w-8 hover:text-secondary hover:-translate-y-2 transition-all duration-300' /></button>
            <button><FaInstagramSquare className='h-8 w-8 hover:text-secondary hover:-translate-y-2 transition-all duration-300' /></button>
            <button><FaGithubSquare className='h-8 w-8 hover:text-secondary hover:-translate-y-2 transition-all duration-300' /></button>
        </div>
    );
};

export default SocialLogin;