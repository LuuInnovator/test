import React from 'react';
import './HotelAmenities.css';

const HotelAmenities = () => {
    return (
        <section className="hotel-amenities">
            <h2>Our Amenities</h2>
            <div className="amenities-list">
                <div className="amenity">
                    <img src="pool.jpg" alt="Swimming Pool" />
                    <p>Swimming Pool</p>
                </div>
                <div className="amenity">
                    <img src="spa.jpg" alt="Spa" />
                    <p>Spa & Wellness</p>
                </div>
                {/* Add more amenities */}
            </div>
        </section>
    );
};

export default HotelAmenities;
