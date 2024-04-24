import React from 'react';
import cardImg from '../../../assets/cardImg.png';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../../../utils/variants';



const Features = () => {
    return (
        <div className='my-28' id='feature'>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-10' >

                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}

                    className='lg:w-1/4'
                >
                    <h2 className='text-3xl text-primary font-bold lg:w-1/2 mb-3'>Why we are Better than others</h2>
                    <p className='text-base text-tartiary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsa dolorem dolore enim explicabo. Enim omnis unde at culpa molestias. Similique, eaque quidem ipsam dolorum repellat sapiente id quaerat. Blanditiis.</p>

                </motion.div>

                {/* Features card */}
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.4 }}

                    className='w-full lg:w-3/4'
                >
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        <div className=' h-96 bg-[rgba(255,255,255,0.04)] shadow-3xl rounded-[35px] flex flex-col items-center justify-center p-8 hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                            <img src={cardImg} alt="" className='w-40' />
                            <h1 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Lorem, ipsum dolor. </h1>
                            <p className='text-base text-tartiary text-center pt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, culpa.</p>
                        </div>
                        <div className=' h-96 bg-[rgba(255,255,255,0.04)] shadow-3xl rounded-[35px] flex flex-col items-center justify-center p-8 hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16'>
                            <img src={cardImg} alt="" className='w-40' />
                            <h1 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Lorem, ipsum dolor. </h1>
                            <p className='text-base text-tartiary text-center pt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, culpa.</p>
                        </div>
                        <div className=' h-96 bg-[rgba(255,255,255,0.04)] shadow-3xl rounded-[35px] flex flex-col items-center justify-center p-8 hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                            <img src={cardImg} alt="" className='w-40' />
                            <h1 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Lorem, ipsum dolor. </h1>
                            <p className='text-base text-tartiary text-center pt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, culpa.</p>
                        </div>
                    </div>
                </motion.div>


            </div>
        </div>
    );
};

export default Features;