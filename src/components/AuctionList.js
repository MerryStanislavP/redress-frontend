import React from "react";
import AuctionCard from "./AuctionCard";
import "../styles/auction-list.css";

const AuctionList = ({ auctions }) => {
  return (
    <div className="auction-list">
      {auctions.map((auction, index) => (
        <AuctionCard
          key={index}
          timeLeft={auction.timeLeft}
          price={auction.price}
          description={auction.description}
          imageSrc={auction.imageSrc}
          likeIcon={auction.likeIcon}
        />
      ))}
    </div>
  );
};

export default AuctionList;
