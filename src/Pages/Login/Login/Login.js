import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLoginSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const navigateRegiter = event => {
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