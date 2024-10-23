import React from 'react';
import './styles/CustomerReviews.css';

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Nguyễn Văn A",
      rating: 5,
      comment: "Khách sạn tuyệt vời! Dịch vụ hoàn hảo và phòng ốc rất sạch sẽ.",
    },
    {
      name: "Trần Thị B",
      rating: 4,
      comment: "Khách sạn đẹp, vị trí thuận lợi nhưng đồ ăn còn cần cải thiện.",
    },
    {
      name: "Lê Văn C",
      rating: 5,
      comment: "Trải nghiệm thật tuyệt! Nhân viên rất thân thiện và nhiệt tình.",
    },
  ];

  return (
    <div className="customer-reviews">
      <h2>Đánh Giá Khách Hàng</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-header">
              <h3>{review.name}</h3>
              <div className="rating">
                {Array.from({ length: review.rating }, (_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
            </div>
            <p className="review-comment">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
