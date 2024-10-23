import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Khám Phá</h3>
          <ul>
            <li><a href="#home">Trang Chủ</a></li>
            <li><a href="#about">Giới Thiệu</a></li>
            <li><a href="#services">Dịch Vụ</a></li>
            <li><a href="#contact">Liên Hệ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Thông Tin Liên Hệ</h3>
          <p>Email: info@hotel.com</p>
          <p>Điện thoại: +84 123 456 789</p>
        </div>
        <div className="footer-section">
          <h3>Theo Dõi Chúng Tôi</h3>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Khách Sạn. Bảo lưu mọi quyền.</p>
      </div>
    </footer>
  );
};

export default Footer;
