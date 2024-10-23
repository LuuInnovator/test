import React from 'react';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Khách Sạn</h1> {/* Thay thế bằng logo của bạn nếu có */}
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      <div className="auth">
        <button className="login">Đăng Nhập</button>
        <button className="register">Đăng Ký</button>
      </div>
    </header>
  );
};

export default Header;
