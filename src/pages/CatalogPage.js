import "../styles/catalog-page.css";
import ProductList from "../components/ProductList";
import AuctionList from "../components/AuctionList";
import React, { useState, useEffect } from 'react';
import Filters from "../components/Filters";
import Search from "../components/Search";
import SortSelector from "../components/SortSelector";
import dressImg from "../images/main-page/v30_108.png";
import CatalogList from "../components/CatalogList";

const sortOptions1 = [
    "За популярністю",
    "Дешевше",
    "Дорожче",
    "За новинками"
  ];
  
  const sortOptions2 = [
    "Всі оголошення",
    "Аукціон",
    "Звичайні оголошення"
  ];

export default function CatalogPage() {
    const [sort1, setSort1] = useState(sortOptions1[0]);
  const [sort2, setSort2] = useState(sortOptions2[0]);

  const handleReset = () => {
    setSort1(sortOptions1[0]);
    setSort2(sortOptions2[0]);
  };
  
  const items = [
    {
      price: "15000",
      title: "Весільна сукня",
      imageUrl: dressImg,
      isAuction: true // Це товар на аукціоні
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
      isAuction: true // Це товар на аукціоні
    },
    {
      price: "18000",
      title: "Сукня для гостей",
      imageUrl: dressImg,
    },
    {
      price: "15000",
      title: "Весільна сукня",
      imageUrl: dressImg,
      isAuction: true // Це товар на аукціоні
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
      isAuction: true // Це товар на аукціоні
    },
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
      isAuction: true // Це товар на аукціоні
    },
    {
      price: "18000",
      title: "Сукня для гостей",
      imageUrl: dressImg,
    },
    {
      price: "15000",
      title: "Весільна сукня",
      imageUrl: dressImg,
      isAuction: true // Це товар на аукціоні
    },
    {
      price: "12000",
      title: "Сукня вечірня",
      imageUrl: dressImg,
      isAuction: true // Це товар на аукціоні
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
      isAuction: true // Це товар на аукціоні
    },
  ];
    
  // return (
  //   <>
  //     <link
  //       href="https://fonts.googleapis.com/css?family=Inria+Serif&display=swap"
  //       rel="stylesheet"
  //     />
  //         <Filters />
  //         <Search />
  //         <SortSelector
  //       options={sortOptions1}
  //       active={sort1}
  //       setActive={setSort1}
  //       variant="default"
  //     />
  //     <SortSelector
  //       options={sortOptions2}
  //       active={sort2}
  //       setActive={setSort2}
  //       variant="reverse"
  //     />

  //     <button className="reset-filters-btn" onClick={handleReset}>
  //       Скинути всі фільтри
  //     </button>

  //     <div className="product-list-wrapper">
  //         <ProductList products={products} />
  //       </div>
  //   </>
  // );

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Inria+Serif&display=swap"
        rel="stylesheet"
      />
      <div className="container">
        <div className="filters">
          <Filters />
        </div>
        
        <div className="content-area">
          <div className="search-sort-row">
            {/* <div className="search">
              <Search />
            </div> */}
            <Search />
            <SortSelector
              options={sortOptions1}
              active={sort1}
              setActive={setSort1}
              variant="default"
            />
          </div>
          
          <div className="sort-reset-row">
            <SortSelector
              options={sortOptions2}
              active={sort2}
              setActive={setSort2}
              variant="reverse"
            />
            <button className="reset-filters-btn" onClick={handleReset}>
              Скинути всі фільтри
            </button>
          </div>
          
          <div>
        <CatalogList items={items} />
      </div>
      
        </div>
      </div>
    </>
  );
  }
  