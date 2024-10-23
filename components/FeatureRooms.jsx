import React from 'react';
import './FeatureRooms.css';

const FeatureRooms = () => {
    return (
        <section className="feature-rooms">
            <h2>Featured Rooms</h2>
            <div className="room-list">
                <div className="room">
                    <img src="room1.jpg" alt="Room 1" />
                    <h3>Deluxe Room</h3>
                    <p>$150 per night</p>
                </div>
                <div className="room">
                    <img src="room2.jpg" alt="Room 2" />
                    <h3>Single Room</h3>
                    <p>$80 per night</p>
                </div>
                {/* Add more rooms */}
            </div>
        </section>
    );
};

export default FeatureRooms;
