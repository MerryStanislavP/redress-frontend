import React from "react";
import "../styles/main-page.css";
import ProductList from "../components/ProductList";
import AuctionList from "../components/AuctionList";
import dressImg from "../images/main-page/v30_108.png";

export default function MainPage() {
  const products = [
    {
      price: "15000",
      title: "Весільна сукня",
      imageUrl: dressImg,
    },
    {
      price: "12000",
      title: "Сукня вечірня",
      imageUrl: dressImg,
    },
    {
      price: "10000",
      title: "Костюм чоловічий",
      imageUrl: dressImg,
    },
    {
      price: "18000",
      title: "Сукня для гостей",
      imageUrl: dressImg,
    },
  ];
  const auctions = [
    {
      timeLeft: "12:35:55",
      price: "780",
      description: "Жовта сукня з візер...",
      imageSrc: dressImg,
      likeIcon: "../images/like.png",
    },
    {
      timeLeft: "08:12:44",
      price: "950",
      description: "Сині джинси з потертостями",
      imageSrc: dressImg,
      likeIcon: "../images/like.png",
    },
    {
      timeLeft: "15:20:09",
      price: "1150",
      description: "Червоний пуховик для зими",
      imageSrc: dressImg,
      likeIcon: "../images/like.png",
    },
    {
      timeLeft: "10:50:30",
      price: "650",
      description: "Кросівки на платформі",
      imageSrc: dressImg,
      likeIcon: "../images/like.png",
    },
    {
      timeLeft: "10:50:30",
      price: "650",
      description: "Кросівки на платформі",
      imageSrc: dressImg,
      likeIcon: "../images/like.png",
    },
  ];
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Inria+Serif&display=swap"
        rel="stylesheet"
      />
      <div className="gallery-wrapper">
        <div className="gallery">
          <div className="image-block image-woman">
            <span className="label">Вона</span>
          </div>
          <div className="image-block image-man">
            <span className="label">Він</span>
          </div>
          <div className="image-block image-kids">
            <span className="label">Діти</span>
          </div>
        </div>
      </div>
      <div>
        <span className="v30_33">ТОП ПРОПОЗИЦІЇ</span>
        <div className="name"></div>
        <div className="product-list-wrapper">
          <ProductList products={products} />
        </div>
      </div>
      <span className="v30_106">Час аукціону спливає, не зволікай!</span>
      <div>
        <AuctionList auctions={auctions} />
      </div>
    </>
  );
}
