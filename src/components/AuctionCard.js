import React from "react";
import "../styles/auction-card.css";

const AuctionCard = ({ timeLeft, price, description, imageSrc, likeIcon }) => {
  return (
    <div className="auction-card">
      <div className="v46_164">
        <div className="auction-card__header">
          <div className="auction-card__label">До закінчення:</div>
          <div className="auction-card__timer-block">
            <span className="auction-card__time-left">{timeLeft}</span>
          </div>
        </div>
        <div
          className="auction-card__image"
          style={{ backgroundImage: `url(${imageSrc})` }}
        ></div>
        <div className="auction-card__details">
          <span className="auction-card__price">{price} грн</span>
          <span className="auction-card__description">{description}</span>
        </div>
        <div className="v46_121_like">
          <div className="v46_120_like"></div>
          <div className="v46_118_like"></div>
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;
