import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    return (
        <section className='login-container'>
            <div className='container'>
                <h1 className='text-center text-primary'>Login</h1>
                <div className='form-container'> 
                    <form >
                        <input type="email" name="email" id="" placeholder='Your Email' required />
                        <input type="password" name="passord" id="" placeholder='Your Password' required />
                        <input type="submit" value="Login" />
                    </form>
                    <p>New to E-Tutor? <span>Please Register</span></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </section>
    );
};

export default Login;