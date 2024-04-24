import React, { useState } from 'react';
import PackageCard from '../../../components/PackageCard';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../../../utils/variants';


const Pricing = () => {

    const [isYearly, setIsYearly] = useState(false)

    const packages = [
        { _id: 1, name: "Start", monthlyPrice: 19, yearlyPrice: 299, description: "For teams who need more security, admin control, support, and enterprise-grade procurement", green: 'src/assets/green.png', pink: 'src/assets/pink.png' },
        { _id: 2, name: "Advance", monthlyPrice: 39, yearlyPrice: 399, description: "For teams who need more security, admin control, support, and enterprise-grade procurement", green: 'src/assets/green.png', pink: 'src/assets/pink.png' },
        { _id: 3, name: "Premium", monthlyPrice: 69, yearlyPrice: 499, description: "For teams who need more security, admin control, support, and enterprise-grade procurement", green: 'src/assets/green.png', pink: 'src/assets/pink.png' },
    ]

    return (
        <div className='py-10' id='pricing'>
            <div>

                <div className='text-center'>
                    <h2 className='md:text-4xl text-primary font-bold text-3xl mb-2'>Pick the perfect plan for your team</h2>
                    <p className='text-base text-tartiary w-2/3 mx-auto px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eaque veritatis libero. Omnis, facere hic?</p>

                    {/* toggle pricing */}
                    <div className='mt-16'>
                        <label htmlFor="toggle" className='inline-flex items-center cursor-pointer'>
                            <span className='font-bold text-xl mr-8'>Monthly</span>
                            <div className='h-6 w-14 bg-gray-300 rounded-full transition duration-200 ease-in-out'>
                                <div className={`h-6 w-6 rounded-full bg-secondary ${isYearly ? "bg-primary ml-8" : ""}`}></div>
                            </div>
                            <span className='font-bold text-xl ml-8 '>Yearly</span>
                        </label>
                        <input type="checkbox" id='toggle' className='hidden' checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
                    </div>

                    {/* pricing cards */}
                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}

                        className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 w-11/12 mx-auto'>
                        {
                            packages.map((pkg, index) => <PackageCard
                                key={pkg._id}
                                pkg={pkg}
                                index={index}
                                isYearly={isYearly}
                            ></PackageCard>)
                        }
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Pricing;