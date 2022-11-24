import React from 'react';
import banner1 from '../../../assets/banner-1.jpg'
import banner2 from '../../../assets/banner-2.jpg'
import banner3 from '../../../assets/banner-3.jpg'

const Banner = () => {
    return (
        <div className="carousel w-11/12 mx-auto mt-5 mb-12 ">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={banner1} className="w-full rounded-xl" alt='' />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='carousel-img '>
                    <img src={banner2} className="w-full rounded-xl" alt='' />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={banner3} className="w-full rounded-xl" alt='' />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>

    );
};

export default Banner;