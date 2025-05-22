import React from "react";
import "../styles/product-page.css";
import ProductGallery from "../components/ProductGallery"; // Import the new component
import PriceSection from "../components/PriceSection";
import TagsContainer from "../components/TagsContainer";
import LocationSection from "../components/LocationSection";
import SellerSection from "../components/SellerSection";
import DescriptionSection from "../components/DescriptionSection";
import BiddingInfo from "../components/BiddingInfo";

export default function ProductPage() {
  return (
    <div className="container-2">
      <ProductGallery />
      <span className="product-title">Жакет строгий на гудзиках Mango</span>
      <TagsContainer />
      <DescriptionSection />
      <LocationSection />
      <div className="action-buttons">
        <div className="like-btn"></div>
      </div>
      <BiddingInfo />
      <SellerSection />
      <span className="post-date">25.03.2025, 21:01:00</span>
    </div>
  );
}
