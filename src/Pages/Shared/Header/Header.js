import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../pic/Education-Logo-Graphics-1-2.png';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogout = () =>{
        signOut(auth);
    }

    return (
        
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'><img className='title-logo' src={logo} alt="" />E-Tutor</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/checkout'>Checkout</Nav.Link>
                            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                            <Nav.Link as={Link} to='/about'>About</Nav.Link>
                            <NavDropdown title="Courses" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Web Development</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">SEO</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Graphics Design</NavDropdown.Item>
                                
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            { 
                                user?
                                <button className='bg-secondary border-0 text-white' onClick={handleLogout}>Logout</button>
                                :
                                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            }
                            <Nav.Link as={Link} to='/register'>
                                Register
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        
    );
};

export default Header;