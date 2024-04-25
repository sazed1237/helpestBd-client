import React from 'react';
import loginImg from '../../assets/login.png';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../../utils/variants';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm()
    const { singIn } = useAuth()
    const navigate = useNavigate()


    const onSubmit = (data) => {
        console.log(data)

        singIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log("loggedUser", loggedUser)

                reset()
                navigate('/')
            })
    }

    return (
        <div className='md:px-14 p-4 max-w-screen-2xl mx-auto mt-24'>
            <div>
                <div className='flex flex-col md:flex-row-reverse justify-between gap-10 items-center shadow-3xl py-24'>
                    {/* login image */}
                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}

                        className='md:mr-20'
                    >
                        <img src={loginImg} alt="" />
                    </motion.div>


                    {/* login in form */}
                    <motion.div
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}

                        className='w-full '
                    >
                        <motion.h3

                            variants={fadeIn("left", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}

                            className='text-center md:text-4xl text-2xl font-bold pt-4'
                        >
                            Login
                        </motion.h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='lg:w-1/2 px-4 mx-auto  pt-10 space-y-2'>

                                <div>
                                    <label htmlFor="email" className='text-sm pl-2 text-tartiary'>Email</label>
                                    <input
                                        placeholder='Email'
                                        // type='email'
                                        className='px-2 w-full rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'

                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Regular expression for a basic email format
                                                message: "Invalid email format. Make sure to include '@' and a domain",
                                            },
                                        })}
                                        aria-invalid={errors.email ? "true" : "false"}
                                    />
                                    {errors.email && <p role="alert" className='text-red-500 pl-2 text-sm'>{errors.email.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="password" className='text-sm pl-2 text-tartiary'>Password</label>
                                    <input
                                        placeholder='Password'
                                        type='password'
                                        className='px-2 w-full rounded-md border-0 py-1.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6'

                                        {...register("password", {
                                            required: 'Password is required',

                                        })}
                                        aria-invalid={errors.password ? "true" : "false"}
                                    />
                                    {errors.password && <p role="alert" className='text-red-500 pl-2 text-sm'>{errors.password.message}</p>}
                                </div>
                                <div className='flex flex-col '>
                                    <input className='btnPrimary' type="submit" value="Login" />
                                    <p className='text-center mb-5 mt-3'>Don't have an account? <span><Link className='text-secondary font-semibold' to={'/singup'}>Sing Up</Link></span></p>
                                    <hr />
                                </div>
                            </div>
                        </form>

                        <motion.div
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}

                            className='flex justify-center items-center mt-4'>
                            <SocialLogin></SocialLogin>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Login;