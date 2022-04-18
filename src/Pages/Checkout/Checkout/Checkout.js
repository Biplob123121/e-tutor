import React from 'react';
import './Checkout.css';

const Checkout = () => {
    return (
        <section className='chechout'>
            <div className='container text-center pt-3'>
                <h3>Pay Now For Your Enroll</h3>
                <h4>Add Your Information:</h4>
                <input type="text" placeholder='Your Name' />
                
                <input type="text" name="" id="" placeholder='Your Phone Number'/>
                
                <input type="text" name="" id="" placeholder='Payment Method'/>
                

                <button className='common-btn'>Confirm Payment</button>

            </div>
        </section>
    );
};

export default Checkout;