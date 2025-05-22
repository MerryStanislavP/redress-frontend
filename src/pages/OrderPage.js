import React, { useState } from "react";
import "../styles/order-page.css";
import DeliveryOptions from "../components/DeliveryOptions";
import RecipientInfo from "../components/RecipientInfo";
import ProductSellerInfo from "../components/ProductSellerInfo";
import OrderSummary from "../components/OrderSummary";

const OrderPage = () => {
  return (
    <div className="order-container">
      <ProductSellerInfo
        productName="Жакет строгий на гудзиках Mango"
        price="880 грн"
        sellerName="ketrin28"
      />

      <DeliveryOptions />
      <RecipientInfo />

      <OrderSummary
        productPrice="880 грн"
        deliveryPrice="За тарифами перевізника"
        totalPrice="880 грн"
      />
    </div>
  );
};

export default OrderPage;
