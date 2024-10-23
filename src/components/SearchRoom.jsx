import React, { useState } from 'react';
import './styles/SearchRoom.css';

const SearchRoom = () => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomType, setRoomType] = useState('Phòng Đơn');
  const [guestCount, setGuestCount] = useState(1);

  const handleSearch = (e) => {
    e.preventDefault();
    // Logic xử lý tìm kiếm phòng
    console.log("Tìm kiếm phòng với thông tin:", { location, checkInDate, checkOutDate, roomType, guestCount });
  };

  return (
    <div className="search-room">
      <form onSubmit={handleSearch} className="search-form">
        <div className="form-group">
          <label htmlFor="location">Điểm đến:</label>
          <input
            type="text"
            id="location"
            placeholder="Nhập điểm đến hoặc khách sạn"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="check-in">Ngày Nhận Phòng:</label>
          <input
            type="date"
            id="check-in"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="check-out">Ngày Trả Phòng:</label>
          <input
            type="date"
            id="check-out"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="room-type">Loại Phòng:</label>
          <select
            id="room-type"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="Phòng Đơn">Phòng Đơn</option>
            <option value="Phòng Đôi">Phòng Đôi</option>
            <option value="Phòng Gia Đình">Phòng Gia Đình</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="guest-count">Số Khách:</label>
          <input
            type="number"
            id="guest-count"
            min="1"
            max="10"
            value={guestCount}
            onChange={(e) => setGuestCount(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="search-button">Tìm Kiếm</button>
      </form>
    </div>
  );
};

export default SearchRoom;
