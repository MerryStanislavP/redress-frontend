import React from "react";
import ProductCard from "./ProductCard";
import "../styles/product-list.css";

const ProductList = ({ products }) => {
  return (
    <div className="product-container">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          price={product.price}
          title={product.title}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProductList;
