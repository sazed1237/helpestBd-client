import React from 'react';

const PackageCard = ({ pkg, index, isYearly }) => {
    return (
        <div className='border py-10 md:px-6 px-4 rounded-lg shadow-3xl'>
            <h3 className='text-3xl font-bold text-center'>{pkg.name}</h3>
            <p className='text-tartiary text-center my-5'>{pkg.description}</p>
            <p className='mt-5 text-center text-secondary text-4xl font-bold'>
                {
                    isYearly ? (`$${pkg.yearlyPrice}`) : (`$${pkg.monthlyPrice}`)
                }
                <span className='text-base text-tartiary font-medium'>/{isYearly ? 'year' : 'month'}</span >
            </p>
            <p>
                <ul className='mt-4 space-y-2 px-4'>
                    <li className='flex gap-2 items-center'><img src={pkg.green} alt="" className='w-4 h-4' /></li>
                    <li className='flex gap-2 items-center'><img src={pkg.green} alt="" className='w-4 h-4' /></li>
                    <li className='flex gap-2 items-center'><img src={pkg.pink} alt="" className='w-4 h-4' /></li>
                    <li className='flex gap-2 items-center'><img src={pkg.green} alt="" className='w-4 h-4' /></li>
                    <li className='flex gap-2 items-center'><img src={pkg.pink} alt="" className='w-4 h-4' /></li>
                </ul>
            </p>
            <div className='mt-5'>
                <button className='btnPrimary'>Get Started</button>
            </div>
        </div>
    );
};

export default PackageCard;