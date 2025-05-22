import React from "react";
import "../styles/price-section.css";

const PriceSection = ({ price = "880 грн" }) => {
  return (
    <div className="price-section">
      <div className="price-bg"></div>
      <div className="price-content">
        <span className="price-label">Ціна</span>
        <span className="price-value">{price}</span>
      </div>
      <div className="buy-btn">
        <div className="btn-bg">
          <span className="btn-text">Купити</span>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
