import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './EnrollInfo.css';

const EnrollInfo = () => {
    const { serviceId} = useParams();

    return (
        <section className='enroll-section d-flex align-items-center'>
            <div className='container text-center'>
                <h3>Your Course Enroll Id is : {serviceId} </h3>
                <Link to='/checkout'>
                    <button className='common-btn mt-3'>Proced to Checkout</button>
                </Link>
            </div>
        </section>
    );
};

export default EnrollInfo;