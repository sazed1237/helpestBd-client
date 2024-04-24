import React from 'react';
import Banner from '../Banner/Banner';
import bannerImg from '../../../assets/newsLatter.png';

const NewsLatter = () => {
    return (
        <div>
            <Banner
                banner={bannerImg}
                heading={'consectetur, adipisicing elit. Eligendi, ipsum!'}
                subHeading={'ipsum dolor sit amet consectetur adipisicing elit. Quo eos, at, aut placeat quibusdam quasi fuga nobis laborum perspiciatis, obcaecati rem quae accusantium nisi repudiandae!'}
                btn1={'I have a code'}
                hidden={'hidden'}
            ></Banner>


        </div>
    );
};

export default NewsLatter;