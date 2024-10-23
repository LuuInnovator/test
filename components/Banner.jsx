import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner-content">
                <h1>Welcome to Your Perfect Stay</h1>
                <p>Book your stay and enjoy Luxury redefined!</p>
                <a href="/booking" className="cta-button">Book Now</a>
            </div>
        </section>
    );
};

export default Banner;
