import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="logo">Hotel Logo</div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <div className="auth-links">
                <a href="/login">Login</a> | <a href="/register">Register</a>
            </div>
        </header>
    );
};

export default Header;
