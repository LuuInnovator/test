import React from 'react';
import './styles/HotelAmenities.css';

const HotelAmenities = () => {
  const amenities = [
    {
      id: 1,
      name: 'Hồ Bơi',
      description: 'Hồ bơi ngoài trời với không gian thư giãn.',
      icon: '🌊', // Có thể thay thế bằng biểu tượng hoặc hình ảnh
    },
    {
      id: 2,
      name: 'Spa',
      description: 'Dịch vụ spa thư giãn với chuyên gia hàng đầu.',
      icon: '💆‍♀️',
    },
    {
      id: 3,
      name: 'Phòng Gym',
      description: 'Phòng gym hiện đại với thiết bị đầy đủ.',
      icon: '🏋️‍♂️',
    },
    {
      id: 4,
      name: 'Wifi Miễn Phí',
      description: 'Kết nối wifi miễn phí trong toàn bộ khách sạn.',
      icon: '📶',
    },
    {
      id: 5,
      name: 'Nhà Hàng',
      description: 'Nhà hàng phục vụ các món ăn đặc sản địa phương.',
      icon: '🍽️',
    },
  ];

  return (
    <div className="hotel-amenities">
      <h2>Tiện Ích Khách Sạn</h2>
      <div className="amenities-list">
        {amenities.map(amenity => (
          <div className="amenity-card" key={amenity.id}>
            <div className="icon">{amenity.icon}</div>
            <h3>{amenity.name}</h3>
            <p>{amenity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelAmenities;
