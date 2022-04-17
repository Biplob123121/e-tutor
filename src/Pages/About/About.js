import React from 'react';
import personal from '../../pic/personal.png';
import './About.css';

const About = () => {
    return (
        <section className='about-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-6 d-flex align-items-center'>
                        <div>
                            <h5>I am Biplob Kumar. I have completed my BSC in Computer Science and Engineering(CSE) from Rajshahi University of Engineering and Technology(RUET).</h5>
                            <br />
                            <h5>Now, I am a Web Developer and Tutor. I have provided some online course related to Web Development and Programming.</h5>
                            <br />
                            <h6>My Email : biplobkb123@gmail.com</h6>
                            <h6>Phone no : 01750-659-659</h6>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6 d-flex align-items-center justify-content-center'>
                        <img className='about-img' src={personal} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;