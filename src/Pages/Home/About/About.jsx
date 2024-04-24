import React from 'react';
import aboutImg from '../../../assets/FeatureBanner.png';
import aboutImg2 from '../../../assets/world.png';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../../../utils/variants';


const About = () => {
    return (
        <div className='space-y-10' id='about'>
            {/* First part */}
            <div className=' flex flex-col md:flex-row justify-between items-center gap-10'>
                {/* about image */}
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}

                    className='md:w-1/2' >
                    <img src={aboutImg} alt="" />
                </motion.div>

                {/* About Content */}
                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}

                    className='md:w-2/5'>
                    <h2 className='text-primary md:text-5xl text-3xl font-bold mb-4 leading-normal'>voluptatem quas nesciunt asperiores quasi illo?</h2>
                    <h4 className='text-secondary md:text-3xl text-xl font-semibold '>Our Mission</h4>
                    <p className='text-base text-tartiary pt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sit, molestiae modi nesciunt sequi nulla soluta doloremque quaerat atque enim aut adipisci tempora dolore magnam quasi magni voluptates. Illo, adipisci!</p>

                    <button className='btnPrimary mt-10'>Read More</button>
                </motion.div>
            </div>
            {/* 2nd part */}

            <div className=' flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
                {/* about image */}
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}

                    className='md:w-1/2' >
                    <img src={aboutImg2} alt="" />
                </motion.div>

                {/* About Content */}
                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}

                    className='md:w-2/5'>
                    <h2 className='text-primary md:text-5xl text-3xl font-bold mb-4 leading-normal'>nesciunt asperiores quasi illo?</h2>
                    <h4 className='text-secondary md:text-3xl text-xl font-semibold '>Our Vision</h4>
                    <p className='text-base text-tartiary pt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sit, molestiae modi nesciunt sequi nulla soluta doloremque quaerat atque enim aut adipisci tempora dolore magnam quasi magni voluptates. Illo, adipisci!</p>

                    <button className='btnPrimary mt-10'>Read More</button>
                </motion.div>
            </div>

        </div>
    );
};

export default About;