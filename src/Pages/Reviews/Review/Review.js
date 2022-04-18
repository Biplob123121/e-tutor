import React from 'react';
import './Review.css';

const Review = ({review}) => {
    const {name, picture, rev} = review;
    return (
        <div className='review'>
            <img width={30} src={picture} alt="" />
            <h5>{name}</h5>
            <p>{rev}</p>
        </div>
    );
};

export default Review;