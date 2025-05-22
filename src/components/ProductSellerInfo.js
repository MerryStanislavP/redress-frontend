// components/ProductSellerInfo.js
import React from "react";
import PropTypes from "prop-types";
import "../styles/product-seller-info.css"

const ProductSellerInfo = ({
  productName = "Жакет строгий на гудзиках Mango",
  price = "880 грн",
  sellerName = "ketrin28",
}) => {
  return (
    <div className="product-seller-container">
      <span className="order-title">Оформити замовлення</span>
      
      <div className="seller-info-container">
        <span className="seller-label">Продавець:</span>
        <div className="seller-block">
          <div className="seller-avatar">
            <div className="avatar-icon"></div>
          </div>
          <span className="seller-nickname">{sellerName}</span>
        </div>
      </div>

      <div className="product-card">
        <div className="product-content">
          <div className="product-image"></div>
          <span className="product-name">{productName}</span>
        </div>
        <span className="product-price">{price}</span>
      </div>
    </div>
  );
};

ProductSellerInfo.propTypes = {
  productName: PropTypes.string,
  price: PropTypes.string,
  sellerName: PropTypes.string,
};

export default ProductSellerInfo;