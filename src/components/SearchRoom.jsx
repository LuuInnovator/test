import React, { useState } from 'react';
import './styles/SearchRoom.css';

const SearchRoom = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomType, setRoomType] = useState('single');
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Tìm kiếm phòng với các thông tin:", {
      checkInDate,
      checkOutDate,
      roomType,
      numberOfGuests
    });
  };

  return (
    <div className="search-room">
      <h2>Tìm Kiếm Phòng</h2>
      <form className="search-form" onSubmit={handleSearch}>
        <div className="date-group">
          <div className="form-group">
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="single">Phòng Đơn</option>
            <option value="double">Phòng Đôi</option>
            <option value="suite">Suite</option>
          </select>
        </div>
        <div className="form-group">
          <select
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(e.target.value)}
          >
            <option value="1">1 Người</option>
            <option value="2">2 Người</option>
            <option value="3">3 Người</option>
            <option value="4">4 Người</option>
          </select>
        </div>
        <button type="submit">Tìm Kiếm</button>
      </form>
    </div>
  );
};

export default SearchRoom;
