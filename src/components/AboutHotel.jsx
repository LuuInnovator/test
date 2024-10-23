import React from 'react';
import './styles/AboutHotel.css';
import hotelImage from './assets/images/a3.jpg'; // Đường dẫn đến hình ảnh khách sạn

const AboutHotel = () => {
  return (
    <section className="about-hotel">
      <h2>Giới Thiệu Về Khách Sạn</h2>
      <p>
        Chúng tôi tự hào mang đến cho bạn một trải nghiệm nghỉ dưỡng tuyệt vời với những tiện nghi hiện đại và dịch vụ chăm sóc khách hàng chu đáo. Khách sạn của chúng tôi tọa lạc tại vị trí thuận lợi, gần các điểm tham quan nổi tiếng, hứa hẹn sẽ mang đến cho bạn một kỳ nghỉ đáng nhớ.
      </p>
      <img src={hotelImage} alt="Khách sạn" />
    </section>
  );
};

export default AboutHotel;
