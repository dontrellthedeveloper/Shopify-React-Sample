import React from 'react';
import BannerImage from '../../Assets/shopify-banner-1.jpg';
import '../../Styles/Banner.css';

export const Banner = () => {
    return(
        <img src={BannerImage} alt='Home Banner Image' className='HomeBanner'/>
    )
};