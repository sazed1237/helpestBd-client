import React from 'react';
import Banner from '../Banner/Banner';
import bannerImg from '../../../assets/banner.png';
import Features from '../Features/Features';
import About from '../About/About';
import Pricing from '../Pricing/Pricing';
import NewsLatter from '../NewsLatter/NewsLatter';

const Home = () => {
    return (
        <div className='md:px-14 p-4 max-w-screen-2xl mx-auto mt-24' id='overview'>
            <Banner
                banner={bannerImg}
                heading={'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                subHeading={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique totam nam blanditiis, beatae doloribus voluptatum numquam obcaecati, eum deleniti natus veritatis! Possimus nostrum consequatur, est autem minima tempore alias inventore eius incidunt voluptates consequuntur corporis, omnis provident soluta laborum velit similique ea iure deleniti atque consectetur. Obcaecati vitae nihil fugit!'}
                btn1={'Get Started'}
                btn2={'Discount'}
            ></Banner>
            <Features></Features>
            <About></About>
            <Pricing></Pricing>
            <NewsLatter></NewsLatter>
        </div>
    );
};

export default Home;