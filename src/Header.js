import React from "react";
import "./styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="v162_3">
      {/* Общий хедер для всех страниц */}
      <div className="v162_4">
        <div className="search-icon"></div>
        <div className="like-icon"></div>
        <div className="profile-icon"></div>
        <Link to="/help">
          <div className="help-icon" title="Допомога"></div>
        </Link>
      </div>
      <div className="logo"></div>
      <nav className="menu">
        <span className="he-option">Він</span>
        <span className="she-option">Вона</span>
        <span className="children-option">Діти</span>
      </nav>
    </header>
  );
};

export default Header;
