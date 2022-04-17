import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../pic/banner.png';
import './Banner.css';

const Banner = () => {
    return (
        <section className='banner-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-6 d-flex align-items-center'>
                        <div>
                            <h1>Welcome to <span id='site-title'>E-Tutor</span></h1>
                            <h4>A Reliable Person can show you a Reliable Dream!!</h4>
                            <p>I am Biplob Kumar, a tutor of online program. I take some courses in online. I have provided this services for 5 years. You can join with me and enjoy with me...</p>
                            <Link to='/register'>
                                <button className='banner-btn'>JOIN NOW</button>
                            </Link>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6 d-flex align-items-center justify-content-center'>
                        <img className='banner-image' src={banner} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;