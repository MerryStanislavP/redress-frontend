import React from "react";
import "../styles/seller-section.css";

const SellerSection = () => {
  return (
    <div className="seller-section">
      <div className="section-bg">
        <span className="section-title-2">Продавець</span>
        <div className="seller-info">
          <div className="seller-avatar">
            <div className="avatar-bg"></div>
          </div>
          <div className="seller-text">
            <span className="seller-name">ketrin28</span>
            <div className="seller-rating">
              <div className="star"></div>
              <span className="rating-count">65 оцінок</span>
            </div>
            <div className="trusted-seller">
              <div className="trusted-icon"></div>
              <span className="trusted-text">Надійний продавець</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerSection;
