import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/main-page.css";

const ProductCard = ({ time, price, title, imageUrl }) => (
  <div className="item">
    <div className="overlap-4">
      {time && <div className="text-wrapper-10">{time}</div>}
      <div className="text-wrapper-11">До закінчення:</div>
      <div className="image-wrapper">
        <img className="image-8" src={imageUrl} alt={title} />
      </div>
      <div className="text-wrapper-12">{price}</div>
      <div className="text-wrapper-13">{title}</div>
    </div>
  </div>
);

const TopOffer = ({ price, title, imageUrl }) => (
  <div className="item">
    <div className="overlap-3">
      <div className="like-wrapper">
        <div className="like">
          <img className="image-8" src={imageUrl} alt={title} />
        </div>
      </div>
      <div className="text-wrapper-8">{price}</div>
      <div className="text-wrapper-9">{title}</div>
    </div>
  </div>
);

const MainPage = () => {
  const [topOffers, setTopOffers] = useState([]);
  const [auctionItems, setAuctionItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [offersRes, auctionRes] = await Promise.all([
          axios.get("https://your-backend.com/api/top-offers"),
          axios.get("https://your-backend.com/api/auction-ending-soon"),
        ]);
        setTopOffers(offersRes.data);
        setAuctionItems(auctionRes.data);
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main-page">
      <div className="div">
        <div className="categories">
          <div className="overlap">
            <div className="images">
              <img className="image-5" src="/images/woman.jpg" alt="Вона" />
              <img className="image-6" src="/images/man.jpg" alt="Він" />
              <img className="image-7" src="/images/children.jpg" alt="Діти" />
            </div>
            <div className="buttons">
              <div className="she">
                <div className="overlap-group">
                  <div className="text-wrapper-4">Вона</div>
                </div>
              </div>
              <div className="he">
                <div className="overlap-2">
                  <div className="rectangle"></div>
                  <div className="text-wrapper-5">Він</div>
                </div>
              </div>
              <div className="children">
                <div className="overlap-2">
                  <div className="rectangle"></div>
                  <div className="text-wrapper-6">Діти</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="p">Час аукціону спливає, не зволікай!</p>

        <img className="polygon" />
        <img className="polygon-2" />
        <div className="text-wrapper-7">ТОП ПРОПОЗИЦІЇ</div>
        <img className="polygon-3" />
        <img className="polygon-4" />

        {topOffers.map((offer, index) => (
          <TopOffer
            key={index}
            price={offer.price}
            title={offer.title}
            imageUrl={offer.imageUrl}
          />
        ))}

        {auctionItems.map((item, index) => (
          <ProductCard
            key={index}
            time={item.timeLeft}
            price={item.price}
            title={item.title}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
