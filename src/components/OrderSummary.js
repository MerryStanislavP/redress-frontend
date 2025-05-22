// components/OrderSummary.js
import React from "react";
import PropTypes from "prop-types";
import "../styles/order-summary.css";

const OrderSummary = ({
  productPrice = "880 грн",
  deliveryPrice = "За тарифами перевізника",
  totalPrice = "880 грн",
}) => {
  return (
    <div className="summary-card">
      <span className="summary-title">Разом</span>
      
      <div className="summary-section">
        <div className="summary-row">
          <span className="summary-label">Товар на суму:</span>
          <span className="summary-value">{productPrice}</span>
        </div>
      </div>

      <div className="summary-section">
        <div className="summary-row">
          <span className="summary-label">Вартість доставки:</span>
          <span className="summary-value">{deliveryPrice}</span>
        </div>
      </div>

      <div className="total-section">
        <div className="summary-row">
          <span className="total-label">До сплати:</span>
          <span className="total-value">{totalPrice}</span>
        </div>
      </div>

      <button className="pay-button">
        Сплатити
      </button>
    </div>
  );
};

OrderSummary.propTypes = {
  productPrice: PropTypes.string,
  deliveryPrice: PropTypes.string,
  totalPrice: PropTypes.string,
};

export default OrderSummary;
