import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('students.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <section className='review-section p-3'>
            <div className='container'>
                <h2 className='p-3 text-center text-primary'>Student Reviews:</h2>
                <div className='review-container'>
                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;