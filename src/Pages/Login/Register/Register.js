import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef =useRef('');
    const navigate = useNavigate();

    const handleRegisterSubmit = event =>{
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(name, email, password);
    }

    const navigateLogin = event =>{
        navigate('/login');
    }
    return (
        <section className='register-container'>
            <div className='container'>
                <h1 className='text-center text-primary pt-3'>Please Register</h1>
                <div className='form-container'> 
                    <form onSubmit={handleRegisterSubmit}>
                        <input ref={nameRef} type="text" name="name" id="name" placeholder='Your Name' required/>
                        <input ref={emailRef} type="email" name="email" id="email" placeholder='Your Email' required />
                        <input ref={passwordRef} type="password" name="password" id="password" placeholder='Your Password' required />
                        <input type="submit" value="Register" />
                    </form>
                    <p>Already have an Account? <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}>Login</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </section>
    );
};

export default Register;