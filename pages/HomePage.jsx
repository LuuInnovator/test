import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import RoomSearch from '../components/RoomSearch';
import FeatureRooms from '../components/FeatureRooms';
import CustomerReviews from '../components/CustomerReviews';
import HotelAmenities from '../components/HotelAmenities';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <Header />
            <Banner />
            <RoomSearch />
            <FeatureRooms />
            <CustomerReviews />
            <HotelAmenities />
            <Footer />
        </>
    );
};

export default HomePage;
