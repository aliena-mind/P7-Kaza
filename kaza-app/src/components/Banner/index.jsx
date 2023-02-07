import React from 'react';

function Banner(props) {
    return (
        <div className='banner-container'>
            <img src= {props.image} alt="BannerImage" className="banner-image" />
        </div>
    );
}

export default Banner;