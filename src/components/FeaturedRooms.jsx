import React from 'react';
import './styles/FeaturedRooms.css';

const FeaturedRooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'Phòng Đơn Sang Trọng',
      description: 'Phòng đơn với nội thất hiện đại, đầy đủ tiện nghi.',
      image: '../assets/images/room1.jpg',
      price: '$100',
    },
    {
      id: 2,
      name: 'Phòng Đôi Ấm Cúng',
      description: 'Phòng đôi thích hợp cho các cặp đôi với không gian thoải mái.',
      image: '../assets/images/room2.jpg',
      price: '$150',
    },
    {
      id: 3,
      name: 'Phòng Gia Đình Rộng Rãi',
      description: 'Phòng gia đình lớn, phù hợp cho nhóm đông người.',
      image: '../assets/images/room3.jpg',
      price: '$200',
    },
  ];

  return (
    <div className="featured-rooms">
      <h2>Chỗ Nghỉ Nổi Bật</h2>
      <div className="room-list">
        {rooms.map(room => (
          <div className="room-card" key={room.id}>
            <img src={room.image} alt={room.name} />
            <div className="room-info">
              <h3>{room.name}</h3>
              <p>{room.description}</p>
              <span className="price">{room.price}</span>
              <button>Đặt Ngay</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRooms;
