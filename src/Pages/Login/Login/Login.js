import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleLoginSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }

    const navigateRegiter = event =>{
        navigate('/register');
    }

    return (
        <section className='login-container'>
            <div className='container'>
                <h1 className='text-center text-primary pt-3'>Login</h1>
                <div className='form-container'> 
                    <form onSubmit={handleLoginSubmit}>
                        <input ref={emailRef} type="email" name="email" id="email" placeholder='Your Email' required />
                        <input ref={passwordRef} type="password" name="password" id="password" placeholder='Your Password' required />
                        <input type="submit" value="Login" />
                    </form>
                    <p>New to E-Tutor? <Link to='/register' className='text-primary text-decoration-none' onClick={navigateRegiter}>Please Register</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </section>
    );
};

export default Login;