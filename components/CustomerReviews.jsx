import React from 'react';
import './CustomerReviews.css';

const CustomerReviews = () => {
    return (
        <section className="customer-reviews">
            <h2>What Our Guests Say</h2>
            <div className="review">
                <p>"Amazing stay, will definitely return!" - John Doe</p>
            </div>
            <div className="review">
                <p>"The best hotel experience ever!" - Jane Smith</p>
            </div>
        </section>
    );
};

export default CustomerReviews;
