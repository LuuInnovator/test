import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import AboutHotel from './components/AboutHotel';
import SearchRoom from './components/SearchRoom';
import FeaturedRooms from './components/FeaturedRooms';
import CustomerReviews from './components/CustomerReviews';
import HotelAmenities from './components/HotelAmenities';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AboutHotel />
      <SearchRoom />
      <FeaturedRooms />
      <CustomerReviews />
      <HotelAmenities />
      <Footer />
    </div>
  );
}

export default App;
