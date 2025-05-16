import React from "react";
import "../styles/сatalog-card.css";

const CatalogCard = ({ price, title, imageUrl, isAuction }) => {
  return (
    <div className="catalog-card">
      <div className="card-container">
        <div className="card-background"></div>
        <div 
          className="catalog-image" 
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="price-row">
          <span className="catalog-price">{price} грн</span>
          {isAuction && <span className="auction-label">Аукціон</span>}
        </div>
        <span className="catalog-title">{title}</span>
        <div className="like-button">
          <div className="like-icon2"></div>
        </div>
      </div>
    </div>
  );
};

export default CatalogCard;