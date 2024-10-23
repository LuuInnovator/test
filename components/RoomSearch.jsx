import React from 'react';
import './RoomSearch.css';

const RoomSearch = () => {
    return (
        <section className="room-search">
            <form>
                <div>
                    <label>Check-in Date</label>
                    <input type="date" />
                </div>
                <div>
                    <label>Check-out Date</label>
                    <input type="date" />
                </div>
                <div>
                    <label>Guests</label>
                    <input type="number" min="1" max="10" />
                </div>
                <div>
                    <button type="submit">Search</button>
                </div>
            </form>
        </section>
    );
};

export default RoomSearch;
