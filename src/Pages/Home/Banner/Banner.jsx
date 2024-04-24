// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../../../utils/variants';



const Banner = ({ banner, heading, subHeading, btn1, btn2, hidden }) => {
    return (
        <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
            <div className='flex flex-col  md:flex-row-reverse items-center justify-between gap-12'>

                {/* banner image */}
                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <img src={banner} alt="" />
                </motion.div>


                {/* banner content */}
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}

                    className='md:w-3/4'
                >
                    <h1 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>
                        {heading}
                    </h1>
                    <p className='text-[#EBEBEB] text-2xl mb-8'>{subHeading}</p>

                    <div className='space-x-5 space-y-4'>
                        <button className='btnPrimary'>{btn1}</button>
                        <button className={`btnPrimary ${hidden ? 'hidden' : ''}`}>{btn2}</button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;