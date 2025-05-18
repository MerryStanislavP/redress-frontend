import React from "react";
import CatalogCard from "./CatalogCard";
import "../styles/catalog-list.css";

const CatalogList = ({ items }) => {
  return (
    <div className="items-grid">
      {items.map((item, index) => (
        <CatalogCard
          key={index}
          price={item.price}
          title={item.title}
          imageUrl={item.imageUrl}
          isAuction={item.isAuction} // Додайте це поле в ваші тестові дані
        />
      ))}
    </div>
  );
};

export default CatalogList;