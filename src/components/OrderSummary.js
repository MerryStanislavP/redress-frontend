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
    <div className="order-summary">
      <span className="v599_88">Разом</span>
      <span className="v599_89">Товар на суму:</span>
      <span className="v599_90">{productPrice}</span>
      <span className="v599_91">Вартість доставки:</span>
      <span className="v599_92">{deliveryPrice}</span>
      <span className="v599_93">До сплати:</span>
      <span className="v599_94">{totalPrice}</span>

      <div className="v599_95">
        <div className="v599_96">
          <div className="v599_97"></div>
        </div>
      </div>

      <span className="v1215_2">Сплатити</span>
    </div>
  );
};

OrderSummary.propTypes = {
  productPrice: PropTypes.string,
  deliveryPrice: PropTypes.string,
  totalPrice: PropTypes.string,
};

export default OrderSummary;
